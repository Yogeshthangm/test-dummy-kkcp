"use client";

import { useEffect, useState } from "react";

// Hero background images (WebP), in slide order.
const IMAGES = [
  "/test-dummy-webs-1/assets/home/IMG_0336.webp",
  "/test-dummy-webs-1/assets/home/IMG_0348.webp",
  "/test-dummy-webs-1/assets/home/IMG_0286.webp",
];

// Matches HeroSlider's cadence so the artwork and the headline turn together.
const INTERVAL_MS = 5000;

export function HeroBgCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % IMAGES.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span
      aria-hidden="true"
      style={{
        overflow: "hidden",
        padding: "0px",
        width: "1920px",
        height: "809px",
        zIndex: 8,
        position: "absolute",
        transformOrigin: "50% 50%",
        display: "block",
        left: "-240px",
        top: "151px",
        visibility: "visible",
        opacity: 1,
        pointerEvents: "auto",
      }}
    >
      {IMAGES.map((src, idx) => (
        <span
          key={src}
          style={{
            display: "block",
            position: "absolute",
            inset: 0,
            background: `url("${src}") 50% 50% / cover no-repeat transparent`,
            opacity: idx === active ? 1 : 0,
            transition: "opacity 1.2s ease",
          }}
        />
      ))}

      {/* Scrim: the source hero art was dark, these photos are not. Keeps the
          white headline and "Apply Online" legible on every slide. */}
      <span
        style={{
          display: "block",
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.12) 35%, rgba(0,0,0,0.58) 100%)",
          pointerEvents: "none",
        }}
      />
    </span>
  );
}
