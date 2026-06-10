import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { TripEnquiryForm } from "@/components/trip/TripEnquiryForm";
import { TRIPS, getTripBySlug, getTripsBySlug } from "@/lib/trips-data";

export function generateStaticParams() {
  return TRIPS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) return {};
  return {
    title: `${trip.shortName} — Magnate Yachts Sri Lanka`,
    description: trip.about,
  };
}

export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) notFound();

  const shorterTrips = getTripsBySlug(trip.shorterTrips);
  const longerTrips  = getTripsBySlug(trip.longerTrips);

  return (
    <>
      {/* ── Hero (dark, cinematic) ────────────────────────────────────── */}
      <section className="min-h-svh bg-[#080e1a] flex flex-col relative">

        {/* Breadcrumb */}
        <div className="container-site flex items-center justify-between pt-5 pb-3">
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[var(--color-amber)]/60">
            <Link href="/trips" className="hover:text-[var(--color-amber)]/90 transition-colors">Trips</Link>
            <span className="text-white/15">/</span>
            <span className="text-[var(--color-amber)]/40">{trip.shortName}</span>
          </div>
          <Link
            href="/trips"
            className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/25 hover:text-white/60 transition-colors"
          >
            <ArrowLeft size={10} /> Back to all trips
          </Link>
        </div>

        {/* Play button */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <button
            aria-label="Play with sound"
            className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/[0.04] transition-all"
          >
            <Play size={20} className="text-white ml-1" fill="white" />
          </button>
          <p className="text-[9px] uppercase tracking-widest text-white/25">Play with sound</p>
        </div>

        {/* Title block */}
        <div className="container-site pb-12 flex items-end justify-between gap-8">
          <div>
            <h1
              className="text-5xl sm:text-7xl lg:text-[5.5rem] font-semibold text-white leading-[1.04] mb-6 whitespace-pre-line"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {trip.heroTitle}
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] uppercase tracking-widest border border-white/15 text-white/45 px-3 py-1.5">
                {trip.badge}
              </span>
              {trip.routeTags.map((tag, i) => (
                <span key={tag} className="flex items-center gap-3">
                  {i > 0 && <span className="text-white/12">·</span>}
                  <span className="text-[11px] text-white/30">{tag}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hidden lg:flex flex-col items-center gap-3 shrink-0 pb-1">
            <span className="text-[9px] uppercase tracking-widest text-white/20 [writing-mode:vertical-lr] rotate-180">
              Scroll
            </span>
            <div className="w-px h-10 bg-white/12" />
          </div>
        </div>
      </section>

      {/* ── About this trip ───────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-20">
          <p className="text-[10px] uppercase tracking-widest text-[var(--color-amber)] mb-8">
            About this trip
          </p>
          <p className="text-base sm:text-lg text-[var(--color-navy)]/65 leading-relaxed max-w-2xl">
            {trip.about}
          </p>
        </div>
      </section>

      {/* ── Day-by-day ────────────────────────────────────────────────── */}
      {trip.days.map((day, i) => {
        const imageRight = i % 2 === 0;
        return (
          <section key={day.n} className="bg-[var(--color-ivory)]">
            <div className="container-site pb-4">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-start ${
                  imageRight ? "" : "lg:[direction:rtl] [&>*]:[direction:ltr]"
                }`}
              >
                {/* Number + title */}
                <div className="flex flex-col justify-end pt-14 pb-6 lg:pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--color-navy)]/35 mb-2">
                    {day.label}
                  </span>
                  <span
                    className="block text-[8rem] sm:text-[11rem] lg:text-[14rem] font-semibold leading-none text-[var(--color-amber)]/20 select-none -ml-1"
                    style={{ fontFamily: "var(--font-display)" }}
                    aria-hidden
                  >
                    {day.n}
                  </span>
                  <h2
                    className="text-2xl sm:text-3xl font-semibold text-[var(--color-navy)] mt-2 leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {day.title}
                  </h2>
                </div>

                {/* Image */}
                <div className="lg:pt-14 lg:pl-8">
                  <ImgPlaceholder
                    label={day.imageLabel}
                    aspectRatio="aspect-[4/3]"
                    className="rounded-none"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="mt-7 mb-16 text-sm text-[var(--color-navy)]/55 leading-relaxed max-w-2xl">
                {day.description}
              </p>
            </div>
          </section>
        );
      })}

      {/* ── Quote ─────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-20 lg:py-28">
          <blockquote className="max-w-3xl">
            <p
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.2] mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &ldquo;{trip.quote}&rdquo;
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-7 h-px bg-white/15" />
              <cite className="not-italic text-[11px] text-white/35 tracking-wide">
                {trip.quoteAttrib}
              </cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── What's included / not ─────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[var(--color-amber)] mb-6">
                What&apos;s included
              </p>
              <ul className="flex flex-col gap-4">
                {trip.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-navy)]/65 leading-relaxed">
                    <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[var(--color-amber)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[var(--color-navy)]/25 mb-6">
                What&apos;s not included
              </p>
              <ul className="flex flex-col gap-4">
                {trip.notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-navy)]/40 leading-relaxed">
                    <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[var(--color-navy)]/18 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Honest notes ──────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-site py-16 lg:py-20">
          <p className="text-[10px] uppercase tracking-widest text-[var(--color-amber)] mb-10">
            Honest notes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-navy)]/40 mb-4">
                This one is right for —
              </p>
              <p className="text-sm text-[var(--color-navy)]/55 leading-relaxed">
                {trip.honestFor}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-navy)]/40 mb-4">
                Probably not for —
              </p>
              <p className="text-sm text-[var(--color-navy)]/55 leading-relaxed">
                {trip.honestNotFor}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Booking CTA ───────────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory-dark)]">
        <div className="container-site py-16 lg:py-20">
          <p className="text-[10px] uppercase tracking-widest text-[var(--color-amber)] mb-5">
            Pick a date
          </p>
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[var(--color-navy)] mb-3 max-w-lg leading-snug"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tell us when you&apos;ll be in Sri Lanka.
          </h2>
          <p className="text-sm text-[var(--color-navy)]/50 leading-relaxed mb-8 max-w-lg">
            We&apos;ll hold the trip on the calendar and confirm pricing for your dates. No deposit yet — that comes when your window firms up.
          </p>

          <TripEnquiryForm tripName={trip.shortName} />

          <p className="mt-5 text-xs text-[var(--color-navy)]/35">
            Or message on{" "}
            <a
              href="https://wa.me/94XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--color-navy)]/65 transition-colors"
            >
              WhatsApp →
            </a>
          </p>
        </div>
      </section>

      {/* ── See also ──────────────────────────────────────────────────── */}
      {(shorterTrips.length > 0 || longerTrips.length > 0) && (
        <section className="bg-[var(--color-ivory)]">
          <div className="container-site py-16">
            <p className="text-[10px] uppercase tracking-widest text-[var(--color-amber)] mb-10">
              On this same passage
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

              {shorterTrips.length > 0 && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-navy)]/30 mb-6">
                    If you&apos;ve got less time
                  </p>
                  <div className="flex flex-col gap-3">
                    {shorterTrips.map((t) => (
                      <div
                        key={t.slug}
                        className="border border-[var(--color-ivory-dark)] p-5 flex items-center justify-between gap-4 bg-white"
                      >
                        <div>
                          <p className="font-semibold text-[var(--color-navy)] text-[15px] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                            {t.heroTitle.replace("\n", " ")}
                          </p>
                          <p className="text-[11px] text-[var(--color-navy)]/35 uppercase tracking-widest">{t.badge}</p>
                        </div>
                        <Link
                          href={`/trips/${t.slug}`}
                          className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--color-navy)] hover:text-[var(--color-amber)] transition-colors whitespace-nowrap shrink-0"
                        >
                          See this trip <ArrowRight size={12} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {longerTrips.length > 0 && (
                <div className={shorterTrips.length === 0 ? "md:col-span-2" : ""}>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-navy)]/30 mb-6">
                    If you can take more time
                  </p>
                  <div className="flex flex-col gap-3">
                    {longerTrips.map((t) => (
                      <div
                        key={t.slug}
                        className="border border-[var(--color-ivory-dark)] p-5 flex items-center justify-between gap-4 bg-white"
                      >
                        <div>
                          <p className="font-semibold text-[var(--color-navy)] text-[15px] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                            {t.heroTitle.replace("\n", " ")}
                          </p>
                          <p className="text-[11px] text-[var(--color-navy)]/35 uppercase tracking-widest">{t.badge}</p>
                        </div>
                        <Link
                          href={`/trips/${t.slug}`}
                          className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--color-navy)] hover:text-[var(--color-amber)] transition-colors whitespace-nowrap shrink-0"
                        >
                          See this trip <ArrowRight size={12} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}
    </>
  );
}
