"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
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
      className="border-b border-brass/15 bg-portfolio py-12 sm:py-16"
    >
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{description}</p>
        )}
      </div>
    </motion.header>
  );
}
