"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Anchor, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/trips",      label: "Trips" },
  { href: "/clearance",  label: "Clearance" },
  { href: "/port-guide", label: "Port Guide" },
  { href: "/about",      label: "About" },
  { href: "/contact",    label: "Contact" },
] as const;

function Mark({ size = 30 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-xl bg-[var(--color-navy)] text-[var(--color-amber-light)] shrink-0"
      style={{ width: size, height: size }}
    >
      <Anchor size={size * 0.55} strokeWidth={2.2} />
    </span>
  );
}

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
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white shadow-[0_4px_24px_-8px_rgba(17,32,63,0.12)] border-b border-[var(--color-border)]"
            : "bg-[var(--color-ivory)] border-b border-transparent"
        )}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[64px]">
            {/* Logo */}
            <Link href="/" aria-label="Magnate Yachts — home" className="flex items-center gap-2.5 shrink-0">
              <Mark />
              <span className="flex flex-col leading-none">
                <span
                  className="text-[15px] font-semibold text-[var(--color-navy)] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Magnate
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-navy)]/40 hidden sm:inline">
                  Yachts
                </span>
              </span>
            </Link>

            {/* Desktop nav — pill indicator */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
              {NAV_LINKS.map(({ href, label }) => {
                const active = pathname === href || pathname.startsWith(href + "/");
                return (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "relative px-4 py-2 text-[13px] font-medium rounded-full transition-colors duration-200",
                      active
                        ? "text-white"
                        : "text-[var(--color-navy)]/60 hover:text-[var(--color-navy)]"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-[var(--color-navy)] -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA (desktop only) */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-5 py-[9px] rounded-full bg-[var(--color-amber)] text-white text-[12px] font-semibold tracking-wide hover:bg-[var(--color-amber-light)] hover:shadow-[0_8px_20px_-6px_rgba(184,133,74,0.5)] hover:-translate-y-px transition-all duration-300"
              >
                Plan your stay
              </Link>
            </div>

            {/* Hamburger (mobile only) */}
            <button
              className="lg:hidden p-2 -mr-1 text-[var(--color-navy)]/70 hover:text-[var(--color-navy)] transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "menu"}
                  className="flex"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <motion.div
              className="absolute inset-0 bg-[var(--color-navy)]/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.nav
              className="absolute top-3 right-3 bottom-3 w-72 rounded-3xl bg-[var(--color-ivory)] flex flex-col pt-8 pb-8 px-7 gap-1 shadow-[-12px_0_40px_-12px_rgba(17,32,63,0.25)]"
              initial={{ x: "110%" }}
              animate={{ x: 0 }}
              exit={{ x: "110%" }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-2.5 mb-6">
                <Mark size={28} />
                <span
                  className="text-[15px] font-semibold text-[var(--color-navy)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Magnate
                </span>
              </div>
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={href}
                    className={cn(
                      "block px-4 py-3 rounded-full text-[15px] font-medium transition-colors",
                      pathname === href
                        ? "bg-[var(--color-navy)] text-white"
                        : "text-[var(--color-navy)]/60 hover:bg-[var(--color-navy)]/5 hover:text-[var(--color-navy)]"
                    )}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + NAV_LINKS.length * 0.05 }}
              >
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center w-full px-5 py-3 rounded-full bg-[var(--color-amber)] text-white text-sm font-semibold tracking-wide hover:bg-[var(--color-amber-light)] transition-colors"
                >
                  Plan your stay
                </Link>
              </motion.div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
