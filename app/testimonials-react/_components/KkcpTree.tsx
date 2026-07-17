// @ts-nocheck
import { KkcpHeader } from "@/components/KkcpHeader";
import { KkcpFooter } from "@/components/KkcpFooter";
import RevealActivator from "@/components/RevealActivator";
import { TestimonialSlider, type Testimonial } from "./TestimonialSlider";
/* eslint-disable */

// Testimonials — alumni voices, presented as a carousel over an ambient campus backdrop.
//
// IMAGERY: we hold NO photographs of these three alumni. They are real, named people, so a stock
// headshot standing in for them would put a stranger's face on a real person. Per the user's
// decision we use monogram avatars (their own initials) and invent no faces. The campus photo
// behind the slider is decorative only — heavily overlaid, uncaptioned, and makes no claim about
// any individual or event.
//
// COPY (ICPR): every string below is VERBATIM from "14. Testimonials.md", carried across from the
// previously-verified tree (only pandoc transport was ever decoded). The three testimonials
// attribute themselves in three DIFFERENT shapes and we preserve each shape rather than
// normalising them: #1 labelled pairs, #2 a trailing signature line, #3 plain lines. Nothing is
// reworded, trimmed, or added. The only new strings on this page are UI chrome (button labels,
// monogram initials). Presentation note: the attribution block is rendered below the quote on all
// three cards; #1 carries it above the quote in the source. The prose order is untouched.

const PAGE_TITLE = `Testimonials`;

const TESTIMONIALS: Testimonial[] = [
  {
    who: `S.Ramasamy`,
    monogram: `SR`,
    paras: [
      `Being a part of the first batch (1993–1997) of KK College of Pharmacy is one of the greatest privileges of my life. The college not only shaped my career but also instilled in me the values, confidence, and lifelong friendships that I cherish even today.`,
      `As a Managing Director for a pharmaceutical company . I remain deeply grateful to my alma mater for being the foundation of my journey and success. My heartfelt wishes to the institution for many more years of excellence and service.`,
    ],
    meta: {
      kind: "pairs",
      rows: [
        { label: `Name :-`, values: [`S.Ramasamy`] },
        { label: `Designation :-`, values: [`Managing director`] },
        { label: `Organisation :-`, values: [`Mint pharmaceuticals pvt ltd`, `Chennai 600092`] },
        { label: `Year of study in KKCP :-`, values: [`1993-97`] },
      ],
    },
  },
  {
    who: `Dr. G. Mani Vendhra`,
    monogram: `GM`,
    paras: [
      `My journey at K.K. College of Pharmacy was one of the most transformative phases of my life. The college provided me with not only academic excellence but also the confidence to grow as a healthcare professional. The faculty constantly encouraged us to question, learn, and apply our knowledge in real-world situations.`,
      `The values of discipline, compassion, and continuous learning that I developed during my time here continue to guide me in my career. I am grateful to K.K. College of Pharmacy for preparing me to face professional challenges with confidence and integrity. It is an honour to be a part of this esteemed institution’s alumni family.`,
    ],
    meta: {
      kind: "signature",
      text: `- Dr. G. Mani Vendhra, HOD and Assistant Manager of Clinical Pharmacy, Dr.Rela Medical Centre, Chrompet- Alumnus. K.K. College of Pharmacy.`,
    },
  },
  {
    who: `Mohammed Zulkarnane A`,
    monogram: `MZ`,
    paras: [
      `When I think back to my time at K.K. College of Pharmacy, I don’t just remember the classes or studies, I remember how much I grew. The college gives you a real sense of purpose from day one. What really stands out to me is how everyone motivates you. The professors don’t just take classes, they challenge you to think critically, push your own boundaries, and aim a lot higher than you thought you could.`,
      `That kind of environment builds real confidence and professional ambition, giving you the grit which you need to handle the pharmaceutical world after graduation. I left K.K. College not just with a degree, but with the mindset of a leader. I'm incredibly proud to be an alumnus of an institution that genuinely inspires its students to find and achieve their absolute best.`,
    ],
    meta: {
      kind: "lines",
      rows: [
        `Name: Mohammed Zulkarnane A`,
        `Designation: Associate II, Conformance Manager.`,
        `Company: Pfizer - India`,
      ],
    },
  },
];

