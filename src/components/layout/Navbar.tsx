"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, STUDIO_NAME, WHATSAPP_URL } from "@/lib/constants";
import { springSnappy } from "@/lib/motion";

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative cursor-pointer py-2 text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground md:px-1"
    >
      {label}
      <motion.span
        className="absolute bottom-0 left-0 hidden h-px bg-accent md:block md:left-1/2"
        initial={false}
        animate={{
          width: isActive ? "100%" : "0%",
          x: isActive ? "-50%" : "-50%",
        }}
        whileHover={{ width: "100%" }}
        transition={springSnappy}
        style={{ originX: 0.5 }}
      />
      {isActive && (
        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-accent md:hidden" />
      )}
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        className="fixed top-0 left-0 right-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-4 sm:pt-4"
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-2xl border border-border/80 bg-background/90 px-3 py-2.5 shadow-sm backdrop-blur-xl backdrop-saturate-150 sm:px-5 sm:py-3 dark:bg-obsidian/85"
        >
          <Link
            href="/"
            className="min-w-0 shrink cursor-pointer truncate pr-2 text-sm font-semibold tracking-tight text-foreground sm:text-base"
          >
            {STUDIO_NAME}
          </Link>

          <div className="hidden items-center gap-6 lg:gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              transition={springSnappy}
              className="hidden cursor-pointer rounded-full border border-teal/30 bg-teal px-4 py-2 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-teal-light sm:inline-flex sm:px-5 sm:text-sm"
            >
              Book Consultation
            </motion.a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-border text-foreground md:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-obsidian/50 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={springSnappy}
            className="fixed left-3 right-3 z-50 top-[calc(4.5rem+env(safe-area-inset-top))] rounded-2xl border border-border bg-background p-5 shadow-xl md:hidden dark:bg-obsidian"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  onClick={() => setOpen(false)}
                />
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-5 flex w-full cursor-pointer items-center justify-center rounded-full border border-teal/30 bg-teal px-4 py-3 text-sm font-semibold text-white"
            >
              Book Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
