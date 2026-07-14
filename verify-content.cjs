// Verbatim content audit (ICPR gate).
// For each MD file -> route mapping, extract the plain text the page will render
// (from its built HTML, or from the CloneTree.tsx if no build output) and assert every
// content string from the MD appears VERBATIM.
//
// Usage:
//   node verify-content.cjs            # audit every mapping
//   node verify-content.cjs <route>    # audit one route
//
// Exit 1 if any MD content string is missing from its target page.

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const MD = path.join(ROOT, "KKCP_Website_Content_MD");

// MD file -> routes that must carry its content. A string is "covered" if it appears
// in ANY of the listed routes (content is split across pages, e.g. Campus.md -> 6 pages).
const MAP = {
  "1. Home Page.md": ["/"],
  "2. About Us Page.md": ["/about"],
  "3. Campus.md": [
    "/smart-class-rooms", "/laboratory-2", "/animal-house-facility",
    "/laboratory", "/security", "/transport",
  ],
  "4. Courses.md": [
    "/courses/diploma-in-pharmacy", "/courses/b-pharm", "/courses/m-pharm",
    "/courses/doctor-of-pharmacy", "/courses/recognized-phd-research-centre",
    "/doctor-of-pharmacypb", "/bachelor-of-pharmacy", "/master-of-pharmacy", "/ph-d",
  ],
  "5. Department.md": [
    "/departments/pharmacy-practice", "/departments/pharmacognosy",
    "/departments/pharmaceutics", "/departments/pharmaceutical-chemistry",
    "/departments/pharmacology",
  ],
  "6. M.PHARM Branches.md": ["/courses/m-pharm", "/master-of-pharmacy"],
  "7. Contact Us Page.md": ["/contact"],
  "8. Our Tie Up Hospital.md": ["/tie-up-hospital"],
  "9. Drug Information Centre.md": ["/drug-information-centre"],
  "11. Scholarship Page.md": ["/scholarships"],
  "12. Syllabus Links.md": ["/syllabus-links"],
  "13. Research.md": ["/research"],
  "14. Testimonials.md": ["/testimonials"],
  "15. Latest News & Updates.md": ["/news"],
};

// ---------- route -> source files ----------

function routeToPageFile(route) {
  const seg = route === "/" ? "" : route;
  return path.join(ROOT, "app", seg, "page.tsx");
}

// Follow page.tsx's CloneTree import(s) to the actual component file(s).
function routeToSourceFiles(route) {
  const pageFile = routeToPageFile(route);
  if (!fs.existsSync(pageFile)) return [];
  const src = fs.readFileSync(pageFile, "utf8");
  const files = [pageFile];
  for (const m of src.matchAll(/from\s+"([^"]+)"/g)) {
    let spec = m[1];
    if (!/CloneTree|MessageSlider|_components/.test(spec)) continue;
    let resolved;
    if (spec.startsWith("@/")) resolved = path.join(ROOT, spec.slice(2));
    else if (spec.startsWith(".")) resolved = path.resolve(path.dirname(pageFile), spec);
    else continue;
    for (const ext of [".tsx", ".ts", "/index.tsx"]) {
      if (fs.existsSync(resolved + ext)) { files.push(resolved + ext); break; }
    }
  }
  return files;
}

// ---------- text extraction ----------

const ENTITIES = {
  "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&apos;": "'",
  "&nbsp;": " ", "&#39;": "'", "&rsquo;": "’", "&lsquo;": "‘",
  "&ldquo;": "“", "&rdquo;": "”", "&mdash;": "—", "&ndash;": "–",
  "&hellip;": "…", "&times;": "×", "&rupee;": "₹",
};

function decodeEntities(s) {
  return s
    .replace(/&[a-zA-Z]+;|&#\d+;/g, (e) => {
      if (ENTITIES[e]) return ENTITIES[e];
      const num = e.match(/^&#(\d+);$/);
      return num ? String.fromCodePoint(Number(num[1])) : e;
    });
}

