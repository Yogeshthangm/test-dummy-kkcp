"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/kkcp/web/home/1-home-page-next-to-footer-portion-img-0286.webp",
  "/kkcp/web/home/1-home-page-next-to-footer-portion-img-0336.webp",
  "/kkcp/web/home/1-home-page-next-to-footer-portion-img-0348.webp",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-[8] h-full w-full overflow-hidden">
      {images.map((image, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={image}
            className={`absolute inset-0 h-full w-full transition-all duration-1800 ease-in-out ${
              isActive
                ? "translate-x-0 opacity-100"
                : "translate-x-[-12%] opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Banner ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        );
      })}
    </div>
  );
}