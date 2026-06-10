import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

const TRIPS = [
  {
    slug: "3-day",
    duration: "Three days",
    badge: "3 DAYS",
    subtitle: "Galle · South coast · Ella",
    price: "from US $—",
    description:
      "We'll take you down the south coast and up into Ella. The train ride through the tea country is the one the locals tell their friends about. Two nights somewhere quiet — the kind of place that wasn't built for tour buses.",
    photo: "Photograph — Nine Arch Bridge train, Ella, tea country",
  },
  {
    slug: "5-day",
    duration: "Five days",
    badge: "5 DAYS",
    subtitle: "+ Nuwara Eliya · tea country",
    price: "from US $—",
    description:
      "Adding the high-country colonial bungalows, cold mornings, the strangest light you've ever seen above 6,000 feet. A working tea estate. A night where the only sound is rain on a tin roof.",
    photo: "Photograph — Tea plantation road, Nuwara Eliya, hill country",
  },
  {
    slug: "7-day",
    duration: "A full week",
    badge: "7 DAYS",
    subtitle: "+ Sigiriya · Dambulla · Kandy",
    price: "from US $—",
    description:
      "The whole island opens up. Sigiriya at sunrise — yes, the climb is worth it. An elephant safari at Udawalawe on the way back. A clean handover from Galle Fort before you sail.",
    photo: "Photograph — Sigiriya rock fortress at dawn, ancient Sri Lanka",
  },
];

export function TripsPreview() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="container-site py-20 lg:py-28">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-4">
            If you&apos;ve got a week, here&apos;s what we&apos;d do with it.
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--color-navy)] max-w-2xl leading-snug"
            style={{ fontFamily: "var(--font-display)" }}
          >
            These aren&apos;t packages. They&apos;re how we&apos;d build it for a family on your boat — built from what other crews have loved, then adjusted around your time and your people.
          </h2>
        </div>

        {/* Trip cards */}
        <div className="flex flex-col divide-y divide-[var(--color-ivory-dark)]">
          {TRIPS.map(({ slug, duration, badge, subtitle, price, description, photo }) => (
            <div key={slug} className="py-12 first:pt-0 last:pb-0">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-14 items-start">

                {/* Image */}
                <ImgPlaceholder
                  label={photo}
                  aspectRatio="aspect-[16/9]"
                  className="rounded-none"
                />

                {/* Content */}
                <div className="flex flex-col gap-4 lg:pt-2">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)]">
                    {badge}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-semibold text-[var(--color-navy)] leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {duration}
                  </h3>
                  <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--color-navy)]/40">
                    {subtitle}
                  </p>
                  <p className="text-sm text-[var(--color-navy)]/60 leading-relaxed">
                    {description}
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <span className="text-sm text-[var(--color-navy)]/40">{price}</span>
                    <Link
                      href={`/trips/${slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-amber)] transition-colors"
                    >
                      See this trip <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Custom enquiry */}
        <div className="mt-14 border border-[var(--color-ivory-dark)] bg-white p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-[var(--color-navy)] text-[15px] mb-1.5">
              Longer, shorter, or something only your family would think of?
            </p>
            <p className="text-sm text-[var(--color-navy)]/55 leading-relaxed max-w-md">
              Tell us where you&apos;re on your boat and what you&apos;ve already seen on this passage. We&apos;ll build the rest around it.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-navy)] text-[var(--color-navy)] text-sm font-medium hover:bg-[var(--color-navy)] hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Tell us about your crew <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
