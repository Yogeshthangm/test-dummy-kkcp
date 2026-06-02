// Crawl a univet demo page into a local static mirror (like the existing ones),
// so build-clone-css + emit-react can turn it into a verbatim TSX clone.
// Usage: node mirror-univet.cjs <url> <name>
const { chromium } = require("playwright-core");
const fs = require("fs"), path = require("path");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const URL_ = process.argv[2], NAME = process.argv[3];
if (!URL_ || !NAME) { console.error("usage: node mirror-univet.cjs <url> <name>"); process.exit(1); }
const OUT = path.join("public", NAME), AS = path.join(OUT, "assets");
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(AS, { recursive: true });
const ASSET_RE = /\.(css|png|jpe?g|webp|gif|svg|woff2?|ttf|eot|ico)(\?|#|$)/i;

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, args: ["--no-sandbox"] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const captured = new Map();
  page.on("response", async (r) => {
    try {
      const u = r.url().split("#")[0];
      const ct = r.headers()["content-type"] || "";
      if (ASSET_RE.test(u) || /text\/css|image\/|font\//.test(ct)) {
        if (!captured.has(u)) captured.set(u, { buf: await r.body(), ct });
      }
    } catch {}
  });
  await page.goto(URL_, { waitUntil: "networkidle", timeout: 90000 });
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 80)); } });
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  let html = await page.content();
  await browser.close();

  const map = new Map(); let i = 0;
  for (const [u, { buf }] of captured) {
    const base = (u.split("?")[0].split("/").pop() || "asset").replace(/[^a-zA-Z0-9._-]/g, "_");
    const fn = String(i++).padStart(4, "0") + "__" + base;
    fs.writeFileSync(path.join(AS, fn), buf);
    map.set(u, fn); // store bare filename; paths built per-context (relative, like existing mirrors)
  }
  // localize url() inside CSS files
  for (const [u, { ct }] of captured) {
    if (!/css/.test(ct) && !/\.css(\?|$)/i.test(u)) continue;
    const p = path.join(AS, map.get(u).split("/").pop());
    let css = fs.readFileSync(p, "utf8");
    css = css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (m, q, ref) => {
      if (/^(data:|#)/.test(ref)) return m;
      let abs; try { abs = new URL(ref, u).href.split("#")[0]; } catch { return m; }
      const local = map.get(abs) || map.get(abs.split("?")[0]);
      return local ? `url(${local})` : m;
    });
    fs.writeFileSync(p, css);
  }
  const mapUrl = (ref) => {
    if (!ref || /^(data:|#|mailto:|tel:|javascript:)/.test(ref)) return null;
    let abs; try { abs = new URL(ref, URL_).href.split("#")[0]; } catch { return null; }
    const fn = map.get(abs) || map.get(abs.split("?")[0]);
    return fn ? "assets/" + fn : null; // relative to mirror root (where index.html lives)
  };
  html = html.replace(/\b(href|src|poster)=("|')(.*?)\2/g, (m, a, q, ref) => { const l = mapUrl(ref); return l ? `${a}=${q}${l}${q}` : m; });
  html = html.replace(/\bsrcset=("|')(.*?)\1/g, (m, q, val) => {
    const nv = val.split(",").map(s => { const parts = s.trim().split(/\s+/); const l = mapUrl(parts[0]); return (l || parts[0]) + (parts[1] ? " " + parts[1] : ""); }).join(", ");
    return `srcset=${q}${nv}${q}`;
  });
  html = html.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (m, q, ref) => { const l = mapUrl(ref); return l ? `url(${l})` : m; });
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<script\b[^>]*\/>/gi, "");
  fs.writeFileSync(path.join(OUT, "index.html"), html);
  console.log(`mirrored ${URL_} -> public/${NAME}/ (${captured.size} assets, html ${html.length}b)`);
})().catch(e => { console.error("CRAWL_ERR", e.message); process.exit(1); });
