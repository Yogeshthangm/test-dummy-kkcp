// @ts-nocheck
import { CloneHeader } from "@/components/CloneHeader";
import { CloneFooter } from "@/components/CloneFooter";
/* eslint-disable */
// Hand-authored React rebuild of the Departments page in the KKCP / univet design
// language (Bitter headings, Roboto body, #003A65 / #034EA2 / #FDC72F brand palette).
// All department copy below is inserted VERBATIM exactly as supplied — no rewriting,
// no grammar/typo correction, ampersands / em dashes / curly apostrophes preserved.

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
  if (block.type === "label") return <h3 className="dept-label">{block.text}</h3>;
  if (block.type === "bullet") return <p className="dept-text dept-bullet">{block.text}</p>;
  return <p className="dept-text">{block.text}</p>;
}

export function CloneTree() {
  return (
    <div className="wp-singular page-template-default page wp-theme-KKCP elementor-default elementor-kit-14">
      <div id="KKCP-page" className="KKCP-page-wrapper">
        <CloneHeader />
        <main id="KKCP-content" className="KKCP-content-wrapper">
          <style>{`
            .dept-page { font-family: "Roboto", sans-serif; }
            .dept-hero {
              background: linear-gradient(120deg, #003A65 0%, #051435 100%);
              color: #fff; padding: 70px 20px 80px; text-align: center; position: relative; overflow: hidden;
            }
            .dept-hero::after {
              content: ""; position: absolute; right: -60px; bottom: -60px;
              width: 220px; height: 220px; border-radius: 50%;
              background: radial-gradient(circle, rgba(253,199,47,.18) 0%, rgba(253,199,47,0) 70%);
            }
            .dept-hero-inner { max-width: 1140px; margin: 0 auto; position: relative; z-index: 1; }
            .dept-crumb { font-size: 14px; letter-spacing: .02em; margin-bottom: 14px; color: #cfe0ef; }
            .dept-crumb a { color: #cfe0ef; text-decoration: none; }
            .dept-crumb a:hover { color: #FDC72F; }
            .dept-crumb span { margin: 0 8px; color: #FDC72F; }
            .dept-hero h1 {
              font-family: "Bitter", serif; font-weight: 600; font-size: 44px; line-height: 1.15;
              margin: 0; color: #fff;
            }
            .dept-hero-rule { margin: 22px auto 0; width: 90px; height: 4px; background: #FDC72F; border-radius: 3px; }

            .dept-wrap { max-width: 1140px; margin: 0 auto; padding: 64px 20px 80px; }
            .dept-card {
              background: #fff; border: 1px solid #E4E4E4; border-top: 4px solid #FDC72F;
              border-radius: 16px; padding: 38px 44px; margin-bottom: 40px;
              box-shadow: 0 14px 40px rgba(0,58,101,.07);
            }
            .dept-card-head { display: flex; align-items: center; gap: 18px; margin-bottom: 8px; }
            .dept-no {
              flex: 0 0 auto; width: 56px; height: 56px; border-radius: 14px;
              background: linear-gradient(135deg, #034EA2 0%, #003A65 100%);
              color: #fff; font-family: "Bitter", serif; font-weight: 600; font-size: 20px;
              display: flex; align-items: center; justify-content: center;
            }
            .dept-title {
              font-family: "Bitter", serif; color: #003A65; font-weight: 600;
              font-size: 28px; line-height: 1.25; margin: 0;
            }
            .dept-label {
              font-family: "Bitter", serif; color: #034EA2; font-weight: 600;
              font-size: 19px; margin: 26px 0 12px; position: relative; padding-bottom: 9px;
            }
            .dept-label::after {
              content: ""; position: absolute; left: 0; bottom: 0;
              width: 44px; height: 3px; background: #FDC72F; border-radius: 2px;
            }
            .dept-text { color: #4C4C4C; font-size: 16px; line-height: 1.85; margin: 0 0 12px; }
            .dept-bullet { padding-left: 1.5em; text-indent: -1.5em; }

            @media (max-width: 600px) {
              .dept-hero h1 { font-size: 32px; }
              .dept-card { padding: 28px 22px; }
              .dept-title { font-size: 22px; }
              .dept-no { width: 46px; height: 46px; font-size: 17px; }
            }
          `}</style>

          <div className="dept-page">
            <section className="dept-hero">
              <div className="dept-hero-inner">
                <nav className="dept-crumb">
                  <a href="/">Home</a>
                  <span>/</span>
                  Departments
                </nav>
                <h1>Departments</h1>
                <div className="dept-hero-rule" />
              </div>
            </section>

            <section className="dept-wrap">
              {DEPARTMENTS.map((dept) => (
                <article className="dept-card" key={dept.no}>
                  <div className="dept-card-head">
                    <span className="dept-no">{dept.no}</span>
                    <h2 className="dept-title">{dept.name}</h2>
                  </div>
                  {dept.blocks.map((block, i) => (
                    <Block block={block} key={i} />
                  ))}
                </article>
              ))}
            </section>
          </div>
        </main>
        <CloneFooter />
      </div>
    </div>
  );
}
