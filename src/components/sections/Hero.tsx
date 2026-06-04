"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { workAsset } from "@/lib/work-assets";
import { WorkMedia } from "@/components/ui/WorkMedia";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HERO_STATS, STUDIO_NAME, STUDIO_ROLE, WHATSAPP_URL } from "@/lib/constants";
import { fadeUp, springHeavy, staggerContainer, staggerItem } from "@/lib/motion";

const HERO_VIDEO = "SPA/render/Clip 1.mp4";
const HERO_POSTER = "SPA/render/NEW 8.jpg";

function useHeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("webkit-playsinline", "true");

    const play = () => {
      video.muted = true;
      void video.play().catch(() => {
        /* Autoplay blocked until user gesture on some mobile browsers */
      });
    };

    play();

    video.addEventListener("loadeddata", play);
    video.addEventListener("canplay", play);

    const onVisible = () => {
      if (document.visibilityState === "visible") play();
    };

    document.addEventListener("visibilitychange", onVisible);
    document.addEventListener("touchstart", play, { once: true, passive: true });

    return () => {
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("canplay", play);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return videoRef;
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useHeroBackgroundVideo();

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Introduction"
      className="site-main-min-h relative overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0 min-h-full min-w-full">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover [transform:translateZ(0)]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={workAsset(HERO_POSTER)}
          aria-hidden
        >
          <source src={workAsset(HERO_VIDEO)} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/45 via-charcoal/25 to-charcoal/15 md:from-charcoal md:via-charcoal/85 md:to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent md:from-charcoal md:via-transparent md:to-charcoal/30" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent from-[35%] via-charcoal/25 to-charcoal/70 md:hidden"
          aria-hidden
        />
      </div>

      <div className="site-main-min-h relative mx-auto grid max-w-7xl gap-8 px-4 py-6 sm:gap-10 sm:px-6 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-end pt-[38vh] sm:pt-[30vh] lg:justify-center lg:pt-0">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <SectionLabel>
              {STUDIO_NAME} · {STUDIO_ROLE}
            </SectionLabel>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...springHeavy, delay: 0.06 }}
            className="mt-3 max-w-xl font-display text-[1.75rem] leading-[1.08] text-sand sm:mt-5 sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Designing Spaces That{" "}
            <span className="text-brass">Endure.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...springHeavy, delay: 0.12 }}
            className="mt-4 max-w-md text-sm leading-relaxed text-stone/90 sm:mt-6 sm:text-base md:text-lg"
          >
            Architecture rooted in function. Refined through detail — from intimate
            interiors to urban masterplans across NCR and beyond.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...springHeavy, delay: 0.18 }}
            className="mt-5 flex w-full flex-col gap-2.5 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <MagneticButton
              href="#featured"
              className="w-full rounded-full bg-brass px-6 py-3 text-center text-sm font-semibold text-charcoal shadow-lg shadow-brass/20 sm:w-auto sm:px-7 sm:py-3.5"
            >
              View Featured Work
            </MagneticButton>
            <MagneticButton
              href={WHATSAPP_URL}
              className="glass-dark w-full rounded-full px-6 py-3 text-center text-sm font-medium text-sand sm:w-auto sm:px-7 sm:py-3.5"
            >
              Book Consultation
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-5 flex flex-wrap gap-4 border-t border-brass/25 pt-5 sm:mt-10 sm:gap-6 sm:pt-8 lg:mt-14"
          >
            {HERO_STATS.map((s) => (
              <motion.div key={s.label} variants={staggerItem}>
                <p className="font-display text-xl text-brass sm:text-2xl">{s.value}</p>
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
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-stone/60 sm:bottom-6"
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
