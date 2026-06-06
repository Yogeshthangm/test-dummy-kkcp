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
const PROGRAMS = [
  { id: "d-pharm", label: "D. Pharm", href: "/diploma-in-pharmacy/" },
  { id: "b-pharm", label: "B. Pharm", href: "/bachelor-of-pharmacy/" },
  { id: "pharm-d", label: "Pharm. D", href: "/doctor-of-pharmacy/" },
  { id: "m-pharm", label: "M. Pharm", href: "/master-of-pharmacy/" },
  { id: "ph-d", label: "Ph. D", href: "/ph-d/" },
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
      { type: "p", text: "The Department of Pharmaceutics is committed to the exploration and advancement of pharmaceutical dosage forms, drug delivery systems, & associated technologies. Our department boasts modern laboratories & equipment, allowing students and researchers to investigate various elements of pharmaceutics, ranging from pre-formulation studies to evaluation and stability testing." },
      { type: "label", text: "Vision" },
      { type: "p", text: "Our aim is to become a premier center of excellence in pharmaceutics education and research, promoting innovation and progress in drug delivery and pharmaceutical sciences." },
      { type: "label", text: "Mission" },
      { type: "p", text: "We strive to offer a thorough and challenging education in pharmaceutics, encouraging critical thinking, creativity & professionalism, while engaging in pioneering research that tackles real-world issues in pharmaceutical development and delivery." },
      { type: "label", text: "Key Features" },
      { type: "bullet", text: "• State-of-the-art laboratories featuring advanced instruments such as a Rotary Flask Evaporator, Probe Sonicator, Stability Chamber, Deep Freezer, Nitrogen Evaporator & versatile equipment." },
      { type: "bullet", text: "• A dedicated biotechnology section for research in enzyme technology, fermentation, bioassays & microbial auditing." },
      { type: "bullet", text: "• Concentration on pre-formulation research, assessments of drug-excipient compatibility & stability programs." },
      { type: "bullet", text: "• A strong emphasis on the development of innovative dosage forms & drug delivery systems." },
      { type: "label", text: "Academic & Research Focus" },
      { type: "p", text: "To equip students with a thorough education in Pharmaceutics, enabling them to pursue careers in the pharmaceutical sector, academia or research organizations." },
      { type: "label", text: "Research Focus:" },
      { type: "p", text: "To carry out groundbreaking research in pharmaceutics, concentrating on the creation of new dosage forms, drug delivery systems & pharmaceutical technologies, while tackling real-world issues and enhancing human health." },
    ],
  },
  {
    no: "02",
    name: "Department of Pharmacology",
    blocks: [
      { type: "label", text: "Description" },
      { type: "p", text: "Pharmacology, the scientific field that explores the complex mechanisms through which drugs influence biological systems, is central to this department. The research focuses on areas such as toxicology and neuropharmacological assessments of both herbal and synthetic drugs, facilitating a comprehensive examination of their effects. This department boasts modern facilities, featuring spacious laboratories that serve as an excellent environment for conducting experiments and furthering pharmacological research. Among the advanced technologies utilized in practical sessions and research initiatives are the Analgesiometer, Histamine Chamber, Actophotometer, Eddy’s Hot Plate, Convulsiometer, Elevated Plus Maze & Pole Climbing Apparatus. The department is dedicated to achieving its vision by offering an exceptional quality of education that fosters professional growth and development. The ultimate objective is to cultivate outstanding scholars ready to excel in the pharmaceutical industry, academia, research & public sectors." },
      { type: "p", text: "The department is equipped with modern laboratories and the latest instruments, including the Semi-autoanalyzer, Haematology analyzer, Analgesiometer, Histamine Chamber, Actophotometer, Eddy’s Hot Plate, Convulsiometer, Elevated Plus Maze & Pole Climbing Apparatus, among others, to facilitate practical work and research projects. The department is committed to realizing our vision by delivering quality education that provides a strong foundation for students. The aim is to prepare exceptional students for fruitful and successful careers in the pharmaceutical industry, academia, research & public sectors." },
      { type: "label", text: "ANIMAL HOUSE FACILITIES" },
      { type: "p", text: "It is not surprising that the animal house, which has been approved by the CPCSEA (Committee for the Purpose of Control and Supervision of Experimental Animals) and holds the Registration number 1395/a/10/CPCSEA, functions as a centralized facility for performing experiments on mice, rats, guinea pigs & rabbits, while upholding ethical standards and scientific integrity." },
      { type: "p", text: "The esteemed faculty members of the department have made substantial contributions to the scientific community through numerous publications in both international and national journals." },
    ],
  },
  {
    no: "03",
    name: "Department of Pharmaceutical Chemistry",
    blocks: [
      { type: "label", text: "Description" },
      { type: "p", text: "The primary goal of the Pharmaceutical Chemistry department is to provide education and training to students, adhering to international standards of excellence. The department takes pride in having a highly qualified, experienced & dedicated teaching staff, committed to their profession." },
      { type: "p", text: "The department features spacious, modern laboratories equipped with advanced technologies that support various synthetic processes, molecular design & the development and validation of analytical standards. It is equipped with the latest HPLC systems, UV-Vis Spectrophotometers, Flame Photometers, Turbidimeters, Potentiometers, Conductivity Meters, UV-Chambers & numerous other state-of-the-art technologies." },
      { type: "p", text: "The research agenda of the department emphasizes the synthesis, characterization, and biological assessment of polynuclear heterocyclic compounds, as well as the development and validation of methods for newly marketed formulations using sophisticated instruments. The esteemed faculty members have published numerous research articles in both national and international journals, thus contributing to the progress of scientific knowledge." },
    ],
  },
  {
    no: "04",
    name: "Department of Pharmacognosy",
    blocks: [
      { type: "label", text: "Description" },
      { type: "p", text: "The Department of Pharmacognosy is dedicated to exploring medicinal plants and natural products utilized in both traditional and contemporary medical practices. Its mission is to connect ancient herbal wisdom with modern scientific validation, promoting research and innovation in the field of natural drug discovery." },
      { type: "label", text: "Vision" },
      { type: "p", text: "The goal is to enhance the study and research of medicinal plants and natural products, encouraging innovation that links traditional herbal knowledge with modern scientific validation to advance healthcare and the pharmaceutical sector." },
      { type: "label", text: "Key Features" },
      { type: "bullet", text: "• To deliver high-quality education and practical training in pharmacognosy and phytochemistry." },
      { type: "bullet", text: "• To promote research in medicinal plants, the discovery of natural products & the development of herbal formulations." },
      { type: "bullet", text: "• To guarantee scientific validation, standardization & quality assurance of herbal medicines." },
      { type: "bullet", text: "• To develop skilled professionals who will drive growth in the herbal and pharmaceutical industries through innovation and evidence-based practices." },
      { type: "label", text: "Academic & Research Focus" },
      { type: "bullet", text: "• A well-equipped laboratory featuring instruments for the analysis of crude drugs and phytochemical studies." },
      { type: "bullet", text: "• An herbarium and museum housing a comprehensive collection of authenticated medicinal plant specimens." },
      { type: "bullet", text: "• A strong emphasis on the standardization, quality assurance, and safety evaluation of herbal medicines." },
      { type: "bullet", text: "• Practical training in microscopic, chemical, and chromatographic techniques." },
      { type: "label", text: "Academic & Research Focus" },
      { type: "p", text: "The department promotes student involvement in research projects focused on medicinal plants and the chemistry of natural products." },
      { type: "p", text: "Faculty members are actively involved in research concerning phytochemical screening, the isolation of bioactive compounds & the development of herbal formulations." },
      { type: "p", text: "Our KKCP college boasts a fully equipped laboratory & the department offers facilities for the extraction, isolation, identification & standardization of phytoconstituents." },
      { type: "p", text: "Students receive training in a range of pharmacognostical and phytochemical techniques, which are essential for the development of herbal formulations and ensuring quality control." },
    ],
  },
  {
    no: "05",
    name: "Department of Pharmacy Practice",
    blocks: [
      { type: "label", text: "Description" },
      { type: "p", text: "The Department of Pharmacy Practice at K. K. College of Pharmacy in Chennai is committed to cultivating clinical pharmacists who are prepared for the future, possessing advanced skills in clinical, analytical & research areas. The department emphasizes academic excellence, patient-focused pharmaceutical care & evidence-based clinical practices." },
      { type: "p", text: "Through its Pharm. D program, students receive a solid foundation and extensive experiential training in both hospital and community environments, which includes patient counseling, management of drug therapy, monitoring of adverse drug reactions & conducting medication reviews." },
      { type: "p", text: "Continuing this tradition, the department has launched a Master Degree program (M. Pharm) in Pharmacy Practice. This postgraduate program combines advanced theoretical knowledge with practical clinical experience and research training, equipping graduates for leadership positions in hospital pharmacy, clinical research, academia & initiatives focused on patient safety." },
      { type: "label", text: "Vision" },
      { type: "p", text: "To become a leading center of excellence in clinical pharmacy education and research, dedicated to enhancing patient outcomes through innovation, evidence-based practices, and compassionate pharmaceutical care." },
      { type: "label", text: "Mission" },
      { type: "bullet", text: "• To provide top-tier education and training in pharmacy practice." },
      { type: "bullet", text: "• To promote clinical research that improves medication safety and therapeutic results." },
      { type: "bullet", text: "• To develop ethically responsible and professionally skilled pharmacists who prioritize patient welfare." },
      { type: "label", text: "Key Features" },
      { type: "bullet", text: "• Comprehensive Clinical Exposure: Practical training at Dr. Kamakshi Memorial Hospitals, a tertiary care center with 300 beds." },
      { type: "bullet", text: "• Drug Information Centre (DIC): A cutting-edge facility featuring internet-enabled systems, reference materials & tools such as Lexicomp, delivering evidence-based information to healthcare professionals and patients." },
      { type: "bullet", text: "• Hospital-Based Learning: Active participation in drug therapy management, ADR monitoring, medication reconciliation, formulary design & antibiotic stewardship." },
      { type: "bullet", text: "• Industry-Aligned Curriculum: Created in accordance with the Pharmacy Council of India (PCI) guidelines and aligned with global clinical pharmacy standards." },
      { type: "bullet", text: "• Research and Patient Safety Focus: A strong commitment to pharmacovigilance, clinical trials, evidence-based therapeutics & the prevention of medication errors." },
      { type: "bullet", text: "• Career-Oriented Training: Prepares graduates for successful careers in clinical practice, the pharmaceutical sector, research & academia." },
      { type: "label", text: "Academic & Research Focus" },
      { type: "p", text: "The department combines academic excellence, clinical practice & cutting-edge research to improve healthcare delivery and ensure the safe and effective use of medications." },
      { type: "p", text: "Key areas of focus in academics and research include:" },
      { type: "bullet", text: "• Clinical pharmacokinetics and pharmacodynamics" },
      { type: "bullet", text: "• Pharmacovigilance and drug safety research" },
      { type: "bullet", text: "• Therapeutic drug monitoring" },
      { type: "bullet", text: "• Antimicrobial stewardship and resistance management" },
      { type: "bullet", text: "• Patient counseling and quality-of-life studies" },
      { type: "bullet", text: "• Hospital-based pharmacoepidemiology and clinical outcome research" },
      { type: "p", text: "Faculty and students engage in active collaboration with clinicians, hospital pharmacists & healthcare professionals, contributing to research publications, scientific conferences & hospital-based initiatives that enhance evidence-based clinical practice." },
    ],
  },
  {
    no: "06",
    name: "Department of Pharmacy Practice",
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
      { type: "bullet", text: "• Well-equipped laboratory featuring instruments for crude drug analysis and phytochemical research." },
      { type: "bullet", text: "• Herbarium and museum housing a diverse collection of authenticated medicinal plant specimens." },
      { type: "bullet", text: "• Focus on standardization, quality assurance & safety assessment of herbal medications." },
      { type: "bullet", text: "• Practical training in microscopic, chemical & chromatographic methods." },
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
                <div className="elementor-element elementor-element-419a788 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id={"419a788"} data-element_type={"widget"} data-widget_type={"text-editor.default"}><p>Education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions challenge conventions.</p></div>
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
                      <Criteria title="Programs" items={PROGRAMS} />
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
            /* Sticky sidebar */
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
            .dept-filter-item { align-items: flex-start; scroll-margin-top: 120px; }
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
