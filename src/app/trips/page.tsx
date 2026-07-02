import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { DAY_TRIPS, TRIPS } from "@/lib/trips-data";

export const metadata: Metadata = {
  title: "Excursions — Magnate Yachts Sri Lanka",
  description:
    "One day excursions from Galle. Safari in Yala or a full day through Galle Fort, tea country, and spice gardens.",
};

const WHATSAPP = "https://wa.me/94XXXXXXXXX";

export default function ExcursionsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <span
              className="block text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-amber)] mb-7"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Excursions · Sri Lanka
            </span>
            <h1
              className="text-[clamp(2.25rem,6vw,4.5rem)] font-light text-white leading-[1.1] mb-4 max-w-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              One Day
              <br />
              <span className="italic text-white/40">Excursions</span>
            </h1>
            <p
              className="text-[14.5px] text-white/40 max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Day trip, two ways to spend it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Day trips ─────────────────────────────────────────────────── */}
      {DAY_TRIPS.map((trip, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <section
            key={trip.slug}
            className={i % 2 === 0 ? "bg-[var(--color-ivory)]" : "bg-white"}
          >
            <div className="container-site py-16 lg:py-24">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  imageLeft ? "" : "lg:[direction:rtl] [&>*]:[direction:ltr]"
                }`}
              >
                {/* Image */}
                <Reveal delay={0.05}>
                  <ImgPlaceholder
                    label={trip.imageLabel}
                    aspectRatio="aspect-[4/3]"
                    className="rounded-xl shadow-[0_24px_60px_-30px_rgba(11,31,58,0.25)]"
                  />
                </Reveal>

                {/* Content */}
                <Reveal delay={0.1} className="flex flex-col gap-6">
                  <h2
                    className="text-3xl sm:text-4xl font-semibold text-[var(--color-navy)] leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {trip.name}
                  </h2>

                  <div className="flex flex-col gap-4">
                    {trip.paragraphs.map((para, j) => (
                      <p
                        key={j}
                        className="text-[14px] text-[var(--color-navy)]/58 leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Included */}
                  <div className="pt-5 border-t border-[var(--color-ivory-dark)]">
                    <p
                      className="text-[9px] uppercase tracking-[0.22em] text-[var(--color-amber)] mb-3"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Included
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {trip.included.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[13px] text-[var(--color-navy)]/60 leading-relaxed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          <Check
                            size={12}
                            className="text-[var(--color-amber)] shrink-0 mt-[3px]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not included */}
                  <div>
                    <p
                      className="text-[9px] uppercase tracking-[0.22em] text-[var(--color-navy)]/30 mb-3"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Not included
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {trip.notIncluded.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[13px] text-[var(--color-navy)]/40 leading-relaxed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          <Minus
                            size={12}
                            className="text-[var(--color-navy)]/22 shrink-0 mt-[3px]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href={`${WHATSAPP}?text=${encodeURIComponent(
                      `I'd like to reserve the ${trip.name} day trip (US$${trip.price})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--color-amber)] text-white text-[13.5px] font-medium hover:bg-[var(--color-amber-light)] hover:shadow-[0_8px_28px_-6px_rgba(196,146,74,0.45)] hover:-translate-y-px active:scale-[0.97] transition-all duration-300 w-fit mt-1"
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
            </div>
          </section>
        );
      })}

      {/* ── Multi-day options ─────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-16 lg:py-24">
          <Reveal>
            <p
              className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-amber)] mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              More time in Sri Lanka?
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,3rem)] font-light text-white leading-[1.15] mb-10"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Multi-day trips
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {TRIPS.map((trip) => (
                <div
                  key={trip.slug}
                  className="group border border-white/[0.09] rounded-xl p-7 flex flex-col gap-4 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
                >
                  <span
                    className="text-[9px] uppercase tracking-[0.24em] text-[var(--color-amber)]/60"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {trip.badge}
                  </span>
                  <h3
                    className="text-2xl font-semibold text-white leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {trip.shortName}
                  </h3>
                  <p
                    className="text-[13px] text-white/40 leading-relaxed flex-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {trip.subtitle}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.07]">
                    <span
                      className="text-[12px] text-white/28 font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      from US${trip.price}
                    </span>
                    <Link
                      href={`/trips/${trip.slug}`}
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/45 hover:text-white transition-colors duration-200"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      See this trip{" "}
                      <ArrowRight
                        size={12}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
