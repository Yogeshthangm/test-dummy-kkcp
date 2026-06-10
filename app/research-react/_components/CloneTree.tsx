// @ts-nocheck
import { CloneHeader } from "@/components/CloneHeader";
import { CloneFooter } from "@/components/CloneFooter";
/* eslint-disable */
// Research page — same design as the Courses page (hero banner + "Filter By" sticky
// sidebar + filter-card list with thumbnails, scoped by .elementor-7888 CSS in
// /all-programs/clone-theme.css). One card per faculty publication group.
// All publication copy is VERBATIM user-provided text (ICPR) — including the leading
// line-number prefixes (1.–11.) on the first eleven entries; nothing rewritten. Text
// lives in JS strings so React escapes &/</> automatically. Short author names and
// department tags (NAMES/DEPTS) are navigation chrome, not content.

const TOP_TITLE = `1.Research Works & Paper Publications`;

// Faculty groups. heading + verbatim publication entries. Text is byte-for-byte user copy.
const GROUPS = [
  {
    heading: `2.Dr. A. Shanthy M.Pharm, Ph.D., (Dept. of Pharmaceutics) has recently delivered a presentation and supervised the following projects:`,
    items: [
      `3.1.  "Designing and Evaluation of Microneedles for the treatment of Melasma (hyper pigmentation) using factorial designs". This paper was presented at the 72nd Indian Pharmaceutical Congress, Nagpur; 2023.`,
      `4.2.  "Cocrystallized Mucoadhesive sustain release buccal tablet for oral candidiasis".`,
      `5.3.  "Rebamipide nanoparticles loaded mucoadhesive buccal patches for Behcet’s disease".`,
      `6.4.  "Formulation and Evaluation of Microballoon containing a combination of Esomeprazole and Levosulpiride to treat Gastroesophageal Reflux disease (GERD)".`,
      `7.5.  "Formulation and Characterization of Transethosomal contraceptive Patch".`,
    ],
  },
  {
    heading: `8.Dr. M. Vani M. Pharm, Ph.D., (Dept. of Pharmaceutics) has authored the following research article:`,
    items: [
      `9.1.  "Aspects of Nano Technology in Cosmeceuticals;" World Journal of Pharmacy & Pharmaceutical Sciences: Vol. II; Issue:12 : 2022.`,
      `10.2.  "Formulation and Evaluation of W/o/W Multiple Emulsion of Enalapril Maleate"; International Journal of Research in Pharmaceutical and Nano Science.`,
      `11.3.  "Novel Ocular Drug Delivery System"; International Journal of Research in Pharmaceutical and Nano Sciences; Vol. II(4); Pg: 268-279; July-Aug 2022.`,
    ],
  },
  {
    heading: `Mrs. S.L. Laura (Dept. of Pharmaceutics) has published and presented the following articles on the title`,
    items: [
      `1. "MTT Assay in Cytotoxicity" published in the World Journal of Pharmacy & Pharmaceutical Sciences; Volume 11, Issue 8; Pages 601-608; 2022.`,
      `2. "Challenges posed by anti-inflammatory drugs in Covid-19 Treatment" featured in the International Journal of Health Sciences; 2022.`,
      `3. "Multiparticulate Drug Delivery System (MPDDS)" found in the World Journal of Pharmaceutical Research, Volume 11; Issue 16; Pages 1959-1980; 2023.`,
      `4. "Marine Biotechnology" published in the World Journal of Pharmaceutical Research; Volume 12, Issue 6; Pages 230-241; 2023.`,
      `5. "In-Vitro Cytotoxicity Assay of aqueous extract of rags of Artocarpus heterophyllus" presented at the International Conference on "Advanced Innovation and Research Challenges in Sciences and Technology (ICAIRST 2023)"; held from March 1st to 3rd, 2023, organized by the School of Pharmaceutical Sciences, VISTAS, Pallavaram, Chennai.`,
    ],
  },
  {
    heading: `Dr. B. Premkumar M.Pharm, Ph.D (Dept of Pharmacology) has published the review article on the title`,
    items: [
      `1. Ponnurengam Malliappan Sivakumarr, Atefeh Zarepour, Sohail Akther, Govindaraj Perumal, Arezoo Khosravi, Premkumar Balasekar, Ali Zarrabi discuss the role of anionic polysaccharides as delivery carriers in cancer therapy and theranostics: A comprehensive overview of their significance, published in the International Journal of Biological Macromolecules (2024), https://doi.org/10.1016/j.ijbiomac.2024.139211. (Impact factor 7.7) (Q1) (ELSEVIER)`,
      `2. Dr. C. Meenakshi, Dr. G. Bharath Kumar, Dr. M. Ramani, Dr. S. Chithra, and Dr. B. Premkumar (2024) investigate Siddha phytocomponents for their potential to inhibit Gsk-3β in managing insulin resistance and type 2 diabetes. This study appears in Frontiers in Health Informatics, 13 (3), 4326-4333. (Scopus Indexed)`,
      `3. The article titled “Silk Fibroin and Collagen Composite Nanofiber Incorporated with Palladium and Platinum Nanoparticles for Wound Dressing Applications” is published in the Journal of Polymers and the Environment on April 25, 2024, pages 1-21. (Impact Factor 5.3) (Q1) (Springer)`,
      `4. The research titled “Multifunctional silk fibroin and cellulose acetate composite nanofibers incorporated with palladium and platinum nanoparticles for enhanced wound healing: Comprehensive characterization and in vivo assessment” is featured in Colloids and Surfaces A: Physicochemical and Engineering Aspects; 684; 2024: 133153. (Impact Factor 4.513) (Q1) (ELSEVIER)`,
      `5. The study “Silk fibroin and gelatin composite nanofiber combined with silver and gold nanoparticles for wound healing accelerated by reducing the inflammatory response” is published in Process Biochemistry; 134, Part 2; 2023: 1-16. (Impact factor 4.88) (Q2) (ELSEVIER)`,
      `6. The paper “Screening of natural ligands as potential anti-alopecia agents: A computational study” appears in the International Journal of Pharma Research 2022: 13 (2), 79-85.`,
      `7. The review “Role Of Glp-1 analogs in the management of Diabetes and Its secondary Complication” is published in Mini Reviews in Medicinal Chemistry. 2021; 21(20): 3166-3182. (Bentham Science Impact Factor 3.862) (PubMed Indexed)`,
      `8. The study “Hepatoprotective and antioxidant activity of Leucas aspera against D-galactosamine induced liver damage in rats” is published in Pharmaceutical Biology 2012; 50 (12), 1473-1478. (Pubmed)`,
    ],
  },
  {
    heading: `Dr. C. Senthil Kumari M.Pharm, Ph.D (Dept of Pharmacology) has published the review article on the title`,
    items: [
      `1. "A Thorough Examination of Antimicrobial Strategies and Innovative Approaches from Traditional Medicine to Combat Antibiotic Resistance." International Journal of Pharmaceutical Sciences and Research, Indexed in Embase, an Elsevier Product. IJPSR; Vol 14, Issue 6: 2717-2723; 2023.`,
      `2. "Exploring Wine Varieties and Their Health Benefits - A Review." World Journal of Pharmacy & Pharmaceutical Sciences. Vol. 12; Issue: 2, 591-599; 2023.`,
      `3. Assessment of In Vitro Anthelmintic Activity and Phytochemical Analysis of the Ethanolic Extract of Cardiospermum Halicacabum Leaves, International Journal of Current Research & Review. Vol 14, Issue 19; 2022.`,
      `4. "Modifying Lifestyle to Manage Autism Spectrum Disorder: A Review." International Journal of Scientific Research, Vol. 11; Issue: 1, ISSN No: 2277-8179; January 2022.`,
      `5. "An Overview of Polycystic Ovary Syndrome and Its Lifestyle Modifications." World Journal of Pharmacy and Pharmaceutical Sciences; Vol. 11; Issue: 1; 545-552; 2022.`,
    ],
  },
  {
    heading: `Mrs. M. Sankari M.Pharm (Dept. of Pharmacology) has authored a research article titled`,
    items: [
      `1.  "Evaluation of anti-arthritic activity of Spathodea Campanulata root bark extract on Freund’s adjuvant induced arthritis in rat models" published in the World Journal of Pharmaceutical Sciences, 10 (07) 2022, pages 1-9.`,
    ],
  },
  {
    heading: `Ms. V. PREMA, M.Pharm (Pharmaceutical Chemistry) has released a research article titled`,
    items: [
      `1.  "Application of GC-MS in Phytochemical Screening of Traditional Medicinal Plants – A Review" in the International Journal of Pharmacy & Pharmaceutical Research, Vol. 25; ISSUE: 3; OCT 2022.`,
    ],
  },
  {
    heading: `Ms. A. MARINA JULIET, M.Pharm (Pharmaceutical Analysis) has published several research articles including`,
    items: [
      `1.  "Analytical method development and validation of Sacubitril and Valsartan by RP HPLC in combined dosage form 97/103 mg" in the European Chemical Bulletin, Vol. 12 Issue: 1, pages 2386-2395; 2023.`,
      `2.  "Analytical Method Development and Validation of Amlodipine and Celecoxib 10/200mg tablets according to ICH guidelines" in the European Chemical Bulletin, Vol. 12; Issue: 1; pages 2465-2475; 2023.`,
      `3.  "Development and validation of RP-HPLC method for simultaneous estimation of Metformin HCl and Sitagliptin phosphate in tablet dosage form" in the European Chemical Bulletin, Vol. 12 Issue: 1, pages 2713-2729; 2023.`,
    ],
  },
  {
    heading: `Ms. K. Mekala M.Pharm (Dept. of Pharmacognosy) has recently presented the following posters:`,
    items: [
      `1. Title: Nano Medicine and advanced technologies for Burns: Preventing infection and facilitating wound healing; International conference on “Advanced Innovation and Research Challenges in Sciences and Technology (ICAIRST 2023); 1st – 3rd March 2023 organized by School of Pharmaceutical Sciences, VISTAS, Pallavaram, Chennai.`,
      `2. Title: “Peristrophe paniculata (forssk) – A common highly therapeutic tropical medicinal plant” first Indo-Italian International conference on Current Aspects of Pharmaceutical and Cancer Research worldwide in Commemoration with World Cancer Day held at SNS College of Health Science in Collaboration with Association of Pharmacy Professional (APP) 02.06.23; Coimbatore.`,
      `3. Title: “A Review on sappan wood – A therapeutic dye yielding tree”. Research Journal of Pharmacognosy and Phytochemistry (RJPP) .2015; 7 (4): 227-231.`,
      `4. Title: “Herbal Formulation Development on Heartwood Of Caesalpinia sappan for Hypolipidemic and Anti-Obesity Activity”. International Journal of Multidisciplinary and Current Research(IJMCR).2016; 4:409-420.`,
      `5. Title: “Exploring the efficacy of polyherbal nano-ethosomes in the treatment of burn wounds”. European Chemical Bulletin, 2023;12 (8):6052-6077.`,
      `6. Title: Brummit, Peristrophe paniculata (Forssk.)–A Common Tropical Medicinal Herb. Research Journal of Pharmacognosy and Phytochemistry, 2023;15 (3): 249-254.`,
    ],
  },
  {
    heading: `Mrs. G.C. Leela Priyanka M.Pharm, (Ph.D.,) (Dept. of Pharmacology) has published and presented the research articles on the following titles:`,
    items: [
      `1. "Investigating the therapeutic possibilities of phytoconstituents for the treatment of polycystic ovarian syndrome: An In-Silico analysis", Indian Journal of Pharmacy and Pharmacology 2023;10(2):94–101.`,
      `2. "Tanshinone IIA derived from Salvia miltiorrhiza mitigates symptoms of follicular maturation arrest in zebrafish by interacting with human androgen receptors and regulating Tox3 and Dennd1a", Tissue and Cell; 88; 2024: 102404.(Impact factor 2.6) (ELSEVIER).`,
    ],
  },
];