export function KkcpTree() {
  return (
    <div className="wp-singular page-template-default page page-id-7888 wp-theme-KKCP gsap-enable elementor-default elementor-template-full-width elementor-kit-14 elementor-page elementor-page-7888 e--ua-blink e--ua-mac e--ua-webkit kkcp-enh" data-elementor-device-mode={"desktop"}>
      <div id="kkcp-page" className="kkcp-page-wrapper">
        <KkcpHeader />
        <main id="kkcp-content" className="kkcp-content-wrapper">
          <div data-elementor-type={"wp-page"} data-elementor-id={"7888"} className="elementor elementor-7888">

            {/* Hero banner — unchanged theme anatomy */}
            <div className="elementor-element elementor-element-146c4d0 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id={"146c4d0"} data-element_type={"container"} data-settings={"{\"background_background\":\"classic\"}"}>
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-da6b75b elementor-widget elementor-widget-rstb-breadcrumb" data-id={"da6b75b"} data-element_type={"widget"} data-widget_type={"rstb-breadcrumb.default"}>
                  <div className="rstb-breadcrumb"><span property="itemListElement"><a property="item" title="Go to KKCP." href="/" className="home"><span property="name">Home</span></a><meta property="position" content="1" /></span><span className="item-separator"><svg className="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg></span><span property="itemListElement"><span property="name" className="post post-page current-item">{PAGE_TITLE}</span><meta property="url" content="/testimonials/" /><meta property="position" content="2" /></span></div>
                </div>
                <div className="elementor-element elementor-element-3cae832 elementor-widget elementor-widget-rstb-page-title" data-id={"3cae832"} data-element_type={"widget"} data-widget_type={"rstb-page-title.default"}><h1 className="rstb-page-title">{PAGE_TITLE}</h1></div>
                <div className="elementor-element elementor-element-4626c23 elementor-widget elementor-widget-rs-divider" data-id={"4626c23"} data-element_type={"widget"} data-widget_type={"rs-divider.default"}><div className="rs-divider dot-enable"><span> </span></div></div>
                <div className="elementor-element elementor-element-d0b1073 elementor-absolute gsap-move-yes down-90 start-10 elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-rs-image" data-id={"d0b1073"} data-element_type={"widget"} data-settings={"{\"_position\":\"absolute\"}"} data-widget_type={"rs-image.default"} style={{transform: "translate(0px, 0px)"}}><div className="rs-image"><img decoding="async" className="rs-multi-image  reverse- blend_unset" src="/all-programs/assets/0046__bnr-arrow-1-1.png" alt="bnr-arrow-1-1" /></div></div>
              </div>
            </div>

            {/* Alumni voices — carousel over a decorative campus backdrop */}
            <section className="kkcp-section ts-section">
              <div className="ts-bg" aria-hidden="true" />
              <span className="kkcp-watermark ts-wm" aria-hidden="true">&rdquo;</span>

              <div className="kkcp-shell">
                <div className="ts-stage kkcp-reveal" data-reveal="up">
                  <TestimonialSlider items={TESTIMONIALS} />
                </div>
              </div>
            </section>

          </div>

          <RevealActivator />

          <style>{`
            .kkcp-root { overflow-x: clip !important; }

            /* Hero: full dark overlay (the source gradient only darkened the bottom) */
            .elementor-7888 .elementor-element-146c4d0::before {
              background-image: linear-gradient(180deg, rgba(0,25,44,0.55) 0%, rgba(0,25,44,0.82) 100%) !important;
            }

            /* ---- section shell ---- */
            .kkcp-enh .ts-section { overflow: hidden; background: #fff; padding: 96px 0 104px; }
            .kkcp-enh .ts-bg {
              position: absolute; inset: 0;
              background-image:
                linear-gradient(180deg, rgba(246,244,238,0.90) 0%, rgba(246,244,238,0.82) 45%, rgba(246,244,238,0.95) 100%),
                url("/kkcp/web/home/6-campus-life-home-page-0c7a8408.jpg");
              background-size: cover;
              background-position: center 30%;
            }
            .kkcp-enh .ts-wm {
              top: 26px; right: 4%;
              font-size: 300px;
              color: rgba(3,78,162,0.06);
            }

            /* ---- slider ---- */
            .kkcp-enh .kkcp-tslider { position: relative; }
            .kkcp-enh .ts-viewport {
              overflow: hidden;
              border-radius: 18px;
              background: #fff;
              box-shadow: var(--kk-shadow-lg);
              outline: none;
              touch-action: pan-y;
            }
            .kkcp-enh .ts-viewport:focus-visible { outline: 3px solid var(--kk-gold); outline-offset: 4px; }
            .kkcp-enh .ts-track {
              display: flex;
              align-items: stretch;
              transition: transform .72s var(--kk-ease);
              will-change: transform;
            }
            .kkcp-enh .ts-slide {
              flex: 0 0 100%;
              min-width: 0;
              display: grid;
              grid-template-columns: 150px 1fr;
              gap: 18px;
              padding: 56px 60px 50px;
              box-sizing: border-box;
              opacity: .25;
              transition: opacity .6s var(--kk-ease);
            }
            .kkcp-enh .ts-slide.is-active { opacity: 1; }

            .kkcp-enh .ts-rail { display: flex; flex-direction: column; align-items: center; gap: 6px; }
            .kkcp-enh .ts-glyph {
              font-family: "Bitter", Georgia, serif;
              font-size: 92px; line-height: .8;
              color: rgba(3,78,162,0.16);
            }

            .kkcp-enh .ts-body { min-width: 0; }
            .kkcp-enh .ts-body blockquote { margin: 0; padding: 0; border: 0; }
            /* The clone theme decorates every blockquote with a ::before mask pointing at
               /all-programs/img/quote.svg — an asset the cloner never shipped, so it 404s and
               paints a stray solid box. We render our own quote glyph in .ts-glyph; kill theirs. */
            .kkcp-enh .ts-body blockquote::before {
              content: none !important;
              -webkit-mask-image: none !important;
              mask-image: none !important;
            }
            .kkcp-enh .ts-body blockquote p {
              font-family: "Roboto", Arial, sans-serif;
              font-size: 16.5px; line-height: 1.95; color: var(--kk-text);
              margin: 0 0 18px; text-align: justify;
            }
            .kkcp-enh .ts-body blockquote p:last-child { margin-bottom: 0; }
            .kkcp-enh .ts-body blockquote p:first-child::first-letter {
              float: left;
              font-family: "Bitter", Georgia, serif;
              font-size: 58px; line-height: .86; font-weight: 600;
              color: var(--kk-heading);
              margin: 4px 12px 0 0;
            }

            /* attribution */
            .kkcp-enh .ts-meta {
              list-style: none; margin: 26px 0 0; padding: 20px 0 0;
              border-top: 1px dashed var(--kk-line);
              display: flex; flex-wrap: wrap; gap: 10px 34px;
            }
            .kkcp-enh .ts-meta li {
              font-family: "Roboto", Arial, sans-serif;
              font-size: 14px; line-height: 1.6; color: var(--kk-text);
              display: flex; flex-direction: column;
            }
            .kkcp-enh .ts-meta li strong {
              font-size: 11px; letter-spacing: .12em; text-transform: uppercase;
              color: var(--kk-heading); font-weight: 700; margin-bottom: 3px;
            }
            .kkcp-enh .ts-meta-val { color: #1f2937; font-weight: 500; }
            .kkcp-enh .ts-signature {
              margin: 26px 0 0; padding: 20px 0 0;
              border-top: 1px dashed var(--kk-line);
              font-family: "Bitter", Georgia, serif;
              font-size: 14.5px; line-height: 1.7; font-weight: 600;
              color: var(--kk-primary);
            }

            /* ---- controls ---- */
            .kkcp-enh .ts-controls {
              display: flex; align-items: center; justify-content: center;
              gap: 14px; margin-top: 30px;
            }
            /* flex:0 0 auto + padding:0 are load-bearing: the clone theme puts padding on every
               <button>, and a flex child would stretch — either one turns these circles into ovals. */
            .kkcp-enh .ts-arrow, .kkcp-enh .ts-play, .kkcp-enh .ts-dot {
              flex: 0 0 auto;
              padding: 0;
              box-sizing: border-box;
              -webkit-appearance: none;
              appearance: none;
            }
            .kkcp-enh .ts-arrow, .kkcp-enh .ts-play {
              display: grid; place-items: center;
              border: 0; cursor: pointer; color: #fff;
              background: var(--kk-primary);
              border-radius: 50%;
              box-shadow: 0 6px 18px rgba(5,20,53,.22);
              transition: background .25s var(--kk-ease), transform .25s var(--kk-ease), color .25s var(--kk-ease);
            }
            .kkcp-enh .ts-arrow { width: 46px; height: 46px; }
            .kkcp-enh .ts-play  { width: 34px; height: 34px; background: rgba(5,20,53,.45); }
            .kkcp-enh .ts-arrow:hover, .kkcp-enh .ts-play:hover {
              background: var(--kk-gold); color: var(--kk-primary); transform: translateY(-2px);
            }

            .kkcp-enh .ts-dots { display: flex; align-items: center; gap: 10px; }
            .kkcp-enh .ts-dot {
              position: relative;
              width: 46px; height: 46px; border-radius: 50%;
              border: 1px solid var(--kk-line);
              background: #fff; cursor: pointer;
              font-family: "Bitter", Georgia, serif; font-size: 13px; font-weight: 600;
              color: #9aa3b2;
              transition: color .25s var(--kk-ease), border-color .25s var(--kk-ease), background .25s var(--kk-ease);
            }
            .kkcp-enh .ts-dot:hover { color: var(--kk-heading); border-color: var(--kk-heading); }
            .kkcp-enh .ts-dot.is-on {
              color: #fff;
              background: linear-gradient(135deg, var(--kk-heading), var(--kk-primary));
              border-color: transparent;
            }
            .kkcp-enh .ts-dot-ink { position: relative; z-index: 1; }

            /* autoplay progress bar — makes the rotation legible as "this is advancing itself" */
            .kkcp-enh .ts-progress {
              width: 100%; max-width: 300px;
              height: 3px; margin: 22px auto 0;
              background: rgba(3,78,162,.14);
              border-radius: 999px;
              overflow: hidden;
            }
            .kkcp-enh .ts-progress-fill {
              display: block; height: 100%; width: 100%;
              transform-origin: left center;
              border-radius: 999px;
              background: linear-gradient(90deg, var(--kk-heading), var(--kk-gold));
              animation-name: ts-fill;
              animation-timing-function: linear;
              animation-fill-mode: forwards;
            }
            @keyframes ts-fill {
              from { transform: scaleX(0); }
              to   { transform: scaleX(1); }
            }

            /* ---- responsive ---- */
            @media (max-width: 1024px) {
              .kkcp-enh .ts-slide { padding: 44px 40px 40px; grid-template-columns: 110px 1fr; }
              .kkcp-enh .ts-wm { font-size: 220px; }
            }
            @media (max-width: 767px) {
              .kkcp-enh .ts-section { padding: 60px 0 70px; }
              .kkcp-enh .ts-slide {
                grid-template-columns: 1fr;
                gap: 20px;
                padding: 34px 22px 32px;
              }
              .kkcp-enh .ts-rail { flex-direction: row; align-items: center; justify-content: flex-start; gap: 14px; }
              .kkcp-enh .ts-glyph { font-size: 62px; }
              .kkcp-enh .ts-body blockquote p { font-size: 15px; line-height: 1.85; text-align: left; }
              .kkcp-enh .ts-body blockquote p:first-child::first-letter { font-size: 46px; }
              .kkcp-enh .ts-meta { gap: 12px 22px; }
              .kkcp-enh .ts-wm { display: none; }
              .kkcp-enh .ts-controls { gap: 9px; }
              .kkcp-enh .ts-arrow { width: 40px; height: 40px; }
              .kkcp-enh .ts-dot { width: 40px; height: 40px; font-size: 12px; }
            }

            /* Reduced motion: the slider still auto-advances (that's content, not animation), but
               it swaps instantly instead of sliding, and the progress bar stops animating. */
            @media (prefers-reduced-motion: reduce) {
              .kkcp-enh .ts-track { transition: none !important; }
              .kkcp-enh .ts-slide { transition: none !important; }
              .kkcp-enh .ts-progress-fill { animation: none !important; transform: scaleX(1); opacity: .5; }
            }
          `}</style>
        </main>
        <KkcpFooter />
      </div>
    </div>
  );
}
