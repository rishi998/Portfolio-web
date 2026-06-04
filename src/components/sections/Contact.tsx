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
      className="border-t border-border py-16 sm:py-24 md:py-32"
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
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal">
              Inquiry
            </p>
            <h2
              id="contact-heading"
              className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl"
            >
              Contact & Booking
            </h2>
          </motion.div>
        ) : (
          <h2 id="contact-heading" className="sr-only">
            Contact & Booking
          </h2>
        )}

        <div className="grid gap-10 sm:gap-16 lg:grid-cols-5">
          <motion.form
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 lg:col-span-3"
          >
            <motion.div variants={staggerItem} className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Name
                </span>
                <input
                  required
                  type="text"
                  name="name"
                  className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="you@email.com"
                />
              </label>
            </motion.div>
            <motion.label variants={staggerItem} className="block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Project Brief
              </span>
              <textarea
                required
                name="message"
                rows={4}
                className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent"
                placeholder="Describe your spatial requirements..."
              />
            </motion.label>
            <motion.div variants={staggerItem} className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                Send Inquiry
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#25D366] px-6 py-3 text-sm font-medium text-[#25D366] transition-colors hover:bg-[#25D366]/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Direct
              </a>
            </motion.div>
            {submitted && (
              <p className="font-mono text-xs text-teal" role="status">
                Thank you — we will respond within one business day.
              </p>
            )}
          </motion.form>

          <motion.aside
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-2"
          >
            <motion.div
              variants={staggerItem}
              className="relative aspect-[16/10] min-h-[180px] overflow-hidden rounded-xl border border-border"
            >
              <WorkMedia
                path="Club Front NIght.jpg.jpeg"
                alt="Commercial project exterior — club front night render"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div variants={staggerItem}>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Clock className="h-4 w-4 text-teal" />
                Business Hours
              </div>
              <ul className="mt-4 space-y-2">
                {OFFICE_HOURS.map(({ day, hours }) => (
                  <li
                    key={day}
                    className="flex justify-between font-mono text-xs text-muted"
                  >
                    <span>{day}</span>
                    <span>{hours}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={staggerItem}>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <MapPin className="h-4 w-4 text-teal" />
                Office
              </div>
              <p className="mt-4 text-sm text-muted">{OFFICE_LOCATION.address}</p>
              <p className="mt-1 font-mono text-xs text-muted/80">
                {OFFICE_LOCATION.coordinates}
              </p>
            </motion.div>

            <motion.a
              variants={staggerItem}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              className="block cursor-pointer rounded-xl border border-border bg-surface p-6 transition-colors hover:border-teal/40"
            >
              <p className="text-sm font-semibold">Prefer instant dialogue?</p>
              <p className="mt-2 text-xs text-muted">
                Message the lead architect on WhatsApp — pre-filled greeting ready to send.
              </p>
            </motion.a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
