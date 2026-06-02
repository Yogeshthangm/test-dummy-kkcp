const fs=require("fs");
const f=process.argv[2];
let t=fs.readFileSync(f,"utf8");
// remove the <li> menu item whose anchor links to /apply-online/ (desktop + mobile)
const re=/<li[^>]*>\s*(?:\{" "\})?\s*<a href="\/apply-online\/"[\s\S]*?<\/a>\s*(?:\{" "\})?\s*<\/li>/g;
const n=(t.match(re)||[]).length;
t=t.replace(re,"");
fs.writeFileSync(f,t);
console.log((f.split("/")[1]||f)+": removed Apply Online x"+n);
