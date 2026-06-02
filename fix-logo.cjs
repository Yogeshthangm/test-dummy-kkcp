// Safe logo->KKCP wordmark: only writes if a replacement happened AND <ul> balance is unchanged.
const fs=require("fs");
const f=process.argv[2];
let t=fs.readFileSync(f,"utf8");
const ob=(t.match(/<ul\b/g)||[]).length, cb=(t.match(/<\/ul>/g)||[]).length;
const WM='<a href="/" target="_top"><span className="kkcp-wordmark" style={{fontWeight:800,fontSize:"30px",lineHeight:1,letterSpacing:"1px",color:"#ffffff",fontFamily:"inherit",display:"inline-block",textShadow:"0 1px 3px rgba(0,0,0,0.45)"}}>KKCP</span></a>';
const re=/(<div className="rstb-site-logo">(?:\{" "\}|\s)*)<a\b[^>]*>(?:\{" "\}|\s)*<img\b[^>]*\/>(?:\{" "\}|\s)*<\/a>/g;
let n=0; const t2=t.replace(re,(m,pre)=>{n++;return pre+WM;});
const oa=(t2.match(/<ul\b/g)||[]).length, ca=(t2.match(/<\/ul>/g)||[]).length;
if(n>0 && oa===ob && ca===cb){ fs.writeFileSync(f,t2); console.log(`logo replaced x${n}, ul stable (${oa}/${ca})`); }
else console.log(`logo: skipped (n=${n}, ul ${ob}/${cb} -> ${oa}/${ca})`);
