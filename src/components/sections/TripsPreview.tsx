import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Reveal } from "@/components/ui/Reveal";

const TRIPS = [
  {
    href: "/trips",
    number: "01",
    duration: "Day excursions",
    subtitle: "Safari in Yala, or a day through Galle Fort and tea country",
    tag: "From US$75",
  },
  {
    href: "/trips/3-day",
    number: "02",
    duration: "Safari & Hill Country",
    subtitle: "Yala or Udawalawe, then up into Ella",
    tag: "US$560",
  },
  {
    href: "/trips/5-day",
    number: "03",
    duration: "Wilderness to Ancient Kingdoms",
    subtitle: "Leopard country, hill country, Kandy, Sigiriya",
    tag: "US$940",
  },
];

export function TripsPreview() {
  return (
    <section style={{ backgroundImage: [
      "radial-gradient(ellipse 55% 50% at  -5% 0%,   rgba(15,29,51,0.06)   0%, transparent 65%)",
      "radial-gradient(ellipse 50% 45% at 105% 100%, rgba(15,29,51,0.05)   0%, transparent 65%)",
      "radial-gradient(ellipse 40% 38% at  98%  2%,  rgba(196,146,74,0.08) 0%, transparent 60%)",
      "linear-gradient(160deg, #EDE1CB 0%, var(--color-trips) 40%, #E0D3B8 100%)",
    ].join(", ") }}>
      <div className="container-site py-14 md:py-18 lg:py-24">

        {/* Header */}
        <Reveal className="mb-10">
          <h2
            className="text-[clamp(2rem,5.5vw,4rem)] font-light leading-[1.1] mb-5"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
          >
            Bespoke Trips Around the Island
          </h2>
          <p
            className="text-[17px] leading-relaxed max-w-sm"
            style={{ color: "rgba(15,29,51,0.55)", fontFamily: "var(--font-body)" }}
          >
            Curated journeys to Sri Lanka&apos;s most scenic destinations, helping you make the most of your time ashore.
          </p>
        </Reveal>

        {/* Hero image */}
        <Reveal delay={0.08} className="mb-10">
          <div style={{ boxShadow: "0 24px 60px -20px rgba(15,29,51,0.25), 0 0 0 1px rgba(15,29,51,0.08)", borderRadius: "16px", overflow: "hidden" }}>
            <ImgPlaceholder
              src="/images/site/trips-preview-banner.jpg"
              label="Sigiriya rock fortress, Sri Lanka"
              aspectRatio="aspect-[21/9]"
              className="rounded-2xl"
            />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <span
            className="block text-[9.5px] font-medium uppercase tracking-[0.25em] mb-6"
            style={{ color: "rgba(15,29,51,0.4)", fontFamily: "var(--font-accent)" }}
          >
            Where Magnate would take you
          </span>
        </Reveal>

        {/* Trip list */}
        <div className="flex flex-col" style={{ borderTop: "1px solid rgba(15,29,51,0.12)" }}>
          {TRIPS.map(({ href, number, duration, subtitle, tag }, i) => (
            <Reveal key={href} delay={i * 0.09} y={14}>
              <Link
                href={href}
                className="group relative flex items-center gap-4 sm:gap-8 py-6 sm:py-7 px-4 -mx-4 rounded-xl transition-all duration-300 active:scale-[0.99] hover:bg-[rgba(15,29,51,0.05)] hover:px-6"
                style={{ borderBottom: "1px solid rgba(15,29,51,0.12)" }}
              >
                <span
                  className="text-sm font-medium w-6 shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ fontFamily: "var(--font-display)", color: "rgba(15,29,51,0.35)" }}
                >
                  {number}
                </span>

                <div className="flex-1 min-w-0">
                  <h3
                    className="text-[1.35rem] sm:text-[1.6rem] font-light leading-tight"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
                  >
                    {duration}
                  </h3>
                  <p
                    className="text-[13px] mt-1 truncate"
                    style={{ color: "rgba(15,29,51,0.45)", fontFamily: "var(--font-body)" }}
                  >
                    {subtitle}
                  </p>
                </div>

                <span
                  className="hidden sm:block text-[11px] font-medium shrink-0"
                  style={{ color: "rgba(15,29,51,0.4)", fontFamily: "var(--font-body)" }}
                >
                  {tag}
                </span>

                <span
                  className="hidden sm:inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] whitespace-nowrap shrink-0 transition-colors duration-200 group-hover:opacity-100"
                  style={{ color: "rgba(15,29,51,0.35)", fontFamily: "var(--font-accent)" }}
                >
                  View trip
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <ArrowRight
                  size={15}
                  className="sm:hidden shrink-0 transition-colors"
                  style={{ color: "rgba(15,29,51,0.35)" }}
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/trips"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-medium transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "var(--color-navy)", color: "var(--color-trips)", fontFamily: "var(--font-body)", boxShadow: "0 8px 28px -8px rgba(15,29,51,0.3)" }}
          >
            View all trips
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/trips/custom"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-medium transition-all duration-300"
            style={{ border: "1px solid rgba(15,29,51,0.2)", color: "rgba(15,29,51,0.6)", fontFamily: "var(--font-body)" }}
          >
            Custom itinerary
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
