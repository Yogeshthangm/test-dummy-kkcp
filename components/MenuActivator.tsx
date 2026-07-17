// @ts-nocheck
"use client";

import { useEffect } from "react";

// Re-enables the mobile hamburger menu.
//
// These pages are DOM copies of the original theme with all of its JavaScript stripped, so the
// hamburger button had no handler at all — clicking it did nothing. The theme's CSS is still
// present and already knows how to render the open state; it just needs the classes the missing
// JS would have set:
//
//   .mobile-panel-wrapper.panel-offcanvas  ->  .show-panel          (slides the panel in)
//   .mobile-menu .sub-menu                 ->  display:none in CSS  (theme used jQuery slideToggle,
//                                                                    so we set the inline display)
//   .mobile-menu .sub-menu-icon            ->  .sub-menu-open       (flips the chevron)
//
// Mounted once globally from app/layout.tsx, alongside TabsActivator.
export default function MenuActivator() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const on = (el: Element, ev: string, fn: EventListener) => {
      el.addEventListener(ev, fn);
      cleanups.push(() => el.removeEventListener(ev, fn));
    };

    const panels = Array.from(
      document.querySelectorAll<HTMLElement>(".mobile-panel-wrapper"),
    );

    const closeAll = () => {
      panels.forEach((p) => p.classList.remove("show-panel"));
      document.body.style.overflow = "";
    };

    // ---- hamburger: open the off-canvas panel -------------------------------
    // Each header instance (main + sticky) has its own toggler and its own panel, so bind the
    // toggler to the panel inside its own nav-menu widget rather than to a global singleton.
    Array.from(document.querySelectorAll<HTMLElement>(".menu-toggler")).forEach((btn) => {
      on(btn, "click", (e) => {
        e.preventDefault();
        const scope = btn.closest(".rstb-nav-menu") || document;
        const panel =
          scope.querySelector<HTMLElement>(".mobile-panel-wrapper") || panels[0];
        if (!panel) return;
        const willOpen = !panel.classList.contains("show-panel");
        closeAll();
        if (willOpen) {
          panel.classList.add("show-panel");
          document.body.style.overflow = "hidden"; // don't scroll the page behind the panel
        }
      });
    });

    // ---- close: X button, the dark overlay, and Escape ----------------------
    document
      .querySelectorAll(".mobile-panel-close, .mobile-panel-overly")
      .forEach((el) => on(el, "click", (e) => { e.preventDefault(); closeAll(); }));

    on(document, "keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    });

    // ---- submenus inside the panel -----------------------------------------
    // The parent items are <a href="#">, so a click would otherwise jump to the top of the page.
    panels.forEach((panel) => {
      panel.querySelectorAll<HTMLElement>(".menu-item-has-children").forEach((li) => {
        const link = li.querySelector<HTMLElement>(":scope > a");
        const sub = li.querySelector<HTMLElement>(":scope > .sub-menu");
        const icon = li.querySelector<HTMLElement>(":scope > a > .sub-menu-icon");
        if (!link || !sub) return;

        on(link, "click", (e) => {
          const href = link.getAttribute("href") || "";
          // Only hijack the click for real dropdown parents (href="#"); a parent that points at a
          // real page should still navigate.
          if (href && href !== "#") return;
          e.preventDefault();
          const open = sub.style.display === "block";
          sub.style.display = open ? "none" : "block";
          icon?.classList.toggle("sub-menu-open", !open);
        });
      });
    });

    // ---- close the panel after navigating to a real link --------------------
    panels.forEach((panel) => {
      panel.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((a) => {
        const href = a.getAttribute("href") || "";
        if (!href || href === "#") return;
        on(a, "click", () => closeAll());
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
      document.body.style.overflow = "";
    };
  }, []);

  return null;
}
