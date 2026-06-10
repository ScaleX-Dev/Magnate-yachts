import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

const TRIPS = [
  {
    slug: "3-day",
    duration: "Three days",
    subtitle: "Galle · South coast · Ella",
    price: "from US $—",
    description:
      "We'll take you down the south coast and up into Ella. The train ride through the tea country is the one the locals tell their friends about. Two nights somewhere quiet — the kind of place that wasn't built for tour buses.",
    photo: "Photograph — Nine Arch Bridge train, Ella",
    photoTitle: "Nine Arch Bridge train, Ella",
    credit: "Photo: Rose (Sine) / Unknown",
    tags: ["3 Day", "North·South route", "Galle coast", "Ella", "tea country", "south-coast"],
  },
  {
    slug: "5-day",
    duration: "Five days",
    subtitle: "+ Nuwara Eliya · tea country",
    price: "from US $—",
    description:
      "Adding the high-country colonial bungalows, cold mornings, the strangest light you've ever seen above 6,000 feet. A working tea estate. A night where the only sound is rain on a tin roof.",
    photo: "Photograph — Tea plantation road, Nuwara Eliya",
    photoTitle: "Tea plantation road, Nuwara Eliya",
    credit: "Photo: Thomas (Sine) / Unknown",
    tags: ["5 Day", "North·South route", "tea country", "Nuwara Eliya", "Ella", "waterfalls"],
  },
  {
    slug: "7-day",
    duration: "A full week",
    subtitle: "+ Sigiriya · Dambulla · Kandy",
    price: "from US $—",
    description:
      "The whole island opens up. Sigiriya at sunrise — yes, the climb is worth it. An elephant safari at Udawalawe on the way back. A clean handover from Galle Fort before you sail.",
    photo: "Photograph — Sigiriya rock fortress",
    photoTitle: "Sigiriya rock fortress",
    credit: "Photo: Ryan (Sine) / Unknown",
    tags: ["7 Day", "Sigiriya", "Dambulla", "Kandy", "full island", "elephant safari"],
  },
];

export function TripsPreview() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="container-site py-20">
        {/* Section heading */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-3">
            If you&apos;ve got a week, here&apos;s what we&apos;d do with it.
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold text-[var(--color-navy)] max-w-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            These aren&apos;t packages. They&apos;re how we&apos;d build it for a family on your boat — built from what other crews have loved, then adjusted around your time and your people.
          </h2>
        </div>

        {/* Trip cards */}
        <div className="flex flex-col gap-14">
          {TRIPS.map(({ slug, duration, subtitle, price, description, photo, photoTitle, credit, tags }) => (
            <div key={slug}>
              {/* Reference header */}
              <div className="flex items-start justify-between gap-4 bg-white border border-[var(--color-ivory-dark)] border-b-0 px-4 py-3 rounded-t-sm">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)]">
                      Reference Made
                    </span>
                    <ChevronRight size={11} className="text-[var(--color-amber)] shrink-0" />
                    <span className="text-xs font-medium text-[var(--color-navy)] truncate">
                      {photoTitle}
                    </span>
                  </div>
                  <p className="text-[10px] text-[var(--color-navy)]/40 mt-0.5">{credit}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end shrink-0 max-w-[45%]">
                  {tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-[var(--color-navy)]/40 border border-[var(--color-navy)]/10 px-2 py-0.5 rounded-sm whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image */}
              <ImgPlaceholder
                label={photo}
                aspectRatio="aspect-[3/2]"
                className="rounded-none"
              />

              {/* Route tag strip */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-[var(--color-ivory-dark)] py-2.5">
                {tags.map((tag, i) => (
                  <span key={tag} className="flex items-center gap-2">
                    {i > 0 && (
                      <span className="text-[var(--color-navy)]/20 text-xs select-none">·</span>
                    )}
                    <span className="text-xs text-[var(--color-navy)]/40">{tag}</span>
                  </span>
                ))}
              </div>

              {/* Content row */}
              <div className="pt-5 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3
                      className="text-2xl font-semibold text-[var(--color-navy)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {duration}
                    </h3>
                    <p className="text-xs font-medium text-[var(--color-amber)] uppercase tracking-widest mt-1">
                      {subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-sm text-[var(--color-navy)]/40">{price}</span>
                    <Link
                      href={`/trips/${slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-navy)] bg-white border border-[var(--color-navy)]/20 px-3 py-1.5 rounded-sm hover:border-[var(--color-navy)] transition-colors whitespace-nowrap"
                    >
                      This one <ChevronDown size={11} />
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-navy)]/70 leading-relaxed max-w-2xl">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Custom enquiry */}
        <div className="mt-16 border border-[var(--color-ivory-dark)] rounded-sm p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-[var(--color-navy)] mb-1">
              Longer, shorter, or something only your family would think of?
            </p>
            <p className="text-sm text-[var(--color-navy)]/60">
              Tell us where you&apos;re on your boat and what you&apos;ve already seen on this passage. We&apos;ll build the rest around it.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-navy)] text-[var(--color-navy)] text-sm font-medium rounded-sm hover:bg-[var(--color-navy)] hover:text-white transition-colors whitespace-nowrap"
          >
            Tell us about your crew <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
