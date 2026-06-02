import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/nav";

const QUICK = [
  { label: "About Us", href: "/about/" },
  { label: "Apply Online", href: "/apply-online/" },
  { label: "Publications", href: "/publications/" },
  { label: "Placement", href: "/placement/" },
  { label: "News", href: "/news/" },
  { label: "Contact", href: "/contact/" },
];

const COURSES = [
  { label: "Diploma in Pharmacy", href: "/diploma-in-pharmacy/" },
  { label: "Bachelor of Pharmacy", href: "/bachelor-of-pharmacy/" },
  { label: "Master of Pharmacy", href: "/master-of-pharmacy/" },
  { label: "Doctor of Pharmacy", href: "/doctor-of-pharmacy/" },
  { label: "Doctor of Pharmacy(PB)", href: "/doctor-of-pharmacypb/" },
  { label: "Ph.D.", href: "/ph-d/" },
];

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.24 1l-2.23 2.3Z" fill="currentColor" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container top">
        <div>
          <span className="footer-logo">
            <Image src="/kkcp/footer-logo.png" alt="K.K. College of Pharmacy" width={300} height={84} />
          </span>
          <p>
            K.K. College of Pharmacy is affiliated with The Tamilnadu Dr. M.G.R.
            Medical University, Chennai, approved by the Pharmacy Council of
            India, New Delhi, and recognized by the Government of Tamil Nadu.
            Serving pharmacy education since 1992.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="foot-links">
            {QUICK.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Courses</h4>
          <ul className="foot-links">
            {COURSES.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="foot-contact">
          <h4>Reach Us</h4>
          <div className="row">
            <IconPin />
            <span>{CONTACT.footerAddress}</span>
          </div>
          <div className="row">
            <IconPhone />
            <span>{CONTACT.footerPhones.join(" / ")}</span>
          </div>
          <div className="row">
            <IconMail />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="container">
          K.K. College of Pharmacy © 2025 All rights reserved. Designed and
          Maintained by KKCP Chennai.
        </div>
      </div>
    </footer>
  );
}
