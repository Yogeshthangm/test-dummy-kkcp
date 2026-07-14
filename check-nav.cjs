// Nav drift guard.
//
// The site nav lives in components/CloneHeader.tsx — EXCEPT on the home page, whose theme clone
// has its own INLINED copy of the header. So the menu exists in two places, and they can silently
// disagree. That already happened once: the nav was renamed "Doctor of Pharmacy" -> "Pharm.D"
// everywhere, but the home page's inlined copy kept the old label, so the home header disagreed
// with every other page.
//
// This asserts the two menus offer the same set of (label -> href) pairs.
// Usage: node check-nav.cjs        Exit 1 on drift.

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const HEADER = path.join(ROOT, "components/CloneHeader.tsx");
const HOME = path.join(ROOT, "app/test-dummy-webs-1-react/_components/CloneTree.tsx");

// Pull every (href, label) pair out of a menu tree. The same item is repeated across the
// desktop/mobile/sticky duplicates, so dedupe to a set.
function menu(file) {
  const s = fs.readFileSync(file, "utf8");
  const items = new Map();
  const re = /<a href="([^"]*)"[^>]*className="menu-item-link"[^>]*><span className="menu-item-text">([^<]*)<\/span>/g;
  for (const m of s.matchAll(re)) {
    const [, href, label] = m;
    if (label.trim()) items.set(label.trim(), href);
  }
  return items;
}

const a = menu(HEADER);
const b = menu(HOME);

const problems = [];

for (const [label, href] of a) {
  if (!b.has(label)) problems.push(`home is MISSING "${label}" (-> ${href})`);
  else if (b.get(label) !== href) problems.push(`"${label}" href differs — header:${href}  home:${b.get(label)}`);
}
for (const [label, href] of b) {
  if (!a.has(label)) problems.push(`home has EXTRA "${label}" (-> ${href}) not in the site header`);
}

console.log(`components/CloneHeader.tsx : ${a.size} distinct menu items`);
console.log(`home inlined header        : ${b.size} distinct menu items`);

if (!problems.length) {
  console.log("\n✔ home's inlined nav matches the site header");
  process.exit(0);
}
console.log(`\n✘ NAV DRIFT — ${problems.length} difference(s):`);
for (const p of problems) console.log("   " + p);
console.log("\nThe home page carries its OWN copy of the menu. Any nav change must be made in BOTH");
console.log("components/CloneHeader.tsx AND app/test-dummy-webs-1-react/_components/CloneTree.tsx.");
process.exit(1);
