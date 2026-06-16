"use client";

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
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          scrolled
            ? "bg-[var(--color-ivory)]/96 backdrop-blur-sm border-[var(--color-ivory-dark)]"
            : "bg-[var(--color-ivory)] border-[var(--color-ivory-dark)]"
        )}
      >
        <div className="container-site flex items-center justify-between h-[60px] gap-6">

          {/* Logo */}
          <Link href="/" aria-label="Magnate Yachts — home" className="flex items-center shrink-0">
            <span
              className="text-[11px] font-semibold tracking-[0.12em] text-[var(--color-navy)] border border-[var(--color-navy)] px-3 py-[7px] hover:bg-[var(--color-navy)] hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              MAGNATE YACHTS
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "text-[13px] font-medium transition-colors duration-150 relative pb-px",
                    "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[var(--color-amber)] after:transition-all after:duration-200",
                    active
                      ? "text-[var(--color-navy)] after:scale-x-100"
                      : "text-[var(--color-navy)]/55 hover:text-[var(--color-navy)] after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/book"
              className="hidden sm:inline-flex items-center justify-center px-5 py-[9px] bg-[var(--color-navy)] text-white text-[11.5px] font-semibold tracking-[0.08em] uppercase hover:bg-[var(--color-navy-dark)] transition-colors duration-200"
            >
              Plan your stay
            </Link>
            <button
              className="lg:hidden p-2 text-[var(--color-navy)]/70 hover:text-[var(--color-navy)] transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="absolute inset-0 bg-[var(--color-navy)]/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <nav className="absolute top-0 right-0 h-full w-72 bg-[var(--color-ivory)] flex flex-col pt-20 pb-8 px-8 gap-0.5">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "py-3.5 text-[15px] font-medium border-b border-[var(--color-ivory-dark)] transition-colors",
                  pathname === href ? "text-[var(--color-navy)]" : "text-[var(--color-navy)]/55 hover:text-[var(--color-navy)]"
                )}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/book"
              className="mt-6 inline-flex items-center justify-center px-5 py-3 bg-[var(--color-navy)] text-white text-sm font-semibold tracking-wider uppercase hover:bg-[var(--color-navy-dark)] transition-colors"
            >
              Plan your stay
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
