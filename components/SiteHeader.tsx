"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, CONTACT, ANNOUNCEMENT, type NavLink } from "@/lib/nav";

function Caret() {
  return (
    <svg className="caret" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
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
function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const [navOpen, setNavOpen] = useState(false);
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setOpen((o) => ({ ...o, [key]: !o[key] }));

  const isActive = (href: string) =>
    href !== "#" && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const renderItem = (item: NavLink, depth = 0) => {
    const hasChildren = !!item.children?.length;
    const key = item.label + depth;
    if (!hasChildren) {
      return (
        <li className={`nav-item${isActive(item.href) ? " active" : ""}`} key={key}>
          <Link href={item.href} onClick={() => setNavOpen(false)}>
            {item.label}
          </Link>
        </li>
      );
    }
    const SubTag = depth === 0 ? "ul" : "ul";
    return (
      <li className="nav-item" key={key}>
        {depth === 0 ? (
          <a href={item.href} onClick={(e) => { e.preventDefault(); toggle(key); }}>
            {item.label}
            <Caret />
          </a>
        ) : (
          <Link href={item.href} onClick={(e) => { e.preventDefault(); toggle(key); }}>
            {item.label}
            <Caret />
          </Link>
        )}
        <SubTag className={`${depth === 0 ? "dropdown" : "subdropdown"}${open[key] ? " open" : ""}`}>
          {item.children!.map((child) =>
            child.children?.length ? (
              renderItem(child, depth + 1)
            ) : (
              <li key={child.label}>
                <Link href={child.href} onClick={() => setNavOpen(false)}>
                  {child.label}
                </Link>
              </li>
            )
          )}
        </SubTag>
      </li>
    );
  };

  return (
    <header className="site-header">
      {/* logo band */}
      <div className="logo-band">
        <div className="container">
          <Link href="/" aria-label="K.K. College of Pharmacy — Home">
            <Image src="/kkcp/logo.png" alt="K.K. College of Pharmacy" width={1400} height={195} priority />
          </Link>
        </div>
      </div>

      {/* contact bar */}
      <div className="contact-bar">
        <div className="container">
          <span className="ci">
            <IconPhone />
            {CONTACT.phones.join(" / ")}
          </span>
          <span className="ci">
            <IconMail />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </span>
          <span className="ci">
            <IconPin />
            {CONTACT.address}
          </span>
        </div>
      </div>

      {/* nav */}
      <nav className="nav-bar" aria-label="Primary">
        <div className="container">
          <button
            className="nav-toggle"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Menu
          </button>
          <ul className={`nav-list${navOpen ? " open" : ""}`}>
            {NAV.map((item) => renderItem(item))}
          </ul>
        </div>
      </nav>

      {/* announcement ticker */}
      <div className="announce">
        <span className="tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginRight: 8 }}>
            <path d="M3 11v2l5 .5 8 4.5V6L8 10.5 3 11Z" fill="currentColor" />
            <path d="M18 8a4 4 0 0 1 0 8" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          Announcement
        </span>
        <div className="ticker">
          <div className="ticker-track">
            {ANNOUNCEMENT}&nbsp;&nbsp;
            <Link href="/apply-online/" className="apply">Apply Online</Link>
            &nbsp;&nbsp;•&nbsp;&nbsp;
            {ANNOUNCEMENT}
          </div>
        </div>
      </div>
    </header>
  );
}
