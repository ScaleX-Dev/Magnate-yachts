import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { href: "/trips",      label: "Trips" },
  { href: "/clearance",  label: "Clearance" },
  { href: "/port-guide", label: "Port Guide" },
  { href: "/about",      label: "About" },
  { href: "/contact",    label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-midnight)] border-t border-white/[0.06]">
      <div className="container-site py-14 sm:py-16 lg:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr_1fr] gap-10 sm:gap-8 pb-12 sm:pb-14 border-b border-white/[0.06]">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div>
              <span
                className="block text-[22px] font-semibold text-white leading-none mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Magnate
              </span>
              <span
                className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/25"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Yachts
              </span>
            </div>
            <p
              className="text-[13px] text-white/35 leading-relaxed max-w-[260px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Licensed yacht agent · Galle &amp; Trincomalee, Sri Lanka
            </p>
            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-[var(--color-amber)]/40" />
              <span
                className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-amber)]/60"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Est. 2009
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[9.5px] font-medium uppercase tracking-[0.28em] text-white/22 mb-5"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[13.5px] text-white/45 hover:text-white/80 transition-colors w-fit"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[9.5px] font-medium uppercase tracking-[0.28em] text-white/22 mb-5"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Reach us
            </p>
            <div className="flex flex-col gap-3">
              <span
                className="flex items-center gap-2.5 text-[13.5px] text-white/45"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <MessageCircle size={12} className="text-[var(--color-amber)]/50 shrink-0" />
                WhatsApp +94&nbsp;76&nbsp;985&nbsp;0115
              </span>
              <a
                href="mailto:info@magnateyachts.com"
                className="flex items-center gap-2.5 text-[13.5px] text-white/45 hover:text-white/80 transition-colors w-fit"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Mail size={12} className="text-[var(--color-amber)]/50 shrink-0" />
                info@magnateyachts.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p
            className="text-[11px] text-white/20"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} Magnate Yachts. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-[11px] text-white/18 hover:text-white/40 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Privacy
            </Link>
            <span className="text-white/10">·</span>
            <Link
              href="/terms"
              className="text-[11px] text-white/18 hover:text-white/40 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
