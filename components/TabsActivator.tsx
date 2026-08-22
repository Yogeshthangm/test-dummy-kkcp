// @ts-nocheck
"use client";

import { useEffect } from "react";

// Re-enables Elementor nested-tabs (e-n-tabs) interactivity — the generator strips the
// original JS, so clicking a tab did nothing. CSS hides `.e-n-tabs-content > .e-con:not(.e-active)`,
// so we just toggle `.e-active` on the clicked title + its aria-controls panel.
export default function TabsActivator() {
  useEffect(() => {
    const widgets = Array.from(document.querySelectorAll(".elementor-widget-n-tabs, .e-n-tabs"));
    const cleanups: Array<() => void> = [];

    widgets.forEach((widget) => {
      const titles = Array.from(widget.querySelectorAll<HTMLElement>(".e-n-tab-title"));
      const contents = Array.from(widget.querySelectorAll<HTMLElement>(".e-n-tabs-content > .e-con"));
      if (!titles.length) return;

      const activate = (id: string | null) => {
        titles.forEach((t) => {
          const on = t.getAttribute("aria-controls") === id;
          t.setAttribute("aria-selected", on ? "true" : "false");
          t.classList.toggle("e-active", on);
        });
        contents.forEach((c) => c.classList.toggle("e-active", c.id === id));
      };

      titles.forEach((title) => {
        const handler = () => activate(title.getAttribute("aria-controls"));
        title.addEventListener("click", handler);
        cleanups.push(() => title.removeEventListener("click", handler));
      });

      // ensure the initially-selected tab's panel is shown
      const selected =
        titles.find((t) => t.getAttribute("aria-selected") === "true") || titles[0];
      if (selected) activate(selected.getAttribute("aria-controls"));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
