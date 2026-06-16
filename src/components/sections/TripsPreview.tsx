import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

const TRIPS = [
  {
    slug: "3-day",
    number: "01",
    duration: "Three days",
    subtitle: "Galle, the south coast, and Ella",
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
    subtitle: "The whole island — Sigiriya, the kings, and home",
  },
];

export function TripsPreview() {
  return (
    <section className="bg-white">
      <div className="container-site py-20 lg:py-28">

        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium text-[var(--color-navy)]/55 mb-4">
            Island Trips
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-navy)] leading-[1.15] mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From amazing wild life, beautiful beaches to UNESCO heritages there is so much to see.
          </h2>
          <p className="text-sm text-[var(--color-navy)]/55 leading-relaxed">
            Explore Sri Lanka with Magnate Trips, curated around your crew and timelines.
          </p>
        </div>

        {/* Full-bleed image */}
        <ImgPlaceholder
          label="Iconic Sri Lanka image — Sigiriya at sunrise, or panoramic tea country, or Nine Arch Bridge train. Full bleed, atmospheric, allowed to breathe."
          aspectRatio="aspect-[16/9]"
        />

        <p className="mt-6 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-navy)]/40">
          Where Magnate would take you
        </p>

        {/* Trip list */}
        <div className="mt-4 flex flex-col divide-y divide-[var(--color-ivory-dark)] border-t border-[var(--color-ivory-dark)]">
          {TRIPS.map(({ slug, number, duration, subtitle }) => (
            <Link
              key={slug}
              href={`/trips/${slug}`}
              className="group grid grid-cols-[2.5rem_1fr] sm:grid-cols-[2.5rem_10rem_1fr_auto] items-center gap-3 sm:gap-6 py-6"
            >
              <span className="text-sm text-[var(--color-amber)] font-medium">{number}</span>
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
                See this trip <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-navy)]/55 hover:text-[var(--color-navy)] transition-colors"
          >
            Or tell us how long you&apos;ve got. We&apos;ll build something around your crew <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  );
}
