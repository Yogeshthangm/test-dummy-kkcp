// @ts-nocheck
import { KkcpHeader } from "@/components/KkcpHeader";
import { KkcpFooter } from "@/components/KkcpFooter";
import RevealActivator from "@/components/RevealActivator";
/* eslint-disable */

// Latest News and Events — featured lead story + magazine grid, with scroll-reveal motion.
//
// IMAGERY — read before adding any photo here:
// The MD references media/image1-8.jpg, but the Word export shipped without its media folder, so
// the real event photographs DO NOT EXIST anywhere in this repo. Every item below is about a real,
// named person at a real, dated event. Dropping an unrelated campus or stock photo into a story's
// image slot would read to a visitor as documentation OF THAT EVENT — i.e. it would fabricate a
// record about a named individual. We do not do that.
//
// What we DO show, per the user's decision:
//   • a genuine PORTRAIT of the person a story is about, captioned with their name and role
//     (alt text says "Portrait of …"), so it identifies WHO the story concerns and never poses as
//     event photography. Sourced from the client's own faculty photos (see lib/faculty.ts).
//   • an openly GRAPHIC plate (brand gradient + the item's own number) where we have no portrait —
//     items 5 and 6 concern students and a ceremony, and we hold no honest image for either.
// When the client supplies media/image1-8.jpg, drop each into `photo` on the item below; the card
// already has the slot and will prefer it over the portrait/plate.
//
// COPY (ICPR): all copy is VERBATIM user-provided text — only pandoc transport was decoded
// (emphasis *...*, \" -> ", \' -> ’, -- -> –). Titles appear only on the two items whose MD row
// actually carries a title line; nothing was invented to fill the other four. "no" is the MD
// table's own NO column value. Portrait names/roles are chrome drawn from the client's own
// faculty data, not from the news copy.

const TOP_TITLE = `LATEST NEWS AND EVENTS`;

// Portraits of the people the stories are about. NOT event photography.
const MEENA = {
  name: `Dr. A. Meena`,
  role: `Principal`,
  src: `/kkcp/web/home/7-kkcp-faculty-1-dr-a-meena-principal-prof-dept-of-pharmaceutical-chemistry.jpg`,
};
const SHANTHY = {
  name: `Dr. A. Shanthy`,
  role: `Dean of Academics`,
  src: `/kkcp/web/home/7-kkcp-faculty-2-dr-a-shanthy-dean-of-academics.jpg`,
};
const VEDHAPAL = {
  name: `Dr. S. Vedhapal Jeyamani`,
  role: `Professor, Dept. of Pharmacy Practice`,
  src: `/kkcp/web/home/7-kkcp-faculty-dr-s-vedhapal-jayamani-prof-dept-of-pharmacy-practice.jpg`,
};

