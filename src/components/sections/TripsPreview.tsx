import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

const TRIPS = [
  {
    slug: "3-day",
    duration: "Three days",
    subtitle: "Galle · South coast · Ella",
    price: "from US $—",
    description:
      "We'll take you down the south coast and up into Ella. The train ride through the tea country is the one the locals tell their friends about. Two nights somewhere quiet — the kind of place that wasn't built for tour buses.",
    photo: "Photograph — Ella Train, Tea country",
  },
  {
    slug: "5-day",
    duration: "Five days",
    subtitle: "+ Nuwara Eliya · tea country · waterfalls",
    price: "from US $—",
    description:
      "Adding the high-country colonial bungalows, cold mornings, the strangest light you've ever seen above 6,000 feet. A working tea estate. A night where the only sound is rain on a tin roof.",
    photo: "Photograph — Nuwara Eliya · Tea country",
  },
  {
    slug: "7-day",
    duration: "A full week",
    subtitle: "+ Sigiriya · Dambulla · Kandy",
    price: "from US $—",
    description:
      "The whole island opens up. Sigiriya at sunrise — yes, the climb is worth it. An elephant safari at Udawalawe on the way back to Galle Fort before you sail.",
    photo: "Photograph — Sigiriya Rock Fortress",
  },
];

export function TripsPreview() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="container-site py-20">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-3">
            If you&apos;ve got a week, here&apos;s what we&apos;d do with it.
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold text-[var(--color-navy)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            These aren&apos;t packages. They&apos;re how we&apos;d build it for a family on your boat — built from what other crews have loved, then adjusted around your time and your people.
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {TRIPS.map(({ slug, duration, subtitle, price, description, photo }) => (
            <div key={slug} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <ImgPlaceholder label={photo} aspectRatio="aspect-[16/10]" />
              <div className="flex flex-col gap-4 py-4">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h3
                    className="text-2xl font-semibold text-[var(--color-navy)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {duration}
                  </h3>
                  <span className="text-sm text-[var(--color-navy)]/50">{price}</span>
                </div>
                <p className="text-xs font-medium text-[var(--color-amber)] uppercase tracking-widest">{subtitle}</p>
                <p className="text-sm text-[var(--color-navy)]/70 leading-relaxed">{description}</p>
                <Link
                  href={`/trips/${slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-amber)] transition-colors mt-2"
                >
                  This one <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom */}
        <div className="mt-14 border border-[var(--color-ivory-dark)] rounded-sm p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
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
            Tell us about your crew <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
