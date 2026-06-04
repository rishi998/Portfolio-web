"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, STUDIO_NAME, WHATSAPP_URL } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
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
      className={`relative cursor-pointer py-2 text-sm tracking-wide transition-colors md:px-1 ${
        isActive ? "text-brass" : "text-stone/80 hover:text-sand"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-0.5 left-0 h-px w-full bg-brass md:left-1/2 md:w-full md:-translate-x-1/2" />
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
        className="fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top,0px)]"
      >
        <div className="site-header-bar flex items-center px-3 sm:px-4">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 rounded-2xl border border-brass/15 bg-charcoal/90 px-3 py-2.5 shadow-xl backdrop-blur-xl sm:gap-4 sm:px-5 sm:py-3"
          >
            <Link
              href="/"
              className="min-w-0 shrink font-display text-sm tracking-tight text-sand whitespace-nowrap sm:text-lg"
            >
              {STUDIO_NAME}
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <MagneticButton
                href={WHATSAPP_URL}
                className="hidden rounded-full bg-brass px-5 py-2.5 text-xs font-semibold text-charcoal md:inline-flex md:text-sm"
              >
                Book Consultation
              </MagneticButton>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-brass/20 text-sand sm:h-10 sm:w-10 md:hidden"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-charcoal/70 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={springSnappy}
              className="fixed left-3 right-3 z-50 rounded-2xl border border-brass/20 bg-graphite p-5 shadow-2xl md:hidden top-[calc(var(--site-header-height)+env(safe-area-inset-top,0px)+0.5rem)]"
            >
              <div className="flex flex-col gap-2">
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
                className="mt-5 flex w-full cursor-pointer items-center justify-center rounded-full bg-brass py-3 text-sm font-semibold text-charcoal"
              >
                Book Consultation
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
