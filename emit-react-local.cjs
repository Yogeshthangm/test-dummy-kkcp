#!/usr/bin/env node
/* emit-react.cjs — turn a mounted static mirror into a real React component tree.
 *
 * The "non-Tailwind / Framer fast path" for Phase 2. Instead of hand-converting each
 * section, this reads the *rendered* DOM of the mounted mirror and emits it as one JSX
 * component (preserving the source's own class names + inline styles), and extracts the
 * document's <style> CSS into one stylesheet scoped under a wrapper class. The result is
 * a genuine React tree — no iframe, no dangerouslySetInnerHTML — that renders identically
 * to the mirror because it reuses the source's exact CSS.
 *
 * Usage:
 *   node emit-react.cjs --url <mounted-mirror-url> --public </name/> --scope <wrapperClass> --out <routeDir> [opts]
 * e.g.
 *   node emit-react.cjs \
 *     --url http://localhost:3014/test-dummy-extra-1/index.html \
 *     --public /test-dummy-extra-1/ --scope extra-clone \
 *     --out apps/web/app/test-dummy-extra-1-react
 *
 * Options:
 *   --root <selector>   content root to emit (default: auto-detect the tall content container)
 *   --name <base>       css/component base name (default "clone")
 *   --no-reveal-fix     do NOT flip inline opacity:0 -> 1 (default: flip, matches the mirror's reveal-fix)
 *   --no-scroll         skip the pre-emit scroll pass
 *
 * Writes: <out>/<name>.css  and  <out>/_components/CloneTree.tsx
 * Prints: a ready-to-paste page.tsx + layout.tsx wiring snippet.
 *
 * Bakes in the gotchas that otherwise cost a debugging loop:
 *  - SVG tag/attr casing preserved via `instanceof SVGElement` (linearGradient, feGaussianBlur, ...).
 *  - React serializes inline styles compactly ("opacity:0"), so the CSS attribute-selector reveal-fix
 *    silently fails (and Next's minifier drops it) — so we fix opacity:0 at the *source* here instead.
 *  - asset refs (src/srcset/poster/href + url() in CSS) rewritten to absolute --public paths.
 *  - <style> CSS scoped under .--scope so it wins over the host app's globals and never leaks out.
 */
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
function opt(name, def) { const i = args.indexOf(name); return i >= 0 && args[i + 1] ? args[i + 1] : def; }
function flag(name) { return args.includes(name); }
if (flag('--help') || flag('-h') || !opt('--url')) {
  console.log('Usage: node emit-react.cjs --url <mirror-url> --public </name/> --scope <class> --out <dir> [--root <sel>] [--name <base>] [--no-reveal-fix] [--no-scroll]');
  process.exit(flag('--help') || flag('-h') ? 0 : 1);
}
const URL_ = opt('--url');
const PUBLIC = opt('--public', '/');
const SCOPE = opt('--scope', 'clone-root');
const OUT = path.resolve(opt('--out', 'clone-react'));
const NAME = opt('--name', 'clone');
const ROOT_SEL = opt('--root', '');
const REVEAL_FIX = !flag('--no-reveal-fix');
const DO_SCROLL = !flag('--no-scroll');

