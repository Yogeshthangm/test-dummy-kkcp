// @ts-nocheck
import { CloneHeader } from "@/components/CloneHeader";
import { CloneFooter } from "@/components/CloneFooter";
/* eslint-disable */
// Courses page — Student Services design (image-background page banner + sidebar/content
// two-column layout from /all-programs/clone-theme.css), with the sidebar repurposed as a
// STICKY anchor-nav of the six course titles and the main column holding the full verbatim
// course write-ups. All course copy is inserted VERBATIM exactly as supplied — no rewriting,
// no grammar/typo correction; ampersands / en + em dashes / curly apostrophes preserved.

const COURSES = [
  {
    no: "01",
    name: "D.Pharm",
    blocks: [
      { type: "section", text: "Overview" },
      { type: "detail", text: "D.Pharm. Course Details" },
      { type: "table", rows: [
        { label: "Eligibility", lines: ["Plus 2 (MAJOR SUBJECTS: Physics, Chemistry Mandatory)"] },
        { label: "Course Duration", lines: ["2 Years"] },
        { label: "Course available since", lines: ["1992"] },
      ] },
      { type: "sub", text: "Your Quick Path to Becoming a Pharmacist: The D. Pharm!" },
      { type: "p", text: "Hey, are you eager to enter the medical field but prefer not to commit to four years of college immediately? The Diploma in Pharmacy (D. Pharm) is the ideal choice for you!" },
      { type: "p", text: "This is a highly focused, 2-year program aimed at preparing you for the job market swiftly. Consider it your fast track to becoming a certified Registered Pharmacist, qualified to work in hospitals and pharmacies." },
      { type: "sub", text: "Why Opt for the D.Pharm? (Key Benefits)" },
      { type: "bullet", text: "• Job in 2 Years! Seriously, this is a significant advantage if you want to start earning money quickly." },
      { type: "bullet", text: "• No Dead Ends: You will receive a solid, reputable qualification that paves the way for excellent job opportunities." },
      { type: "bullet", text: "• Future B.Pharm Shortcut: Should you choose to pursue a degree later, your D.Pharm allows you to bypass the first year of the B.Pharm! You can gain Lateral Entry directly into the second year, saving an entire year of study!" },
      { type: "p", text: "Gutentor Advanced Text" },
      { type: "section", text: "Career" },
      { type: "detail", text: "Awesome Career Spots for D.Pharm holders." },
      { type: "p", text: "Upon completion, you can step into exciting positions such as:" },
      { type: "bullet", text: "• Your Pharmacist: Serve as the primary contact at a community pharmacy, assisting individuals with their prescriptions and providing health guidance." },
      { type: "bullet", text: "• Hospital Crew: Join large hospitals, ensuring that patients receive the correct medications." },
      { type: "bullet", text: "• Sales Star (MR): Take on the role of a Medical Representative, traveling to engage with doctors about the newest pharmaceuticals." },
      { type: "bullet", text: "• Boss Mode: Launch your own Retail Pharmacy—become your own boss!" },
      { type: "bullet", text: "• Factory Floor: Contribute in pharmaceutical manufacturing facilities, aiding in production, quality assurance and packaging." },
      { type: "p", text: "Opt for the D.Pharm—it’s efficient, it’s intelligent & it prepares you for a successful future!" },
    ],
  },
  {
    no: "02",
    name: "B.Pharm",
    blocks: [
      { type: "section", text: "Overview" },
      { type: "detail", text: "B.Pharm Course Details" },
      { type: "table", rows: [
        { label: "Eligibility", lines: [
          "Plus 2 (MAJOR SUBJECTS : Physics,Chemistry Mandratory)",
          "A pass in Diploma in Pharmacy is eligible for direct entry into II year of B.Pharmacy course (Lateral Entry)",
        ] },
        { label: "Course Duration", lines: ["4 Years"] },
        { label: "Number of Semester", lines: ["8"] },
        { label: "Course available since", lines: ["1992"] },
      ] },
      { type: "sub", text: "Becoming a Drug Expert: The Bachelor of Pharmacy (B.Pharm)" },
      { type: "p", text: " Are you looking for a career that allows you to truly assist others while engaging with the field of medical science? The Bachelor of Pharmacy (B.Pharm) is the ideal starting point!" },
      { type: "sub", text: "Unlocking Health: What is the Power of Pharmacy?" },
      { type: "p", text: " The pharmacy sector plays a crucial role in healthcare, working in tandem with scientists to create and evaluate new treatments." },
      { type: "p", text: "The pharmaceutical industry is committed to thorough research, development, and stringent testing of these innovations, thus guaranteeing their safety and effectiveness for public use." },
      { type: "section", text: "Career" },
      { type: "detail", text: "Career map after B.Pharm" },
      { type: "p", text: "A B. Pharm degree truly opens numerous opportunities, whether you aim to work in the public sector or the private industry:" },
      { type: "bullet", text: "• Pharmaceutical Company Positions: Join a large organization in areas such as Production (manufacturing), Quality Control (QC) (ensuring quality) or Research & Development (R&D) (formulating and developing the next blockbuster medication)." },
      { type: "bullet", text: "• Launching Your Own Venture: Are you feeling entrepreneurial? You could establish your own manufacturing facility or a retail pharmacy." },
      { type: "bullet", text: "• Hospital Pharmacist: You would collaborate with doctors and nurses within a hospital, overseeing patient medication plans. (Government / Private)." },
      { type: "bullet", text: "• Drug Inspector: The quality watchdog! Your responsibility is to ensure that drugs and cosmetics are safe and comply with all regulations (Government)." },
      { type: "bullet", text: "• Laboratory Analyst: In specialized laboratories, you would test medications to verify they are completely safe and effective." },
      { type: "p", text: "The B. Pharm degree serves as your entry point to a rewarding career in the pharmaceutical field." },
    ],
  },
  {
    no: "03",
    name: "M.Pharm",
    blocks: [
      { type: "section", text: "Overview" },
      { type: "detail", text: "M.Pharm Course Details" },
      { type: "table", rows: [
        { label: "Eligibility", lines: ["A pass in B.Pharmacy from any Recognized University"] },
        { label: "Course Duration", lines: ["2 Years"] },
        { label: "No. of Semester", lines: ["4"] },
        { label: "Course available since", lines: ["2008"] },
      ] },
      { type: "p", text: "Hello! Are you prepared to enhance your pharmacy skills? Here is the Master of Pharmacy (M.Pharm) degree." },
      { type: "sub", text: "Master of Pharmacy (M.Pharm): Become a Drug Specialist!" },
      { type: "p", text: " The M.Pharm is a two-year postgraduate program—essentially Pharmacy Level 2.0! This degree is ideal for those aspiring to secure high-level positions and engage deeply in pharmaceutical research." },
      { type: "p", text: "It bypasses the fundamentals and delves into highly advanced subjects. You will explore the intricate process of converting a novel chemical compound into the safe and effective medications we rely on. It focuses on mastering the science behind drug design and delivery!" },
      { type: "sub", text: "Your Study Options (Branches)" },
      { type: "p", text: " The M.Pharm program allows you to choose a specialization, enabling you to become a true expert in your field:" },
      { type: "bullet", text: "• M.Pharm – Pharmaceutics: Concentrates on the processes of creating, formulating, and administering medications to the body (such as tablets, injections & creams)." },
      { type: "bullet", text: "• M.Pharm – Pharmaceutical Analysis: Emphasizes the testing and verification of the quality, purity, and potency of drug excipients, Active Pharmaceutical Ingredients & final products." },
      { type: "bullet", text: "• M.Pharm – Pharmacology: Centers on preclinical research related to metabolic disorders, reproductive studies, anticancer research & more." },
      { type: "bullet", text: "• M. Pharm – Pharmacy Practice: Aims to enhance clinical pharmacy education, research & patient-centered pharmaceutical care." },
      { type: "bullet", text: "• M.Pharm – Regulatory Affairs: Prepares students to connect scientific innovation with legal compliance in industries that develop pharmaceuticals, medical devices & cosmetics." },
      { type: "p", text: "If you aspire to a highly specialized, research-driven career at the cutting edge of medicine, pursuing an M. Pharm is certainly the right choice!" },
      { type: "section", text: "Career" },
      { type: "detail", text: "Why go for the M. Pharm?" },
      { type: "p", text: " This course is highly focused on career advancement and serves as your gateway to success, particularly if you are passionate about R&D (Research & Development). Upon earning your Master’s degree, you are not merely seeking employment—you are aiming for a career with vast potential, such as:" },
      { type: "bullet", text: "• Research: Take on roles like Research Associate, Research Assistant or even Scientist, where you can contribute to groundbreaking medical discoveries." },
      { type: "bullet", text: "• Pharma Entrepreneur: Are you ready to lead? Launch your own specialized Pharma Manufacturing Company." },
      { type: "bullet", text: "• Marketing Executive: Be the driving force behind the strategy to bring specialized drugs to market." },
      { type: "bullet", text: "• College Lecturer/Asst. Professor: Educate the future pharmacists of tomorrow!" },
      { type: "bullet", text: "• Specialized Roles in Pharma Companies: Secure advanced positions in Production, Quality Control (QC) or R&D within a pharmaceutical firm." },
      { type: "bullet", text: "• Drug Testing Analyst: Join cutting-edge Drug Testing Laboratories, ensuring that medications are completely safe and of the highest quality." },
      { type: "bullet", text: "• Hospital Lead Pharmacist: Oversee intricate drug regimens in hospitals (both Government and Private)." },
    ],
  },
  {
    no: "04",
    name: "Doctor of Pharmacy",
    blocks: [
      { type: "section", text: "Overview" },
      { type: "detail", text: "Doctor of Pharmacy Course Details" },
      { type: "table", rows: [
        { label: "Eligibility", lines: ["Plus 2 (MAJOR SUBJECTS: Physics, Chemistry Mandatory)"] },
        { label: "Course Duration", lines: ["6 Years"] },
        { label: "Course available since", lines: ["2013"] },
      ] },
      { type: "p", text: "Alright, get ready! If you are committed and enthusiastic about becoming the leading expert in drug therapy, this course is for you." },
      { type: "sub", text: "Doctor of Pharmacy (Pharm.D):" },
      { type: "p", text: "This degree is far from ordinary; the Pharm.D (Doctor of Pharmacy) represents a transformative shift in pharmacy education. This program turns traditional learning into innovative practices, equipping students to excel in leadership and service to society. It is a thorough, clinically-focused six-year curriculum tailored for those who bypass the Master’s degree to pursue the pinnacle of professional practice!" },
      { type: "p", text: "You will embark on five rigorous years of demanding academic coursework, culminating in a comprehensive one-year practical internship. Upon graduation, you will not merely be a pharmacist; you will be a doctor!" },
      { type: "section", text: "Career" },
      { type: "detail", text: "Your Future is High-End: Career Opportunities" },
      { type: "p", text: "The Pharm. D qualification places you in prestigious positions that emphasize patient care and advanced clinical research. You will be eligible for roles such as:" },
      { type: "bullet", text: "• Clinical Pharmacist in Hospitals: This is the primary role! You collaborate with doctors, making crucial decisions regarding patient medications, dosages and drug interactions. Your contribution is vital for saving lives!" },
      { type: "bullet", text: "• Clinical Research Associate (CRA): Engage in clinical trials—the process of testing new medications on individuals. You play a crucial role in introducing new treatments to the world." },
      { type: "bullet", text: "• Regulatory Associate: You are the specialist who assists pharmaceutical companies in navigating the intricate government regulations (such as those from the FDA or local regulatory agencies) to secure drug approvals." },
      { type: "bullet", text: "• Drug Safety Associate: You act as the investigator who oversees the performance of drugs once they are available on the market, ensuring that patient safety remains the top priority." },
      { type: "bullet", text: "• Medical Writer: Leverage your extensive clinical expertise to create scientific documents, reports & educational resources for the industry." },
      { type: "bullet", text: "• Medical Transcription and Coding Executive: Convert clinical notes and procedures into standardized codes—an essential, specialized function in healthcare documentation." },
      { type: "p", text: "The Pharm. D is designed for individuals seeking a direct route to advanced clinical practice and leadership in the field of medicine!" },
    ],
  },
  {
    no: "05",
    name: "Doctor of Pharmacy (PB)",
    blocks: [
      { type: "section", text: "Overview" },
      { type: "detail", text: "Doctor of Pharmacy (Post Baccularate) Course Details" },
      { type: "table", rows: [
        { label: "Eligibility", lines: ["B.pharm"] },
        { label: "Course Duration", lines: [
          "2 years of academic study (advanced coursework in clinical pharmacy).",
          "1 year of compulsory internship or residency in a hospital/clinical setting.",
        ] },
        { label: "Course available since", lines: ["1992"] },
      ] },
      { type: "sub", text: "The Ultimate Pharmacy Course: Pharm. D (Post Baccalaureate)!" },
      { type: "p", text: "Congratulations on earning your Pharmacy degree (B. Pharm)! That's fantastic! You won't need to begin the entire 6-year Pharm. D program from the beginning. The Pharm.D (Post Baccalaureate) offers you a direct path to obtaining your doctoral degree!" },
      { type: "p", text: "This focused program is essentially a three-year course tailored specifically for B.Pharm graduates. You dive straight into advanced training, preparing you to become a Clinical Pharmacist." },
      { type: "sub", text: "The Breakdown (Short and Sweet)" },
      { type: "bullet", text: "• Eligibility: A B.Pharm degree is REQUIRED." },
      { type: "bullet", text: "• Duration: Total of 3 Years (This comprises 2 rigorous years of academic study followed by a mandatory 1-year internship)." },
      { type: "bullet", text: "• The Major Advantage: Achieve the internationally acknowledged title of \"Doctor of Pharmacy\" in only three years post your Bachelor’s!" },
      { type: "section", text: "Career" },
      { type: "detail", text: "High-Impact Career Zones" },
      { type: "p", text: "This qualification positions you firmly within the realms of clinical practice, patient care, and advanced research. You will be eligible for prestigious roles such as:" },
      { type: "bullet", text: "• Clinical Pharmacist in Hospitals: This is the peak of the profession! You collaborate closely with physicians, enhancing drug therapy and saving lives on the hospital floor." },
      { type: "bullet", text: "• Clinical Research Associate (CRA): Engage directly in the testing of innovative medications during human trials." },
      { type: "bullet", text: "• Regulatory Associate: Assist in navigating new drugs through the intricate government approval process." },
      { type: "bullet", text: "• Drug Safety Associate / Pharmacovigilance Specialist: Your role is vital: overseeing medications once they are available to ensure patient safety." },
      { type: "bullet", text: "• Medical Writer / Drug Information Specialist: Leverage your extensive knowledge to create clinical reports and deliver expert medical information." },
      { type: "bullet", text: "• The Pharm. D (Post Baccalaureate) is designed for B.Pharm graduates who wish to bypass M. Pharm." },
    ],
  },
  {
    no: "06",
    name: "Recognized Ph.D. Research Centre",
    blocks: [
      { type: "sub", text: "The Tamil Nadu Dr. M.G.R. Medical University" },
      { type: "sub", text: "Our College is Recognized as a Ph.D. Research Centre" },
      { type: "p", text: "We are pleased to share that K.K. College of Pharmacy, located in Gerugambakkam, Chennai, has received official recognition as a Research Centre by The Tamil Nadu Dr. M.G.R. Medical University, Chennai, to conduct Ph.D. research programmes." },
      { type: "p", text: "The recognition covers the following departments:" },
      { type: "p", text: "Pharmaceutics" },
      { type: "p", text: "Pharmacology" },
      { type: "p", text: "Pharmaceutical Analysis" },
      { type: "p", text: "This milestone represents a major accomplishment in our pursuit of academic excellence and research innovation." },
      { type: "p", text: "This recognition enables our institution to mentor and support doctoral scholars in leading-edge fields of pharmaceutical sciences, thereby contributing to progress in healthcare and drug development." },
      { type: "sub", text: "Recognized Ph.D. Research Guides" },
      { type: "p", text: "Our college proudly hosts a team of highly qualified and experienced research guides approved by the University:" },
      { type: "guides", items: [
        { name: "Dr. A. Meena, M.Pharm., Ph.D.", role: "Professor & Principal – 32 yrs exp.", mail: "kkcpchennai@gmail.com" },
        { name: "Dr. A.SHANTHY M.Pharm., Ph.D.,", role: "Vice-Principal & HoD – 20 yrs exp.", mail: "vp@kkcp.ac.in" },
        { name: "Dr. B. Premkumar, M.Pharm., Ph.D.", role: "Professor & Head – 16 yrs exp.", mail: "hodcologykkcp@gmail.com" },
        { name: "Dr. S. Ramalakshmi, M.Pharm., Ph.D.", role: "Professor & Head – 19 yrs exp.", mail: "sramalakshmi@rediffmail.com" },
        { name: "Dr. M. Vani, M.Pharm., Ph.D.", role: "Professor – 18 yrs exp.", mail: "mandrummoorthy@gmail.com" },
      ] },
      { type: "p", text: "These faculty members are committed to cultivating a research-oriented culture and mentoring scholars in innovative projects that address socially relevant issues in line with national pharmaceutical requirements." },
      { type: "sub", text: "Join Our Research Community" },
      { type: "p", text: "K.K. College of Pharmacy invites enthusiastic researchers to enroll in our Ph.D. programme and make a meaningful contribution to the dynamic field of pharmaceutical sciences." },
    ],
  },
];

