// Dump the plain text a route currently renders, one text node per line.
// Usage: node dump-text.cjs /departments/pharmacy-practice
//        node dump-text.cjs app/about-react/_components/CloneTree.tsx
// Use this to see exactly what copy a page ships today, so you can replace it verbatim.

const fs = require("fs");
const path = require("path");

const ENT = {
  "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&apos;": "'", "&nbsp;": " ",
  "&#039;": "'", "&#39;": "'", "&rsquo;": "’", "&lsquo;": "‘",
  "&ldquo;": "“", "&rdquo;": "”", "&mdash;": "—", "&ndash;": "–",
  "&hellip;": "…", "&times;": "×",
};

function decode(s) {
  return s.replace(/&[a-zA-Z]+;|&#\d+;/g, (e) => {
    if (ENT[e]) return ENT[e];
    const n = e.match(/^&#(\d+);$/);
    return n ? String.fromCodePoint(Number(n[1])) : e;
  });
}

function textNodes(src) {
  let t = src;
  t = t.replace(/^\s*\/\/.*$/gm, "");
  t = t.replace(/\/\*[\s\S]*?\*\//g, "");
  t = t.replace(/^\s*import[\s\S]*?from\s+"[^"]*";?\s*$/gm, "");
  t = t.replace(/<svg\b[\s\S]*?<\/svg>/gi, " ");
  // JSX string-literal text expressions {"..."} render as text
  t = t.replace(/\{\s*"((?:[^"\\]|\\.)*)"\s*\}/g, (_, s) => s.replace(/\\(.)/g, "$1"));
  t = t.replace(/\{\s*'((?:[^'\\]|\\.)*)'\s*\}/g, (_, s) => s.replace(/\\(.)/g, "$1"));
  // everything else in braces is props/attrs, not rendered text
  t = t.replace(/\{[^{}]*\}/g, " ");
  t = t.replace(/<[^>]+>/g, "\n");
  return decode(t)
    .split("\n")
    .map((x) => x.replace(/[ \t]+/g, " ").trim())
    .filter((x) => x.length > 1);
}

function resolve(arg) {
  if (arg.endsWith(".tsx")) return [arg];
  const pf = path.join(__dirname, "app", arg === "/" ? "" : arg, "page.tsx");
  if (!fs.existsSync(pf)) throw new Error("no page.tsx for route " + arg);
  const src = fs.readFileSync(pf, "utf8");
  const out = [];
  for (const m of src.matchAll(/from\s+"([^"]+)"/g)) {
    const spec = m[1];
    if (!/CloneTree|MessageSlider|Slider|_components/.test(spec)) continue;
    let p = spec.startsWith("@/")
      ? path.join(__dirname, spec.slice(2))
      : path.resolve(path.dirname(pf), spec);
    if (fs.existsSync(p + ".tsx")) out.push(p + ".tsx");
  }
  if (!out.length) throw new Error("no CloneTree import found in " + pf);
  return out;
}

const arg = process.argv[2];
if (!arg) { console.error("usage: node dump-text.cjs <route|file.tsx>"); process.exit(2); }

for (const f of resolve(arg)) {
  console.log("\n===== " + path.relative(__dirname, f) + " =====");
  textNodes(fs.readFileSync(f, "utf8")).forEach((l, i) =>
    console.log(String(i + 1).padStart(4) + "  " + l)
  );
}
