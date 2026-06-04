"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { workAsset } from "@/lib/work-assets";
import { WorkMedia } from "@/components/ui/WorkMedia";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HERO_STATS, WHATSAPP_URL } from "@/lib/constants";
import { fadeUp, springHeavy, staggerContainer, staggerItem } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Introduction"
      className="relative overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={workAsset("SPA/render/NEW 8.jpg")}
          aria-hidden
        >
          <source src={workAsset("SPA/render/Clip 1.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100dvh-5.25rem)] max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-end lg:justify-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <SectionLabel>Puja Daksh · Architecture Studio</SectionLabel>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...springHeavy, delay: 0.06 }}
            className="mt-5 max-w-xl font-display text-[2rem] leading-[1.08] text-sand sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Designing Spaces That{" "}
            <span className="text-brass">Endure.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...springHeavy, delay: 0.12 }}
            className="mt-6 max-w-md text-base leading-relaxed text-stone/90 sm:text-lg"
          >
            Architecture rooted in function. Refined through detail — from intimate
            interiors to urban masterplans across NCR and beyond.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...springHeavy, delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <MagneticButton
              href="#featured"
              className="rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-charcoal shadow-lg shadow-brass/20"
            >
              View Featured Work
            </MagneticButton>
            <MagneticButton
              href={WHATSAPP_URL}
              className="glass-dark rounded-full px-7 py-3.5 text-sm font-medium text-sand"
            >
              Book Consultation
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-6 border-t border-brass/25 pt-8 lg:mt-14"
          >
            {HERO_STATS.map((s) => (
              <motion.div key={s.label} variants={staggerItem}>
                <p className="font-display text-2xl text-brass">{s.value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-stone/70">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...springHeavy, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="glass-dark overflow-hidden rounded-2xl p-3 shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <WorkMedia
                path="105 noida/render/bed room 1 (a).png"
                alt="Featured residential render"
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
          <div className="glass-panel absolute -bottom-6 -left-6 max-w-[220px] rounded-xl p-5 shadow-xl">
            <p className="font-mono text-[9px] uppercase tracking-widest text-brass">
              Featured Render
            </p>
            <p className="mt-2 font-display text-lg text-charcoal">Sector 105 Residence</p>
            <p className="mt-1 text-xs text-muted">Residential · Noida</p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-stone/60"
        aria-label="Scroll to portfolio"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.4em]">Explore</span>
        <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>
          <ChevronDown className="h-4 w-4 text-brass" />
        </motion.span>
      </motion.a>
    </section>
  );
}
