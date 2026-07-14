// @ts-nocheck
import { CloneHeader } from "@/components/CloneHeader";
import { CloneFooter } from "@/components/CloneFooter";
/* eslint-disable */
// Latest News and Events — data-driven, same design as the Research page (hero banner +
// filter-card list), scoped by .elementor-7888 CSS in /all-programs/clone-theme.css.
// One card per news item from "15. Latest News & Updates.md".
//
// TEXT-ONLY cards: the MD references media/image1-8.jpg, but the Word export shipped without
// its media folder, so the images do not exist. Per user decision we render no thumbnail rather
// than substitute unrelated stock photos next to real news items. The card keeps the design's
// existing shapes; .filter-item/.item-content are flex-grow so they fill the row without one.
//
// All copy below is VERBATIM user-provided text (ICPR) — only pandoc transport was decoded
// (emphasis *...*, \" -> ", \' -> ’, -- -> –). Titles appear only on the two items whose MD
// row actually carries a title line; nothing was invented to fill the other four.
// "no" is the MD table's own NO column value.

const TOP_TITLE = `LATEST NEWS AND EVENTS`;

const NEWS = [
  {
    no: `1`,
    paras: [
      `We are delighted to share that Prof. Dr. A. Meena, Principal, was honored with the opportunity to chair Scientific Session II at the 4th APTI–TN National Conference. The conference, themed "Empowering Future Pharmacists through Research, Innovation, and Entrepreneurship," brought together academicians, researchers, and Pharmacy Professionals from across the state to discuss emerging trends and advancements in Pharmaceutical sciences.`,
      `The event was jointly organized by the Association of Pharmaceutical Teachers of India (APTI), Tamil Nadu State Branch, and the Faculty of Pharmacy, Sri Ramachandra Institute of Higher Education and Research (SRIHER), Porur, Chennai, on 20 June 2026. Her role as Session Chairperson highlights her distinguished contribution to pharmacy education, research, and academic leadership, bringing pride and recognition to our institution.`,
    ],
  },
  {
    no: `2`,
    paras: [
      `We are delighted to share that Prof. Dr. A. Shanthy, Dean of Academics served as a moderator for the debate titled "AI in Pharmacy: Opportunity or Challenge?" organized at SRIHER in celebration of International Women’s Day on 10.03.26 The session facilitated insightful discussions on the evolving role of artificial intelligence in pharmacy and its potential impact on Healthcare and Pharmaceutical Practice.`,
    ],
  },
  {
    no: `3`,
    paras: [
      `The Department of Pharmacy Practice is proud to highlight that`,
      `Prof. Dr. S. Vedha Pal Jeyamani served as a resource person at a National Conference on "Emerging Perspectives in Drug-Use Reprogramming and`,
      `Unlabelled Drug Use" organized by Faculty of Pharmacy, SBMCH on 22.06.26 Through her expert presentation and academic engagement, she contributed significantly to discussions on emerging trends and innovative approaches in pharmaceutical care and drug utilization practices.`,
    ],
  },
  {
    no: `4`,
    title: `Anti-Drug Awareness Session at Central Polytechnic College, Tharamani`,
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

export function CloneTree() {
  return (
    <div className="wp-singular page-template-default page page-id-7888 wp-theme-KKCP gsap-enable elementor-default elementor-template-full-width elementor-kit-14 elementor-page elementor-page-7888 e--ua-blink e--ua-mac e--ua-webkit" data-elementor-device-mode={"desktop"}>
      <div id="KKCP-page" className="KKCP-page-wrapper">
        <CloneHeader />
        <main id="KKCP-content" className="KKCP-content-wrapper">
          <div data-elementor-type={"wp-page"} data-elementor-id={"7888"} className="elementor elementor-7888">
            {/* Hero banner (same design as Research) */}
            <div className="elementor-element elementor-element-146c4d0 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id={"146c4d0"} data-element_type={"container"} data-settings={"{\"background_background\":\"classic\"}"}>
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-da6b75b elementor-widget elementor-widget-rstb-breadcrumb" data-id={"da6b75b"} data-element_type={"widget"} data-widget_type={"rstb-breadcrumb.default"}>
                  <div className="rstb-breadcrumb"><span property="itemListElement"><a property="item" title="Go to KKCP." href="/" className="home"><span property="name">Home</span></a><meta property="position" content="1" /></span><span className="item-separator"><svg className="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg></span><span property="itemListElement"><span property="name" className="post post-page current-item">{TOP_TITLE}</span><meta property="url" content="/news/" /><meta property="position" content="2" /></span></div>
                </div>
                <div className="elementor-element elementor-element-3cae832 elementor-widget elementor-widget-rstb-page-title" data-id={"3cae832"} data-element_type={"widget"} data-widget_type={"rstb-page-title.default"}><h1 className="rstb-page-title">{TOP_TITLE}</h1></div>
                <div className="elementor-element elementor-element-4626c23 elementor-widget elementor-widget-rs-divider" data-id={"4626c23"} data-element_type={"widget"} data-widget_type={"rs-divider.default"}><div className="rs-divider dot-enable"><span> </span></div></div>
                <div className="elementor-element elementor-element-d0b1073 elementor-absolute gsap-move-yes down-90 start-10 elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-rs-image" data-id={"d0b1073"} data-element_type={"widget"} data-settings={"{\"_position\":\"absolute\"}"} data-widget_type={"rs-image.default"} style={{transform: "translate(0px, 0px)"}}><div className="rs-image"><img decoding="async" className="rs-multi-image  reverse- blend_unset" src="/all-programs/assets/0046__bnr-arrow-1-1.png" alt="bnr-arrow-1-1" /></div></div>
              </div>
            </div>

            {/* News cards */}
            <div className="elementor-element elementor-element-f401be2 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id={"f401be2"} data-element_type={"container"} data-settings={"{\"background_background\":\"classic\"}"}>
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-57146e5 elementor-widget elementor-widget-rs-academic-filter" data-id={"57146e5"} data-element_type={"widget"} data-widget_type={"rs-academic-filter.default"}>
                  <div className="rs-academic-filter-area" data-widget-id={"57146e5"}>
                    <div className="filter-content">
                      {/* No section heading here: the MD supplies exactly ONE heading and it is
                          already rendered as the breadcrumb current-item and the page title above.
                          The Research design puts a DIFFERENT string in each slot; repeating the
                          same one would stack a duplicate subheading under the page title, and
                          inventing a second heading to fill the slot is forbidden.
                          Surplus slot -> deleted. */}
                      <div className="filter-items-wrapper">
                        {NEWS.map((n, idx) => (
                          <div className="filter-item dept-filter-item" id={`news-${n.no}`} key={idx}>
                            <div className="item-content">
                              {n.title ? <h4 className="item-title">{n.title}</h4> : null}
                              <ul className="item-meta"><li>{n.no}</li></ul>
                              <div className="item-desc dept-desc">
                                {n.paras.map((p, ii) => (
                                  <p className="dept-text" key={ii}>{p}</p>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            .clone-root { overflow-x: clip !important; }
            .elementor-7888 .rs-academic-filter-area { align-items: flex-start !important; }
            .elementor-7888 .dept-filter-item { align-items: flex-start; scroll-margin-top: 120px; }
            .elementor-7888 .item-title {
              font-family: "Bitter", serif; color: #034EA2; font-weight: 600;
              font-size: 20px; line-height: 1.4;
            }
            .elementor-7888 .dept-desc { margin-top: 15px; }
            .elementor-7888 .dept-desc .dept-text { color: #4C4C4C; font-size: 15px; line-height: 1.8; margin: 0 0 12px; text-align: justify; }
            .elementor-7888 .dept-desc .dept-text:last-child { margin-bottom: 0; }
            /* Hero: full dark overlay (the source gradient only darkened the bottom) */
            .elementor-7888 .elementor-element-146c4d0::before {
              background-image: linear-gradient(180deg, rgba(0,25,44,0.55) 0%, rgba(0,25,44,0.82) 100%) !important;
            }
          `}</style>
        </main>
        <CloneFooter />
      </div>
    </div>
  );
}
