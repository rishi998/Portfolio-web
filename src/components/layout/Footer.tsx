import Link from "next/link";
import { NAV_LINKS, STUDIO_NAME, STUDIO_TAGLINE, WHATSAPP_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-brass/15 bg-charcoal py-14 pb-[max(3rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-display text-xl text-sand">{STUDIO_NAME}</p>
          <p className="mt-1 text-sm text-stone/70">{STUDIO_TAGLINE}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cursor-pointer text-sm text-stone/70 transition-colors hover:text-brass"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-sm text-brass hover:text-sand"
          >
            WhatsApp
          </a>
        </nav>
        <p className="font-mono text-[10px] uppercase tracking-widest text-stone/50">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  );
}
