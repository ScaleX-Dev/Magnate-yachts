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
  subtitle: "Something off the beaten track, a slower pace, or a route we haven't written down yet — tell us.",
  image: "/images/site/trip-custom-card.jpg",
};

export default function TripsPage() {
  return (
    <>
      {/* ── Hero ── deep forest */}
      <section style={{ background: "linear-gradient(160deg, #0A1A0E 0%, #0F2418 60%, #142D1E 100%)" }}>
        <div className="container-site py-16 lg:py-24">
          <Reveal>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.32em] mb-6"
              style={{ fontFamily: "var(--font-body)", color: "#6BBF92" }}
            >
              Trips
            </p>
            <h1
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-light text-white leading-[1.05] mb-6 max-w-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Bespoke Trips and Excursions
              <br />
              <span style={{ color: "rgba(107,191,146,0.5)", fontStyle: "italic" }}>Around the Island</span>
            </h1>
            <p
              className="text-[15px] leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.45)" }}
            >
              From day excursions to wildlife safaris and tranquil mountain escapes, discover experiences tailored to your sailing plans.
            </p>
          </Reveal>
        </div>
        <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, rgba(61,122,92,0.5), transparent)" }} />
      </section>

      {/* ── Day excursions ── warm natural light */}
      <section style={{ background: "#EEF5EF" }}>
        <div className="container-site py-14 lg:py-20">
          <Reveal className="mb-10">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "#3D7A5C", fontFamily: "var(--font-body)" }}
            >
              Day excursions
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DAY_TRIPS.map((trip, i) => (
              <Reveal key={trip.slug} delay={i * 0.08}>
                <Link
                  href={`/trips/${trip.slug}`}
                  className="group relative overflow-hidden block transition-transform duration-300 hover:-translate-y-1"
                  style={{ borderRadius: "16px", boxShadow: "0 16px 48px -20px rgba(13,24,16,0.25)" }}
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
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,24,16,0.8) 0%, rgba(13,24,16,0.1) 50%, transparent 100%)" }} />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p
                        className="text-[9px] uppercase tracking-[0.24em] mb-1.5"
                        style={{ color: "#6BBF92", fontFamily: "var(--font-accent)" }}
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
                  <div
                    className="p-5 flex items-center justify-between gap-4"
                    style={{ background: "#fff", borderTop: "2px solid rgba(61,122,92,0.12)" }}
                  >
                    <p
                      className="text-[13px] leading-relaxed flex-1 line-clamp-2"
                      style={{ color: "rgba(13,24,16,0.55)", fontFamily: "var(--font-body)" }}
                    >
                      {trip.paragraphs[0]}
                    </p>
                    <ArrowRight
                      size={16}
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: "#3D7A5C" }}
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Multi-day trips ── deep forest dark */}
      <section style={{ background: "#0D1810" }}>
        <div className="container-site py-14 lg:py-20">
          <Reveal className="mb-10">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "#6BBF92", fontFamily: "var(--font-body)" }}
            >
              Multi-day journeys
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRIPS.map((trip, i) => (
              <Reveal key={trip.slug} delay={i * 0.08}>
                <Link
                  href={`/trips/${trip.slug}`}
                  className="group relative overflow-hidden block transition-transform duration-300 hover:-translate-y-1"
                  style={{ borderRadius: "16px", border: "1px solid rgba(61,122,92,0.15)" }}
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
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,24,16,0.85) 0%, rgba(13,24,16,0.1) 55%, transparent 100%)" }} />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p
                        className="text-[9px] uppercase tracking-[0.24em] mb-1.5"
                        style={{ color: "#6BBF92", fontFamily: "var(--font-accent)" }}
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
                        className="text-[12px] mt-1.5 leading-relaxed line-clamp-2"
                        style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}
                      >
                        {trip.subtitle}
                      </p>
                    </div>
                  </div>
                  <div
                    className="p-4 flex items-center justify-between"
                    style={{ background: "rgba(61,122,92,0.12)", borderTop: "1px solid rgba(61,122,92,0.2)" }}
                  >
                    <span
                      className="text-[12px]"
                      style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}
                    >
                      View full itinerary
                    </span>
                    <ArrowRight
                      size={14}
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: "#6BBF92" }}
                    />
                  </div>
                </Link>
              </Reveal>
            ))}

            {/* Custom trip card */}
            <Reveal delay={TRIPS.length * 0.08}>
              <Link
                href="/trips/custom"
                className="group relative overflow-hidden block transition-transform duration-300 hover:-translate-y-1"
                style={{ borderRadius: "16px", border: "1px solid rgba(61,122,92,0.15)" }}
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
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,24,16,0.85) 0%, rgba(13,24,16,0.1) 55%, transparent 100%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p
                      className="text-[9px] uppercase tracking-[0.24em] mb-1.5"
                      style={{ color: "#6BBF92", fontFamily: "var(--font-body)" }}
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
                      className="text-[12px] mt-1.5 leading-relaxed line-clamp-2"
                      style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}
                    >
                      {CUSTOM.subtitle}
                    </p>
                  </div>
                </div>
                <div
                  className="p-4 flex items-center justify-between"
                  style={{ background: "rgba(61,122,92,0.12)", borderTop: "1px solid rgba(61,122,92,0.2)" }}
                >
                  <span
                    className="text-[12px]"
                    style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}
                  >
                    Plan a custom trip
                  </span>
                  <ArrowRight
                    size={14}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: "#6BBF92" }}
                  />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── trips green */}
      <section style={{ background: "#3D7A5C" }}>
        <div className="container-site py-10 lg:py-12">
          <Reveal className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p
                className="text-[1.2rem] font-light text-white mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Something different in mind?
              </p>
              <p
                className="text-[13.5px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}
              >
                Tell us what you have in mind — we&apos;ll build it around your schedule.
              </p>
            </div>
            <Link
              href="/trips/custom"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 shrink-0 whitespace-nowrap"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", fontFamily: "var(--font-body)" }}
            >
              Plan a custom trip <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
