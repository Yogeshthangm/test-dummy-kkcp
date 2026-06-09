"use client";
import { useState } from "react";

interface Card {
  name: string;
  role: string;
  body: string; // may contain <br /> tags
}

export function MessageSlider({ cards }: { cards: Card[] }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + cards.length) % cards.length);
  const next = () => setIdx(i => (i + 1) % cards.length);
  const card = cards[idx];

  return (
    <div style={{ width: "100%" }}>
      <style>{`
        .kkcp-msg-slider-wrap{position:relative;background:#fff;border-radius:12px;padding:40px 80px;box-shadow:0 4px 24px rgba(0,0,0,.08);width:100%;box-sizing:border-box;}
        .kkcp-msg-slider-wrap .quote-icon{font-size:42px;color:#c8a23a;line-height:1;margin-bottom:18px;}
        .kkcp-msg-slider-wrap .rating{font-size:22px;font-weight:700;color:#1a1a2e;margin-bottom:4px;}
        .kkcp-msg-slider-wrap .stars{color:#e8a020;font-size:18px;margin-bottom:22px;}
        .kkcp-msg-slider-wrap .body{font-size:16px;line-height:1.9;color:#3d435a;font-style:italic;margin-bottom:28px;}
        .kkcp-msg-slider-wrap .meta-name{font-family:'Bitter',Georgia,serif;font-size:18px;font-weight:700;color:#13265e;}
        .kkcp-msg-slider-wrap .meta-role{font-size:14px;color:#7a8095;margin-top:4px;}
        .kkcp-nav-btn{position:absolute;top:50%;transform:translateY(-50%);background:#13265e;color:#fff;border:none;border-radius:50%;width:44px;height:44px;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,.18);transition:background .2s;}
        .kkcp-nav-btn:hover{background:#c8a23a;}
        .kkcp-nav-btn.prev{left:18px;}
        .kkcp-nav-btn.next{right:18px;}
        .kkcp-slider-dots{display:flex;justify-content:center;gap:8px;margin-top:24px;}
        .kkcp-slider-dots span{width:10px;height:10px;border-radius:50%;background:#ccd0e0;display:inline-block;cursor:pointer;transition:background .2s;}
        .kkcp-slider-dots span.active{background:#13265e;}
      `}</style>

      <div className="kkcp-msg-slider-wrap">
        <button className="kkcp-nav-btn prev" onClick={prev} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button className="kkcp-nav-btn next" onClick={next} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>

        <div className="quote-icon">&#8221;</div>
        <div
          className="body"
          dangerouslySetInnerHTML={{ __html: card.body }}
        />
        <div className="meta-name">{card.name}</div>
        <div className="meta-role">{card.role}</div>
      </div>

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
  );
}
