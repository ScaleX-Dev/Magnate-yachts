import Link from "next/link";
import { Radio, MessageCircle, Mail } from "lucide-react";

const NAV_LINKS = [
  { href: "/clearance",  label: "Clearance" },
  { href: "/trips",      label: "Trips" },
  { href: "/port-guide", label: "Port Guide" },
  { href: "/about",      label: "About" },
  { href: "/contact",    label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white/70 text-sm">
      <div className="container-site py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <span
            className="font-display text-lg font-semibold tracking-wide text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            MAGNATE YACHTS
          </span>
          <p className="text-xs leading-relaxed max-w-xs">
            Sri Lanka&apos;s leading sailing yacht agent. Port clearance, guided tours,
            and everything between arrival and departure.
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <p className="text-white text-xs font-semibold uppercase tracking-widest mb-1">
            Reach Us
          </p>
          <a
            href="https://wa.me/94XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <MessageCircle size={13} />
            WhatsApp +94 ···
          </a>
          <span className="flex items-center gap-2">
            <Radio size={13} />
            VHF 16 · Galle &amp; Trincomalee
          </span>
          <a
            href="mailto:hello@magnateyachts.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail size={13} />
            hello@magnateyachts.com
          </a>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <p className="text-white text-xs font-semibold uppercase tracking-widest mb-1">
            Navigation
          </p>
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-2 py-5 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Magnate Yachts. All rights reserved.</span>
          <span>Galle Fort &amp; Trincomalee, Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
}
