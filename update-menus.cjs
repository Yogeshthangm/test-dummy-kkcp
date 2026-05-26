#!/usr/bin/env node
/* update-menus.cjs — rewrite the primary + mobile menus and logos across every
 * KKCP mirror so they share one flat nav: Home + the six cloned pages. Run after
 * a clone is mirrored. Idempotent — re-running re-applies the same nav.
 *
 * Usage: node update-menus.cjs           # update every known clone
 *        node update-menus.cjs <clone>   # update a single clone
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

const NAV = [
  { slug: 'test-dummy-webs-1',  href: '/',                   label: 'Home' },
  { slug: 'about-us',           href: '/about-us',           label: 'About' },
  { slug: 'campus-life',        href: '/campus-life',        label: 'Campus Life' },
  { slug: 'research',           href: '/research',           label: 'Research' },
  { slug: 'scholarships',       href: '/scholarships',       label: 'Scholarships' },
  { slug: 'all-programs',       href: '/all-programs',       label: 'All Programs' },
  { slug: 'faculty-of-science', href: '/faculty-of-science', label: 'Faculty of Science' },
];

const KKCP_WORDMARK = '<span class="kkcp-wordmark" style="font-weight:800;font-size:30px;line-height:1;letter-spacing:1px;color:#ffffff;font-family:inherit;display:inline-block;text-shadow:0 1px 3px rgba(0,0,0,0.45)">KKCP</span>';

function desktopMenuHtml(activeSlug) {
  const items = NAV.map((n) => {
    const cur = n.slug === activeSlug ? ' current-menu-item' : '';
    return `<li class="menu-item menu-item-type-custom menu-item-object-custom${cur}"><a href="${n.href}" target="_top" class="menu-item-link"><span class="menu-item-text">${n.label}</span></a></li>`;
  }).join('');
  return `<ul id="menu-main-menu" class="primary-menu">${items}</ul>`;
}

function mobileMenuHtml(activeSlug, id) {
  const items = NAV.map((n) => {
    const cur = n.slug === activeSlug ? ' current-menu-item' : '';
    return `<li class="menu-item menu-item-type-custom menu-item-object-custom${cur}"><a href="${n.href}" target="_top" class="menu-item-link"><span class="menu-item-text">${n.label}</span></a></li>`;
  }).join('');
  return `<ul id="${id}" class="mobile-menu has-vertical-divider">${items}</ul>`;
}

// Replace one full <ul ...>…</ul> block whose opening tag matches openRegex,
// starting the search at `from`. Walks the HTML counting <ul/</ul> so nested
// <ul class="sub-menu"> blocks are consumed too — regex alone can't match
// balanced HTML. Returns the new html plus the position immediately after the
// inserted block so the caller can resume past it (avoiding infinite re-match
// when the inserted ul still satisfies openRegex).
function replaceUlBlock(html, openRegex, newUl, from = 0) {
  const slice = html.slice(from);
  const m = openRegex.exec(slice);
  if (!m) return { html, found: false };
  const start = from + m.index;
  let i = start + m[0].length;
  let depth = 1;
  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf('<ul', i);
    const nextClose = html.indexOf('</ul>', i);
    if (nextClose < 0) return { html, found: false };
    if (nextOpen >= 0 && nextOpen < nextClose) {
      depth++;
      i = nextOpen + 3;
    } else {
      depth--;
      i = nextClose + 5;
    }
  }
  const newHtml = html.slice(0, start) + newUl + html.slice(i);
  return { html: newHtml, found: true, nextFrom: start + newUl.length };
}

function replaceAll(html, openRegexFactory, newUlFactory) {
  let count = 0;
  let from = 0;
  while (true) {
    const res = replaceUlBlock(html, openRegexFactory(), newUlFactory(count), from);
    if (!res.found) break;
    html = res.html;
    from = res.nextFrom;
    count++;
    if (count > 50) break; // safety
  }
  return { html, count };
}

function updateOne(clone) {
  const file = path.join(ROOT, 'public', clone, 'index.html');
  if (!fs.existsSync(file)) {
    console.log(`skip ${clone}: no index.html`);
    return;
  }
  let html = fs.readFileSync(file, 'utf8');

  // 1) Desktop primary menu — match menu-main-menu* AND the footer's
  // menu-useful-links* widget, which duplicates the old nav with the same
  // primary-menu class.
  const desk = replaceAll(
    html,
    () => /<ul[^>]*id="menu-(?:main-menu|useful-link)[^"]*"[^>]*>/,
    () => desktopMenuHtml(clone)
  );
  html = desk.html;

  // 2) Mobile menu(s) — may appear multiple times with id menu-mobile-menu, -1, -2…
  const mob = replaceAll(
    html,
    () => /<ul[^>]*id="menu-mobile-menu[^"]*"[^>]*>/,
    (i) => mobileMenuHtml(clone, i === 0 ? 'menu-mobile-menu' : `menu-mobile-menu-${i}`)
  );
  html = mob.html;

  // 3) Desktop site logo — swap original-theme <img> for KKCP wordmark
  html = html.replace(
    /<div class="rstb-site-logo">\s*<a [^>]*><img [^>]*alt="Blue University"><\/a>\s*<\/div>/g,
    `<div class="rstb-site-logo"><a href="/" target="_top">${KKCP_WORDMARK}</a></div>`
  );
  // 3b) Existing KKCP-wordmark logo anchors (from earlier hand edits on the
  // homepage) — repoint to "/" so the logo navigates to the new root.
  html = html.replace(
    /<div class="rstb-site-logo">\s*<a href="[^"]*"[^>]*><span class="kkcp-wordmark"/g,
    `<div class="rstb-site-logo"><a href="/" target="_top"><span class="kkcp-wordmark"`
  );

  // 4) Mobile panel logo
  html = html.replace(
    /<div class="mobile-panel-logo">\s*<img [^>]*><\/div>/g,
    `<div class="mobile-panel-logo">${KKCP_WORDMARK}</div>`
  );

  fs.writeFileSync(file, html);
  console.log(`updated ${clone}: desktop=${desk.count} mobile=${mob.count}`);
}

const only = process.argv[2];
const targets = only ? [only] : NAV.map((n) => n.slug);
for (const c of targets) updateOne(c);
