import Link from "next/link";

const NAV_LINKS = [
  { href: "/clearance",  label: "Clearance" },
  { href: "/trips",      label: "Trips" },
  { href: "/port-guide", label: "Port Guide" },
  { href: "/about",      label: "About" },
  { href: "/contact",    label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy-dark)]">
      <div className="container-site pt-14 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 pb-10 border-b border-white/[0.08]">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span
              className="text-[10.5px] font-semibold tracking-[0.14em] text-white border border-white/25 px-3 py-[7px] w-fit"
              style={{ fontFamily: "var(--font-display)" }}
            >
              MAGNATE YACHTS
            </span>
            <p className="text-[12.5px] text-white/45 leading-relaxed max-w-[260px]">
              Sri Lanka&apos;s leading yacht clearance agent. Licensed in Galle and Trincomalee. One team, from anchor down to sail out.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] text-white/30 uppercase tracking-widest">VHF 16 monitored</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/25 mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[12.5px] text-white/45 hover:text-white/80 transition-colors"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/book"
                className="text-[12.5px] text-[var(--color-amber)] hover:text-[var(--color-amber-light)] transition-colors mt-1"
              >
                Arrange Clearance →
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/25 mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <span className="text-[12.5px] text-white/45">VHF Channel 16</span>
              <a
                href="https://wa.me/94XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12.5px] text-white/45 hover:text-white/80 transition-colors"
              >
                WhatsApp +94&nbsp;···
              </a>
              <a
                href="mailto:hello@magnateyachts.com"
                className="text-[12.5px] text-white/45 hover:text-white/80 transition-colors"
              >
                hello@magnateyachts.com
              </a>
              <span className="text-[12.5px] text-white/45">
                Galle &amp; Trincomalee, Sri Lanka
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-[11px] text-white/20">
            © 2025 Magnate Yachts · Secure checkout · USD / EUR · PayPal
          </p>
          <p className="text-[11px] text-white/20">
            Galle · Trincomalee · Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
