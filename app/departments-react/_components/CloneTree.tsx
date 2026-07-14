// @ts-nocheck
import { CloneHeader } from "@/components/CloneHeader";
import { CloneFooter } from "@/components/CloneFooter";
/* eslint-disable */
// Departments page — Student Services design kept intact (image hero + "Filter By"
// sidebar + academic-filter card list). The program cards are replaced by the six
// pharmacy department cards. All department copy is VERBATIM as supplied — no
// rewriting, no grammar/typo fixes; ampersands / em dashes / curly apostrophes kept.

// --- Sidebar data (tailored to the pharmacy Departments page) ---
const DEPARTMENT_FILTERS = [
  { id: "pharmaceutics", label: "Department of Pharmaceutics", href: "#pharmaceutics" },
  { id: "pharmacology", label: "Department of Pharmacology", href: "#pharmacology" },
  { id: "pharmaceutical-chemistry", label: "Department of Pharmaceutical Chemistry", href: "#pharmaceutical-chemistry" },
  { id: "pharmacognosy", label: "Department of Pharmacognosy", href: "#pharmacognosy" },
  { id: "pharmacy-practice", label: "Department of Pharmacy Practice", href: "#pharmacy-practice" },
  { id: "regulatory-affairs", label: "Department of Regulatory Affairs", href: "#regulatory-affairs" },
];
const THUMBS = [
  "/all-programs/assets/0054__acc-1-min.jpg",
  "/all-programs/assets/0055__acc-2-min.jpg",
  "/all-programs/assets/0056__acc-3-min.jpg",
  "/all-programs/assets/0058__acc-4-min.jpg",
  "/all-programs/assets/0059__acc-5-min.jpg",
  "/all-programs/assets/0060__acc-6-min.jpg",
];

