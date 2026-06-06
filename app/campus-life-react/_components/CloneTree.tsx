// @ts-nocheck
import { CloneHeader } from "@/components/CloneHeader";
import { CloneFooter } from "@/components/CloneFooter";
/* eslint-disable */
// Real React campus page (no iframe, no dangerouslySetInnerHTML). Mirrors the Student Services
// design language: KKCP chrome (CloneHeader/CloneFooter), the cloned elementor banner, and the
// rounded-card content layout (.filter-content / .filter-item / .item-content) scoped in
// /all-programs/clone-theme.css. All campus content below is verbatim user-provided copy —
// not corrected, reworded, reformatted, or reinterpreted in any way (ICPR).

const TOP_TITLE = `Campus`;

// One card per campus facility. heading + optional subtitle + verbatim paragraphs.
// Text is byte-for-byte user-provided copy.
const FACILITIES = [
  {
    heading: `1 Campus → Smart-Class Rooms`,
    paras: [
      `We provide top-notch facilities aimed at delivering the finest learning environment for our students. Our air-conditioned classrooms are equipped with modern infrastructure and advanced technology, including high-definition screens, to foster an engaging and immersive educational experience. Our committed and well-trained staff guarantee that each student receives quality education along with personalized attention.`,
      `Every classroom is outfitted with modern, ergonomic furniture to promote comfort and concentration throughout the day. We encourage you to visit our campus and witness our inviting and academically stimulating environment. At our college, we genuinely prioritize our students' well-being and are dedicated to nurturing both personal development and academic success.`,
    ],
  },
  {
    heading: `2 Campus → Library`,
    subtitle: `Library`,
    paras: [
      `Our college library serves as a haven for knowledge seekers, featuring a vast array of books across numerous disciplines, such as Pharmaceutics, Pharmacy Practice, Pharmacognosy, Pharmaceutical Analysis, Pharmaceutical Chemistry, Community Pharmacy, Clinical & Pharmacology, Hospital Pharmacy, Pharmaceutical Regulatory Affairs and Computer Science.`,
      `We offer a diverse selection of national and international journals, along with subscriptions to E-Journals. The library is equipped with broadband internet access and Wi-Fi, ensuring students can easily connect to resources.`,
      `Our library creates a tranquil atmosphere that promotes learning and intellectual development. Our dedicated librarians and faculty members are always ready to support students with their research needs.`,
      `Additionally, the library is equipped with modern facilities, including computer terminals and printers. We invite you to explore our extensive collection, enjoy the joys of reading & uncover new knowledge at our college library.`,
    ],
  },
  {
    heading: `3 Campus → Laboratory`,
    paras: [
      `We are proud to offer our students exceptional laboratory facilities. Equipped with state-of-the-art instruments and apparatus, students can safely participate in a variety of hands-on experiments pertinent to their selected fields. Our lab equipment is consistently updated and our extensive assortment of glassware & chemicals is readily accessible for student use. Our labs in Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmacy Practice, Pharmacognosy, Pharmaceutical Analysis, Pharmaceutical Biotechnology, Human Anatomy and Physiology and Computer Science adhere to the highest safety and quality standards, guaranteeing that students enjoy valuable laboratory experiences.`,
    ],
  },
  {
    heading: `4 Campus → Drug Information Centre`,
    paras: [
      `The Drug Information Centre (DIC), located within Dr. Kamakshi Memorial Hospital in Pallikaranai, a tertiary-care facility with 300 beds, serves as a prime example of a modern resource hub. It offers comprehensive access to various drug information dissemination tools, including internet-enabled computers, books & software applications like the esteemed Lexicomp. The DIC is committed to providing timely, evidence-based answers to inquiries from both healthcare professionals and patients, with the goal of promoting the safe and responsible use of pharmaceutical products.`,
    ],
  },
  {
    heading: `5 Campus →Animal House Facility`,
    paras: [
      `The Animal House at our institution is a meticulously maintained and ethically operated facility designed to facilitate pre-clinical and pharmacological research endeavors. It offers a regulated environment for the care and upkeep of laboratory animals utilized in scientific studies.`,
      `Our facility adheres rigorously to the guidelines set forth by the Committee for the Purpose of Control and Supervision of Experiments on Animals (CPCSEA), Government of India (Registration No. 1395/a/10/CPCSEA), guaranteeing the utmost standards of animal welfare and ethical adherence.`,
    ],
  },
  {
    heading: `6 Campus → TRANSPORT`,
    subtitle: `Reliable and Safe College Transport`,
    paras: [
      `Our college provides convenient transportation services that link students to different areas of the city.`,
      `With skilled and timely drivers, we guarantee that students arrive at their destinations safely and punctually.`,
      `Our fleet of well-kept buses is outfitted with contemporary safety features, such as GPS tracking and CCTV cameras, ensuring peace of mind for both students and their parents.`,
      `From morning pickups to evening drop-offs, our transportation system emphasizes comfort, safety and dependability, demonstrating our dedication to student convenience.`,
    ],
  },
  {
    heading: `7 Campus → Security`,
    paras: [
      `The institute has a foolproof security system in place. There is a strong emphasis on maintaining a stringent security protocol throughout the campus. The entire college grounds are monitored by CCTV cameras, and we have highly trained security personnel stationed at the college entrance.`,
      `In total, there are 84 state-of-the-art Hikvision cameras that provide top-notch recording quality. These measures assist in observing student behavior and ensuring their safety and security.`,
    ],
  },
  {
    heading: `8 Campus → RO Water Plant`,
    paras: [
      `The Institution operates a Reverse Osmosis (RO) plant to supply drinking water to college students. The entire campus is equipped with pure Reverse Osmosis (RO) drinking water, complemented by water coolers on every floor to ensure that students have access to clean and safe drinking water.`,
    ],
  },
  {
    heading: `9 Campus → Hostel Facilities`,
    paras: [
      `Our hostel is situated directly across from our campus, offering an optimal learning atmosphere and cost-effectiveness. We provide distinct accommodations for girls and boys.`,
    ],
  },
];