// Short navigation labels for the sidebar/card titles (chrome, not content). Order matches GROUPS.
const NAMES = [
  `Dr. A. Shanthy`,
  `Dr. M. Vani`,
  `Mrs. S.L. Laura`,
  `Dr. B. Premkumar`,
  `Dr. C. Senthil Kumari`,
  `Mrs. M. Sankari`,
  `Ms. V. PREMA`,
  `Ms. A. MARINA JULIET`,
  `Ms. K. Mekala`,
  `Mrs. G.C. Leela Priyanka`,
];

// Department tags for the card meta (chrome, derived from each heading). Order matches GROUPS.
const DEPTS = [
  `Dept. of Pharmaceutics`,
  `Dept. of Pharmaceutics`,
  `Dept. of Pharmaceutics`,
  `Dept of Pharmacology`,
  `Dept of Pharmacology`,
  `Dept. of Pharmacology`,
  `Pharmaceutical Chemistry`,
  `Pharmaceutical Analysis`,
  `Dept. of Pharmacognosy`,
  `Dept. of Pharmacology`,
];

// 6 source thumbnails cycled across the cards (same set the Courses page uses).
const THUMBS = [
  "/all-programs/assets/0054__acc-1-min.jpg",
  "/all-programs/assets/0055__acc-2-min.jpg",
  "/all-programs/assets/0056__acc-3-min.jpg",
  "/all-programs/assets/0058__acc-4-min.jpg",
  "/all-programs/assets/0059__acc-5-min.jpg",
  "/all-programs/assets/0060__acc-6-min.jpg",
];

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

