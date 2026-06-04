"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { fadeUp, springHeavy } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[calc(100svh-5.25rem)] min-h-[calc(100dvh-5.25rem)] items-end overflow-hidden pb-20 pt-6 sm:min-h-[calc(100svh-5.75rem)] sm:pb-24 sm:pt-8"
    >
      <HeroBackground scrollRef={ref} />

      <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-teal sm:mb-6 sm:text-xs sm:tracking-[0.35em]"
        >
          Architecture · Spatial Design · NCR
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ ...springHeavy, delay: 0.08 }}
          className="max-w-5xl text-[1.65rem] font-semibold leading-[1.12] tracking-tight text-foreground min-[400px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Crafting Spatial Legacies.
          <br />
          <span className="text-muted">Sustaining Form</span>
          <span className="text-accent"> & </span>
          <span className="text-muted">Function.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ ...springHeavy, delay: 0.16 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:mt-8 sm:text-base md:text-lg"
        >
          Editorial minimalist practice delivering high-contrast spatial narratives
          from concept through technical documentation.
        </motion.p>
      </div>

      <motion.a
        href="#work"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, ...springHeavy }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-muted sm:bottom-10"
        aria-label="Scroll to work section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-accent" strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}
