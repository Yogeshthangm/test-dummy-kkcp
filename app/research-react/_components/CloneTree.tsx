// @ts-nocheck
import { CloneHeader } from "@/components/CloneHeader";
import { CloneFooter } from "@/components/CloneFooter";
/* eslint-disable */
// Real React research page (no iframe, no dangerouslySetInnerHTML). Uses the KKCP chrome
// (CloneHeader / CloneFooter) and the cloned elementor design language scoped in
// /research/clone-theme.css. All publication content below is verbatim user-provided copy.

// Verbatim content lines. Empty strings render as section spacing.
const LINES = [
  `1.Research Works & Paper Publications`,
  `2.Dr. A. Shanthy M.Pharm, Ph.D., (Dept. of Pharmaceutics) has recently delivered a presentation and supervised the following projects:`,
  `3.1.  "Designing and Evaluation of Microneedles for the treatment of Melasma (hyper pigmentation) using factorial designs". This paper was presented at the 72nd Indian Pharmaceutical Congress, Nagpur; 2023.`,
  `4.2.  "Cocrystallized Mucoadhesive sustain release buccal tablet for oral candidiasis".`,
  `5.3.  "Rebamipide nanoparticles loaded mucoadhesive buccal patches for Behcet’s disease".`,
  `6.4.  "Formulation and Evaluation of Microballoon containing a combination of Esomeprazole and Levosulpiride to treat Gastroesophageal Reflux disease (GERD)".`,
  `7.5.  "Formulation and Characterization of Transethosomal contraceptive Patch".`,
  `8.Dr. M. Vani M. Pharm, Ph.D., (Dept. of Pharmaceutics) has authored the following research article:`,
  `9.1.  "Aspects of Nano Technology in Cosmeceuticals;" World Journal of Pharmacy & Pharmaceutical Sciences: Vol. II; Issue:12 : 2022.`,
  `10.2.  "Formulation and Evaluation of W/o/W Multiple Emulsion of Enalapril Maleate"; International Journal of Research in Pharmaceutical and Nano Science.`,
  `11.3.  "Novel Ocular Drug Delivery System"; International Journal of Research in Pharmaceutical and Nano Sciences; Vol. II(4); Pg: 268-279; July-Aug 2022.`,
  `Mrs. S.L. Laura (Dept. of Pharmaceutics) has published and presented the following articles on the title`,
  `1. "MTT Assay in Cytotoxicity" published in the World Journal of Pharmacy & Pharmaceutical Sciences; Volume 11, Issue 8; Pages 601-608; 2022.`,
  `2. "Challenges posed by anti-inflammatory drugs in Covid-19 Treatment" featured in the International Journal of Health Sciences; 2022.`,
  `3. "Multiparticulate Drug Delivery System (MPDDS)" found in the World Journal of Pharmaceutical Research, Volume 11; Issue 16; Pages 1959-1980; 2023.`,
  `4. "Marine Biotechnology" published in the World Journal of Pharmaceutical Research; Volume 12, Issue 6; Pages 230-241; 2023.`,
  `5. "In-Vitro Cytotoxicity Assay of aqueous extract of rags of Artocarpus heterophyllus" presented at the International Conference on "Advanced Innovation and Research Challenges in Sciences and Technology (ICAIRST 2023)"; held from March 1st to 3rd, 2023, organized by the School of Pharmaceutical Sciences, VISTAS, Pallavaram, Chennai.`,
  `Dr. B. Premkumar M.Pharm, Ph.D (Dept of Pharmacology) has published the review article on the title`,
  `1. Ponnurengam Malliappan Sivakumarr, Atefeh Zarepour, Sohail Akther, Govindaraj Perumal, Arezoo Khosravi, Premkumar Balasekar, Ali Zarrabi discuss the role of anionic polysaccharides as delivery carriers in cancer therapy and theranostics: A comprehensive overview of their significance, published in the International Journal of Biological Macromolecules (2024), https://doi.org/10.1016/j.ijbiomac.2024.139211. (Impact factor 7.7) (Q1) (ELSEVIER)`,
  `2. Dr. C. Meenakshi, Dr. G. Bharath Kumar, Dr. M. Ramani, Dr. S. Chithra, and Dr. B. Premkumar (2024) investigate Siddha phytocomponents for their potential to inhibit Gsk-3β in managing insulin resistance and type 2 diabetes. This study appears in Frontiers in Health Informatics, 13 (3), 4326-4333. (Scopus Indexed)`,
  `3. The article titled “Silk Fibroin and Collagen Composite Nanofiber Incorporated with Palladium and Platinum Nanoparticles for Wound Dressing Applications” is published in the Journal of Polymers and the Environment on April 25, 2024, pages 1-21. (Impact Factor 5.3) (Q1) (Springer)`,
  `4. The research titled “Multifunctional silk fibroin and cellulose acetate composite nanofibers incorporated with palladium and platinum nanoparticles for enhanced wound healing: Comprehensive characterization and in vivo assessment” is featured in Colloids and Surfaces A: Physicochemical and Engineering Aspects; 684; 2024: 133153. (Impact Factor 4.513) (Q1) (ELSEVIER)`,
  `5. The study “Silk fibroin and gelatin composite nanofiber combined with silver and gold nanoparticles for wound healing accelerated by reducing the inflammatory response” is published in Process Biochemistry; 134, Part 2; 2023: 1-16. (Impact factor 4.88) (Q2) (ELSEVIER)`,
  `6. The paper “Screening of natural ligands as potential anti-alopecia agents: A computational study” appears in the International Journal of Pharma Research 2022: 13 (2), 79-85.`,
  `7. The review “Role Of Glp-1 analogs in the management of Diabetes and Its secondary Complication” is published in Mini Reviews in Medicinal Chemistry. 2021; 21(20): 3166-3182. (Bentham Science Impact Factor 3.862) (PubMed Indexed)`,
  `8. The study “Hepatoprotective and antioxidant activity of Leucas aspera against D-galactosamine induced liver damage in rats” is published in Pharmaceutical Biology 2012; 50 (12), 1473-1478. (Pubmed)`,
  ``,
  `Dr. C. Senthil Kumari M.Pharm, Ph.D (Dept of Pharmacology) has published the review article on the title`,
  `1. "A Thorough Examination of Antimicrobial Strategies and Innovative Approaches from Traditional Medicine to Combat Antibiotic Resistance." International Journal of Pharmaceutical Sciences and Research, Indexed in Embase, an Elsevier Product. IJPSR; Vol 14, Issue 6: 2717-2723; 2023.`,
  `2. "Exploring Wine Varieties and Their Health Benefits - A Review." World Journal of Pharmacy & Pharmaceutical Sciences. Vol. 12; Issue: 2, 591-599; 2023.`,
  `3. Assessment of In Vitro Anthelmintic Activity and Phytochemical Analysis of the Ethanolic Extract of Cardiospermum Halicacabum Leaves, International Journal of Current Research & Review. Vol 14, Issue 19; 2022.`,
  `4. "Modifying Lifestyle to Manage Autism Spectrum Disorder: A Review." International Journal of Scientific Research, Vol. 11; Issue: 1, ISSN No: 2277-8179; January 2022.`,
  `5. "An Overview of Polycystic Ovary Syndrome and Its Lifestyle Modifications." World Journal of Pharmacy and Pharmaceutical Sciences; Vol. 11; Issue: 1; 545-552; 2022.`,
  `Mrs. M. Sankari M.Pharm (Dept. of Pharmacology) has authored a research article titled`,
  `1.  "Evaluation of anti-arthritic activity of Spathodea Campanulata root bark extract on Freund's adjuvant induced arthritis in rat models" published in the World Journal of Pharmaceutical Sciences, 10 (07) 2022, pages 1-9.`,
  `Ms. V. PREMA, M.Pharm (Pharmaceutical Chemistry) has released a research article titled`,
  `1.  "Application of GC-MS in Phytochemical Screening of Traditional Medicinal Plants – A Review" in the International Journal of Pharmacy & Pharmaceutical Research, Vol. 25; ISSUE: 3; OCT 2022.`,
  `Ms. A. MARINA JULIET, M.Pharm (Pharmaceutical Analysis) has published several research articles including`,
  `1.  "Analytical method development and validation of Sacubitril and Valsartan by RP HPLC in combined dosage form 97/103 mg" in the European Chemical Bulletin, Vol. 12 Issue: 1, pages 2386-2395; 2023.`,
  `2.  "Analytical Method Development and Validation of Amlodipine and Celecoxib 10/200mg tablets according to ICH guidelines" in the European Chemical Bulletin, Vol. 12; Issue: 1; pages 2465-2475; 2023.`,
  `3.  "Development and validation of RP-HPLC method for simultaneous estimation of Metformin HCl and Sitagliptin phosphate in tablet dosage form" in the European Chemical Bulletin, Vol. 12 Issue: 1, pages 2713-2729; 2023.`,
  ``,
  `Ms. K. Mekala M.Pharm (Dept. of Pharmacognosy) has recently presented the following posters:`,
  `1. Title: Nano Medicine and advanced technologies for Burns: Preventing infection and facilitating wound healing; International conference on “Advanced Innovation and Research Challenges in Sciences and Technology (ICAIRST 2023); 1st – 3rd March 2023 organized by School of Pharmaceutical Sciences, VISTAS, Pallavaram, Chennai.`,
  `2. Title: “Peristrophe paniculata (forssk) – A common highly therapeutic tropical medicinal plant” first Indo-Italian International conference on Current Aspects of Pharmaceutical and Cancer Research worldwide in Commemoration with World Cancer Day held at SNS College of Health Science in Collaboration with Association of Pharmacy Professional (APP) 02.06.23; Coimbatore.`,
  `3. Title: “A Review on sappan wood – A therapeutic dye yielding tree”. Research Journal of Pharmacognosy and Phytochemistry (RJPP) .2015; 7 (4): 227-231.`,
  `4. Title: “Herbal Formulation Development on Heartwood Of Caesalpinia sappan for Hypolipidemic and Anti-Obesity Activity”. International Journal of Multidisciplinary and Current Research(IJMCR).2016; 4:409-420.`,
  `5. Title: “Exploring the efficacy of polyherbal nano-ethosomes in the treatment of burn wounds”. European Chemical Bulletin, 2023;12 (8):6052-6077.`,
  `6. Title: Brummit, Peristrophe paniculata (Forssk.)–A Common Tropical Medicinal Herb. Research Journal of Pharmacognosy and Phytochemistry, 2023;15 (3): 249-254.`,
  ``,
  `Mrs. G.C. Leela Priyanka M.Pharm, (Ph.D.,) (Dept. of Pharmacology) has published and presented the research articles on the following titles:`,
  `1. "Investigating the therapeutic possibilities of phytoconstituents for the treatment of polycystic ovarian syndrome: An In-Silico analysis", Indian Journal of Pharmacy and Pharmacology 2023;10(2):94–101.`,
  `2. "Tanshinone IIA derived from Salvia miltiorrhiza mitigates symptoms of follicular maturation arrest in zebrafish by interacting with human androgen receptors and regulating Tox3 and Dennd1a", Tissue and Cell; 88; 2024: 102404.(Impact factor 2.6) (ELSEVIER).`,
];

