"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Play } from "lucide-react";
import { projects } from "@/data/projects";
import { getProjectImageFallback } from "@/data/work-catalog";
import { FILTER_TABS } from "@/lib/constants";
import { staggerContainer, staggerItem, springSnappy, fadeUp } from "@/lib/motion";
import { WorkMedia } from "@/components/ui/WorkMedia";
import { ProjectModal } from "@/components/projects/ProjectModal";
import type { Project, ProjectCategory } from "@/types/project";

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
  const { id, name, typology, year, location, cover, span, documents, video } =
    project;
  const docCount = documents.length;

  return (
    <motion.article
      layout
      variants={staggerItem}
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => e.key === "Enter" && onSelect(project)}
      className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-surface ${spanClasses[span]}`}
    >
      <div className="relative aspect-[4/5] min-h-[220px] w-full shrink-0 overflow-hidden sm:aspect-[3/4] sm:min-h-[260px] md:aspect-auto md:min-h-[280px] md:flex-1">
        <WorkMedia
          path={cover}
          alt={`${name} — ${typology} in ${location}`}
          fallbackSrc={getProjectImageFallback(id)}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {(docCount > 0 || video) && (
        <div className="absolute right-2 top-2 flex flex-wrap justify-end gap-1 sm:right-3 sm:top-3">
          {video && (
            <span className="flex items-center gap-1 rounded-full bg-obsidian/85 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-white backdrop-blur-sm sm:text-[9px]">
              <Play className="h-3 w-3 shrink-0" />
              Video
            </span>
          )}
          {docCount > 0 && (
            <span className="flex items-center gap-1 rounded-full bg-obsidian/85 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-white backdrop-blur-sm sm:text-[9px]">
              <FileText className="h-3 w-3 shrink-0" />
              {docCount}
            </span>
          )}
        </div>
      )}

      {/* Always-visible info on touch; full overlay on hover-capable devices */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/90 via-obsidian/50 to-transparent p-4 pt-16 sm:p-5 sm:pt-20 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-white sm:text-lg">
          {name}
        </h3>
        <dl className="mt-2 space-y-0.5 font-mono text-[10px] uppercase tracking-wider text-white/85 sm:mt-3 sm:space-y-1 sm:text-[11px]">
          <div className="flex flex-wrap justify-between gap-x-2 gap-y-0.5">
            <dt className="text-white/50">Typology</dt>
            <dd>{typology}</dd>
          </div>
          <div className="flex flex-wrap justify-between gap-x-2 gap-y-0.5">
            <dt className="text-white/50">Year</dt>
            <dd>{year}</dd>
          </div>
          <div className="flex flex-wrap justify-between gap-x-2 gap-y-0.5">
            <dt className="text-white/50">Location</dt>
            <dd className="max-w-[60%] text-right leading-tight">{location}</dd>
          </div>
        </dl>
        <p className="mt-2 hidden font-mono text-[9px] text-accent sm:block">
          Tap to view gallery & documents
        </p>
      </div>
    </motion.article>
  );
}

export function PortfolioGrid({ showHeading = true }: { showHeading?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.typology === activeFilter),
    [activeFilter],
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    for (const p of projects) {
      c[p.typology] = (c[p.typology] ?? 0) + 1;
    }
    return c;
  }, []);

  return (
    <section id="work" aria-labelledby="work-heading" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-10 flex flex-col gap-4 sm:mb-12 sm:gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal sm:tracking-[0.3em]">
                Selected Work
              </p>
              <h2
                id="work-heading"
                className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl"
              >
                Project Portfolio
              </h2>
            </div>
            <p className="min-w-0 max-w-md text-sm leading-relaxed text-muted">
              {projects.length} deliverables from your studio{" "}
              <span className="font-mono text-foreground">/work</span> folder. Tap a
              project for photos, video & PDFs.
            </p>
          </motion.div>
        )}

        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="scrollbar-thin -mx-4 mb-8 flex flex-nowrap gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mb-10 sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          {FILTER_TABS.map((tab) => (
            <motion.button
              key={tab}
              role="tab"
              aria-selected={activeFilter === tab}
              onClick={() => setActiveFilter(tab)}
              whileTap={{ scale: 0.97 }}
              transition={springSnappy}
              className={`shrink-0 cursor-pointer whitespace-nowrap rounded-full border px-3 py-2 font-mono text-[10px] uppercase tracking-wider transition-colors sm:px-4 sm:text-xs ${
                activeFilter === tab
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-transparent text-muted hover:border-teal/40 hover:text-foreground"
              }`}
            >
              {tab}
              <span className="ml-1 opacity-70">({counts[tab] ?? 0})</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeFilter}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-fr lg:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
