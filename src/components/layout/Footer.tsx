import Link from "next/link";
import { NAV_LINKS, STUDIO_NAME, STUDIO_TAGLINE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:py-12">
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-6 px-4 sm:gap-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="min-w-0">
          <p className="font-mono text-xs tracking-[0.15em] sm:tracking-[0.2em]">
            {STUDIO_NAME}
          </p>
          <p className="mt-1 text-sm text-muted">{STUDIO_TAGLINE}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-4 sm:gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cursor-pointer text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="shrink-0 font-mono text-[10px] text-muted">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  );
}
