"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, MessageCircle, Send } from "lucide-react";
import {
  OFFICE_HOURS,
  OFFICE_LOCATION,
  WHATSAPP_URL,
} from "@/lib/constants";
import { WorkMedia } from "@/components/ui/WorkMedia";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export function Contact({ showHeading = true }: { showHeading?: boolean }) {
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
        {showHeading ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14"
          >
            <SectionLabel>Begin Your Project</SectionLabel>
            <h2
              id="contact-heading"
              className="mt-4 font-display text-3xl text-sand sm:text-5xl"
            >
              Contact &amp; Booking
            </h2>
          </motion.div>
        ) : (
          <h2 id="contact-heading" className="sr-only">
            Contact & Booking
          </h2>
        )}

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.form
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-dark space-y-6 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
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
            </div>
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
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <MagneticButton
                type="submit"
                className="rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-charcoal"
              >
                <span className="inline-flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Inquiry
                </span>
              </MagneticButton>
              <MagneticButton
                href={WHATSAPP_URL}
                className="rounded-full border border-brass/40 px-7 py-3.5 text-sm font-medium text-brass"
              >
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </span>
              </MagneticButton>
            </div>
            {submitted && (
              <p className="font-mono text-xs text-brass" role="status">
                Thank you — we will respond within one business day.
              </p>
            )}
          </motion.form>

          <motion.aside
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={staggerItem}
              className="relative aspect-[16/10] min-h-[180px] overflow-hidden rounded-2xl"
            >
              <WorkMedia
                path="Club Front NIght.jpg.jpeg"
                alt="Studio project exterior"
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
              <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-brass">
                Noida Sector 105
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="glass-dark rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-sand">
                <Clock className="h-4 w-4 text-brass" />
                Business Hours
              </div>
              <ul className="mt-4 space-y-2">
                {OFFICE_HOURS.map(({ day, hours }) => (
                  <li
                    key={day}
                    className="flex justify-between font-mono text-xs text-stone/75"
                  >
                    <span>{day}</span>
                    <span>{hours}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={staggerItem} className="glass-dark rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-sand">
                <MapPin className="h-4 w-4 text-brass" />
                Studio Location
              </div>
              <p className="mt-4 text-sm text-stone/80">{OFFICE_LOCATION.address}</p>
              <p className="mt-1 font-mono text-xs text-stone/60">
                {OFFICE_LOCATION.coordinates}
              </p>
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
