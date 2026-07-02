import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Minus } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { TRIPS, getTripBySlug } from "@/lib/trips-data";

const WHATSAPP = "https://wa.me/94XXXXXXXXX";

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
    description: trip.subtitle,
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

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[#080e1a] min-h-[60svh] flex flex-col justify-between">
        <div className="container-site flex items-center justify-between pt-5 pb-3">
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[var(--color-amber)]/60">
            <Link
              href="/trips"
              className="hover:text-[var(--color-amber)]/90 transition-colors"
            >
              Excursions
            </Link>
            <span className="text-white/15">/</span>
            <span className="text-[var(--color-amber)]/40">{trip.shortName}</span>
          </div>
          <Link
            href="/trips"
            className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/25 hover:text-white/60 transition-colors"
          >
            <ArrowLeft size={10} /> Back
          </Link>
        </div>

        <div className="container-site pb-14 pt-12">
          <Reveal>
            <span
              className="inline-block text-[9px] uppercase tracking-[0.28em] border border-white/15 text-white/40 px-3 py-1.5 mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {trip.badge}
            </span>
            <h1
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold text-white leading-[1.04] whitespace-pre-line mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {trip.heroTitle}
            </h1>
            <p
              className="text-[15px] text-white/38 max-w-md leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {trip.subtitle}
            </p>
          </Reveal>
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
                <Reveal className="flex flex-col justify-end pt-14 pb-6 lg:pb-4" y={16}>
                  <span
                    className="text-[10px] uppercase tracking-widest text-[var(--color-navy)]/35 mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
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
                </Reveal>

                {/* Image */}
                <Reveal className="lg:pt-14 lg:pl-8" delay={0.1} y={16}>
                  <ImgPlaceholder
                    label={day.imageLabel}
                    aspectRatio="aspect-[4/3]"
                    className="rounded-xl shadow-[0_24px_60px_-30px_rgba(11,31,58,0.3)]"
                  />
                </Reveal>
              </div>

              {/* Description */}
              <p
                className="mt-7 mb-16 text-sm text-[var(--color-navy)]/55 leading-relaxed max-w-2xl"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {day.description}
              </p>
            </div>
          </section>
        );
      })}

      {/* ── What's included / not ─────────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-site py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <Reveal>
              <p
                className="text-[10px] uppercase tracking-widest text-[var(--color-amber)] mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Included
              </p>
              <ul className="flex flex-col gap-4">
                {trip.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[var(--color-navy)]/65 leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <Check
                      size={13}
                      className="text-[var(--color-amber)] shrink-0 mt-[3px]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <p
                className="text-[10px] uppercase tracking-widest text-[var(--color-navy)]/25 mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Not included
              </p>
              <ul className="flex flex-col gap-4">
                {trip.notIncluded.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[var(--color-navy)]/40 leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <Minus
                      size={13}
                      className="text-[var(--color-navy)]/20 shrink-0 mt-[3px]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reserve CTA ───────────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-16 lg:py-20">
          <Reveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-amber)] mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Reserve your place
              </p>
              <p
                className="text-2xl sm:text-3xl font-light text-[var(--color-navy)] leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {trip.shortName}
              </p>
            </div>
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent(
                `I'd like to reserve the ${trip.shortName} trip (US$${trip.price})`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-amber)] text-white text-[14px] font-medium hover:bg-[var(--color-amber-light)] hover:shadow-[0_8px_28px_-6px_rgba(196,146,74,0.45)] hover:-translate-y-px active:scale-[0.97] transition-all duration-300 whitespace-nowrap shrink-0"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Reserve this trip · US${trip.price}
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Want something different? ──────────────────────────────────── */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-16 lg:py-24">
          <Reveal>
            <p
              className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-amber)] mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Something else in mind?
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,3rem)] font-light text-white leading-[1.2] mb-5 max-w-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Want something different?
            </h2>
            <p
              className="text-[14px] text-white/40 leading-relaxed max-w-md mb-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Every route here can be adjusted — slower, faster, fewer stops,
              or something that isn&apos;t on this page at all. Tell us what you
              have in mind and we&apos;ll put it together.
            </p>
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent(
                "I'd like to plan a custom trip in Sri Lanka"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white text-[13.5px] font-medium hover:bg-white/[0.06] hover:border-white/35 transition-all duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Plan my trip
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
