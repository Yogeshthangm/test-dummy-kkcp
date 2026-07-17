// @ts-nocheck
import { CloneHeader } from "@/components/CloneHeader";
import { CloneFooter } from "@/components/CloneFooter";
/* eslint-disable */
// Campus page — cloned from the Departments page design (image hero + "Filter By"
// sticky sidebar + academic-filter card list with thumbnails). The department cards
// are replaced by the nine campus facility cards. All campus copy is VERBATIM as
// supplied — no rewriting, no grammar/typo fixes; ampersands and the "Campus →"
// headings (including the no-space "→Animal House Facility") kept byte-for-byte (ICPR).

// --- Sidebar data (one anchor link per facility) ---
const CAMPUS_FILTERS = [
  { id: "smart-class-rooms", label: "1 Campus → Smart-Class Rooms", href: "#smart-class-rooms" },
  { id: "laboratory", label: "2 Campus → Laboratory", href: "#laboratory" },
  { id: "animal-house-facility", label: "3 Campus →Animal House Facility", href: "#animal-house-facility" },
  { id: "library", label: "4 Campus → Library", href: "#library" },
  { id: "security", label: "5 Campus → Security", href: "#security" },
  { id: "transport", label: "6 Campus → TRANSPORT", href: "#transport" },
];

// One thumbnail per facility card, in FACILITIES order
// (source: 3. CAMPUS LIFE PHOTOS).
const THUMBS = [
  "/kkcp/web/campus/1-smart-classrooms.jpg",
  "/kkcp/web/campus/2-laboratory.jpg",
  "/kkcp/web/campus/3-animal-house-facility.jpg",
  "/kkcp/web/campus/4-library.jpg",
  "/kkcp/web/campus/5-security.jpg",
  "/kkcp/web/campus/6-transport.jpg",
];

// --- Accomplished Graduates photo row (source: 3. CAMPUS LIFE PHOTOS/ACCOMPLISHED GRADUATES) ---
const ACCOMPLISHED = [
  "/kkcp/web/campus/accomplished-graduates-img-1253.jpg",
  "/kkcp/web/campus/accomplished-graduates-img-1262.jpg",
  "/kkcp/web/campus/accomplished-graduates-img-1274.jpg",
  "/kkcp/web/campus/accomplished-graduates-img-1278.jpg",
];