// Turn a CloneTree.tsx into the text a browser would render.
//
// Two sources must BOTH be harvested, because the pages use two different authoring models:
//   (a) DOM-emit pages  — content lives in JSX text nodes.
//   (b) data-driven pages (/research, /departments index, MessageSlider) — content lives in
//       JS string/template literals inside const arrays, which the JSX pass would strip as
//       "{...} expressions". Missing these made the gate blind to exactly the pages carrying
//       the most content.
// This is a CONTAINMENT check ("does the MD text appear?"), so being over-inclusive is safe:
// it can never produce a false FAILURE, only a false pass, and the build + spot-checks cover that.
function jsxToText(src) {
  let t = src;
  t = t.replace(/^\s*\/\/.*$/gm, "");            // line comments
  t = t.replace(/\/\*[\s\S]*?\*\//g, "");        // block comments
  t = t.replace(/<svg\b[\s\S]*?<\/svg>/gi, " "); // svg innards are not text

  // (b) harvest data-array content: every string / template literal in the file.
  const literals = [];
  for (const m of t.matchAll(/`((?:[^`\\]|\\.)*)`/g)) literals.push(m[1]);
  for (const m of t.matchAll(/"((?:[^"\\\n]|\\.)*)"/g)) literals.push(m[1]);
  for (const m of t.matchAll(/'((?:[^'\\\n]|\\.)*)'/g)) literals.push(m[1]);
  const dataText = literals
    .map((s) => s.replace(/\\n/g, " ").replace(/\\(.)/g, "$1"))
    .filter((s) => s.length > 15)   // skip classNames/hrefs/short props noise
    .join("\n");

  // (a) render the JSX text nodes
  t = t.replace(/\{\s*"((?:[^"\\]|\\.)*)"\s*\}/g, (_, s) => s.replace(/\\(.)/g, "$1"));
  t = t.replace(/\{\s*'((?:[^'\\]|\\.)*)'\s*\}/g, (_, s) => s.replace(/\\(.)/g, "$1"));
  t = t.replace(/\{[^{}]*\}/g, " ");             // remaining {...} = attrs/props, not text
  t = t.replace(/<[^>]+>/g, " ");                // tags

  return decodeEntities(t + "\n" + dataText);
}

// Canonical form applied to BOTH the MD source and the page text, so the gate compares
// the WORDS, not Word/pandoc's escape style. Per user decision: pandoc transport encodings
// (-- => en dash, --- => em dash, \' => apostrophe) and the one mojibake are DECODED; the
// page renders real typographic characters. Everything else must match exactly:
// no case folding, no typo tolerance, no rewording.
function canon(s) {
  return s
    // mojibake (UTF-8 bytes read as latin-1). Written as escapes so this source file
    // stays ASCII-safe. Every sequence is exactly 3 code units, so no rule can eat
    // another's prefix.
    .replace(/\u00e2\u20ac\u2122/g, "\u2019")
    .replace(/\u00e2\u20ac\u02dc/g, "\u2018")
    .replace(/\u00e2\u20ac\u0153/g, "\u201c")
    .replace(/\u00e2\u20ac\u009d/g, "\u201d")
    .replace(/\u00e2\u20ac\u201d/g, "\u2014")
    .replace(/\u00e2\u20ac\u201c/g, "\u2013")
    // pandoc backslash escapes
    .replace(/\\(['"<>_*\[\]])/g, "$1")
    // pandoc smart punctuation (--- before --)
    .replace(/---/g, "—")
    .replace(/--/g, "–")
    // unify quote styles
    .replace(/[‘’ʼ´`]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function normalize(s) {
  return canon(s);
}

function routeText(route) {
  const files = routeToSourceFiles(route);
  if (!files.length) return null;
  return normalize(files.map((f) => jsxToText(fs.readFileSync(f, "utf8"))).join(" "));
}

// ---------- MD -> the content strings that must appear ----------

