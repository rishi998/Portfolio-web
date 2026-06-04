"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { WorkMedia } from "@/components/ui/WorkMedia";

type HeroBackgroundProps = {
  scrollRef: React.RefObject<HTMLElement | null>;
};

export function HeroBackground({ scrollRef }: HeroBackgroundProps) {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <motion.div
      style={{ y: bgY, scale: bgScale }}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <WorkMedia
        path="SPA/render/NEW 8.jpg"
        alt=""
        className="object-cover"
        sizes="100vw"
        priority
        contained={false}
      />

      <div className="absolute inset-0 bg-background/50 dark:bg-obsidian/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
    </motion.div>
  );
}
