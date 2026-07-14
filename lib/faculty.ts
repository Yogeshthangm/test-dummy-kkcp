export type FacultyMember = { name: string; designation: string; src: string };

/** Faculty portraits, by department. Names/designations derived from the client's photo filenames
 *  (the only source — Department.md carries no faculty data). Obvious filename typos corrected
 *  with the client's explicit approval. */
export const FACULTY_BY_DEPARTMENT: Record<string, FacultyMember[]> = {
  "pharmaceutics": [
    {
      name: "Dr. A. Shanthy",
      designation: "Vice-Principal & HOD, Dept. of Pharmaceutics",
      src: "/kkcp/web/faculty/dept-of-pharmaceutics-dr-a-shanthy-vice-principal-and-hod-dept-of-pharmaceutics.jpg",
    },
    {
      name: "Dr. K. Karthick",
      designation: "Professor, Dept. of Pharmaceutics",
      src: "/kkcp/web/faculty/dept-of-pharmaceutics-dr-k-karthick-professor-dept-of-pharmaceutics.jpg",
    },
    {
      name: "Dr. M. Vani",
      designation: "Professor, Dept. of Pharmaceutics",
      src: "/kkcp/web/faculty/dept-of-pharmaceutics-dr-m-vani-professor-dept-of-pharmaceutics.jpg",
    },
    {
      name: "Dr. S. Sivaneswari",
      designation: "Associate Professor, Dept. of Pharmaceutics",
      src: "/kkcp/web/faculty/dept-of-pharmaceutics-dr-s-sivaneswari-associate-professor-dept-of-pharmaceutics.jpg",
    },
    {
      name: "Prof. S. L. Laura",
      designation: "Associate Professor, Dept. of Pharmaceutics",
      src: "/kkcp/web/faculty/dept-of-pharmaceutics-pro-s-l-laura-associate-professor-dept-of-pharmaceutics.jpg",
    },
    {
      name: "Dr. R. Thayana",
      designation: "Assistant Professor, Dept. of Pharmaceutics",
      src: "/kkcp/web/faculty/dept-of-pharmaceutics-dr-r-thayana-assistant-professor-dept-of-pharmaceutics.jpg",
    },
    {
      name: "Dr. S. Niveda",
      designation: "Assistant Professor, Dept. of Pharmaceutics",
      src: "/kkcp/web/faculty/dept-of-pharmaceutics-dr-s-niveda-assistant-professor-dept-of-pharmaceutics.jpg",
    },
    {
      name: "Mrs. S. Jayapraba",
      designation: "Assistant Professor, Dept. of Pharmaceutics",
      src: "/kkcp/web/faculty/dept-of-pharmaceutics-mrs-s-jayapraba-assistant-professor-dept-of-pharmaceutics.jpg",
    },
  ],

  "pharmaceutical-chemistry": [
    {
      name: "Dr. A. Meena",
      designation: "Principal & HOD, Dept. of Pharmaceutical Analysis",
      src: "/kkcp/web/faculty/department-of-pharmaceutical-chemistry-including-analysis-dr-a-meena-principal-and-hod-dept-of-pharmaceutical-analysis.jpg",
    },
    {
      name: "Dr. V. Prema",
      designation: "Professor, Dept. of Pharmaceutical Analysis",
      src: "/kkcp/web/faculty/department-of-pharmaceutical-chemistry-including-analysis-dr-v-prema-professor-dept-of-pharmceutical-analysis.jpg",
    },
    {
      name: "Mrs. B. Sandhiya Rani",
      designation: "Associate Professor, Dept. of Pharmaceutical Analysis",
      src: "/kkcp/web/faculty/department-of-pharmaceutical-chemistry-including-analysis-mrs-b-sandhya-rani-associate-professor-dept-of-pharmaceutical-analysis.jpg",
    },
    {
      name: "Mrs. Ganta Jesupriya",
      designation: "Associate Professor, Dept. of Pharmaceutical Analysis",
      src: "/kkcp/web/faculty/department-of-pharmaceutical-chemistry-including-analysis-mrs-ganta-jesupriya-associate-professor-dept-of-pharmaceutical-analysis.jpg",
    },
    {
      name: "Mrs. S. Parvathi",
      designation: "Associate Professor, Dept. of Pharmaceutical Analysis",
      src: "/kkcp/web/faculty/department-of-pharmaceutical-chemistry-including-analysis-mrs-s-parvathi-associate-professor-dept-of-pharmaceutical-analysis.jpg",
    },
    {
      name: "Mrs. S. Umaparvathy",
      designation: "Associate Professor, Dept. of Pharmaceutical Analysis",
      src: "/kkcp/web/faculty/department-of-pharmaceutical-chemistry-including-analysis-mrs-s-umaparvathy-associate-professor-dept-of-pharaceutical-analysis.jpg",
    },
    {
      name: "Mrs. A. Marina Juliet",
      designation: "Assistant Professor, Dept. of Pharmaceutical Analysis",
      src: "/kkcp/web/faculty/department-of-pharmaceutical-chemistry-including-analysis-mrs-a-marina-juliet-assistant-professor-dept-of-pharmaceutical-analysis.jpg",
    },
    {
      name: "Mrs. B. Karunya",
      designation: "Assistant Professor, Dept. of Pharmaceutical Analysis",
      src: "/kkcp/web/faculty/department-of-pharmaceutical-chemistry-including-analysis-mrs-b-karunya-assistant-professor-dept-ofpharmaceutical-analysis.jpg",
    },
    {
      name: "Mrs. Nalini Kunta",
      designation: "Assistant Professor, Dept. of Pharmaceutical Analysis",
      src: "/kkcp/web/faculty/department-of-pharmaceutical-chemistry-including-analysis-mr-nalini-kunta-assistant-professor-dept-of-pharmceutical-analysis.jpg",
    },
    {
      name: "Ms. Dhritimonidevi",
      designation: "Assistant Professor, Dept. of Pharmaceutical Analysis",
      src: "/kkcp/web/faculty/department-of-pharmaceutical-chemistry-including-analysis-ms-dhritimonidevi-assistant-professor-dept-of-pharmaceutical-analis.jpg",
    },
    {
      name: "Ms. Meeramol C. Chellappan",
      designation: "Assistant Professor, Dept. of Pharmaceutical Analysis",
      src: "/kkcp/web/faculty/department-of-pharmaceutical-chemistry-including-analysis-ms-meeramol-c-chellappan-assistant-professor-dept-of-pharmaceutical-analysis.jpg",
    },
  ],

  "pharmacognosy": [
    {
      name: "Mrs. S. Thamizharasi",
      designation: "Professor & HOD, Dept. of Pharmacognosy",
      src: "/kkcp/web/faculty/department-of-pharmacognosy-mrs-s-thamizharasi-professor-and-hod-dept-of-pharmacognosy.jpg",
    },
    {
      name: "Dr. J. Soundarya Serena",
      designation: "Assistant Professor, Dept. of Pharmacognosy",
      src: "/kkcp/web/faculty/department-of-pharmacognosy-dr-j-soundarya-serena-assistant-professor-dept-of-pharmacognosy.jpg",
    },
    {
      name: "Dr. R. Suganthi",
      designation: "Assistant Professor, Dept. of Pharmacognosy",
      src: "/kkcp/web/faculty/department-of-pharmacognosy-dr-r-suganthi-assistant-professor-dept-of-pharmacognosy.jpg",
    },
    {
      name: "Mrs. S. Z. Mushahida Parveen",
      designation: "Assistant Professor, Dept. of Pharmacognosy",
      src: "/kkcp/web/faculty/department-of-pharmacognosy-mrs-s-z-mushahida-parveen-assistant-professor-dept-of-pharmacognosy.jpg",
    },
  ],

  "pharmacology": [
    {
      name: "Dr. C. Senthilkumari",
      designation: "Professor & HOD, Dept. of Pharmacology",
      src: "/kkcp/web/faculty/department-of-pharmacology-dr-c-senthil-kumari-professor-and-hod-dept-of-pharmacology.jpg",
    },
    {
      name: "Mrs. I. Sruthy Jacob",
      designation: "Associate Professor, Dept. of Pharmacology",
      src: "/kkcp/web/faculty/department-of-pharmacology-mrs-i-sruthy-jacob-associate-professor-dept-of-pharmacology.jpg",
    },
    {
      name: "Mrs. S. Rabiyamma",
      designation: "Associate Professor, Dept. of Pharmacology",
      src: "/kkcp/web/faculty/department-of-pharmacology-mrs-s-rabiyamma-associate-professor-dept-of-pharmacology.jpg",
    },
    {
      name: "Dr. P. Gayathri",
      designation: "Assistant Professor, Dept. of Pharmacology",
      src: "/kkcp/web/faculty/department-of-pharmacology-dr-p-gayathri-assistant-professor-dept-of-pharmacology.jpg",
    },
    {
      name: "Mrs. A. Kamatchi",
      designation: "Assistant Professor, Dept. of Pharmacology",
      src: "/kkcp/web/faculty/department-of-pharmacology-mrs-a-kamatchi-assistant-professor-dept-of-pharmacology.jpg",
    },
    {
      name: "Mrs. G. C. Leela Priyanka",
      designation: "Assistant Professor, Dept. of Pharmacology",
      src: "/kkcp/web/faculty/department-of-pharmacology-mrs-g-c-leela-priyanka-assistant-professor-dept-of-pharmacology.jpg",
    },
    {
      name: "Ms. M. Surya",
      designation: "Assistant Professor, Dept. of Pharmacology",
      src: "/kkcp/web/faculty/department-of-pharmacology-ms-m-surya-assistant-professor-dept-of-pharmacology.jpg",
    },
  ],

  "pharmacy-practice": [
    {
      name: "Dr. S. Ramalakshmi",
      designation: "Professor & HOD, Dept. of Pharmacy Practice",
      src: "/kkcp/web/faculty/department-of-pharmacy-practice-dr-s-ramalakshmi-professor-and-hod-dept-of-pharmacy-practice.jpg",
    },
    {
      name: "Dr. S. Vedhapal Jeyamani",
      designation: "Professor, Dept. of Pharmacy Practice",
      src: "/kkcp/web/faculty/department-of-pharmacy-practice-dr-s-vedhapal-jeyamani-professor-dept-of-pharmcy-practice.jpg",
    },
    {
      name: "Dr. A. Niventhi",
      designation: "Associate Professor, Dept. of Pharmacy Practice",
      src: "/kkcp/web/faculty/department-of-pharmacy-practice-dr-a-niventhi-associate-professor-dept-of-pharmacy-practice.jpg",
    },
    {
      name: "Dr. Aswathi Elisabeth Philip",
      designation: "Associate Professor, Dept. of Pharmacy Practice",
      src: "/kkcp/web/faculty/department-of-pharmacy-practice-dr-aswathi-elisabeth-philip-associate-professor-dept-of-pharmacy-practice.jpg",
    },
    {
      name: "Dr. M. Nivetha",
      designation: "Assistant Professor, Dept. of Pharmacy Practice",
      src: "/kkcp/web/faculty/department-of-pharmacy-practice-dr-m-nivetha-assistant-professor-dept-of-pharmacy-practice.jpg",
    },
    {
      name: "Dr. T. Deeksha",
      designation: "Assistant Professor, Dept. of Pharmacy Practice",
      src: "/kkcp/web/faculty/department-of-pharmacy-practice-dr-t-deeksha-assistant-profesor-dept-of-pharmacy-practice.jpg",
    },
    {
      name: "Mr. M. Sakthivel",
      designation: "Assistant Professor, Dept. of Pharmacy Practice",
      src: "/kkcp/web/faculty/department-of-pharmacy-practice-mr-m-sakthivel-assistant-professor-dept-of-pharmacy-practice.jpg",
    },
    {
      name: "Mrs. A. S. Shalini",
      designation: "Assistant Professor, Dept. of Pharmacy Practice",
      src: "/kkcp/web/faculty/department-of-pharmacy-practice-mrs-as-shalini-assistant-professor-dept-of-pharmacy-practice.jpg",
    },
    {
      name: "Mrs. P. Aishwaryah",
      designation: "Assistant Professor, Dept. of Pharmacy Practice",
      src: "/kkcp/web/faculty/department-of-pharmacy-practice-mrs-p-aishwaryah-assistant-professor-dept-of-pharmacy-practice.jpg",
    },
  ],
};

