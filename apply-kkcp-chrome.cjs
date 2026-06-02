// Swap any clone's nav -> KKCP menu (class-based, works for fresh univet + branded mirrors) + clean footer.
const fs = require("fs");
const target = process.argv[2];
const HOME = "app/test-dummy-webs-1-react/_components/CloneTree.tsx";
function balancedUl(s,i){let j=i,d=0;while(j<s.length){const o=s.indexOf("<ul",j),c=s.indexOf("</ul>",j);if(c<0)return null;if(o>=0&&o<c){d++;j=o+3;}else{d--;j=c+5;if(d===0)return j;}}return null;}
function firstUl(s,marker){const m=s.indexOf(marker);if(m<0)return null;const st=s.lastIndexOf("<ul",m);const en=balancedUl(s,st);return en==null?null:s.slice(st,en);}
const isKkcp=(sub)=>/Smart-Class Rooms/.test(sub)&&/Regulatory Affairs/.test(sub);
function replaceAll(t,marker,repl){
  let from=0,n=0;
  while(n<12){
    const m=t.indexOf(marker,from);if(m<0)break;
    const st=t.lastIndexOf("<ul",m);const en=balancedUl(t,st);if(en==null)break;
    if(isKkcp(t.slice(st,en))){from=en;continue;}
    t=t.slice(0,st)+repl+t.slice(en);from=st+repl.length;n++;
  }
  return t;
}
const home=fs.readFileSync(HOME,"utf8");
const canon=firstUl(home,'className="primary-menu"');
if(!canon){console.error("no KKCP primary-menu in homepage");process.exit(1);}
const canonMobile=canon.replace('id="menu-main-menu" className="primary-menu"','className="mobile-menu has-vertical-divider"').replace(/\sid="menu-item-\d+"/g,"");

let t=fs.readFileSync(target,"utf8");
t=replaceAll(t,'className="primary-menu"',canon);
t=replaceAll(t,'className="mobile-menu',canonMobile);
// footer cleanup
t=t.split("RSTheme").join("KKCP Chennai");
t=t.split('tel:+81112522552').join('tel:04423821272');
t=t.split('mailto:info@kkcp.edu').join('mailto:kkcpchennai@gmail.com');
t=t.split('+81112522552').join('044-23821272 / 0-9841259415');
t=t.split('+1 (201) 895-3801').join('044-23821272 / 0-9841259415');
t=t.split('info@kkcp.edu').join('kkcpchennai@gmail.com');
t=t.replace(/Ta-134\/A[^<>{}]*?USA/g,'1/161, KRA Campus, Sankaralinganar Street, Gerugambakkam, Chennai');
const ob=(t.match(/<ul\b/g)||[]).length,cb=(t.match(/<\/ul>/g)||[]).length;
fs.writeFileSync(target,t);
console.log("applied. ul",ob,"/",cb,ob===cb?"OK":"MISMATCH","| KKCP menus:",(t.match(/Regulatory Affairs/g)||[]).length);
