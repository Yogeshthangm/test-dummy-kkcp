// @ts-nocheck
/* eslint-disable */
/**
 * KkcpTree — K.K. College of Pharmacy home page.
 * =============================================================================
 *
 * WHAT THIS IS
 *   A DOM -> JSX emit of the mirrored source page, kept as a real React tree
 *   (no iframe, no dangerouslySetInnerHTML). Source class names and inline
 *   styles are preserved verbatim so the vendored theme CSS keeps matching.
 *
 * HOW IT IS MOUNTED
 *   app/page.tsx renders <div className="kkcp-root"><KkcpTree /></div> and
 *   loads the two vendored stylesheets. Nothing outside .kkcp-root is styled.
 *
 * CSS LAYERING — later wins, so order matters when you debug a style:
 *   1. /test-dummy-webs-1/kkcp-theme.css   vendored theme (scoped to .kkcp-root)
 *   2. /test-dummy-webs-1/kkcp-fixes.css   cross-page corrections
 *   3. PAGE_STYLES (this file)             home-page-only client change list
 *   Rules here are last in document order, so they only need to out-specify
 *   layers 1-2 — except where those layers used !important, which specificity
 *   alone cannot beat. Those few spots carry !important with a note saying why.
 *
 * EXTERNAL DEPENDENCIES — this file is NOT self-contained. Porting it means
 * porting or re-pointing all six of these:
 *   ./HeroSlider           <HeroSlider />        hero slide content
 *   ./AdmissionsSection    <AdmissionsSection /> section 10, styled by change 1.16 here
 *   ./ImageSlider          <ImageSlider />       MISSING — see known issue 1
 *   @/components/KkcpHeader, @/components/KkcpFooter    site chrome
 *   @/lib/faculty          HOME_FACULTY[]        section 9 carousel data
 * Plus the two vendored stylesheets listed under CSS LAYERING, and a wrapper
 * element carrying className="kkcp-root" — without it NOTHING here is styled.
 *
 * EDITING RULES FOR THIS FILE
 *   - Class names and element ids (elementor-element-XXXXXXX) are the contract
 *     with the vendored CSS. Renaming one silently detaches its styling.
 *   - Scope every new rule to its section id. Several widgets reuse identical
 *     markup (.rs-academic-cards.style-two appears in BOTH "Courses Offered"
 *     and the three "Inside KKCP" tabs), so an unscoped rule leaks.
 *   - @ts-nocheck is deliberate: the tree contains Slider Revolution custom
 *     elements (<sr7-module>, <sr7-txt>, ...) that have no JSX intrinsic types.
 *
 * KNOWN ISSUES (pre-existing, deliberately NOT silently changed)
 *   [1] MISSING DEPENDENCY - ./ImageSlider is imported and rendered inside the
 *       hero but no such module exists anywhere in the repo. This file cannot
 *       compile until that component is supplied. See the import below.
 *   [2] DEAD RULE - change 1.2 in PAGE_STYLES had a stray dangling ".kkcp-root"
 *       on its own line, which CSS folds into the next selector. The rule reads
 *       ".kkcp-root .kkcp-root .elementor-51 ..." and .kkcp-root is never nested
 *       inside itself, so it has never matched anything. Left as-is because
 *       repairing it would change the rendered layout; see the note at the rule.
 *   [3] DUPLICATE NUMBERING - the client change list reuses "1.11" and "1.15"
 *       for two different changes each. Numbers are kept as the client wrote
 *       them so they still line up with the client's own document.
 */

import { HOME_FACULTY } from "@/lib/faculty";
import { KkcpHeader } from "@/components/KkcpHeader";
import { KkcpFooter } from "@/components/KkcpFooter";
import { HeroSlider } from "./HeroSlider";
import { AdmissionsSection } from "./AdmissionsSection";
// FIXME(known issue 1): this module does not exist in the repo. It is rendered
// once, prop-less, inside the hero (search "<ImageSlider" below). The build
// fails here until someone adds ./ImageSlider.tsx or removes both the import
// and its call site. Left in place so the original intent is not lost.
import ImageSlider from "./ImageSlider";
import CourseCard from "./CourseCard";
import HeroSection from "./HeroSection";
import CampusCarousel from "./CampusCarousel";

/**
 * Home-page-only CSS — layer 3 of 3 (see the file header).
 *
 * Kept inline, in source order, because the cascade depends on that order.
 * Section numbers are the client's change-list numbers, not a sequence.
 *
 *   1.1   header contact bar + larger college name
 *   1.2   nav row back into document flow            <- DEAD, see known issue 2
 *   1.6   Drug Information Centre link, heading, column width  (1.6 / b / c)
 *   1.8   Latest News & Updates scroll animation
 *   1.11  KKCP Faculty carousel  +  1.11 (again) faculty heading centring
 *   1.12  course dropdown + Call Now button
 *   1.13  "Inside KKCP" type scale
 *   1.14  orphaned last card spans the full row
 *   1.15  Campus Life carousel captions  +  1.15 (again) Tie Up Hospital panel
 *   1.16  "Admissions Open Now" info card
 *   1.17  "Courses Offered" cards: caption bottom-right, lighter scrim, responsive
 *   ---   mobile responsive fixes for the hero and the courses grid
 */
const PAGE_STYLES = `
/* ═══ KKCP client change list (home page) ═══ */
/* 1.1 header: contact / mail / address bar + larger college name */
.kkcp-root .rstb-header .kkcp-college-since {
  font-family: Bitter, serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.4;
  color: #003A65;
  margin: 8px 0 0;
}

@media (max-width: 1024px) {
}
/* the real nav carries 11 top-level items — keep them clear of the search icon */
.kkcp-root .rstb-header .elementor-element-37b598d {
  padding-right: 0 !important;
}
.kkcp-root .rstb-header .primary-menu > .menu-item {
  margin: 0 4px !important;
}
.kkcp-root .rstb-header .primary-menu > .menu-item > .menu-item-link {
  padding: 22px 6px !important;
}

/* 1.2 the nav row used to sit absolutely on top of the hero; put it back in the
         document flow (on the theme's primary colour, the colour its own sticky copy uses)
         so the image slide starts one step down — below the whole header. */
/* !! DEAD RULE (known issue 2) — the doubled ".kkcp-root .kkcp-root" below is not a
   typo you should fix in passing. The source had a stray ".kkcp-root" dangling on its
   own line above this selector; CSS treats the newline as a descendant combinator and
   folds the two into one. Nothing nests .kkcp-root inside .kkcp-root, so this rule has
   never applied and the hero has never actually lost its padding-top. Deleting one
   ".kkcp-root" makes the rule live and MOVES THE HERO — do it as a deliberate,
   separately reviewed layout change, not as a cleanup. */
.kkcp-root .kkcp-root .elementor-51 .elementor-element-3bf6c45 {
  --padding-top: 0px;
  padding-top: 0px;
}

/* 1.8 Latest News & Updates: scroll animation (theme animate.css keyframes) */
.kkcp-root .elementor-element-bf4d421 .event-post-item {
  animation-fill-mode: both;
}
.kkcp-root .elementor-element-bf4d421 .event-post-item:nth-child(1) {
  animation-delay: 0.05s;
}
.kkcp-root .elementor-element-bf4d421 .event-post-item:nth-child(2) {
  animation-delay: 0.2s;
}
.kkcp-root .elementor-element-bf4d421 .event-post-item:nth-child(3) {
  animation-delay: 0.35s;
}
.kkcp-root .elementor-element-bf4d421 .event-post-item:nth-child(4) {
  animation-delay: 0.5s;
}
@supports (animation-timeline: view()) {
  .kkcp-root .elementor-element-bf4d421 .event-post-item {
    animation-timeline: view();
    animation-delay: 0s;
    animation-duration: auto;
    animation-range: entry 5% cover 34%;
  }
  .kkcp-root .elementor-element-bf4d421 .event-post-item:nth-child(2) {
    animation-range: entry 5% cover 40%;
  }
  .kkcp-root .elementor-element-bf4d421 .event-post-item:nth-child(3) {
    animation-range: entry 5% cover 46%;
  }
  .kkcp-root .elementor-element-bf4d421 .event-post-item:nth-child(4) {
    animation-range: entry 5% cover 52%;
  }
  .kkcp-root .elementor-element-196859a,
  .kkcp-root .elementor-element-705e722 {
    animation-name: fadeInUp;
    animation-duration: auto;
    animation-fill-mode: both;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }
}
@media (prefers-reduced-motion: reduce) {
  .kkcp-root .elementor-element-bf4d421 .event-post-item {
    animation: none !important;
  }
}

/* 1.11 KKCP Faculty: 11 portraits, 3 per view → 4 swipes */
.kkcp-root .elementor-51 .elementor-element-kkcpfaculty {
  --display: flex;
  --flex-direction: column;
  --padding-top: 80px;
  --padding-bottom: 80px;
  --padding-left: 10px;
  --padding-right: 10px;
  --content-width: min(100%, var(--container-max-width, 1140px));
}
.kkcp-root .elementor-element-kkcpfacultyh {
  margin-bottom: 40px;
}
.kkcp-root .elementor-element-kkcpfacultyh .title {
  font-family: Bitter, serif;
  font-size: 44px;
  line-height: 1.2;
  font-weight: 600;
  color: #003A65;
  margin: 6px 0 0;
}
.kkcp-root .elementor-element-kkcpfacultyh .sub-text {
  color: #003A65;
}
.kkcp-root .kkcp-faculty-carousel {
  display: flex;
  gap: 30px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-bottom: 14px;
}
.kkcp-root .kkcp-faculty-slide {
  flex: 0 0 calc((100% - 60px) / 3);
  scroll-snap-align: start;
  margin: 0;
}
.kkcp-root .kkcp-faculty-slide img {
  display: block;
  width: 100%;
  height: 340px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  background-color: #eef2f6;
}
.kkcp-root .kkcp-faculty-caption {
  padding: 14px 4px 0;
  text-align: center;
}
.kkcp-root .kkcp-faculty-name {
  font-family: Bitter, serif;
  font-weight: 600;
  font-size: 19px;
  line-height: 1.35;
  color: #003A65;
  margin: 0;
}
.kkcp-root .kkcp-faculty-designation {
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #5b6b8c;
  margin: 5px 0 0;
}
@media (max-width: 1024px) {
  .kkcp-root .kkcp-faculty-slide {
    flex: 0 0 calc((100% - 30px) / 2);
  }
}
@media (max-width: 767px) {
  .kkcp-root .kkcp-faculty-slide {
    flex: 0 0 100%;
  }
}

/* 1.6 Drug Information Centre link inside the blue box */
.kkcp-root .elementor-element-db9b4c6 .descripti p {
  color: #FFFFFF;
}
.kkcp-root .elementor-element-db9b4c6 .descripti a {
  color: #FDC72F;
  text-decoration: underline;
}
/* 1.6b "Drug Information Centre" heading text — bigger + bolder per client request */
.kkcp-root .elementor-element-db9b4c6 .descripti p:first-child,
.kkcp-root .elementor-element-db9b4c6 .descripti p:first-child strong {
  font-size: 28px;
  line-height: 1.25;
  font-weight: 800;
}
/* 1.6c the inner column was only as wide as the APPLY NOW button (~189px), so the heading
         wrapped to 3 lines with empty box to its right. Let it use the box's full width so
         "Drug Information" fits on one line and the heading reads as 2 lines. */
.kkcp-root .elementor-element-b69eace > .elementor-element-a3c7b91 {
  width: 100%;
}

/* 1.11 heading sits centred like the other section headings */
.kkcp-root .elementor-element-kkcpfacultyh .prelements-heading,
.kkcp-root .elementor-element-kkcpfacultyh .title-inner {
  text-align: center;
}

/* 1.12 the course dropdown matches the other fields; Call Now sits beside Apply Now */
.kkcp-root .elementor-51 .elementor-element-2639bbd select.wpcf7-select {
  display: block;
  width: 100%;
  height: 50px;
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background-color: #003359;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 400;
}
.kkcp-root .elementor-51 .elementor-element-2639bbd select.wpcf7-select option {
  color: #003A65;
  background-color: #FFFFFF;
}
.kkcp-root .elementor-element-2639bbd .form-btn-area {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
}
.kkcp-root .elementor-element-2639bbd .form-btn-area p {
  margin: 0;
}
.kkcp-root .elementor-element-2639bbd .form-btn-area .rs-button {
  background-color: transparent;
  border: 2px solid #FDC72F;
  color: #FDC72F;
  padding: 14px 26px;
}
.kkcp-root .elementor-element-2639bbd .form-btn-area .rs-button:hover {
  background-color: #FDC72F;
  color: #003A65;
}

/* 1.13 "Inside KKCP" departments section — bolder + larger type per client request.
         Scoped to the section container (elementor-element-09ded08) so it cannot affect the
         identical widget classes used elsewhere on the page. Weights go 600 -> 700; sizes up. */
.kkcp-root .elementor-element-09ded08 .elementor-element-26e8be8 .sub-text {
  font-size: 18px;
  font-weight: 700;
}
.kkcp-root .elementor-element-09ded08 .elementor-element-26e8be8 h2.title {
  font-size: clamp(34px, 5vw, 56px);
  font-weight: 700;
}
.kkcp-root .elementor-element-09ded08 .e-n-tab-title-text {
  font-size: 24px;
  font-weight: 700;
}
.kkcp-root .elementor-element-09ded08 .single-item .content-inner .title,
.kkcp-root .elementor-element-09ded08 .single-item .content-inner .title a {
  font-size: clamp(22px, 2.3vw, 30px);
  font-weight: 700;
}

/* 1.14 an orphaned last card (odd card count -> alone in the final row of the 2-col grid)
         spans the full row width instead of sitting half-empty. :last-child:nth-child(odd) only
         matches when the final card would otherwise be alone, so even-count tabs are untouched and
         the single-column mobile layout is unaffected. */
.kkcp-root
  .elementor-element-09ded08
  .grid-wrapper
  .single-item:last-child:nth-child(odd) {
  grid-column: 1 / -1;
}

/* 1.15 Campus Life carousel: drop the caption from every slide — it carries the title text
         AND the navy gradient overlay (revealed via .rs-caption-on-hover), so hiding it removes
         the title and the resting/hover overlay together. !important is required to beat the
         theme's higher-specificity rule (.elementor-51 .elementor-element.elementor-element-2cd6a66
         …caption{display:flex}). Then force every image to a uniform square (they were 407px wide
         but 278px/549px tall). Scoped to this carousel so no other image carousel is affected. */
.kkcp-root .elementor-element-2cd6a66 .elementor-image-carousel-caption {
  display: none !important;
}
.kkcp-root .elementor-element-2cd6a66 .swiper-slide-inner {
  aspect-ratio: 1 / 1;
}
.kkcp-root .elementor-element-2cd6a66 .swiper-slide-image {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

/* 1.15 "Our Tie Up Hospital" tab — descriptive panel (image + copy) that replaces the
         former single link card. Scoped to the section so it cannot leak to other tabs. */
.kkcp-root .elementor-element-09ded08 .kkcp-tieup {
  display: grid;
  grid-template-columns: 340px minmax(0, 1fr);
  gap: 32px;
  align-items: start;
}
.kkcp-root .elementor-element-09ded08 .kkcp-tieup .kkcp-tieup-media {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
  align-self: start;
}
.kkcp-root .elementor-element-09ded08 .kkcp-tieup .kkcp-tieup-media img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
.kkcp-root .elementor-element-09ded08 .kkcp-tieup .kkcp-tieup-body h4 {
  color: #FDC72F;
  font-size: clamp(22px, 2.2vw, 30px);
  font-weight: 700;
  margin: 0 0 16px;
  line-height: 1.25;
}
.kkcp-root .elementor-element-09ded08 .kkcp-tieup .kkcp-tieup-body p {
  color: #e7edf3;
  font-size: 15px;
  line-height: 1.65;
  margin: 0 0 14px;
}
.kkcp-root
  .elementor-element-09ded08
  .kkcp-tieup
  .kkcp-tieup-body
  p:last-child {
  margin-bottom: 0;
}
@media (max-width: 820px) {
  .kkcp-root .elementor-element-09ded08 .kkcp-tieup {
    grid-template-columns: 1fr;
    gap: 22px;
  }
  .kkcp-root .elementor-element-09ded08 .kkcp-tieup .kkcp-tieup-media {
    max-width: 340px;
  }
}

/* 1.16 The "Admissions Open Now" heading + description shared the same band as the
         decorative lab photo (.rs-multi-image, z-index:4) and the section background image,
         which left the dark #051435 copy unreadable. Drop that photo below the content column
         and wrap the heading in a solid navy info-card (mirrors the application-form panel)
         with light text, so it reads cleanly as an intentional card. Scoped to this section. */
.kkcp-root .elementor-element-72f9ac1 .rs-multi-image {
  z-index: 0;
}
.kkcp-root .elementor-element-9013095 {
  position: relative;
  z-index: 5;
  align-self: start;
  background: #003A65;
  border-top: 5px solid #FDC72F;
  border-radius: 0 0 12px 12px;
  padding: 26px 30px;
  box-shadow: 0 16px 40px rgba(5, 20, 53, 0.28);
}
.kkcp-root .elementor-element-9013095 .title-inner .title,
.kkcp-root .elementor-element-9013095 .title-inner .title div,
.kkcp-root .elementor-element-9013095 .title-inner .sub-text,
.kkcp-root .elementor-element-9013095 .descripti,
.kkcp-root .elementor-element-9013095 .descripti p {
  color: #fff !important;
}
.kkcp-root .elementor-element-9013095 .sub-text svg path {
  fill: #FDC72F !important;
}
@media (max-width: 900px) {
  .kkcp-root .elementor-element-9013095 {
    padding: 18px 20px;
  }
}

/* ── MOBILE RESPONSIVE FIXES ──────────────────────────────────────────────
       Slider Revolution draws the hero on a fixed 1440px canvas and rescales it
       in JavaScript. That JS is stripped from these generated pages, so every layer
       stayed pinned at desktop size: the headline layer is 1160px wide and the
       "KKCP" watermark is 350px tall — both spill far outside a 375px phone.
       These rules do by CSS what the missing JS would have done. */
@media (max-width: 1024px) {
  .kkcp-root sr7-module sr7-mask.kkcp-hero-copy,
  .kkcp-root sr7-module sr7-txt.kkcp-hero-copy {
    width: 88vw !important;
    max-width: 88vw !important;
    height: auto !important;
    max-height: none !important;
    white-space: normal !important;
    overflow: visible !important;
  }
  .kkcp-root sr7-module sr7-txt.demo1-hero-title {
    font-size: 20vw !important;
    line-height: 1.05 !important;
  }
}
@media (max-width: 767px) {
  /* the giant "KKCP" watermark is purely decorative and cannot fit a phone */
  .kkcp-root sr7-module sr7-txt.demo1-hero-title {
    display: none !important;
  }
}

/* Courses Offered: the grid kept 3 columns on a phone, squeezing each card to
       ~110px and cutting the 3rd column off-screen. Stack it. */
@media (max-width: 767px) {
  .kkcp-root .rs-academic-cards .grid-wrapper {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }
  .kkcp-root .rs-academic-cards .single-item {
    width: 100% !important;
    max-width: 100% !important;
    min-height: 190px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .kkcp-root .rs-academic-cards .grid-wrapper {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 18px !important;
  }
}

/* 1.17 "Courses Offered" cards — client change list:
         (a) the course title moves from the centre of the card down to its bottom-RIGHT corner,
         (b) the navy scrim over the photograph gets lighter, so more of the image reads through,
         (c) the card, its padding and its type scale down cleanly to tablet and phone widths.

       Scoped to this widget (.elementor-element-kkcpcoursesc) on purpose: the identical
       .rs-academic-cards.style-two markup is reused three more times by the "Inside KKCP"
       tabs further down the page, and those cards must keep their centred captions.

       !important is load-bearing here, not defensive: kkcp-fixes.css centres these cards with
       justify-content / align-items / text-align / padding, each !important. Specificity alone does
       not outrank an !important declaration, so the overrides have to carry one too — this
       block then wins on specificity among the !important rules. */

/* (b) lighter scrim. It was a solid #003A65 wash (fully opaque from 91% down); it now
       peaks at 60% alpha and only in the bottom band, so the photograph stays visible.
       Legibility is carried by the title's text-shadow rather than by a heavy overlay. */
.kkcp-root
  .elementor-element-kkcpcoursesc
  .rs-academic-cards.style-two
  .single-item::after {

}

/* (a) caption to the bottom-right corner. The card is already a column flex box, so
       justify-content pins the caption to the bottom edge and the text-align chain pushes
       every line — including the second line of a wrapped title — to the right edge. */
.kkcp-root
  .elementor-element-kkcpcoursesc
  .rs-academic-cards.style-two
  .single-item {
  justify-content: flex-end !important;
  align-items: stretch !important;
  text-align: right !important;
  padding: clamp(18px, 2.2vw, 28px) !important;
}
.kkcp-root
  .elementor-element-kkcpcoursesc
  .rs-academic-cards.style-two
  .single-item
  .content-wrapper {
  align-items: flex-end !important;
  justify-content: flex-end !important;
  text-align: right !important;
}
.kkcp-root
  .elementor-element-kkcpcoursesc
  .rs-academic-cards.style-two
  .single-item
  .content-inner {
  text-align: right !important;
}
.kkcp-root
  .elementor-element-kkcpcoursesc
  .rs-academic-cards.style-two
  .single-item
  .title {
  margin: 0 !important;
  text-align: right !important;
}
.kkcp-root
  .elementor-element-kkcpcoursesc
  .rs-academic-cards.style-two
  .single-item
  .title
  a {
  font-size: clamp(18px, 1.7vw, 26px);
  line-height: 1.3;
  text-shadow:
    0 1px 10px rgba(0, 26, 46, 0.85),
    0 1px 3px rgba(0, 26, 46, 0.6);
}

/* (c) responsive. The shared block above already drops this grid to 2 columns at
       <=1024px and 1 column at <=767px; what follows keeps the corner caption in
       proportion at those widths — a phone card is only ~340px wide, so the card height,
       border and padding all come down with it, and the fade starts higher up the shorter
       card so it still sits behind the caption instead of below it. */
@media (max-width: 1024px) {
  .kkcp-root
    .elementor-element-kkcpcoursesc
    .rs-academic-cards.style-two
    .single-item {
    min-height: 260px;
  }
}
@media (max-width: 767px) {
  .kkcp-root
    .elementor-element-kkcpcoursesc
    .rs-academic-cards.style-two
    .single-item {
    min-height: 210px;
    border-width: 4px;
    padding: 16px !important;
  }
  .kkcp-root
    .elementor-element-kkcpcoursesc
    .rs-academic-cards.style-two
    
}


.horizontal-animation {
  display: flex;
  width: max-content;
  gap: 20px;

  animation: infiniteSlide 20s linear infinite;
}

.horizontal-animation .event-post-item {
  flex: 0 0 auto;
}

/* Move exactly half of the duplicated content */
@keyframes infiniteSlide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-50% - 10px));
  }
}

`;

