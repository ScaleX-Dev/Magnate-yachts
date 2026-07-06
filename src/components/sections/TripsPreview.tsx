import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Reveal } from "@/components/ui/Reveal";

const TRIPS = [
  {
    href: "/trips",
    number: "01",
    duration: "Day excursions",
    label: "ONE DAY",
    subtitle: "Safari in Yala, or a day through Galle Fort and tea country",
    tag: "From US$75",
  },
  {
    href: "/trips/3-day",
    number: "02",
    duration: "Safari & Hill Country",
    label: "2 NIGHTS · 3 DAYS",
    subtitle: "Yala or Udawalawe, then up into Ella",
    tag: "US$560",
  },
  {
    href: "/trips/5-day",
    number: "03",
    duration: "Wilderness to Ancient Kingdoms",
    label: "4 NIGHTS · 5 DAYS",
    subtitle: "Leopard country, hill country, Kandy, Sigiriya",
    tag: "US$940",
  },
];

export function TripsPreview() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="container-site py-12 md:py-16 lg:py-20">

        {/* Header */}
        <Reveal className="mb-8 md:mb-10">
          <h2
            className="text-[clamp(2rem,5.5vw,4rem)] font-light text-[var(--color-navy)] leading-[1.1] mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            One day, three,
            <br />
            <span className="italic text-[var(--color-navy)]/40">or five through the kingdoms.</span>
          </h2>
          <p
            className="text-[14px] text-[var(--color-navy)]/45 leading-relaxed max-w-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Whichever fits your window — we'd take you somewhere quietly memorable.
          </p>
        </Reveal>

        {/* Hero image */}
        <Reveal delay={0.08} className="mb-8 md:mb-10">
          <ImgPlaceholder
            src="/images/site/trips-preview-banner.jpg"
            label="Sigiriya rock fortress, Sri Lanka"
            aspectRatio="aspect-[21/9]"
            className="rounded-2xl shadow-[0_24px_60px_-24px_rgba(6,12,24,0.28)]"
          />
        </Reveal>

        <Reveal delay={0.12}>
          <span
            className="block text-[9.5px] font-medium uppercase tracking-[0.25em] text-[var(--color-navy)]/30 mb-6"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Where Magnate would take you
          </span>
        </Reveal>

        {/* Trip list */}
        <div className="flex flex-col border-t border-[var(--color-navy)]/[0.08]">
          {TRIPS.map(({ href, number, duration, subtitle, tag }, i) => (
            <Reveal key={href} delay={i * 0.09} y={14}>
              <Link
                href={href}
                className="group relative flex items-center gap-4 sm:gap-8 py-6 sm:py-7 px-4 -mx-4 border-b border-[var(--color-navy)]/[0.08] rounded-xl transition-all duration-300 hover:bg-[var(--color-ivory-dark)] hover:px-6 active:scale-[0.99]"
              >
                {/* Number */}
                <span
                  className="text-sm font-medium text-[var(--color-amber)] w-6 shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {number}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-[1.35rem] sm:text-[1.6rem] font-light text-[var(--color-navy)] leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {duration}
                  </h3>
                  <p
                    className="text-[13px] text-[var(--color-navy)]/40 mt-1 truncate"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {subtitle}
                  </p>
                </div>

                {/* CTA */}
                <span
                  className="hidden sm:inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-navy)]/30 group-hover:text-[var(--color-amber)] transition-colors whitespace-nowrap shrink-0"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  View trip
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <ArrowRight
                  size={15}
                  className="sm:hidden text-[var(--color-navy)]/20 group-hover:text-[var(--color-amber)] transition-colors shrink-0"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-8">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[13.5px] text-[var(--color-navy)]/40 hover:text-[var(--color-navy)] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Or tell us what you have in mind — we&apos;ll put something together
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