// --- Department content (verbatim) ---
const DEPARTMENTS = [
  {
    no: "01",
    name: "Department of Pharmaceutics",
    blocks: [
      { type: "label", text: "Description" },
      { type: "p", text: "The Department of Pharmaceutics including Pharmaceutical Biotechnology is dedicated to the study and development of pharmaceutical dosage forms, drug delivery systems, and related technologies. The department is equipped with state-of-the-art laboratories and instrumentation, enabling students and researchers to explore various aspects of pharmaceutics, from pre-formulation studies to evaluation and stability testing." },
      { type: "label", text: "Vision" },
      { type: "p", text: "To be a leading Centre of Excellence in Pharmaceutics education and research, driving innovation and advancements in drug delivery and Pharmaceutical Sciences." },
      { type: "label", text: "Mission" },
      { type: "p", text: "To provide a comprehensive and rigorous education in Pharmaceutics, fostering critical thinking, creativity, and professionalism while conducting cutting-edge research that addresses real-world challenges in pharmaceutical development and drug delivery." },
      { type: "label", text: "Key Features" },
      { type: "bullet", text: "• Well-Equipped Laboratories: Modern instrumentation, including a Rotary Flask Evaporator, Probe Sonicator, Stability Chamber, Deep Freezer, Nitrogen Evaporator, and other essential equipment." },
      { type: "bullet", text: "• Integrated Pharmaceutical Biotechnology Section: Facilities for studies in enzyme technology, fermentation, bioassay, and microbial auditing." },
      { type: "bullet", text: "• Pre-formulation and Stability Studies: Focus on pre-formulation studies, drug–excipient compatibility evaluations, and stability testing programs." },
      { type: "bullet", text: "• Advanced Drug Delivery Research: Emphasis on the development of novel dosage forms and advanced drug delivery systems." },
      { type: "label", text: "Academic & Research Focus" },
      { type: "bullet", text: "• To provide students with a comprehensive education in Pharmaceutics, preparing them for careers in the pharmaceutical industry, academia, and research institutions." },
      { type: "bullet", text: "• To conduct innovative research in Pharmaceutics, focusing on the development of novel dosage forms, drug delivery systems, and pharmaceutical technologies that address real-world challenges and improve human health." },
    ],
  },
  {
    no: "02",
    name: "Department of Pharmacology",
    blocks: [
      { type: "label", text: "Description" },
      { type: "p", text: "The Department of Pharmacology is dedicated to excellence in postgraduate education, research, and innovation in pharmacological sciences. The department provides advanced training in experimental and clinical pharmacology, drug discovery, toxicology, and pharmacovigilance. With experienced faculty, modern laboratory facilities, and a research-oriented environment, it prepares students for successful careers in academia, the pharmaceutical industry, clinical research, and regulatory affairs while promoting ethical and evidence-based healthcare." },
      { type: "label", text: "Vision" },
      { type: "p", text: "To nurture skilled pharmacologists through excellence in education, research, and innovation for advancing healthcare and improving patient outcomes." },
      { type: "label", text: "Mission" },
      { type: "bullet", text: "• To provide advanced education and practical training in Experimental and Clinical Pharmacology." },
      { type: "bullet", text: "• To promote high-quality, interdisciplinary research in drug discovery, toxicology, pharmacovigilance, and translational pharmacology." },
      { type: "bullet", text: "• To develop critical thinking, scientific inquiry, and problem-solving skills for addressing healthcare challenges." },
      { type: "bullet", text: "• To instill ethical values, regulatory awareness, and professionalism in research and pharmaceutical practice." },
      { type: "bullet", text: "• To foster collaborations with academia, healthcare institutions, research organizations, and the pharmaceutical industry." },
      { type: "bullet", text: "• To encourage lifelong learning, innovation, entrepreneurship, and community engagement for improving public health." },
      { type: "label", text: "Key Features" },
      { type: "bullet", text: "• Advanced Postgraduate Education: Comprehensive academic and research training in Pharmacology." },
      { type: "bullet", text: "• Experienced Faculty: Highly qualified, dedicated, and research-oriented faculty members." },
      { type: "bullet", text: "• Well-Equipped Research Laboratories: Modern laboratories supporting advanced pharmacological research." },
      { type: "bullet", text: "• Hands-on Experimental Training: Practical exposure to experimental and molecular pharmacology techniques." },
      { type: "bullet", text: "• Drug Discovery and Pharmacovigilance Focus: Emphasis on innovative drug research and medication safety." },
      { type: "bullet", text: "• Research-Oriented Curriculum: Integrated with ethical practices and evidence-based learning." },
      { type: "bullet", text: "• Modern Teaching Methods: Digital learning resources, case-based teaching, and interactive learning approaches." },
      { type: "bullet", text: "• Academic Enrichment Activities: Regular seminars, workshops, and guest lectures by experts." },
      { type: "bullet", text: "• Research and Career Development: Strong support for publications, patents, research projects, and professional growth." },
      { type: "label", text: "Academic and Research Focus" },
      { type: "bullet", text: "• Advanced teaching in Pharmacology, Toxicology, and Clinical Pharmacology." },
      { type: "bullet", text: "• Hands-on training in experimental techniques using in vitro and in vivo models, cell culture, molecular pharmacology, and pharmacokinetic studies." },
      { type: "bullet", text: "• Integration of modern teaching methodologies, case-based learning, and research-oriented education." },
      { type: "bullet", text: "• Drug discovery and development using experimental pharmacology approaches." },
      { type: "bullet", text: "• Research in neuropharmacology, cardiovascular pharmacology, endocrine pharmacology, and immunopharmacology." },
      { type: "bullet", text: "• Molecular pharmacology, biomarker discovery, and translational research." },
      { type: "bullet", text: "• Toxicological evaluation and preclinical safety assessment of new drug candidates." },
    ],
  },
  {
    no: "03",
    name: "Department of Pharmaceutical Chemistry",
    blocks: [
      { type: "label", text: "Description" },
      { type: "p", text: "The Department of Pharmaceutical Chemistry including Pharmaceutical Analysis offers a strong academic foundation in medicinal chemistry, pharmaceutical analysis, and synthetic organic chemistry. Students receive extensive hands-on training using advanced analytical instruments and modern laboratory techniques." },
      { type: "p", text: "The department actively pursues research in the synthesis and characterization of novel bioactive compounds and analytical method development. Research also focuses on the validation and quality evaluation of pharmaceutical formulations. Faculty members regularly publish their research in reputed national and international journals." },
      { type: "p", text: "Through its academic and research initiatives, the department promotes innovation, scientific excellence, and professional competence." },
      { type: "label", text: "Vision" },
      { type: "p", text: "To be a Centre of Excellence in Pharmaceutical Chemistry including Pharmaceutical Analysis by imparting quality education, promoting innovative research, and developing competent pharmaceutical professionals who contribute to healthcare and scientific advancement in accordance with international standards." },
      { type: "label", text: "Mission" },
      { type: "bullet", text: "• To provide high-quality education and practical training in Pharmaceutical Chemistry including Pharmaceutical Analysis." },
      { type: "bullet", text: "• To nurture analytical thinking, scientific innovation, and research aptitude among students." },
      { type: "bullet", text: "• To deliver student-centric learning through experienced and dedicated faculty members." },
      { type: "bullet", text: "• To equip students with advanced laboratory skills using state-of-the-art instrumentation." },
      { type: "bullet", text: "• To encourage research, publication, and lifelong learning that contribute to the Pharmaceutical Sciences." },
      { type: "label", text: "Key Features" },
      { type: "bullet", text: "• Highly Qualified Faculty: Experienced, dedicated, and committed faculty members with strong academic and research expertise." },
      { type: "bullet", text: "• Modern Laboratories: Spacious and well-equipped laboratories with advanced infrastructure." },
      { type: "bullet", text: "• Advanced Analytical Instrumentation: Facilities include High-Performance Liquid Chromatography (HPLC), UV–Visible Spectrophotometer, UV Chamber, and other sophisticated analytical equipment." },
      { type: "bullet", text: "• Hands-on Practical Training: Extensive training in synthetic chemistry, molecular design, and analytical method development." },
      { type: "bullet", text: "• Student-Centric Learning: An outcome-based learning environment aligned with international academic standards." },
    ],
  },
  {
    no: "04",
    name: "Department of Pharmacognosy",
    blocks: [
      { type: "label", text: "Description" },
      { type: "p", text: "The Department of Pharmacognosy focuses on the study of medicinal plants, natural products, and herbal medicines. It provides quality education, practical training, and research opportunities in plant identification, phytochemistry, herbal drug standardization, and natural product development. The department is committed to advancing scientific knowledge while promoting the safe, effective, and sustainable use of medicinal plants for healthcare." },
      { type: "label", text: "Vision" },
      { type: "p", text: "To be a Centre of Excellence in Pharmacognosy by advancing quality education, innovative research, and the scientific exploration of medicinal plants to develop safe, effective, and evidence-based natural products for improving global healthcare." },
      { type: "label", text: "Mission" },
      { type: "bullet", text: "• To provide high-quality education and hands-on training in Pharmacognosy and Natural Product Sciences." },
      { type: "bullet", text: "• To promote innovative research in medicinal plants, phytochemistry, and herbal drug development." },
      { type: "bullet", text: "• To encourage the conservation, cultivation, and sustainable utilization of medicinal plant resources." },
      { type: "label", text: "Key Features" },
      { type: "bullet", text: "• Well-Equipped Pharmacognosy Laboratory: Equipped with modern analytical instruments for teaching and research." },
      { type: "bullet", text: "• Medicinal Plant Garden: Dedicated to the identification and study of medicinal plants and herbal drugs." },
      { type: "bullet", text: "• Advanced Research Facilities: Supports the extraction, isolation, and characterization of phytoconstituents." },
      { type: "bullet", text: "• Comprehensive Practical Training: Hands-on experience in microscopy, pharmacognostic evaluation, and quality control of crude drugs." },
      { type: "bullet", text: "• Focus on Herbal Drug Standardization: Emphasis on quality assurance, standardization, and regulatory aspects of herbal medicines." },
      { type: "label", text: "Academic and Research Focus" },
      { type: "bullet", text: "• Pharmacognostic evaluation of medicinal plants." },
      { type: "bullet", text: "• Phytochemical screening, extraction, isolation, and characterization of bioactive compounds." },
      { type: "bullet", text: "• Standardization and quality control of herbal medicines." },
      { type: "bullet", text: "• Herbal drug formulation and development." },
      { type: "bullet", text: "• Ethnopharmacology and traditional medicine research." },
      { type: "bullet", text: "• Pharmacological evaluation of natural products." },
      { type: "bullet", text: "• Development of evidence-based herbal therapeutics and nutraceuticals." },
    ],
  },
  {
    no: "05",
    name: "Department of Pharmacy Practice",
    blocks: [
      { type: "label", text: "Description" },
      { type: "p", text: "The Department of Pharmacy Practice at K. K. College of Pharmacy, Chennai, is committed to nurturing competent clinical pharmacists through excellence in education, patient-centered care, and evidence-based practice. With comprehensive Pharm. D and M. Pharm. (Pharmacy Practice) programs, the department offers hands-on clinical training, research opportunities, and experiential learning, preparing graduates for successful careers in hospital pharmacy, clinical research, academia, and patient safety." },
      { type: "label", text: "Vision" },
      { type: "p", text: "To be a Centre of Excellence in Pharmacy Practice education, clinical research, and patient-centered pharmaceutical care by developing competent, ethical, and innovative clinical pharmacists who contribute to improving healthcare outcomes." },
      { type: "label", text: "Mission" },
      { type: "bullet", text: "• To provide high-quality education and advanced clinical training in Pharmacy Practice." },
      { type: "bullet", text: "• To promote evidence-based Pharmaceutical Care and the rational use of medicines." },
      { type: "bullet", text: "• To foster research, innovation, and lifelong learning in Clinical Pharmacy and patient safety." },
      { type: "bullet", text: "• To develop healthcare professionals with strong ethical values, leadership qualities, and interdisciplinary collaboration skills." },
      { type: "bullet", text: "• To serve society by enhancing medication safety, public health, and quality patient care through community- and hospital-based services." },
      { type: "label", text: "Key Features" },
      { type: "bullet", text: "• Comprehensive Clinical Exposure: Hands-on training at Dr. Kamakshi Memorial Hospitals, a 300-bedded tertiary care centre." },
      { type: "bullet", text: "• Drug Information Centre (DIC): A state-of-the-art facility equipped with internet-enabled systems, reference resources, and tools like Lexicomp, providing evidence-based responses to healthcare professionals and patients." },
      { type: "bullet", text: "• Hospital-Based Learning: Practical engagement in drug therapy management, ADR monitoring, medication reconciliation, formulary design, and antibiotic stewardship." },
      { type: "bullet", text: "• Industry-Aligned Curriculum: Developed as per Pharmacy Council of India (PCI) guidelines and harmonized with international Clinical Pharmacy standards." },
      { type: "bullet", text: "• Research and Patient Safety Focus: Strong emphasis on pharmacovigilance, clinical trials, evidence-based therapeutics, and medication error prevention." },
      { type: "bullet", text: "• Career-Oriented Training: Equips graduates for successful careers in Clinical Practice, the pharmaceutical industry, research, and academia." },
      { type: "label", text: "Academic and Research Focus" },
      { type: "p", text: "The Department of Pharmacy Practice is committed to excellence in teaching, clinical training, and research. The department emphasizes evidence-based practice, patient-centered care, and interdisciplinary collaboration while promoting innovation in pharmaceutical and clinical research. Students are actively involved in clinical research, pharmacovigilance, drug utilization studies, medication safety, patient counseling, therapeutic drug monitoring, pharmacoepidemiology, pharmacoeconomics, and healthcare outcomes research. Through strong hospital collaborations and experiential learning, the department prepares graduates to address emerging challenges in Clinical Pharmacy, research, and healthcare delivery." },
    ],
  },
  {
    no: "06",
    name: "Department of Regulatory Affairs",
    blocks: [
      { type: "label", text: "Description" },
      { type: "p", text: "The Department of Regulatory Affairs at K. K. College of Pharmacy, Chennai, provides a Master of Pharmacy in Regulatory Affairs (M.Pharm RA) — a distinctive and exclusive postgraduate program available in the city." },
      { type: "p", text: "The curriculum is crafted to equip students with the skills necessary to oversee the complete regulatory lifecycle of pharmaceutical products — encompassing drug development, clinical trials, market approval & post-marketing surveillance." },
      { type: "p", text: "Students acquire comprehensive knowledge in:" },
      { type: "bullet", text: "• Preparing regulatory submissions for both national and international agencies" },
      { type: "bullet", text: "• Grasping clinical trial regulations and monitoring drug safety" },
      { type: "bullet", text: "• Ensuring adherence to legal, ethical & quality standards" },
      { type: "p", text: "By integrating principles from pharmacology, pharmaceutical science, law & international regulatory guidelines, this program empowers graduates to thrive in various positions within regulatory consultancy, pharmaceutical firms, contract research organizations (CROs) & governmental bodies." },
      { type: "label", text: "Vision" },
      { type: "p", text: "To position the department as a hub of excellence in regulatory sciences, cultivating skilled professionals who guarantee the quality, safety & compliance of pharmaceutical and healthcare products on both national and international scales." },
      { type: "label", text: "Mission" },
      { type: "bullet", text: "• To deliver specialized education and hands-on training in regulatory affairs that aligns with global standards." },
      { type: "bullet", text: "• To prepare students with the knowledge to navigate intricate regulations, quality standards & ethical practices within the pharmaceutical sector." },
      { type: "bullet", text: "• To encourage research and innovation in regulatory policies, submissionscompliance strategies." },
      { type: "bullet", text: "• To develop industry-ready professionals dedicated to promoting safe and effective healthcare solutions." },
      { type: "label", text: "Key Features" },
      { type: "bullet", text: "• Unique Program in Chennai: The sole M. Pharm Regulatory Affairs program offered in the city." },
      { type: "bullet", text: "• Specialized Library & Resources: Availability of regulatory reference materials, international guidelines & online databases." },
      { type: "bullet", text: "• Modern Infrastructure: Cutting-edge laboratories and computer facilities for regulatory documentation and simulation activities." },
      { type: "bullet", text: "• Spacious Learning Environment: Dedicated classrooms and collaborative spaces for project-based & experiential learning." },
      { type: "bullet", text: "• Practical Training: Real-world exercises in regulatory submissions, quality compliance & clinical trial oversight." },
      { type: "bullet", text: "• Industry-Relevant Curriculum: Crafted to address the changing needs of the pharmaceutical, biotechnology & healthcare sectors." },
      { type: "label", text: "Academic & Research Focus" },
      { type: "p", text: "The department fosters academic excellence and practical research in every facet of regulatory science. The primary focus areas encompass:" },
      { type: "bullet", text: "• Regulatory submissions pertaining to drugs, biologics & medical devices" },
      { type: "bullet", text: "• Regulations governing clinical trials & pharmacovigilance" },
      { type: "bullet", text: "• Standards of quality, audits & compliance oversight" },
      { type: "bullet", text: "• International regulatory guidelines and harmonization initiatives" },
      { type: "bullet", text: "• Research on policy and the formulation of regulatory strategies" },
      { type: "bullet", text: "• Joint projects with industry stakeholders and regulatory bodies" },
      { type: "p", text: "The department is dedicated to cultivating professionals who connect the realms of science, law, and industry, thereby ensuring that healthcare products are developed and marketed in a manner that is safe, ethical & efficient." },
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
            {/* Hero banner (Student Services design) */}
            <div className="elementor-element elementor-element-146c4d0 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id={"146c4d0"} data-element_type={"container"} data-settings={"{\"background_background\":\"classic\"}"}>
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-da6b75b elementor-widget elementor-widget-rstb-breadcrumb" data-id={"da6b75b"} data-element_type={"widget"} data-widget_type={"rstb-breadcrumb.default"}>
                  <div className="rstb-breadcrumb"><span property="itemListElement"><a property="item" title="Go to KKCP." href="/" className="home"><span property="name">Home</span></a><meta property="position" content="1" /></span><span className="item-separator"><svg className="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg></span><span property="itemListElement"><span property="name" className="post post-page current-item">Departments</span><meta property="url" content="/departments/" /><meta property="position" content="2" /></span></div>
                </div>
                <div className="elementor-element elementor-element-3cae832 elementor-widget elementor-widget-rstb-page-title" data-id={"3cae832"} data-element_type={"widget"} data-widget_type={"rstb-page-title.default"}><h1 className="rstb-page-title">Departments</h1></div>
                <div className="elementor-element elementor-element-4626c23 elementor-widget elementor-widget-rs-divider" data-id={"4626c23"} data-element_type={"widget"} data-widget_type={"rs-divider.default"}><div className="rs-divider dot-enable"><span> </span></div></div>
                <div className="elementor-element elementor-element-d0b1073 elementor-absolute gsap-move-yes down-90 start-10 elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-rs-image" data-id={"d0b1073"} data-element_type={"widget"} data-settings={"{\"_position\":\"absolute\"}"} data-widget_type={"rs-image.default"} style={{transform: "translate(0px, 0px)"}}><div className="rs-image"><img decoding="async" className="rs-multi-image  reverse- blend_unset" src="/all-programs/assets/0046__bnr-arrow-1-1.png" alt="bnr-arrow-1-1" /></div></div>
              </div>
            </div>

            {/* Academic-filter area: sidebar + department cards */}
            <div className="elementor-element elementor-element-f401be2 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id={"f401be2"} data-element_type={"container"} data-settings={"{\"background_background\":\"classic\"}"}>
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-57146e5 elementor-widget elementor-widget-rs-academic-filter" data-id={"57146e5"} data-element_type={"widget"} data-widget_type={"rs-academic-filter.default"}>
                  <div className="rs-academic-filter-area" data-widget-id={"57146e5"}>
                    <div className="filter-sidebar-overly"></div>
                    <div className="filter-sidebar">
                      <h4 className="sidebar-title">Filter By<span className="filter-reset-btn" style={{display: "none"}}>Reset</span></h4>
                      <Criteria title="Departments" items={DEPARTMENT_FILTERS} />
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
                        {DEPARTMENTS.map((dept, idx) => (
                          <div className="filter-item dept-filter-item" id={DEPARTMENT_FILTERS[idx].id} key={dept.no}>
                            <div className="item-thumbnail">
                              <img loading="lazy" decoding="async" width="770" height="660" src={THUMBS[idx]} className="attachment-large size-large wp-post-image" alt={dept.name} />
                            </div>
                            <div className="item-content">
                              <h4 className="item-title"><a href="#">{dept.name}</a></h4>
                              <ul className="item-meta"><li><a href="#">Department {dept.no}</a></li></ul>
                              <div className="item-desc dept-desc">
                                {dept.blocks.map((block, i) => (
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
          </div>

          <style>{`
            /* clone-root ships overflow:hidden/auto which breaks position:sticky.
               Clip horizontally (no h-scrollbar) but keep vertical visible so the
               page (window) stays the scroll root and the sidebar can stick. */
            .clone-root { overflow-x: clip; overflow-y: visible; }
            /* Sticky sidebar that stays within its column (theme width kept) */
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
            /* Stacked card: image on top, content below. scroll-margin clears sticky header */
            .elementor-7888 .dept-filter-item {
              flex-direction: column !important; align-items: stretch;
              scroll-margin-top: 120px;
            }
            .elementor-7888 .dept-filter-item .item-thumbnail {
              width: 100% !important; aspect-ratio: 4 / 3; height: auto !important;
              flex: 0 0 auto; align-self: stretch;
            }
            .elementor-7888 .dept-filter-item .item-thumbnail img {
              width: 100%; height: 100%; object-fit: cover; object-position: center;
            }
            .elementor-7888 .dept-filter-item .item-content { width: 100%; padding: 24px 30px; }
            .dept-desc { margin-top: 15px; }
            .dept-desc .dept-label {
              font-family: "Bitter", serif; color: #034EA2; font-weight: 600;
              font-size: 17px; margin: 20px 0 8px; position: relative; padding-bottom: 8px;
            }
            .dept-desc .dept-label::after {
              content: ""; position: absolute; left: 0; bottom: 0;
              width: 38px; height: 3px; background: #FDC72F; border-radius: 2px;
            }
            .dept-desc .dept-text { color: #4C4C4C; font-size: 15px; line-height: 1.8; margin: 0 0 10px; }
            .dept-desc .dept-text:first-child { margin-top: 0; }
            .dept-desc .dept-bullet { padding-left: 1.4em; text-indent: -1.4em; }
          `}</style>
        </main>
        <CloneFooter />
      </div>
    </div>
  );
}
