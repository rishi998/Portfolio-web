"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WorkMedia } from "@/components/ui/WorkMedia";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { projects } from "@/data/projects";
import { fadeUp, springHeavy } from "@/lib/motion";

const featured = projects.find((p) => p.id === "spa-wellness-interior")!;

export function FeaturedProject() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="featured"
        aria-labelledby="featured-heading"
        className="relative overflow-hidden bg-sand py-20 sm:py-28"
      >
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brass/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <SectionLabel>Editorial Feature</SectionLabel>
            <h2 id="featured-heading" className="mt-4 font-display text-3xl sm:text-5xl">
              Case Study
            </h2>
          </motion.div>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={springHeavy}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-2xl"
              onClick={() => setOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
            >
              <div className="relative aspect-[4/3] min-h-[280px] lg:aspect-[16/11]">
                <WorkMedia
                  path={featured.cover}
                  alt={featured.name}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-widest text-brass">
                {featured.typology} · {featured.year}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl leading-snug sm:text-4xl">{featured.name}</h3>
              <p className="mt-2 font-mono text-xs text-muted">{featured.location}</p>
              <div className="brass-line my-8" />

              <div className="space-y-6 text-base leading-relaxed text-muted">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-brass">
                    The Brief
                  </p>
                  <p className="mt-2">{featured.description}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-brass">
                    Design Philosophy
                  </p>
                  <p className="mt-2">
                    Calm material palettes, therapeutic circulation, and light choreography —
                    translating wellness programming into an editorial interior narrative.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-brass">
                    Materials &amp; Results
                  </p>
                  <p className="mt-2">
                    Natural stone, warm timber accents, and layered lighting. Delivered as
                    full visualization set with technical layout PDFs.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full border border-brass/40 bg-charcoal px-6 py-3 text-sm font-medium text-brass transition-colors hover:bg-graphite"
              >
                View Case Study
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <ProjectModal project={open ? featured : null} onClose={() => setOpen(false)} />
    </>
  );
}
