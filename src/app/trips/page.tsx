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
    duration: "3-Day",
    price: "from US $—",
    destinations: "Galle Fort · south coast · Ella",
    photo: "Photograph — Ella, tea country, Sri Lanka",
  },
  {
    slug: "5-day",
    duration: "5-Day",
    price: "from US $—",
    destinations: "+ Nuwara Eliya · tea country · waterfalls",
    photo: "Photograph — Nuwara Eliya, Sri Lanka",
  },
  {
    slug: "7-day",
    duration: "7-Day",
    price: "from US $—",
    destinations: "+ Sigiriya · Dambulla · Kandy · Pinnawala",
    photo: "Photograph — Sigiriya rock fortress, Sri Lanka",
  },
];

const DESTINATIONS = [
  "Ella",
  "Nuwara Eliya",
  "Sigiriya",
  "Dambulla",
  "Pinnawala",
  "Kandy",
  "Colombo",
];

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
      {/* Hero */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-16 lg:py-20">
          <h1
            className="text-4xl sm:text-5xl font-semibold text-[var(--color-navy)] leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            See Sri Lanka by land
          </h1>
          <p className="text-[var(--color-navy)]/60 max-w-lg text-sm leading-relaxed">
            Optional guided road trips for visiting crew. Transportation and driver only —
            you&apos;re free to book your own stays.
          </p>
        </div>
      </section>

      {/* Trip cards */}
      <section className="bg-white">
        <div className="container-site py-16">
          <h2
            className="text-2xl font-semibold text-[var(--color-navy)] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Choose your trip
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {TRIPS.map(({ slug, duration, price, destinations, photo }) => (
              <div
                key={slug}
                className="border border-[var(--color-ivory-dark)] rounded-sm overflow-hidden flex flex-col"
              >
                <ImgPlaceholder label={photo} aspectRatio="aspect-[16/9]" />
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3
                    className="text-2xl font-semibold text-[var(--color-navy)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {duration}
                  </h3>
                  <p className="text-sm text-[var(--color-navy)]/50">{price}</p>
                  <p className="text-xs text-[var(--color-navy)]/60 leading-relaxed">
                    {destinations}
                  </p>
                  <div className="mt-auto pt-5">
                    <Link
                      href={`/trips/${slug}`}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[var(--color-navy)] text-white text-sm font-medium rounded-sm hover:bg-[var(--color-navy-dark)] transition-colors"
                    >
                      Book this trip <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom enquiry */}
          <div className="border border-[var(--color-ivory-dark)] rounded-sm p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[var(--color-navy)] text-sm mb-1">
                Longer than 7 days, or something custom?
              </p>
              <p className="text-xs text-[var(--color-navy)]/60">
                Tell us where you&apos;d like to go and we&apos;ll build it around your schedule.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-navy)] text-[var(--color-navy)] text-sm font-medium rounded-sm hover:bg-[var(--color-navy)] hover:text-white transition-colors whitespace-nowrap"
            >
              Enquire by email <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Where you'll go */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-16">
          <h2
            className="text-2xl font-semibold text-[var(--color-navy)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Where you&apos;ll go
          </h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {DESTINATIONS.map((dest) => (
              <span
                key={dest}
                className="px-4 py-2 border border-[var(--color-navy)]/20 rounded-full text-sm text-[var(--color-navy)] font-medium"
              >
                {dest}
              </span>
            ))}
          </div>

          <div className="border border-[var(--color-ivory-dark)] rounded-sm bg-[var(--color-ivory-dark)]/60 h-80 flex items-center justify-center">
            <span className="text-xs text-[var(--color-navy)]/40 uppercase tracking-widest">
              [ Map of Sri Lanka — route highlights ]
            </span>
          </div>
        </div>
      </section>

      {/* What's included / Not included */}
      <section className="bg-white">
        <div className="container-site py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-xl font-semibold text-[var(--color-navy)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What&apos;s included
              </h2>
              <ul className="flex flex-col gap-3">
                {INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-[var(--color-navy)]/70 leading-relaxed"
                  >
                    <Check size={15} className="text-[var(--color-amber)] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2
                className="text-xl font-semibold text-[var(--color-navy)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Not included
              </h2>
              <ul className="flex flex-col gap-3">
                {NOT_INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-[var(--color-navy)]/50 leading-relaxed"
                  >
                    <Minus size={15} className="text-[var(--color-navy)]/25 shrink-0 mt-0.5" />
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
