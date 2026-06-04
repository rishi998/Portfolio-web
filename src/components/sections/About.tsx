"use client";

import { motion } from "framer-motion";
import { Award, Compass, Layers, Ruler } from "lucide-react";
import { WorkMedia } from "@/components/ui/WorkMedia";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const credentials = [
  { icon: Ruler, title: "Technical Precision", detail: "ISO A3/A4 documentation & shop drawings" },
  { icon: Layers, title: "Integrated Process", detail: "Concept → zoning → as-built → MEP coordination" },
  { icon: Compass, title: "Spatial Philosophy", detail: "Form follows function with editorial clarity" },
  { icon: Award, title: "Regional Expertise", detail: "NCR, Dholera SIR, Jewar aviation corridors" },
];

const values = [
  "Material honesty and structural legibility in every elevation.",
  "Layered spatial narratives that prioritize human scale.",
  "Documentation rigor aligned with municipal and client standards.",
];

export function About({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`bg-philosophy ${compact ? "py-16 sm:py-20" : "py-20 sm:py-28"}`}
    >
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 grid gap-5 sm:grid-cols-2"
        >
          <div className="card-lift relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <WorkMedia
              path="SPA/render/waiting lobby.jpeg"
              alt="SPA waiting lobby"
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="card-lift relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <WorkMedia
              path="105 noida/render/view -1 (1).png"
              alt="Sector 105 exterior"
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionLabel>Design Philosophy</SectionLabel>
            <h2
              id="about-heading"
              className="mt-4 font-display text-3xl leading-tight sm:text-5xl"
            >
              Architecture as enduring spatial narrative.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
              <p>
                Our practice operates at the intersection of editorial luxury and
                technical rigor — translating complex programs into legible, atmospheric
                spatial experiences.
              </p>
              {!compact && (
                <>
                  <p>
                    From wellness interiors to smart-city masterplans, each commission
                    sustains form and function across every drawing set.
                  </p>
                  <ul className="mt-6 space-y-3 border-l-2 border-brass/50 pl-5">
                    {values.map((v) => (
                      <li key={v} className="text-foreground/90">
                        {v}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {credentials.map(({ icon: Icon, title, detail }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="card-lift rounded-2xl border border-border/60 bg-sand/90 p-6 shadow-sm"
              >
                <Icon className="h-5 w-5 text-brass" strokeWidth={1.5} />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
