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
    <footer className="bg-[var(--color-navy)] text-white/60 text-xs">
      <div className="container-site py-10 flex flex-col gap-3">
        <span
          className="text-sm font-semibold tracking-wide text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          MAGNATE YACHTS
        </span>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>Secure checkout</span>
          <span className="text-white/25">·</span>
          <span>USD / EUR</span>
          <span className="text-white/25">·</span>
          <span>PayPal</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>VHF 16</span>
          <span className="text-white/25">·</span>
          <a
            href="https://wa.me/94XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp +94&nbsp;···
          </a>
          <span className="text-white/25">·</span>
          <a
            href="mailto:hello@magnateyachts.com"
            className="hover:text-white transition-colors"
          >
            hello@...
          </a>
        </div>

        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {NAV_LINKS.map(({ href, label }, i) => (
            <span key={href} className="flex items-center gap-2">
              <Link href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
              {i < NAV_LINKS.length - 1 && (
                <span className="text-white/25">·</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
