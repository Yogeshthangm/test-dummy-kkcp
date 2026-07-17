/**
 * Redesigned homepage "Admissions Open Now" section.
 *
 * The surrounding mirror ships a ~1.2MB theme stylesheet scoped under
 * `.kkcp-root` that resets padding/margins on containers and restyles anchors,
 * overriding Tailwind utilities. To stay immune, all layout lives in the
 * co-located <style> block below, scoped under #kkcp-admissions (id specificity
 * beats the theme's class selectors, so it wins regardless of load order).
 *
 * All authored copy, form field names, the <select> options, the WPCF7
 * action/hidden fields and the phone number are preserved verbatim from the
 * source mirror — only the visual design changed.
 */

const CSS = `
#kkcp-admissions{
  position:relative;overflow:hidden;box-sizing:border-box;
  padding:64px 16px;
  background:linear-gradient(180deg,#eef2f8 0%,#f4f7fb 45%,#ffffff 100%);
  font-family:Roboto,Arial,Helvetica,sans-serif;
}
#kkcp-admissions *{box-sizing:border-box;}
@media(min-width:768px){#kkcp-admissions{padding:88px 24px;}}
@media(min-width:1024px){#kkcp-admissions{padding:104px 24px;}}

#kkcp-admissions .adm-orb{position:absolute;border-radius:9999px;filter:blur(64px);pointer-events:none;z-index:0;}
#kkcp-admissions .adm-orb-1{top:-96px;left:-96px;width:360px;height:360px;background:radial-gradient(circle,rgba(11,59,107,.28),transparent 70%);}
#kkcp-admissions .adm-orb-2{bottom:-120px;right:-64px;width:440px;height:440px;background:radial-gradient(circle,rgba(245,178,27,.34),transparent 70%);}

#kkcp-admissions .adm-card{
  position:relative;z-index:1;margin:0 auto;max-width:1120px;
  display:grid;grid-template-columns:1fr;
  background:#fff;border-radius:28px;overflow:hidden;
  box-shadow:0 30px 80px -30px rgba(8,40,76,.45);
  outline:1px solid rgba(8,40,76,.06);
}
@media(min-width:1024px){#kkcp-admissions .adm-card{grid-template-columns:1.05fr 1fr;}}

/* ── Left panel ─────────────────────────────── */
#kkcp-admissions .adm-left{
  position:relative;overflow:hidden;
  display:flex;flex-direction:column;justify-content:space-between;gap:36px;
  padding:36px 28px;color:#fff;
  background:linear-gradient(155deg,#0b3b6b 0%,#08284c 100%);
}
@media(min-width:768px){#kkcp-admissions .adm-left{padding:48px;}}
#kkcp-admissions .adm-left::after{
  content:"";position:absolute;top:-80px;right:-80px;width:260px;height:260px;
  border-radius:9999px;filter:blur(40px);
  background:radial-gradient(circle,rgba(245,178,27,.35),transparent 70%);
}

#kkcp-admissions .adm-badge{
  position:relative;z-index:1;display:inline-flex;align-items:center;gap:8px;width:fit-content;
  padding:7px 16px;border-radius:9999px;
  font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#fff;
  background:rgba(255,255,255,.08);border:1px solid rgba(245,178,27,.5);
}
#kkcp-admissions .adm-badge svg{width:16px;height:16px;color:#f5b21b;}

#kkcp-admissions .adm-title{
  position:relative;z-index:1;margin:22px 0 0;
  font-family:Bitter,Georgia,serif;font-weight:700;color:#fff;
  font-size:38px;line-height:1.05;letter-spacing:-.01em;
}
@media(min-width:768px){#kkcp-admissions .adm-title{font-size:50px;}}
#kkcp-admissions .adm-title .u{position:relative;display:inline-block;}
#kkcp-admissions .adm-title .u::after{
  content:"";position:absolute;left:0;bottom:2px;width:100%;height:6px;border-radius:9999px;background:#f5b21b;
}

#kkcp-admissions .adm-desc{
  position:relative;z-index:1;margin:22px 0 0;max-width:30rem;
  font-size:16px;line-height:1.7;color:rgba(255,255,255,.78);
}

#kkcp-admissions .adm-figure{position:relative;z-index:1;}
#kkcp-admissions .adm-figure::before{
  content:"";position:absolute;left:-12px;top:-12px;width:100%;height:100%;
  border-radius:18px;background:#f5b21b;opacity:.85;
}
#kkcp-admissions .adm-figure img{
  position:relative;display:block;width:100%;aspect-ratio:16/9;object-fit:cover;object-position:center 28%;
  border-radius:18px;box-shadow:0 20px 40px -20px rgba(0,0,0,.6);
  outline:1px solid rgba(255,255,255,.12);
}

/* ── Right panel (form) ─────────────────────── */
#kkcp-admissions .adm-right{padding:36px 28px;background:#fff;}
@media(min-width:768px){#kkcp-admissions .adm-right{padding:48px;}}

#kkcp-admissions .adm-formhead{display:flex;align-items:center;gap:12px;margin-bottom:28px;}
#kkcp-admissions .adm-formhead .ic{
  display:flex;align-items:center;justify-content:center;flex:0 0 auto;
  width:48px;height:48px;border-radius:14px;background:rgba(245,178,27,.14);
}
#kkcp-admissions .adm-formhead .ic svg{width:24px;height:24px;color:#0b3b6b;}
#kkcp-admissions .adm-formhead h4{
  margin:0;font-family:Bitter,Georgia,serif;font-weight:700;color:#0f172a;font-size:20px;line-height:1.2;
}
#kkcp-admissions .adm-formhead p{margin:2px 0 0;font-size:13.5px;color:#64748b;}

#kkcp-admissions form{margin:0;}
#kkcp-admissions .adm-hidden{display:none;}
#kkcp-admissions .adm-grid{display:grid;grid-template-columns:1fr;gap:16px;}
@media(min-width:640px){#kkcp-admissions .adm-grid{grid-template-columns:1fr 1fr;}}
#kkcp-admissions .adm-span2{grid-column:1 / -1;}

#kkcp-admissions .adm-field{
  width:100%;margin:0;font-family:inherit;font-size:15px;color:#0f172a;
  padding:13px 16px;border-radius:12px;
  background:#f8fafc;border:1px solid #e2e8f0;box-shadow:0 1px 2px rgba(15,23,42,.04);
  transition:border-color .2s,box-shadow .2s,background .2s;-webkit-appearance:none;appearance:none;
}
#kkcp-admissions .adm-field::placeholder{color:#94a3b8;opacity:1;}
#kkcp-admissions .adm-field:hover{border-color:#cbd5e1;}
#kkcp-admissions .adm-field:focus{
  outline:none;border-color:#0b3b6b;background:#fff;box-shadow:0 0 0 4px rgba(11,59,107,.12);
}
#kkcp-admissions select.adm-field{padding-right:44px;cursor:pointer;color:#0f172a;}

#kkcp-admissions .adm-select{position:relative;}
#kkcp-admissions .adm-select .chev{
  position:absolute;right:16px;top:50%;transform:translateY(-50%);
  width:16px;height:16px;color:#94a3b8;pointer-events:none;
}

#kkcp-admissions .adm-actions{display:flex;flex-direction:column;gap:12px;margin-top:28px;}
@media(min-width:640px){#kkcp-admissions .adm-actions{flex-direction:row;}}

#kkcp-admissions .adm-btn{
  flex:1;display:inline-flex;align-items:center;justify-content:center;gap:8px;
  margin:0;padding:14px 24px;border-radius:12px;
  font-family:inherit;font-size:15px;font-weight:700;text-decoration:none;cursor:pointer;
  transition:transform .2s,box-shadow .2s,background .2s,color .2s;
}
#kkcp-admissions .adm-btn::before,#kkcp-admissions .adm-btn::after{content:none;display:none;}
#kkcp-admissions .adm-btn svg{width:16px;height:16px;}
#kkcp-admissions .adm-apply{
  border:none;color:#08284c;background:#f5b21b;box-shadow:0 12px 24px -8px rgba(245,178,27,.6);
}
#kkcp-admissions .adm-apply:hover{transform:translateY(-2px);box-shadow:0 18px 30px -10px rgba(245,178,27,.7);}
#kkcp-admissions .adm-call{
  color:#0b3b6b;background:transparent;border:2px solid #0b3b6b;
}
#kkcp-admissions .adm-call:hover{background:#0b3b6b;color:#fff;}
`;

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 1 8l11 5 9-4.09V15h2V8L12 3Z" fill="currentColor" />
      <path d="M5 11.5V15c0 1.66 3.13 3 7 3s7-1.34 7-3v-3.5l-7 3.18-7-3.18Z" fill="currentColor" />
    </svg>
  );
}

