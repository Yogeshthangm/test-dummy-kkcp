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

// Minimum chunk length treated as a content block. This was 12, which silently excused the
// home hero slide strings ("Admissions", "Open for", "2026-2027") — and the page was shipping
// "Admission" / "2025-2026". Short strings ARE content. Keep both the MD-side and page-side
// floors identical, or the gate goes blind in one direction.
const MIN_BLOCK = 5;

const ROOT = __dirname;
const MD = path.join(ROOT, "KKCP_Website_Content_MD");

// The client later sent docs/client-reference/KKCP_Website_Changes.md, which SUPERSEDES parts of
// the original MD ("the change list wins" — client decision). Where that happens, the revised text
// lives in docs/client-reference/revised/ and is what the gate now enforces. The superseded MD
// blocks are listed in SUPERSEDED below and reported by name — never silently dropped, so we can
// always see exactly what the newer document overrode.
const REVISED = path.join(ROOT, "docs", "client-reference", "revised");

// MD file -> routes that must carry its content. A string is "covered" if it appears
// in ANY of the listed routes (content is split across pages, e.g. Campus.md -> 6 pages).
const MAP = {
  "1. Home Page (revised).md": ["/"],
  "11. Scholarship Page (revised).md": ["/scholarships"],
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
// This is a CONTAINMENT check ("does the MD text appear?"), so being over-inclusive on the PAGE
// side is safe: it yields false passes, never false failures. The MD side is the opposite — a
// decoding bug there invents an expected string the page can never contain, which is a false
// FAILURE. That is the dangerous direction: it pressures an agent to edit correct copy to satisfy
// a broken gate (an ICPR violation). If this gate reports a miss, diff the page against the MD by
// hand before touching one character of content.
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
    // Data-array strings carry inline markup of their own: MessageSlider's `role` is
    // `Chairman<br />Ultra Group of Institutions` — the MD's two lines joined by its trailing-"\"
    // line break, which is correct and verbatim. Without stripping the tag the gate compared
    // "Chairman<br />Ultra..." against "Chairman Ultra..." and reported a false miss.
    .map((s) => s.replace(/<[^>]+>/g, " ").replace(/\\n/g, " ").replace(/\\(.)/g, "$1"))
    // Floor must match the MD side's own minimum chunk length (12) below, or the gate goes
    // blind to short-but-real content: the 12-char section heading `Publications` on /research
    // is a genuine content block, and >15 dropped it.
    .filter((s) => s.length >= MIN_BLOCK)
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
    .replace(/\\(['"<>_*\[\]|])/g, "$1")
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
  // Split pipe/grid table ROWS into their cells.
  // The leader test must NOT be a bare /^\s*[|+]/ : the contact page's phone line is
  // "+91-9841259415", which starts with "+" and was being mistaken for a grid-table row, so
  // the "+" got stripped and the gate then demanded "91-9841259415" — a string the page can
  // never contain. That is a false FAILURE, the direction that pressures an agent into
  // "fixing" correct copy. A real table leader is "|" or "+" followed by a border rune.
  t = t.split("\n").map((line) => {
    if (/^\s*\|/.test(line) || /^\s*\+[-=+]/.test(line)) {
      return line.replace(/^\s*[|+]/, "").replace(/[|+]\s*$/, "").split(/\s*\|\s*/).join("\n");
    }
    return line;
  }).join("\n");

  // Inline markdown/pandoc syntax -> plain text (transport only; characters preserved).
  t = t.replace(/!\[[^\]]*\]\([^)]*\)(\{[^}]*\})?/g, "\n");   // images (media/ not shipped)
  // Spans must run BEFORE links: pandoc emits DOIs as nested [[url]{.underline}](url), which
  // the link regex can never match while the span is still wrapped around the label. Running
  // links first left literal "[url](url)" markdown in the expected string (11 false misses on
  // /research). And the span body is [^\]\n]* (not [^\]]*) so that a stray literal "[" in the
  // prose cannot make one span swallow every line up to the next "]{.mark}" 90 lines later.
  t = t.replace(/\[([^\]\n]*)\]\{\.[a-z]+\}/g, "$1");         // {.underline} / {.mark} spans
  t = t.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");              // links -> label
  // Pandoc AUTOLINKS: <someone@example.com> / <https://…>. The angle brackets are markup — the
  // content is the address itself. Courses.md auto-linked exactly one guide's email
  // (<hodcologykkcp@gmail.com>) while the other four are bare, so without this the gate demanded
  // literal angle brackets the page rightly renders as a mailto link.
  t = t.replace(/<((?:mailto:)?[^>\s@]+@[^>\s]+|https?:\/\/[^>\s]+)>/g, "$1");
  t = t.replace(/\*\*/g, "").replace(/(^|\s)\*(\S)/g, "$1$2").replace(/(\S)\*(\s|$)/g, "$1$2");
  t = t.replace(/\\$/gm, "");                                 // trailing backslash line breaks
  // Escaped punctuation. "\-" matters: Testimonials.md attributes a quote with
  // "\- Dr. G. Mani Vendhra, ..." — pandoc escaping a leading hyphen so it isn't read as a
  // bullet. Without "-" here the gate demanded a literal backslash the page rightly omits.
  t = t.replace(/\\(['"<>_*|\-])/g, "$1");
  // NOTE: [ \t]* not \s* — \s* would eat the preceding newline and merge paragraphs.
  t = t.replace(/^[ \t]*[-•][ \t]+/gm, "");                   // bullet markers
  t = t.replace(/^[ \t]*>[ \t]?/gm, "");                      // blockquote markers
  t = t.replace(/^[ \t]*\d+\\?\.[ \t]+/gm, "");               // list numbering "1." / "1\."

  const out = [];
  const skipped = [];
  for (let chunk of t.split(/\n\s*\n/)) {
    chunk = normalize(chunk);
    if (!chunk) continue;
    if (chunk.length < MIN_BLOCK) continue;
    const why = artifactReason(chunk);
    if (why) { skipped.push({ chunk, why }); continue; }
    out.push(chunk);
  }
  out.skipped = skipped;
  return out;
}

// Structural scaffolding of the WORD DOCUMENT that is not page content. These are the only
// strings allowed to be absent from a page, and each must say why. Everything else is content
// and must appear verbatim. Kept deliberately narrow and reported out loud (never silently
// dropped) so this can't become a place to bury real misses.
function artifactReason(c) {
  // Word / plugin leftovers.
  if (/^(Top of Form|Bottom of Form)$/i.test(c)) return "Word form artifact";
  if (/^Gutentor Advanced Text$/i.test(c)) return "WordPress plugin artifact";

  // The pandoc table header row of Latest News & Updates.md.
  if (/^NO PHOTO DESCRIPTION$/i.test(c)) return "source table header row";

  // The document's own title line, e.g. "ABOUT US Page", "Scholarship Page", "Home Page".
  // The page carries the real title in its <h1>; the doc title is filing metadata.
  // NOT excused: "Contact us page" — that one IS rendered as the page's heading, so it stays
  // a checked content block.
  if (/^(ABOUT US Page|Scholarship Page|Home Page|Campus)$/i.test(c)) return "document title line";

  // Section navigation headers inside the source docs, e.g. "1. Campus → Smart-Class Rooms",
  // "3 Courses → M.Pharm". The arrow is the giveaway: these describe where content belongs in
  // the site tree, they are not text the site displays. The section's real heading/title is
  // asserted separately.
  if (/→/.test(c) && /^\d*\s*(Campus|Courses|Department)\b/i.test(c)) return "source section header (site-tree pointer)";

  return null;
}

// ---------- run ----------

const only = process.argv[2];
const cache = {};
let failures = 0;
let checked = 0;
let totalSkipped = 0;

for (const [mdFile, routes] of Object.entries(MAP)) {
  if (only && !routes.includes(only)) continue;
  const mdPath = /\(revised\)/.test(mdFile) ? path.join(REVISED, mdFile) : path.join(MD, mdFile);
  if (!fs.existsSync(mdPath)) { console.log(`?? MISSING SOURCE ${mdFile}`); failures++; continue; }

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

  // Report the artifact skips out loud. They are the only strings excused from the check,
  // so they must stay visible and auditable — never a silent drop.
  totalSkipped += strings.skipped.length;
  if (process.env.SHOW_SKIPS) {
    for (const s of strings.skipped) console.log(`      skipped (${s.why}): ${s.chunk.slice(0, 90)}`);
  }
}

// Supersession must be LOUD. These original documents are no longer what the gate enforces,
// because the client's later change list overrode them. Anyone reading this output has to see
// that, or a future edit could quietly "restore" the stale wording and think it was fixing a bug.
const SUPERSEDED = {
  "1. Home Page.md":
    "Courses Offered labels replaced by change list §1.3 (short forms + durations, and a 6th card). " +
    "Everything else in this file is still enforced via the revised copy.",
  "11. Scholarship Page.md":
    "Entire content replaced by change list §2.2 (client's newer wording: 'Rs. 1000 every month' etc).",
};
console.log("\n── superseded by docs/client-reference/KKCP_Website_Changes.md (client: 'the change list wins') ──");
for (const [f, why] of Object.entries(SUPERSEDED)) {
  const still = fs.existsSync(path.join(MD, f));
  console.log(`   ${still ? "•" : "?"} ${f}\n       ${why}`);
}
console.log("   The revised text is enforced from docs/client-reference/revised/ instead.");

console.log(
  `\n${failures === 0 ? "ALL VERBATIM ✔" : failures + " FILE(S) FAILED"}  (${checked} content blocks checked` +
  (totalSkipped ? `, ${totalSkipped} document-structure artifacts skipped — SHOW_SKIPS=1 to list them` : "") + `)`
);
process.exit(failures === 0 ? 0 : 1);
