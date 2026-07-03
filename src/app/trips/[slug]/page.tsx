import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, Minus } from "lucide-react";

const BLUR = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMxYzJiM2UiLz48L3N2Zz4=";
import { Reveal } from "@/components/ui/Reveal";
import {
  TRIPS,
  DAY_TRIPS,
  getTripBySlug,
  getDayTripBySlug,
  getAllTripSlugs,
} from "@/lib/trips-data";

export function generateStaticParams() {
  return getAllTripSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  const dayTrip = getDayTripBySlug(slug);
  if (!trip && !dayTrip) return {};
  const name = trip ? trip.shortName : dayTrip!.name;
  const description = trip ? trip.subtitle : dayTrip!.paragraphs[0].slice(0, 160);
  return {
    title: name + " — Magnate Yachts Sri Lanka",
    description,
  };
}

export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  const dayTrip = getDayTripBySlug(slug);

  if (!trip && !dayTrip) notFound();

  if (dayTrip) {
    return (
      <>
        <section className="bg-[#080e1a] min-h-[55svh] flex flex-col justify-between">
          <div className="container-site flex items-center justify-between pt-5 pb-3">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[var(--color-amber)]/60">
              <Link href="/trips" className="hover:text-[var(--color-amber)]/90 transition-colors">
                Trips
              </Link>
              <span className="text-white/15">/</span>
              <span className="text-[var(--color-amber)]/40">{dayTrip.name}</span>
            </div>
            <Link href="/trips" className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/25 hover:text-white/60 transition-colors">
              <ArrowLeft size={10} /> All trips
            </Link>
          </div>
          <div className="container-site pb-14 pt-10">
            <Reveal>
              <span className="inline-block text-[9px] uppercase tracking-[0.28em] border border-white/15 text-white/40 px-3 py-1.5 mb-8" style={{ fontFamily: "var(--font-body)" }}>
                One day · US${dayTrip.price} · {dayTrip.priceNote}
              </span>
              <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold text-white leading-[1.04] mb-4" style={{ fontFamily: "var(--font-display)" }}>
                {dayTrip.name}
              </h1>
            </Reveal>
          </div>
        </section>

        <section className="bg-[var(--color-ivory)]">
          <div className="container-site pt-12">
            <Reveal>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-[0_32px_80px_-28px_rgba(6,12,24,0.3)]">
                <Image src={dayTrip.heroImage ?? dayTrip.image} alt={dayTrip.name} fill className="object-cover" sizes="(max-width: 1280px) 100vw, 1280px" priority placeholder="blur" blurDataURL={BLUR} />
              </div>
            </Reveal>
          </div>
          <div className="container-site py-16 lg:py-20">
            <div className="max-w-2xl flex flex-col gap-6">
              {dayTrip.paragraphs.map((para, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-[14.5px] text-[var(--color-navy)]/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container-site py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              <Reveal>
                <p className="text-[10px] uppercase tracking-widest text-[var(--color-amber)] mb-6" style={{ fontFamily: "var(--font-body)" }}>Included</p>
                <ul className="flex flex-col gap-4">
                  {dayTrip.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-navy)]/65 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      <Check size={13} className="text-[var(--color-amber)] shrink-0 mt-[3px]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[10px] uppercase tracking-widest text-[var(--color-navy)]/25 mb-6" style={{ fontFamily: "var(--font-body)" }}>Not included</p>
                <ul className="flex flex-col gap-4">
                  {dayTrip.notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-navy)]/40 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      <Minus size={13} className="text-[var(--color-navy)]/20 shrink-0 mt-[3px]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-ivory)]">
          <div className="container-site py-16 lg:py-20">
            <Reveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-amber)] mb-3" style={{ fontFamily: "var(--font-body)" }}>Reserve your place</p>
                <p className="text-2xl sm:text-3xl font-light text-[var(--color-navy)] leading-snug" style={{ fontFamily: "var(--font-display)" }}>{dayTrip.name}</p>
              </div>
              <Link href="/book?trip=day" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-amber)] text-white text-[14px] font-medium hover:bg-[var(--color-amber-light)] hover:shadow-[0_8px_28px_-6px_rgba(196,146,74,0.45)] hover:-translate-y-px active:scale-[0.97] transition-all duration-300 whitespace-nowrap shrink-0" style={{ fontFamily: "var(--font-body)" }}>
                Reserve · US${dayTrip.price} · {dayTrip.priceNote}
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-[#080e1a] min-h-[60svh] flex flex-col justify-between">
        <div className="container-site flex items-center justify-between pt-5 pb-3">
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[var(--color-amber)]/60">
            <Link href="/trips" className="hover:text-[var(--color-amber)]/90 transition-colors">Trips</Link>
            <span className="text-white/15">/</span>
            <span className="text-[var(--color-amber)]/40">{trip!.shortName}</span>
          </div>
          <Link href="/trips" className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/25 hover:text-white/60 transition-colors">
            <ArrowLeft size={10} /> All trips
          </Link>
        </div>
        <div className="container-site pb-14 pt-12">
          <Reveal>
            <span className="inline-block text-[9px] uppercase tracking-[0.28em] border border-white/15 text-white/40 px-3 py-1.5 mb-8" style={{ fontFamily: "var(--font-body)" }}>
              {trip!.badge}
            </span>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold text-white leading-[1.04] whitespace-pre-line mb-4" style={{ fontFamily: "var(--font-display)" }}>
              {trip!.heroTitle}
            </h1>
            <p className="text-[15px] text-white/38 max-w-md leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              {trip!.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {trip!.days.map((day, i) => {
        const imageRight = i % 2 === 0;
        return (
          <section key={day.n} className="bg-[var(--color-ivory)]">
            <div className="container-site pb-4">
              <div className={"grid grid-cols-1 lg:grid-cols-2 gap-0 items-start " + (imageRight ? "" : "lg:[direction:rtl] [&>*]:[direction:ltr]")}>
                <Reveal className="flex flex-col justify-end pt-14 pb-6 lg:pb-4" y={16}>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--color-navy)]/35 mb-2" style={{ fontFamily: "var(--font-body)" }}>{day.label}</span>
                  <span className="block text-[8rem] sm:text-[11rem] lg:text-[14rem] font-semibold leading-none text-[var(--color-amber)]/20 select-none -ml-1" style={{ fontFamily: "var(--font-display)" }} aria-hidden>
                    {day.n}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-navy)] mt-2 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                    {day.title}
                  </h2>
                </Reveal>
                <Reveal className="lg:pt-14 lg:pl-8" delay={0.1} y={16}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-[0_24px_60px_-30px_rgba(11,31,58,0.3)]">
                    <Image src={day.image} alt={day.imageLabel} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" placeholder="blur" blurDataURL={BLUR} />
                  </div>
                </Reveal>
              </div>
              <p className="mt-7 mb-16 text-sm text-[var(--color-navy)]/55 leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
                {day.description}
              </p>
            </div>
          </section>
        );
      })}

      <section className="bg-white">
        <div className="container-site py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <Reveal>
              <p className="text-[10px] uppercase tracking-widest text-[var(--color-amber)] mb-6" style={{ fontFamily: "var(--font-body)" }}>Included</p>
              <ul className="flex flex-col gap-4">
                {trip!.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-navy)]/65 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <Check size={13} className="text-[var(--color-amber)] shrink-0 mt-[3px]" />{item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[10px] uppercase tracking-widest text-[var(--color-navy)]/25 mb-6" style={{ fontFamily: "var(--font-body)" }}>Not included</p>
              <ul className="flex flex-col gap-4">
                {trip!.notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-navy)]/40 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <Minus size={13} className="text-[var(--color-navy)]/20 shrink-0 mt-[3px]" />{item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-16 lg:py-20">
          <Reveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-amber)] mb-3" style={{ fontFamily: "var(--font-body)" }}>Reserve your place</p>
              <p className="text-2xl sm:text-3xl font-light text-[var(--color-navy)] leading-snug" style={{ fontFamily: "var(--font-display)" }}>{trip!.shortName}</p>
            </div>
            <Link href={"/book?trip=" + trip!.slug} className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-amber)] text-white text-[14px] font-medium hover:bg-[var(--color-amber-light)] hover:shadow-[0_8px_28px_-6px_rgba(196,146,74,0.45)] hover:-translate-y-px active:scale-[0.97] transition-all duration-300 whitespace-nowrap shrink-0" style={{ fontFamily: "var(--font-body)" }}>
              Reserve this trip · US${trip!.price} · {trip!.priceNote}
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-16 lg:py-24">
          <Reveal>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-light text-white leading-[1.2] mb-5 max-w-lg" style={{ fontFamily: "var(--font-display)" }}>
              Every route can be adjusted.
            </h2>
            <p className="text-[14px] text-white/40 leading-relaxed max-w-md mb-10" style={{ fontFamily: "var(--font-body)" }}>
              Slower, faster, fewer stops, or something not on this page at all — tell us what you have in mind and we will put it together.
            </p>
            <Link href="/trips/custom" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white text-[13.5px] font-medium hover:bg-white/[0.06] hover:border-white/35 transition-all duration-300" style={{ fontFamily: "var(--font-body)" }}>
              Plan a custom trip
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
