"use client";

import { motion } from "framer-motion";
import { Award, Compass, Layers, Ruler } from "lucide-react";
import { WorkMedia } from "@/components/ui/WorkMedia";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const credentials = [
  { icon: Ruler, title: "Technical Precision", detail: "ISO A3/A4 documentation & shop drawings" },
  { icon: Layers, title: "Integrated Process", detail: "Concept → zoning → as-built → MEP coordination" },
  { icon: Compass, title: "Spatial Philosophy", detail: "Form follows function with editorial clarity" },
  { icon: Award, title: "Regional Expertise", detail: "NCR, Dholera SIR, Jewar aviation corridors" },
];

const values = [
  "Material honesty and structural legibility in every elevation.",
  "High-contrast spatial narratives that prioritize human scale.",
  "Documentation rigor aligned with municipal and client standards.",
];

export function About({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`border-t border-border bg-surface/50 ${compact ? "py-12 sm:py-16" : "py-16 sm:py-24 md:py-32"}`}
    >
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 grid gap-4 sm:grid-cols-2"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <WorkMedia
              path="SPA/render/waiting lobby.jpeg"
              alt="SPA waiting lobby interior render"
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <WorkMedia
              path="105 noida/render/view -1 (1).png"
              alt="Sector 105 residential exterior view"
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal">
              Design Philosophy
            </p>
            <h2
              id="about-heading"
              className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl"
            >
              Architecture as enduring spatial narrative.
            </h2>
            <div className="mt-8 space-y-4 text-muted leading-relaxed">
              <p>
                Our practice operates at the intersection of editorial minimalism and
                technical rigor — translating complex programs into legible, high-contrast
                spatial experiences.
              </p>
              {!compact && (
                <>
                  <p>
                    From mezzanine commercial integrations to smart-city masterplans, each
                    commission is approached with the same commitment: sustaining form and
                    function across every drawing set.
                  </p>
                  <ul className="mt-6 space-y-3 border-l-2 border-teal/30 pl-5">
                    {values.map((v) => (
                      <li key={v} className="text-sm text-foreground/90">
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
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {credentials.map(({ icon: Icon, title, detail }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="cursor-default rounded-xl border border-border bg-background p-6 transition-colors hover:border-teal/30"
              >
                <Icon className="h-5 w-5 text-teal" strokeWidth={1.5} />
                <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
