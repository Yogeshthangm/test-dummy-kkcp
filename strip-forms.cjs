// Replace heavy <form>...</form> blocks (non-functional in static clone) with a light placeholder.
const fs=require("fs");
const f=process.argv[2];
let t=fs.readFileSync(f,"utf8");
const n=(t.match(/<form\b/g)||[]).length;
t=t.replace(/<form\b[^>]*>[\s\S]*?<\/form>/g,
  '<div style={{padding:"28px",background:"#f5f7fa",border:"1px solid #e3e8ee",borderRadius:"10px",textAlign:"center",color:"#5b6470"}}>Please contact the college office to proceed.</div>');
const ob=(t.match(/<div\b/g)||[]).length, cb=(t.match(/<\/div>/g)||[]).length;
fs.writeFileSync(f,t);
console.log(`${f.split('/')[1]}: forms ${n} stripped, div ${ob}/${cb} ${ob===cb?'OK':'CHECK'}`);
