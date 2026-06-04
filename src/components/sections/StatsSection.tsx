"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { STUDIO_STATS } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export function StatsSection() {
  return (
    <section aria-label="Studio credentials" className="bg-stats py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <SectionLabel>Trust &amp; Authority</SectionLabel>
          <h2 className="mt-4 font-display text-3xl text-sand sm:text-4xl">
            Built on Precision. Proven Across NCR.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6"
        >
          {STUDIO_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="glass-dark rounded-2xl p-6 text-center sm:p-8"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-stone/75">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
