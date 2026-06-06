import Link from "next/link";
import styles from "./CoursesSection.module.css";

/* Courses content for the About Us page.
   All copy below is reproduced VERBATIM from the source material (no edits,
   corrections, or rewrites) and only wrapped in on-brand markup. */

type Block =
  | { t: "sub"; x: string }
  | { t: "p"; x: string }
  | { t: "ul"; x: string[] };

type Guide = { name: string; role: string; mail: string };

type Course = {
  index: string;
  name: string;
  overview?: { title: string; rows: { label: string; lines: string[] }[] };
  body?: Block[];
  career?: { title: string; blocks: Block[] };
  blocks?: (Block | { t: "guides"; x: Guide[] })[];
};

const COURSES: Course[] = [
  {
    index: "1",
    name: "D.Pharm",
    overview: {
      title: "D.Pharm. Course Details",
      rows: [
        { label: "Eligibility", lines: ["Plus 2 (MAJOR SUBJECTS: Physics, Chemistry Mandatory)"] },
        { label: "Course Duration", lines: ["2 Years"] },
        { label: "Course available since", lines: ["1992"] },
      ],
    },
    body: [
      { t: "sub", x: "Your Quick Path to Becoming a Pharmacist: The D. Pharm!" },
      { t: "p", x: "Hey, are you eager to enter the medical field but prefer not to commit to four years of college immediately? The Diploma in Pharmacy (D. Pharm) is the ideal choice for you!" },
      { t: "p", x: "This is a highly focused, 2-year program aimed at preparing you for the job market swiftly. Consider it your fast track to becoming a certified Registered Pharmacist, qualified to work in hospitals and pharmacies." },
      { t: "sub", x: "Why Opt for the D.Pharm? (Key Benefits)" },
      { t: "ul", x: [
        "Job in 2 Years! Seriously, this is a significant advantage if you want to start earning money quickly.",
        "No Dead Ends: You will receive a solid, reputable qualification that paves the way for excellent job opportunities.",
        "Future B.Pharm Shortcut: Should you choose to pursue a degree later, your D.Pharm allows you to bypass the first year of the B.Pharm! You can gain Lateral Entry directly into the second year, saving an entire year of study!",
      ] },
      { t: "p", x: "Gutentor Advanced Text" },
    ],
    career: {
      title: "Awesome Career Spots for D.Pharm holders.",
      blocks: [
        { t: "p", x: "Upon completion, you can step into exciting positions such as:" },
        { t: "ul", x: [
          "Your Pharmacist: Serve as the primary contact at a community pharmacy, assisting individuals with their prescriptions and providing health guidance.",
          "Hospital Crew: Join large hospitals, ensuring that patients receive the correct medications.",
          "Sales Star (MR): Take on the role of a Medical Representative, traveling to engage with doctors about the newest pharmaceuticals.",
          "Boss Mode: Launch your own Retail Pharmacy—become your own boss!",
          "Factory Floor: Contribute in pharmaceutical manufacturing facilities, aiding in production, quality assurance and packaging.",
        ] },
        { t: "p", x: "Opt for the D.Pharm—it’s efficient, it’s intelligent & it prepares you for a successful future!" },
      ],
    },
  },

  {
    index: "2",
    name: "B.Pharm",
    overview: {
      title: "B.Pharm Course Details",
      rows: [
        { label: "Eligibility", lines: [
          "Plus 2 (MAJOR SUBJECTS : Physics,Chemistry Mandratory)",
          "A pass in Diploma in Pharmacy is eligible for direct entry into II year of B.Pharmacy course (Lateral Entry)",
        ] },
        { label: "Course Duration", lines: ["4 Years"] },
        { label: "Number of Semester", lines: ["8"] },
        { label: "Course available since", lines: ["1992"] },
      ],
    },
    body: [
      { t: "sub", x: "Becoming a Drug Expert: The Bachelor of Pharmacy (B.Pharm)" },
      { t: "p", x: " Are you looking for a career that allows you to truly assist others while engaging with the field of medical science? The Bachelor of Pharmacy (B.Pharm) is the ideal starting point!" },
      { t: "sub", x: "Unlocking Health: What is the Power of Pharmacy?" },
      { t: "p", x: " The pharmacy sector plays a crucial role in healthcare, working in tandem with scientists to create and evaluate new treatments." },
      { t: "p", x: "The pharmaceutical industry is committed to thorough research, development, and stringent testing of these innovations, thus guaranteeing their safety and effectiveness for public use." },
    ],
    career: {
      title: "Career map after B.Pharm",
      blocks: [
        { t: "p", x: "A B. Pharm degree truly opens numerous opportunities, whether you aim to work in the public sector or the private industry:" },
        { t: "ul", x: [
          "Pharmaceutical Company Positions: Join a large organization in areas such as Production (manufacturing), Quality Control (QC) (ensuring quality) or Research & Development (R&D) (formulating and developing the next blockbuster medication).",
          "Launching Your Own Venture: Are you feeling entrepreneurial? You could establish your own manufacturing facility or a retail pharmacy.",
          "Hospital Pharmacist: You would collaborate with doctors and nurses within a hospital, overseeing patient medication plans. (Government / Private).",
          "Drug Inspector: The quality watchdog! Your responsibility is to ensure that drugs and cosmetics are safe and comply with all regulations (Government).",
          "Laboratory Analyst: In specialized laboratories, you would test medications to verify they are completely safe and effective.",
        ] },
        { t: "p", x: "The B. Pharm degree serves as your entry point to a rewarding career in the pharmaceutical field." },
      ],
    },
  },

  {
    index: "3",
    name: "M.Pharm",
    overview: {
      title: "M.Pharm Course Details",
      rows: [
        { label: "Eligibility", lines: ["A pass in B.Pharmacy from any Recognized University"] },
        { label: "Course Duration", lines: ["2 Years"] },
        { label: "No. of Semester", lines: ["4"] },
        { label: "Course available since", lines: ["2008"] },
      ],
    },
    body: [
      { t: "p", x: "Hello! Are you prepared to enhance your pharmacy skills? Here is the Master of Pharmacy (M.Pharm) degree." },
      { t: "sub", x: "Master of Pharmacy (M.Pharm): Become a Drug Specialist!" },
      { t: "p", x: " The M.Pharm is a two-year postgraduate program—essentially Pharmacy Level 2.0! This degree is ideal for those aspiring to secure high-level positions and engage deeply in pharmaceutical research." },
      { t: "p", x: "It bypasses the fundamentals and delves into highly advanced subjects. You will explore the intricate process of converting a novel chemical compound into the safe and effective medications we rely on. It focuses on mastering the science behind drug design and delivery!" },
      { t: "sub", x: "Your Study Options (Branches)" },
      { t: "p", x: " The M.Pharm program allows you to choose a specialization, enabling you to become a true expert in your field:" },
      { t: "ul", x: [
        "M.Pharm – Pharmaceutics: Concentrates on the processes of creating, formulating, and administering medications to the body (such as tablets, injections & creams).",
        "M.Pharm – Pharmaceutical Analysis: Emphasizes the testing and verification of the quality, purity, and potency of drug excipients, Active Pharmaceutical Ingredients & final products.",
        "M.Pharm – Pharmacology: Centers on preclinical research related to metabolic disorders, reproductive studies, anticancer research & more.",
        "M. Pharm – Pharmacy Practice: Aims to enhance clinical pharmacy education, research & patient-centered pharmaceutical care.",
        "M.Pharm – Regulatory Affairs: Prepares students to connect scientific innovation with legal compliance in industries that develop pharmaceuticals, medical devices & cosmetics.",
      ] },
      { t: "p", x: "If you aspire to a highly specialized, research-driven career at the cutting edge of medicine, pursuing an M. Pharm is certainly the right choice!" },
    ],
    career: {
      title: "Why go for the M. Pharm?",
      blocks: [
        { t: "p", x: " This course is highly focused on career advancement and serves as your gateway to success, particularly if you are passionate about R&D (Research & Development). Upon earning your Master’s degree, you are not merely seeking employment—you are aiming for a career with vast potential, such as:" },
        { t: "ul", x: [
          "Research: Take on roles like Research Associate, Research Assistant or even Scientist, where you can contribute to groundbreaking medical discoveries.",
          "Pharma Entrepreneur: Are you ready to lead? Launch your own specialized Pharma Manufacturing Company.",
          "Marketing Executive: Be the driving force behind the strategy to bring specialized drugs to market.",
          "College Lecturer/Asst. Professor: Educate the future pharmacists of tomorrow!",
          "Specialized Roles in Pharma Companies: Secure advanced positions in Production, Quality Control (QC) or R&D within a pharmaceutical firm.",
          "Drug Testing Analyst: Join cutting-edge Drug Testing Laboratories, ensuring that medications are completely safe and of the highest quality.",
          "Hospital Lead Pharmacist: Oversee intricate drug regimens in hospitals (both Government and Private).",
        ] },
      ],
    },
  },

  {
    index: "4",
    name: "Doctor of Pharmacy",
    overview: {
      title: "Doctor of Pharmacy Course Details",
      rows: [
        { label: "Eligibility", lines: ["Plus 2 (MAJOR SUBJECTS: Physics, Chemistry Mandatory)"] },
        { label: "Course Duration", lines: ["6 Years"] },
        { label: "Course available since", lines: ["2013"] },
      ],
    },
    body: [
      { t: "p", x: "Alright, get ready! If you are committed and enthusiastic about becoming the leading expert in drug therapy, this course is for you." },
      { t: "sub", x: "Doctor of Pharmacy (Pharm.D):" },
      { t: "p", x: "This degree is far from ordinary; the Pharm.D (Doctor of Pharmacy) represents a transformative shift in pharmacy education. This program turns traditional learning into innovative practices, equipping students to excel in leadership and service to society. It is a thorough, clinically-focused six-year curriculum tailored for those who bypass the Master’s degree to pursue the pinnacle of professional practice!" },
      { t: "p", x: "You will embark on five rigorous years of demanding academic coursework, culminating in a comprehensive one-year practical internship. Upon graduation, you will not merely be a pharmacist; you will be a doctor!" },
    ],
    career: {
      title: "Your Future is High-End: Career Opportunities",
      blocks: [
        { t: "p", x: "The Pharm. D qualification places you in prestigious positions that emphasize patient care and advanced clinical research. You will be eligible for roles such as:" },
        { t: "ul", x: [
          "Clinical Pharmacist in Hospitals: This is the primary role! You collaborate with doctors, making crucial decisions regarding patient medications, dosages and drug interactions. Your contribution is vital for saving lives!",
          "Clinical Research Associate (CRA): Engage in clinical trials—the process of testing new medications on individuals. You play a crucial role in introducing new treatments to the world.",
          "Regulatory Associate: You are the specialist who assists pharmaceutical companies in navigating the intricate government regulations (such as those from the FDA or local regulatory agencies) to secure drug approvals.",
          "Drug Safety Associate: You act as the investigator who oversees the performance of drugs once they are available on the market, ensuring that patient safety remains the top priority.",
          "Medical Writer: Leverage your extensive clinical expertise to create scientific documents, reports & educational resources for the industry.",
          "Medical Transcription and Coding Executive: Convert clinical notes and procedures into standardized codes—an essential, specialized function in healthcare documentation.",
        ] },
        { t: "p", x: "The Pharm. D is designed for individuals seeking a direct route to advanced clinical practice and leadership in the field of medicine!" },
      ],
    },
  },

  {
    index: "5",
    name: "Doctor of Pharmacy (PB)",
    overview: {
      title: "Doctor of Pharmacy (Post Baccularate) Course Details",
      rows: [
        { label: "Eligibility", lines: ["B.pharm"] },
        { label: "Course Duration", lines: [
          "2 years of academic study (advanced coursework in clinical pharmacy).",
          "1 year of compulsory internship or residency in a hospital/clinical setting.",
        ] },
        { label: "Course available since", lines: ["1992"] },
      ],
    },
    body: [
      { t: "sub", x: "The Ultimate Pharmacy Course: Pharm. D (Post Baccalaureate)!" },
      { t: "p", x: "Congratulations on earning your Pharmacy degree (B. Pharm)! That's fantastic! You won't need to begin the entire 6-year Pharm. D program from the beginning. The Pharm.D (Post Baccalaureate) offers you a direct path to obtaining your doctoral degree!" },
      { t: "p", x: "This focused program is essentially a three-year course tailored specifically for B.Pharm graduates. You dive straight into advanced training, preparing you to become a Clinical Pharmacist." },
      { t: "sub", x: "The Breakdown (Short and Sweet)" },
      { t: "ul", x: [
        "Eligibility: A B.Pharm degree is REQUIRED.",
        "Duration: Total of 3 Years (This comprises 2 rigorous years of academic study followed by a mandatory 1-year internship).",
        "The Major Advantage: Achieve the internationally acknowledged title of \"Doctor of Pharmacy\" in only three years post your Bachelor’s!",
      ] },
    ],
    career: {
      title: "High-Impact Career Zones",
      blocks: [
        { t: "p", x: "This qualification positions you firmly within the realms of clinical practice, patient care, and advanced research. You will be eligible for prestigious roles such as:" },
        { t: "ul", x: [
          "Clinical Pharmacist in Hospitals: This is the peak of the profession! You collaborate closely with physicians, enhancing drug therapy and saving lives on the hospital floor.",
          "Clinical Research Associate (CRA): Engage directly in the testing of innovative medications during human trials.",
          "Regulatory Associate: Assist in navigating new drugs through the intricate government approval process.",
          "Drug Safety Associate / Pharmacovigilance Specialist: Your role is vital: overseeing medications once they are available to ensure patient safety.",
          "Medical Writer / Drug Information Specialist: Leverage your extensive knowledge to create clinical reports and deliver expert medical information.",
          "The Pharm. D (Post Baccalaureate) is designed for B.Pharm graduates who wish to bypass M. Pharm.",
        ] },
      ],
    },
  },

  {
    index: "6",
    name: "Recognized Ph.D. Research Centre",
    blocks: [
      { t: "sub", x: "The Tamil Nadu Dr. M.G.R. Medical University" },
      { t: "sub", x: "Our College is Recognized as a Ph.D. Research Centre" },
      { t: "p", x: "We are pleased to share that K.K. College of Pharmacy, located in Gerugambakkam, Chennai, has received official recognition as a Research Centre by The Tamil Nadu Dr. M.G.R. Medical University, Chennai, to conduct Ph.D. research programmes." },
      { t: "p", x: "The recognition covers the following departments:" },
      { t: "ul", x: ["Pharmaceutics", "Pharmacology", "Pharmaceutical Analysis"] },
      { t: "p", x: "This milestone represents a major accomplishment in our pursuit of academic excellence and research innovation." },
      { t: "p", x: "This recognition enables our institution to mentor and support doctoral scholars in leading-edge fields of pharmaceutical sciences, thereby contributing to progress in healthcare and drug development." },
      { t: "sub", x: "Recognized Ph.D. Research Guides" },
      { t: "p", x: "Our college proudly hosts a team of highly qualified and experienced research guides approved by the University:" },
      { t: "guides", x: [
        { name: "Dr. A. Meena, M.Pharm., Ph.D.", role: "Professor & Principal – 32 yrs exp.", mail: "kkcpchennai@gmail.com" },
        { name: "Dr. A.SHANTHY M.Pharm., Ph.D.,", role: "Vice-Principal & HoD – 20 yrs exp.", mail: "vp@kkcp.ac.in" },
        { name: "Dr. B. Premkumar, M.Pharm., Ph.D.", role: "Professor & Head – 16 yrs exp.", mail: "hodcologykkcp@gmail.com" },
        { name: "Dr. S. Ramalakshmi, M.Pharm., Ph.D.", role: "Professor & Head – 19 yrs exp.", mail: "sramalakshmi@rediffmail.com" },
        { name: "Dr. M. Vani, M.Pharm., Ph.D.", role: "Professor – 18 yrs exp.", mail: "mandrummoorthy@gmail.com" },
      ] },
      { t: "p", x: "These faculty members are committed to cultivating a research-oriented culture and mentoring scholars in innovative projects that address socially relevant issues in line with national pharmaceutical requirements." },
      { t: "sub", x: "Join Our Research Community" },
      { t: "p", x: "K.K. College of Pharmacy invites enthusiastic researchers to enroll in our Ph.D. programme and make a meaningful contribution to the dynamic field of pharmaceutical sciences." },
    ],
  },
];