// --- Campus facility content (verbatim) ---
const FACILITIES = [
  {
    no: "01",
    id: "smart-class-rooms",
    name: "1 Campus → Smart-Class Rooms",
    blocks: [
      { type: "p", text: "We provide top-notch facilities aimed at delivering the finest learning environment for our students. Our air-conditioned classrooms are equipped with modern infrastructure and advanced technology, including high-definition screens, to foster an engaging and immersive educational experience. Our committed and well-trained staff guarantee that each student receives quality education along with personalized attention." },
      { type: "p", text: "Every classroom is outfitted with modern, ergonomic furniture to promote comfort and concentration throughout the day. We encourage you to visit our campus and witness our inviting and academically stimulating environment. At our college, we genuinely prioritize our students' well-being and are dedicated to nurturing both personal development and academic success." },
    ],
  },
  {
    no: "02",
    id: "laboratory",
    name: "2 Campus → Laboratory",
    blocks: [
      { type: "p", text: "We are proud to offer our students exceptional laboratory facilities. Equipped with state-of-the-art instruments and apparatus, students can safely participate in a variety of hands-on experiments pertinent to their selected fields. Our lab equipment is consistently updated and our extensive assortment of glassware & chemicals is readily accessible for student use. Our labs in Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmacy Practice, Pharmacognosy, Pharmaceutical Analysis, Pharmaceutical Biotechnology, Human Anatomy and Physiology and Computer Science adhere to the highest safety and quality standards, guaranteeing that students enjoy valuable laboratory experiences." },
    ],
  },
  {
    no: "03",
    id: "animal-house-facility",
    name: "3 Campus →Animal House Facility",
    blocks: [
      { type: "p", text: "The Animal House at our institution is a meticulously maintained and ethically operated facility designed to facilitate pre-clinical and pharmacological research endeavors. It offers a regulated environment for the care and upkeep of laboratory animals utilized in scientific studies." },
      { type: "p", text: "Our facility adheres rigorously to the guidelines set forth by the Committee for the Purpose of Control and Supervision of Experiments on Animals (CPCSEA), Government of India (Registration No. 1395/a/10/CPCSEA), guaranteeing the utmost standards of animal welfare and ethical adherence." },
    ],
  },
  {
    no: "04",
    id: "library",
    name: "4 Campus → Library",
    blocks: [
      { type: "label", text: "Library" },
      { type: "p", text: "Our college library serves as a haven for knowledge seekers, featuring a vast array of books across numerous disciplines, such as Pharmaceutics, Pharmacy Practice, Pharmacognosy, Pharmaceutical Analysis, Pharmaceutical Chemistry, Community Pharmacy, Clinical & Pharmacology, Hospital Pharmacy, Pharmaceutical Regulatory Affairs and Computer Science." },
      { type: "p", text: "We offer a diverse selection of national and international journals, along with subscriptions to E-Journals. The library is equipped with broadband internet access and Wi-Fi, ensuring students can easily connect to resources." },
      { type: "p", text: "Our library creates a tranquil atmosphere that promotes learning and intellectual development. Our dedicated librarians and faculty members are always ready to support students with their research needs." },
      { type: "p", text: "Additionally, the library is equipped with modern facilities, including computer terminals and printers. We invite you to explore our extensive collection, enjoy the joys of reading & uncover new knowledge at our college library." },
    ],
  },
  {
    no: "05",
    id: "security",
    name: "5 Campus → Security",
    blocks: [
      { type: "p", text: "The institute has a foolproof security system in place. There is a strong emphasis on maintaining a stringent security protocol throughout the campus. The entire college grounds are monitored by CCTV cameras, and we have highly trained security personnel stationed at the college entrance." },
      { type: "p", text: "In total, there are 84 state-of-the-art Hikvision cameras that provide top-notch recording quality. These measures assist in observing student behavior and ensuring their safety and security." },
    ],
  },
  {
    no: "06",
    id: "transport",
    name: "6 Campus → TRANSPORT",
    blocks: [
      { type: "label", text: "Reliable and Safe College Transport" },
      { type: "p", text: "Our college provides convenient transportation services that link students to different areas of the city." },
      { type: "p", text: "With skilled and timely drivers, we guarantee that students arrive at their destinations safely and punctually." },
      { type: "p", text: "Our fleet of well-kept buses is outfitted with contemporary safety features, such as GPS tracking and CCTV cameras, ensuring peace of mind for both students and their parents." },
      { type: "p", text: "From morning pickups to evening drop-offs, our transportation system emphasizes comfort, safety and dependability, demonstrating our dedication to student convenience." },
    ],
  },
];

function Block({ block }) {
  if (block.type === "label") return <h5 className="dept-label">{block.text}</h5>;
  if (block.type === "bullet") return <p className="dept-text dept-bullet">{block.text}</p>;
  return <p className="dept-text">{block.text}</p>;
}

