import Link from "next/link";

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
      <div className="container-site py-12 flex flex-col gap-4">
        <span
          className="text-[10.5px] font-semibold tracking-[0.14em] text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          MAGNATE YACHTS
        </span>

        <p className="text-[13px] text-white/45">
          Licensed yacht agent · Galle &amp; Trincomalee, Sri Lanka
        </p>

        <p className="text-[13px] text-white/45">
          VHF&nbsp;16 · WhatsApp&nbsp;+94&nbsp;··· ·{" "}
          <a
            href="mailto:hello@magnateyachts.com"
            className="hover:text-white/80 transition-colors"
          >
            hello@magnateyachts.com
          </a>
        </p>

        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-white/45">
          {NAV_LINKS.map(({ href, label }, i) => (
            <span key={href} className="flex items-center gap-2">
              <Link href={href} className="hover:text-white/80 transition-colors">
                {label}
              </Link>
              {i < NAV_LINKS.length - 1 && <span className="text-white/20">·</span>}
            </span>
          ))}
        </nav>

        <p className="text-[12px] text-white/25 mt-2">
          © Magnate Yachts
        </p>
      </div>
    </footer>
  );
}
