"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function PageHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.header
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="border-b border-border bg-surface/30 py-10 sm:py-14 md:py-16"
    >
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal sm:text-xs sm:tracking-[0.3em]">
          {label}
        </p>
        <h1 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </motion.header>
  );
}
