#!/usr/bin/env node
/* swap-kkcp-images.cjs — replace a clone's stock content photos with KKCP photos.
 * Cover-crops each KKCP image to the target asset's exact dimensions and re-encodes in
 * the target's own format (webp/jpeg/png) via Chromium's canvas, overwriting in place so
 * both the static mirror and the React rebuild update at once (they share the asset files).
 * Variants of one logical image (…-300x300, …-150x150) get the SAME source for consistency.
 *
 * Usage: node swap-kkcp-images.cjs <clone-name>
 */
const fs = require('fs');
const path = require('path');

const CLONE = process.argv[2];
if (!CLONE) { console.error('usage: node swap-kkcp-images.cjs <clone-name>'); process.exit(1); }
const ROOT = process.cwd();
const ASSETS = path.join(ROOT, 'public', CLONE, 'assets');
const KKCP_DIR = path.join(ROOT, 'public', 'images-src', 'kkcp');

function loadChromium() {
  for (const m of ['playwright', 'playwright-core']) { try { return require(require.resolve(m, { paths: [ROOT, __dirname] })).chromium; } catch {} }
  console.error('playwright not found'); process.exit(1);
}
const chromium = loadChromium();

// ---- KKCP source pool (categorised so cards/people get sensible photos) ----
const K = f => path.join(KKCP_DIR, f);
const PROGRAMS = ['bpharm.jpg', 'pharmd-1.jpg', 'diploma.jpg', 'mpharm.jpeg', 'pharmdPB-1.jpg'];
const PEOPLE   = ['0C7A8364-copy.jpg', 'viji-copy.jpg', '0C7A8450-copy.jpg', '0C7A8464-copy.jpg', '5.jpg', '7.jpg', '8.jpg', '9.jpg'];
const CAMPUS   = ['gal1.jpg', 'gal2.jpg', 'gal3.jpg', 'gal4.jpg', 'gal5.jpg', 'gal6.jpg', 'collegePhoto-2-1024x683.png', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '6.jpg', '10.jpg', '11.jpg', '12.jpg'];
const ALL = [...CAMPUS, ...PEOPLE, ...PROGRAMS];

const mimeFor = ext => ext === '.webp' ? 'image/webp' : ext === '.png' ? 'image/png' : 'image/jpeg';
const dataUrl = (file) => {
  const ext = path.extname(file).toLowerCase();
  const mime = ext === '.png' ? 'image/png' : ext === '.jpeg' || ext === '.jpg' ? 'image/jpeg' : ext === '.webp' ? 'image/webp' : 'application/octet-stream';
  return `data:${mime};base64,` + fs.readFileSync(file).toString('base64');
};

// ---- choose which assets are content photos for this clone ----
function targetsFor(clone) {
  const files = fs.readdirSync(ASSETS);
  const pick = [];
  // Pages from the univet.rstheme.com/blue theme share the same asset-naming
  // pattern (NNNN__name.jpg + a handful of content PNGs), so they all share
  // test-dummy-webs-1's selection rules.
  const RSTHEME_PAGES = new Set(['test-dummy-webs-1', 'about-us', 'campus-life', 'research', 'scholarships', 'all-programs', 'faculty-of-science']);
  if (RSTHEME_PAGES.has(clone)) {
    for (const f of files) {
      const ext = path.extname(f).toLowerCase();
      const base = f.replace(/^[0-9]+__/, '');
      if (ext === '.jpg') pick.push(f);                                  // every jpg is a photo
      else if (ext === '.png' && /^(bnr-e-main-img1|contact-img1|inside-thumb)/.test(base)) pick.push(f);
    }
  } else if (clone === 'test-dummy-webs-2') {
    const skip = /(ellipse-368|h8_p3)/;                                  // small decorative shapes
    for (const f of files) {
      if (path.extname(f).toLowerCase() !== '.webp') continue;
      if (skip.test(f)) continue;
      pick.push(f);
    }
  }
  return pick;
}

// group key = strip leading NNNN__ and trailing -WxH so size-variants share a source
const groupKey = f => f.replace(/^[0-9]+__/, '').replace(/-\d+x\d+(?=\.[a-z]+$)/i, '');

// pick a source for a group; program cards -> program photos, avatars/authors -> people
function sourceForGroup(key, idx) {
  if (/^(1|2|3|4)-668a3b/.test(key)) return PROGRAMS[(parseInt(key) - 1) % PROGRAMS.length]; // webs-2 program cards
  if (/(author|professor|team|prof|avatar|inside-thumb|img-24|frame_522)/i.test(key)) return PEOPLE[idx % PEOPLE.length];
  if (/(gallery|gal|campus|banner|bnr|contact|call|acc-)/i.test(key)) return CAMPUS[idx % CAMPUS.length];
  return ALL[idx % ALL.length];
}

(async () => {
  const targets = targetsFor(CLONE);
  // group
  const groups = {};
  for (const f of targets) (groups[groupKey(f)] ||= []).push(f);
  const keys = Object.keys(groups).sort();
  const assign = {};
  keys.forEach((k, i) => { assign[k] = sourceForGroup(k, i); });

  const browser = await chromium.launch();
  const page = await browser.newPage();
  let done = 0;
  for (const k of keys) {
    const src = assign[k];
    const srcUrl = dataUrl(K(src));
    for (const f of groups[k]) {
      const fp = path.join(ASSETS, f);
      const ext = path.extname(f).toLowerCase();
      const mime = mimeFor(ext);
      const out = await page.evaluate(async ({ srcUrl, targetUrl, mime }) => {
        const load = (u) => new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = u; });
        const tgt = await load(targetUrl);
        const W = tgt.naturalWidth, H = tgt.naturalHeight;
        const src = await load(srcUrl);
        const c = document.createElement('canvas'); c.width = W; c.height = H;
        const ctx = c.getContext('2d');
        // cover-crop: scale source to cover WxH, center
        const scale = Math.max(W / src.naturalWidth, H / src.naturalHeight);
        const dw = src.naturalWidth * scale, dh = src.naturalHeight * scale;
        ctx.drawImage(src, (W - dw) / 2, (H - dh) / 2, dw, dh);
        return c.toDataURL(mime, 0.9);
      }, { srcUrl, targetUrl: dataUrl(fp), mime });
      const b64 = out.split(',')[1];
      fs.writeFileSync(fp, Buffer.from(b64, 'base64'));
      done++;
    }
  }
  await browser.close();
  console.log(`${CLONE}: replaced ${done} asset files across ${keys.length} logical images`);
  keys.forEach(k => console.log(`  ${k}  <-  ${assign[k]}  (${groups[k].length} variant(s))`));
})();
