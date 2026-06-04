import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sailing Trips — Magnate Yachts Sri Lanka",
  description:
    "Three-day, five-day, and week-long trips across Sri Lanka built around your crew and your boat.",
};

const TRIPS = [
  {
    slug: "3-day",
    duration: "Three days",
    tag: "Galle · South coast · Ella",
    price: "from US $—",
    description:
      "Down the south coast and up into Ella. The train ride through the tea country is the one the locals tell their friends about. Two nights in a quiet villa — the kind of place that wasn't built for tour buses.",
    photo: "Photograph — Ella train, tea country, Sri Lanka",
  },
  {
    slug: "5-day",
    duration: "Five days",
    tag: "+ Nuwara Eliya · high country · waterfalls",
    price: "from US $—",
    description:
      "Adding the colonial bungalows of the high country, cold mornings and the strangest light you've ever seen above 6,000 feet. A working tea estate. A night where the only sound is rain on a tin roof.",
    photo: "Photograph — Nuwara Eliya tea country, mist morning",
  },
  {
    slug: "7-day",
    duration: "A full week",
    tag: "+ Sigiriya · Dambulla · Kandy",
    price: "from US $—",
    description:
      "The whole island. Sigiriya at sunrise — yes, the climb is worth it. An elephant safari at Udawalawe on the way back to Galle Fort before you sail.",
    photo: "Photograph — Sigiriya Rock Fortress dawn, Sri Lanka",
  },
];

const INCLUDED = [
  "Dedicated driver and guide throughout",
  "Handpicked accommodation — not hotel chains",
  "All internal transfers included",
  "Entrance fees at all sites",
  "A single WhatsApp line — one person to call",
];

const NOT_INCLUDED = [
  "International flights",
  "Personal travel insurance",
  "Meals (except where noted per trip)",
  "Alcohol",
];

const DESTINATIONS = [
  { name: "Galle Fort", body: "The 16th-century Dutch walled city. Stay inside the walls." },
  { name: "Ella", body: "Tea country. The Nine Arch Bridge. The train." },
  { name: "Nuwara Eliya", body: "Colonial hill country. Strawberries in June. Cold in a way the rest of Sri Lanka never is." },
  { name: "Sigiriya", body: "A rock fortress 180 metres above the jungle. Frescoes. The climb." },
  { name: "Kandy", body: "The temple. The lake. The last Kandyan kingdom." },
  { name: "Udawalawe", body: "Wild elephants at close range on a national park safari." },
];

export default function TripsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-20 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-4">
            If you&apos;ve got a week — use it.
          </p>
          <h1
            className="text-4xl sm:text-5xl font-semibold text-[var(--color-navy)] max-w-3xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Three-day, five-day, and week-long trips across Sri Lanka — built around your crew and the time you have.
          </h1>
          <p className="text-[var(--color-navy)]/60 max-w-xl text-sm leading-relaxed">
            These aren&apos;t packages. They&apos;re how we&apos;d build it for the people actually on your boat — starting from what other crews have loved, then adjusted around your time and your people.
          </p>
        </div>
      </section>

      {/* Trip cards */}
      <section className="bg-white">
        <div className="container-site py-20 flex flex-col gap-20">
          {TRIPS.map(({ slug, duration, tag, price, description, photo }) => (
            <div
              key={slug}
              id={slug}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
            >
              <ImgPlaceholder label={photo} aspectRatio="aspect-[16/10]" />
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)]">
                  {tag}
                </p>
                <h2
                  className="text-3xl font-semibold text-[var(--color-navy)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {duration}
                </h2>
                <p className="text-sm text-[var(--color-navy)]/70 leading-relaxed">{description}</p>
                <div className="flex items-baseline gap-4">
                  <span className="text-sm text-[var(--color-navy)]/50">{price}</span>
                </div>
                <Button href={`/trips/${slug}`} variant="primary" size="md" arrow>
                  See this trip
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom enquiry */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2
                className="text-2xl font-semibold text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Longer, shorter, or something only your family would think of?
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Tell us where you are on your passage and what you&apos;ve already seen. We&apos;ll build the rest around it.
              </p>
            </div>
            <Button href="/contact" variant="outline" size="lg" arrow>
              Talk to us
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-20">
          <h2
            className="text-2xl font-semibold text-[var(--color-navy)] mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Places we take you to
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS.map(({ name, body }) => (
              <div
                key={name}
                className="border border-[var(--color-ivory-dark)] rounded-sm p-6 flex flex-col gap-2"
              >
                <h3 className="font-semibold text-[var(--color-navy)]">{name}</h3>
                <p className="text-sm text-[var(--color-navy)]/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included / not included */}
      <section className="bg-white">
        <div className="container-site py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-xl font-semibold text-[var(--color-navy)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Included in all trips
              </h2>
              <ul className="flex flex-col gap-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[var(--color-navy)]/70 leading-relaxed">
                    <CheckCircle2 size={15} className="text-[var(--color-amber)] shrink-0 mt-0.5" />
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
                  <li key={item} className="flex gap-3 text-sm text-[var(--color-navy)]/50 leading-relaxed">
                    <XCircle size={15} className="text-[var(--color-navy)]/20 shrink-0 mt-0.5" />
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
