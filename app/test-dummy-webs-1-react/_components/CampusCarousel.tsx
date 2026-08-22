"use client";

import { useEffect, useState } from "react";

interface Slide {
  image: string;
  title: string;
  alt: string;
}

const slides: Slide[] = [
  {
    image: "/kkcp/web/home/6-campus-life-home-page-0c7a8307.webp",
    title: "Academic Excellence",
    alt: "Academic session in progress at K.K. College of Pharmacy",
  },
  {
    image: "/kkcp/web/home/6-campus-life-home-page-0c7a8408.webp",
    title: "Campus Life",
    alt: "Campus Life",
  },
  {
    image: "/kkcp/web/home/6-campus-life-home-page-0c7a8464.webp",
    title: "Student Activities",
    alt: "Student activities on the K.K. College of Pharmacy campus",
  },
  {
    image: "/kkcp/web/home/4-our-departments-photos-4-pharmacognosy.webp",
    title: "Labs & Facilities",
    alt: "Laboratories and facilities at K.K. College of Pharmacy",
  },
];

export default function CampusCarousel() {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  /* =====================================================
      RESPONSIVE SLIDES
  ===================================================== */
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();

    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  /* =====================================================
      RESET ON RESPONSIVE CHANGE
  ===================================================== */
  useEffect(() => {
    setIsTransitioning(false);
    setCurrent(0);

    const timer = setTimeout(() => {
      setIsTransitioning(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [slidesPerView]);

  /* =====================================================
      CLONED SLIDES
  ===================================================== */
  const clonedSlides = [...slides, ...slides.slice(0, slidesPerView)];

  /* =====================================================
      AUTOPLAY
  ===================================================== */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /* =====================================================
      LOOP RESET
  ===================================================== */
  useEffect(() => {
    if (current === slides.length) {
      const timer = window.setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [current]);

  /* =====================================================
      CARD WIDTH
  ===================================================== */
  const getCardWidth = () => {
    if (slidesPerView === 3) {
      return "calc((100% - 56px) / 3)";
    }

    if (slidesPerView === 2) {
      return "calc((100% - 20px) / 2)";
    }

    return "100%";
  };

  /* =====================================================
      GAP
  ===================================================== */
  const gap = slidesPerView === 3 ? 28 : 20;

  return (
    <section className="w-full overflow-hidden">
      <div className="w-full px-3 sm:px-5 md:px-6 lg:px-0">
        {/* =================================================
            VIEWPORT
        ================================================= */}
        <div className="relative w-full overflow-hidden">
          {/* =================================================
              SLIDER
          ================================================= */}
          <div
            className={`
              flex
              ${
                isTransitioning
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
              }
            `}
            style={{
              gap: `${gap}px`,
              transform: `translateX(calc(-${current} * (${getCardWidth()} + ${gap}px)))`,
            }}
          >
            {clonedSlides.map((slide, index) => (
              <article
                key={`${slide.title}-${index}`}
                className="
                  group
                  relative
                  shrink-0
                  min-w-0
                "
                style={{
                  width: getCardWidth(),
                }}
              >
                {/* =================================================
    CARD
================================================= */}
                <div
                  className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-gray-200
    bg-white
    shadow-sm
    transition-all
    duration-500
    hover:-translate-y-1
    hover:shadow-xl
  "
                >
                  {/* =================================================
    IMAGE
================================================= */}
                  <div
                    className="
    relative
    aspect-16/10
    w-full
    overflow-hidden
    bg-gray-100
  "
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      loading="lazy"
                      className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      transition-transform
      duration-700
      ease-out
      group-hover:scale-105
    "
                    />
                  </div>

                  {/* =================================================
      TITLE AREA
  ================================================= */}
                  <div
                    className="
      relative
      flex
      h-16!
      items-center
      bg-[#f6f4ee]
        px-5
      pr-16
      sm:h-20.5
      sm:px-6
      sm:pr-18
      lg:h-21
      lg:px-7
      lg:pr-19
    "
                  >
                    {/* Orange top accent */}
                    <div
                      className="
        absolute
        left-0
        top-0
        h-1!
        w-0
        bg-[#F58220]
        transition-all
        duration-500
        ease-out
        group-hover:w-full
      "
                    />

                    {/* =================================================
        TITLE
    ================================================= */}
                    <h3
                      className="
        mb-0!
        w-full
        font-serif
        text-[22px]
        font-semibold
        leading-tight
        tracking-tight
        text-[#12203A]
        transition-colors
        duration-300
        mx-3!
        text-center
        sm:text-[24px]
        lg:text-[26px]
      "
                    >
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
