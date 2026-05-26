#!/usr/bin/env node
/* replace-menu.cjs — replace the contents of every <ul class(Name)="primary-menu …">
 * in a file with a generated KKCP menu (read from /tmp/kkcp-menu.json), preserving the
 * theme's classes so the dropdown CSS still works. Links are href="#" (no targets). */
const fs = require('fs');
const path = require('path');

const FILE = process.argv[2];
const MODE = process.argv[3] || 'jsx';                 // 'jsx' or 'html'
if (!FILE) { console.error('usage: node replace-menu.cjs <file> <jsx|html>'); process.exit(1); }

const menu = JSON.parse(fs.readFileSync('/tmp/kkcp-menu.json','utf8'));
const cn = MODE === 'jsx' ? 'className' : 'class';

// chevron svgs lifted from the existing theme markup (down + up)
const CHEV = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z" /></svg>`;

let uid = 90000;
function renderLi(item){
  uid++;
  const hasKids = item.children && item.children.length > 0;
  const liCls = `menu-item menu-item-type-custom menu-item-object-custom${hasKids?' menu-item-has-children':''} menu-item-${uid}`;
  const icon = hasKids ? `<span ${cn}="sub-menu-icon">${CHEV}</span>` : '';
  const sub = hasKids ? `<ul ${cn}="sub-menu">${item.children.map(renderLi).join('')}</ul>` : '';
  return `<li id="menu-item-${uid}" ${cn}="${liCls}"><a href="#" ${cn}="menu-item-link"><span ${cn}="menu-item-text">${item.label}</span>${icon}</a>${sub}</li>`;
}
const NEW_INNER = menu.map(renderLi).join('');

let src = fs.readFileSync(FILE,'utf8');
// find each opening "<ul ... primary-menu ...>" and the matching </ul>; replace inner
const ulOpenRe = MODE === 'jsx'
  ? /<ul\s[^>]*\bclassName="[^"]*primary-menu[^"]*"[^>]*>/g
  : /<ul\s[^>]*\bclass="[^"]*primary-menu[^"]*"[^>]*>/g;

const positions = [];
let m;
while ((m = ulOpenRe.exec(src)) !== null) positions.push({ start: m.index, openEnd: m.index + m[0].length });
let replacedCount = 0;
// process in reverse so earlier offsets stay valid
for (const p of positions.reverse()) {
  // scan from openEnd, count nested <ul>/</ul>, find matching close
  let i = p.openEnd, depth = 1;
  const openTag = /<ul\b/g, closeTag = /<\/ul>/g;
  while (i < src.length && depth > 0) {
    openTag.lastIndex = i; closeTag.lastIndex = i;
    const o = openTag.exec(src); const c = closeTag.exec(src);
    if (!c) break;
    if (o && o.index < c.index) { depth++; i = o.index + o[0].length; }
    else { depth--; i = c.index + c[0].length; if (depth === 0) { src = src.slice(0, p.openEnd) + NEW_INNER + src.slice(c.index); replacedCount++; break; } }
  }
}
fs.writeFileSync(FILE, src);
console.log(`${FILE}: replaced ${replacedCount} primary-menu UL(s) with KKCP menu (${menu.length} top-level items)`);
