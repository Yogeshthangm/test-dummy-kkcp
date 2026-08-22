"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  target: number;
  duration?: number;
};

export default function AnimatedCounter({
  target,
  duration = 3000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        const start = performance.now();

        const animate = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);

          const easeOut = 1 - Math.pow(1 - progress, 3);

          setCount(Math.floor(easeOut * target));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(target);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      <h2 className="text-white! mb-0!">{count}</h2>
    </span>
  );
}
