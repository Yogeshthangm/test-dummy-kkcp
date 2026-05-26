#!/usr/bin/env node
/* swap-one-hero.cjs — replace a single asset with a KKCP source, cover-cropped + re-encoded
 * in the target's own format/dimensions. */
const fs = require('fs');
const path = require('path');
const TARGET = path.resolve(process.argv[2]);
const SOURCE = path.resolve(process.argv[3]);
if (!TARGET || !SOURCE) { console.error('usage: node swap-one-hero.cjs <target> <source>'); process.exit(1); }
const chromium = (() => { for (const m of ['playwright', 'playwright-core']) { try { return require(require.resolve(m, { paths: [process.cwd(), __dirname] })).chromium; } catch {} } process.exit(1); })();

const ext = path.extname(TARGET).toLowerCase();
const mime = ext === '.webp' ? 'image/webp' : ext === '.png' ? 'image/png' : 'image/jpeg';
const dataUrl = (file) => {
  const e = path.extname(file).toLowerCase();
  const m = e === '.png' ? 'image/png' : e === '.webp' ? 'image/webp' : 'image/jpeg';
  return `data:${m};base64,` + fs.readFileSync(file).toString('base64');
};

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const out = await page.evaluate(async ({ srcUrl, targetUrl, mime }) => {
    const load = (u) => new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = u; });
    const tgt = await load(targetUrl);
    const W = tgt.naturalWidth, H = tgt.naturalHeight;
    const src = await load(srcUrl);
    const c = document.createElement('canvas'); c.width = W; c.height = H;
    const ctx = c.getContext('2d');
    const scale = Math.max(W / src.naturalWidth, H / src.naturalHeight);
    const dw = src.naturalWidth * scale, dh = src.naturalHeight * scale;
    ctx.drawImage(src, (W - dw) / 2, (H - dh) / 2, dw, dh);
    return c.toDataURL(mime, 0.92);
  }, { srcUrl: dataUrl(SOURCE), targetUrl: dataUrl(TARGET), mime });
  fs.writeFileSync(TARGET, Buffer.from(out.split(',')[1], 'base64'));
  await browser.close();
  console.log(`wrote ${TARGET} (${fs.statSync(TARGET).size} bytes) <- ${SOURCE}`);
})();