const NEWS = [
  {
    no: `1`,
    portrait: MEENA,
    paras: [
      `We are delighted to share that Prof. Dr. A. Meena, Principal, was honored with the opportunity to chair Scientific Session II at the 4th APTI–TN National Conference. The conference, themed "Empowering Future Pharmacists through Research, Innovation, and Entrepreneurship," brought together academicians, researchers, and Pharmacy Professionals from across the state to discuss emerging trends and advancements in Pharmaceutical sciences.`,
      `The event was jointly organized by the Association of Pharmaceutical Teachers of India (APTI), Tamil Nadu State Branch, and the Faculty of Pharmacy, Sri Ramachandra Institute of Higher Education and Research (SRIHER), Porur, Chennai, on 20 June 2026. Her role as Session Chairperson highlights her distinguished contribution to pharmacy education, research, and academic leadership, bringing pride and recognition to our institution.`,
    ],
  },
  {
    no: `2`,
    portrait: SHANTHY,
    paras: [
      `We are delighted to share that Prof. Dr. A. Shanthy, Dean of Academics served as a moderator for the debate titled "AI in Pharmacy: Opportunity or Challenge?" organized at SRIHER in celebration of International Women’s Day on 10.03.26 The session facilitated insightful discussions on the evolving role of artificial intelligence in pharmacy and its potential impact on Healthcare and Pharmaceutical Practice.`,
    ],
  },
  {
    no: `3`,
    portrait: VEDHAPAL,
    paras: [
      `The Department of Pharmacy Practice is proud to highlight that`,
      `Prof. Dr. S. Vedha Pal Jeyamani served as a resource person at a National Conference on "Emerging Perspectives in Drug-Use Reprogramming and`,
      `Unlabelled Drug Use" organized by Faculty of Pharmacy, SBMCH on 22.06.26 Through her expert presentation and academic engagement, she contributed significantly to discussions on emerging trends and innovative approaches in pharmaceutical care and drug utilization practices.`,
    ],
  },
  {
    no: `4`,
    title: `Anti-Drug Awareness Session at Central Polytechnic College, Tharamani`,
    portrait: VEDHAPAL,
    paras: [
      `The Department of Pharmacy Practice is proud to share that`,
      `Prof. Dr. Vedha Pal was invited as the Chief Guest and Resource Speaker for an Anti-Drug Awareness and Prevention Program organized by the National Service Scheme (NSS) and Youth Red Cross (YRC) units of Central Polytechnic College (CPT), Tharamani.`,
      `The awareness program was conducted for NSS and YRC student volunteers with the objective of educating young minds about the harmful effects of substance abuse, strategies for drug prevention, and the importance of leading a healthy, drug-free lifestyle. Through an engaging and informative session, Prof. Dr. Vedha Pal highlighted the role of youth in promoting awareness and creating a healthier, drug-free society.`,
      `The event was held at 10:00 AM in the Drawing Hall, Central Polytechnic College Campus on 11/06/26, and witnessed enthusiastic participation from student volunteers, making the program both impactful and inspiring.`,
    ],
  },
  {
    no: `5`,
    paras: [
      `We are proud to announce that Ms. Keerthana, Pharm.D (IV Year), secured First`,
      `Prize, Tharini, Pharm.D( IV Year ) second prize and Sayeed,B.Pharm(8.Sem) has secured third prize in the Poster Presentation Competition at the 4th APTI–TN National Conference.`,
      `The conference, themed "Empowering Future Pharmacists through Research, Innovation, and Entrepreneurship," served as a prestigious platform for academicians, researchers, and pharmacy professionals to exchange knowledge and discuss the latest developments in pharmaceutical sciences. The event was jointly organized by the Association of Pharmaceutical Teachers of India (APTI) and the Sri Ramachandra Institute of Higher Education and Research (SRIHER), Porur, Chennai, and was held on 20 June 2026. This achievement reflects the student’s dedication to academic excellence and the institution’s commitment to fostering research and innovation in pharmacy education.`,
    ],
  },
  {
    no: `6`,
    title: `Convocation Ceremony 2026`,
    paras: [
      `K.K. College of Pharmacy proudly conducted its Convocation Ceremony on 10 April 2026 at Kalaivanar Arangam, Chennai. The event marked a memorable occasion as graduates were honored for their academic accomplishments in a grand and dignified ceremony.`,
      `A total of 284 students, comprising Undergraduate, Postgraduate, and Doctor of Pharmacy graduates, were awarded their degrees. The ceremony was graced by the presence of Chairman Prof. K. R. Arumugam, and the degrees were formally conferred by Dr. Kalaiselvan, Secretary of the Indian Pharmaceutical Commission (IPC) and Dr. S Sivaranjini, Director, Dr.Kamakshi Memorial Hospital, Pallikaranai. The event celebrated the dedication, perseverance, and success of the graduating class as they embarked on the next phase of their professional journey.`,
    ],
  },
];

/** The story's visual: a real event photo if we ever get one, else a captioned portrait of the
 *  person it concerns, else an openly graphic plate. Never an unrelated photo posing as the event. */
function Visual({ item }) {
  if (item.photo) {
    return (
      <figure className="kkcp-portrait nw-visual">
        <img src={item.photo} alt="" loading="lazy" decoding="async" />
      </figure>
    );
  }
  if (item.portrait) {
    const p = item.portrait;
    return (
      <figure className="kkcp-portrait nw-visual">
        <img src={p.src} alt={`Portrait of ${p.name}`} loading="lazy" decoding="async" />
        <figcaption>
          <span className="p-name">{p.name}</span>
          <span className="p-role">{p.role}</span>
        </figcaption>
      </figure>
    );
  }
  return (
    <div className="kkcp-plate nw-visual" aria-hidden="true">
      <div>
        <div className="plate-no">{item.no}</div>
        <div className="plate-rule" />
      </div>
    </div>
  );
}

