// Single source of truth for the KKCP site navigation.
// Mirrors the real kkcp.ac.in menu structure and slugs exactly.

export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  {
    label: "Campus",
    href: "#",
    children: [
      { label: "Smart-Class Rooms", href: "/smart-class-rooms/" },
      { label: "Library", href: "/laboratory/" },
      { label: "Laboratory", href: "/laboratory-2/" },
      { label: "Drug Information Centre", href: "/drug-information-centre/" },
      { label: "Animal House Facility", href: "/animal-house-facility/" },
      { label: "Transport", href: "/transport/" },
      { label: "Security", href: "/security/" },
      { label: "RO Water Plant", href: "/ro-water-plant/" },
      { label: "Hostel", href: "/hostel/" },
    ],
  },
  {
    label: "Courses",
    href: "#",
    children: [
      { label: "Diploma in Pharmacy", href: "/diploma-in-pharmacy/" },
      { label: "Bachelor of Pharmacy", href: "/bachelor-of-pharmacy/" },
      { label: "Master of Pharmacy", href: "/master-of-pharmacy/" },
      { label: "Doctor of Pharmacy", href: "/doctor-of-pharmacy/" },
      { label: "Doctor of Pharmacy(PB)", href: "/doctor-of-pharmacypb/" },
      { label: "Ph.D.", href: "/ph-d/" },
    ],
  },
  {
    label: "Department",
    href: "#",
    children: [
      { label: "Pharmaceutics", href: "/pharmaceutics/" },
      { label: "Pharmacology", href: "/pharmacology/" },
      { label: "Pharmaceutical Chemistry", href: "/pharmaceutical-chemistry/" },
      { label: "Pharmacognosy", href: "/pharmacognosy/" },
      { label: "Pharmacy Practice", href: "/pharmacy-practice/" },
      { label: "Regulatory Affairs", href: "/regulatory-affairs/" },
    ],
  },
  {
    label: "Research",
    href: "#",
    children: [{ label: "Publications", href: "/publications/" }],
  },
  {
    label: "Student",
    href: "#",
    children: [
      { label: "Student Services", href: "/student-services/" },
      { label: "Placement", href: "/placement/" },
      { label: "Job Opportunities", href: "/job-opportunities/" },
      {
        label: "Alumni",
        href: "/alumni/",
        children: [
          { label: "Alumni Registration", href: "/alumni-registration/" },
          { label: "Alumni Contribution", href: "/alumni-contribution/" },
          { label: "Alumni General Meeting", href: "/alumni-general-meeting/" },
          { label: "Alumni Meet", href: "/alumni-meet/" },
        ],
      },
    ],
  },
  {
    label: "Gallery",
    href: "#",
    children: [{ label: "News", href: "/news/" }],
  },
  { label: "Apply Online", href: "/apply-online/" },
  { label: "Contact", href: "/contact/" },
];

// Contact details carried verbatim from kkcp.ac.in (header bar + footer).
export const CONTACT = {
  phones: ["044-23821272", "0-9841259415"],
  email: "kkcpchennai@gmail.com",
  address:
    "1/161, KRA Campus, Sankaralinganar Street, Gerugambakkam, Chennai",
  footerAddress:
    "1/161, KRA Campus, Sankaralinganar Street, Gerugambakkam, Chennai-600 128",
  footerPhones: ["+91 - 9629059993", "9629159993"],
};

export const ANNOUNCEMENT =
  "We are happy to announce that PCI has approved M.Pharm Pharmacy Practice and M.Pharm Regulatory Affairs, with 15 seats in each branch. Recognized Research Centre – The Tamil Nadu Dr. M.G.R. Medical University. Admissions Open 2025–26";
