#!/usr/bin/env node
/* apply-home-chrome.cjs — make every sub-page share the homepage's chrome.
 *
 * - Replaces each sub-page's <header class="rstb-header">...</header> and
 *   <footer class="rstb-footer">...</footer> blocks with the homepage's, so
 *   the global nav + footer are identical everywhere.
 * - Injects a small <style> into every mirror's <head> that forces the
 *   primary menu into one row (no wrap on "Faculty of Science").
 * - Rebrands every "Univet" reference to "KKCP".
 *
 * Run AFTER mirroring + image swap, then re-run update-menus.cjs to refresh
 * the per-page active-menu-item marker.
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const HOME = 'test-dummy-webs-1';
const SUBPAGES = ['about-us', 'campus-life', 'research', 'scholarships', 'all-programs', 'faculty-of-science'];

const HEADER_RE = /<header class="rstb-header">[\s\S]*?<\/header>/;
const FOOTER_RE = /<footer class="rstb-footer">[\s\S]*?<\/footer>/;

const NOWRAP_CSS = `<style id="kkcp-menu-nowrap">
.rstb-nav-menu .primary-menu{flex-wrap:nowrap !important;white-space:nowrap !important}
.rstb-nav-menu .primary-menu>li{flex-shrink:0 !important;white-space:nowrap !important}
.rstb-nav-menu .primary-menu>li>a{white-space:nowrap !important}
.rstb-header .button-text,.rstb-header [class*="apply"] .button-text{white-space:nowrap !important}
.rstb-header a[class*="button"],.rstb-header button{white-space:nowrap !important}
.rstb-header .e-con-inner{align-items:center !important}
.rstb-header .e-con-inner > .e-con:has(.rstb-nav-menu.nav-horizontal){flex:1 1 0% !important;justify-content:center !important}
.rstb-header .rstb-nav-menu.nav-horizontal{margin-inline:auto !important}
.rstb-header .rstb-nav-menu.nav-horizontal .primary-menu{justify-content:center !important}
</style>`;

function readMirror(slug) {
  return fs.readFileSync(path.join(ROOT, 'public', slug, 'index.html'), 'utf8');
}
function writeMirror(slug, html) {
  fs.writeFileSync(path.join(ROOT, 'public', slug, 'index.html'), html);
}

const home = readMirror(HOME);
const homeHeader = home.match(HEADER_RE);
const homeFooter = home.match(FOOTER_RE);
if (!homeHeader) throw new Error('homepage <header class="rstb-header"> not found');
if (!homeFooter) throw new Error('homepage <footer class="rstb-footer"> not found');

function injectNowrap(html) {
  // Replace any prior block so this script is idempotent and tweaks to the
  // CSS take effect on re-run.
  html = html.replace(/<style id="kkcp-menu-nowrap">[\s\S]*?<\/style>\n?/g, '');
  return html.replace('</head>', `${NOWRAP_CSS}\n</head>`);
}

function rebrandUnivet(html) {
  // Explicit user instruction: rename the original-theme brand to KKCP. Match
  // every casing variant.
  return html
    .replace(/Univet/g, 'KKCP')
    .replace(/UNIVET/g, 'KKCP')
    .replace(/univet/g, 'KKCP');
}

let count = 0;
// Homepage itself: nowrap + rebrand (no header/footer swap).
{
  let h = readMirror(HOME);
  h = injectNowrap(h);
  h = rebrandUnivet(h);
  writeMirror(HOME, h);
  count++;
}

for (const slug of SUBPAGES) {
  let h = readMirror(slug);
  if (!HEADER_RE.test(h)) { console.warn(`skip ${slug}: no header block`); continue; }
  if (!FOOTER_RE.test(h)) { console.warn(`skip ${slug}: no footer block`); continue; }
  h = h.replace(HEADER_RE, homeHeader[0]);
  h = h.replace(FOOTER_RE, homeFooter[0]);
  h = injectNowrap(h);
  h = rebrandUnivet(h);
  writeMirror(slug, h);
  count++;
}
console.log(`applied home chrome + nowrap + rebrand to ${count} mirrors`);