const FILTERS = NAMES.map((n, i) => ({ id: `pub-${i + 1}`, label: `${i + 1} Research → ${n}`, href: `#pub-${i + 1}` }));

export function CloneTree() {
  return (
    <div className="wp-singular page-template-default page page-id-7888 wp-theme-KKCP gsap-enable elementor-default elementor-template-full-width elementor-kit-14 elementor-page elementor-page-7888 e--ua-blink e--ua-mac e--ua-webkit" data-elementor-device-mode={"desktop"}>
      <div id="KKCP-page" className="KKCP-page-wrapper">
        <CloneHeader />
        <main id="KKCP-content" className="KKCP-content-wrapper">
          <div data-elementor-type={"wp-page"} data-elementor-id={"7888"} className="elementor elementor-7888">
            {/* Hero banner (same design as Courses) */}
            <div className="elementor-element elementor-element-146c4d0 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id={"146c4d0"} data-element_type={"container"} data-settings={"{\"background_background\":\"classic\"}"}>
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-da6b75b elementor-widget elementor-widget-rstb-breadcrumb" data-id={"da6b75b"} data-element_type={"widget"} data-widget_type={"rstb-breadcrumb.default"}>
                  <div className="rstb-breadcrumb"><span property="itemListElement"><a property="item" title="Go to KKCP." href="/" className="home"><span property="name">Home</span></a><meta property="position" content="1" /></span><span className="item-separator"><svg className="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg></span><span property="itemListElement"><span property="name" className="post post-page current-item">Research</span><meta property="url" content="/research/" /><meta property="position" content="2" /></span></div>
                </div>
                <div className="elementor-element elementor-element-3cae832 elementor-widget elementor-widget-rstb-page-title" data-id={"3cae832"} data-element_type={"widget"} data-widget_type={"rstb-page-title.default"}><h1 className="rstb-page-title">Research</h1></div>
                <div className="elementor-element elementor-element-4626c23 elementor-widget elementor-widget-rs-divider" data-id={"4626c23"} data-element_type={"widget"} data-widget_type={"rs-divider.default"}><div className="rs-divider dot-enable"><span> </span></div></div>
                <div className="elementor-element elementor-element-419a788 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id={"419a788"} data-element_type={"widget"} data-widget_type={"text-editor.default"}><p>Education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions challenge conventions.</p></div>
                <div className="elementor-element elementor-element-d0b1073 elementor-absolute gsap-move-yes down-90 start-10 elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-rs-image" data-id={"d0b1073"} data-element_type={"widget"} data-settings={"{\"_position\":\"absolute\"}"} data-widget_type={"rs-image.default"} style={{transform: "translate(0px, 0px)"}}><div className="rs-image"><img decoding="async" className="rs-multi-image  reverse- blend_unset" src="/all-programs/assets/0046__bnr-arrow-1-1.png" alt="bnr-arrow-1-1" /></div></div>
              </div>
            </div>

            {/* Filter area: sidebar + publication cards */}
            <div className="elementor-element elementor-element-f401be2 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id={"f401be2"} data-element_type={"container"} data-settings={"{\"background_background\":\"classic\"}"}>
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-57146e5 elementor-widget elementor-widget-rs-academic-filter" data-id={"57146e5"} data-element_type={"widget"} data-widget_type={"rs-academic-filter.default"}>
                  <div className="rs-academic-filter-area" data-widget-id={"57146e5"}>
                    <div className="filter-sidebar-overly"></div>
                    <div className="filter-sidebar">
                      <h4 className="sidebar-title">Filter By<span className="filter-reset-btn" style={{display: "none"}}>Reset</span></h4>
                      <Criteria title="Publications" items={FILTERS} />
                    </div>
                    <div className="filter-content">
                      <div className="filter-top-bar">
                        <button className="filter-toggle-btn"><i className="ri-menu-2-fill"></i></button>
                        <span className="filter-result">Total <span className="result-count">10</span> results found</span>
                        <span className="filter-search-wrap">
                          <input className="filter-search-input" type="text" placeholder="Enter keyword" />
                          <span className="search-icon"><svg className="e-font-icon-svg e-fas-search" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg></span>
                        </span>
                      </div>
                      <h3 className="research-section-title">{TOP_TITLE}</h3>
                      <div className="filter-items-wrapper">
                        {GROUPS.map((g, idx) => (
                          <div className="filter-item dept-filter-item" id={`pub-${idx + 1}`} key={idx}>
                            <div className="item-thumbnail">
                              <img loading="lazy" decoding="async" width="770" height="660" src={THUMBS[idx % THUMBS.length]} className="attachment-large size-large wp-post-image" alt={NAMES[idx]} />
                            </div>
                            <div className="item-content">
                              <h4 className="item-title"><a href="#">{NAMES[idx]}</a></h4>
                              <ul className="item-meta"><li><a href="#">{DEPTS[idx]}</a></li></ul>
                              <div className="item-desc dept-desc">
                                <p className="dept-text dept-lead">{g.heading}</p>
                                {g.items.map((it, ii) => (
                                  <p className="dept-text dept-pub" key={ii}>{it}</p>
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
            .elementor-7888 .filter-sidebar {
              position: sticky !important;
              top: 24px !important;
              align-self: flex-start !important;
              max-height: calc(100vh - 48px) !important;
              overflow-y: auto;
            }
            .elementor-7888 .criteria-link {
              display: block; color: #4C4C4C; text-decoration: none;
              font-size: 15px; line-height: 1.45; transition: color .2s; margin-bottom: 8px;
            }
            .elementor-7888 .criteria-link:hover { color: #034EA2; }
            .elementor-7888 .research-section-title {
              font-family: "Bitter", serif; color: #034EA2; font-weight: 600;
              font-size: 26px; margin: 8px 0 24px;
            }
            .elementor-7888 .dept-filter-item { align-items: flex-start; scroll-margin-top: 120px; }
            .elementor-7888 .dept-desc { margin-top: 15px; }
            .elementor-7888 .dept-desc .dept-lead {
              font-family: "Bitter", serif; color: #034EA2; font-weight: 600;
              font-size: 16px; line-height: 1.6; margin: 0 0 14px;
            }
            .elementor-7888 .dept-desc .dept-text { color: #4C4C4C; font-size: 15px; line-height: 1.8; margin: 0 0 12px; text-align: justify; }
            .elementor-7888 .dept-desc .dept-pub { padding-left: 1.7em; text-indent: -1.7em; }
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