function Block({ block }) {
  if (block.type === "section") return <div className="course-section">{block.text}</div>;
  if (block.type === "detail") return <h3 className="course-detail">{block.text}</h3>;
  if (block.type === "sub") return <h4 className="course-sub">{block.text}</h4>;
  if (block.type === "bullet") return <p className="dept-text dept-bullet">{block.text}</p>;
  if (block.type === "table")
    return (
      <table className="course-table">
        <tbody>
          {block.rows.map((row, i) => (
            <tr key={i}>
              <th>{row.label}</th>
              <td>
                {row.lines.map((line, j) => (
                  <span key={j}>{line}</span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  if (block.type === "guides")
    return (
      <div className="course-guides">
        {block.items.map((g, i) => (
          <div className="course-guide" key={i}>
            <div className="g-name">{g.name}</div>
            <div className="g-role">{g.role}</div>
            <div className="g-mail">
              <a href={`mailto:${g.mail}`}>{g.mail}</a>
            </div>
          </div>
        ))}
      </div>
    );
  return <p className="dept-text">{block.text}</p>;
}

export function CloneTree() {
  return (
    <div className="wp-singular page-template-default page page-id-7888 wp-theme-KKCP gsap-enable elementor-default elementor-template-full-width elementor-kit-14 elementor-page elementor-page-7888 e--ua-blink e--ua-mac e--ua-webkit" data-elementor-device-mode={"desktop"}>
      <div id="KKCP-page" className="KKCP-page-wrapper">
        <CloneHeader />
        <main id="KKCP-content" className="KKCP-content-wrapper">
          <div data-elementor-type={"wp-page"} data-elementor-id={"7888"} className="elementor elementor-7888">
            {/* Page banner — same design as Student Services (image bg + dark overlay + white title) */}
            <div className="elementor-element elementor-element-146c4d0 e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id={"146c4d0"} data-element_type={"container"} data-settings={"{\"background_background\":\"classic\"}"}>
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-da6b75b elementor-widget elementor-widget-rstb-breadcrumb" data-id={"da6b75b"} data-element_type={"widget"} data-widget_type={"rstb-breadcrumb.default"}>
                  <div className="rstb-breadcrumb"><span property="itemListElement"><a property="item" title="Go to KKCP." href="/" className="home"><span property="name">Home</span></a><meta property="position" content="1" /></span><span className="item-separator"><svg className="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" /></svg></span><span property="itemListElement"><span property="name" className="post post-page current-item">Courses</span><meta property="url" content="/courses/" /><meta property="position" content="2" /></span></div>
                </div>
                <div className="elementor-element elementor-element-3cae832 elementor-widget elementor-widget-rstb-page-title" data-id={"3cae832"} data-element_type={"widget"} data-widget_type={"rstb-page-title.default"}><h1 className="rstb-page-title">Courses</h1></div>
                <div className="elementor-element elementor-element-4626c23 elementor-widget elementor-widget-rs-divider" data-id={"4626c23"} data-element_type={"widget"} data-widget_type={"rs-divider.default"}><div className="rs-divider dot-enable"><span> </span></div></div>
                <div className="elementor-element elementor-element-419a788 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id={"419a788"} data-element_type={"widget"} data-widget_type={"text-editor.default"}><p>Education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions challenge conventions.</p></div>
                <div className="elementor-element elementor-element-d0b1073 elementor-absolute gsap-move-yes down-90 start-10 elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-rs-image" data-id={"d0b1073"} data-element_type={"widget"} data-settings={"{\"_position\":\"absolute\"}"} data-widget_type={"rs-image.default"} style={{transform: "translate(0px, 0px)"}}><div className="rs-image"><img decoding="async" className="rs-multi-image  reverse- blend_unset" src="/all-programs/assets/0046__bnr-arrow-1-1.png" alt="bnr-arrow-1-1" /></div></div>
              </div>
            </div>
          </div>

          <style>{`
            html { scroll-behavior: smooth; }
            .crs-page { background-color: #F6F4EE; font-family: "Roboto", sans-serif; }
            .crs-wrap {
              max-width: 1200px; margin: 0 auto; padding: 60px 20px 80px;
              display: grid; grid-template-columns: 280px 1fr; gap: 34px; align-items: start;
            }

            /* sticky sidebar nav of course titles */
            .crs-sidebar {
              position: sticky; top: 24px; align-self: start;
              background: #fff; border: 1px solid #E4E4E4; border-radius: 14px;
              padding: 24px 22px; box-shadow: 0 4px 30px rgba(0,0,0,.06);
            }
            .crs-sidebar .sidebar-title {
              font-family: "Bitter", serif; font-size: 18px; font-weight: 600; color: #051435;
              margin: 0 0 16px; padding-bottom: 12px; border-bottom: 2px solid #FDC72F;
            }
            .crs-nav { list-style: none; margin: 0; padding: 0; }
            .crs-nav li { margin: 0 0 4px; }
            .crs-nav a {
              display: flex; gap: 11px; align-items: baseline; padding: 10px 12px;
              border-radius: 8px; color: #3A3F46; text-decoration: none;
              font-size: 15px; line-height: 1.4; transition: background .15s, color .15s;
            }
            .crs-nav a:hover { background: #EAF1FA; color: #034EA2; }
            .crs-nav a .n { flex: 0 0 auto; color: #034EA2; font-weight: 600; font-family: "Bitter", serif; }

            /* main column */
            .crs-main { min-width: 0; }
            .crs-card {
              background: #fff; border: 1px solid #E4E4E4; border-top: 4px solid #FDC72F;
              border-radius: 16px; padding: 36px 40px; margin-bottom: 32px;
              box-shadow: 0 4px 30px rgba(0,0,0,.06); scroll-margin-top: 24px;
            }
            .crs-card-head { display: flex; align-items: center; gap: 16px; margin-bottom: 6px; }
            .crs-no {
              flex: 0 0 auto; width: 52px; height: 52px; border-radius: 13px;
              background: linear-gradient(135deg, #034EA2 0%, #003A65 100%);
              color: #fff; font-family: "Bitter", serif; font-weight: 600; font-size: 19px;
              display: flex; align-items: center; justify-content: center;
            }
            .crs-title {
              font-family: "Bitter", serif; color: #051435; font-weight: 600;
              font-size: 26px; line-height: 1.25; margin: 0;
            }

            .dept-text { color: #4C4C4C; font-size: 16px; line-height: 1.8; margin: 0 0 12px; }
            .dept-bullet { padding-left: 1.5em; text-indent: -1.5em; }

            .course-section {
              display: inline-block; background: #EAF1FA; color: #034EA2;
              font-family: "Bitter", serif; font-weight: 600; font-size: 13px;
              letter-spacing: 1.5px; text-transform: uppercase; padding: 6px 16px;
              border-radius: 999px; margin: 24px 0 14px;
            }
            .course-detail {
              font-family: "Bitter", serif; color: #003A65; font-weight: 600;
              font-size: 20px; margin: 0 0 14px; line-height: 1.3;
            }
            .course-sub {
              font-family: "Bitter", serif; color: #034EA2; font-weight: 600;
              font-size: 17px; margin: 20px 0 10px; line-height: 1.4;
            }
            .course-table { width: 100%; border-collapse: collapse; margin: 6px 0 18px; }
            .course-table th {
              text-align: left; vertical-align: top; width: 34%; padding: 11px 15px;
              background: #F6F8FB; color: #003A65; font-weight: 600; font-size: 15px;
              font-family: "Bitter", serif; border: 1px solid #E4E4E4;
            }
            .course-table td {
              padding: 11px 15px; border: 1px solid #E4E4E4; color: #4C4C4C;
              font-size: 15px; line-height: 1.7;
            }
            .course-table td span { display: block; }
            .course-table td span + span { margin-top: 6px; }
            .course-guides {
              display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
              gap: 16px; margin: 10px 0 14px;
            }
            .course-guide {
              background: #F6F8FB; border: 1px solid #E4E4E4; border-radius: 12px; padding: 18px 20px;
            }
            .course-guide .g-name {
              font-family: "Bitter", serif; color: #003A65; font-weight: 600;
              font-size: 16px; line-height: 1.35;
            }
            .course-guide .g-role { color: #4C4C4C; font-size: 14px; margin: 5px 0; }
            .course-guide .g-mail a { color: #034EA2; text-decoration: none; font-size: 14px; word-break: break-word; }
            .course-guide .g-mail a:hover { text-decoration: underline; }

            @media (max-width: 900px) {
              .crs-wrap { grid-template-columns: 1fr; gap: 24px; }
              .crs-sidebar { position: static; }
            }
            @media (max-width: 600px) {
              .crs-card { padding: 26px 22px; }
              .crs-title { font-size: 22px; }
              .crs-no { width: 44px; height: 44px; font-size: 17px; }
              .course-table th { width: 42%; padding: 9px 11px; }
              .course-table td { padding: 9px 11px; }
            }
          `}</style>

          <div className="crs-page elementor-element e-flex e-con-boxed e-con e-parent e-lazyloaded" data-element_type={"container"}>
            <div className="crs-wrap">
              <aside className="crs-sidebar">
                <h4 className="sidebar-title">Courses</h4>
                <ul className="crs-nav">
                  {COURSES.map((course) => (
                    <li key={course.no}>
                      <a href={`#course-${course.no}`}>
                        <span className="n">{course.no}</span>
                        <span>{course.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="crs-main">
                {COURSES.map((course) => (
                  <article className="crs-card" id={`course-${course.no}`} key={course.no}>
                    <div className="crs-card-head">
                      <span className="crs-no">{course.no}</span>
                      <h2 className="crs-title">{course.name}</h2>
                    </div>
                    {course.blocks.map((block, i) => (
                      <Block block={block} key={i} />
                    ))}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </main>
        <CloneFooter />
      </div>
    </div>
  );
}
