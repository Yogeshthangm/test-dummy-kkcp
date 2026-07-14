// Build web-ready derivatives of the client photo drop in public/kkcp/.
//
//   originals : public/kkcp/<1..5. FOLDER NAME>/**   (273MB, camera JPEGs up to 23MB, plus PDFs)
//   output    : public/kkcp/web/<group>/<slug>.jpg   (URL-safe, resized, compressed)
//   manifest  : public/kkcp/web/manifest.json        (original -> web path, + parsed faculty names)
//
// Originals are never modified, and are gitignored (per user decision).
// Uses `sips`, which ships with macOS — it handles JPEG/PNG/HEIC and rasterises PDF page 1.
//
// Usage: node optimize-images.cjs [--force]

const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const SRC = path.join(ROOT, "public", "kkcp");
const OUT = path.join(SRC, "web");
const FORCE = process.argv.includes("--force");

// Top-level folder -> short group slug used in the web path.
const GROUPS = {
  "1. HOME PAGE PHOTOS": "home",
  "2. ABOUT PAGE PHOTOS": "about",
  "3. CAMPUS LIFE PHOTOS": "campus",
  "4. COURSES REDIRECTION PHOTOS": "courses",
  "5. DEPARTMENT FACULTIES PHOTOS": "faculty",
};

// Faculty portraits are rendered small (cards/avatars); everything else can be a hero/banner.
const MAXPX = { faculty: 800, default: 1600 };
const QUALITY = 72;

// Groups whose images MUST be landscape. The course pages render the photo full-width in the
// Overview tab, so a portrait source (the client's D.Pharm shot was 3127x3648) renders as a
// giant vertical slab. Five of the six course photos were already 3:2; this forces the sixth to
// match by centre-cropping. Without it, re-running this script would silently undo the fix.
const FORCE_LANDSCAPE = { courses: 3 / 2 };

const slug = (s) =>
  s
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

// ── walk ──────────────────────────────────────────────────────────────────────
function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === ".DS_Store" || e.name === "web") continue;
    // The client's "Screenshot ..." files are REFERENCE shots of the deployed site, showing which
    // section each folder's photos belong to. They are not site assets and must never be served.
    // Archived in docs/client-reference/.
    if (/^screenshot /i.test(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.(jpe?g|png|pdf)$/i.test(e.name)) acc.push(p);
  }
  return acc;
}

const files = [];
for (const folder of Object.keys(GROUPS)) {
  const d = path.join(SRC, folder);
  if (fs.existsSync(d)) files.push(...walk(d));
}

if (!files.length) { console.error("no source images found under " + SRC); process.exit(1); }

const manifest = [];
let converted = 0, skipped = 0, bytesIn = 0, bytesOut = 0;

for (const abs of files) {
  const rel = path.relative(SRC, abs);                 // "3. CAMPUS LIFE PHOTOS/2. Laboratory.jpg"
  const parts = rel.split(path.sep);
  const group = GROUPS[parts[0]];
  const tail = parts.slice(1);                          // subfolders + filename
  const base = tail[tail.length - 1];
  const nameSlug = slug(tail.join(" ").replace(/\.(jpe?g|png|pdf)$/i, ""));
  const outRel = path.join("web", group, nameSlug + ".jpg");
  const outAbs = path.join(SRC, outRel);

  fs.mkdirSync(path.dirname(outAbs), { recursive: true });

  const inSize = fs.statSync(abs).size;
  bytesIn += inSize;

  if (!FORCE && fs.existsSync(outAbs)) {
    skipped++;
  } else {
    const maxpx = String(MAXPX[group] || MAXPX.default);
    const ratio = FORCE_LANDSCAPE[group];
    try {
      let src = abs;
      if (ratio) {
        // Centre-crop to the target aspect ratio first, at full resolution, so the resize
        // afterwards does not soften the result.
        const dims = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", abs]).toString();
        const w = Number((dims.match(/pixelWidth:\s*(\d+)/) || [])[1]);
        const h = Number((dims.match(/pixelHeight:\s*(\d+)/) || [])[1]);
        if (w && h && w / h < ratio) {          // taller than we want -> crop height
          const tmp = path.join(require("os").tmpdir(), "kkcp-crop-" + nameSlug + ".jpg");
          execFileSync("sips", ["-c", String(Math.round(w / ratio)), String(w), abs, "--out", tmp],
            { stdio: "ignore" });
          src = tmp;
        }
      }
      execFileSync("sips", [
        "-Z", maxpx,
        "-s", "format", "jpeg",
        "-s", "formatOptions", String(QUALITY),
        src, "--out", outAbs,
      ], { stdio: "ignore" });
      converted++;
    } catch (err) {
      console.error("  FAILED: " + rel);
      continue;
    }
  }

  const outSize = fs.statSync(outAbs).size;
  bytesOut += outSize;

  const entry = {
    group,
    src: "/kkcp/" + outRel.split(path.sep).join("/"),   // the path to use in <img src>
    original: rel,
    subfolder: tail.length > 1 ? tail.slice(0, -1).join("/") : "",
    bytes: outSize,
  };
  // NOTE: no name parsing here. Faculty names/designations live only in the filenames and are
  // far too irregular for a regex (missing spaces, "Ph.d.", "Professor& Hod-", parenthesised
  // variants, typos). They are derived separately with judgment; this manifest just carries
  // the raw filename so that step has the source of truth.
  entry.filename = base;
  manifest.push(entry);
}

manifest.sort((a, b) => (a.group + a.src).localeCompare(b.group + b.src));
fs.writeFileSync(path.join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2));

const mb = (n) => (n / 1048576).toFixed(1) + "MB";
console.log(
  `converted ${converted}, reused ${skipped}, total ${manifest.length} images\n` +
  `originals ${mb(bytesIn)}  ->  web ${mb(bytesOut)}  (${(100 - (bytesOut / bytesIn) * 100).toFixed(1)}% smaller)\n` +
  `manifest: public/kkcp/web/manifest.json`
);

const byGroup = {};
for (const m of manifest) byGroup[m.group] = (byGroup[m.group] || 0) + 1;
for (const [g, n] of Object.entries(byGroup)) console.log(`  ${g.padEnd(9)} ${n}`);
