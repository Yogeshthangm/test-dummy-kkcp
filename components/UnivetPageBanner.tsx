// @ts-nocheck
import Link from "next/link";

type Crumb = { label: string; href: string };

// Univet inner-page banner: dark band + breadcrumb + rstb-page-title (same
// theme classes the source univet inner pages use, styled by clone-theme.css).
export function UnivetPageBanner({
  title,
  trail = [],
}: {
  title: string;
  trail?: Crumb[];
}) {
  return (
    <section
      className="rstb-inner-banner"
      style={{
        background:
          "linear-gradient(rgba(3,18,38,0.82), rgba(3,18,38,0.82)), #04162e",
        padding: "78px 0 70px",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", textAlign: "center" }}
      >
        <div
          className="rstb-breadcrumb"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            color: "#cdd9e6",
            fontSize: 15,
            marginBottom: 14,
          }}
        >
          <Link href="/" style={{ color: "#cdd9e6" }}>
            Home
          </Link>
          {trail.map((c) => (
            <span key={c.href} style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
              <span style={{ opacity: 0.5 }}>›</span>
              <Link href={c.href} style={{ color: "#cdd9e6" }}>
                {c.label}
              </Link>
            </span>
          ))}
          <span style={{ opacity: 0.5 }}>›</span>
          <span style={{ color: "#f6a623" }}>{title}</span>
        </div>
        <h1
          className="rstb-page-title"
          style={{
            color: "#ffffff",
            fontFamily: "Bitter, Georgia, serif",
            fontSize: "clamp(30px,4vw,46px)",
            fontWeight: 600,
            margin: 0,
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