function Criteria({ title, items }) {
  return (
    <div className="filter-criteria">
      <h5 className="criteria-title">{title}</h5>
      <ul className="criteria-checkboxes">
        {items.map((it) => (
          <li className="criteria-item" key={it.id}>
            <a className="criteria-link" href={it.href}>{it.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CloneTree() {
  return (
    <div className="wp-singular page-template-default page page-id-7888 wp-theme-KKCP gsap-enable elementor-default elementor-template-full-width elementor-kit-14 elementor-page elementor-page-7888 e--ua-blink e--ua-mac e--ua-webkit" data-elementor-device-mode={"desktop"}>
      <div id="KKCP-page" className="KKCP-page-wrapper">
        <CloneHeader />
        <main id="KKCP-content" className="KKCP-content-wrapper">
          <div data-elementor-type={"wp-page"} data-elementor-id={"7888"} className="elementor elementor-7888">
            {/* Hero banner (Student Services / Departments design) */}
            <div className="elementor-element elementor-element-146c4d0 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id={"146c4d0"} data-element_type={"container"} data-settings={"{\"background_background\":\"classic\"}"}>
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-da6b75b elementor-widget elementor-widget-rstb-breadcrumb" data-id={"da6b75b"} data-element_type={"widget"} data-widget_type={"rstb-breadcrumb.default"}>
                  <div className="rstb-breadcrumb"><span property="itemListElement"><a property="item" title="Go to KKCP." href="/" className="home"><span property="name">Home</span></a><meta property="position" content="1" /></span><span className="item-separator"><svg className="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg></span><span property="itemListElement"><span property="name" className="post post-page current-item">Campus</span><meta property="url" content="/campus/" /><meta property="position" content="2" /></span></div>
                </div>
                <div className="elementor-element elementor-element-3cae832 elementor-widget elementor-widget-rstb-page-title" data-id={"3cae832"} data-element_type={"widget"} data-widget_type={"rstb-page-title.default"}><h1 className="rstb-page-title">Campus</h1></div>
                <div className="elementor-element elementor-element-4626c23 elementor-widget elementor-widget-rs-divider" data-id={"4626c23"} data-element_type={"widget"} data-widget_type={"rs-divider.default"}><div className="rs-divider dot-enable"><span> </span></div></div>
                <div className="elementor-element elementor-element-419a788 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id={"419a788"} data-element_type={"widget"} data-widget_type={"text-editor.default"}><p>Education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions challenge conventions.</p></div>
                <div className="elementor-element elementor-element-d0b1073 elementor-absolute gsap-move-yes down-90 start-10 elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-rs-image" data-id={"d0b1073"} data-element_type={"widget"} data-settings={"{\"_position\":\"absolute\"}"} data-widget_type={"rs-image.default"} style={{transform: "translate(0px, 0px)"}}><div className="rs-image"><img decoding="async" className="rs-multi-image  reverse- blend_unset" src="/all-programs/assets/0046__bnr-arrow-1-1.png" alt="bnr-arrow-1-1" /></div></div>
              </div>
            </div>

            {/* Academic-filter area: sidebar + facility cards */}
            <div className="elementor-element elementor-element-f401be2 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id={"f401be2"} data-element_type={"container"} data-settings={"{\"background_background\":\"classic\"}"}>
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-57146e5 elementor-widget elementor-widget-rs-academic-filter" data-id={"57146e5"} data-element_type={"widget"} data-widget_type={"rs-academic-filter.default"}>
                  <div className="rs-academic-filter-area" data-widget-id={"57146e5"}>
                    <div className="filter-sidebar-overly"></div>
                    <div className="filter-sidebar">
                      <h4 className="sidebar-title">Filter By<span className="filter-reset-btn" style={{display: "none"}}>Reset</span></h4>
                      <Criteria title="Campus" items={CAMPUS_FILTERS} />
                    </div>
                    <div className="filter-content">
                      <div className="filter-top-bar">
                        <button className="filter-toggle-btn"><i className="ri-menu-2-fill"></i></button>
                        <span className="filter-result">Total <span className="result-count">6</span> results found</span>
                        <span className="filter-search-wrap">
                          <input className="filter-search-input" type="text" placeholder="Enter keyword" />
                          <span className="search-icon"><svg className="e-font-icon-svg e-fas-search" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg></span>
                        </span>
                      </div>
                      <div className="filter-items-wrapper">
                        {FACILITIES.map((f, idx) => (
                          <div className="filter-item dept-filter-item" id={f.id} key={f.no}>
                            <div className="item-thumbnail">
                              <img loading="lazy" decoding="async" width="770" height="660" src={THUMBS[idx % THUMBS.length]} className="attachment-large size-large wp-post-image" alt={f.name} />
                            </div>
                            <div className="item-content">
                              <h4 className="item-title"><a href="#">{f.name}</a></h4>
                              <ul className="item-meta"><li><a href="#">Campus {f.no}</a></li></ul>
                              <div className="item-desc dept-desc">
                                {f.blocks.map((block, i) => (
                                  <Block block={block} key={i} />
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

            {/* Accomplished Graduates — photo row after the Transport section */}
            <div className="elementor-element e-flex e-con-boxed e-con e-parent accomplished-section" data-element_type={"container"}>
              <div className="e-con-inner">
                <h2 className="accomplished-title">Accomplished Graduates</h2>
                <div className="accomplished-row">
                  {ACCOMPLISHED.map((src, i) => (
                    <div className="accomplished-item" key={i}>
                      <img loading="lazy" decoding="async" src={src} alt="Accomplished Graduates" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <style>{`
            /* clone-root sets overflow-y:auto which establishes a scroll container and
               breaks position:sticky. overflow-x:clip clips horizontally WITHOUT creating
               a scroll container, so the sidebar can stick to the viewport again. */
            .clone-root { overflow-x: clip; overflow-y: visible; }
            /* Sticky sidebar that stays inside its own column (default theme size) */
            .elementor-7888 .rs-academic-filter-area { align-items: flex-start; }
            .elementor-7888 .filter-sidebar {
              position: sticky; top: 100px; align-self: flex-start;
              max-height: calc(100vh - 120px); overflow-y: auto;
            }
            /* Sidebar items as anchor links */
            .elementor-7888 .criteria-link {
              display: block; color: #4C4C4C; text-decoration: none;
              font-size: 15px; line-height: 1.45; transition: color .2s;
            }
            .elementor-7888 .criteria-link:hover { color: #034EA2; }
            /* Offset anchor targets so they clear the sticky site header */
            .elementor-7888 .dept-filter-item { align-items: flex-start; scroll-margin-top: 120px; }
            .elementor-7888 .dept-desc { margin-top: 15px; }
            .elementor-7888 .dept-desc .dept-label {
              font-family: "Bitter", serif; color: #034EA2; font-weight: 600;
              font-size: 17px; margin: 20px 0 8px; position: relative; padding-bottom: 8px;
            }
            .elementor-7888 .dept-desc .dept-label::after {
              content: ""; position: absolute; left: 0; bottom: 0;
              width: 38px; height: 3px; background: #FDC72F; border-radius: 2px;
            }
            .elementor-7888 .dept-desc .dept-text { color: #4C4C4C; font-size: 15px; line-height: 1.8; margin: 0 0 10px; }
            .elementor-7888 .dept-desc .dept-text:first-child { margin-top: 0; }
            .elementor-7888 .dept-desc .dept-bullet { padding-left: 1.4em; text-indent: -1.4em; }
            /* Accomplished Graduates photo row — match the boxed width of the other sections.
               Set --display:flex like the theme's boxed containers so the inner picks up
               display:flex (not the default inline) and honors max-width:var(--content-width). */
            .elementor-7888 .accomplished-section {
              --display: flex;
              --content-width: min(100%, var(--container-max-width, 1300px));
            }
            .elementor-7888 .accomplished-section > .e-con-inner {
              flex-direction: column;
              margin-inline: auto;
              padding: 20px 10px 60px;
            }
            .elementor-7888 .accomplished-title {
              font-family: "Bitter", serif; color: #034EA2; font-weight: 600;
              font-size: 26px; margin: 0 0 28px; text-align: center;
              position: relative; padding-bottom: 12px;
            }
            .elementor-7888 .accomplished-title::after {
              content: ""; position: absolute; left: 50%; transform: translateX(-50%);
              bottom: 0; width: 48px; height: 3px; background: #FDC72F; border-radius: 2px;
            }
            .elementor-7888 .accomplished-row {
              display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
            }
            .elementor-7888 .accomplished-item img {
              width: 100%; height: 280px; object-fit: cover;
              border-radius: 12px; display: block;
            }
            @media (max-width: 1024px) { .elementor-7888 .accomplished-row { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 480px) { .elementor-7888 .accomplished-row { grid-template-columns: 1fr; } }
          `}</style>
        </main>
        <CloneFooter />
      </div>
    </div>
  );
}