export function CloneTree() {
  return (
<div className="wp-singular page-template-default page page-id-campus wp-theme-KKCP gsap-enable elementor-default elementor-template-full-width elementor-kit-14 elementor-page elementor-page-campus e--ua-blink e--ua-mac e--ua-webkit" data-elementor-device-mode={"desktop"} data-aos-easing={"ease"} data-aos-duration={"800"} data-aos-delay={"0"} style={{}}>{" "}<div id="site-preloader" className="KKCP-preloader" style={{display: "none"}}>{" "}<div className="loader-container">{" "}<div className="loader-icon">{" "}<img src="/all-programs/assets/0020__Asset-2-11.png" alt="KKCP" />{" "}</div>{" "}</div></div>{" "}<div id="KKCP-page" className="KKCP-page-wrapper">{" "}<CloneHeader />{" "}<main id="KKCP-content" className="KKCP-content-wrapper">
  <div data-elementor-type={"wp-page"} className="elementor elementor-campus">

    {/* Banner (same design as Student Services): breadcrumb + title + divider + intro + arrow */}
    <div data-aos-once={"true"} className="elementor-element e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type={"container"} data-e-type={"container"} data-settings={"{\"background_background\":\"classic\"}"}>
      <div className="e-con-inner">
        <div data-aos-once={"true"} className="elementor-element elementor-widget elementor-widget-rstb-breadcrumb" data-element_type={"widget"} data-e-type={"widget"} data-widget_type={"rstb-breadcrumb.default"}>
          <div className="rstb-breadcrumb">
            <span property="itemListElement"><a property="item" title="Go to KKCP." href="/" className="home"><span property="name">Home</span></a><meta property="position" content="1" /></span>
            <span className="item-separator"><svg className="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg></span>
            <span property="itemListElement"><span property="name" className="post post-page current-item">Campus</span><meta property="position" content="2" /></span>
          </div>
        </div>
        <div data-aos-once={"true"} className="elementor-element elementor-widget elementor-widget-rstb-page-title" data-element_type={"widget"} data-e-type={"widget"} data-widget_type={"rstb-page-title.default"}><h1 className="rstb-page-title">Campus</h1></div>
        <div data-aos-once={"true"} className="elementor-element elementor-widget elementor-widget-rs-divider" data-element_type={"widget"} data-e-type={"widget"} data-widget_type={"rs-divider.default"}><div className="rs-divider dot-enable"><span> </span></div></div>
        <div data-aos-once={"true"} className="elementor-element elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-element_type={"widget"} data-e-type={"widget"} data-widget_type={"text-editor.default"}><p>Education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions challenge conventions.</p></div>
        <div data-aos-once={"true"} className="elementor-element elementor-absolute gsap-move-yes down-90 start-10 elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-rs-image" data-element_type={"widget"} data-settings={"{\"_position\":\"absolute\"}"} data-widget_type={"rs-image.default"} style={{transform: "translate(0px, 0px)"}}><div className="rs-image"><img decoding="async" className="rs-multi-image  reverse- blend_unset" src="/all-programs/assets/0046__bnr-arrow-1-1.png" alt="bnr-arrow-1-1" /></div></div>
      </div>
    </div>

    {/* Campus facilities — rounded-card layout (same as Student Services program cards) */}
    <div data-aos-once={"true"} className="elementor-element e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type={"container"} data-e-type={"container"} data-settings={"{\"background_background\":\"classic\"}"}>
      <div className="e-con-inner">
        <div className="filter-content">
          <div className="filter-top-bar">
            <span className="filter-result">{TOP_TITLE}</span>
          </div>
          <div className="filter-items-wrapper">
            {FACILITIES.map((f, fi) => (
              <div className="filter-item" key={fi}>
                <div className="item-content">
                  <h4 className="item-title">{f.heading}</h4>
                  {f.subtitle ? (
                    <p className="item-desc" style={{ fontWeight: 600, marginBottom: 8 }}>{f.subtitle}</p>
                  ) : null}
                  {f.paras.map((p, pi) => (
                    <p className="item-desc" key={pi} style={{ lineHeight: 1.75 }}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  </div>
{" "}</main>{" "}<CloneFooter />{" "}</div>{" "}<span id="elementor-device-mode" className="elementor-screen-only"></span></div>
  );
}
