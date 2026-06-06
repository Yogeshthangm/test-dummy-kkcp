// Hand-authored React section (no iframe, no dangerouslySetInnerHTML).
// Content is reproduced VERBATIM from the source copy — not corrected, reworded,
// reformatted, or reinterpreted in any way (see ICPR). Styling follows the site's
// design language: Bitter headings, Roboto body, deep-blue (#034EA2 / #003A65)
// with a gold (#FDC72F) accent, white rounded cards.
/* eslint-disable react/no-unescaped-entities */

type Facility = {
  heading: string;
  subtitle?: string;
  paras: string[];
};

const FACILITIES: Facility[] = [
  {
    heading: "1 Campus → Smart-Class Rooms",
    paras: [
      "We provide top-notch facilities aimed at delivering the finest learning environment for our students. Our air-conditioned classrooms are equipped with modern infrastructure and advanced technology, including high-definition screens, to foster an engaging and immersive educational experience. Our committed and well-trained staff guarantee that each student receives quality education along with personalized attention.",
      "Every classroom is outfitted with modern, ergonomic furniture to promote comfort and concentration throughout the day. We encourage you to visit our campus and witness our inviting and academically stimulating environment. At our college, we genuinely prioritize our students' well-being and are dedicated to nurturing both personal development and academic success.",
    ],
  },
  {
    heading: "2 Campus → Library",
    subtitle: "Library",
    paras: [
      "Our college library serves as a haven for knowledge seekers, featuring a vast array of books across numerous disciplines, such as Pharmaceutics, Pharmacy Practice, Pharmacognosy, Pharmaceutical Analysis, Pharmaceutical Chemistry, Community Pharmacy, Clinical & Pharmacology, Hospital Pharmacy, Pharmaceutical Regulatory Affairs and Computer Science.",
      "We offer a diverse selection of national and international journals, along with subscriptions to E-Journals. The library is equipped with broadband internet access and Wi-Fi, ensuring students can easily connect to resources.",
      "Our library creates a tranquil atmosphere that promotes learning and intellectual development. Our dedicated librarians and faculty members are always ready to support students with their research needs.",
      "Additionally, the library is equipped with modern facilities, including computer terminals and printers. We invite you to explore our extensive collection, enjoy the joys of reading & uncover new knowledge at our college library.",
    ],
  },
  {
    heading: "3 Campus → Laboratory",
    paras: [
      "We are proud to offer our students exceptional laboratory facilities. Equipped with state-of-the-art instruments and apparatus, students can safely participate in a variety of hands-on experiments pertinent to their selected fields. Our lab equipment is consistently updated and our extensive assortment of glassware & chemicals is readily accessible for student use. Our labs in Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmacy Practice, Pharmacognosy, Pharmaceutical Analysis, Pharmaceutical Biotechnology, Human Anatomy and Physiology and Computer Science adhere to the highest safety and quality standards, guaranteeing that students enjoy valuable laboratory experiences.",
    ],
  },
  {
    heading: "4 Campus → Drug Information Centre",
    paras: [
      "The Drug Information Centre (DIC), located within Dr. Kamakshi Memorial Hospital in Pallikaranai, a tertiary-care facility with 300 beds, serves as a prime example of a modern resource hub. It offers comprehensive access to various drug information dissemination tools, including internet-enabled computers, books & software applications like the esteemed Lexicomp. The DIC is committed to providing timely, evidence-based answers to inquiries from both healthcare professionals and patients, with the goal of promoting the safe and responsible use of pharmaceutical products.",
    ],
  },
  {
    heading: "5 Campus →Animal House Facility",
    paras: [
      "The Animal House at our institution is a meticulously maintained and ethically operated facility designed to facilitate pre-clinical and pharmacological research endeavors. It offers a regulated environment for the care and upkeep of laboratory animals utilized in scientific studies.",
      "Our facility adheres rigorously to the guidelines set forth by the Committee for the Purpose of Control and Supervision of Experiments on Animals (CPCSEA), Government of India (Registration No. 1395/a/10/CPCSEA), guaranteeing the utmost standards of animal welfare and ethical adherence.",
    ],
  },
  {
    heading: "6 Campus → TRANSPORT",
    subtitle: "Reliable and Safe College Transport",
    paras: [
      "Our college provides convenient transportation services that link students to different areas of the city.",
      "With skilled and timely drivers, we guarantee that students arrive at their destinations safely and punctually.",
      "Our fleet of well-kept buses is outfitted with contemporary safety features, such as GPS tracking and CCTV cameras, ensuring peace of mind for both students and their parents.",
      "From morning pickups to evening drop-offs, our transportation system emphasizes comfort, safety and dependability, demonstrating our dedication to student convenience.",
    ],
  },
  {
    heading: "7 Campus → Security",
    paras: [
      "The institute has a foolproof security system in place. There is a strong emphasis on maintaining a stringent security protocol throughout the campus. The entire college grounds are monitored by CCTV cameras, and we have highly trained security personnel stationed at the college entrance.",
      "In total, there are 84 state-of-the-art Hikvision cameras that provide top-notch recording quality. These measures assist in observing student behavior and ensuring their safety and security.",
    ],
  },
  {
    heading: "8 Campus → RO Water Plant",
    paras: [
      "The Institution operates a Reverse Osmosis (RO) plant to supply drinking water to college students. The entire campus is equipped with pure Reverse Osmosis (RO) drinking water, complemented by water coolers on every floor to ensure that students have access to clean and safe drinking water.",
    ],
  },
  {
    heading: "9 Campus → Hostel Facilities",
    paras: [
      "Our hostel is situated directly across from our campus, offering an optimal learning atmosphere and cost-effectiveness. We provide distinct accommodations for girls and boys.",
    ],
  },
];