/** Senior faculty shown on the home page slider. */
export const HOME_FACULTY: FacultyMember[] = [
  {
    name: "Dr. A. Meena",
    designation: "Principal — Professor, Dept. of Pharmaceutical Chemistry",
    src: "/kkcp/web/home/7-kkcp-faculty-1-dr-a-meena-principal-prof-dept-of-pharmaceutical-chemistry.jpg",
  },
  {
    name: "Dr. A. Shanthy",
    designation: "Dean of Academics",
    src: "/kkcp/web/home/7-kkcp-faculty-2-dr-a-shanthy-dean-of-academics.jpg",
  },
  {
    name: "Dr. C. Senthilkumari",
    designation: "Professor, Dept. of Pharmacology",
    src: "/kkcp/web/home/7-kkcp-faculty-dr-c-senthilkumari-prof-dept-of-pharmacology.jpg",
  },
  {
    name: "Dr. K. Karthick",
    designation: "Professor, Dept. of Pharmaceutics",
    src: "/kkcp/web/home/7-kkcp-faculty-dr-k-karthik-prof-dept-of-pharmaceutics.jpg",
  },
  {
    name: "Dr. M. Vani",
    designation: "Professor, Dept. of Pharmaceutics",
    src: "/kkcp/web/home/7-kkcp-faculty-dr-m-vani-prof-dept-of-pharmaceutics.jpg",
  },
  {
    name: "Dr. S. Ramalakshmi",
    designation: "HOD, Dept. of Pharmacy Practice",
    src: "/kkcp/web/home/7-kkcp-faculty-dr-s-ramalakshmi-hod-dept-of-pharmacy-practice.jpg",
  },
  {
    name: "Dr. S. Sivaneswari",
    designation: "Professor, Dept. of Pharmaceutics",
    src: "/kkcp/web/home/7-kkcp-faculty-dr-s-sivaneswari-prof-dept-of-pharmaceutics.jpg",
  },
  {
    name: "Dr. S. Vedhapal Jeyamani",
    designation: "Professor, Dept. of Pharmacy Practice",
    src: "/kkcp/web/home/7-kkcp-faculty-dr-s-vedhapal-jayamani-prof-dept-of-pharmacy-practice.jpg",
  },
  {
    name: "Dr. V. Prema",
    designation: "Professor, Dept. of Pharmaceutical Chemistry",
    src: "/kkcp/web/home/7-kkcp-faculty-dr-v-prema-prof-dept-of-pharmaceutical-chemistry.jpg",
  },
  {
    name: "Mrs. S. Thamizharasi",
    designation: "Professor, Dept. of Pharmacognosy",
    src: "/kkcp/web/home/7-kkcp-faculty-mrs-s-thamizharasi-prof-dept-of-pharmacognosy.jpg",
  },
  {
    name: "Prof. S. L. Laura",
    designation: "Associate Professor, Dept. of Pharmaceutics",
    src: "/kkcp/web/home/7-kkcp-faculty-prof-s-l-laura-dept-of-pharmaceutics.jpg",
  },
];

/** Management portraits for the About page message slider, keyed by role. */
export const MANAGEMENT_PORTRAITS: Record<string, string> = {
  "Chairman":
    "/kkcp/web/about/3-messages-from-the-management-prof-kr-arumugam-m-pharm-chairman-ultra-group-of-institutions.jpg",
  "Vice-Chairman":
    "/kkcp/web/about/3-messages-from-the-management-dr-a-babu-thandapani-m-pharm-ph-d-vice-chairman-ultra-group-of-institutions.jpg",
  "Principal":
    "/kkcp/web/about/3-messages-from-the-management-dr-a-meena-m-pharm-ph-d-principal-k-k-college-of-pharmacy.jpg",
  "Vice-Principal":
    "/kkcp/web/about/3-messages-from-the-management-dr-a-shanthi-m-pharm-ph-d-vice-principal-k-k-college-of-pharmacy.jpg",
};
