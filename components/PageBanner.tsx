import Link from "next/link";

type Crumb = { label: string; href: string };

export default function PageBanner({
  title,
  trail = [],
}: {
  title: string;
  trail?: Crumb[];
}) {
  return (
    <section className="page-banner">
      <div className="container">
        <h1>{title}</h1>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {trail.map((c) => (
            <span key={c.href} style={{ display: "contents" }}>
              <span className="sep">/</span>
              <Link href={c.href}>{c.label}</Link>
            </span>
          ))}
          <span className="sep">/</span>
          <span className="current">{title}</span>
        </nav>
      </div>
    </section>
  );
}
