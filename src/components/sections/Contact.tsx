"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-luxury-dark py-20 sm:py-28"
    >
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <SectionLabel>Begin Your Project</SectionLabel>
          <h2
            id="contact-heading"
            className="mt-4 font-display text-3xl text-sand sm:text-5xl"
          >
            Contact &amp; Enquiry
          </h2>
        </motion.div>

        <motion.form
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-dark mx-auto max-w-xl space-y-6 rounded-2xl p-6 sm:p-8"
        >
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brass/80">
              Name
            </span>
            <input
              required
              type="text"
              name="name"
              className="mt-2 w-full border-0 border-b border-brass/30 bg-transparent py-3 text-sm text-sand outline-none focus:border-brass"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brass/80">
              Email
            </span>
            <input
              required
              type="email"
              name="email"
              className="mt-2 w-full border-0 border-b border-brass/30 bg-transparent py-3 text-sm text-sand outline-none focus:border-brass"
              placeholder="you@email.com"
            />
          </label>
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brass/80">
              Project Brief
            </span>
            <textarea
              required
              name="message"
              rows={4}
              className="mt-2 w-full resize-none border-0 border-b border-brass/30 bg-transparent py-3 text-sm text-sand outline-none focus:border-brass"
              placeholder="Describe your spatial requirements..."
            />
          </label>
          <div className="pt-2">
            <MagneticButton
              type="submit"
              className="w-full rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-charcoal sm:w-auto"
            >
              <span className="inline-flex items-center justify-center gap-2">
                <Send className="h-4 w-4" />
                Send Inquiry
              </span>
            </MagneticButton>
          </div>
          {submitted && (
            <p className="font-mono text-xs text-brass" role="status">
              Thank you — we will respond within one business day.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
