import Link from "next/link";
import type { ReactNode } from "react";

/* Reusable content blocks shared by the homepage and every inner page. */

export function Section({
  children,
  variant,
  id,
}: {
  children: ReactNode;
  variant?: "soft" | "navy";
  id?: string;
}) {
  return (
    <section className={`section${variant ? " " + variant : ""}`} id={id}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`section-head${align === "left" ? " left" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

export function Grid({
  cols = 3,
  children,
}: {
  cols?: 2 | 3 | 4;
  children: ReactNode;
}) {
  return <div className={`grid cols-${cols}`}>{children}</div>;
}

export function Card({
  title,
  children,
  href,
  badge,
  icon,
  more = "Read more",
}: {
  title: string;
  children?: ReactNode;
  href?: string;
  badge?: string;
  icon?: ReactNode;
  more?: string;
}) {
  const inner = (
    <>
      {icon && <span className="card-icon">{icon}</span>}
      {badge && <span className="badge">{badge}</span>}
      <h3>{title}</h3>
      {children && <p>{children}</p>}
      {href && <span className="more">{more} →</span>}
    </>
  );
  return href ? (
    <Link href={href} className="card">
      {inner}
    </Link>
  ) : (
    <div className="card">{inner}</div>
  );
}

export function Stats({
  items,
}: {
  items: { num: string; label: string }[];
}) {
  return (
    <div className="stats">
      {items.map((s) => (
        <div className="stat" key={s.label}>
          <div className="num">{s.num}</div>
          <div className="label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function CTA({
  title,
  text,
  buttonLabel = "Apply Online",
  buttonHref = "/apply-online/",
}: {
  title: string;
  text?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <div className="cta">
      <div>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      <Link href={buttonHref} className="btn btn-primary">
        {buttonLabel}
      </Link>
    </div>
  );
}

/* A small set of inline icons used by cards across the site. */
export const Icons = {
  cap: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4 2 9l10 5 10-5-10-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 11v4c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M22 9v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 3h6M10 3v6L4.5 18a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9V3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7.5 14h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5a2 2 0 0 1 2-2h6v16H6a2 2 0 0 0-2 2V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M20 5a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 1 2 2V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  pill: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="18" height="8" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  microscope: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 3l3 3-4 4-3-3 4-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 11a5 5 0 0 0 7 7M6 21h13M9 21a6 6 0 0 0 5-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m12 3 2.6 5.6L20.5 9l-4.3 4 1 6-5.2-2.9L6.8 19l1-6L3.5 9l5.9-.4L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};
