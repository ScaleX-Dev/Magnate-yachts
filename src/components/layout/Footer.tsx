"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { href: "/trips",      label: "Trips" },
  { href: "/clearance",  label: "Clearance" },
  { href: "/port-guide", label: "Port Guide" },
  { href: "/about",      label: "About" },
  { href: "/contact",    label: "Contact" },
];

/* ─── Fluid 3-D background ────────────────────────────────────────────
   Stacked radial-gradients produce the same volumetric-swell look as
   the reference: vivid deep-blue blobs lit from within, sitting on a
   near-black base. Each gradient is a separate "surface".
──────────────────────────────────────────────────────────────────────── */
const FLUID_BG = [
  /* Top-right primary swell — lit highlight */
  "radial-gradient(ellipse 75% 65% at 105% -15%, #1A3D78 0%, #0D2248 55%, transparent 80%)",
  /* Top-right secondary ridge — specular */
  "radial-gradient(ellipse 45% 40% at 90%  8%,  #2A5AAA 0%, transparent 60%)",
  /* Bottom-left primary swell */
  "radial-gradient(ellipse 70% 60% at -8% 115%,  #163260 0%, #0B1E40 50%, transparent 80%)",
  /* Bottom-left specular */
  "radial-gradient(ellipse 38% 35% at 8%  95%,  #2050A0 0%, transparent 60%)",
  /* Centre ribbon — ties the two swells together */
  "radial-gradient(ellipse 90% 55% at 50% 60%,  #0F2040 0%, transparent 75%)",
  /* Amber warmth — bottom-right corner */
  "radial-gradient(ellipse 28% 28% at 92% 95%,  rgba(196,146,74,0.10) 0%, transparent 70%)",
  /* Base */
  "linear-gradient(160deg, #08121E 0%, #060C18 100%)",
].join(", ");

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundImage: FLUID_BG }}
    >
      {/* ── Content ── */}
      <div className="relative z-10 container-site py-16 sm:py-20 lg:py-24">
        <div
          className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr_1fr] gap-12 sm:gap-8 pb-14"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div>
              <span
                className="block text-[26px] font-semibold text-white leading-none mb-1.5"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
              >
                Magnate
              </span>
              <span
                className="text-[9.5px] font-medium uppercase tracking-[0.28em]"
                style={{ fontFamily: "var(--font-accent)", color: "rgba(255,255,255,0.22)" }}
              >
                Yachts
              </span>
            </div>
            <p
              className="text-[13px] leading-relaxed max-w-[240px]"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.4)" }}
            >
              Licensed yacht agent · Galle &amp; Trincomalee, Sri Lanka
            </p>
            <div className="flex items-center gap-2.5">
              <div style={{ width: "28px", height: "1px", background: "linear-gradient(90deg, #C4924A, transparent)" }} />
              <span
                className="text-[9px] uppercase tracking-[0.24em]"
                style={{ fontFamily: "var(--font-accent)", color: "rgba(196,146,74,0.55)" }}
              >
                Est. 2024
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[9px] font-medium uppercase tracking-[0.32em] mb-6"
              style={{ fontFamily: "var(--font-accent)", color: "rgba(255,255,255,0.2)" }}
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[13.5px] w-fit transition-colors duration-200 hover:text-white/80"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.45)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[9px] font-medium uppercase tracking-[0.32em] mb-6"
              style={{ fontFamily: "var(--font-accent)", color: "rgba(255,255,255,0.2)" }}
            >
              Reach us
            </p>
            <div className="flex flex-col gap-3.5">
              <span
                className="flex items-center gap-3 text-[13.5px]"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.45)" }}
              >
                <MessageCircle size={12} style={{ color: "rgba(196,146,74,0.5)", flexShrink: 0 }} />
                WhatsApp +94&nbsp;76&nbsp;985&nbsp;0115
              </span>
              <a
                href="mailto:info@magnateyachts.com"
                className="flex items-center gap-3 text-[13.5px] w-fit transition-colors duration-200 hover:text-white/80"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.45)" }}
              >
                <Mail size={12} style={{ color: "rgba(196,146,74,0.5)", flexShrink: 0 }} />
                info@magnateyachts.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p
            className="text-[11px]"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.18)" }}
          >
            © {new Date().getFullYear()} Magnate Yachts. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-[11px] transition-colors duration-200 hover:text-white/45"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.18)" }}
            >
              Privacy
            </Link>
            <span style={{ color: "rgba(255,255,255,0.1)" }}>·</span>
            <Link
              href="/terms"
              className="text-[11px] transition-colors duration-200 hover:text-white/45"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.18)" }}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
