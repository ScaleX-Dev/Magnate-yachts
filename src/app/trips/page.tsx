import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

export const metadata: Metadata = {
  title: "Trips — Magnate Yachts Sri Lanka",
  description:
    "Optional guided road trips for visiting crew. Transportation and driver only — you're free to book your own stays.",
};

const TRIPS = [
  {
    slug: "3-day",
    badge: "3 DAYS",
    duration: "3-Day",
    price: "from US $—",
    destinations: "Galle Fort · south coast · Ella",
    photo: "Photograph — Nine Arch Bridge, Ella, tea country",
  },
  {
    slug: "5-day",
    badge: "5 DAYS",
    duration: "5-Day",
    price: "from US $—",
    destinations: "+ Nuwara Eliya · tea country · waterfalls",
    photo: "Photograph — Tea plantation road, Nuwara Eliya",
  },
  {
    slug: "7-day",
    badge: "7 DAYS",
    duration: "7-Day",
    price: "from US $—",
    destinations: "+ Sigiriya · Dambulla · Kandy · Pinnawala",
    photo: "Photograph — Sigiriya rock fortress, Sri Lanka",
  },
];

const DESTINATIONS = ["Ella", "Nuwara Eliya", "Sigiriya", "Dambulla", "Pinnawala", "Kandy", "Colombo"];

const INCLUDED = [
  "Private air-conditioned vehicle",
  "English-speaking driver-guide",
  "Fuel and daily routing",
  "Pickup from the harbour",
];

const NOT_INCLUDED = [
  "Hotels & accommodation (book your own)",
  "Meals & entry tickets",
  "Personal expenses",
];

export default function TripsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-20 lg:py-28">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-5">
            Land trips · Sri Lanka
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold text-[var(--color-navy)] leading-[1.1] mb-5 max-w-lg"
            style={{ fontFamily: "var(--font-display)" }}
          >
            See Sri Lanka<br />by land
          </h1>
          <p className="text-[var(--color-navy)]/55 max-w-md text-sm leading-relaxed">
            Optional guided road trips for visiting crew. Transportation and driver only — you&apos;re free to book your own stays.
          </p>
        </div>
      </section>

      {/* ── Trip cards ─────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-site py-16 lg:py-20">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[var(--color-navy)] mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Choose your trip
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {TRIPS.map(({ slug, badge, duration, price, destinations, photo }) => (
              <div key={slug} className="border border-[var(--color-ivory-dark)] flex flex-col group">
                <div className="overflow-hidden">
                  <ImgPlaceholder
                    label={photo}
                    aspectRatio="aspect-[4/3]"
                    className="rounded-none transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)]">
                    {badge}
                  </span>
                  <h3
                    className="text-2xl font-semibold text-[var(--color-navy)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {duration}
                  </h3>
                  <p className="text-[12px] text-[var(--color-navy)]/40 font-medium">{price}</p>
                  <p className="text-[12.5px] text-[var(--color-navy)]/55 leading-relaxed">
                    {destinations}
                  </p>
                  <div className="mt-auto pt-4">
                    <Link
                      href={`/trips/${slug}`}
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-[var(--color-navy)] text-white text-[13px] font-medium hover:bg-[var(--color-navy-dark)] transition-colors"
                    >
                      Book this trip <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom enquiry */}
          <div className="border border-[var(--color-ivory-dark)] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-[var(--color-ivory)]">
            <div>
              <p className="font-semibold text-[var(--color-navy)] text-[15px] mb-1.5">
                Longer than 7 days, or something custom?
              </p>
              <p className="text-[12.5px] text-[var(--color-navy)]/55 leading-relaxed">
                Tell us where you&apos;d like to go and we&apos;ll build it around your schedule.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-navy)] text-[var(--color-navy)] text-sm font-medium hover:bg-[var(--color-navy)] hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Enquire by email <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Where you'll go ───────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-16 lg:py-20">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[var(--color-navy)] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Where you&apos;ll go
          </h2>

          <div className="flex flex-wrap gap-2 mb-10">
            {DESTINATIONS.map((dest) => (
              <span
                key={dest}
                className="px-4 py-2 border border-[var(--color-navy)]/15 text-[13px] text-[var(--color-navy)] font-medium rounded-full"
              >
                {dest}
              </span>
            ))}
          </div>

          <div className="border border-[var(--color-ivory-dark)] bg-[var(--color-ivory-dark)]/50 h-72 flex items-center justify-center">
            <span className="text-[10px] text-[var(--color-navy)]/35 uppercase tracking-widest">
              [ Map of Sri Lanka — route highlights ]
            </span>
          </div>
        </div>
      </section>

      {/* ── What's included / not ─────────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-site py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2
                className="text-xl sm:text-2xl font-semibold text-[var(--color-navy)] mb-7"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What&apos;s included
              </h2>
              <ul className="flex flex-col gap-4">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[var(--color-navy)]/65 leading-relaxed">
                    <Check size={14} className="text-[var(--color-amber)] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2
                className="text-xl sm:text-2xl font-semibold text-[var(--color-navy)] mb-7"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Not included
              </h2>
              <ul className="flex flex-col gap-4">
                {NOT_INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[var(--color-navy)]/45 leading-relaxed">
                    <Minus size={14} className="text-[var(--color-navy)]/20 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