export function KkcpTree() {
  return (
    <div
      className="home wp-singular page-template-default page page-id-51 wp-theme-kkcp gsap-enable elementor-default elementor-template-full-width elementor-kit-14 elementor-page elementor-page-51 e--ua-blink e--ua-mac e--ua-webkit"
      data-elementor-device-mode={"desktop"}
      data-aos-easing={"ease"}
      data-aos-duration={"800"}
      data-aos-delay={"0"}
      style={{}}
    >
      {" "}
      <div
        id="site-preloader"
        className="kkcp-preloader"
        style={{ display: "none" }}
      >
        {" "}
        <div className="loader-container">
          {" "}
          <div className="loader-icon">
            {" "}
            <img
              src="/test-dummy-webs-1/assets/0044__Asset-2-11.webp"
              alt="K.K. College of Pharmacy"
            />{" "}
          </div>{" "}
        </div>
      </div>{" "}
      <div id="kkcp-page" className="kkcp-page-wrapper">
        {" "}
        <div id="kkcp-page" className="kkcp-page-wrapper">
          {" "}
          <KkcpHeader /> <style>{PAGE_STYLES}</style>{" "}
          <main id="kkcp-content" className="kkcp-content-wrapper">
            {" "}
            <div
              data-elementor-type={"wp-page"}
              data-elementor-id={"51"}
              className="elementor elementor-51"
            >
              {/* ==============================================================================
                  SECTION 1 - HERO  (Slider Revolution)
                  Fixed 1440px canvas that the vendor JS rescales at runtime. That JS is not
                  shipped here, so the layer sizes are pinned; PAGE_STYLES > "MOBILE RESPONSIVE
                  FIXES" reproduces the rescale in CSS. Renders <ImageSlider /> and <HeroSlider />.
                  ============================================================================== */}

                  <HeroSection/>
               {/* <div
                data-aos-once={"true"}
                className="elementor-element elementor-element-3bf6c45 e-con-full e-flex e-con e-parent e-lazyloaded"
                data-id={"3bf6c45"}
                data-element_type={"container"}
                data-e-type={"container"}
              >
                <div
                  data-aos-once={"true"}
                  className="elementor-element elementor-element-08c8a85 elementor-widget elementor-widget-slider_revolution"
                  data-id={"08c8a85"}
                  data-element_type={"widget"}
                  data-e-type={"widget"}
                  data-widget_type={"slider_revolution.default"}
                >
                  <div className="wp-block-themepunch-revslider">
                    <sr7-module
                      data-alias={"main-demo"}
                      data-id={"2"}
                      id="SR7_2_1"
                      className="rs-ov-hidden h-125! sm:h-150! md:h-175! lg:h-200! xl:h-225! 2xl:h-240!"
                      data-version={"6.7.38"}
                      
                      data-current={"4"}
                    >
                      <sr7-adjuster className="h-full"></sr7-adjuster>
                      <sr7-content
                      className='relative h-full w-full'
                        style={{
                         
                          left: "0px",
                        
                          top: "0px",
                        }}
                      >
                        <sr7-slide
                          id="SR7_2_1-4"
                          data-key={"4"}
                          style={{
                            pointerEvents: "auto",
                            visibility: "visible",
                            display: "block",
                            zIndex: "5",
                          }}
                        >
                          <sr7-mask
                            style={{
                              overflow: "visible",
                              minHeight: "auto",
                              minWidth: "auto",
                              width: "100%",
                              height: "100%",
                              zIndex: "0",
                              position: "absolute",
                              display: "block",
                              visibility: "visible",
                              left: "0px",
                              top: "0px",
                            }}
                          >
                            <sr7-bg
                              id="SR7_2_1-4-10"
                              className="sr7-layer"
                              aria-hidden={"true"}
                              data-type={"shape"}
                              data-subtype={"slidebg"}
                              style={{
                                padding: "0px",
                                width: "100%",
                                height: "100%",
                                display: "block",
                                visibility: "visible",
                                pointerEvents: "none",
                                opacity: "1",
                              }}
                            >
                              <canvas
                              
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  visibility: "visible",
                                  background: "transparent",
                                  opacity: "1",
                                }}
                              ></canvas>
                            </sr7-bg>
                          </sr7-mask>
                          <sr7-mask
                            style={{
                              overflow: "hidden",
                              width: "auto",
                              height: "auto",
                              zIndex: "4",
                              position: "absolute",
                              verticalAlign: "top",
                              display: "block",
                              visibility: "visible",
                              left: "39px",
                              top: "162px",
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              opacity: "1",
                              transform: "translate(0px, 0px)",
                            }}
                          >
                            <sr7-txt
                              id="SR7_2_1-4-1"
                              className="sr7-layer demo1-hero-title"
                              aria-hidden={"true"}
                              style={{
                                fontFamily: "Bitter",
                                fontSize: "350px",
                                fontWeight: "600",
                                color: "rgb(255, 255, 255)",
                                textTransform: "none",
                                textDecoration: "none",
                                letterSpacing: "10px",
                                lineHeight: "300px",
                                textAlign: "left",
                                whiteSpace: "nowrap",
                                padding: "0px",
                                verticalAlign: "top",
                                transformOrigin: "50% 50%",
                                width: "auto",
                                height: "auto",
                                display: "block",
                                visibility: "visible",
                                background: "transparent",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                opacity: "1",
                                transform: "translate(0px, 0px)",
                                pointerEvents: "auto",
                              }}
                            >
                              KKCP
                            </sr7-txt>
                          </sr7-mask>
                          
                          <ImageSlider />
                          <sr7-mask
                            className="kkcp-hero-copy"
                            style={{
                              overflow: "hidden",
                              minHeight: "0px",
                              width: "1160px",
                              height: "auto",
                              zIndex: "9",
                              position: "absolute",
                              verticalAlign: "top",
                              display: "block",
                              visibility: "visible",
                              left: "18px",
                              top: "740px",
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              opacity: "1",
                              transform: "translate(0px, 0px)",
                            }}
                          >
                            <sr7-txt
                              id="SR7_2_1-4-5"
                              className="sr7-layer  kkcp-hero-copy"
                              aria-hidden={"true"}
                              style={{
                                fontFamily: "Bitter",
                                fontSize: "60px",
                                fontWeight: "600",
                                color: "rgb(255, 255, 255)",
                                textTransform: "none",
                                textDecoration: "none",
                                letterSpacing: "1px",
                                lineHeight: "70px",
                                textAlign: "left",
                                whiteSpace: "normal",
                                padding: "0px",
                                borderRadius: "0px",
                                verticalAlign: "top",
                                transformOrigin: "50% 50%",
                                width: "1160px",
                                height: "auto",
                                display: "block",
                                visibility: "visible",
                                background: "transparent",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                opacity: "1",
                                transform: "translate(0px, 0px)",
                                pointerEvents: "auto",
                              }}
                            >
                              <HeroSlider />
                            </sr7-txt>
                          </sr7-mask>
                          <sr7-mask
                            style={{
                              overflow: "hidden",
                              width: "auto",
                              height: "auto",
                              zIndex: "10",
                              position: "absolute",
                              verticalAlign: "top",
                              display: "block",
                              visibility: "visible",
                              left: "68px",
                              top: "702px",
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              opacity: "1",
                              transform: "translate(0px, 0px)",
                            }}
                          >
                            <sr7-txt
                              id="SR7_2_1-4-3"
                              className="sr7-layer "
                              aria-hidden={"true"}
                              style={{
                                fontFamily: "Bitter",
                                fontSize: "17px",
                                fontWeight: "500",
                                color: "rgb(255, 255, 255)",
                                textTransform: "none",
                                textDecoration: "none",
                                letterSpacing: "1px",
                                lineHeight: "25px",
                                textAlign: "left",
                                whiteSpace: "nowrap",
                                padding: "0px",
                                verticalAlign: "top",
                                transformOrigin: "50% 50%",
                                width: "auto",
                                height: "auto",
                                display: "block",
                                visibility: "visible",
                                background: "transparent",
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                opacity: "1",
                                transform: "translate(0px, 0px)",
                                pointerEvents: "auto",
                              }}
                            >
                              K.K. College of Pharmacy
                            </sr7-txt>
                          </sr7-mask>
                          
                        </sr7-slide>
                        <sr7-slide
                          id="SR7_2_1-5"
                          data-key={"5"}
                          className="sr7-staticslide sr7-staticslide-high"
                          style={{
                            pointerEvents: "none",
                            display: "block",
                            visibility: "visible",
                          }}
                        ></sr7-slide>
                        <sr7-module-shadow className="sr7-shdw-0"></sr7-module-shadow>
                      </sr7-content>
                    </sr7-module>
                  </div>
                </div>
              </div>  */}
              {/* Courses Offered — section 2, theme design language (rs-academic-cards) */}
              {/* ==============================================================================
                  SECTION 2 - COURSES OFFERED
                  Six photo cards (D.Pharm / B.Pharm / M.Pharm / Pharm.D / Pharm.D PB / Ph.D).
                  Heading widget = kkcpcoursesh, card grid widget = kkcpcoursesc.
                  Styled by change 1.17 (caption bottom-right, lighter scrim, responsive).
                  ============================================================================== */}
              <div
                data-aos-once={"true"}
                className="elementor-element elementor-element-kkcpcourses e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-id={"kkcpcourses"}
                data-element_type={"container"}
                data-e-type={"container"}
                data-settings={'{"background_background":"classic"}'}
              >
                <div className="e-con-inner">
                  <div
                    data-aos-once={"true"}
                    className="elementor-element elementor-element-kkcpcoursesh elementor-widget__width-inherit elementor-widget elementor-widget-rs-heading"
                    data-id={"kkcpcoursesh"}
                    data-element_type={"widget"}
                    data-e-type={"widget"}
                    data-widget_type={"rs-heading.default"}
                  >
                    {" "}
                    <div className="prelements-heading style1 center  animate-  ">
                      {" "}
                      <div className="title-inner">
                        {" "}
                        <span className="sub-text ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5.21484 12.8949V16.6564C5.21484 16.6564 8.82175 15.1537 12.0198 15.1537C15.2178 15.1537 18.8255 16.6564 18.8255 16.6564V12.8424C18.8255 12.8424 15.3844 11.0225 11.9665 11.0225C8.55018 11.021 5.21484 12.8949 5.21484 12.8949Z" />
                            <path d="M22.6467 11.9993L24 11.2716L22.6467 10.5222V10.1666C22.6467 10.1666 23.0278 8.23413 20.862 9.24464C20.7517 9.30465 20.6924 9.36542 20.6684 9.42468L11.7367 4.47119L0 11.1884L4.43211 13.2019V12.5485C4.43211 12.5485 8.15079 10.4607 11.9625 10.4607C15.7734 10.4607 19.6092 12.4899 19.6092 12.4899V13.631L22.0563 12.3167V17.6377H21.2416V19.529L22.3248 18.7803L23.5274 19.529V17.637H22.6467V11.9993ZM22.0555 9.83803V10.1944L21.3413 9.79827C21.6017 9.62573 22.0555 9.38642 22.0555 9.83803ZM21.814 11.9251C21.737 11.9279 21.6603 11.9152 21.5883 11.8877C21.5164 11.8602 21.4507 11.8185 21.3952 11.7651C21.3398 11.7117 21.2956 11.6476 21.2655 11.5768C21.2353 11.5059 21.2198 11.4297 21.2197 11.3527C21.2197 11.2757 21.2351 11.1994 21.2652 11.1285C21.2953 11.0576 21.3393 10.9935 21.3947 10.94C21.4501 10.8865 21.5157 10.8447 21.5876 10.8172C21.6595 10.7896 21.7362 10.7768 21.8132 10.7795C21.9615 10.7848 22.102 10.8474 22.2051 10.9542C22.3082 11.0609 22.3659 11.2035 22.366 11.3519C22.3661 11.5003 22.3086 11.643 22.2056 11.7499C22.1027 11.8568 21.9623 11.9196 21.814 11.9251Z" />
                          </svg>
                          Courses Offered
                        </span>
                        <h2
                          className="title rs-split-text-enable split-in-fade "
                          data-split-type={"words"}
                          data-duration={"0.8"}
                          data-delay={"0.02"}
                          style={{ perspective: "400px" }}
                        >
                          <div
                            style={{
                              position: "relative",
                              display: "inline-block",
                              opacity: "1",
                              transform: "none",
                            }}
                          >
                            Courses
                          </div>{" "}
                          <div
                            style={{
                              position: "relative",
                              display: "inline-block",
                              opacity: "1",
                              transform: "none",
                            }}
                          >
                            Offered
                          </div>
                        </h2>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div
                    data-aos-once={"true"}
                    className="elementor-element elementor-element-kkcpcoursesc elementor-widget elementor-widget-rs-academic-card"
                    data-id={"kkcpcoursesc"}
                    data-element_type={"widget"}
                    data-e-type={"widget"}
                    data-widget_type={"rs-academic-card.default"}
                  >
                    {" "}
                    <div className="rs-academic-cards style-two">
                      {" "}
                      <div className="grid-wrapper">
                        <CourseCard
                          title="D. Pharm - 2 years"
                          href="/courses/diploma-in-pharmacy/"
                          image="/kkcp/web/home/2-home-page-courses-1-d-pharm.webp"
                        />

                        <CourseCard
                          title="B. Pharm - 4 years"
                          href="/courses/b-pharm/"
                          image="/kkcp/web/home/2-home-page-courses-2-b-pharm.webp"
                        />

                        <CourseCard
                          title="M. Pharm - 2 years"
                          href="/courses/m-pharm/"
                          image="/kkcp/web/home/2-home-page-courses-3-m-pharm.webp"
                        />

                        <CourseCard
                          title="Pharm. D - 6 Years"
                          href="/courses/doctor-of-pharmacy/"
                          image="/kkcp/web/home/2-home-page-courses-4-pharm-d.webp"
                        />

                        <CourseCard
                          title="Pharm. D (PB) - 3 Years"
                          href="/courses/doctor-of-pharmacypb/"
                          image="/kkcp/web/home/2-home-page-courses-5-pharm-d-pb.webp"
                        />

                        <CourseCard
                          title=" Recognized Ph.D Research Centre"
                          href="/courses/recognized-phd-research-centre/"
                          image="/test-dummy-webs-1/assets/0143__acc-14-min.webp"
                        />
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/* ==============================================================================
                  SECTION 3 - ABOUT KKCP
                  "established in 1992" intro copy + the More About Us button.
                  ============================================================================== */}
              <div
                data-aos-once={"true"}
                className="elementor-element elementor-element-cf4ff94 e-con-full e-flex e-con e-parent e-lazyloaded"
                data-id={"cf4ff94"}
                data-element_type={"container"}
                data-e-type={"container"}
                data-settings={'{"background_background":"classic"}'}
              >
                <div
                  data-aos-once={"true"}
                  className="elementor-element elementor-element-e6c1011 elementor-absolute gsap-move-yes up-70 start-50 elementor-hidden-mobile elementor-widget elementor-widget-rs-image"
                  data-id={"e6c1011"}
                  data-element_type={"widget"}
                  data-e-type={"widget"}
                  data-settings={'{"_position":"absolute"}'}
                  data-widget_type={"rs-image.default"}
                  style={{ transform: "translate(0px, 0px)" }}
                >
                  {" "}
                  <div className="rs-image">
                    {" "}
                    <img
                      decoding="async"
                      className="rs-multi-image  reverse- blend_unset"
                      src="/test-dummy-webs-1/assets/0070__team-inner-cap1-1.webp"
                      alt="team-inner-cap1-1"
                    />{" "}
                  </div>
                </div>
                <div
                  data-aos-once={"true"}
                  className="elementor-element elementor-element-cfdd40a e-flex e-con-boxed e-con e-child"
                  data-id={"cfdd40a"}
                  data-element_type={"container"}
                  data-e-type={"container"}
                >
                  <div className="e-con-inner">
                    <div
                      data-aos-once={"true"}
                      className="elementor-element elementor-element-e88e244 e-con-full e-flex e-con e-child"
                      data-id={"e88e244"}
                      data-element_type={"container"}
                      data-e-type={"container"}
                    >
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-4d5ee27 elementor-widget elementor-widget-rs-image"
                        data-id={"4d5ee27"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-widget_type={"rs-image.default"}
                      >
                        {" "}
                        <div className="rs-image">
                          {" "}
                          <img
                            decoding="async"
                            className="rs-multi-image  reverse- blend_unset"
                            src="/kkcp/web/home/3-empowering-students-img-0146.webp"
                            alt="Students at K.K. College of Pharmacy"
                          />{" "}
                        </div>
                      </div>
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-f1ee3cc elementor-widget elementor-widget-rs-image"
                        data-id={"f1ee3cc"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-widget_type={"rs-image.default"}
                      >
                        {" "}
                        <div className="rs-image">
                          {" "}
                          <img
                            decoding="async"
                            className="rs-multi-image  reverse- blend_unset"
                            src="/kkcp/web/home/3-empowering-students-img-0372.webp"
                            alt="K.K. College of Pharmacy students in a practical session"
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      data-aos-once={"true"}
                      className="elementor-element elementor-element-1604da3 e-con-full e-flex e-con e-child"
                      data-id={"1604da3"}
                      data-element_type={"container"}
                      data-e-type={"container"}
                    >
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-ec081b9 elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-widget-mobile_extra__width-inherit elementor-widget-mobile__width-inherit elementor-widget elementor-widget-rs-heading"
                        data-id={"ec081b9"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-widget_type={"rs-heading.default"}
                      >
                        {" "}
                        <div className="prelements-heading style1 left  animate-  ">
                          {" "}
                          <div className="title-inner">
                            {" "}
                            <span className="sub-text ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M5.21484 12.8949V16.6564C5.21484 16.6564 8.82175 15.1537 12.0198 15.1537C15.2178 15.1537 18.8255 16.6564 18.8255 16.6564V12.8424C18.8255 12.8424 15.3844 11.0225 11.9665 11.0225C8.55018 11.021 5.21484 12.8949 5.21484 12.8949Z" />
                                <path d="M22.6467 11.9993L24 11.2716L22.6467 10.5222V10.1666C22.6467 10.1666 23.0278 8.23413 20.862 9.24464C20.7517 9.30465 20.6924 9.36542 20.6684 9.42468L11.7367 4.47119L0 11.1884L4.43211 13.2019V12.5485C4.43211 12.5485 8.15079 10.4607 11.9625 10.4607C15.7734 10.4607 19.6092 12.4899 19.6092 12.4899V13.631L22.0563 12.3167V17.6377H21.2416V19.529L22.3248 18.7803L23.5274 19.529V17.637H22.6467V11.9993ZM22.0555 9.83803V10.1944L21.3413 9.79827C21.6017 9.62573 22.0555 9.38642 22.0555 9.83803ZM21.814 11.9251C21.737 11.9279 21.6603 11.9152 21.5883 11.8877C21.5164 11.8602 21.4507 11.8185 21.3952 11.7651C21.3398 11.7117 21.2956 11.6476 21.2655 11.5768C21.2353 11.5059 21.2198 11.4297 21.2197 11.3527C21.2197 11.2757 21.2351 11.1994 21.2652 11.1285C21.2953 11.0576 21.3393 10.9935 21.3947 10.94C21.4501 10.8865 21.5157 10.8447 21.5876 10.8172C21.6595 10.7896 21.7362 10.7768 21.8132 10.7795C21.9615 10.7848 22.102 10.8474 22.2051 10.9542C22.3082 11.0609 22.3659 11.2035 22.366 11.3519C22.3661 11.5003 22.3086 11.643 22.2056 11.7499C22.1027 11.8568 21.9623 11.9196 21.814 11.9251Z" />
                              </svg>
                              About K.K. College of Pharmacy{" "}
                            </span>
                            <h2
                              className="title rs-split-text-enable split-in-left "
                              data-split-type={"default"}
                              data-duration={"0.8"}
                              data-delay={"0.02"}
                              style={{ perspective: "400px" }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  E
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  m
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  p
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  o
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  w
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  e
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  r
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  i
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  n
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  g
                                </div>
                              </div>{" "}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  S
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  t
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  u
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  d
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  e
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  n
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  t
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  s
                                </div>
                              </div>{" "}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  t
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  o
                                </div>
                              </div>{" "}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  L
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  e
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  a
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  d
                                </div>
                              </div>{" "}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  t
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  h
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  e
                                </div>
                              </div>{" "}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  F
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  u
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  t
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  u
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  r
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    transform: "none",
                                    opacity: "1",
                                  }}
                                >
                                  e
                                </div>
                              </div>
                            </h2>{" "}
                          </div>{" "}
                          <div className="descripti">
                            K.K. College of Pharmacy, established in 1992,
                            offers World-Class Pharmacy education. Our
                            experienced faculty, state-of-the-art laboratories
                            and strong interface ensure graduates are ready for
                            successful careers in Pharmaceutical Sciences.{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-33c61ab e-con-full e-flex e-con e-child"
                        data-id={"33c61ab"}
                        data-element_type={"container"}
                        data-e-type={"container"}
                      >
                        <div
                          data-aos-once={"true"}
                          className="elementor-element elementor-element-6d6fd2c e-con-full e-flex e-con e-child"
                          data-id={"6d6fd2c"}
                          data-element_type={"container"}
                          data-e-type={"container"}
                        >
                          <div
                            data-aos-once={"true"}
                            className="elementor-element elementor-element-e0adb7b gsap-move-no rs-tween_max_btn-no elementor-widget elementor-widget-rs-feature-list"
                            data-id={"e0adb7b"}
                            data-element_type={"widget"}
                            data-e-type={"widget"}
                            data-widget_type={"rs-feature-list.default"}
                          >
                            {" "}
                            <div className="rs-features-list-content top-image ">
                              {" "}
                              <div className="feature-content">
                                {" "}
                                <ul className="rs-features-list">
                                  {" "}
                                  <li className="elementor-repeater-item-e786635">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="15"
                                      height="13"
                                      viewBox="0 0 15 13"
                                    >
                                      <path d="M6.39959 12.3594C6.35715 12.3594 6.31517 12.3506 6.27629 12.3336C6.2374 12.3166 6.20246 12.2917 6.17365 12.2606L0.0817469 5.67088C0.0411367 5.62695 0.0142147 5.57213 0.00427583 5.51313C-0.00566304 5.45414 0.00181231 5.39352 0.0257871 5.33871C0.0497619 5.2839 0.0891961 5.23726 0.139263 5.20452C0.189331 5.17177 0.247859 5.15433 0.307685 5.15432H3.23999C3.28402 5.15433 3.32753 5.16378 3.3676 5.18203C3.40766 5.20029 3.44334 5.22692 3.47224 5.26014L5.50818 7.60242C5.72821 7.13208 6.15415 6.34894 6.90159 5.39466C8.00658 3.98389 10.0619 1.90909 13.5783 0.0361075C13.6463 -8.57115e-05 13.7254 -0.00947928 13.7999 0.00978174C13.8745 0.0290428 13.9391 0.0755582 13.981 0.140143C14.023 0.204728 14.0392 0.282687 14.0264 0.358628C14.0137 0.434568 13.9729 0.502968 13.9122 0.550323C13.8988 0.560815 12.5429 1.62851 10.9826 3.58417C9.54652 5.38386 7.63753 8.32663 6.69818 12.1257C6.68168 12.1925 6.6433 12.2517 6.58916 12.2941C6.53503 12.3365 6.46835 12.3594 6.39959 12.3594Z" />
                                    </svg>{" "}
                                    <div className="list-feature-content">
                                      {" "}
                                      <span className="rs-feature-text">
                                        PCI Approved Institution
                                      </span>{" "}
                                    </div>{" "}
                                  </li>{" "}
                                  <li className="elementor-repeater-item-4dce744">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="15"
                                      height="13"
                                      viewBox="0 0 15 13"
                                    >
                                      <path d="M6.39959 12.3594C6.35715 12.3594 6.31517 12.3506 6.27629 12.3336C6.2374 12.3166 6.20246 12.2917 6.17365 12.2606L0.0817469 5.67088C0.0411367 5.62695 0.0142147 5.57213 0.00427583 5.51313C-0.00566304 5.45414 0.00181231 5.39352 0.0257871 5.33871C0.0497619 5.2839 0.0891961 5.23726 0.139263 5.20452C0.189331 5.17177 0.247859 5.15433 0.307685 5.15432H3.23999C3.28402 5.15433 3.32753 5.16378 3.3676 5.18203C3.40766 5.20029 3.44334 5.22692 3.47224 5.26014L5.50818 7.60242C5.72821 7.13208 6.15415 6.34894 6.90159 5.39466C8.00658 3.98389 10.0619 1.90909 13.5783 0.0361075C13.6463 -8.57115e-05 13.7254 -0.00947928 13.7999 0.00978174C13.8745 0.0290428 13.9391 0.0755582 13.981 0.140143C14.023 0.204728 14.0392 0.282687 14.0264 0.358628C14.0137 0.434568 13.9729 0.502968 13.9122 0.550323C13.8988 0.560815 12.5429 1.62851 10.9826 3.58417C9.54652 5.38386 7.63753 8.32663 6.69818 12.1257C6.68168 12.1925 6.6433 12.2517 6.58916 12.2941C6.53503 12.3365 6.46835 12.3594 6.39959 12.3594Z" />
                                    </svg>{" "}
                                    <div className="list-feature-content">
                                      {" "}
                                      <span className="rs-feature-text">
                                        Industry Internships &amp; Placements
                                      </span>{" "}
                                    </div>{" "}
                                  </li>{" "}
                                  <li className="elementor-repeater-item-41a12c3">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="15"
                                      height="13"
                                      viewBox="0 0 15 13"
                                    >
                                      <path d="M6.39959 12.3594C6.35715 12.3594 6.31517 12.3506 6.27629 12.3336C6.2374 12.3166 6.20246 12.2917 6.17365 12.2606L0.0817469 5.67088C0.0411367 5.62695 0.0142147 5.57213 0.00427583 5.51313C-0.00566304 5.45414 0.00181231 5.39352 0.0257871 5.33871C0.0497619 5.2839 0.0891961 5.23726 0.139263 5.20452C0.189331 5.17177 0.247859 5.15433 0.307685 5.15432H3.23999C3.28402 5.15433 3.32753 5.16378 3.3676 5.18203C3.40766 5.20029 3.44334 5.22692 3.47224 5.26014L5.50818 7.60242C5.72821 7.13208 6.15415 6.34894 6.90159 5.39466C8.00658 3.98389 10.0619 1.90909 13.5783 0.0361075C13.6463 -8.57115e-05 13.7254 -0.00947928 13.7999 0.00978174C13.8745 0.0290428 13.9391 0.0755582 13.981 0.140143C14.023 0.204728 14.0392 0.282687 14.0264 0.358628C14.0137 0.434568 13.9729 0.502968 13.9122 0.550323C13.8988 0.560815 12.5429 1.62851 10.9826 3.58417C9.54652 5.38386 7.63753 8.32663 6.69818 12.1257C6.68168 12.1925 6.6433 12.2517 6.58916 12.2941C6.53503 12.3365 6.46835 12.3594 6.39959 12.3594Z" />
                                    </svg>{" "}
                                    <div className="list-feature-content">
                                      {" "}
                                      <span className="rs-feature-text">
                                        Modern Campus &amp; Facilities
                                      </span>{" "}
                                    </div>{" "}
                                  </li>{" "}
                                </ul>{" "}
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          data-aos-once={"true"}
                          className="elementor-element elementor-element-0458159 e-con-full e-flex e-con e-child"
                          data-id={"0458159"}
                          data-element_type={"container"}
                          data-e-type={"container"}
                          data-settings={'{"background_background":"classic"}'}
                        >
                          <div
                            data-aos-once={"true"}
                            className="elementor-element elementor-element-47e74ff elementor-widget elementor-widget-rs-iconbox"
                            data-id={"47e74ff"}
                            data-element_type={"widget"}
                            data-e-type={"widget"}
                            data-widget_type={"rs-iconbox.default"}
                          >
                            {" "}
                            <div className="rs-iconbox-area">
                              {" "}
                              <div className="box-inner">
                                {" "}
                                <div className="icon-area">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="63"
                                    viewBox="0 0 50 63"
                                  >
                                    <path d="M42.409 51.3402H30.6849C27.0689 48.2864 25.0349 44.3278 25.0349 40.1313C25.0349 31.9654 30.3918 25.6008 38.6374 23.5402L32.0989 20.4376L23.2205 24.6506C20.4538 27.6402 18.7424 31.316 18.2769 35.3001C17.392 42.5491 23.9904 48.7154 27.334 51.3402H24.0622C20.2962 48.0049 15.1212 42.0659 15.9711 35.1091C16.471 30.8234 18.3087 26.8551 21.2726 23.6008L23.364 15.1465L16.1864 9.69336C8.43542 13.1831 4.92013 23.056 7.64349 34.0553C9.49803 41.5035 14.1426 47.9227 20.116 51.3402H7.31755L0 62.0608H49.7266L42.409 51.3402ZM15.4448 60.1137L12.7843 58.8511L10.1234 60.1137L10.7415 57.614L8.47869 55.8947L11.5218 55.6123L12.7843 53.2872L14.0464 55.6123L17.0893 55.8947L14.8267 57.614L15.4448 60.1137ZM27.8053 60.1137L25.1444 58.8511L22.4838 60.1137L23.1019 57.614L20.8391 55.8947L23.8822 55.6123L25.1444 53.2872L26.4068 55.6123L29.4497 55.8947L27.1868 57.614L27.8053 60.1137ZM39.6033 60.1137L36.9426 58.8511L34.2817 60.1137L34.8999 57.614L32.6374 55.8947L35.6802 55.6123L36.9426 53.2872L38.2051 55.6123L41.2477 55.8947L38.985 57.614L39.6033 60.1137Z" />
                                    <path d="M27.6126 8.44521L19.0332 9.24143L25.4132 14.0887C25.7153 14.3184 25.85 14.6642 25.7674 14.9981L24.0241 22.0459L31.5261 18.4859C31.7037 18.4015 31.9012 18.3595 32.0992 18.3595C32.2973 18.3595 32.4948 18.4015 32.6725 18.4859L40.1745 22.0459L38.4312 14.9981C38.3484 14.6642 38.4832 14.3184 38.7854 14.0887L45.1653 9.24143L36.5859 8.44521C36.1796 8.40749 35.827 8.19425 35.6585 7.88347L32.0992 1.32764L28.5401 7.88347C28.3714 8.19425 28.0189 8.40749 27.6126 8.44521Z" />
                                    <path d="M15.8676 7.63966C15.8769 7.63598 15.8871 7.63724 15.8964 7.63375C16.0017 7.59544 16.1137 7.56849 16.2314 7.55753L16.3112 7.55016C16.313 7.55006 16.3146 7.54977 16.3164 7.54967L26.7002 6.58628L30.2758 0C26.6442 0.147394 18.0581 1.0752 12.221 6.39312C9.32021 9.03612 7.45683 12.4189 6.625 16.4983C8.56074 12.4147 11.7086 9.26255 15.8676 7.63966Z" />
                                  </svg>{" "}
                                </div>{" "}
                                <div className="text-area">
                                  <h4 className="title">
                                    Established - 1992
                                    <br />
                                    30+ Years
                                  </h4>{" "}
                                  <p className="desc">
                                    {" "}
                                    Three decades of excellence in
                                    Pharmaceutical Education and Research.
                                  </p>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-dc9df3d elementor-widget elementor-widget-rs-button"
                        data-id={"dc9df3d"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-widget_type={"rs-button.default"}
                      >
                        {" "}
                        <a
                          className="rs-button style-default icon-anim-rotate-90 text-anim-flip-top"
                          href="#"
                        >
                          {" "}
                          <span className="button-icon">
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 18 15"
                            >
                              <path d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z" />
                              <path d="M10.5 13.5C10.5 14.3284 9.82843 15 9 15C8.17157 15 7.5 14.3284 7.5 13.5C7.5 12.6716 8.17157 12 9 12C9.82843 12 10.5 12.6716 10.5 13.5Z" />
                              <path d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z" />
                              <path d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z" />
                              <path d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 8.17157 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z" />
                            </svg>{" "}
                          </span>{" "}
                          <span
                            className="button-text"
                            data-text={"More About Us"}
                          >
                            More About Us{" "}
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ==============================================================================
                  SECTION 4 - INSIDE KKCP  (tabbed)
                  Tabs: Our Departments / programmes / Our Tie Up Hospital.
                  Styled by changes 1.13 (type scale), 1.14 (orphan card), 1.15 (tie-up panel).
                  NOTE: its cards reuse .rs-academic-cards.style-two, the same markup as
                  section 2 - that is why every rule in change 1.17 is scoped to kkcpcoursesc.
                  ============================================================================== */}
              <div
                data-aos-once={"true"}
                className="elementor-element elementor-element-09ded08 e-con-full e-flex e-con e-parent e-lazyloaded"
                data-id={"09ded08"}
                data-element_type={"container"}
                data-e-type={"container"}
                data-settings={'{"background_background":"classic"}'}
              >
                <div
                  data-aos-once={"true"}
                  className="elementor-element elementor-element-bace995 elementor-absolute elementor-widget elementor-widget-rs-image"
                  data-id={"bace995"}
                  data-element_type={"widget"}
                  data-e-type={"widget"}
                  data-settings={'{"_position":"absolute"}'}
                  data-widget_type={"rs-image.default"}
                >
                  {" "}
                  <div className="rs-image">
                    {" "}
                    <img
                      decoding="async"
                      className="rs-multi-image  reverse- blend_unset"
                      src="/test-dummy-webs-1/assets/0074__about-left-icon1.webp"
                      alt="about-left-icon1"
                    />{" "}
                  </div>
                </div>
                <div
                  data-aos-once={"true"}
                  className="elementor-element elementor-element-9f87f51 elementor-absolute elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-rs-image"
                  data-id={"9f87f51"}
                  data-element_type={"widget"}
                  data-e-type={"widget"}
                  data-settings={'{"_position":"absolute"}'}
                  data-widget_type={"rs-image.default"}
                >
                  {" "}
                  <div className="rs-image">
                    {" "}
                    <img
                      decoding="async"
                      className="rs-multi-image  reverse- blend_unset"
                      src="/test-dummy-webs-1/assets/0071__about-left-icon2.webp"
                      alt="about-left-icon2"
                    />{" "}
                  </div>
                </div>
                <div
                  data-aos-once={"true"}
                  className="elementor-element elementor-element-7e90bbe e-flex e-con-boxed e-con e-child"
                  data-id={"7e90bbe"}
                  data-element_type={"container"}
                  data-e-type={"container"}
                  data-settings={'{"background_background":"classic"}'}
                >
                  <div className="e-con-inner">
                    <div
                      data-aos-once={"true"}
                      className="elementor-element elementor-element-127f990 e-con-full e-flex e-con e-child"
                      data-id={"127f990"}
                      data-element_type={"container"}
                      data-e-type={"container"}
                    >
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-26e8be8 elementor-widget__width-initial elementor-widget elementor-widget-rs-heading"
                        data-id={"26e8be8"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-widget_type={"rs-heading.default"}
                      >
                        {" "}
                        <div className="prelements-heading style1 left  animate-  ">
                          {" "}
                          <div className="title-inner">
                            {" "}
                            <span className="sub-text ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M5.21484 12.8949V16.6564C5.21484 16.6564 8.82175 15.1537 12.0198 15.1537C15.2178 15.1537 18.8255 16.6564 18.8255 16.6564V12.8424C18.8255 12.8424 15.3844 11.0225 11.9665 11.0225C8.55018 11.021 5.21484 12.8949 5.21484 12.8949Z" />
                                <path d="M22.6467 11.9993L24 11.2716L22.6467 10.5222V10.1666C22.6467 10.1666 23.0278 8.23413 20.862 9.24464C20.7517 9.30465 20.6924 9.36542 20.6684 9.42468L11.7367 4.47119L0 11.1884L4.43211 13.2019V12.5485C4.43211 12.5485 8.15079 10.4607 11.9625 10.4607C15.7734 10.4607 19.6092 12.4899 19.6092 12.4899V13.631L22.0563 12.3167V17.6377H21.2416V19.529L22.3248 18.7803L23.5274 19.529V17.637H22.6467V11.9993ZM22.0555 9.83803V10.1944L21.3413 9.79827C21.6017 9.62573 22.0555 9.38642 22.0555 9.83803ZM21.814 11.9251C21.737 11.9279 21.6603 11.9152 21.5883 11.8877C21.5164 11.8602 21.4507 11.8185 21.3952 11.7651C21.3398 11.7117 21.2956 11.6476 21.2655 11.5768C21.2353 11.5059 21.2198 11.4297 21.2197 11.3527C21.2197 11.2757 21.2351 11.1994 21.2652 11.1285C21.2953 11.0576 21.3393 10.9935 21.3947 10.94C21.4501 10.8865 21.5157 10.8447 21.5876 10.8172C21.6595 10.7896 21.7362 10.7768 21.8132 10.7795C21.9615 10.7848 22.102 10.8474 22.2051 10.9542C22.3082 11.0609 22.3659 11.2035 22.366 11.3519C22.3661 11.5003 22.3086 11.643 22.2056 11.7499C22.1027 11.8568 21.9623 11.9196 21.814 11.9251Z" />
                              </svg>
                              Explore K.K. College of Pharmacy{" "}
                            </span>
                            <h2
                              className="title rs-split-text-enable split-in-left "
                              data-split-type={"words"}
                              data-duration={"0.8"}
                              data-delay={"0.02"}
                              style={{ perspective: "400px" }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  transform: "none",
                                  opacity: "1",
                                }}
                              >
                                Inside
                              </div>{" "}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  transform: "none",
                                  opacity: "1",
                                }}
                              >
                                KKCP
                              </div>
                            </h2>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-b69eace e-con-full e-flex e-con e-child"
                        data-id={"b69eace"}
                        data-element_type={"container"}
                        data-e-type={"container"}
                        data-settings={'{"background_background":"classic"}'}
                      >
                        <div
                          data-aos-once={"true"}
                          className="elementor-element elementor-element-a3c7b91 e-con-full e-flex e-con e-child"
                          data-id={"a3c7b91"}
                          data-element_type={"container"}
                          data-e-type={"container"}
                        >
                          <div
                            data-aos-once={"true"}
                            className="elementor-element elementor-element-db9b4c6 elementor-widget elementor-widget-rs-heading"
                            data-id={"db9b4c6"}
                            data-element_type={"widget"}
                            data-e-type={"widget"}
                            data-widget_type={"rs-heading.default"}
                          >
                            {" "}
                            <div className="prelements-heading default   animate-  ">
                              {" "}
                              <div className="title-inner"> </div>{" "}
                              <div className="descripti">
                                <p>
                                  <strong>Drug Information Centre</strong>
                                </p>{" "}
                                <p>
                                  <strong>
                                    <a href="/drug-information-centre/">
                                      Know more
                                    </a>
                                  </strong>
                                </p>{" "}
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-0e4e66b elementor-widget elementor-widget-rs-notice"
                        data-id={"0e4e66b"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-widget_type={"rs-notice.default"}
                      >
                        {" "}
                        <div className="rs-notice-widget">
                          <h4 className="notice-heading">
                            <span className="pulse-icon"></span>Notice
                          </h4>{" "}
                          <div className="notice-items">
                            {" "}
                            <div className="notice-item">
                              {" "}
                              <h5 className="notice-title">
                                Recognized Ph.D. Research Centre
                              </h5>{" "}
                              <div className="notice-bottom">
                                {" "}
                                <a href="#" className="file-link">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M13.6306 8.65779V4.87288C13.6306 4.76456 13.5806 4.66444 13.5098 4.58526L9.26635 0.129258C9.18709 0.0459374 9.07455 0 8.96205 0H2.23421C0.992107 0 0 1.01289 0 2.25507V14.9771C0 16.2193 0.992107 17.2156 2.23418 17.2156H7.54483C8.54932 18.8829 10.3752 20 12.4551 20C15.6147 20 18.195 17.4322 18.195 14.2684C18.1993 11.5048 16.215 9.19553 13.6306 8.65783V8.65779ZM9.37897 1.4632L12.2259 4.46019H10.3793C9.82908 4.46019 9.37893 4.00589 9.37893 3.4557L9.37897 1.4632ZM2.23418 16.3818C1.45476 16.3818 0.833748 15.7565 0.833748 14.9771V2.25507C0.833748 1.4714 1.45476 0.833748 2.23418 0.833748H8.54522V3.45562C8.54522 4.46851 9.36643 5.2939 10.3793 5.2939H12.7969V8.54936C12.6719 8.54522 12.5719 8.53268 12.4635 8.53268C11.0087 8.53268 9.67068 9.09131 8.66194 9.9667H3.36808C3.13874 9.9667 2.95121 10.1542 2.95121 10.3834C2.95121 10.6128 3.13871 10.8003 3.36808 10.8003H7.88663C7.59061 11.2172 7.34463 11.634 7.15303 12.0926H3.36804C3.13871 12.0926 2.95117 12.2801 2.95117 12.5094C2.95117 12.7386 3.13867 12.9263 3.36804 12.9263H6.88198C6.77776 13.3432 6.72358 13.8058 6.72358 14.2685C6.72358 15.0187 6.86944 15.7608 7.13206 16.3861H2.23418V16.3818ZM12.4594 19.1705C9.75826 19.1705 7.56147 16.9737 7.56147 14.2726C7.56147 11.5715 9.75404 9.37467 12.4594 9.37467C15.1646 9.37467 17.3572 11.5715 17.3572 14.2726C17.3572 16.9737 15.1605 19.1705 12.4594 19.1705Z" />
                                    <path d="M3.36805 8.71188H7.59059C7.81992 8.71188 8.00746 8.52423 8.00746 8.29501C8.00746 8.06571 7.81996 7.87817 7.59059 7.87817H3.36805C3.13871 7.87817 2.95117 8.06567 2.95117 8.29501C2.95117 8.52423 3.13867 8.71188 3.36805 8.71188ZM14.5935 14.1849L12.8804 16.0315V11.4797C12.8804 11.2504 12.6927 11.0628 12.4635 11.0628C12.2342 11.0628 12.0466 11.2503 12.0466 11.4797V16.0315L10.3209 14.1849C10.1625 14.0183 9.89574 14.0058 9.72898 14.1642C9.56219 14.3225 9.54969 14.5852 9.7082 14.7519L12.1467 17.3738C12.2259 17.4572 12.3342 17.5072 12.451 17.5072C12.5677 17.5072 12.676 17.4572 12.7552 17.3738L15.198 14.752C15.3564 14.5852 15.348 14.3184 15.1812 14.1642C15.0104 14.0058 14.752 14.0183 14.5935 14.1849Z" />
                                  </svg>{" "}
                                </a>{" "}
                              </div>{" "}
                            </div>{" "}
                            <div className="notice-item">
                              {" "}
                              <h5 className="notice-title">
                                PCI Approved New M.Pharm Programs
                              </h5>{" "}
                              <div className="notice-bottom">
                                {" "}
                                <a href="#" className="file-link">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M13.6306 8.65779V4.87288C13.6306 4.76456 13.5806 4.66444 13.5098 4.58526L9.26635 0.129258C9.18709 0.0459374 9.07455 0 8.96205 0H2.23421C0.992107 0 0 1.01289 0 2.25507V14.9771C0 16.2193 0.992107 17.2156 2.23418 17.2156H7.54483C8.54932 18.8829 10.3752 20 12.4551 20C15.6147 20 18.195 17.4322 18.195 14.2684C18.1993 11.5048 16.215 9.19553 13.6306 8.65783V8.65779ZM9.37897 1.4632L12.2259 4.46019H10.3793C9.82908 4.46019 9.37893 4.00589 9.37893 3.4557L9.37897 1.4632ZM2.23418 16.3818C1.45476 16.3818 0.833748 15.7565 0.833748 14.9771V2.25507C0.833748 1.4714 1.45476 0.833748 2.23418 0.833748H8.54522V3.45562C8.54522 4.46851 9.36643 5.2939 10.3793 5.2939H12.7969V8.54936C12.6719 8.54522 12.5719 8.53268 12.4635 8.53268C11.0087 8.53268 9.67068 9.09131 8.66194 9.9667H3.36808C3.13874 9.9667 2.95121 10.1542 2.95121 10.3834C2.95121 10.6128 3.13871 10.8003 3.36808 10.8003H7.88663C7.59061 11.2172 7.34463 11.634 7.15303 12.0926H3.36804C3.13871 12.0926 2.95117 12.2801 2.95117 12.5094C2.95117 12.7386 3.13867 12.9263 3.36804 12.9263H6.88198C6.77776 13.3432 6.72358 13.8058 6.72358 14.2685C6.72358 15.0187 6.86944 15.7608 7.13206 16.3861H2.23418V16.3818ZM12.4594 19.1705C9.75826 19.1705 7.56147 16.9737 7.56147 14.2726C7.56147 11.5715 9.75404 9.37467 12.4594 9.37467C15.1646 9.37467 17.3572 11.5715 17.3572 14.2726C17.3572 16.9737 15.1605 19.1705 12.4594 19.1705Z" />
                                    <path d="M3.36805 8.71188H7.59059C7.81992 8.71188 8.00746 8.52423 8.00746 8.29501C8.00746 8.06571 7.81996 7.87817 7.59059 7.87817H3.36805C3.13871 7.87817 2.95117 8.06567 2.95117 8.29501C2.95117 8.52423 3.13867 8.71188 3.36805 8.71188ZM14.5935 14.1849L12.8804 16.0315V11.4797C12.8804 11.2504 12.6927 11.0628 12.4635 11.0628C12.2342 11.0628 12.0466 11.2503 12.0466 11.4797V16.0315L10.3209 14.1849C10.1625 14.0183 9.89574 14.0058 9.72898 14.1642C9.56219 14.3225 9.54969 14.5852 9.7082 14.7519L12.1467 17.3738C12.2259 17.4572 12.3342 17.5072 12.451 17.5072C12.5677 17.5072 12.676 17.4572 12.7552 17.3738L15.198 14.752C15.3564 14.5852 15.348 14.3184 15.1812 14.1642C15.0104 14.0058 14.752 14.0183 14.5935 14.1849Z" />
                                  </svg>{" "}
                                </a>{" "}
                              </div>{" "}
                            </div>{" "}
                            <div className="notice-item">
                              {" "}
                              <h5 className="notice-title">
                                Admissions Open for 2026-2027
                              </h5>{" "}
                              <div className="notice-bottom">
                                {" "}
                                <a href="#" className="file-link">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M13.6306 8.65779V4.87288C13.6306 4.76456 13.5806 4.66444 13.5098 4.58526L9.26635 0.129258C9.18709 0.0459374 9.07455 0 8.96205 0H2.23421C0.992107 0 0 1.01289 0 2.25507V14.9771C0 16.2193 0.992107 17.2156 2.23418 17.2156H7.54483C8.54932 18.8829 10.3752 20 12.4551 20C15.6147 20 18.195 17.4322 18.195 14.2684C18.1993 11.5048 16.215 9.19553 13.6306 8.65783V8.65779ZM9.37897 1.4632L12.2259 4.46019H10.3793C9.82908 4.46019 9.37893 4.00589 9.37893 3.4557L9.37897 1.4632ZM2.23418 16.3818C1.45476 16.3818 0.833748 15.7565 0.833748 14.9771V2.25507C0.833748 1.4714 1.45476 0.833748 2.23418 0.833748H8.54522V3.45562C8.54522 4.46851 9.36643 5.2939 10.3793 5.2939H12.7969V8.54936C12.6719 8.54522 12.5719 8.53268 12.4635 8.53268C11.0087 8.53268 9.67068 9.09131 8.66194 9.9667H3.36808C3.13874 9.9667 2.95121 10.1542 2.95121 10.3834C2.95121 10.6128 3.13871 10.8003 3.36808 10.8003H7.88663C7.59061 11.2172 7.34463 11.634 7.15303 12.0926H3.36804C3.13871 12.0926 2.95117 12.2801 2.95117 12.5094C2.95117 12.7386 3.13867 12.9263 3.36804 12.9263H6.88198C6.77776 13.3432 6.72358 13.8058 6.72358 14.2685C6.72358 15.0187 6.86944 15.7608 7.13206 16.3861H2.23418V16.3818ZM12.4594 19.1705C9.75826 19.1705 7.56147 16.9737 7.56147 14.2726C7.56147 11.5715 9.75404 9.37467 12.4594 9.37467C15.1646 9.37467 17.3572 11.5715 17.3572 14.2726C17.3572 16.9737 15.1605 19.1705 12.4594 19.1705Z" />
                                    <path d="M3.36805 8.71188H7.59059C7.81992 8.71188 8.00746 8.52423 8.00746 8.29501C8.00746 8.06571 7.81996 7.87817 7.59059 7.87817H3.36805C3.13871 7.87817 2.95117 8.06567 2.95117 8.29501C2.95117 8.52423 3.13867 8.71188 3.36805 8.71188ZM14.5935 14.1849L12.8804 16.0315V11.4797C12.8804 11.2504 12.6927 11.0628 12.4635 11.0628C12.2342 11.0628 12.0466 11.2503 12.0466 11.4797V16.0315L10.3209 14.1849C10.1625 14.0183 9.89574 14.0058 9.72898 14.1642C9.56219 14.3225 9.54969 14.5852 9.7082 14.7519L12.1467 17.3738C12.2259 17.4572 12.3342 17.5072 12.451 17.5072C12.5677 17.5072 12.676 17.4572 12.7552 17.3738L15.198 14.752C15.3564 14.5852 15.348 14.3184 15.1812 14.1642C15.0104 14.0058 14.752 14.0183 14.5935 14.1849Z" />
                                  </svg>{" "}
                                </a>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      data-aos-once={"true"}
                      className="elementor-element elementor-element-def4cda e-con-full e-flex e-con e-child"
                      data-id={"def4cda"}
                      data-element_type={"container"}
                      data-e-type={"container"}
                    >
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-1537b5d e-n-tabs-mobile elementor-widget elementor-widget-n-tabs"
                        data-id={"1537b5d"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-settings={
                          '{"tabs_justify_horizontal":"end","tabs_justify_horizontal_mobile_extra":"center","tabs_justify_horizontal_mobile":"stretch","horizontal_scroll":"disable"}'
                        }
                        data-widget_type={"nested-tabs.default"}
                      >
                        <div
                          className="e-n-tabs e-activated"
                          data-widget-number={"22248285"}
                          aria-label={
                            "Tabs. Open items with Enter or Space, close with Escape and navigate using the Arrow keys."
                          }
                          data-touch-mode={"false"}
                        >
                          <div className="e-n-tabs-heading" role="tablist">
                            <button
                              id="e-n-tab-title-222482851"
                              data-tab-title-id={"e-n-tab-title-222482851"}
                              className="e-n-tab-title"
                              aria-selected={"true"}
                              data-tab-index={"1"}
                              role="tab"
                              tabIndex="0"
                              aria-controls={"e-n-tab-content-222482851"}
                              style={{ "--n-tabs-title-order": "1" }}
                            >
                              <span className="e-n-tab-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="28"
                                  height="24"
                                  viewBox="0 0 28 24"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.0753 4.91965C9.38783 4.15324 6.87486 4.14293 4.96517 4.7734C4.72002 4.85496 4.58642 5.12027 4.66705 5.36636C4.6863 5.42467 4.71684 5.47862 4.75695 5.52511C4.79705 5.57161 4.84593 5.60975 4.90078 5.63735C4.95563 5.66495 5.01538 5.68147 5.07662 5.68596C5.13786 5.69046 5.19938 5.68284 5.25767 5.66355C6.95455 5.10386 9.18861 5.09261 10.6881 5.77277C10.7442 5.79819 10.8046 5.81233 10.8661 5.81439C10.9276 5.81644 10.9889 5.80636 11.0465 5.78472C11.1041 5.76309 11.1568 5.73033 11.2017 5.6883C11.2467 5.64628 11.2829 5.59582 11.3083 5.5398C11.3337 5.48379 11.3479 5.42331 11.3499 5.36183C11.352 5.30034 11.3419 5.23906 11.3203 5.18147C11.2986 5.12389 11.2659 5.07113 11.2238 5.0262C11.1818 4.98128 11.1313 4.94507 11.0753 4.91965ZM11.0753 7.37074C9.38783 6.60433 6.87486 6.59402 4.96517 7.22449C4.72002 7.30605 4.58642 7.57136 4.66705 7.81746C4.6863 7.87577 4.71684 7.92971 4.75695 7.97621C4.79705 8.0227 4.84593 8.06084 4.90078 8.08844C4.95563 8.11604 5.01538 8.13256 5.07662 8.13706C5.13786 8.14155 5.19938 8.13394 5.25767 8.11465C6.95455 7.55496 9.18861 7.54371 10.6881 8.22386C10.8013 8.27521 10.9302 8.27951 11.0465 8.23582C11.1628 8.19213 11.257 8.10403 11.3083 7.9909C11.3596 7.87776 11.3639 7.74887 11.3203 7.63257C11.2766 7.51627 11.1885 7.42208 11.0753 7.37074ZM11.0753 9.8223C9.38783 9.0559 6.87486 9.04558 4.96517 9.67605C4.72002 9.75761 4.58642 10.0229 4.66705 10.269C4.6863 10.3273 4.71684 10.3813 4.75695 10.4278C4.79705 10.4743 4.84593 10.5124 4.90078 10.54C4.95563 10.5676 5.01538 10.5841 5.07662 10.5886C5.13786 10.5931 5.19938 10.5855 5.25767 10.5662C6.95455 10.0065 9.18861 9.99527 10.6881 10.6754C10.8013 10.7268 10.9302 10.7311 11.0465 10.6874C11.1628 10.6437 11.257 10.5556 11.3083 10.4425C11.3596 10.3293 11.3639 10.2004 11.3203 10.0841C11.2766 9.96783 11.1885 9.87365 11.0753 9.8223ZM11.0753 12.2739C9.38783 11.5075 6.87486 11.4971 4.96517 12.1276C4.72002 12.2092 4.58642 12.4745 4.66705 12.7206C4.6863 12.7789 4.71684 12.8328 4.75695 12.8793C4.79705 12.9258 4.84593 12.964 4.90078 12.9916C4.95563 13.0192 5.01538 13.0357 5.07662 13.0402C5.13786 13.0447 5.19938 13.0371 5.25767 13.0178C6.95455 12.4581 9.18861 12.4468 10.6881 13.127C10.8013 13.1783 10.9302 13.1826 11.0465 13.1389C11.1628 13.0953 11.257 13.0072 11.3083 12.894C11.3596 12.7809 11.3639 12.652 11.3203 12.5357C11.2766 12.4194 11.1885 12.3252 11.0753 12.2739ZM11.0753 14.7418C9.38783 13.9754 6.87486 13.9651 4.96517 14.5956C4.72002 14.6771 4.58642 14.9425 4.66705 15.1886C4.6863 15.2469 4.71684 15.3008 4.75695 15.3473C4.79705 15.3938 4.84593 15.4319 4.90078 15.4595C4.95563 15.4871 5.01538 15.5037 5.07662 15.5082C5.13786 15.5126 5.19938 15.505 5.25767 15.4857C6.95455 14.9261 9.18861 14.9148 10.6881 15.595C10.8013 15.6463 10.9302 15.6506 11.0465 15.6069C11.1628 15.5632 11.257 15.4751 11.3083 15.362C11.3596 15.2489 11.3639 15.12 11.3203 15.0037C11.2766 14.8874 11.1885 14.7932 11.0753 14.7418ZM11.0753 17.0537C9.38783 16.2873 6.87486 16.277 4.96517 16.9075C4.72002 16.989 4.58642 17.2543 4.66705 17.5004C4.6863 17.5587 4.71684 17.6127 4.75695 17.6592C4.79705 17.7057 4.84593 17.7438 4.90078 17.7714C4.95563 17.799 5.01538 17.8155 5.07662 17.82C5.13786 17.8245 5.19938 17.8169 5.25767 17.7976C6.95455 17.2379 9.18861 17.2267 10.6881 17.9068C10.8013 17.9582 10.9302 17.9625 11.0465 17.9188C11.1628 17.8751 11.257 17.787 11.3083 17.6739C11.3596 17.5607 11.3639 17.4318 11.3203 17.3155C11.2766 17.1992 11.1885 17.1051 11.0753 17.0537Z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.4747 21.7313C16.6798 21.8902 16.9319 21.9763 17.1914 21.9759H17.9194C18.0226 22.3633 18.2509 22.7057 18.5688 22.95C18.8867 23.1943 19.2763 23.3268 19.6772 23.3269H19.6978C20.0987 23.3268 20.4883 23.1943 20.8062 22.95C21.1241 22.7057 21.3524 22.3633 21.4556 21.9759H22.1836C22.3374 21.976 22.4897 21.9458 22.6318 21.8869C22.7739 21.8281 22.903 21.7419 23.0117 21.6331C23.1205 21.5244 23.2067 21.3953 23.2655 21.2532C23.3243 21.1111 23.3546 20.9588 23.3545 20.805V20.8031C23.3545 20.6166 23.3109 20.4398 23.2336 20.2838C23.3959 20.1572 23.5272 19.9953 23.6174 19.8103C23.7077 19.6253 23.7545 19.4222 23.7544 19.2164V19.1105C23.7544 18.7725 23.6306 18.4631 23.4253 18.2259C23.6381 17.9804 23.755 17.6663 23.7544 17.3414V17.2355C23.7544 16.9771 23.6805 16.7241 23.5413 16.5064C23.4022 16.2887 23.2037 16.1154 22.9692 16.0069C22.9702 15.6956 22.972 15.2245 22.9767 14.8158V14.8102C22.9767 14.4844 23.1488 14.183 23.4295 14.0175L23.4333 14.0156C25.6317 12.69 27.1875 10.2258 27.1875 7.5C27.1875 3.36047 23.827 4.04117e-06 19.6875 4.04117e-06C17.7371 -0.00202263 15.8632 0.758316 14.4656 2.11875C14.1525 2.23032 13.8605 2.35641 13.5933 2.49657C10.9378 1.11235 5.73094 1.16625 2.18484 2.44454C2.09409 2.47724 2.01563 2.53715 1.96018 2.61609C1.90472 2.69503 1.87498 2.78916 1.875 2.88563V2.94985C1.51406 3.00469 1.15219 3.06422 0.789375 3.12938L0.788438 3.12985C0.567206 3.16966 0.367014 3.28599 0.222882 3.45848C0.0787503 3.63098 -0.000143987 3.84866 1.97279e-07 4.07344C1.97279e-07 6.34032 1.73095e-07 17.4131 0.00187517 21.0614C0.00209018 21.2691 0.0500017 21.474 0.141916 21.6603C0.23383 21.8466 0.367292 22.0092 0.532013 22.1358C0.696733 22.2623 0.888312 22.3493 1.09198 22.3901C1.29565 22.4309 1.50597 22.4244 1.70672 22.3711C5.42531 21.4078 9.43453 21.1163 13.4569 22.3448C13.5553 22.3748 13.6594 22.3716 13.7541 22.3369C14.6443 22.0665 15.5538 21.8641 16.4747 21.7313ZM20.4445 21.9759H18.9309C19.0866 22.2244 19.3627 22.3894 19.6772 22.3894H19.6978C20.0123 22.3894 20.2884 22.2244 20.4445 21.9759ZM1.875 3.89813C1.56938 3.94594 1.26281 3.99703 0.955313 4.05235C0.950345 4.05322 0.945842 4.05582 0.942588 4.05967C0.939333 4.06352 0.937533 4.0684 0.9375 4.07344C0.9375 6.34032 0.9375 17.4131 0.939375 21.0609C0.939364 21.125 0.954093 21.1883 0.982424 21.2458C1.01075 21.3033 1.05193 21.3535 1.10276 21.3926C1.1536 21.4316 1.21274 21.4585 1.2756 21.471C1.33846 21.4836 1.40337 21.4815 1.46531 21.465L1.46813 21.4645C4.87641 20.5814 8.51578 20.2486 12.1927 21.0469C9.58875 19.7048 5.74734 19.6795 2.48578 20.7164C2.41552 20.739 2.34092 20.7446 2.26807 20.7328C2.19523 20.721 2.1262 20.6921 2.06664 20.6486C2.00708 20.605 1.95867 20.548 1.92536 20.4821C1.89205 20.4163 1.8748 20.3435 1.875 20.2697V3.89813ZM16.0369 20.6048C15.6755 20.7314 15.3295 20.8777 15.0028 21.0445C15.3427 20.9709 15.6825 20.9072 16.0214 20.8523C16.0205 20.8364 16.0205 20.8209 16.0205 20.805V20.8031C16.0205 20.7356 16.0261 20.6695 16.0369 20.6048ZM22.417 20.8031V20.805C22.417 20.8669 22.3924 20.9263 22.3487 20.9701C22.3049 21.0138 22.2455 21.0384 22.1836 21.0384H17.1914C17.1295 21.0384 17.0701 21.0138 17.0263 20.9701C16.9826 20.9263 16.958 20.8669 16.958 20.805V20.8031C16.958 20.6742 17.0625 20.5697 17.1914 20.5697H22.1836C22.3125 20.5697 22.417 20.6742 22.417 20.8031ZM13.125 3.8686V3.30891C10.725 2.06625 6.10031 2.13141 2.8125 3.21938V19.6425C6.38812 18.6642 10.4686 18.892 13.125 20.4989V11.0798C12.5316 10.0055 12.1875 8.78157 12.1875 7.5C12.1875 6.18282 12.5278 4.94485 13.125 3.8686ZM16.4062 16.0069V14.8102C16.4062 14.482 16.2323 14.1778 15.9497 14.0109L15.9469 14.0095C15.2386 13.5839 14.6025 13.0483 14.0625 12.4228V20.497C14.5861 20.1822 15.1411 19.923 15.7186 19.7236C15.6537 19.5624 15.6204 19.3902 15.6206 19.2164V19.1105C15.6206 18.7725 15.7444 18.4631 15.9497 18.2259C15.7369 17.9804 15.62 17.6663 15.6206 17.3414V17.2355C15.6206 16.6908 15.9422 16.2211 16.4062 16.0069ZM22.4011 18.6947C22.6308 18.6947 22.8169 18.8808 22.8169 19.1105V19.2164C22.8169 19.4461 22.6308 19.6322 22.4011 19.6322H16.9739C16.8636 19.6322 16.7579 19.5884 16.6799 19.5104C16.6019 19.4324 16.5581 19.3267 16.5581 19.2164V19.1105C16.5581 18.8808 16.7442 18.6947 16.9739 18.6947H22.4011ZM22.4011 16.8197C22.6308 16.8197 22.8169 17.0058 22.8169 17.2355V17.3414C22.8169 17.5711 22.6308 17.7572 22.4011 17.7572H16.9739C16.8636 17.7572 16.7579 17.7134 16.6799 17.6354C16.6019 17.5574 16.5581 17.4517 16.5581 17.3414V17.2355C16.5581 17.0058 16.7442 16.8197 16.9739 16.8197H22.4011ZM17.3438 15.8822H18.2812V13.2928C18.2812 13.0678 18.1987 12.8513 18.0497 12.6834L17.8116 12.4148C17.5102 12.0754 17.3438 11.6373 17.3438 11.1834V8.85094H17.1094C16.9851 8.85094 16.8658 8.80156 16.7779 8.71365C16.69 8.62574 16.6406 8.50651 16.6406 8.38219C16.6406 8.25787 16.69 8.13864 16.7779 8.05073C16.8658 7.96283 16.9851 7.91344 17.1094 7.91344H17.3438V7.67907C17.3438 7.55475 17.3931 7.43552 17.481 7.34761C17.569 7.2597 17.6882 7.21032 17.8125 7.21032C17.9368 7.21032 18.056 7.2597 18.144 7.34761C18.2319 7.43552 18.2812 7.55475 18.2812 7.67907V7.91344H21.0938V7.67907C21.0938 7.55475 21.1431 7.43552 21.231 7.34761C21.319 7.2597 21.4382 7.21032 21.5625 7.21032C21.6868 7.21032 21.806 7.2597 21.894 7.34761C21.9819 7.43552 22.0312 7.55475 22.0312 7.67907V7.91344H22.2656C22.3899 7.91344 22.5092 7.96283 22.5971 8.05073C22.685 8.13864 22.7344 8.25787 22.7344 8.38219C22.7344 8.50651 22.685 8.62574 22.5971 8.71365C22.5092 8.80156 22.3899 8.85094 22.2656 8.85094H22.0312V11.1834C22.0312 11.6372 21.8648 12.0755 21.5634 12.4148L21.3253 12.6834C21.1763 12.8513 21.0938 13.0678 21.0938 13.2928V15.8822H22.0322C22.0331 15.5756 22.035 15.1669 22.0392 14.8064C22.0399 14.4846 22.1242 14.1685 22.2837 13.889C22.4433 13.6096 22.6727 13.3763 22.9495 13.2122C24.8784 12.0497 26.25 9.8911 26.25 7.5C26.25 3.87797 23.3095 0.937504 19.6875 0.937504C16.0655 0.937504 13.125 3.87797 13.125 7.5C13.125 9.89063 14.4966 12.0488 16.4259 13.2038C16.7054 13.3686 16.9371 13.6034 17.0981 13.8851C17.259 14.1669 17.3437 14.4857 17.3438 14.8102V15.8822ZM21.0938 8.85094H18.2812V11.1834C18.2812 11.408 18.3638 11.6245 18.5128 11.7928L18.7509 12.0609C19.0523 12.4003 19.2188 12.8386 19.2188 13.2928V15.8822H20.1562V13.2928C20.1562 12.8386 20.3227 12.4003 20.6241 12.0609L20.8622 11.7928C21.0113 11.6248 21.0936 11.408 21.0938 11.1834V8.85094Z"
                                  />
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="28"
                                  height="24"
                                  viewBox="0 0 28 24"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.0753 4.91965C9.38783 4.15324 6.87486 4.14293 4.96517 4.7734C4.72002 4.85496 4.58642 5.12027 4.66705 5.36636C4.6863 5.42467 4.71684 5.47862 4.75695 5.52511C4.79705 5.57161 4.84593 5.60975 4.90078 5.63735C4.95563 5.66495 5.01538 5.68147 5.07662 5.68596C5.13786 5.69046 5.19938 5.68284 5.25767 5.66355C6.95455 5.10386 9.18861 5.09261 10.6881 5.77277C10.7442 5.79819 10.8046 5.81233 10.8661 5.81439C10.9276 5.81644 10.9889 5.80636 11.0465 5.78472C11.1041 5.76309 11.1568 5.73033 11.2017 5.6883C11.2467 5.64628 11.2829 5.59582 11.3083 5.5398C11.3337 5.48379 11.3479 5.42331 11.3499 5.36183C11.352 5.30034 11.3419 5.23906 11.3203 5.18147C11.2986 5.12389 11.2659 5.07113 11.2238 5.0262C11.1818 4.98128 11.1313 4.94507 11.0753 4.91965ZM11.0753 7.37074C9.38783 6.60433 6.87486 6.59402 4.96517 7.22449C4.72002 7.30605 4.58642 7.57136 4.66705 7.81746C4.6863 7.87577 4.71684 7.92971 4.75695 7.97621C4.79705 8.0227 4.84593 8.06084 4.90078 8.08844C4.95563 8.11604 5.01538 8.13256 5.07662 8.13706C5.13786 8.14155 5.19938 8.13394 5.25767 8.11465C6.95455 7.55496 9.18861 7.54371 10.6881 8.22386C10.8013 8.27521 10.9302 8.27951 11.0465 8.23582C11.1628 8.19213 11.257 8.10403 11.3083 7.9909C11.3596 7.87776 11.3639 7.74887 11.3203 7.63257C11.2766 7.51627 11.1885 7.42208 11.0753 7.37074ZM11.0753 9.8223C9.38783 9.0559 6.87486 9.04558 4.96517 9.67605C4.72002 9.75761 4.58642 10.0229 4.66705 10.269C4.6863 10.3273 4.71684 10.3813 4.75695 10.4278C4.79705 10.4743 4.84593 10.5124 4.90078 10.54C4.95563 10.5676 5.01538 10.5841 5.07662 10.5886C5.13786 10.5931 5.19938 10.5855 5.25767 10.5662C6.95455 10.0065 9.18861 9.99527 10.6881 10.6754C10.8013 10.7268 10.9302 10.7311 11.0465 10.6874C11.1628 10.6437 11.257 10.5556 11.3083 10.4425C11.3596 10.3293 11.3639 10.2004 11.3203 10.0841C11.2766 9.96783 11.1885 9.87365 11.0753 9.8223ZM11.0753 12.2739C9.38783 11.5075 6.87486 11.4971 4.96517 12.1276C4.72002 12.2092 4.58642 12.4745 4.66705 12.7206C4.6863 12.7789 4.71684 12.8328 4.75695 12.8793C4.79705 12.9258 4.84593 12.964 4.90078 12.9916C4.95563 13.0192 5.01538 13.0357 5.07662 13.0402C5.13786 13.0447 5.19938 13.0371 5.25767 13.0178C6.95455 12.4581 9.18861 12.4468 10.6881 13.127C10.8013 13.1783 10.9302 13.1826 11.0465 13.1389C11.1628 13.0953 11.257 13.0072 11.3083 12.894C11.3596 12.7809 11.3639 12.652 11.3203 12.5357C11.2766 12.4194 11.1885 12.3252 11.0753 12.2739ZM11.0753 14.7418C9.38783 13.9754 6.87486 13.9651 4.96517 14.5956C4.72002 14.6771 4.58642 14.9425 4.66705 15.1886C4.6863 15.2469 4.71684 15.3008 4.75695 15.3473C4.79705 15.3938 4.84593 15.4319 4.90078 15.4595C4.95563 15.4871 5.01538 15.5037 5.07662 15.5082C5.13786 15.5126 5.19938 15.505 5.25767 15.4857C6.95455 14.9261 9.18861 14.9148 10.6881 15.595C10.8013 15.6463 10.9302 15.6506 11.0465 15.6069C11.1628 15.5632 11.257 15.4751 11.3083 15.362C11.3596 15.2489 11.3639 15.12 11.3203 15.0037C11.2766 14.8874 11.1885 14.7932 11.0753 14.7418ZM11.0753 17.0537C9.38783 16.2873 6.87486 16.277 4.96517 16.9075C4.72002 16.989 4.58642 17.2543 4.66705 17.5004C4.6863 17.5587 4.71684 17.6127 4.75695 17.6592C4.79705 17.7057 4.84593 17.7438 4.90078 17.7714C4.95563 17.799 5.01538 17.8155 5.07662 17.82C5.13786 17.8245 5.19938 17.8169 5.25767 17.7976C6.95455 17.2379 9.18861 17.2267 10.6881 17.9068C10.8013 17.9582 10.9302 17.9625 11.0465 17.9188C11.1628 17.8751 11.257 17.787 11.3083 17.6739C11.3596 17.5607 11.3639 17.4318 11.3203 17.3155C11.2766 17.1992 11.1885 17.1051 11.0753 17.0537Z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.4747 21.7313C16.6798 21.8902 16.9319 21.9763 17.1914 21.9759H17.9194C18.0226 22.3633 18.2509 22.7057 18.5688 22.95C18.8867 23.1943 19.2763 23.3268 19.6772 23.3269H19.6978C20.0987 23.3268 20.4883 23.1943 20.8062 22.95C21.1241 22.7057 21.3524 22.3633 21.4556 21.9759H22.1836C22.3374 21.976 22.4897 21.9458 22.6318 21.8869C22.7739 21.8281 22.903 21.7419 23.0117 21.6331C23.1205 21.5244 23.2067 21.3953 23.2655 21.2532C23.3243 21.1111 23.3546 20.9588 23.3545 20.805V20.8031C23.3545 20.6166 23.3109 20.4398 23.2336 20.2838C23.3959 20.1572 23.5272 19.9953 23.6174 19.8103C23.7077 19.6253 23.7545 19.4222 23.7544 19.2164V19.1105C23.7544 18.7725 23.6306 18.4631 23.4253 18.2259C23.6381 17.9804 23.755 17.6663 23.7544 17.3414V17.2355C23.7544 16.9771 23.6805 16.7241 23.5413 16.5064C23.4022 16.2887 23.2037 16.1154 22.9692 16.0069C22.9702 15.6956 22.972 15.2245 22.9767 14.8158V14.8102C22.9767 14.4844 23.1488 14.183 23.4295 14.0175L23.4333 14.0156C25.6317 12.69 27.1875 10.2258 27.1875 7.5C27.1875 3.36047 23.827 4.04117e-06 19.6875 4.04117e-06C17.7371 -0.00202263 15.8632 0.758316 14.4656 2.11875C14.1525 2.23032 13.8605 2.35641 13.5933 2.49657C10.9378 1.11235 5.73094 1.16625 2.18484 2.44454C2.09409 2.47724 2.01563 2.53715 1.96018 2.61609C1.90472 2.69503 1.87498 2.78916 1.875 2.88563V2.94985C1.51406 3.00469 1.15219 3.06422 0.789375 3.12938L0.788438 3.12985C0.567206 3.16966 0.367014 3.28599 0.222882 3.45848C0.0787503 3.63098 -0.000143987 3.84866 1.97279e-07 4.07344C1.97279e-07 6.34032 1.73095e-07 17.4131 0.00187517 21.0614C0.00209018 21.2691 0.0500017 21.474 0.141916 21.6603C0.23383 21.8466 0.367292 22.0092 0.532013 22.1358C0.696733 22.2623 0.888312 22.3493 1.09198 22.3901C1.29565 22.4309 1.50597 22.4244 1.70672 22.3711C5.42531 21.4078 9.43453 21.1163 13.4569 22.3448C13.5553 22.3748 13.6594 22.3716 13.7541 22.3369C14.6443 22.0665 15.5538 21.8641 16.4747 21.7313ZM20.4445 21.9759H18.9309C19.0866 22.2244 19.3627 22.3894 19.6772 22.3894H19.6978C20.0123 22.3894 20.2884 22.2244 20.4445 21.9759ZM1.875 3.89813C1.56938 3.94594 1.26281 3.99703 0.955313 4.05235C0.950345 4.05322 0.945842 4.05582 0.942588 4.05967C0.939333 4.06352 0.937533 4.0684 0.9375 4.07344C0.9375 6.34032 0.9375 17.4131 0.939375 21.0609C0.939364 21.125 0.954093 21.1883 0.982424 21.2458C1.01075 21.3033 1.05193 21.3535 1.10276 21.3926C1.1536 21.4316 1.21274 21.4585 1.2756 21.471C1.33846 21.4836 1.40337 21.4815 1.46531 21.465L1.46813 21.4645C4.87641 20.5814 8.51578 20.2486 12.1927 21.0469C9.58875 19.7048 5.74734 19.6795 2.48578 20.7164C2.41552 20.739 2.34092 20.7446 2.26807 20.7328C2.19523 20.721 2.1262 20.6921 2.06664 20.6486C2.00708 20.605 1.95867 20.548 1.92536 20.4821C1.89205 20.4163 1.8748 20.3435 1.875 20.2697V3.89813ZM16.0369 20.6048C15.6755 20.7314 15.3295 20.8777 15.0028 21.0445C15.3427 20.9709 15.6825 20.9072 16.0214 20.8523C16.0205 20.8364 16.0205 20.8209 16.0205 20.805V20.8031C16.0205 20.7356 16.0261 20.6695 16.0369 20.6048ZM22.417 20.8031V20.805C22.417 20.8669 22.3924 20.9263 22.3487 20.9701C22.3049 21.0138 22.2455 21.0384 22.1836 21.0384H17.1914C17.1295 21.0384 17.0701 21.0138 17.0263 20.9701C16.9826 20.9263 16.958 20.8669 16.958 20.805V20.8031C16.958 20.6742 17.0625 20.5697 17.1914 20.5697H22.1836C22.3125 20.5697 22.417 20.6742 22.417 20.8031ZM13.125 3.8686V3.30891C10.725 2.06625 6.10031 2.13141 2.8125 3.21938V19.6425C6.38812 18.6642 10.4686 18.892 13.125 20.4989V11.0798C12.5316 10.0055 12.1875 8.78157 12.1875 7.5C12.1875 6.18282 12.5278 4.94485 13.125 3.8686ZM16.4062 16.0069V14.8102C16.4062 14.482 16.2323 14.1778 15.9497 14.0109L15.9469 14.0095C15.2386 13.5839 14.6025 13.0483 14.0625 12.4228V20.497C14.5861 20.1822 15.1411 19.923 15.7186 19.7236C15.6537 19.5624 15.6204 19.3902 15.6206 19.2164V19.1105C15.6206 18.7725 15.7444 18.4631 15.9497 18.2259C15.7369 17.9804 15.62 17.6663 15.6206 17.3414V17.2355C15.6206 16.6908 15.9422 16.2211 16.4062 16.0069ZM22.4011 18.6947C22.6308 18.6947 22.8169 18.8808 22.8169 19.1105V19.2164C22.8169 19.4461 22.6308 19.6322 22.4011 19.6322H16.9739C16.8636 19.6322 16.7579 19.5884 16.6799 19.5104C16.6019 19.4324 16.5581 19.3267 16.5581 19.2164V19.1105C16.5581 18.8808 16.7442 18.6947 16.9739 18.6947H22.4011ZM22.4011 16.8197C22.6308 16.8197 22.8169 17.0058 22.8169 17.2355V17.3414C22.8169 17.5711 22.6308 17.7572 22.4011 17.7572H16.9739C16.8636 17.7572 16.7579 17.7134 16.6799 17.6354C16.6019 17.5574 16.5581 17.4517 16.5581 17.3414V17.2355C16.5581 17.0058 16.7442 16.8197 16.9739 16.8197H22.4011ZM17.3438 15.8822H18.2812V13.2928C18.2812 13.0678 18.1987 12.8513 18.0497 12.6834L17.8116 12.4148C17.5102 12.0754 17.3438 11.6373 17.3438 11.1834V8.85094H17.1094C16.9851 8.85094 16.8658 8.80156 16.7779 8.71365C16.69 8.62574 16.6406 8.50651 16.6406 8.38219C16.6406 8.25787 16.69 8.13864 16.7779 8.05073C16.8658 7.96283 16.9851 7.91344 17.1094 7.91344H17.3438V7.67907C17.3438 7.55475 17.3931 7.43552 17.481 7.34761C17.569 7.2597 17.6882 7.21032 17.8125 7.21032C17.9368 7.21032 18.056 7.2597 18.144 7.34761C18.2319 7.43552 18.2812 7.55475 18.2812 7.67907V7.91344H21.0938V7.67907C21.0938 7.55475 21.1431 7.43552 21.231 7.34761C21.319 7.2597 21.4382 7.21032 21.5625 7.21032C21.6868 7.21032 21.806 7.2597 21.894 7.34761C21.9819 7.43552 22.0312 7.55475 22.0312 7.67907V7.91344H22.2656C22.3899 7.91344 22.5092 7.96283 22.5971 8.05073C22.685 8.13864 22.7344 8.25787 22.7344 8.38219C22.7344 8.50651 22.685 8.62574 22.5971 8.71365C22.5092 8.80156 22.3899 8.85094 22.2656 8.85094H22.0312V11.1834C22.0312 11.6372 21.8648 12.0755 21.5634 12.4148L21.3253 12.6834C21.1763 12.8513 21.0938 13.0678 21.0938 13.2928V15.8822H22.0322C22.0331 15.5756 22.035 15.1669 22.0392 14.8064C22.0399 14.4846 22.1242 14.1685 22.2837 13.889C22.4433 13.6096 22.6727 13.3763 22.9495 13.2122C24.8784 12.0497 26.25 9.8911 26.25 7.5C26.25 3.87797 23.3095 0.937504 19.6875 0.937504C16.0655 0.937504 13.125 3.87797 13.125 7.5C13.125 9.89063 14.4966 12.0488 16.4259 13.2038C16.7054 13.3686 16.9371 13.6034 17.0981 13.8851C17.259 14.1669 17.3437 14.4857 17.3438 14.8102V15.8822ZM21.0938 8.85094H18.2812V11.1834C18.2812 11.408 18.3638 11.6245 18.5128 11.7928L18.7509 12.0609C19.0523 12.4003 19.2188 12.8386 19.2188 13.2928V15.8822H20.1562V13.2928C20.1562 12.8386 20.3227 12.4003 20.6241 12.0609L20.8622 11.7928C21.0113 11.6248 21.0936 11.408 21.0938 11.1834V8.85094Z"
                                  />
                                </svg>
                              </span>
                              <span className="e-n-tab-title-text">
                                Our Departments{" "}
                              </span>
                            </button>
                            <button
                              id="e-n-tab-title-222482852"
                              data-tab-title-id={"e-n-tab-title-222482852"}
                              className="e-n-tab-title"
                              aria-selected={"false"}
                              data-tab-index={"2"}
                              role="tab"
                              tabIndex="-1"
                              aria-controls={"e-n-tab-content-222482852"}
                              style={{ "--n-tabs-title-order": "2" }}
                            >
                              <span className="e-n-tab-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 30 30"
                                >
                                  <g clipPath="url(#clip0_7976_105)">
                                    <path d="M18.7095 28.8279C16.6122 28.8279 14.5456 28.625 12.5669 28.2246C12.4095 28.1927 12.2679 28.1074 12.1663 27.983C12.0646 27.8587 12.009 27.7031 12.009 27.5424V20.5382L8.39781 19.4596C8.25421 19.4167 8.12828 19.3287 8.03874 19.2085C7.94919 19.0883 7.90082 18.9425 7.90082 18.7926C7.90082 18.6428 7.94919 18.4969 8.03874 18.3767C8.12828 18.2566 8.25421 18.1685 8.39781 18.1257L18.5104 15.1052C18.6403 15.0664 18.7787 15.0664 18.9087 15.1052L29.006 18.1211C29.1563 18.1622 29.2884 18.2526 29.3812 18.3778C29.4741 18.5029 29.5222 18.6556 29.518 18.8113V22.4199L29.9465 23.4505C30.0079 23.5981 30.0167 23.7624 29.9712 23.9157C29.9258 24.069 29.829 24.202 29.697 24.2923C29.5651 24.3826 29.4061 24.4247 29.2467 24.4116C29.0874 24.3984 28.9374 24.3308 28.822 24.2201C28.7243 24.3138 28.6015 24.3769 28.4684 24.4018C28.3354 24.4267 28.198 24.4123 28.073 24.3602C27.9886 24.3252 27.912 24.2738 27.8474 24.2091C27.7829 24.1444 27.7317 24.0676 27.6969 23.9831C27.662 23.8986 27.6441 23.8081 27.6443 23.7167C27.6444 23.6253 27.6625 23.5348 27.6976 23.4504L28.1262 22.4199V19.7271L18.9088 22.4802C18.7789 22.519 18.6404 22.519 18.5105 22.4802L13.4011 20.954V26.9673C15.1185 27.2785 16.9014 27.436 18.7097 27.436C20.518 27.436 22.3009 27.2785 24.0184 26.9673V23.0307C24.0184 22.8461 24.0918 22.6691 24.2223 22.5386C24.3528 22.408 24.5298 22.3347 24.7144 22.3347C24.899 22.3347 25.076 22.408 25.2066 22.5386C25.3371 22.6691 25.4104 22.8461 25.4104 23.0307V27.5424C25.4104 27.7031 25.3549 27.8587 25.2532 27.9831C25.1515 28.1074 25.0099 28.1927 24.8525 28.2246C22.8736 28.625 20.8069 28.8279 18.7095 28.8279ZM12.9216 19.358L18.7094 21.0868L26.3902 18.7926L18.7094 16.4985L11.0288 18.7926L12.887 19.3477C12.8987 19.3509 12.9103 19.3543 12.9216 19.358ZM9.80303 24.949C9.7343 24.949 9.66444 24.9387 9.59528 24.9171L0.488416 22.0721C0.346841 22.0278 0.223101 21.9395 0.135242 21.82C0.0473821 21.7005 -1.81129e-06 21.5561 0 21.4077L0 1.86788C-1.33315e-06 1.75871 0.025679 1.65107 0.0749661 1.55366C0.124253 1.45624 0.195764 1.37179 0.283722 1.30712C0.371679 1.24245 0.473616 1.19938 0.581295 1.18139C0.688974 1.1634 0.799375 1.17099 0.903578 1.20355L12.8029 4.92113L24.5064 1.26471C24.6106 1.23217 24.721 1.22459 24.8287 1.24259C24.9363 1.26059 25.0383 1.30367 25.1262 1.36833C25.2142 1.433 25.2857 1.51744 25.335 1.61484C25.3843 1.71225 25.41 1.81988 25.41 1.92904V14.3562C25.41 14.5408 25.3367 14.7179 25.2061 14.8484C25.0756 14.9789 24.8986 15.0522 24.714 15.0522C24.5294 15.0522 24.3524 14.9789 24.2218 14.8484C24.0913 14.7179 24.018 14.5408 24.018 14.3562V2.87568L13.4009 6.19272V14.0051C13.4009 14.1897 13.3276 14.3667 13.1971 14.4973C13.0665 14.6278 12.8895 14.7011 12.7049 14.7011C12.5203 14.7011 12.3433 14.6278 12.2128 14.4973C12.0822 14.3667 12.0089 14.1897 12.0089 14.0051V6.13147L1.39199 2.81452V20.896L10.0104 23.5885C10.1692 23.6381 10.305 23.743 10.3931 23.8841C10.4813 24.0252 10.516 24.1933 10.4909 24.3578C10.4659 24.5223 10.3827 24.6723 10.2565 24.7808C10.1303 24.8892 9.96943 24.9489 9.80303 24.949ZM6.70062 15.721C6.63016 15.721 6.56011 15.7102 6.49287 15.6892L4.58706 15.0937C4.49981 15.0664 4.41879 15.0223 4.34861 14.9637C4.27844 14.9051 4.22049 14.8333 4.17807 14.7524C4.13566 14.6714 4.10961 14.5829 4.10141 14.4918C4.09322 14.4008 4.10304 14.3091 4.13031 14.2218C4.15756 14.1346 4.20172 14.0536 4.26029 13.9834C4.31885 13.9132 4.39066 13.8553 4.47162 13.8129C4.55257 13.7705 4.64109 13.7444 4.73212 13.7362C4.82315 13.728 4.9149 13.7378 5.00213 13.7651L6.90795 14.3606C7.06659 14.4104 7.20219 14.5153 7.29019 14.6564C7.3782 14.7974 7.41281 14.9653 7.38776 15.1297C7.36271 15.2941 7.27965 15.4441 7.15362 15.5525C7.02759 15.661 6.8669 15.7207 6.70062 15.721ZM16.8036 12.8548C16.6372 12.8548 16.4763 12.7951 16.3501 12.6867C16.2239 12.5782 16.1407 12.4281 16.1157 12.2636C16.0906 12.0991 16.1253 11.9311 16.2134 11.7899C16.3016 11.6488 16.4374 11.5439 16.5962 11.4943L20.4079 10.3035C20.5831 10.2519 20.7715 10.2712 20.9326 10.3573C21.0937 10.4434 21.2145 10.5893 21.269 10.7637C21.3235 10.938 21.3072 11.1268 21.2238 11.2893C21.1403 11.4517 20.9964 11.5749 20.8229 11.6322L17.0113 12.823C16.9441 12.8441 16.8741 12.8548 16.8036 12.8548ZM8.60653 12.8548C8.53603 12.8548 8.46595 12.844 8.39868 12.823L4.58706 11.6322C4.41362 11.5749 4.26965 11.4517 4.1862 11.2893C4.10275 11.1268 4.0865 10.938 4.14097 10.7637C4.19544 10.5893 4.31625 10.4434 4.47735 10.3573C4.63845 10.2712 4.82692 10.2519 5.00213 10.3035L8.81376 11.4943C8.97258 11.5439 9.10838 11.6488 9.19654 11.7899C9.2847 11.931 9.3194 12.099 9.29434 12.2635C9.26928 12.428 9.18613 12.5781 9.05995 12.6866C8.93378 12.795 8.77292 12.8547 8.60653 12.8548ZM16.8036 9.60572C16.6372 9.60568 16.4763 9.54603 16.3501 9.43757C16.2239 9.32912 16.1407 9.17904 16.1157 9.01454C16.0906 8.85003 16.1253 8.68198 16.2134 8.54085C16.3016 8.39972 16.4374 8.29484 16.5962 8.24522L20.4079 7.05436C20.5833 7.00176 20.7725 7.02045 20.9343 7.10641C21.096 7.19236 21.2174 7.33863 21.2721 7.51349C21.3267 7.68836 21.3102 7.87771 21.2261 8.04047C21.142 8.20324 20.9971 8.32629 20.8229 8.38294L17.0113 9.57379C16.9441 9.59494 16.8741 9.60571 16.8036 9.60572ZM8.60644 9.60572C8.53598 9.60568 8.46593 9.59494 8.39868 9.57387L4.58714 8.38294C4.41292 8.32629 4.26806 8.20324 4.18398 8.04047C4.0999 7.87771 4.08339 7.68836 4.13802 7.51349C4.19265 7.33863 4.31402 7.19236 4.47581 7.10641C4.63759 7.02045 4.82674 7.00176 5.00222 7.05436L8.81385 8.24522C8.97268 8.29484 9.10849 8.39972 9.19665 8.54085C9.28481 8.68198 9.31949 8.85003 9.29441 9.01454C9.26933 9.17904 9.18615 9.32912 9.05994 9.43757C8.93373 9.54603 8.77285 9.60568 8.60644 9.60572Z" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_7976_105">
                                      <rect width="30" height="30" />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 30 30"
                                >
                                  <g clipPath="url(#clip0_7976_105)">
                                    <path d="M18.7095 28.8279C16.6122 28.8279 14.5456 28.625 12.5669 28.2246C12.4095 28.1927 12.2679 28.1074 12.1663 27.983C12.0646 27.8587 12.009 27.7031 12.009 27.5424V20.5382L8.39781 19.4596C8.25421 19.4167 8.12828 19.3287 8.03874 19.2085C7.94919 19.0883 7.90082 18.9425 7.90082 18.7926C7.90082 18.6428 7.94919 18.4969 8.03874 18.3767C8.12828 18.2566 8.25421 18.1685 8.39781 18.1257L18.5104 15.1052C18.6403 15.0664 18.7787 15.0664 18.9087 15.1052L29.006 18.1211C29.1563 18.1622 29.2884 18.2526 29.3812 18.3778C29.4741 18.5029 29.5222 18.6556 29.518 18.8113V22.4199L29.9465 23.4505C30.0079 23.5981 30.0167 23.7624 29.9712 23.9157C29.9258 24.069 29.829 24.202 29.697 24.2923C29.5651 24.3826 29.4061 24.4247 29.2467 24.4116C29.0874 24.3984 28.9374 24.3308 28.822 24.2201C28.7243 24.3138 28.6015 24.3769 28.4684 24.4018C28.3354 24.4267 28.198 24.4123 28.073 24.3602C27.9886 24.3252 27.912 24.2738 27.8474 24.2091C27.7829 24.1444 27.7317 24.0676 27.6969 23.9831C27.662 23.8986 27.6441 23.8081 27.6443 23.7167C27.6444 23.6253 27.6625 23.5348 27.6976 23.4504L28.1262 22.4199V19.7271L18.9088 22.4802C18.7789 22.519 18.6404 22.519 18.5105 22.4802L13.4011 20.954V26.9673C15.1185 27.2785 16.9014 27.436 18.7097 27.436C20.518 27.436 22.3009 27.2785 24.0184 26.9673V23.0307C24.0184 22.8461 24.0918 22.6691 24.2223 22.5386C24.3528 22.408 24.5298 22.3347 24.7144 22.3347C24.899 22.3347 25.076 22.408 25.2066 22.5386C25.3371 22.6691 25.4104 22.8461 25.4104 23.0307V27.5424C25.4104 27.7031 25.3549 27.8587 25.2532 27.9831C25.1515 28.1074 25.0099 28.1927 24.8525 28.2246C22.8736 28.625 20.8069 28.8279 18.7095 28.8279ZM12.9216 19.358L18.7094 21.0868L26.3902 18.7926L18.7094 16.4985L11.0288 18.7926L12.887 19.3477C12.8987 19.3509 12.9103 19.3543 12.9216 19.358ZM9.80303 24.949C9.7343 24.949 9.66444 24.9387 9.59528 24.9171L0.488416 22.0721C0.346841 22.0278 0.223101 21.9395 0.135242 21.82C0.0473821 21.7005 -1.81129e-06 21.5561 0 21.4077L0 1.86788C-1.33315e-06 1.75871 0.025679 1.65107 0.0749661 1.55366C0.124253 1.45624 0.195764 1.37179 0.283722 1.30712C0.371679 1.24245 0.473616 1.19938 0.581295 1.18139C0.688974 1.1634 0.799375 1.17099 0.903578 1.20355L12.8029 4.92113L24.5064 1.26471C24.6106 1.23217 24.721 1.22459 24.8287 1.24259C24.9363 1.26059 25.0383 1.30367 25.1262 1.36833C25.2142 1.433 25.2857 1.51744 25.335 1.61484C25.3843 1.71225 25.41 1.81988 25.41 1.92904V14.3562C25.41 14.5408 25.3367 14.7179 25.2061 14.8484C25.0756 14.9789 24.8986 15.0522 24.714 15.0522C24.5294 15.0522 24.3524 14.9789 24.2218 14.8484C24.0913 14.7179 24.018 14.5408 24.018 14.3562V2.87568L13.4009 6.19272V14.0051C13.4009 14.1897 13.3276 14.3667 13.1971 14.4973C13.0665 14.6278 12.8895 14.7011 12.7049 14.7011C12.5203 14.7011 12.3433 14.6278 12.2128 14.4973C12.0822 14.3667 12.0089 14.1897 12.0089 14.0051V6.13147L1.39199 2.81452V20.896L10.0104 23.5885C10.1692 23.6381 10.305 23.743 10.3931 23.8841C10.4813 24.0252 10.516 24.1933 10.4909 24.3578C10.4659 24.5223 10.3827 24.6723 10.2565 24.7808C10.1303 24.8892 9.96943 24.9489 9.80303 24.949ZM6.70062 15.721C6.63016 15.721 6.56011 15.7102 6.49287 15.6892L4.58706 15.0937C4.49981 15.0664 4.41879 15.0223 4.34861 14.9637C4.27844 14.9051 4.22049 14.8333 4.17807 14.7524C4.13566 14.6714 4.10961 14.5829 4.10141 14.4918C4.09322 14.4008 4.10304 14.3091 4.13031 14.2218C4.15756 14.1346 4.20172 14.0536 4.26029 13.9834C4.31885 13.9132 4.39066 13.8553 4.47162 13.8129C4.55257 13.7705 4.64109 13.7444 4.73212 13.7362C4.82315 13.728 4.9149 13.7378 5.00213 13.7651L6.90795 14.3606C7.06659 14.4104 7.20219 14.5153 7.29019 14.6564C7.3782 14.7974 7.41281 14.9653 7.38776 15.1297C7.36271 15.2941 7.27965 15.4441 7.15362 15.5525C7.02759 15.661 6.8669 15.7207 6.70062 15.721ZM16.8036 12.8548C16.6372 12.8548 16.4763 12.7951 16.3501 12.6867C16.2239 12.5782 16.1407 12.4281 16.1157 12.2636C16.0906 12.0991 16.1253 11.9311 16.2134 11.7899C16.3016 11.6488 16.4374 11.5439 16.5962 11.4943L20.4079 10.3035C20.5831 10.2519 20.7715 10.2712 20.9326 10.3573C21.0937 10.4434 21.2145 10.5893 21.269 10.7637C21.3235 10.938 21.3072 11.1268 21.2238 11.2893C21.1403 11.4517 20.9964 11.5749 20.8229 11.6322L17.0113 12.823C16.9441 12.8441 16.8741 12.8548 16.8036 12.8548ZM8.60653 12.8548C8.53603 12.8548 8.46595 12.844 8.39868 12.823L4.58706 11.6322C4.41362 11.5749 4.26965 11.4517 4.1862 11.2893C4.10275 11.1268 4.0865 10.938 4.14097 10.7637C4.19544 10.5893 4.31625 10.4434 4.47735 10.3573C4.63845 10.2712 4.82692 10.2519 5.00213 10.3035L8.81376 11.4943C8.97258 11.5439 9.10838 11.6488 9.19654 11.7899C9.2847 11.931 9.3194 12.099 9.29434 12.2635C9.26928 12.428 9.18613 12.5781 9.05995 12.6866C8.93378 12.795 8.77292 12.8547 8.60653 12.8548ZM16.8036 9.60572C16.6372 9.60568 16.4763 9.54603 16.3501 9.43757C16.2239 9.32912 16.1407 9.17904 16.1157 9.01454C16.0906 8.85003 16.1253 8.68198 16.2134 8.54085C16.3016 8.39972 16.4374 8.29484 16.5962 8.24522L20.4079 7.05436C20.5833 7.00176 20.7725 7.02045 20.9343 7.10641C21.096 7.19236 21.2174 7.33863 21.2721 7.51349C21.3267 7.68836 21.3102 7.87771 21.2261 8.04047C21.142 8.20324 20.9971 8.32629 20.8229 8.38294L17.0113 9.57379C16.9441 9.59494 16.8741 9.60571 16.8036 9.60572ZM8.60644 9.60572C8.53598 9.60568 8.46593 9.59494 8.39868 9.57387L4.58714 8.38294C4.41292 8.32629 4.26806 8.20324 4.18398 8.04047C4.0999 7.87771 4.08339 7.68836 4.13802 7.51349C4.19265 7.33863 4.31402 7.19236 4.47581 7.10641C4.63759 7.02045 4.82674 7.00176 5.00222 7.05436L8.81385 8.24522C8.97268 8.29484 9.10849 8.39972 9.19665 8.54085C9.28481 8.68198 9.31949 8.85003 9.29441 9.01454C9.26933 9.17904 9.18615 9.32912 9.05994 9.43757C8.93373 9.54603 8.77285 9.60568 8.60644 9.60572Z" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_7976_105">
                                      <rect width="30" height="30" />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                              <span className="e-n-tab-title-text">
                                Research
                              </span>
                            </button>
                            <button
                              id="e-n-tab-title-222482853"
                              data-tab-title-id={"e-n-tab-title-222482853"}
                              className="e-n-tab-title"
                              aria-selected={"false"}
                              data-tab-index={"3"}
                              role="tab"
                              tabIndex="-1"
                              aria-controls={"e-n-tab-content-222482853"}
                              style={{ "--n-tabs-title-order": "3" }}
                            >
                              <span className="e-n-tab-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 30 30"
                                >
                                  <path d="M27.0621 25.0979C27.0621 24.1587 27.396 23.2423 28.0024 22.5174C28.0597 22.449 28.0962 22.3657 28.1078 22.2773C28.1193 22.1888 28.1054 22.099 28.0676 22.0182C28.0299 21.9374 27.9699 21.869 27.8946 21.8211C27.8194 21.7732 27.7321 21.7478 27.6429 21.7478H25.7081C24.1514 18.4465 21.1804 16.0888 17.7104 15.272C19.7835 14.2633 21.2158 12.1355 21.2158 9.67932C21.2158 9.39807 21.1964 9.11682 21.1589 8.83914C21.2303 8.75466 21.2694 8.6476 21.2694 8.53698V4.26379L22.5011 3.93661V7.29936L21.7603 7.72704C21.6891 7.76817 21.6299 7.82734 21.5887 7.8986C21.5476 7.96985 21.5259 8.05069 21.526 8.13297V11.107C21.526 11.1941 21.5503 11.2795 21.5961 11.3535C21.6419 11.4276 21.7074 11.4874 21.7854 11.5263C21.8633 11.5652 21.9505 11.5817 22.0372 11.5738C22.124 11.5659 22.2068 11.534 22.2764 11.4817L22.9698 10.9602L23.6632 11.4817C23.7328 11.534 23.8157 11.566 23.9024 11.5739C23.9892 11.5818 24.0764 11.5654 24.1543 11.5265C24.2323 11.4876 24.2978 11.4277 24.3436 11.3536C24.3895 11.2795 24.4137 11.1941 24.4137 11.107V8.13297C24.4137 8.05069 24.392 7.96985 24.3509 7.8986C24.3098 7.82734 24.2506 7.76817 24.1793 7.72704L23.4386 7.29936V3.68758L23.6033 3.64381C23.8088 3.58926 23.9517 3.40334 23.9517 3.19077C23.9517 2.97819 23.8088 2.79227 23.6033 2.73772L15.1206 0.484437C15.0418 0.463521 14.9588 0.463521 14.88 0.484437L6.39717 2.73772C6.19174 2.79227 6.04877 2.97819 6.04877 3.19077C6.04877 3.40334 6.19174 3.58926 6.39717 3.64381L8.73113 4.26379V8.53709C8.73113 8.65123 8.77232 8.75705 8.84164 8.83926C8.80414 9.11694 8.7848 9.39819 8.7848 9.67944C8.7848 12.135 10.2163 14.2624 12.2885 15.2714C10.5249 15.6857 8.88011 16.4996 7.48085 17.6501C6.08158 18.8007 4.96525 20.2572 4.21795 21.9075C2.86848 22.3403 1.88867 23.6066 1.88867 25.0979C1.88867 26.9451 3.39143 28.4479 5.23865 28.4479H5.74883V29.0403C5.74883 29.1253 5.77197 29.2088 5.81577 29.2817C5.85958 29.3546 5.92238 29.4142 5.99747 29.4541C6.07256 29.4941 6.1571 29.5128 6.24203 29.5084C6.32697 29.5039 6.40909 29.4765 6.47961 29.4289L7.7668 28.5612L9.18687 29.4588C9.25777 29.5036 9.33939 29.5285 9.42322 29.5311C9.50705 29.5336 9.59003 29.5135 9.66348 29.473C9.73695 29.4326 9.79821 29.3731 9.84088 29.3009C9.88354 29.2287 9.90605 29.1464 9.90605 29.0625V28.4478H27.643C27.7321 28.4478 27.8195 28.4224 27.8947 28.3745C27.9699 28.3266 28.03 28.2583 28.0677 28.1775C28.1054 28.0967 28.1194 28.0068 28.1078 27.9184C28.0963 27.83 28.0597 27.7467 28.0025 27.6783C27.3961 26.9534 27.0621 26.037 27.0621 25.0979ZM23.4761 10.1681L23.2515 9.99912C23.168 9.93643 23.069 9.90502 22.9698 9.90502C22.8706 9.90502 22.7715 9.93643 22.688 9.99912L22.4634 10.1681V8.40362L22.9698 8.11129L23.4761 8.40362V10.1681ZM15.0003 1.42246L21.6571 3.19077L15.0003 4.95907L8.34336 3.19077L15.0003 1.42246ZM14.8799 5.89709C14.9588 5.91808 15.0417 5.91808 15.1206 5.89709L20.3319 4.51282V8.14668C19.5113 8.29856 18.8211 8.43198 18.2517 8.54208C15.0002 9.17061 15.0003 9.17061 11.7488 8.54208C11.1794 8.43198 10.4892 8.29856 9.66863 8.14668V4.51282L14.8799 5.89709ZM9.7223 9.67938C9.7223 9.491 9.73326 9.30274 9.75301 9.11588C10.3594 9.2293 10.9653 9.34482 11.5709 9.46247C13.2695 9.79082 14.1349 9.955 15.0002 9.955C15.8655 9.955 16.7309 9.79082 18.4295 9.46247C18.937 9.36438 19.5413 9.24754 20.2474 9.11588C20.2672 9.30268 20.2781 9.49094 20.2781 9.67938C20.2781 12.5893 17.9111 14.9567 15.0014 14.9574H14.9988C12.0893 14.9567 9.7223 12.5893 9.7223 9.67938ZM14.999 15.8949H15.0015C19.0766 15.8954 22.7921 18.17 24.6616 21.7479H5.33809C7.20711 18.1674 10.9152 15.8954 14.999 15.8949ZM6.21758 24.6291C6.09326 24.6291 5.97403 24.6785 5.88612 24.7664C5.79821 24.8543 5.74883 24.9735 5.74883 25.0979V27.5103H5.23865C3.9084 27.5103 2.82617 26.4281 2.82617 25.0979C2.82617 23.7676 3.9084 22.6854 5.23865 22.6854H26.754C26.4197 23.2844 26.213 23.9462 26.1471 24.6291H6.21758ZM8.96861 28.2117L8.00897 27.6051C7.93204 27.5565 7.84261 27.5313 7.7516 27.5326C7.66059 27.534 7.57195 27.5618 7.4965 27.6128L6.68639 28.1589V25.5666H8.96861V28.2117ZM9.90611 27.5103V25.5666H26.1472C26.2131 26.2495 26.4197 26.9113 26.754 27.5103H9.90611Z" />
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 30 30"
                                >
                                  <path d="M27.0621 25.0979C27.0621 24.1587 27.396 23.2423 28.0024 22.5174C28.0597 22.449 28.0962 22.3657 28.1078 22.2773C28.1193 22.1888 28.1054 22.099 28.0676 22.0182C28.0299 21.9374 27.9699 21.869 27.8946 21.8211C27.8194 21.7732 27.7321 21.7478 27.6429 21.7478H25.7081C24.1514 18.4465 21.1804 16.0888 17.7104 15.272C19.7835 14.2633 21.2158 12.1355 21.2158 9.67932C21.2158 9.39807 21.1964 9.11682 21.1589 8.83914C21.2303 8.75466 21.2694 8.6476 21.2694 8.53698V4.26379L22.5011 3.93661V7.29936L21.7603 7.72704C21.6891 7.76817 21.6299 7.82734 21.5887 7.8986C21.5476 7.96985 21.5259 8.05069 21.526 8.13297V11.107C21.526 11.1941 21.5503 11.2795 21.5961 11.3535C21.6419 11.4276 21.7074 11.4874 21.7854 11.5263C21.8633 11.5652 21.9505 11.5817 22.0372 11.5738C22.124 11.5659 22.2068 11.534 22.2764 11.4817L22.9698 10.9602L23.6632 11.4817C23.7328 11.534 23.8157 11.566 23.9024 11.5739C23.9892 11.5818 24.0764 11.5654 24.1543 11.5265C24.2323 11.4876 24.2978 11.4277 24.3436 11.3536C24.3895 11.2795 24.4137 11.1941 24.4137 11.107V8.13297C24.4137 8.05069 24.392 7.96985 24.3509 7.8986C24.3098 7.82734 24.2506 7.76817 24.1793 7.72704L23.4386 7.29936V3.68758L23.6033 3.64381C23.8088 3.58926 23.9517 3.40334 23.9517 3.19077C23.9517 2.97819 23.8088 2.79227 23.6033 2.73772L15.1206 0.484437C15.0418 0.463521 14.9588 0.463521 14.88 0.484437L6.39717 2.73772C6.19174 2.79227 6.04877 2.97819 6.04877 3.19077C6.04877 3.40334 6.19174 3.58926 6.39717 3.64381L8.73113 4.26379V8.53709C8.73113 8.65123 8.77232 8.75705 8.84164 8.83926C8.80414 9.11694 8.7848 9.39819 8.7848 9.67944C8.7848 12.135 10.2163 14.2624 12.2885 15.2714C10.5249 15.6857 8.88011 16.4996 7.48085 17.6501C6.08158 18.8007 4.96525 20.2572 4.21795 21.9075C2.86848 22.3403 1.88867 23.6066 1.88867 25.0979C1.88867 26.9451 3.39143 28.4479 5.23865 28.4479H5.74883V29.0403C5.74883 29.1253 5.77197 29.2088 5.81577 29.2817C5.85958 29.3546 5.92238 29.4142 5.99747 29.4541C6.07256 29.4941 6.1571 29.5128 6.24203 29.5084C6.32697 29.5039 6.40909 29.4765 6.47961 29.4289L7.7668 28.5612L9.18687 29.4588C9.25777 29.5036 9.33939 29.5285 9.42322 29.5311C9.50705 29.5336 9.59003 29.5135 9.66348 29.473C9.73695 29.4326 9.79821 29.3731 9.84088 29.3009C9.88354 29.2287 9.90605 29.1464 9.90605 29.0625V28.4478H27.643C27.7321 28.4478 27.8195 28.4224 27.8947 28.3745C27.9699 28.3266 28.03 28.2583 28.0677 28.1775C28.1054 28.0967 28.1194 28.0068 28.1078 27.9184C28.0963 27.83 28.0597 27.7467 28.0025 27.6783C27.3961 26.9534 27.0621 26.037 27.0621 25.0979ZM23.4761 10.1681L23.2515 9.99912C23.168 9.93643 23.069 9.90502 22.9698 9.90502C22.8706 9.90502 22.7715 9.93643 22.688 9.99912L22.4634 10.1681V8.40362L22.9698 8.11129L23.4761 8.40362V10.1681ZM15.0003 1.42246L21.6571 3.19077L15.0003 4.95907L8.34336 3.19077L15.0003 1.42246ZM14.8799 5.89709C14.9588 5.91808 15.0417 5.91808 15.1206 5.89709L20.3319 4.51282V8.14668C19.5113 8.29856 18.8211 8.43198 18.2517 8.54208C15.0002 9.17061 15.0003 9.17061 11.7488 8.54208C11.1794 8.43198 10.4892 8.29856 9.66863 8.14668V4.51282L14.8799 5.89709ZM9.7223 9.67938C9.7223 9.491 9.73326 9.30274 9.75301 9.11588C10.3594 9.2293 10.9653 9.34482 11.5709 9.46247C13.2695 9.79082 14.1349 9.955 15.0002 9.955C15.8655 9.955 16.7309 9.79082 18.4295 9.46247C18.937 9.36438 19.5413 9.24754 20.2474 9.11588C20.2672 9.30268 20.2781 9.49094 20.2781 9.67938C20.2781 12.5893 17.9111 14.9567 15.0014 14.9574H14.9988C12.0893 14.9567 9.7223 12.5893 9.7223 9.67938ZM14.999 15.8949H15.0015C19.0766 15.8954 22.7921 18.17 24.6616 21.7479H5.33809C7.20711 18.1674 10.9152 15.8954 14.999 15.8949ZM6.21758 24.6291C6.09326 24.6291 5.97403 24.6785 5.88612 24.7664C5.79821 24.8543 5.74883 24.9735 5.74883 25.0979V27.5103H5.23865C3.9084 27.5103 2.82617 26.4281 2.82617 25.0979C2.82617 23.7676 3.9084 22.6854 5.23865 22.6854H26.754C26.4197 23.2844 26.213 23.9462 26.1471 24.6291H6.21758ZM8.96861 28.2117L8.00897 27.6051C7.93204 27.5565 7.84261 27.5313 7.7516 27.5326C7.66059 27.534 7.57195 27.5618 7.4965 27.6128L6.68639 28.1589V25.5666H8.96861V28.2117ZM9.90611 27.5103V25.5666H26.1472C26.2131 26.2495 26.4197 26.9113 26.754 27.5103H9.90611Z" />
                                </svg>
                              </span>
                              <span className="e-n-tab-title-text">
                                Tie-Up Hospital
                              </span>
                            </button>
                          </div>
                          <div className="e-n-tabs-content">
                            <div
                              data-aos-once={"true"}
                              id="e-n-tab-content-222482851"
                              role="tabpanel"
                              aria-labelledby={"e-n-tab-title-222482851"}
                              data-tab-index={"1"}
                              style={{ "--n-tabs-title-order": "1" }}
                              className="e-active elementor-element elementor-element-4480bf6 e-con-full e-flex e-con e-child"
                              data-id={"4480bf6"}
                              data-element_type={"container"}
                              data-e-type={"container"}
                            >
                              <div
                                data-aos-once={"true"}
                                className="elementor-element elementor-element-07a315b elementor-widget elementor-widget-rs-academic-card"
                                data-id={"07a315b"}
                                data-element_type={"widget"}
                                data-e-type={"widget"}
                                data-widget_type={"rs-academic-card.default"}
                              >
                                {" "}
                                <div className="rs-academic-cards style-two">
                                  {" "}
                                  <div className="grid-wrapper">
                                    <div
                                      className="single-item"
                                      style={{
                                        backgroundImage:
                                          "url(/kkcp/web/home/4-our-departments-photos-1-pharmaceutics.webp)",
                                      }}
                                    >
                                      {" "}
                                      <div className="content-wrapper">
                                        {" "}
                                        <div className="content-inner">
                                          <h4 className="title">
                                            <a href="/departments/pharmaceutics/">
                                              Pharmaceutics
                                            </a>
                                          </h4>{" "}
                                        </div>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="single-item"
                                      style={{
                                        backgroundImage:
                                          "url(/kkcp/web/home/4-our-departments-photos-2-pharmaceutical-chemistry.webp)",
                                      }}
                                    >
                                      {" "}
                                      <div className="content-wrapper">
                                        {" "}
                                        <div className="content-inner">
                                          <h4 className="title">
                                            <a href="/departments/pharmaceutical-chemistry/">
                                              Pharmaceutical Chemistry
                                            </a>
                                          </h4>{" "}
                                        </div>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="single-item"
                                      style={{
                                        backgroundImage:
                                          "url(/kkcp/web/home/4-our-departments-photos-3-pharmacology.webp)",
                                      }}
                                    >
                                      {" "}
                                      <div className="content-wrapper">
                                        {" "}
                                        <div className="content-inner">
                                          <h4 className="title">
                                            <a href="/departments/pharmacology/">
                                              Pharmacology
                                            </a>
                                          </h4>{" "}
                                        </div>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="single-item"
                                      style={{
                                        backgroundImage:
                                          "url(/kkcp/web/home/4-our-departments-photos-4-pharmacognosy.webp)",
                                      }}
                                    >
                                      {" "}
                                      <div className="content-wrapper">
                                        {" "}
                                        <div className="content-inner">
                                          <h4 className="title">
                                            <a href="/departments/pharmacognosy/">
                                              Pharmacognosy
                                            </a>
                                          </h4>{" "}
                                        </div>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="single-item"
                                      style={{
                                        backgroundImage:
                                          "url(/kkcp/web/home/4-our-departments-photos-5-pharmacy-practice.webp)",
                                      }}
                                    >
                                      {" "}
                                      <div className="content-wrapper">
                                        {" "}
                                        <div className="content-inner">
                                          <h4 className="title">
                                            <a href="/departments/pharmacy-practice/">
                                              Pharmacy Practice
                                            </a>
                                          </h4>{" "}
                                        </div>{" "}
                                      </div>
                                    </div>
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                            <div
                              data-aos-once={"true"}
                              id="e-n-tab-content-222482852"
                              role="tabpanel"
                              aria-labelledby={"e-n-tab-title-222482852"}
                              data-tab-index={"2"}
                              style={{ "--n-tabs-title-order": "2" }}
                              className=" elementor-element elementor-element-59c17e1 e-con-full e-flex e-con e-child"
                              data-id={"59c17e1"}
                              data-element_type={"container"}
                              data-e-type={"container"}
                            >
                              <div
                                data-aos-once={"true"}
                                className="elementor-element elementor-element-5ab7074 elementor-widget elementor-widget-rs-academic-card"
                                data-id={"5ab7074"}
                                data-element_type={"widget"}
                                data-e-type={"widget"}
                                data-widget_type={"rs-academic-card.default"}
                              >
                                {" "}
                                <div className="rs-academic-cards style-two">
                                  {" "}
                                  <div className="grid-wrapper">
                                    <div
                                      className="single-item"
                                      style={{
                                        backgroundImage:
                                          "url(/test-dummy-webs-1/assets/0122__acc-16-min.webp)",
                                      }}
                                    >
                                      {" "}
                                      <div className="content-wrapper">
                                        {" "}
                                        <div className="content-inner">
                                          <h4 className="title">
                                            <a href="/research/">
                                              The Tamil Nadu Dr. M.G.R. Medical
                                              University Recognized Ph.D.
                                              Research Centre
                                            </a>
                                          </h4>{" "}
                                        </div>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="single-item"
                                      style={{
                                        backgroundImage:
                                          "url(/test-dummy-webs-1/assets/0143__acc-14-min.webp)",
                                      }}
                                    >
                                      {" "}
                                      <div className="content-wrapper">
                                        {" "}
                                        <div className="content-inner">
                                          <h4 className="title">
                                            <a href="/research/">
                                              PCI approved New Courses M.Pharm
                                              Pharmacy Practice &amp; M.Pharm
                                              Regulatory Affairs
                                            </a>
                                          </h4>{" "}
                                        </div>{" "}
                                      </div>
                                    </div>
                                    <div
                                      className="single-item"
                                      style={{
                                        backgroundImage:
                                          "url(/test-dummy-webs-1/assets/0144__acc-4-min.webp)",
                                      }}
                                    >
                                      {" "}
                                      <div className="content-wrapper">
                                        {" "}
                                        <div className="content-inner">
                                          <h4 className="title">
                                            <a href="/research/">
                                              Admissions Open for 2026-2027
                                            </a>
                                          </h4>{" "}
                                        </div>{" "}
                                      </div>
                                    </div>
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                            <div
                              data-aos-once={"true"}
                              id="e-n-tab-content-222482853"
                              role="tabpanel"
                              aria-labelledby={"e-n-tab-title-222482853"}
                              data-tab-index={"3"}
                              style={{ "--n-tabs-title-order": "3" }}
                              className=" elementor-element elementor-element-03a4b03 e-con-full e-flex e-con e-child"
                              data-id={"03a4b03"}
                              data-element_type={"container"}
                              data-e-type={"container"}
                            >
                              <div
                                data-aos-once={"true"}
                                className="elementor-element elementor-element-fc26587 elementor-widget elementor-widget-rs-academic-card"
                                data-id={"fc26587"}
                                data-element_type={"widget"}
                                data-e-type={"widget"}
                                data-widget_type={"rs-academic-card.default"}
                              >
                                {" "}
                                <div className="rs-academic-cards style-two">
                                  {" "}
                                  <div className="kkcp-tieup">
                                    {" "}
                                    <div className="kkcp-tieup-media">
                                      <img
                                        src="/campus-life/assets/0069__campas-thumb-1-1.webp"
                                        alt="Dr. Kamakshi Memorial Hospital"
                                      />
                                    </div>{" "}
                                    <div className="kkcp-tieup-body">
                                      <h4>
                                        Our Tie-Up Hospital <br /> Dr. Kamakshi
                                        Memorial Hospital
                                      </h4>
                                      <p className="text-justify">
                                        Dr. Kamakshi Memorial Hospital is a
                                        renowned 300-bed tertiary care
                                        healthcare institution located at
                                        Pallikaranai, Chennai. With a team of
                                        over 150 experienced consultants and a
                                        built-up area of approximately 1,80,000
                                        sq.ft, the hospital delivers
                                        comprehensive and specialized healthcare
                                        services. The hospital is equipped with
                                        advanced medical facilities and offers
                                        expertise across a wide range of
                                        specialities, including Cardiology,
                                        Gastroenterology, Nephrology, Neurology,
                                        Obstetrics &amp; Gynaecology,
                                        Orthopaedics, Paediatrics, Pulmonology,
                                        Rheumatology, Oncology, and
                                        Transplantation Services.
                                      </p>
                                      <p>
                                        Our college has established academic
                                        collaborations with the hospital through
                                        formal Memoranda of Understanding (MoUs)
                                        and institutional tie-ups, facilitating
                                        clinical education and professional
                                        training opportunities for students.
                                      </p>
                                      <p>
                                        The hospital also serves as an important
                                        clinical training site for Pharm.D and
                                        M.Pharm students, offering extensive
                                        exposure to diverse healthcare settings.
                                        Our students actively participate in
                                        academic and clinical research projects
                                        across various departments, including
                                        Oncology, Emergency Medicine, and
                                        Intensive Care Units (ICUs) during their
                                        fifth and sixth year. This hands-on
                                        training environment enables students to
                                        enhance their clinical knowledge,
                                        develop patient-care skills, and gain
                                        valuable experience in multidisciplinary
                                        healthcare practice.
                                      </p>
                                    </div>{" "}
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ==============================================================================
                  SECTION 5 - LATEST NEWS & UPDATES
                  Styled by change 1.8 (scroll-driven reveal, with a reduced-motion opt-out).
                  ============================================================================== */}
              <div
                data-aos-once={"true"}
                className="elementor-element elementor-element-c496332 e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-id={"c496332"}
                data-element_type={"container"}
                data-e-type={"container"}
                data-settings={'{"background_background":"classic"}'}
              >
                <div className="e-con-inner">
                  <div
                    data-aos-once={"true"}
                    className="elementor-element elementor-element-b3dfbcb e-con-full e-flex e-con e-child"
                    data-id={"b3dfbcb"}
                    data-element_type={"container"}
                    data-e-type={"container"}
                  >
                    <div
                      data-aos-once={"true"}
                      className="elementor-element elementor-element-2e224b1 e-con-full e-flex e-con e-child"
                      data-id={"2e224b1"}
                      data-element_type={"container"}
                      data-e-type={"container"}
                    >
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-196859a elementor-widget elementor-widget-rs-heading"
                        data-id={"196859a"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-widget_type={"rs-heading.default"}
                      >
                        {" "}
                        <div className="prelements-heading style1 left  animate-  ">
                          {" "}
                          <div className="title-inner">
                            {" "}
                            <span className="sub-text ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M5.21484 12.8949V16.6564C5.21484 16.6564 8.82175 15.1537 12.0198 15.1537C15.2178 15.1537 18.8255 16.6564 18.8255 16.6564V12.8424C18.8255 12.8424 15.3844 11.0225 11.9665 11.0225C8.55018 11.021 5.21484 12.8949 5.21484 12.8949Z" />
                                <path d="M22.6467 11.9993L24 11.2716L22.6467 10.5222V10.1666C22.6467 10.1666 23.0278 8.23413 20.862 9.24464C20.7517 9.30465 20.6924 9.36542 20.6684 9.42468L11.7367 4.47119L0 11.1884L4.43211 13.2019V12.5485C4.43211 12.5485 8.15079 10.4607 11.9625 10.4607C15.7734 10.4607 19.6092 12.4899 19.6092 12.4899V13.631L22.0563 12.3167V17.6377H21.2416V19.529L22.3248 18.7803L23.5274 19.529V17.637H22.6467V11.9993ZM22.0555 9.83803V10.1944L21.3413 9.79827C21.6017 9.62573 22.0555 9.38642 22.0555 9.83803ZM21.814 11.9251C21.737 11.9279 21.6603 11.9152 21.5883 11.8877C21.5164 11.8602 21.4507 11.8185 21.3952 11.7651C21.3398 11.7117 21.2956 11.6476 21.2655 11.5768C21.2353 11.5059 21.2198 11.4297 21.2197 11.3527C21.2197 11.2757 21.2351 11.1994 21.2652 11.1285C21.2953 11.0576 21.3393 10.9935 21.3947 10.94C21.4501 10.8865 21.5157 10.8447 21.5876 10.8172C21.6595 10.7896 21.7362 10.7768 21.8132 10.7795C21.9615 10.7848 22.102 10.8474 22.2051 10.9542C22.3082 11.0609 22.3659 11.2035 22.366 11.3519C22.3661 11.5003 22.3086 11.643 22.2056 11.7499C22.1027 11.8568 21.9623 11.9196 21.814 11.9251Z" />
                              </svg>
                              Upcoming Events{" "}
                            </span>
                            <h2
                              className="title rs-split-text-enable split-in-left "
                              data-split-type={"words"}
                              data-duration={"0.8"}
                              data-delay={"0.02"}
                              style={{ perspective: "400px" }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  transform: "none",
                                  opacity: "1",
                                }}
                              >
                                Latest
                              </div>{" "}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  transform: "none",
                                  opacity: "1",
                                }}
                              >
                                News
                              </div>{" "}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  transform: "none",
                                  opacity: "1",
                                }}
                              >
                                &amp;
                              </div>{" "}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  transform: "none",
                                  opacity: "1",
                                }}
                              >
                                Updates
                              </div>
                            </h2>{" "}
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      data-aos-once={"true"}
                      className="elementor-element elementor-element-cd09ff5 e-con-full e-flex e-con e-child"
                      data-id={"cd09ff5"}
                      data-element_type={"container"}
                      data-e-type={"container"}
                    >
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-705e722 elementor-widget elementor-widget-rs-button"
                        data-id={"705e722"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-widget_type={"rs-button.default"}
                      >
                        {" "}
                        <a
                          className="rs-button style-default icon-anim-rotate-90 text-anim-flip-top"
                          href="#"
                        >
                          {" "}
                          <span className="button-icon">
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 18 15"
                            >
                              <path d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z" />
                              <path d="M10.5 13.5C10.5 14.3284 9.82843 15 9 15C8.17157 15 7.5 14.3284 7.5 13.5C7.5 12.6716 8.17157 12 9 12C9.82843 12 10.5 12.6716 10.5 13.5Z" />
                              <path d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z" />
                              <path d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z" />
                              <path d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 8.17157 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z" />
                            </svg>{" "}
                          </span>{" "}
                          <span
                            className="button-text"
                            data-text={"View More Events"}
                          >
                            View More Events{" "}
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos-once={"true"}
                    className="elementor-element elementor-element-a73ed20 e-con-full e-flex e-con e-child"
                    data-id={"a73ed20"}
                    data-element_type={"container"}
                    data-e-type={"container"}
                  >
                    <div
                      data-aos-once={"true"}
                      className="elementor-element elementor-element-bf4d421 elementor-widget__width-inherit elementor-widget elementor-widget-rs-events"
                      data-id={"bf4d421"}
                      data-element_type={"widget"}
                      data-e-type={"widget"}
                      data-widget_type={"rs-events.default"}
                    >
                      {" "}
                      <div className="rs-event-posts">
                        {" "}
                        <div className="horizontal-animation">
                          {" "}
                          <div className="event-post-item animated fadeInUp">
                            {" "}
                            <div className="event-thumbnail">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="1280"
                                height="768"
                                src="/test-dummy-webs-1/assets/0105__e-event-img-1-min.webp"
                                className="attachment-full size-full wp-post-image"
                                alt=""
                                srcSet="/test-dummy-webs-1/assets/0105__e-event-img-1-min.webp 1280w, /test-dummy-webs-1/assets/0145__e-event-img-1-min-300x180.webp 300w, /test-dummy-webs-1/assets/0146__e-event-img-1-min-1024x614.webp 1024w, /test-dummy-webs-1/assets/0147__e-event-img-1-min-768x461.webp 768w"
                                sizes="(max-width: 1280px) 100vw, 1280px"
                              />{" "}
                            </div>{" "}
                            <div className="event-content">
                              {" "}
                              <h4 className="event-title">
                                <a href="#">
                                  M.Pharm Pharmacy Practice Programme Launched
                                </a>
                              </h4>{" "}
                              <div className="event-meta after-title">
                                {" "}
                                <span className="meta-time">
                                  <i className="ri-map-2-line"></i>Chennai,
                                  India{" "}
                                </span>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="event-post-item animated fadeInUp">
                            {" "}
                            <div className="event-thumbnail">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="1280"
                                height="768"
                                src="/test-dummy-webs-1/assets/0106__e-event-img-2-min.webp"
                                className="attachment-full size-full wp-post-image"
                                alt=""
                                srcSet="/test-dummy-webs-1/assets/0106__e-event-img-2-min.webp 1280w, /test-dummy-webs-1/assets/0148__e-event-img-2-min-300x180.webp 300w, /test-dummy-webs-1/assets/0149__e-event-img-2-min-1024x614.webp 1024w, /test-dummy-webs-1/assets/0150__e-event-img-2-min-768x461.webp 768w"
                                sizes="(max-width: 1280px) 100vw, 1280px"
                              />{" "}
                            </div>{" "}
                            <div className="event-content">
                              {" "}
                              <h4 className="event-title">
                                <a href="#">
                                  Ph.D. Programme Recognized by University
                                </a>
                              </h4>{" "}
                              <div className="event-meta after-title">
                                {" "}
                                <span className="meta-time">
                                  <i className="ri-map-2-line"></i>Chennai,
                                  India{" "}
                                </span>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="event-post-item animated fadeInUp">
                            {" "}
                            <div className="event-thumbnail">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="1280"
                                height="768"
                                src="/test-dummy-webs-1/assets/0108__e-event-img-3-min.webp"
                                className="attachment-full size-full wp-post-image"
                                alt=""
                                srcSet="/test-dummy-webs-1/assets/0108__e-event-img-3-min.webp 1280w, /test-dummy-webs-1/assets/0151__e-event-img-3-min-300x180.webp 300w, /test-dummy-webs-1/assets/0152__e-event-img-3-min-1024x614.webp 1024w, /test-dummy-webs-1/assets/0153__e-event-img-3-min-768x461.webp 768w"
                                sizes="(max-width: 1280px) 100vw, 1280px"
                              />{" "}
                            </div>{" "}
                            <div className="event-content">
                              {" "}
                              <h4 className="event-title">
                                <a href="#">Industry Placement Drive – 2025</a>
                              </h4>{" "}
                              <div className="event-meta after-title">
                                {" "}
                                <span className="meta-time">
                                  <i className="ri-map-2-line"></i>Chennai,
                                  India{" "}
                                </span>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="event-post-item animated fadeInUp">
                            {" "}
                            <div className="event-thumbnail">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="1280"
                                height="768"
                                src="/test-dummy-webs-1/assets/0107__e-event-img-4-min.webp"
                                className="attachment-full size-full wp-post-image"
                                alt=""
                                srcSet="/test-dummy-webs-1/assets/0107__e-event-img-4-min.webp 1280w, /test-dummy-webs-1/assets/0154__e-event-img-4-min-300x180.webp 300w, /test-dummy-webs-1/assets/0155__e-event-img-4-min-1024x614.webp 1024w, /test-dummy-webs-1/assets/0156__e-event-img-4-min-768x461.webp 768w"
                                sizes="(max-width: 1280px) 100vw, 1280px"
                              />{" "}
                            </div>{" "}
                            <div className="event-content">
                              {" "}
                              <h4 className="event-title">
                                <a href="#">
                                  M.Pharm Regulatory Affairs Programme Launched
                                </a>
                              </h4>{" "}
                              <div className="event-meta after-title">
                                {" "}
                                <span className="meta-time">
                                  <i className="ri-map-2-line"></i>Chennai,
                                  India{" "}
                                </span>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                          {/* Duplicate set */}
                          <div className="event-post-item animated fadeInUp">
                            {" "}
                            <div className="event-thumbnail">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="1280"
                                height="768"
                                src="/test-dummy-webs-1/assets/0105__e-event-img-1-min.webp"
                                className="attachment-full size-full wp-post-image"
                                alt=""
                                srcSet="/test-dummy-webs-1/assets/0105__e-event-img-1-min.webp 1280w, /test-dummy-webs-1/assets/0145__e-event-img-1-min-300x180.webp 300w, /test-dummy-webs-1/assets/0146__e-event-img-1-min-1024x614.webp 1024w, /test-dummy-webs-1/assets/0147__e-event-img-1-min-768x461.webp 768w"
                                sizes="(max-width: 1280px) 100vw, 1280px"
                              />{" "}
                            </div>{" "}
                            <div className="event-content">
                              {" "}
                              <h4 className="event-title">
                                <a href="#">
                                  M.Pharm Pharmacy Practice Programme Launched
                                </a>
                              </h4>{" "}
                              <div className="event-meta after-title">
                                {" "}
                                <span className="meta-time">
                                  <i className="ri-map-2-line"></i>Chennai,
                                  India{" "}
                                </span>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="event-post-item animated fadeInUp">
                            {" "}
                            <div className="event-thumbnail">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="1280"
                                height="768"
                                src="/test-dummy-webs-1/assets/0106__e-event-img-2-min.webp"
                                className="attachment-full size-full wp-post-image"
                                alt=""
                                srcSet="/test-dummy-webs-1/assets/0106__e-event-img-2-min.webp 1280w, /test-dummy-webs-1/assets/0148__e-event-img-2-min-300x180.webp 300w, /test-dummy-webs-1/assets/0149__e-event-img-2-min-1024x614.webp 1024w, /test-dummy-webs-1/assets/0150__e-event-img-2-min-768x461.webp 768w"
                                sizes="(max-width: 1280px) 100vw, 1280px"
                              />{" "}
                            </div>{" "}
                            <div className="event-content">
                              {" "}
                              <h4 className="event-title">
                                <a href="#">
                                  Ph.D. Programme Recognized by University
                                </a>
                              </h4>{" "}
                              <div className="event-meta after-title">
                                {" "}
                                <span className="meta-time">
                                  <i className="ri-map-2-line"></i>Chennai,
                                  India{" "}
                                </span>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="event-post-item animated fadeInUp">
                            {" "}
                            <div className="event-thumbnail">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="1280"
                                height="768"
                                src="/test-dummy-webs-1/assets/0108__e-event-img-3-min.webp"
                                className="attachment-full size-full wp-post-image"
                                alt=""
                                srcSet="/test-dummy-webs-1/assets/0108__e-event-img-3-min.webp 1280w, /test-dummy-webs-1/assets/0151__e-event-img-3-min-300x180.webp 300w, /test-dummy-webs-1/assets/0152__e-event-img-3-min-1024x614.webp 1024w, /test-dummy-webs-1/assets/0153__e-event-img-3-min-768x461.webp 768w"
                                sizes="(max-width: 1280px) 100vw, 1280px"
                              />{" "}
                            </div>{" "}
                            <div className="event-content">
                              {" "}
                              <h4 className="event-title">
                                <a href="#">Industry Placement Drive – 2025</a>
                              </h4>{" "}
                              <div className="event-meta after-title">
                                {" "}
                                <span className="meta-time">
                                  <i className="ri-map-2-line"></i>Chennai,
                                  India{" "}
                                </span>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="event-post-item animated fadeInUp">
                            {" "}
                            <div className="event-thumbnail">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="1280"
                                height="768"
                                src="/test-dummy-webs-1/assets/0107__e-event-img-4-min.webp"
                                className="attachment-full size-full wp-post-image"
                                alt=""
                                srcSet="/test-dummy-webs-1/assets/0107__e-event-img-4-min.webp 1280w, /test-dummy-webs-1/assets/0154__e-event-img-4-min-300x180.webp 300w, /test-dummy-webs-1/assets/0155__e-event-img-4-min-1024x614.webp 1024w, /test-dummy-webs-1/assets/0156__e-event-img-4-min-768x461.webp 768w"
                                sizes="(max-width: 1280px) 100vw, 1280px"
                              />{" "}
                            </div>{" "}
                            <div className="event-content">
                              {" "}
                              <h4 className="event-title">
                                <a href="#">
                                  M.Pharm Regulatory Affairs Programme Launched
                                </a>
                              </h4>{" "}
                              <div className="event-meta after-title">
                                {" "}
                                <span className="meta-time">
                                  <i className="ri-map-2-line"></i>Chennai,
                                  India{" "}
                                </span>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ==============================================================================
                  SECTION 6 - PRINCIPAL'S MESSAGE
                  Portrait + quote, attributed to Prof. Dr. A. Meena, Principal.
                  ============================================================================== */}
              <div
                data-aos-once={"true"}
                className="elementor-element elementor-element-199013f e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-id={"199013f"}
                data-element_type={"container"}
                data-e-type={"container"}
                data-settings={'{"background_background":"classic"}'}
              >
                <div className="e-con-inner">
                  <div
                    data-aos-once={"true"}
                    className="elementor-element elementor-element-c502fab e-con-full e-flex e-con e-child"
                    data-id={"c502fab"}
                    data-element_type={"container"}
                    data-e-type={"container"}
                    data-settings={'{"background_background":"classic"}'}
                  >
                    <div
                      data-aos-once={"true"}
                      className="elementor-element elementor-element-a519090 elementor-absolute elementor-widget elementor-widget-rs-image"
                      data-id={"a519090"}
                      data-element_type={"widget"}
                      data-e-type={"widget"}
                      data-settings={'{"_position":"absolute"}'}
                      data-widget_type={"rs-image.default"}
                    >
                      {" "}
                      <div className="rs-image">
                        {" "}
                        <img
                          decoding="async"
                          className="rs-multi-image  reverse- blend_unset"
                          src="/test-dummy-webs-1/assets/0077__testi-left1.webp"
                          alt="testi-left1"
                        />{" "}
                      </div>
                    </div>
                    <div
                      data-aos-once={"true"}
                      className="elementor-element elementor-element-ab04d3b e-con-full e-flex e-con e-child"
                      data-id={"ab04d3b"}
                      data-element_type={"container"}
                      data-e-type={"container"}
                    >
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-91bfc94 elementor-widget-tablet__width-inherit elementor-widget-laptop__width-inherit elementor-widget elementor-widget-rs-image"
                        data-id={"91bfc94"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-widget_type={"rs-image.default"}
                      >
                        {" "}
                        <div className="rs-image">
                          {" "}
                          <img
                            decoding="async"
                            className="rs-multi-image  reverse- blend_unset"
                            src="/kkcp/web/home/5-message-img-0112(1).png"
                            alt="Dr. A. Meena, Principal of K.K. College of Pharmacy"
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      data-aos-once={"true"}
                      className="elementor-element elementor-element-6fabaa0 e-con-full e-flex e-con e-child"
                      data-id={"6fabaa0"}
                      data-element_type={"container"}
                      data-e-type={"container"}
                      data-settings={'{"background_background":"gradient"}'}
                    >
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-906b4da elementor-widget elementor-widget-rs-heading"
                        data-id={"906b4da"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-widget_type={"rs-heading.default"}
                      >
                        {" "}
                        <div className="prelements-heading default   animate-  ">
                          {" "}
                          <div className="title-inner"> </div>{" "}
                          <div className="descripti">
                            <p>
                              &quot;We believe every pharmacy student deserves
                              an environment that promotes academic success,
                              personal well-being and professional
                              excellence.&quot;
                            </p>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-3455f86 e-con-full e-flex e-con e-child"
                        data-id={"3455f86"}
                        data-element_type={"container"}
                        data-e-type={"container"}
                      >
                        <div
                          data-aos-once={"true"}
                          className="elementor-element elementor-element-cb5be38 e-con-full e-flex e-con e-child"
                          data-id={"cb5be38"}
                          data-element_type={"container"}
                          data-e-type={"container"}
                        >
                          <div
                            data-aos-once={"true"}
                            className="elementor-element elementor-element-f7912f4 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-rs-heading"
                            data-id={"f7912f4"}
                            data-element_type={"widget"}
                            data-e-type={"widget"}
                            data-widget_type={"rs-heading.default"}
                          >
                            {" "}
                            <div className="prelements-heading default   animate-  ">
                              {" "}
                              <div className="title-inner">
                                <h4 className="title  ">
                                  Prof. Dr. A. Meena
                                </h4>{" "}
                              </div>{" "}
                              <div className="descripti">
                                <p>Principal</p>{" "}
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ==============================================================================
                  SECTION 7 - EMPTY CONTAINER  (dead markup)
                  Renders <div class="e-con-inner"></div> and nothing else. Carried over from
                  the source page. Kept so the section numbering and any nth-child rules in the
                  vendored theme CSS keep lining up. Safe to delete only after checking those.
                  ============================================================================== */}
              <div
                data-aos-once={"true"}
                className="elementor-element elementor-element-832c7be e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-id={"832c7be"}
                data-element_type={"container"}
                data-e-type={"container"}
                data-settings={'{"background_background":"classic"}'}
              >
                <div className="e-con-inner"></div>
              </div>
              {/* ==============================================================================
                  SECTION 8 - KKCP CAMPUS LIFE
                  Contains the image carousel 2cd6a66, whose captions change 1.15 hides.
                  ============================================================================== */}
              <div
                data-aos-once={"true"}
                className="elementor-element elementor-element-847c36e e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-id={"847c36e"}
                data-element_type={"container"}
                data-e-type={"container"}
                data-settings={'{"background_background":"classic"}'}
              >
                <div className="e-con-inner">
                  <div
                    data-aos-once={"true"}
                    className="elementor-element elementor-element-e2ec71b e-flex e-con-boxed e-con e-child"
                    data-id={"e2ec71b"}
                    data-element_type={"container"}
                    data-e-type={"container"}
                  >
                    <div className="e-con-inner">
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-60b3964 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget-mobile_extra__width-initial elementor-widget elementor-widget-rs-heading"
                        data-id={"60b3964"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-widget_type={"rs-heading.default"}
                      >
                        {" "}
                        <div className="prelements-heading style1 left  animate-  ">
                          {" "}
                          <div className="title-inner">
                            {" "}
                            <span className="sub-text ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M5.21484 12.8949V16.6564C5.21484 16.6564 8.82175 15.1537 12.0198 15.1537C15.2178 15.1537 18.8255 16.6564 18.8255 16.6564V12.8424C18.8255 12.8424 15.3844 11.0225 11.9665 11.0225C8.55018 11.021 5.21484 12.8949 5.21484 12.8949Z" />
                                <path d="M22.6467 11.9993L24 11.2716L22.6467 10.5222V10.1666C22.6467 10.1666 23.0278 8.23413 20.862 9.24464C20.7517 9.30465 20.6924 9.36542 20.6684 9.42468L11.7367 4.47119L0 11.1884L4.43211 13.2019V12.5485C4.43211 12.5485 8.15079 10.4607 11.9625 10.4607C15.7734 10.4607 19.6092 12.4899 19.6092 12.4899V13.631L22.0563 12.3167V17.6377H21.2416V19.529L22.3248 18.7803L23.5274 19.529V17.637H22.6467V11.9993ZM22.0555 9.83803V10.1944L21.3413 9.79827C21.6017 9.62573 22.0555 9.38642 22.0555 9.83803ZM21.814 11.9251C21.737 11.9279 21.6603 11.9152 21.5883 11.8877C21.5164 11.8602 21.4507 11.8185 21.3952 11.7651C21.3398 11.7117 21.2956 11.6476 21.2655 11.5768C21.2353 11.5059 21.2198 11.4297 21.2197 11.3527C21.2197 11.2757 21.2351 11.1994 21.2652 11.1285C21.2953 11.0576 21.3393 10.9935 21.3947 10.94C21.4501 10.8865 21.5157 10.8447 21.5876 10.8172C21.6595 10.7896 21.7362 10.7768 21.8132 10.7795C21.9615 10.7848 22.102 10.8474 22.2051 10.9542C22.3082 11.0609 22.3659 11.2035 22.366 11.3519C22.3661 11.5003 22.3086 11.643 22.2056 11.7499C22.1027 11.8568 21.9623 11.9196 21.814 11.9251Z" />
                              </svg>
                              Experience Campus Life{" "}
                            </span>
                            <h2
                              className="title rs-split-text-enable split-in-fade "
                              data-split-type={"words"}
                              data-duration={"0.8"}
                              data-delay={"0.02"}
                              style={{ perspective: "400px" }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  opacity: "1",
                                  transform: "none",
                                }}
                              >
                                KKCP
                              </div>{" "}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  opacity: "1",
                                  transform: "none",
                                }}
                              >
                                Campus
                              </div>{" "}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  opacity: "1",
                                  transform: "none",
                                }}
                              >
                                Life
                              </div>{" "}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  opacity: "1",
                                  transform: "none",
                                }}
                              >
                                Where
                              </div>{" "}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  opacity: "1",
                                  transform: "none",
                                }}
                              >
                                Learning
                              </div>{" "}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  opacity: "1",
                                }}
                              >
                                Meets
                              </div>{" "}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  opacity: "1",
                                }}
                              >
                                Living
                              </div>
                            </h2>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      <div
                        data-aos-once={"true"}
                        className="elementor-element elementor-element-fe35fa2 elementor-widget__width-initial elementor-widget elementor-widget-rs-heading animated fadeInRight"
                        data-id={"fe35fa2"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-settings={'{"_animation":"fadeInRight"}'}
                        data-widget_type={"rs-heading.default"}
                      >
                        {" "}
                        <div className="prelements-heading style1 left  animate-  ">
                          {" "}
                          <div className="title-inner"> </div>{" "}
                          <div className="descripti">
                            <p>
                              Experience KKCP Campus Life where Pharmacy
                              Education meets modern laboratories, vibrant
                              student activities and industry-ready training
                              every day.
                            </p>{" "}
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CampusCarousel/>
                  {/* <div
                    data-aos-once={"true"}
                    className="elementor-element elementor-element-d9b6d0d e-con-full e-flex e-con e-child"
                    data-id={"d9b6d0d"}
                    data-element_type={"container"}
                    data-e-type={"container"}
                  >
                    <div
                      data-aos-once={"true"}
                      className="elementor-element elementor-element-2cd6a66 rs-caption-on-hover elementor-widget elementor-widget-image-carousel e-widget-swiper"
                      data-id={"2cd6a66"}
                      data-element_type={"widget"}
                      data-e-type={"widget"}
                      data-settings={
                        '{"slides_to_show":"3","navigation":"none","image_spacing_custom":{"unit":"px","size":"30","sizes":[]},"autoplay_speed":"3000","autoplay":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","infinite":"yes","speed":500,"image_spacing_custom_laptop":{"unit":"px","size":"","sizes":[]},"image_spacing_custom_tablet_extra":{"unit":"px","size":"","sizes":[]},"image_spacing_custom_tablet":{"unit":"px","size":"","sizes":[]},"image_spacing_custom_mobile_extra":{"unit":"px","size":"","sizes":[]},"image_spacing_custom_mobile":{"unit":"px","size":"","sizes":[]}}'
                      }
                      data-widget_type={"image-carousel.default"}
                    >
                      <div
                        className="elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
                        role="region"
                        aria-roledescription={"carousel"}
                        aria-label={"Image Carousel"}
                        dir="ltr"
                      >
                        <div
                          className="elementor-image-carousel swiper-wrapper swiper-image-stretch"
                          aria-live={"off"}
                          id="swiper-wrapper-9bf64ba7a49e8966"
                          style={{
                            transform: "translate3d(-2620px, 0px, 0px)",
                            transitionDuration: "0ms",
                          }}
                        >
                          <div
                            className="swiper-slide swiper-slide-duplicate"
                            role="group"
                            aria-roledescription={"slide"}
                            aria-label={"2 / 4"}
                            data-swiper-slide-index={"1"}
                            style={{ width: "406.667px", marginRight: "30px" }}
                            aria-hidden={"true"}
                            inert={true}
                          >
                            <figure className="swiper-slide-inner">
                              <img
                                decoding="async"
                                className="swiper-slide-image"
                                src="/kkcp/web/home/6-campus-life-home-page-0c7a8408.webp"
                                alt="Laboratories and facilities at K.K. College of Pharmacy"
                              />
                              <figcaption className="elementor-image-carousel-caption">
                                Labs &amp; Facilities
                              </figcaption>
                            </figure>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                            role="group"
                            aria-roledescription={"slide"}
                            aria-label={"3 / 4"}
                            data-swiper-slide-index={"2"}
                            style={{ width: "406.667px", marginRight: "30px" }}
                            aria-hidden={"true"}
                            inert={true}
                          >
                            <figure className="swiper-slide-inner">
                              <img
                                decoding="async"
                                className="swiper-slide-image"
                                src="/kkcp/web/home/6-campus-life-home-page-0c7a8464.webp"
                                alt="Academic session in progress at K.K. College of Pharmacy"
                              />
                              <figcaption className="elementor-image-carousel-caption">
                                Academic Excellence
                              </figcaption>
                            </figure>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                            role="group"
                            aria-roledescription={"slide"}
                            aria-label={"4 / 4"}
                            data-swiper-slide-index={"3"}
                            style={{ width: "406.667px", marginRight: "30px" }}
                            aria-hidden={"true"}
                            inert={true}
                          >
                            <figure className="swiper-slide-inner">
                              <img
                                decoding="async"
                                className="swiper-slide-image"
                                src="/test-dummy-webs-1/assets/0083__e-campus-img1-4-min.webp"
                                alt="Campus Life"
                              />
                              <figcaption className="elementor-image-carousel-caption">
                                Campus Life
                              </figcaption>
                            </figure>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-duplicate-next"
                            role="group"
                            aria-roledescription={"slide"}
                            aria-label={"1 / 4"}
                            data-swiper-slide-index={"0"}
                            style={{ width: "406.667px", marginRight: "30px" }}
                            aria-hidden={"true"}
                            inert={true}
                          >
                            <figure className="swiper-slide-inner">
                              <img
                                decoding="async"
                                className="swiper-slide-image"
                                src="/kkcp/web/home/6-campus-life-home-page-0c7a8307.webp"
                                alt="Student activities on the K.K. College of Pharmacy campus"
                              />
                              <figcaption className="elementor-image-carousel-caption">
                                Student Activities
                              </figcaption>
                            </figure>
                          </div>
                          <div
                            className="swiper-slide"
                            role="group"
                            aria-roledescription={"slide"}
                            aria-label={"2 / 4"}
                            data-swiper-slide-index={"1"}
                            style={{ width: "406.667px", marginRight: "30px" }}
                            aria-hidden={"true"}
                            inert={true}
                          >
                            <figure className="swiper-slide-inner">
                              <img
                                decoding="async"
                                className="swiper-slide-image"
                                src="/kkcp/web/home/6-campus-life-home-page-0c7a8408.webp"
                                alt="Laboratories and facilities at K.K. College of Pharmacy"
                              />
                              <figcaption className="elementor-image-carousel-caption">
                                Labs &amp; Facilities
                              </figcaption>
                            </figure>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-prev"
                            role="group"
                            aria-roledescription={"slide"}
                            aria-label={"3 / 4"}
                            data-swiper-slide-index={"2"}
                            style={{ width: "406.667px", marginRight: "30px" }}
                            aria-hidden={"true"}
                            inert={true}
                          >
                            <figure className="swiper-slide-inner">
                              <img
                                decoding="async"
                                className="swiper-slide-image"
                                src="/kkcp/web/home/6-campus-life-home-page-0c7a8464.webp"
                                alt="Academic session in progress at K.K. College of Pharmacy"
                              />
                              <figcaption className="elementor-image-carousel-caption">
                                Academic Excellence
                              </figcaption>
                            </figure>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-active"
                            role="group"
                            aria-roledescription={"slide"}
                            aria-label={"4 / 4"}
                            data-swiper-slide-index={"3"}
                            style={{ width: "406.667px", marginRight: "30px" }}
                          >
                            <figure className="swiper-slide-inner">
                              <img
                                decoding="async"
                                className="swiper-slide-image"
                                src="/test-dummy-webs-1/assets/0083__e-campus-img1-4-min.webp"
                                alt="Campus Life"
                              />
                              <figcaption className="elementor-image-carousel-caption">
                                Campus Life
                              </figcaption>
                            </figure>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-duplicate swiper-slide-next"
                            role="group"
                            aria-roledescription={"slide"}
                            aria-label={"1 / 4"}
                            data-swiper-slide-index={"0"}
                            style={{ width: "406.667px", marginRight: "30px" }}
                          >
                            <figure className="swiper-slide-inner">
                              <img
                                decoding="async"
                                className="swiper-slide-image"
                                src="/kkcp/web/home/6-campus-life-home-page-0c7a8307.webp"
                                alt="Student activities on the K.K. College of Pharmacy campus"
                              />
                              <figcaption className="elementor-image-carousel-caption">
                                Student Activities
                              </figcaption>
                            </figure>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-duplicate"
                            role="group"
                            aria-roledescription={"slide"}
                            aria-label={"2 / 4"}
                            data-swiper-slide-index={"1"}
                            style={{ width: "406.667px", marginRight: "30px" }}
                          >
                            <figure className="swiper-slide-inner">
                              <img
                                decoding="async"
                                className="swiper-slide-image"
                                src="/kkcp/web/home/6-campus-life-home-page-0c7a8408.webp"
                                alt="Laboratories and facilities at K.K. College of Pharmacy"
                              />
                              <figcaption className="elementor-image-carousel-caption">
                                Labs &amp; Facilities
                              </figcaption>
                            </figure>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                            role="group"
                            aria-roledescription={"slide"}
                            aria-label={"3 / 4"}
                            data-swiper-slide-index={"2"}
                            style={{ width: "406.667px", marginRight: "30px" }}
                            aria-hidden={"true"}
                            inert={true}
                          >
                            <figure className="swiper-slide-inner">
                              <img
                                decoding="async"
                                className="swiper-slide-image"
                                src="/kkcp/web/home/6-campus-life-home-page-0c7a8464.webp"
                                alt="Academic session in progress at K.K. College of Pharmacy"
                              />
                              <figcaption className="elementor-image-carousel-caption">
                                Academic Excellence
                              </figcaption>
                            </figure>
                          </div>
                        </div>
                        <span
                          className="swiper-notification"
                          aria-live={"assertive"}
                          aria-atomic={"true"}
                        ></span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* ==============================================================================
                  SECTION 9 - KKCP FACULTY
                  Portrait carousel rendered from the HOME_FACULTY array. Change 1.11.
                  ============================================================================== */}
              <div
                data-aos-once={"true"}
                className="elementor-element elementor-element-kkcpfaculty e-flex e-con-boxed e-con e-parent e-lazyloaded"
                data-id={"kkcpfaculty"}
                data-element_type={"container"}
                data-e-type={"container"}
              >
                <div className="e-con-inner">
                  <div
                    data-aos-once={"true"}
                    className="elementor-element elementor-element-kkcpfacultyh elementor-widget__width-inherit elementor-widget elementor-widget-rs-heading"
                    data-id={"kkcpfacultyh"}
                    data-element_type={"widget"}
                    data-e-type={"widget"}
                    data-widget_type={"rs-heading.default"}
                  >
                    {" "}
                    <div className="prelements-heading style1 center  animate-  ">
                      {" "}
                      <div className="title-inner">
                        {" "}
                        <span className="sub-text ">Our Team</span>
                        <h2 className="title">KKCP Faculty</h2>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div
                    data-aos-once={"true"}
                    className="elementor-element elementor-element-kkcpfacultyc elementor-widget elementor-widget-image-carousel"
                    data-id={"kkcpfacultyc"}
                    data-element_type={"widget"}
                    data-e-type={"widget"}
                    data-widget_type={"image-carousel.default"}
                  >
                    <div
                      className="elementor-image-carousel-wrapper kkcp-faculty-carousel"
                      role="region"
                      aria-roledescription={"carousel"}
                      aria-label={"KKCP Faculty"}
                      tabIndex="0"
                    >
                      {HOME_FACULTY.map((member) => (
                        <figure className="kkcp-faculty-slide" key={member.src}>
                          <img
                            src={member.src}
                            alt={member.name + ", " + member.designation}
                            loading="lazy"
                            decoding="async"
                          />
                          <figcaption className="kkcp-faculty-caption">
                            <p className="kkcp-faculty-name">{member.name}</p>
                            <p className="kkcp-faculty-designation">
                              {member.designation}
                            </p>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* ==============================================================================
                  SECTION 10 - ADMISSIONS  (external component)
                  Lives in ./AdmissionsSection. Its inner markup (72f9ac1 / 9013095) is styled
                  by change 1.16 IN THIS FILE - a cross-file coupling to keep in mind if this
                  file is moved without that component.
                  ============================================================================== */}
              <div id="admissionsSection" className="scroll-mt-1!">
                <AdmissionsSection />
              </div>

              <div
                data-aos-once={"true"}
                className="elementor-element elementor-element-7db666c e-con-full e-flex e-con e-child"
                data-id={"7db666c"}
                data-element_type={"container"}
                data-e-type={"container"}
              >
                <div
                  data-aos-once={"true"}
                  className="elementor-element elementor-element-0cfcfb5 elementor-widget-tablet__width-initial elementor-widget elementor-widget-rs-image"
                  data-id={"0cfcfb5"}
                  data-element_type={"widget"}
                  data-e-type={"widget"}
                  data-widget_type={"rs-image.default"}
                >
                  {" "}
                  <div className="rs-image">
                    {" "}
                    <img
                      decoding="async"
                      className="rs-multi-image  reverse- blend_unset"
                      src="/kkcp/web/home/1-home-page-next-to-footer-portion-img-0336.webp"
                      alt="K.K. College of Pharmacy campus building"
                    />{" "}
                  </div>
                </div>

                <div
                  data-aos-once={"true"}
                  className="elementor-element elementor-element-1887079 elementor-widget-tablet__width-initial elementor-widget elementor-widget-rs-image"
                  data-id={"1887079"}
                  data-element_type={"widget"}
                  data-e-type={"widget"}
                  data-widget_type={"rs-image.default"}
                >
                  {" "}
                  <div className="rs-image">
                    {" "}
                    <img
                      decoding="async"
                      className="rs-multi-image  reverse- blend_unset"
                      src="/kkcp/web/home/1-home-page-next-to-footer-portion-img-0348.webp"
                      alt="K.K. College of Pharmacy campus grounds"
                    />{" "}
                  </div>
                </div>

                <div
                  data-aos-once={"true"}
                  className="elementor-element elementor-element-df71484 elementor-widget-tablet__width-initial elementor-widget elementor-widget-rs-image"
                  data-id={"df71484"}
                  data-element_type={"widget"}
                  data-e-type={"widget"}
                  data-widget_type={"rs-image.default"}
                >
                  {" "}
                  <div className="rs-image">
                    {" "}
                    <img
                      decoding="async"
                      className="rs-multi-image  reverse- blend_unset"
                      src="/kkcp/web/home/1-home-page-next-to-footer-portion-img-0286.webp"
                      alt="K.K. College of Pharmacy campus"
                    />{" "}
                  </div>
                </div>

                <div
                  data-aos-once={"true"}
                  className="elementor-element elementor-element-80529ab elementor-widget-tablet__width-initial elementor-widget elementor-widget-rs-image"
                  data-id={"80529ab"}
                  data-element_type={"widget"}
                  data-e-type={"widget"}
                  data-widget_type={"rs-image.default"}
                >
                  {" "}
                  <div className="rs-image">
                    {" "}
                    <img
                      decoding="async"
                      className="rs-multi-image  reverse- blend_unset"
                      src="/kkcp/web/home/2-home-page-courses-5-pharm-d-pb.webp"
                      alt="gallery-img5-5-min"
                    />{" "}
                  </div>
                </div>

                <div
                  data-aos-once={"true"}
                  className="elementor-element elementor-element-c47c33a elementor-widget-tablet__width-initial elementor-widget elementor-widget-rs-image"
                  data-id={"c47c33a"}
                  data-element_type={"widget"}
                  data-e-type={"widget"}
                  data-widget_type={"rs-image.default"}
                >
                  {" "}
                  <div className="rs-image">
                    {" "}
                    <img
                      decoding="async"
                      className="rs-multi-image  reverse- blend_unset"
                      src="/kkcp/web/home/2-home-page-courses-4-pharm-d.webp"
                      alt="gallery-img4-min"
                    />{" "}
                  </div>
                </div>

                <div
                  data-aos-once={"true"}
                  className="elementor-element elementor-element-c47c33a elementor-widget-tablet__width-initial elementor-widget elementor-widget-rs-image"
                  data-id={"c47c33a"}
                  data-element_type={"widget"}
                  data-e-type={"widget"}
                  data-widget_type={"rs-image.default"}
                >
                  {" "}
                  <div className="rs-image">
                    {" "}
                    <img
                      decoding="async"
                      className="rs-multi-image  reverse- blend_unset"
                      src="/kkcp/web/home/3-empowering-students-img-0146.webp"
                      alt="gallery-img4-min"
                    />{" "}
                  </div>
                </div>

                {/* Discover Our Campus */}
                {/* <div
                  data-aos-once={"true"}
                  className="elementor-element elementor-element-6d7e9d3 elementor-absolute elementor-widget-mobile__width-inherit e-transform elementor-widget elementor-widget-rs-button"
                  data-id={"6d7e9d3"}
                  data-element_type={"widget"}
                  data-e-type={"widget"}
                  data-settings={
                    '{"_position":"absolute","_transform_translateY_effect":{"unit":"%","size":"-50","sizes":[]},"_transform_translateX_effect":{"unit":"%","size":"-50","sizes":[]},"_transform_translateX_effect_laptop":{"unit":"%","size":"","sizes":[]},"_transform_translateX_effect_tablet_extra":{"unit":"%","size":"","sizes":[]},"_transform_translateX_effect_tablet":{"unit":"%","size":"","sizes":[]},"_transform_translateX_effect_mobile_extra":{"unit":"%","size":"","sizes":[]},"_transform_translateX_effect_mobile":{"unit":"%","size":"","sizes":[]},"_transform_translateY_effect_laptop":{"unit":"%","size":"","sizes":[]},"_transform_translateY_effect_tablet_extra":{"unit":"%","size":"","sizes":[]},"_transform_translateY_effect_tablet":{"unit":"%","size":"","sizes":[]},"_transform_translateY_effect_mobile_extra":{"unit":"%","size":"","sizes":[]},"_transform_translateY_effect_mobile":{"unit":"%","size":"","sizes":[]}}'
                  }
                  data-widget_type={"rs-button.default"}
                >
                  {" "}
                  <a
                    className="rs-button style-default icon-anim-rotate-90 text-anim-flip-top"
                    href="#"
                  >
                    {" "}
                    <span className="button-icon">
                      {" "}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                        <path d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z" />
                        <path d="M10.5 13.5C10.5 14.3284 9.82843 15 9 15C8.17157 15 7.5 14.3284 7.5 13.5C7.5 12.6716 8.17157 12 9 12C9.82843 12 10.5 12.6716 10.5 13.5Z" />
                        <path d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z" />
                        <path d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z" />
                        <path d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 8.17157 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z" />
                      </svg>{" "}
                    </span>{" "}
                    <span className="button-text" data-text={"Discover Our Campus"}>
                      Discover Our Campus{" "}
                    </span>{" "}
                  </a>
                </div> */}
              </div>
            </div>{" "}
          </main>{" "}
          {/* ==============================================================================
              SITE FOOTER  (external component)
              ============================================================================== */}
          <KkcpFooter />{" "}
        </div>{" "}
      </div>{" "}
      {/* ==============================================================================
          PAGE CHROME - scroll-to-top button, a flatpickr calendar portal, the Slider
          Revolution font-test probe and an empty icon-symbol <svg>. All inert leftovers
          from the source page; none of it is part of the page content.
          ============================================================================== */}
      <div
        id="rs-scroll-to-top"
        className="rs-page-scroll-progress"
        data-max={"113.1"}
        data-unit={"px"}
        data-reverse={"true"}
        style={{ "--rs-page-scroll-progress": "113.1px", display: "none" }}
      >
        {" "}
        <svg className="arrowup" viewBox="0 0 24 24" width="18" height="18">
          {" "}
          <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z" />{" "}
        </svg>{" "}
        <svg className="scrollprogress" width="40" height="40">
          {" "}
          <circle
            className="progress-circle"
            cx="20"
            cy="20"
            r="18"
            strokeWidth="2"
            fill="none"
            strokeDasharray="113.1"
            strokeDashoffset="113.1"
          />{" "}
        </svg>{" "}
      </div>{" "}
      <span id="elementor-device-mode" className="elementor-screen-only"></span>
      <div className="flatpickr-calendar animate" tabIndex="-1">
        <div className="flatpickr-months">
          <span className="flatpickr-prev-month">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 17 17"
            >
              <g></g>
              <path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z" />
            </svg>
          </span>
          <div className="flatpickr-month">
            <div className="flatpickr-current-month">
              <select
                className="flatpickr-monthDropdown-months"
                aria-label={"Month"}
                tabIndex="-1"
              >
                <option
                  className="flatpickr-monthDropdown-month"
                  value="0"
                  tabIndex="-1"
                >
                  January
                </option>
                <option
                  className="flatpickr-monthDropdown-month"
                  value="1"
                  tabIndex="-1"
                >
                  February
                </option>
                <option
                  className="flatpickr-monthDropdown-month"
                  value="2"
                  tabIndex="-1"
                >
                  March
                </option>
                <option
                  className="flatpickr-monthDropdown-month"
                  value="3"
                  tabIndex="-1"
                >
                  April
                </option>
                <option
                  className="flatpickr-monthDropdown-month"
                  value="4"
                  tabIndex="-1"
                >
                  May
                </option>
                <option
                  className="flatpickr-monthDropdown-month"
                  value="5"
                  tabIndex="-1"
                >
                  June
                </option>
                <option
                  className="flatpickr-monthDropdown-month"
                  value="6"
                  tabIndex="-1"
                >
                  July
                </option>
                <option
                  className="flatpickr-monthDropdown-month"
                  value="7"
                  tabIndex="-1"
                >
                  August
                </option>
                <option
                  className="flatpickr-monthDropdown-month"
                  value="8"
                  tabIndex="-1"
                >
                  September
                </option>
                <option
                  className="flatpickr-monthDropdown-month"
                  value="9"
                  tabIndex="-1"
                >
                  October
                </option>
                <option
                  className="flatpickr-monthDropdown-month"
                  value="10"
                  tabIndex="-1"
                >
                  November
                </option>
                <option
                  className="flatpickr-monthDropdown-month"
                  value="11"
                  tabIndex="-1"
                >
                  December
                </option>
              </select>
              <div className="numInputWrapper">
                <input
                  className="numInput cur-year"
                  type="number"
                  tabIndex="-1"
                  aria-label={"Year"}
                />
                <span className="arrowUp"></span>
                <span className="arrowDown"></span>
              </div>
            </div>
          </div>
          <span className="flatpickr-next-month">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 17 17"
            >
              <g></g>
              <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z" />
            </svg>
          </span>
        </div>
        <div className="flatpickr-innerContainer">
          <div className="flatpickr-rContainer">
            <div className="flatpickr-weekdays">
              <div className="flatpickr-weekdaycontainer">
                {" "}
                <span className="flatpickr-weekday">Sun</span>
                <span className="flatpickr-weekday">Mon</span>
                <span className="flatpickr-weekday">Tue</span>
                <span className="flatpickr-weekday">Wed</span>
                <span className="flatpickr-weekday">Thu</span>
                <span className="flatpickr-weekday">Fri</span>
                <span className="flatpickr-weekday">Sat</span>{" "}
              </div>
            </div>
            <div className="flatpickr-days" tabIndex="-1">
              <div className="dayContainer">
                <span
                  className="flatpickr-day prevMonthDay"
                  aria-label={"April 26, 2026"}
                  tabIndex="-1"
                >
                  26
                </span>
                <span
                  className="flatpickr-day prevMonthDay"
                  aria-label={"April 27, 2026"}
                  tabIndex="-1"
                >
                  27
                </span>
                <span
                  className="flatpickr-day prevMonthDay"
                  aria-label={"April 28, 2026"}
                  tabIndex="-1"
                >
                  28
                </span>
                <span
                  className="flatpickr-day prevMonthDay"
                  aria-label={"April 29, 2026"}
                  tabIndex="-1"
                >
                  29
                </span>
                <span
                  className="flatpickr-day prevMonthDay"
                  aria-label={"April 30, 2026"}
                  tabIndex="-1"
                >
                  30
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 1, 2026"}
                  tabIndex="-1"
                >
                  1
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 2, 2026"}
                  tabIndex="-1"
                >
                  2
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 3, 2026"}
                  tabIndex="-1"
                >
                  3
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 4, 2026"}
                  tabIndex="-1"
                >
                  4
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 5, 2026"}
                  tabIndex="-1"
                >
                  5
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 6, 2026"}
                  tabIndex="-1"
                >
                  6
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 7, 2026"}
                  tabIndex="-1"
                >
                  7
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 8, 2026"}
                  tabIndex="-1"
                >
                  8
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 9, 2026"}
                  tabIndex="-1"
                >
                  9
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 10, 2026"}
                  tabIndex="-1"
                >
                  10
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 11, 2026"}
                  tabIndex="-1"
                >
                  11
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 12, 2026"}
                  tabIndex="-1"
                >
                  12
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 13, 2026"}
                  tabIndex="-1"
                >
                  13
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 14, 2026"}
                  tabIndex="-1"
                >
                  14
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 15, 2026"}
                  tabIndex="-1"
                >
                  15
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 16, 2026"}
                  tabIndex="-1"
                >
                  16
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 17, 2026"}
                  tabIndex="-1"
                >
                  17
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 18, 2026"}
                  tabIndex="-1"
                >
                  18
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 19, 2026"}
                  tabIndex="-1"
                >
                  19
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 20, 2026"}
                  tabIndex="-1"
                >
                  20
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 21, 2026"}
                  tabIndex="-1"
                >
                  21
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 22, 2026"}
                  tabIndex="-1"
                >
                  22
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 23, 2026"}
                  tabIndex="-1"
                >
                  23
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 24, 2026"}
                  tabIndex="-1"
                >
                  24
                </span>
                <span
                  className="flatpickr-day today"
                  aria-label={"May 25, 2026"}
                  aria-current={"date"}
                  tabIndex="-1"
                >
                  25
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 26, 2026"}
                  tabIndex="-1"
                >
                  26
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 27, 2026"}
                  tabIndex="-1"
                >
                  27
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 28, 2026"}
                  tabIndex="-1"
                >
                  28
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 29, 2026"}
                  tabIndex="-1"
                >
                  29
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 30, 2026"}
                  tabIndex="-1"
                >
                  30
                </span>
                <span
                  className="flatpickr-day"
                  aria-label={"May 31, 2026"}
                  tabIndex="-1"
                >
                  31
                </span>
                <span
                  className="flatpickr-day nextMonthDay"
                  aria-label={"June 1, 2026"}
                  tabIndex="-1"
                >
                  1
                </span>
                <span
                  className="flatpickr-day nextMonthDay"
                  aria-label={"June 2, 2026"}
                  tabIndex="-1"
                >
                  2
                </span>
                <span
                  className="flatpickr-day nextMonthDay"
                  aria-label={"June 3, 2026"}
                  tabIndex="-1"
                >
                  3
                </span>
                <span
                  className="flatpickr-day nextMonthDay"
                  aria-label={"June 4, 2026"}
                  tabIndex="-1"
                >
                  4
                </span>
                <span
                  className="flatpickr-day nextMonthDay"
                  aria-label={"June 5, 2026"}
                  tabIndex="-1"
                >
                  5
                </span>
                <span
                  className="flatpickr-day nextMonthDay"
                  aria-label={"June 6, 2026"}
                  tabIndex="-1"
                >
                  6
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <sr7-fonttest-wrap aria-hidden={"true"}>
        <span style={{ fontFamily: "Bitter, sans-serif", fontWeight: "600" }}>
          BESbswy
        </span>
        <span style={{ fontFamily: "Roboto, sans-serif", fontWeight: "400" }}>
          BESbswy
        </span>
        <i
          className="fa-power-off"
          style={{ fontFamily: "FontAwesome, sans-serif", fontWeight: "400" }}
        ></i>
      </sr7-fonttest-wrap>
      <svg
        style={{ display: "none" }}
        className="e-font-icon-svg-symbols"
      ></svg>
    </div>
  );
}