export function CampusFacilities() {
  return (
    <section className="campus-facilities" aria-label="Campus">
      <style>{`
        .campus-facilities {
          background: #f5f7fb;
          padding: 70px 20px 80px;
          font-family: 'Roboto', Arial, sans-serif;
        }
        .campus-facilities .cf-inner {
          max-width: 1140px;
          margin: 0 auto;
        }
        .campus-facilities .cf-title {
          font-family: 'Bitter', serif;
          font-weight: 600;
          font-size: 42px;
          line-height: 1.15;
          color: #034EA2;
          margin: 0 0 8px;
          text-align: center;
        }
        .campus-facilities .cf-title::after {
          content: "";
          display: block;
          width: 84px;
          height: 4px;
          background: #FDC72F;
          border-radius: 4px;
          margin: 16px auto 0;
        }
        .campus-facilities .cf-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-top: 48px;
        }
        @media (min-width: 860px) {
          .campus-facilities .cf-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .campus-facilities .cf-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #e6e6e6;
          border-left: 5px solid #FDC72F;
          border-radius: 12px;
          padding: 28px 28px 24px;
          box-shadow: 0 6px 22px rgba(3, 78, 162, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .campus-facilities .cf-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(3, 78, 162, 0.12);
        }
        .campus-facilities .cf-heading {
          font-family: 'Bitter', serif;
          font-weight: 600;
          font-size: 22px;
          line-height: 1.3;
          color: #003A65;
          margin: 0 0 6px;
        }
        .campus-facilities .cf-subtitle {
          font-family: 'Bitter', serif;
          font-weight: 600;
          font-size: 18px;
          color: #034EA2;
          margin: 0 0 14px;
        }
        .campus-facilities .cf-card p {
          font-family: 'Roboto', Arial, sans-serif;
          font-size: 15.5px;
          line-height: 1.75;
          color: #3a3a3a;
          margin: 0 0 14px;
        }
        .campus-facilities .cf-card p:last-child {
          margin-bottom: 0;
        }
      `}</style>
      <div className="cf-inner">
        <h2 className="cf-title">Campus</h2>
        <div className="cf-grid">
          {FACILITIES.map((f) => (
            <article className="cf-card" key={f.heading}>
              <h3 className="cf-heading">{f.heading}</h3>
              {f.subtitle ? <p className="cf-subtitle">{f.subtitle}</p> : null}
              {f.paras.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
