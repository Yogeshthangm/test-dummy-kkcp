"use client";

import { useEffect, useState } from "react";

// Verbatim slide content (line breaks preserved exactly as provided).
const SLIDES: string[][] = [
  ["The Tamil Nadu", "Dr. M.G.R. Medical University", "Recognized Ph.D.", "Research Centre"],
  ["PCI has approved New Courses", "M.Pharm Pharmacy Practice & M.Pharm Regulatory Affairs"],
  ["Admission", "Open for", "2025-2026"],
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
      {/* Stage: fixed min-height so the nav dots don't jump between slides.
          Phrases flow and wrap naturally (2-3 lines) within the widened layer. */}
      <span style={{ display: "block", position: "relative", minHeight: "170px" }}>
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
              fontSize: "48px",
              lineHeight: "1.16",
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
