import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Reveal } from "@/components/ui/Reveal";

const TRIPS = [
  {
    slug: "3-day",
    number: "01",
    duration: "Three days",
    subtitle: "Galle, south coast, Ella",
  },
  {
    slug: "5-day",
    number: "02",
    duration: "Five days",
    subtitle: "Adding the tea country and Nuwara Eliya",
  },
  {
    slug: "7-day",
    number: "03",
    duration: "A full week",
    subtitle: "Sigiriya, the kings, and home",
  },
];

export function TripsPreview() {
  return (
    <section className="bg-white">
      <div className="container-site py-12 lg:py-16">

        {/* Heading */}
        <Reveal className="mb-8 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-[var(--color-navy)]/25" />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)]">
              Into the island
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-navy)] leading-[1.15] mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Three days, five, or the whole island.
          </h2>
          <p className="text-sm text-[var(--color-navy)]/55 leading-relaxed">
            Whichever fits your window — we&apos;d take you somewhere quietly memorable.
          </p>
        </Reveal>

        {/* Full-bleed image */}
        <Reveal delay={0.1}>
          <ImgPlaceholder
            label="Iconic Sri Lanka image — Sigiriya at sunrise, or panoramic tea country, or Nine Arch Bridge train. Full bleed, atmospheric, allowed to breathe."
            aspectRatio="aspect-[16/9]"
            className="rounded-md shadow-[0_20px_50px_-24px_rgba(11,31,58,0.25)]"
          />
        </Reveal>

        <p className="mt-6 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-navy)]/40">
          Where Magnate would take you
        </p>

        {/* Trip list */}
        <div className="mt-4 flex flex-col divide-y divide-[var(--color-ivory-dark)] border-t border-[var(--color-ivory-dark)]">
          {TRIPS.map(({ slug, number, duration, subtitle }, i) => (
            <Reveal key={slug} delay={i * 0.08} y={14}>
              <Link
                href={`/trips/${slug}`}
                className="group grid grid-cols-[2.5rem_1fr] sm:grid-cols-[2.5rem_10rem_1fr_auto] items-center gap-3 sm:gap-6 py-6 px-3 -mx-3 rounded-sm transition-colors duration-300 hover:bg-[var(--color-ivory)]"
              >
                <span className="text-sm text-[var(--color-amber)] font-medium transition-transform duration-300 group-hover:scale-110">{number}</span>
                <h3
                  className="text-lg sm:text-xl font-semibold text-[var(--color-navy)] col-span-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {duration}
                </h3>
                <span className="text-sm text-[var(--color-navy)]/55 col-span-2 sm:col-span-1">
                  {subtitle}
                </span>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[var(--color-navy)] group-hover:text-[var(--color-amber)] transition-colors whitespace-nowrap">
                  See this trip <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm text-[var(--color-navy)]/55 hover:text-[var(--color-navy)] transition-colors"
          >
            Or tell us how long you&apos;ve got. We&apos;ll build something around your crew <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
