"use client";

// ─── Navbar ───────────────────────────────────────────────────────────────────
// Sticky navigation with logo, links, and primary CTA. Mobile hamburger drawer.

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/trips",      label: "Trips" },
  { href: "/clearance",  label: "Clearance" },
  { href: "/port-guide", label: "Port Guide" },
  { href: "/about",      label: "About" },
  { href: "/contact",    label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-[var(--color-ivory)]/95 backdrop-blur-md shadow-sm"
            : "bg-[var(--color-ivory)]"
        )}
      >
        <div className="container-site flex items-center justify-between h-16 gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="Magnate Yachts — home"
          >
            <span
              className="text-sm font-semibold tracking-wide text-[var(--color-navy)] border border-[var(--color-navy)] px-3 py-1.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              MAGNATE YACHTS
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--color-amber)]",
                  pathname === href || pathname.startsWith(href + "/")
                    ? "text-[var(--color-amber)]"
                    : "text-[var(--color-navy)]"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/trips"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-[var(--color-amber)] text-white text-sm font-medium tracking-wide hover:bg-[var(--color-amber-light)] transition-colors"
            >
              Plan your stay
            </Link>
            <button
              className="lg:hidden p-2 text-[var(--color-navy)] hover:text-[var(--color-amber)] transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <nav className="absolute top-0 right-0 h-full w-72 bg-[var(--color-ivory)] shadow-2xl flex flex-col pt-20 pb-8 px-8 gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "py-3 text-lg font-medium border-b border-[var(--color-ivory-dark)] transition-colors hover:text-[var(--color-amber)]",
                  pathname === href ? "text-[var(--color-amber)]" : "text-[var(--color-navy)]"
                )}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/trips"
              className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-sm bg-[var(--color-amber)] text-white text-sm font-medium hover:bg-[var(--color-amber-light)] transition-colors"
            >
              Plan your stay
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
