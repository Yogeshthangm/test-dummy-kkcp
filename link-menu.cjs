// Link the KKCP header menu items to their real page slugs (parents stay "#").
// Usage: node link-menu.cjs <CloneTree.tsx>
const fs = require("fs");
const f = process.argv[2];
const MAP = {
  "Home": "/",
  "About": "/about/",
  "Smart-Class Rooms": "/smart-class-rooms/",
  "Library": "/laboratory/",
  "Laboratory": "/laboratory-2/",
  "Drug Information Centre": "/drug-information-centre/",
  "Animal House Facility": "/animal-house-facility/",
  "Transport": "/transport/",
  "Security": "/security/",
  "RO Water Plant": "/ro-water-plant/",
  "Hostel": "/hostel/",
  "Diploma in Pharmacy": "/diploma-in-pharmacy/",
  "Bachelor of Pharmacy": "/bachelor-of-pharmacy/",
  "Master of Pharmacy": "/master-of-pharmacy/",
  "Doctor of Pharmacy": "/doctor-of-pharmacy/",
  "Doctor of Pharmacy(PB)": "/doctor-of-pharmacypb/",
  "Ph.D.": "/ph-d/",
  "Pharmaceutics": "/departments/pharmaceutics/",
  "Pharmacology": "/departments/pharmacology/",
  "Pharmacognosy": "/departments/pharmacognosy/",
  "Regulatory Affairs": "/departments/regulatory-affairs/",
  "Pharmacy Practice": "/departments/pharmacy-practice/",
  "Publications": "/publications/",
  "Student Services": "/student-services/",
  "Placement": "/placement/",
  "Job Opportunities": "/job-opportunities/",
  "Alumni": "/alumni/",
  "Alumni Registration": "/alumni-registration/",
  "Alumni Contribution": "/alumni-contribution/",
  "Alumni General Meeting": "/alumni-general-meeting/",
  "Alumni Meet": "/alumni-meet/",
  "News": "/news/",
  "Apply Online": "/apply-online/",
  "Contact": "/contact/",
};
let t = fs.readFileSync(f, "utf8");
let count = 0;
for (const [label, href] of Object.entries(MAP)) {
  const esc = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // Only menu-item anchors with this exact label; href currently "#" or already a slug (idempotent).
  const re = new RegExp(
    '(<a href=)"[^"]*"( className="menu-item-link"><span className="menu-item-text">' + esc + "</span>)",
    "g"
  );
  t = t.replace(re, (m, a, b) => { count++; return a + '"' + href + '"' + b; });
}
fs.writeFileSync(f, t);
console.log((f.split("/")[1] || f) + ": linked " + count + " menu anchors");
