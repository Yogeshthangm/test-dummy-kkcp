// Image audit. Two questions:
//   1. Does every /kkcp/ image the site references actually exist on disk? (a miss = broken page)
//   2. How much source-theme demo imagery is still showing on the in-scope pages? (= photos still needed)
//
// Usage: node check-images.cjs
// Exit 1 if any referenced image is missing.

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;

// Routes we were asked to populate. Everything else (alumni, hostel, placement, publications, …)
// is an unlinked orphan page and out of scope.
const IN_SCOPE = {
  "/": "app/test-dummy-webs-1-react",
  "/about": "app/about-react",
  "/contact": "app/contact-react",
  "/smart-class-rooms": "app/smart-class-rooms-react",
  "/laboratory-2 (Laboratory)": "app/laboratory-2-react",
  "/laboratory (Library)": "app/laboratory-react",
  "/animal-house-facility": "app/animal-house-facility-react",
  "/security": "app/security-react",
  "/transport": "app/transport-react",
  "/drug-information-centre": "app/drug-information-centre-react",
  "/courses/diploma-in-pharmacy": "app/diploma-in-pharmacy-react",
  "/courses/b-pharm": "app/b-pharm-react",
  "/courses/m-pharm": "app/m-pharm-react",
  "/courses/doctor-of-pharmacy": "app/doctor-of-pharmacy-react",
  "/courses/recognized-phd-research-centre": "app/recognized-phd-research-centre-react",
  "/doctor-of-pharmacypb": "app/doctor-of-pharmacypb-react",
  "/bachelor-of-pharmacy": "app/bachelor-of-pharmacy-react",
  "/master-of-pharmacy": "app/master-of-pharmacy-react",
  "/ph-d": "app/ph-d-react",
  "/departments": "app/departments-react",
  "/departments/pharmaceutics": "app/departments/pharmaceutics-react",
  "/departments/pharmaceutical-chemistry": "app/departments/pharmaceutical-chemistry-react",
  "/departments/pharmacognosy": "app/departments/pharmacognosy-react",
  "/departments/pharmacology": "app/departments/pharmacology-react",
  "/departments/pharmacy-practice": "app/departments/pharmacy-practice-react",
  "/research": "app/research-react",
  "/news": "app/news-react",
  "/scholarships": "app/scholarships-react",
  "/tie-up-hospital": "app/tie-up-hospital-react",
  "/syllabus-links": "app/syllabus-links-react",
  "/testimonials": "app/testimonials-react",
};

// Demo asset dirs mirrored from the source university theme.
const DEMO = /\/(campus-life|about-us|all-programs|program-med|libraries|research|apply-now|how-to-apply|tuition-fee|faculty-of-science|scholarships)\/assets\//;

function filesUnder(dir) {
  const out = [];
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return out;
  for (const e of fs.readdirSync(abs, { withFileTypes: true, recursive: true })) {
    if (e.isFile() && /\.tsx?$/.test(e.name)) out.push(path.join(e.parentPath || e.path, e.name));
  }
  return out;
}

// Collect every image reference (src=, srcSet=, and bare "/kkcp/..." strings in data arrays).
function refs(file) {
  const s = fs.readFileSync(file, "utf8");
  const found = [];
  for (const m of s.matchAll(/["'`](\/[^"'`\s]+\.(?:jpg|jpeg|png|webp|gif|svg))["'`]/gi)) found.push(m[1]);
  for (const m of s.matchAll(/srcSet=["'{]+([^"'}]+)/gi)) {
    for (const part of m[1].split(",")) {
      const u = part.trim().split(/\s+/)[0];
      if (u && /^\//.test(u)) found.push(u);
    }
  }
  return found;
}

let missing = [];
let hotlinks = [];
let ignoredOriginals = [];
const rows = [];
let totalReal = 0, totalDemo = 0;

for (const [route, dir] of Object.entries(IN_SCOPE)) {
  let real = 0, demo = 0;
  for (const f of filesUnder(dir)) {
    const s = fs.readFileSync(f, "utf8");
    if (/univet\.rstheme\.com/.test(s)) hotlinks.push(path.relative(ROOT, f));
    if (/public\/kkcp\/[1-5]\.\s/.test(s) || /kkcp\/(1\.\s*HOME|2\.\s*ABOUT|3\.\s*CAMPUS|4\.\s*COURSES|5\.\s*DEPARTMENT)/i.test(s))
      ignoredOriginals.push(path.relative(ROOT, f));

    for (const r of refs(f)) {
      if (r.startsWith("/kkcp/")) {
        real++;
        if (!fs.existsSync(path.join(ROOT, "public", r))) {
          missing.push({ file: path.relative(ROOT, f), src: r });
        }
      } else if (DEMO.test(r)) demo++;
    }
  }
  totalReal += real; totalDemo += demo;
  rows.push([route, real, demo]);
}

// lib/faculty.ts srcs too
for (const m of fs.readFileSync(path.join(ROOT, "lib/faculty.ts"), "utf8").matchAll(/"(\/kkcp\/[^"]+)"/g)) {
  if (!fs.existsSync(path.join(ROOT, "public", m[1]))) missing.push({ file: "lib/faculty.ts", src: m[1] });
}

console.log("PAGE".padEnd(42) + "REAL".padStart(6) + "DEMO".padStart(6));
console.log("-".repeat(54));
for (const [r, real, demo] of rows) {
  if (real || demo) console.log(r.padEnd(42) + String(real).padStart(6) + String(demo).padStart(6));
}
console.log("-".repeat(54));
console.log("TOTAL".padEnd(42) + String(totalReal).padStart(6) + String(totalDemo).padStart(6));

console.log("\n" + (missing.length ? `✘ ${missing.length} BROKEN image reference(s):` : "✔ every referenced image exists on disk"));
for (const m of missing.slice(0, 20)) console.log(`   ${m.src}   (${m.file})`);

if (hotlinks.length) console.log(`\n✘ vendor hotlink (univet.rstheme.com) still in: ${[...new Set(hotlinks)].join(", ")}`);
else console.log("✔ no univet.rstheme.com hotlinks");

if (ignoredOriginals.length) console.log(`\n✘ references a GITIGNORED original folder: ${[...new Set(ignoredOriginals)].join(", ")}`);
else console.log("✔ no references to gitignored originals");

process.exit(missing.length || hotlinks.length || ignoredOriginals.length ? 1 : 0);