export function AdmissionsSection() {
  return (
    <section id="kkcp-admissions">
      <style>{CSS}</style>

      <div className="adm-orb adm-orb-1" aria-hidden="true" />
      <div className="adm-orb adm-orb-2" aria-hidden="true" />

      <div className="adm-card">
        {/* ── Left panel: brand copy ───────────────────────── */}
        <div className="adm-left">
          <div>
            <span className="adm-badge">
              <CapIcon />
              Apply for 2026-2027
            </span>

            <h2 className="adm-title">
              Admissions <span className="u">Open</span> Now
            </h2>

            <p className="adm-desc">
              Begin your Pharmacy career at K.K. College of Pharmacy – PCI approved, Tamil Nadu Dr. M.G.R. Medical University affiliated and committed to Pharmaceutical Excellence since 1992.
            </p>
          </div>

          <div className="adm-figure">
            <img
              decoding="async"
              loading="lazy"
              src="/kkcp/web/home/6-campus-life-home-page-0c7a8464.webp"
              alt="Students at K.K. College of Pharmacy"
            />
          </div>
        </div>

        {/* ── Right panel: application form ────────────────── */}
        <div className="adm-right">
          <div className="adm-formhead">
            <span className="ic">
              <CapIcon />
            </span>
            <h4>Application Form</h4>
          </div>

          <form action="/blue/#wpcf7-f6-p51-o1" method="post" aria-label="Contact form" noValidate>
            <fieldset className="adm-hidden" aria-hidden="true">
              <input type="hidden" name="_wpcf7" defaultValue="6" />
              <input type="hidden" name="_wpcf7_version" defaultValue="6.1.5" />
              <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
              <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f6-p51-o1" />
              <input type="hidden" name="_wpcf7_container_post" defaultValue="51" />
              <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue="" />
            </fieldset>

            <div className="adm-grid">
              <input className="adm-field" type="text" name="applicant-name" maxLength={400} placeholder="Name of the Applicant" aria-label="Name of the Applicant" />
              <input className="adm-field" type="text" name="contact" maxLength={400} placeholder="Contact" aria-label="Contact" />
              <input className="adm-field" type="text" name="date-of-birth" placeholder="Date of Birth" aria-label="Date of Birth" />
              <input className="adm-field" type="email" name="your-email" maxLength={400} placeholder="E-mail" aria-label="E-mail" />
              <input className="adm-field" type="text" name="parent-name" maxLength={400} placeholder="Name of the Father / Mother" aria-label="Name of the Father / Mother" />
              <input className="adm-field" type="text" name="last-institute" maxLength={400} placeholder="Name of the Institute last studied" aria-label="Name of the Institute last studied" />

              <div className="adm-select adm-span2">
                <select className="adm-field" name="course" defaultValue="" aria-label="Name of the Course">
                  <option value="">Name of the Course</option>
                  <option value="D.Pharm">D.Pharm</option>
                  <option value="B.Pharm">B.Pharm</option>
                  <option value="M.Pharm">M.Pharm</option>
                  <option value="Pharm.D">Pharm.D</option>
                  <option value="Pharm.D(PB)">Pharm.D(PB)</option>
                  <option value="Ph.D">Ph.D</option>
                </select>
                <svg className="chev" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="m6 8 4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="adm-actions">
              <button className="adm-btn adm-apply" type="submit">
                Apply Now
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <a className="adm-btn adm-call" href="tel:+919841259415">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1l-2.24 2.2Z" />
                </svg>
                Call Now
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
