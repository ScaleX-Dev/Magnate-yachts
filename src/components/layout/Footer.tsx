import Link from "next/link";
import { Anchor, Mail, Radio } from "lucide-react";

const NAV_LINKS = [
  { href: "/trips",      label: "Trips" },
  { href: "/clearance",  label: "Clearance" },
  { href: "/port-guide", label: "Port Guide" },
  { href: "/about",      label: "About" },
  { href: "/contact",    label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy-dark)]">
      <div className="container-site py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-[1.3fr_1fr_1fr] gap-10 sm:gap-8 pb-10 sm:pb-12 border-b border-white/[0.08]">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center rounded-xl bg-[var(--color-amber)] text-white w-9 h-9 shrink-0">
                <Anchor size={17} strokeWidth={2.2} />
              </span>
              <span
                className="text-[18px] font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Magnate Yachts
              </span>
            </div>
            <p className="text-[13.5px] text-white/40 leading-relaxed max-w-[280px]">
              Licensed yacht agent · Galle &amp; Trincomalee, Sri Lanka
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[13.5px] text-white/55 hover:text-white transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-4">
              Reach us
            </p>
            <div className="flex flex-col gap-2.5">
              <span className="flex items-center gap-2 text-[13.5px] text-white/55">
                <Radio size={13} className="text-[var(--color-amber-light)]/70 shrink-0" />
                VHF&nbsp;16 · WhatsApp&nbsp;+94&nbsp;···
              </span>
              <a
                href="mailto:hello@magnateyachts.com"
                className="flex items-center gap-2 text-[13.5px] text-white/55 hover:text-white transition-colors w-fit"
              >
                <Mail size={13} className="text-[var(--color-amber-light)]/70 shrink-0" />
                hello@magnateyachts.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <p className="text-[11.5px] text-white/25">
            © Magnate Yachts
          </p>
        </div>
      </div>
    </footer>
  );
}
