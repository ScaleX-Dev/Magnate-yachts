"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "bg-[var(--color-midnight)]/95 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-[var(--color-midnight)]"
        )}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[68px] md:h-[72px]">

            {/* Logo */}
            <Link
              href="/"
              aria-label="Magnate Yachts — home"
              className="flex items-center gap-3 shrink-0 group"
            >
              <span
                className="text-[22px] md:text-[24px] font-semibold tracking-tight text-white leading-none transition-opacity duration-200 group-hover:opacity-80"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Magnate
              </span>
              <span className="hidden sm:block w-px h-4 bg-white/15" />
              <span
                className="hidden sm:block text-[9px] font-medium uppercase tracking-[0.25em] text-white/35 transition-opacity duration-200 group-hover:opacity-60"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Yachts
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
              {NAV_LINKS.map(({ href, label }) => {
                const active = pathname === href || pathname.startsWith(href + "/");
                return (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "relative px-4 py-2 text-[13px] tracking-wide transition-colors duration-200 rounded-sm",
                      active
                        ? "text-white font-medium"
                        : "text-white/45 hover:text-white/80 font-normal"
                    )}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-px bg-[var(--color-amber)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[var(--color-amber)] text-white text-[12.5px] font-medium tracking-wide hover:bg-[var(--color-amber-light)] hover:shadow-[0_8px_28px_-6px_rgba(196,146,74,0.45)] hover:-translate-y-px transition-all duration-300 active:scale-[0.97]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Plan your stay
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 -mr-1 text-white/60 hover:text-white transition-colors"
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
                  transition={{ duration: 0.18 }}
                >
                  {open ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: "var(--color-midnight)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Atmospheric gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 130% 60% at 5% 90%, rgba(30, 146, 146, 0.07) 0%, transparent 60%)`,
              }}
            />

            <div className="relative flex-1 flex flex-col justify-center container-site pb-12 pt-28">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {NAV_LINKS.map(({ href, label }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={href}
                      className={cn(
                        "block py-4 border-b border-white/[0.07] transition-all duration-200",
                        pathname === href
                          ? "text-white"
                          : "text-white/35 hover:text-white/75 active:text-white"
                      )}
                    >
                      <span
                        className="text-[clamp(2.25rem,8vw,3.75rem)] font-light leading-none"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {label}
                      </span>
                      {pathname === href && (
                        <span
                          className="ml-4 text-[11px] uppercase tracking-widest text-[var(--color-amber)] align-middle"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          Current
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
              >
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[var(--color-amber)] text-white text-sm font-medium tracking-wide hover:bg-[var(--color-amber-light)] transition-all duration-300 active:scale-[0.97]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Plan your stay
                </Link>
              </motion.div>

              <motion.p
                className="mt-8 text-[11px] text-white/20 tracking-wide"
                style={{ fontFamily: "var(--font-body)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                VHF 16 · hello@magnateyachts.com
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
