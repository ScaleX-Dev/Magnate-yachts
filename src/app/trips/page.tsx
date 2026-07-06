import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { DAY_TRIPS, TRIPS } from "@/lib/trips-data";

const BLUR = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMxYzJiM2UiLz48L3N2Zz4=";

export const metadata: Metadata = {
  title: "Trips — Magnate Yachts Sri Lanka",
  description:
    "Day trips and multi-day tours from Galle. Safari in Yala, Galle Fort, tea country, Ella, Sigiriya and more.",
};

const CUSTOM = {
  slug: "custom",
  badge: "BESPOKE",
  shortName: "Custom Itinerary",
  subtitle:
    "Something off the beaten track, a slower pace, or a route we haven't written down yet — tell us.",
  image:
    "/images/site/trip-custom-card.jpg",
};

export default function TripsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-10 lg:py-14">
          <Reveal>
            <h1
              className="text-[clamp(2.25rem,6vw,4.5rem)] font-light text-white leading-[1.1] mb-4 max-w-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Trips &amp;
              <br />
              <span className="italic text-white/40">Land Excursions</span>
            </h1>
            <p
              className="text-[14.5px] text-white/40 max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              One day, three, or five through the kingdoms.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Day excursions ────────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-10 lg:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DAY_TRIPS.map((trip, i) => (
              <Reveal key={trip.slug} delay={i * 0.08}>
                <Link
                  href={`/trips/${trip.slug}`}
                  className="group relative overflow-hidden rounded-2xl shadow-[0_16px_48px_-20px_rgba(6,12,24,0.22)] block transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={trip.image}
                      alt={trip.name}
                      fill
                      priority={i === 0}
                      placeholder="blur"
                      blurDataURL={BLUR}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p
                        className="text-[9px] uppercase tracking-[0.24em] text-[var(--color-amber)] mb-1.5"
                        style={{ fontFamily: "var(--font-accent)" }}
                      >
                        One day · US${trip.price} · {trip.priceNote}
                      </p>
                      <h2
                        className="text-2xl font-semibold text-white leading-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {trip.name}
                      </h2>
                    </div>
                  </div>
                  <div className="bg-white p-5 flex items-center justify-between gap-4">
                    <p
                      className="text-[13px] text-[var(--color-navy)]/55 leading-relaxed flex-1 line-clamp-2"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {trip.paragraphs[0]}
                    </p>
                    <ArrowRight
                      size={16}
                      className="text-[var(--color-amber)] shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Multi-day trips ───────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-10 lg:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRIPS.map((trip, i) => (
              <Reveal key={trip.slug} delay={i * 0.08}>
                <Link
                  href={`/trips/${trip.slug}`}
                  className="group relative overflow-hidden rounded-2xl block transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={trip.image}
                      alt={trip.shortName}
                      fill
                      placeholder="blur"
                      blurDataURL={BLUR}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p
                        className="text-[9px] uppercase tracking-[0.24em] text-[var(--color-amber)] mb-1.5"
                        style={{ fontFamily: "var(--font-accent)" }}
                      >
                        {trip.badge} · US${trip.price} · {trip.priceNote}
                      </p>
                      <h2
                        className="text-xl font-semibold text-white leading-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {trip.shortName}
                      </h2>
                      <p
                        className="text-[12px] text-white/55 mt-1.5 leading-relaxed line-clamp-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {trip.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[var(--color-navy-mid)] p-4 flex items-center justify-between">
                    <span
                      className="text-[12px] text-white/40"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      View full itinerary
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-[var(--color-amber)] shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}

            {/* Custom trip card */}
            <Reveal delay={TRIPS.length * 0.08}>
              <Link
                href="/trips/custom"
                className="group relative overflow-hidden rounded-2xl block transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={CUSTOM.image}
                    alt="Custom trip"
                    fill
                    placeholder="blur"
                    blurDataURL={BLUR}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p
                      className="text-[9px] uppercase tracking-[0.24em] text-[var(--color-amber)] mb-1.5"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {CUSTOM.badge}
                    </p>
                    <h2
                      className="text-xl font-semibold text-white leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {CUSTOM.shortName}
                    </h2>
                    <p
                      className="text-[12px] text-white/55 mt-1.5 leading-relaxed line-clamp-2"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {CUSTOM.subtitle}
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--color-navy-mid)] p-4 flex items-center justify-between">
                  <span
                    className="text-[12px] text-white/40"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Plan a custom trip
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-[var(--color-amber)] shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