function renderBlock(b: Block, key: number) {
  if (b.t === "sub") return <h4 key={key} className={styles.sub}>{b.x}</h4>;
  if (b.t === "p") return <p key={key} className={styles.para}>{b.x}</p>;
  return (
    <ul key={key} className={styles.list}>
      {b.x.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function CoursesSection({ showBanner = false }: { showBanner?: boolean }) {
  return (
    <>
      {showBanner && (
        <section className={styles.banner}>
          <div className={styles.bannerInner}>
            <h1 className={styles.bannerTitle}>Courses</h1>
            <div className={styles.crumb}>
              <Link href="/">Home</Link>
              <span className={styles.crumbSep}>/</span>
              <span>Courses</span>
            </div>
          </div>
        </section>
      )}

      <section className={styles.section} aria-label="Courses">
      <div className={styles.wrap}>
        <div className={styles.head}>
          <span className={styles.label}>Academics</span>
          <h2 className={styles.headTitle}>Courses</h2>
          <div className={styles.rule} />
        </div>

        {COURSES.map((course) => (
          <article className={styles.card} key={course.index}>
            <div className={styles.cardHead}>
              <span className={styles.badge}>{course.index}</span>
              <h3 className={styles.courseName}>{course.name}</h3>
            </div>

            {course.overview && (
              <>
                <span className={styles.pill}>Overview</span>
                <h4 className={styles.detailTitle}>{course.overview.title}</h4>
                <table className={styles.table}>
                  <tbody>
                    {course.overview.rows.map((row, i) => (
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
              </>
            )}

            {course.body && course.body.map((b, i) => renderBlock(b, i))}

            {course.career && (
              <>
                <span className={styles.pill}>Career</span>
                <h4 className={styles.detailTitle}>{course.career.title}</h4>
                {course.career.blocks.map((b, i) => renderBlock(b, i))}
              </>
            )}

            {course.blocks &&
              course.blocks.map((b, i) => {
                if (b.t === "guides") {
                  return (
                    <div className={styles.guides} key={i}>
                      {b.x.map((g, j) => (
                        <div className={styles.guide} key={j}>
                          <span className={styles.guideNum}>{j + 1}</span>
                          <div className={styles.guideName}>{g.name}</div>
                          <div className={styles.guideRole}>{g.role}</div>
                          <div className={styles.guideMail}>
                            <a href={`mailto:${g.mail}`}>{g.mail}</a>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }
                return renderBlock(b, i);
              })}
          </article>
        ))}
      </div>
    </section>
    </>
  );
}
