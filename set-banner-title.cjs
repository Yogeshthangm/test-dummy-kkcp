const fs=require("fs");
const [,,file,title]=process.argv;
let t=fs.readFileSync(file,"utf8");
t=t.replace(/(className="rstb-page-title"[^>]*>)[^<]*/, `$1${title}`);
t=t.replace(/(current-item"[^>]*>)[^<]*/, `$1${title}`);
fs.writeFileSync(file,t);
console.log("banner title set:",title);
