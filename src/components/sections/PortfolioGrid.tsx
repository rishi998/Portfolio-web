"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { projects } from "@/data/projects";
import { getProjectImageFallback } from "@/data/work-catalog";
import { FILTER_TABS, type FilterId } from "@/lib/constants";
import { projectMatchesFilter } from "@/lib/filters";
import {
  staggerContainer,
  staggerItem,
  springSnappy,
  fadeUp,
  imageZoom,
} from "@/lib/motion";
import { WorkMedia } from "@/components/ui/WorkMedia";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectModal } from "@/components/projects/ProjectModal";
import type { Project } from "@/types/project";

const spanClasses = {
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  standard: "",
};

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (p: Project) => void;
}) {
  const { id, name, typology, year, location, cover, span, documents } = project;

  return (
    <motion.article
      layout
      variants={staggerItem}
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => e.key === "Enter" && onSelect(project)}
      className={`card-lift group relative cursor-pointer overflow-hidden rounded-2xl bg-sand shadow-md ${spanClasses[span]}`}
    >
      <motion.div
        className="relative aspect-[4/5] min-h-[260px] w-full overflow-hidden sm:aspect-[3/4] md:min-h-[300px]"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.div variants={imageZoom} className="absolute inset-0">
          <WorkMedia
            path={cover}
            alt={`${name} — ${typology}`}
            fallbackSrc={getProjectImageFallback(id)}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </motion.div>
      </motion.div>

      {documents.length > 0 && (
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-charcoal/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-brass backdrop-blur-sm">
          <FileText className="h-3 w-3" />
          {documents.length}
        </span>
      )}

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent p-5 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
        <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-brass">
          {typology} · {year}
        </p>
        <h3 className="mt-2 font-display text-xl text-sand">{name}</h3>
        <p className="mt-1 text-xs text-stone/80">{location}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-brass">
          View Case Study
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>

      <div className="border-t border-border/60 bg-sand p-4 md:group-hover:opacity-0">
        <h3 className="font-display text-lg leading-snug">{name}</h3>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
          {typology} · {location}
        </p>
      </div>
    </motion.article>
  );
}

export function PortfolioGrid({ showHeading = true }: { showHeading?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<FilterId>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () => projects.filter((p) => projectMatchesFilter(p, activeFilter)),
    [activeFilter],
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    for (const tab of FILTER_TABS) {
      if (tab.id === "All") continue;
      c[tab.id] = projects.filter((p) => projectMatchesFilter(p, tab.id)).length;
    }
    return c;
  }, []);

  return (
    <section id="work" aria-labelledby="work-heading" className="bg-portfolio py-20 sm:py-28">
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <SectionLabel>Portfolio</SectionLabel>
              <h2 id="work-heading" className="mt-4 font-display text-3xl sm:text-5xl">
                Selected Works
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-muted">
              A curated gallery of residential, commercial, interior, and visualization
              projects — each presented as an architectural case study.
            </p>
          </motion.div>
        )}

        <div
          role="tablist"
          aria-label="Filter projects"
          className="scrollbar-thin -mx-4 mb-10 flex flex-nowrap gap-2 overflow-x-auto px-4 pb-2 sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          {FILTER_TABS.map((tab) => (
            <motion.button
              key={tab.id}
              role="tab"
              aria-selected={activeFilter === tab.id}
              onClick={() => setActiveFilter(tab.id)}
              whileTap={{ scale: 0.97 }}
              transition={springSnappy}
              className={`shrink-0 cursor-pointer whitespace-nowrap rounded-full px-5 py-2.5 font-mono text-[10px] uppercase tracking-wider transition-all duration-300 sm:text-xs ${
                activeFilter === tab.id
                  ? "bg-charcoal text-brass shadow-lg shadow-charcoal/20"
                  : "border border-border/80 bg-sand/80 text-muted hover:border-brass/40 hover:text-charcoal"
              }`}
            >
              {tab.label}
              <span className="ml-1.5 opacity-60">({counts[tab.id] ?? 0})</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeFilter}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
