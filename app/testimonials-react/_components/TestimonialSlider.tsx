"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

/* Alumni testimonial carousel — hand-rolled (the project ships no swiper/framer JS).
 *
 * Content note (ICPR): every string rendered here arrives verbatim from the page data. The
 * component adds only chrome — monogram initials, quote glyph, controls. The three source
 * testimonials carry their attribution in three DIFFERENT shapes, and we preserve each as-is
 * rather than normalising them into one:
 *   pairs     — labelled rows  ("Name :-" / "S.Ramasamy")
 *   lines     — single strings ("Name: Mohammed Zulkarnane A")
 *   signature — a trailing attribution sentence inside the quote itself
 */

export type Meta =
  | { kind: "pairs"; rows: { label: string; values: string[] }[] }
  | { kind: "lines"; rows: string[] }
  | { kind: "signature"; text: string };

export interface Testimonial {
  /** Name as it appears in the source copy — used for nav labels only. */
  who: string;
  /** Derived initials. Chrome, not content. */
  monogram: string;
  paras: string[];
  meta: Meta;
}

const AUTOPLAY_MS = 11000;

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "");

  const count = items.length;
  const go = useCallback((i: number) => setIdx(((i % count) + count) % count), [count]);
  const next = useCallback(() => go(idx + 1), [go, idx]);
  const prev = useCallback(() => go(idx - 1), [go, idx]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Autoplay. Never runs for reduced-motion users, and the pause button (WCAG 2.2.2) wins.
  useEffect(() => {
    if (!playing || reduced || count < 2) return;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [playing, reduced, count, next, idx]);

  // Swipe / drag.
  const drag = useRef<{ x: number; active: boolean }>({ x: 0, active: false });
  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, active: true };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.x;
    drag.current.active = false;
    if (Math.abs(dx) > 45) (dx < 0 ? next : prev)();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
  };

  return (
    <div
      className="kkcp-tslider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Alumni testimonials"
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
      onFocusCapture={() => setPlaying(false)}
      onBlurCapture={() => setPlaying(true)}
    >
      <div
        className="ts-viewport"
        ref={viewportRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        aria-live="polite"
      >
        <div
          className="ts-track"
          style={{
            transform: `translate3d(-${idx * 100}%, 0, 0)`,
            transition: reduced ? "none" : undefined,
          }}
        >
          {items.map((t, i) => (
            <article
              key={i}
              className={`ts-slide${i === idx ? " is-active" : ""}`}
              id={`${uid}-slide-${i}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${t.who}`}
              aria-hidden={i !== idx}
            >
              <div className="ts-rail">
                <div className="kkcp-monogram lg" aria-hidden="true">{t.monogram}</div>
                <span className="ts-glyph" aria-hidden="true">&rdquo;</span>
              </div>

              <div className="ts-body">
                <blockquote>
                  {t.paras.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </blockquote>
                <TestimonialMeta meta={t.meta} />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="ts-controls">
        <button type="button" className="ts-arrow" onClick={prev} aria-label="Previous testimonial">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
        </button>

        <div className="ts-dots" role="tablist" aria-label="Choose testimonial">
          {items.map((t, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              className={`ts-dot${i === idx ? " is-on" : ""}`}
              aria-selected={i === idx}
              aria-controls={`${uid}-slide-${i}`}
              aria-label={t.who}
              onClick={() => go(i)}
            >
              <span className="ts-dot-ink">{t.monogram}</span>
              {i === idx && playing && !reduced ? (
                <span className="ts-dot-ring" key={`ring-${idx}`} aria-hidden="true" />
              ) : null}
            </button>
          ))}
        </div>

        <button type="button" className="ts-arrow" onClick={next} aria-label="Next testimonial">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
        </button>

        <button
          type="button"
          className="ts-play"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause testimonial rotation" : "Play testimonial rotation"}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72L19 12 8 5.14z" /></svg>
          )}
        </button>
      </div>
    </div>
  );
}

function TestimonialMeta({ meta }: { meta: Meta }) {
  if (meta.kind === "signature") {
    return <p className="ts-signature">{meta.text}</p>;
  }
  if (meta.kind === "lines") {
    return (
      <ul className="ts-meta">
        {meta.rows.map((row, i) => (
          <li key={i}>{row}</li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="ts-meta">
      {meta.rows.map((row, i) => (
        <li key={i}>
          <strong>{row.label}</strong>
          {row.values.map((v, j) => (
            <span className="ts-meta-val" key={j}>{v}</span>
          ))}
        </li>
      ))}
    </ul>
  );
}
