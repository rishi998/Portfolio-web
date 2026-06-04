"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PROCESS_STEPS } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export function ProcessTimeline() {
  return (
    <section aria-labelledby="process-heading" className="bg-concrete py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionLabel>Our Process</SectionLabel>
          <h2 id="process-heading" className="mt-4 font-display text-3xl sm:text-5xl">
            From Discovery to Delivery
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex gap-4 overflow-x-auto pb-4 scrollbar-thin md:grid md:grid-cols-5 md:gap-5 md:overflow-visible"
        >
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-brass/30 md:block"
          />
          {PROCESS_STEPS.map((step) => (
            <motion.article
              key={step.step}
              variants={staggerItem}
              className="card-lift relative min-w-[220px] flex-shrink-0 rounded-2xl border border-border/80 bg-sand p-6 shadow-sm md:min-w-0"
            >
              <span className="font-display text-3xl text-brass">{step.step}</span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
