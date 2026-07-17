"use client";

import { useEffect } from "react";

// The generated page ships with scripts stripped, so Elementor's n-tabs widget
// never wires up click-to-switch. This restores that intended behaviour:
// clicking a tab title toggles the matching panel's `e-active` class (the CSS
// already hides `.e-con:not(.e-active)`), and marks the widget `e-activated`
// so the "show first child by default" fallback rule stands down.
export function TabsActivator() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    document.querySelectorAll<HTMLElement>(".e-n-tabs").forEach((tabs) => {
      const titles = Array.from(
        tabs.querySelectorAll<HTMLElement>(".e-n-tab-title"),
      );
      const content = tabs.querySelector(".e-n-tabs-content");
      if (!content) return;
      const panels = Array.from(content.children) as HTMLElement[];

      const activate = (title: HTMLElement) => {
        tabs.classList.add("e-activated");
        const targetId = title.getAttribute("aria-controls");
        titles.forEach((t) => {
          const on = t === title;
          t.setAttribute("aria-selected", on ? "true" : "false");
          t.setAttribute("tabindex", on ? "0" : "-1");
          t.classList.toggle("e-active", on);
        });
        panels.forEach((p) => {
          p.classList.toggle("e-active", p.id === targetId);
        });
      };

      titles.forEach((t) => {
        const handler = () => activate(t);
        t.addEventListener("click", handler);
        cleanups.push(() => t.removeEventListener("click", handler));
      });
    });

    return () => cleanups.forEach((c) => c());
  }, []);

  return null;
}
