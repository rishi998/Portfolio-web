"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 1.8,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / (duration * 60);
    const id = window.setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        window.clearInterval(id);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => window.clearInterval(id);
  }, [inView, value, duration]);

  return (
    <motion.span ref={ref} className="font-display text-4xl text-brass sm:text-5xl md:text-6xl">
      {count}
      {suffix}
    </motion.span>
  );
}
