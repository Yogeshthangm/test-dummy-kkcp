"use client";

import { useEffect } from "react";

// Scroll-reveal for `.kkcp-reveal` elements. Follows the TabsActivator/MenuActivator idiom:
// the page stays fully server-rendered and the activator only layers motion on top.
//
// The hidden state lives behind `.js-reveal` on <html>, which only this component sets. With JS
// off (or if this never mounts) no element is ever hidden — content degrades to plain visible.
// Stagger comes from each element's own `--d` delay; `prefers-reduced-motion` is handled in CSS.
export default function RevealActivator() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".kkcp-reveal"));
    if (!targets.length) return;

    // Only arm the hidden state once we know we can un-hide again.
    root.classList.add("js-reveal");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      targets.forEach((el) => el.classList.add("is-in"));
      return () => root.classList.remove("js-reveal");
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target); // reveal once, never re-hide on scroll-up
        });
      },
      // threshold 0, not a fraction: an element taller than the viewport may never show a given
      // percentage of itself at once, and a reveal that never fires leaves content at opacity 0.
      // Firing as soon as the top edge crosses 90% of the viewport is both safe and well-timed.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    targets.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