function loadChromium() {
  for (const m of ['playwright', 'playwright-core']) { try { return require(require.resolve(m, { paths: [process.cwd(), __dirname] })).chromium; } catch {} }
  try { const { execSync } = require('child_process'); const hit = execSync(`find "${process.cwd()}/node_modules" -maxdepth 6 -type d -name playwright-core 2>/dev/null | head -1`).toString().trim(); if (hit) return require(hit).chromium; } catch {}
  console.error('playwright/playwright-core not found.'); process.exit(1);
}
const { chromium } = { chromium: loadChromium() };

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(URL_, { waitUntil: 'domcontentloaded', timeout: 120000 });
  if (DO_SCROLL) await page.evaluate(async () => { const h = document.body.scrollHeight; for (let y = 0; y < h; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); } window.scrollTo(0, 0); });
  await page.waitForTimeout(1200);

  const out = await page.evaluate(({ PUBLIC, REVEAL_FIX, ROOT_SEL }) => {
    const ATTR = { 'class': 'className', 'for': 'htmlFor', 'tabindex': 'tabIndex', 'crossorigin': 'crossOrigin', 'autoplay': 'autoPlay', 'playsinline': 'playsInline', 'autocomplete': 'autoComplete', 'spellcheck': 'spellCheck', 'contenteditable': 'contentEditable', 'enterkeyhint': 'enterKeyHint', 'inputmode': 'inputMode', 'maxlength': 'maxLength', 'readonly': 'readOnly', 'srcset': 'srcSet', 'usemap': 'useMap', 'novalidate': 'noValidate', 'colspan': 'colSpan', 'rowspan': 'rowSpan', 'srcdoc': 'srcDoc', 'allowfullscreen': 'allowFullScreen', 'frameborder': 'frameBorder' };
    const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse', 'stop', 'use']);
    const BOOL = new Set(['autoPlay', 'loop', 'muted', 'playsInline', 'controls', 'default', 'disabled', 'checked', 'selected', 'multiple', 'readOnly', 'required', 'autoFocus', 'hidden', 'allowFullScreen', 'noValidate']);
    const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const fixUrl = (v) => v.replace(/(^|[\s,(])(?:\.\/)?(assets\/|framer-assets\/|media\/)/g, (m, pre, dir) => pre + PUBLIC + dir);
    function escText(t) { return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\{/g, '&#123;').replace(/\}/g, '&#125;'); }
    function styleToObj(s) {
      const parts = []; let buf = '', depth = 0;
      for (const ch of s) { if (ch === '(') depth++; if (ch === ')') depth--; if (ch === ';' && depth === 0) { parts.push(buf); buf = ''; } else buf += ch; }
      if (buf.trim()) parts.push(buf);
      const decls = [];
      for (const d of parts) { const i = d.indexOf(':'); if (i < 0) continue; const k = d.slice(0, i).trim(), v = d.slice(i + 1).trim(); if (k) decls.push([k, v]); }
      const hidden = REVEAL_FIX && decls.some(([k, v]) => k === 'opacity' && v.replace(/\s/g, '') === '0');
      const props = [];
      for (let [prop, val] of decls) {
        if (hidden && prop === 'opacity') val = '1';
        if (hidden && /transform$/i.test(prop)) val = 'none';
        val = fixUrl(val);
        let key;
        if (prop.startsWith('--')) key = JSON.stringify(prop);
        else { key = prop.replace(/^-(webkit|moz|ms|o)-/, (m, p) => p[0].toUpperCase() + p.slice(1)); key = camel(key); }
        props.push(`${key}: ${JSON.stringify(val)}`);
      }
      return '{' + props.join(', ') + '}';
    }
    function emit(node) {
      if (node.nodeType === 3) { const t = node.textContent; if (!t) return ''; const e = escText(t); return e.trim() === '' ? (/[  ]/.test(t) ? '{" "}' : '') : e; }
      if (node.nodeType !== 1) return '';
      const isSvg = node instanceof SVGElement;
      const tag = isSvg ? node.tagName : node.tagName.toLowerCase();      // SVG tagName preserves camelCase
      if (tag === 'style' || tag === 'script' || tag === 'link') return '';
      const attrs = [];
      for (const a of node.attributes) {
        let name = a.name, val = a.value;
        if (name === 'style') { attrs.push(`style={${styleToObj(val)}}`); continue; }
        if (name.startsWith('data-') || name.startsWith('aria-')) { attrs.push(`${name}={${JSON.stringify(val)}}`); continue; }
        if (name === 'xmlns:xlink') { attrs.push(`xmlnsXlink=${JSON.stringify(val)}`); continue; }
        if (name === 'xlink:href') { attrs.push(`xlinkHref=${JSON.stringify(fixUrl(val))}`); continue; }
        let rn = ATTR[name] || (isSvg && name.includes('-') ? camel(name) : name);
        if (name === 'srcset') val = val.replace(/(^|,\s*)(?:\.\/)?(assets\/|framer-assets\/|media\/)/g, (m, pre, dir) => pre + PUBLIC + dir);
        else if (name === 'src' || name === 'href' || name === 'poster') val = fixUrl(val);
        if (BOOL.has(rn) && (val === '' || val === rn || val === 'true')) attrs.push(rn);     // bare boolean prop
        else attrs.push(/["\\]/.test(val) ? `${rn}={${JSON.stringify(val)}}` : `${rn}=${JSON.stringify(val)}`);
      }
      const attrStr = attrs.length ? ' ' + attrs.join(' ') : '';
      const kids = [...node.childNodes].map(emit).filter(Boolean);
      if (kids.length === 0) return VOID.has(tag) ? `<${tag}${attrStr} />` : `<${tag}${attrStr}></${tag}>`;
      return `<${tag}${attrStr}>${kids.join('')}</${tag}>`;
    }
    // pick content root: explicit selector, else descend through single-child wrappers to the tall container
    let root = ROOT_SEL ? document.querySelector(ROOT_SEL) : document.body;
    if (!ROOT_SEL) {
      const tallestChild = (el) => [...el.children].filter(c => c.tagName !== 'STYLE' && c.tagName !== 'SCRIPT').sort((a, b) => b.getBoundingClientRect().height - a.getBoundingClientRect().height)[0];
      let guard = 0;
      while (root && guard++ < 40) { const c = tallestChild(root); if (c && c.getBoundingClientRect().height >= root.getBoundingClientRect().height * 0.95 && [...root.children].length <= 4) root = c; else break; }
    }
    const styles = [...document.querySelectorAll('style')].map(s => s.textContent).join('\n');
    const rootSelector = root.id ? '#' + root.id : '.' + [...root.classList].join('.');
    return { jsx: emit(root), styles, rootSelector, h: Math.round(root.getBoundingClientRect().height) };
  }, { PUBLIC, REVEAL_FIX, ROOT_SEL });

  await browser.close();

  // ---- scope the collected CSS under .SCOPE + rewrite url() to PUBLIC ----
  const css = scopeCss(out.styles, SCOPE, PUBLIC);

  fs.mkdirSync(path.join(OUT, '_components'), { recursive: true });
  fs.writeFileSync(path.join(OUT, NAME + '.css'), css);
  const tsx = `// Auto-generated DOM→JSX emit of the mirrored page (see website-cloner emit-react.cjs).\n` +
    `// Real React tree (no iframe, no dangerouslySetInnerHTML). Source class names + inline styles\n` +
    `// preserved; the source CSS lives scoped in ${NAME}.css. Asset paths absolute to ${PUBLIC}.\n` +
    `/* eslint-disable */\nexport function CloneTree() {\n  return (\n${out.jsx}\n  );\n}\n`;
  fs.writeFileSync(path.join(OUT, '_components', 'CloneTree.tsx'), tsx);

  console.log(`emit: root ${out.rootSelector} (${out.h}px) -> ${path.join(OUT, '_components/CloneTree.tsx')} (${tsx.length}b)`);
  console.log(`css : ${path.join(OUT, NAME + '.css')} (${css.length}b, scoped under .${SCOPE})`);
  console.log(`\n--- wire it up ---\n// ${path.join(OUT, 'layout.tsx')}\nimport "./${NAME}.css";\nexport default function Layout({ children }: { children: React.ReactNode }) { return children; }\n\n// ${path.join(OUT, 'page.tsx')}\nimport { CloneTree } from "./_components/CloneTree";\nexport default function Page() { return (<div className="${SCOPE}"><CloneTree /></div>); }\n\n// remember: register this route prefix as chrome-free, then verify with verify.cjs`);

  // ---- CSS scoper (brace-aware): prefix selectors with .SCOPE, rewrite url() ----
  function scopeCss(src, scope, pub) {
    const SC = '.' + scope;
    const fixUrls = (s) => s.replace(/url\(\s*(['"]?)((?:\.\/)?(?:assets|framer-assets|media)\/[^'")]+)\1\s*\)/g, (m, q, p) => `url(${q}${pub}${p.replace(/^\.\//, '')}${q})`);
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
        if (r.t === 'at-stmt') { o += fixUrls(r.pre) + ';\n'; continue; }
        if (r.t === 'raw') { o += fixUrls(r.s) + '\n'; continue; }
        if (r.pre.startsWith('@')) {
          if (PASS.test(r.pre)) { o += `${r.pre}{${fixUrls(r.body)}}\n`; continue; }
          if (NEST.test(r.pre)) { o += `${r.pre}{\n${render(parse(r.body))}}\n`; continue; }
          o += `${r.pre}{${fixUrls(r.body)}}\n`; continue;
        }
        o += `${prefix(r.pre)}{${fixUrls(r.body)}}\n`;
      }
      return o;
    }
    return `/* clone CSS — source <style> scoped under ${SC}, url() -> ${pub}. Generated by emit-react.cjs. */\n` + render(parse(src));
  }
})();