function mdContentStrings(md) {
  let t = md;

  // Strip pandoc grid-table borders and pipe-table rules, keep cell text.
  t = t.replace(/^[+|][-=+:| ]*[+|]\s*$/gm, "\n");
  t = t.replace(/^\s*-{3,}[- :|]*$/gm, "\n");
  t = t.split("\n").map((line) => {
    if (/^\s*[|+]/.test(line)) {
      return line.replace(/^\s*[|+]/, "").replace(/[|+]\s*$/, "").split(/\s*\|\s*/).join("\n");
    }
    return line;
  }).join("\n");

  // Inline markdown/pandoc syntax -> plain text (transport only; characters preserved).
  t = t.replace(/!\[[^\]]*\]\([^)]*\)(\{[^}]*\})?/g, "\n");   // images (media/ not shipped)
  t = t.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");              // links -> label
  t = t.replace(/\[([^\]]*)\]\{\.[a-z]+\}/g, "$1");           // {.underline} / {.mark} spans
  t = t.replace(/\*\*/g, "").replace(/(^|\s)\*(\S)/g, "$1$2").replace(/(\S)\*(\s|$)/g, "$1$2");
  t = t.replace(/\\$/gm, "");                                 // trailing backslash line breaks
  t = t.replace(/\\(['"<>_*])/g, "$1");                       // escaped punctuation
  // NOTE: [ \t]* not \s* — \s* would eat the preceding newline and merge paragraphs.
  t = t.replace(/^[ \t]*[-•][ \t]+/gm, "");                   // bullet markers
  t = t.replace(/^[ \t]*>[ \t]?/gm, "");                      // blockquote markers
  t = t.replace(/^[ \t]*\d+\\?\.[ \t]+/gm, "");               // list numbering "1." / "1\."

  const out = [];
  for (let chunk of t.split(/\n\s*\n/)) {
    chunk = normalize(chunk);
    if (!chunk) continue;
    if (chunk.length < 12) continue;              // skip fragments like "NO", "PHOTO", "="
    if (/^(Top of Form|Bottom of Form)$/i.test(chunk)) continue;
    out.push(chunk);
  }
  return out;
}

// ---------- run ----------

const only = process.argv[2];
const cache = {};
let failures = 0;
let checked = 0;

for (const [mdFile, routes] of Object.entries(MAP)) {
  if (only && !routes.includes(only)) continue;
  const mdPath = path.join(MD, mdFile);
  if (!fs.existsSync(mdPath)) { console.log(`?? MISSING MD ${mdFile}`); continue; }

  const strings = mdContentStrings(fs.readFileSync(mdPath, "utf8"));
  const haystacks = [];
  const missingRoutes = [];
  for (const r of routes) {
    if (!(r in cache)) cache[r] = routeText(r);
    if (cache[r] === null) missingRoutes.push(r);
    else haystacks.push(cache[r]);
  }

  const missing = [];
  for (const s of strings) {
    checked++;
    if (!haystacks.some((h) => h.includes(s))) missing.push(s);
  }

  const status = missing.length === 0 && missingRoutes.length === 0 ? "PASS" : "FAIL";
  if (status === "FAIL") failures++;
  console.log(
    `${status === "PASS" ? "✔" : "✘"} ${mdFile}  ->  ${routes.join(", ")}\n` +
    `    ${strings.length - missing.length}/${strings.length} content blocks present verbatim` +
    (missingRoutes.length ? `\n    NO SUCH ROUTE: ${missingRoutes.join(", ")}` : "")
  );
  for (const m of missing.slice(0, 8)) {
    console.log(`      MISSING: ${m.slice(0, 150)}${m.length > 150 ? " …" : ""}`);
  }
  if (missing.length > 8) console.log(`      … and ${missing.length - 8} more missing`);
}

console.log(`\n${failures === 0 ? "ALL VERBATIM ✔" : failures + " FILE(S) FAILED"}  (${checked} content blocks checked)`);
process.exit(failures === 0 ? 0 : 1);
