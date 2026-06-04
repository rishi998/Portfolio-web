"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { springHeavy, springSnappy } from "@/lib/motion";

export function WhatsAppBubble() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="fixed z-50 bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] sm:bottom-6 sm:right-6"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.95 }}
            transition={springHeavy}
            className="absolute bottom-full right-0 mb-2 w-[min(16rem,calc(100vw-2rem))] cursor-pointer rounded-xl border border-border bg-background/95 p-3 shadow-xl backdrop-blur-md sm:mb-3 sm:w-64 sm:p-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
              aria-label="Chat with Lead Architect on WhatsApp"
            >
              <p className="text-sm font-semibold leading-snug text-foreground">
                Chat with Lead Architect
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal" />
                </span>
                <span className="font-mono text-xs text-muted">Online now</span>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat"
        className="flex cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-border bg-background shadow-lg sm:gap-3"
        animate={{
          width: expanded ? "auto" : 52,
          paddingLeft: expanded ? 12 : 0,
          paddingRight: expanded ? 12 : 0,
        }}
        transition={springSnappy}
        whileTap={{ scale: 0.97 }}
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white sm:h-14 sm:w-14">
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
        </span>
        {expanded && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden pr-1 text-sm font-medium text-foreground sm:inline sm:pr-2"
          >
            WhatsApp
          </motion.span>
        )}
      </motion.a>
    </div>
  );
}
