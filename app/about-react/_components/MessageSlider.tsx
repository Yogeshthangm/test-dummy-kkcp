"use client";
import { useState } from "react";

interface Card {
  name: string;
  role: string;  // may contain <br /> tags
  title: string;
  body: string;  // may contain <br /> tags
  photo?: string;  // portrait src from lib/faculty MANAGEMENT_PORTRAITS
}

// Management messages — full-width band: portrait + title/name on the LEFT, message body on the
// RIGHT. Slider (prev/next/dots) cycles the cards. All copy is passed in verbatim (ICPR); this
// component only lays it out. body/role may carry <br /> from the source, hence the controlled
// dangerouslySetInnerHTML on those two fields only.
export function MessageSlider({ cards }: { cards: Card[] }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + cards.length) % cards.length);
  const next = () => setIdx(i => (i + 1) % cards.length);
  const card = cards[idx];

  return (
    <div className="kkcp-msg-fullbleed">
      <style>{`
        /* Full-bleed: break out of the boxed content column to the full viewport width.
           The About page's theme CSS clips horizontal overflow, so 100vw is safe here. */
        .kkcp-msg-fullbleed{
          position:relative; width:100vw; left:50%; right:50%;
          margin-left:-50vw; margin-right:-50vw;
          background:#f6f4ee; padding:72px 0; margin-top:40px;
        }
        .kkcp-msg-inner{
          width:100%; max-width:1500px; margin:0 auto; padding:0 40px; box-sizing:border-box;
          display:grid; grid-template-columns:440px 1fr; gap:60px; align-items:start;
        }
        /* LEFT: image + titles */
        .kkcp-msg-left{position:relative;}
        .kkcp-msg-photo{
          width:100%; aspect-ratio:4 / 5; object-fit:cover; object-position:top center;
          border-radius:16px; background:#eef2f6;
          box-shadow:0 18px 48px rgba(5,20,53,.18); display:block;
        }
        .kkcp-msg-left .quote-icon{
          font-family:"Bitter",Georgia,serif; font-size:64px; line-height:.6; color:#c8a23a;
          margin:22px 0 10px; display:block;
        }
        .kkcp-msg-left .msg-title{
          font-family:"Bitter",Georgia,serif; font-size:30px; font-weight:700; line-height:1.25;
          color:#13265e; margin:0 0 14px;
        }
        .kkcp-msg-left .meta-name{
          font-family:"Bitter",Georgia,serif; font-size:20px; font-weight:700; color:#13265e;
        }
        .kkcp-msg-left .meta-role{font-size:15px; line-height:1.5; color:#7a8095; margin-top:5px;}
        /* RIGHT: message body */
        .kkcp-msg-right .body{
          font-size:19px; line-height:1.95; color:#3d435a; font-style:italic; max-width:80%
        }
        .kkcp-msg-right .body p, .kkcp-msg-right .body{margin-top:0;}
        /* controls */
        .kkcp-msg-controls{display:flex; align-items:center; gap:12px; margin-top:30px;}
        /* minimal: thin chevron on a subtle circular background.
           !important overrides the theme's global .kkcp-root button fill/padding/radius. */
        .kkcp-msg-fullbleed .kkcp-nav-btn{
          background:#fff !important; color:#13265e; border:1px solid rgba(19,38,94,.22) !important;
          border-radius:50% !important; width:44px !important; height:44px !important;
          padding:0 !important; box-shadow:none !important;
          cursor:pointer; display:grid; place-items:center; box-sizing:border-box;
          transition:background .2s, color .2s, border-color .2s, transform .2s;
        }
        .kkcp-msg-fullbleed .kkcp-nav-btn:hover{
          background:#13265e !important; color:#fff; border-color:#13265e !important; transform:translateY(-2px);
        }
        .kkcp-slider-dots{display:flex; gap:9px;}
        .kkcp-slider-dots span{
          width:11px; height:11px; border-radius:50%; background:#ccd0e0;
          display:inline-block; cursor:pointer; transition:background .2s;
        }
        .kkcp-slider-dots span.active{background:#13265e;}

        @media (max-width:1024px){
          .kkcp-msg-inner{grid-template-columns:340px 1fr; gap:40px;}
          .kkcp-msg-right .body{font-size:17px;}
        }
        @media (max-width:767px){
          .kkcp-msg-fullbleed{padding:48px 0;}
          .kkcp-msg-inner{grid-template-columns:1fr; gap:26px; padding:0 22px;}
          .kkcp-msg-photo{aspect-ratio:3 / 3.4; max-width:320px;}
          .kkcp-msg-left .msg-title{font-size:24px;}
          .kkcp-msg-right .body{font-size:16px; line-height:1.85;}
        }
      `}</style>

      <div className="kkcp-msg-inner">
        <div className="kkcp-msg-left">
          {card.photo && (
            <img className="kkcp-msg-photo" src={card.photo} alt={card.name} />
          )}
          <span className="quote-icon" aria-hidden="true">&#8221;</span>
       
          <div className="meta-name">{card.name}</div>
          <div className="meta-role" dangerouslySetInnerHTML={{ __html: card.role }} />

          <div className="kkcp-msg-controls">
            <button className="kkcp-nav-btn prev" onClick={prev} aria-label="Previous message">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className="kkcp-nav-btn next" onClick={next} aria-label="Next message">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            <div className="kkcp-slider-dots">
              {cards.map((_, i) => (
                <span
                  key={i}
                  className={i === idx ? "active" : ""}
                  onClick={() => setIdx(i)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="kkcp-msg-right">
             <h2 className="msg-title">{card.title}</h2>
          <div className="body text-justify" dangerouslySetInnerHTML={{ __html: card.body }} />
        </div>
      </div>
    </div>
  );
}
