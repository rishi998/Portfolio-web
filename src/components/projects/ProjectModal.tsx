"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, ExternalLink, Play } from "lucide-react";
import type { Project } from "@/types/project";
import { WorkMedia } from "@/components/ui/WorkMedia";
import {
  getDocumentUrl,
  getProjectCoverUrl,
  getProjectImageFallback,
  isDisplayableMedia,
} from "@/data/work-catalog";
import { workAsset } from "@/lib/work-assets";
import { springHeavy } from "@/lib/motion";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-charcoal/80 p-0 backdrop-blur-md sm:items-center sm:p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={springHeavy}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[100dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl bg-sand shadow-2xl sm:max-h-[92dvh] sm:rounded-2xl"
          >
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden sm:aspect-video">
              <WorkMedia
                path={project.cover}
                alt={project.name}
                fallbackSrc={getProjectImageFallback(project.id)}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-brass/30 bg-charcoal/80 text-sand backdrop-blur-sm"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brass">
                {project.typology} · {project.year}
              </p>
              <h2 id="project-modal-title" className="mt-2 font-display text-2xl sm:text-3xl">
                {project.name}
              </h2>
              <p className="mt-1 font-mono text-xs text-muted">{project.location}</p>
              <div className="brass-line my-6" />
              <p className="text-base leading-relaxed text-muted">{project.description}</p>

              {project.video && (
                <div className="mt-6 overflow-hidden rounded-xl border border-border">
                  <div className="flex items-center gap-2 border-b border-border bg-concrete px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-muted">
                    <Play className="h-3.5 w-3.5" />
                    Walkthrough
                  </div>
                  <video
                    className="aspect-video w-full bg-charcoal"
                    controls
                    playsInline
                    preload="metadata"
                    poster={getProjectCoverUrl(project)}
                  >
                    <source src={workAsset(project.video)} type="video/mp4" />
                  </video>
                </div>
              )}

              {project.gallery && project.gallery.filter(isDisplayableMedia).length > 0 && (
                <div className="mt-8">
                  <h3 className="font-mono text-[10px] uppercase tracking-wider text-brass">
                    Gallery
                  </h3>
                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {project.gallery.filter(isDisplayableMedia).map((item) => (
                      <a
                        key={item}
                        href={workAsset(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative aspect-square min-h-[100px] cursor-pointer overflow-hidden rounded-xl shadow-md"
                      >
                        <WorkMedia
                          path={item}
                          alt={`${project.name} gallery`}
                          className="object-cover"
                          sizes="200px"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {project.documents.length > 0 && (
                <div className="mt-8 pb-[env(safe-area-inset-bottom)]">
                  <h3 className="font-mono text-[10px] uppercase tracking-wider text-brass">
                    Documents
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {project.documents.map((d) => (
                      <li key={d.path}>
                        <a
                          href={getDocumentUrl(d.path)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-border bg-concrete/50 px-4 py-3 text-sm transition-colors hover:border-brass/40"
                        >
                          <span className="flex min-w-0 items-center gap-3">
                            <FileText className="h-4 w-4 shrink-0 text-brass" />
                            <span className="min-w-0 break-words">{d.label}</span>
                          </span>
                          <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