// A line is a section/lead heading when it does not begin with a digit, or it ends with a colon.
const isHeading = (s) => s.length > 0 && (!/^\d/.test(s) || s.endsWith(":"));

export function CloneTree() {
  return (
<div className="wp-singular page-template-default page page-id-research wp-theme-KKCP gsap-enable elementor-default elementor-template-full-width elementor-kit-14 elementor-page elementor-page-research e--ua-blink e--ua-mac e--ua-webkit" data-elementor-device-mode={"desktop"} data-aos-easing={"ease"} data-aos-duration={"800"} data-aos-delay={"0"} style={{}}>
  <div id="KKCP-page" className="KKCP-page-wrapper">
    <CloneHeader />
    <main id="KKCP-content" className="KKCP-content-wrapper">
      <div data-elementor-type={"wp-page"} className="elementor elementor-research">

        {/* Page banner: breadcrumb + title + divider (cloned elementor design language) */}
        <div data-aos-once={"true"} className="elementor-element e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type={"container"} data-e-type={"container"} data-settings={"{\"background_background\":\"classic\"}"}>
          <div className="e-con-inner">
            <div data-aos-once={"true"} className="elementor-element elementor-widget elementor-widget-rstb-breadcrumb" data-element_type={"widget"} data-e-type={"widget"} data-widget_type={"rstb-breadcrumb.default"}>
              <div className="rstb-breadcrumb">
                <span property="itemListElement"><a property="item" title="Go to KKCP." href="/" className="home"><span property="name">Home</span></a><meta property="position" content="1" /></span>
                <span className="item-separator"><svg className="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg></span>
                <span property="itemListElement"><span property="name" className="post post-page current-item">Research</span><meta property="position" content="2" /></span>
              </div>
            </div>
            <div data-aos-once={"true"} className="elementor-element elementor-widget elementor-widget-rstb-page-title" data-element_type={"widget"} data-e-type={"widget"} data-widget_type={"rstb-page-title.default"}><h1 className="rstb-page-title">Research</h1></div>
            <div data-aos-once={"true"} className="elementor-element elementor-widget elementor-widget-rs-divider" data-element_type={"widget"} data-e-type={"widget"} data-widget_type={"rs-divider.default"}><div className="rs-divider dot-enable"><span> </span></div></div>
          </div>
        </div>

        {/* Publications content */}
        <div data-aos-once={"true"} className="elementor-element e-flex e-con-boxed e-con e-parent" data-element_type={"container"} data-e-type={"container"}>
          <div className="e-con-inner">
            <div data-aos-once={"true"} className="elementor-element elementor-widget elementor-widget-heading" data-element_type={"widget"} data-e-type={"widget"} data-widget_type={"heading.default"}>
              <h3 className="elementor-heading-title elementor-size-default" style={{ marginBottom: "24px" }}>Publications</h3>
            </div>
            <div data-aos-once={"true"} className="elementor-element elementor-widget elementor-widget-text-editor" data-element_type={"widget"} data-e-type={"widget"} data-widget_type={"text-editor.default"}>
              <div className="elementor-widget-container" style={{ maxWidth: "1140px" }}>
                {LINES.map((line, i) => {
                  if (line === "") return <div key={i} style={{ height: "20px" }} aria-hidden="true" />;
                  if (isHeading(line))
                    return (
                      <p key={i} style={{ fontWeight: 600, marginTop: "28px", marginBottom: "10px", lineHeight: 1.6 }}>{line}</p>
                    );
                  return (
                    <p key={i} style={{ marginLeft: "18px", marginBottom: "10px", lineHeight: 1.75 }}>{line}</p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
    <CloneFooter />
  </div>
</div>
  );
}
