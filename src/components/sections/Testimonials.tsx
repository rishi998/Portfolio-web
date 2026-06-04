"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-portfolio py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionLabel>Client Voices</SectionLabel>
          <h2 id="testimonials-heading" className="mt-4 font-display text-3xl sm:text-5xl">
            Trusted by Developers &amp; Owners
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.blockquote
              key={t.name}
              variants={staggerItem}
              className="glass-panel card-lift rounded-2xl p-8"
            >
              <Quote className="h-8 w-8 text-brass/60" strokeWidth={1.25} />
              <p className="mt-5 text-base leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-brass/20 pt-5">
                <p className="font-semibold">{t.name}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                  {t.project}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