function Body({ item }) {
  return (
    <>
      <div className="nw-head">
        <span className="kkcp-no">{item.no}</span>
        {item.title ? <h2 className="nw-title">{item.title}</h2> : null}
      </div>
      <div className="nw-desc">
        {item.paras.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </>
  );
}

export function KkcpTree() {
  const [lead, ...rest] = NEWS;

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
                  <div className="rstb-breadcrumb"><span property="itemListElement"><a property="item" title="Go to KKCP." href="/" className="home"><span property="name">Home</span></a><meta property="position" content="1" /></span><span className="item-separator"><svg className="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg></span><span property="itemListElement"><span property="name" className="post post-page current-item">{TOP_TITLE}</span><meta property="url" content="/news/" /><meta property="position" content="2" /></span></div>
                </div>
                <div className="elementor-element elementor-element-3cae832 elementor-widget elementor-widget-rstb-page-title" data-id={"3cae832"} data-element_type={"widget"} data-widget_type={"rstb-page-title.default"}><h1 className="rstb-page-title">{TOP_TITLE}</h1></div>
                <div className="elementor-element elementor-element-4626c23 elementor-widget elementor-widget-rs-divider" data-id={"4626c23"} data-element_type={"widget"} data-widget_type={"rs-divider.default"}><div className="rs-divider dot-enable"><span> </span></div></div>
                <div className="elementor-element elementor-element-d0b1073 elementor-absolute gsap-move-yes down-90 start-10 elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-rs-image" data-id={"d0b1073"} data-element_type={"widget"} data-settings={"{\"_position\":\"absolute\"}"} data-widget_type={"rs-image.default"} style={{transform: "translate(0px, 0px)"}}><div className="rs-image"><img decoding="async" className="rs-multi-image  reverse- blend_unset" src="/all-programs/assets/0046__bnr-arrow-1-1.webp" alt="bnr-arrow-1-1" /></div></div>
              </div>
            </div>

            {/* Lead story */}
            <section className="kkcp-section nw-lead-section">
              <span className="kkcp-watermark nw-wm" aria-hidden="true">01</span>
              <div className="kkcp-shell">
                <article className="nw-lead kkcp-reveal" data-reveal="up">
                  <div className="nw-lead-media kkcp-reveal" data-reveal="left" style={{ "--d": "90ms" }}>
                    <Visual item={lead} />
                  </div>
                  <div className="nw-lead-body kkcp-reveal" data-reveal="right" style={{ "--d": "170ms" }}>
                    <Body item={lead} />
                  </div>
                </article>
              </div>
            </section>

            {/* The rest — magazine grid */}
            <section className="kkcp-section on-cream nw-grid-section">
              <div className="kkcp-shell">
                <div className="nw-grid">
                  {rest.map((item, i) => (
                    <article
                      className="kkcp-card nw-card kkcp-reveal"
                      data-reveal="up"
                      style={{ "--d": `${(i % 2) * 90 + 40}ms` }}
                      id={`news-${item.no}`}
                      key={item.no}
                    >
                      <Visual item={item} />
                      <div className="nw-card-body">
                        <Body item={item} />
                      </div>
                    </article>
                  ))}
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

            /* ---------- shared typography ---------- */
            .kkcp-enh .nw-head { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 14px; }
            .kkcp-enh .nw-title {
              font-family: "Bitter", Georgia, serif;
              font-weight: 600; color: var(--kk-heading);
              font-size: 21px; line-height: 1.35; margin: 0;
            }
            .kkcp-enh .nw-desc p {
              font-family: "Roboto", Arial, sans-serif;
              color: var(--kk-text); font-size: 15px; line-height: 1.85;
              margin: 0 0 12px; text-align: justify;
            }
            .kkcp-enh .nw-desc p:last-child { margin-bottom: 0; }

            /* ---------- lead story ---------- */
            .kkcp-enh .nw-lead-section { overflow: hidden; background: #fff; padding: 82px 0 74px; }
            .kkcp-enh .nw-wm { top: 34px; left: 2%; font-size: 210px; }

            .kkcp-enh .nw-lead {
              display: grid;
              grid-template-columns: 400px 1fr;
              gap: 46px;
              align-items: start;
            }
            /* The faculty portraits are tall (aspect ~0.6–0.7). The media slot keeps a portrait
               aspect so a face is never cropped down to a band of the wall behind it. */
            .kkcp-enh .nw-lead .nw-visual { height: 520px; box-shadow: var(--kk-shadow-lg); }
            .kkcp-enh .nw-lead .nw-title { font-size: 26px; }
            .kkcp-enh .nw-lead .nw-desc p { font-size: 16px; line-height: 1.9; }
            .kkcp-enh .nw-lead .nw-desc p:first-child::first-letter {
              float: left;
              font-family: "Bitter", Georgia, serif;
              font-size: 54px; line-height: .88; font-weight: 600;
              color: var(--kk-heading);
              margin: 4px 12px 0 0;
            }

            /* ---------- grid ---------- */
            .kkcp-enh .nw-grid-section { padding: 84px 0 96px; }
            /* One wide row per story, alternating sides. A 2-up grid squeezed the copy into a
               ~320px column, which wrecked the justified text and the long title on item 4. */
            .kkcp-enh .nw-grid { display: grid; grid-template-columns: 1fr; gap: 30px; }
            /* Person-and-story card: the portrait sits in its own fixed portrait-shaped slot
               beside the copy. It deliberately does NOT stretch to the card's height — cards run
               to very different lengths, and stretching would crop a face to a sliver. */
            .kkcp-enh .nw-card {
              display: grid;
              grid-template-columns: 250px 1fr;
              gap: 38px;
              align-items: start;
              padding: 30px 34px;
              background: #fff;
              border-radius: 16px;
              box-shadow: var(--kk-shadow);
              border: 1px solid rgba(3,78,162,.07);
              transition: transform .45s var(--kk-ease), box-shadow .45s var(--kk-ease);
            }
            .kkcp-enh .nw-card:hover {
              transform: translateY(-7px);
              box-shadow: var(--kk-shadow-lg);
            }
            .kkcp-enh .nw-card .nw-visual { width: 250px; height: 330px; }
            .kkcp-enh .nw-card-body { min-width: 0; }

            /* alternate the portrait side for rhythm down the list */
            .kkcp-enh .nw-card:nth-child(even) { grid-template-columns: 1fr 250px; }
            .kkcp-enh .nw-card:nth-child(even) .nw-visual { grid-column: 2; grid-row: 1; }
            .kkcp-enh .nw-card:nth-child(even) .nw-card-body { grid-column: 1; grid-row: 1; }

            /* the graphic plate only needs to fill its slot */
            .kkcp-enh .nw-visual.kkcp-plate { text-align: center; }

            /* ---------- responsive ---------- */
            @media (max-width: 1024px) {
              .kkcp-enh .nw-lead { grid-template-columns: 300px 1fr; gap: 32px; }
              .kkcp-enh .nw-lead .nw-visual { height: 390px; }
              .kkcp-enh .nw-card,
              .kkcp-enh .nw-card:nth-child(even) { grid-template-columns: 210px 1fr; gap: 26px; padding: 24px; }
              .kkcp-enh .nw-card:nth-child(even) .nw-visual { grid-column: 1; }
              .kkcp-enh .nw-card:nth-child(even) .nw-card-body { grid-column: 2; }
              .kkcp-enh .nw-card .nw-visual { width: 210px; height: 280px; }
              .kkcp-enh .nw-wm { font-size: 150px; }
            }
            @media (max-width: 767px) {
              .kkcp-enh .nw-lead-section { padding: 54px 0 48px; }
              .kkcp-enh .nw-grid-section { padding: 54px 0 64px; }
              .kkcp-enh .nw-lead { grid-template-columns: 1fr; gap: 22px; }
              .kkcp-enh .nw-lead .nw-visual { width: 240px; height: 320px; }
              .kkcp-enh .nw-lead .nw-title { font-size: 21px; }
              .kkcp-enh .nw-lead .nw-desc p { font-size: 15px; text-align: left; }
              .kkcp-enh .nw-lead .nw-desc p:first-child::first-letter { font-size: 44px; }
              /* stack: portrait above the copy rather than a squeezed side column */
              .kkcp-enh .nw-card,
              .kkcp-enh .nw-card:nth-child(even) { grid-template-columns: 1fr; gap: 18px; padding: 20px; }
              .kkcp-enh .nw-card:nth-child(even) .nw-visual { grid-column: 1; grid-row: 1; }
              .kkcp-enh .nw-card:nth-child(even) .nw-card-body { grid-column: 1; grid-row: 2; }
              .kkcp-enh .nw-card .nw-visual { width: 210px; height: 270px; }
              .kkcp-enh .nw-desc p { text-align: left; }
              .kkcp-enh .nw-wm { display: none; }
            }
          `}</style>
        </main>
        <KkcpFooter />
      </div>
    </div>
  );
}
