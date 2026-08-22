"use client";

import { useEffect, useState } from "react";

// Verbatim slide content (line breaks preserved exactly as provided).
const SLIDES: string[][] = [
  ["The Tamil Nadu", "Dr. M.G.R. Medical University", "Recognized Ph.D.", "Research Centre"],
  ["PCI Approved New PG Courses", "M.Pharm- Pharmacy Practice & M.Pharm Regulatory Affairs"],
  ["Admissions", "Open for", "2026-2027"],
];

const INTERVAL_MS = 5000;

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % SLIDES.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span style={{ display: "block", position: "relative" }}>
      {/* Stage: reserves height so the nav dots don't jump between slides.
          Fluid, because the slide that wraps to the most lines on a phone needs the most
          room — a fixed 170px clipped the longest slide on mobile. */}
      <span
        style={{
          display: "block",
          position: "relative",
          minHeight: "clamp(150px, 42vw, 170px)",
        }}
      >
        {SLIDES.map((lines, idx) => (
          <span
            key={idx}
            aria-hidden={idx !== active}
            style={{
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              // Fluid: 48px is unreadable-wide on a 375px phone. The slider's own JS would
              // have rescaled this, but it is stripped from the generated page.
              fontSize: "clamp(26px, 6.4vw, 48px)",
              lineHeight: "1.18",
              whiteSpace: "normal",
              opacity: idx === active ? 1 : 0,
              transform: idx === active ? "translateY(0)" : "translateY(14px)",
              transition: "opacity .7s ease, transform .7s ease",
              pointerEvents: idx === active ? "auto" : "none",
            }}
          >
            {lines.join(" ")}
          </span>
        ))}
      </span>

      {/* Nav dots */}
      <span style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActive(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: idx === active ? "30px" : "12px",
              height: "12px",
              padding: 0,
              border: "none",
              borderRadius: "999px",
              cursor: "pointer",
              background: idx === active ? "#FDC72F" : "rgba(255, 255, 255, 0.55)",
              transition: "width .3s ease, background .3s ease",
            }}
          />
        ))}
      </span>
    </span>
  );
}
