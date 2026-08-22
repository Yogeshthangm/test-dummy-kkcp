"use client";

import { HeroSlider } from "./HeroSlider";
import ImageSlider from "./ImageSlider";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Container */}
      <div
        className="
          relative
          h-150!
          w-full
          sm:h-162.5!
          md:h-187.5!
          lg:h-212.5!
          xl:h-225!
          2xl:h-240!
        "
      >
        {/* ============================================
            BACKGROUND IMAGE SLIDER
        ============================================ */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <ImageSlider />
        </div>

        {/* ============================================
            DARK OVERLAY
        ============================================ */}
        <div className="absolute inset-0 z-1! bg-black/30" />

        {/* ============================================
            HERO CONTENT - CENTERED
        ============================================ */}
        <div
          className="
            absolute
            inset-0
            z-10
            flex
            w-full
            items-center
            justify-center
            px-5
            text-center

            sm:px-8
            md:px-10
            lg:px-16
            xl:px-17
          "
        >
          <div className="flex w-full flex-col items-center justify-center">
            {/* College Name */}
            <p
              className="
                mb-3
                font-serif
                text-sm
                font-medium
                tracking-[1px]
                text-white
                sm:text-base
                md:text-lg
              "
            >
              K.K. College of Pharmacy
            </p>

            {/* Hero Slider Text */}
            <div
              className="
                mx-auto
                w-full
                max-w-250
                font-serif
                text-3xl
                font-semibold
                leading-tight
                tracking-[1px]
                text-center
                text-white
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-[60px]
                xl:leading-17.5
              "
            >
              <HeroSlider />
            </div>
          </div>
        </div>

        {/* ============================================
            BOTTOM GRADIENT
        ============================================ */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-5
            h-32
            w-full
            bg-linear-to-t
            from-black/50
            to-transparent
          "
        />
      </div>
    </section>
  );
}