const fs=require("fs");
const f=process.argv[2];
let t=fs.readFileSync(f,"utf8");
const n=(t.match(/<svg\b/g)||[]).length;
t=t.replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/g,"");      // paired
t=t.replace(/<svg\b[^>]*\/>/g,"");                     // self-closed
fs.writeFileSync(f,t);
console.log(`${f.split('/')[1]}: svg ${n} stripped -> ${Math.round(t.length/1024)}KB`);
