#!/usr/bin/env node
/* build-clone-css.cjs — bundle the mirror's external + inline stylesheets into one
 * scoped CSS file for the React rebuild. Reuses the source's exact CSS (no Tailwind
 * hand-conversion) so the React tree renders identically to the mirror.
 *
 * - Reads public/<name>/index.html, walks <link rel=stylesheet> + <style> in DOM order.
 * - Local stylesheets (assets/*.css) are inlined; their relative url() refs are rewritten
 *   to absolute /<name>/... paths. External (googleapis/gstatic/data) url()s pass through.
 * - Everything is scoped under .<scope> (html/body/:root -> .<scope>) so it can't collide
 *   with the host app and so body/:root rules land on the wrapper div.
 */
const fs = require('fs');
const path = require('path');

const NAME = process.argv[2] || 'test-dummy-webs-1';
const SCOPE = process.argv[3] || 'clone-root';
const ROOT = process.cwd();
const MIRROR = path.join(ROOT, 'public', NAME);
const PUBLIC = '/' + NAME + '/';
// Output to public/ so the (very large) bundled stylesheet is served statically via <link>
// instead of going through Turbopack/PostCSS, which OOMs on >1MB CSS. url() refs are already
// absolute /<name>/... so the file's location does not matter.
const OUT = path.join(ROOT, 'public', NAME, 'clone-theme.css');

const html = fs.readFileSync(path.join(MIRROR, 'index.html'), 'utf8');

// ---- resolve a url() ref against a base absolute dir, normalizing .. and . ----
function resolveUrl(base, ref) {
  ref = ref.trim().replace(/^['"]|['"]$/g, '').trim();
  if (!ref) return ref;
  if (/^(data:|https?:|\/\/|#)/i.test(ref)) return ref;          // external / data / fragment
  if (ref.startsWith('/')) return PUBLIC.replace(/\/$/, '') + ref; // root-relative within mirror
  // relative: join base + ref, normalize
  const parts = (base + ref).split('/');
  const out = [];
  for (const p of parts) {
    if (p === '' && out.length) continue;        // collapse empty (keep leading)
    if (p === '.') continue;
    if (p === '..') { if (out.length > 1) out.pop(); continue; }
    out.push(p);
  }
  return out.join('/');
}

function rewriteUrls(css, base) {
  return css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (m, q, ref) => {
    const r = resolveUrl(base, ref);
    return `url(${q}${r}${q})`;
  });
}

// ---- walk <link rel=stylesheet> + <style> in DOM order ----
const reItem = /<link\b[^>]*?\brel=["']stylesheet["'][^>]*>|<style\b[^>]*>([\s\S]*?)<\/style>/gi;
let m, parts = [], links = 0, styles = 0, skipped = 0;
while ((m = reItem.exec(html)) !== null) {
  const tok = m[0];
  if (tok.toLowerCase().startsWith('<style')) {
    parts.push(rewriteUrls(m[1], PUBLIC));   // inline: base = mirror root
    styles++;
  } else {
    const href = (tok.match(/href=["']([^"']+)["']/) || [])[1] || '';
    if (!href || /^(https?:)?\/\//i.test(href) || href.startsWith('data:')) { skipped++; continue; } // external
    const local = path.join(MIRROR, href.replace(/\?.*$/, ''));
    if (!fs.existsSync(local)) { console.warn('  ! missing local css:', href); skipped++; continue; }
    const cssRaw = fs.readFileSync(local, 'utf8');
    const base = PUBLIC + path.dirname(href.replace(/\?.*$/, '')) + '/'; // e.g. /name/assets/
    parts.push(`/* === ${href} === */\n` + rewriteUrls(cssRaw, base));
    links++;
  }
}
console.log(`inlined ${links} local stylesheets + ${styles} inline blocks (skipped ${skipped} external)`);

const combined = parts.join('\n');

// ---- brace-aware scoper (from emit-react.cjs) ----
function scopeCss(src, scope) {
  const SC = '.' + scope;
  function parse(str) {
    const rules = []; let i = 0; const n = str.length;
    while (i < n) {
      while (i < n && /\s/.test(str[i])) i++;
      if (i >= n) break;
      if (str[i] === '/' && str[i + 1] === '*') { const e = str.indexOf('*/', i); i = e < 0 ? n : e + 2; continue; }
      let start = i, dp = 0;
      while (i < n) { const c = str[i]; if (c === '(') dp++; else if (c === ')') dp--; else if (c === '{' && dp === 0) break; else if (c === ';' && dp === 0) break; i++; }
      if (i >= n) { const t = str.slice(start).trim(); if (t) rules.push({ t: 'raw', s: t }); break; }
      if (str[i] === ';') { rules.push({ t: 'at-stmt', pre: str.slice(start, i).trim() }); i++; continue; }
      const pre = str.slice(start, i).trim(); i++;
      let bs = i, depth = 1;
      while (i < n && depth > 0) { const c = str[i]; if (c === '/' && str[i + 1] === '*') { const e = str.indexOf('*/', i); i = e < 0 ? n : e + 2; continue; } if (c === '{') depth++; else if (c === '}') depth--; i++; }
      rules.push({ t: 'block', pre, body: str.slice(bs, i - 1) });
    }
    return rules;
  }
  const prefix = (sel) => sel.split(',').map(s => {
    s = s.trim(); if (!s) return s;
    if (s === 'html' || s === 'body' || s === ':root' || s === 'html body') return SC;
    if (s.startsWith(':root')) return SC + s.slice(5);
    s = s.replace(/^html\s*/, '').replace(/^body\s*/, '');
    if (s === '' || s === '*') return SC + ' *';
    return SC + ' ' + s;
  }).join(', ');
  const PASS = /^@(font-face|keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes|page|counter-style|font-feature-values|property)/i;
  const NEST = /^@(media|supports|container|layer|-webkit-)/i;
  function render(rules) {
    let o = '';
    for (const r of rules) {
      if (r.t === 'at-stmt') { o += r.pre + ';\n'; continue; }
      if (r.t === 'raw') { o += r.s + '\n'; continue; }
      if (r.pre.startsWith('@')) {
        if (PASS.test(r.pre)) { o += `${r.pre}{${r.body}}\n`; continue; }
        if (NEST.test(r.pre)) { o += `${r.pre}{\n${render(parse(r.body))}}\n`; continue; }
        o += `${r.pre}{${r.body}}\n`; continue;
      }
      const sel = prefix(r.pre);
      if (!sel.trim() || !r.body.trim()) continue;   // skip empty selector / empty body (PostCSS rejects them)
      o += `${sel}{${r.body}}\n`;
    }
    return o;
  }
  return render(parse(src));
}

const scoped = `/* clone-theme.css — source stylesheets bundled + scoped under .${SCOPE}, url() -> ${PUBLIC}. Generated by build-clone-css.cjs. */\n` + scopeCss(combined, SCOPE);
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, scoped);
console.log(`wrote ${OUT} (${scoped.length} bytes)`);
