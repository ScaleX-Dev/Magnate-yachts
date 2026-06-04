import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Button } from "@/components/ui/Button";

type TripSlug = "3-day" | "5-day" | "7-day";

interface TripData {
  duration: string;
  tag: string;
  price: string;
  intro: string;
  heroPhoto: string;
  days: { label: string; body: string }[];
  stays: string[];
}

const TRIPS: Record<TripSlug, TripData> = {
  "3-day": {
    duration: "Three days",
    tag: "Galle · South coast · Ella",
    price: "from US $—",
    intro:
      "Down the south coast and up into the tea country. The train through Ella is the one the locals tell their friends about. Two nights in a quiet villa — the kind of place that wasn't built for tour buses.",
    heroPhoto: "Photograph — Nine Arch Bridge, Ella, Sri Lanka",
    days: [
      {
        label: "Day one — Galle Fort and the south coast road",
        body: "We start at the fort. Breakfast inside the walls. Then down the coast road — sea on one side, jungle on the other — stopping at Mirissa or Tangalle depending on your crew. Overnight in Ella.",
      },
      {
        label: "Day two — The hills",
        body: "Ella Rock in the morning before the heat. The Nine Arch Bridge. A walk through a working tea estate. Overnight in Ella.",
      },
      {
        label: "Day three — Back to Galle",
        body: "The train from Ella to Colombo is the famous one — we'll book you into it. Return to Galle Fort by car. Back to your boat by evening.",
      },
    ],
    stays: ["Two nights in Ella — a villa or boutique stay, not a hotel chain"],
  },
  "5-day": {
    duration: "Five days",
    tag: "Galle · Ella · Nuwara Eliya · high country",
    price: "from US $—",
    intro:
      "Everything in the three-day trip, then up to the colonial bungalow country of Nuwara Eliya. Cold mornings. Strawberries. The strangest light you've ever seen at 6,000 feet. A working tea estate.",
    heroPhoto: "Photograph — Nuwara Eliya, tea fields, hill country Sri Lanka",
    days: [
      {
        label: "Day one — Galle Fort and south coast",
        body: "The fort, the coast road, Mirissa or Tangalle. Overnight near Ella.",
      },
      {
        label: "Day two — Ella",
        body: "Ella Rock. The Nine Arch Bridge. A working estate tour. Overnight in Ella.",
      },
      {
        label: "Day three — Up to Nuwara Eliya",
        body: "The drive up is the highlight — winding roads through estates, waterfalls alongside. Afternoon walk around the lake. Overnight Nuwara Eliya.",
      },
      {
        label: "Day four — High country",
        body: "Horton Plains National Park and World's End in the morning. Colonial tea club for lunch. Gregory Lake by afternoon. Overnight Nuwara Eliya.",
      },
      {
        label: "Day five — Return to Galle",
        body: "Down from the hills. Back to the coast. Back to your boat.",
      },
    ],
    stays: [
      "Two nights in Ella",
      "Two nights in Nuwara Eliya — colonial bungalow or planter's estate stay",
    ],
  },
  "7-day": {
    duration: "A full week",
    tag: "Galle · Ella · Nuwara Eliya · Sigiriya · Kandy",
    price: "from US $—",
    intro:
      "The whole island. A week that takes you from the south coast tea country up to the ancient rock fortresses of the Cultural Triangle, and back. Sigiriya at sunrise, an elephant safari, and Kandy on the way home.",
    heroPhoto: "Photograph — Sigiriya Rock Fortress at dawn, Sri Lanka",
    days: [
      {
        label: "Days one–two — South coast and Ella",
        body: "Galle Fort, the coast road, Ella Rock, Nine Arch Bridge. Two nights in the hills.",
      },
      {
        label: "Day three — Nuwara Eliya",
        body: "Drive up through tea country to the colonial bungalow belt. Horton Plains in the afternoon.",
      },
      {
        label: "Day four — Drive north to Dambulla",
        body: "The cave temple at Dambulla. Overnight near Sigiriya.",
      },
      {
        label: "Day five — Sigiriya",
        body: "Sigiriya Rock Fortress at sunrise — the climb takes 45 minutes, the views stay with you longer. Udawalawe National Park for an elephant safari in the afternoon.",
      },
      {
        label: "Day six — Kandy",
        body: "The Temple of the Tooth. The lake. The last royal city of the Kandyan kingdom. Overnight in Kandy.",
      },
      {
        label: "Day seven — Return to Galle",
        body: "Back to the coast through the hill roads. Back to your boat by evening.",
      },
    ],
    stays: [
      "Two nights in Ella",
      "One night in Nuwara Eliya",
      "One night near Sigiriya",
      "One night in Kandy",
    ],
  },
};

export function generateStaticParams() {
  return (Object.keys(TRIPS) as TripSlug[]).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trip = TRIPS[slug as TripSlug];
  if (!trip) return {};
  return {
    title: `${trip.duration} Trip — Magnate Yachts Sri Lanka`,
    description: trip.intro,
  };
}

export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = TRIPS[slug as TripSlug];
  if (!trip) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-navy)] relative overflow-hidden">
        <ImgPlaceholder
          label={trip.heroPhoto}
          aspectRatio="aspect-[21/8]"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative container-site py-24">
          <Link
            href="/trips"
            className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/80 transition-colors mb-8"
          >
            <ArrowLeft size={12} /> All trips
          </Link>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-3">
            {trip.tag}
          </p>
          <h1
            className="text-4xl sm:text-5xl font-semibold text-white max-w-2xl leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {trip.duration}
          </h1>
          <p className="text-white/60 max-w-xl text-sm leading-relaxed mb-8">{trip.intro}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary" size="lg" arrow>
              Enquire about this trip
            </Button>
            <span className="text-white/40 text-sm">{trip.price} per person</span>
          </div>
        </div>
      </section>

      {/* Hero photo */}
      <section className="bg-white">
        <div className="container-site py-12">
          <ImgPlaceholder label={trip.heroPhoto} aspectRatio="aspect-[21/9]" />
        </div>
      </section>

      {/* Day by day */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-20">
          <h2
            className="text-2xl font-semibold text-[var(--color-navy)] mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Day by day
          </h2>
          <div className="flex flex-col divide-y divide-[var(--color-ivory-dark)]">
            {trip.days.map(({ label, body }) => (
              <div key={label} className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <h3 className="font-semibold text-[var(--color-navy)] text-sm lg:col-span-1">
                  {label}
                </h3>
                <p className="text-sm text-[var(--color-navy)]/60 leading-relaxed lg:col-span-2">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stays */}
      <section className="bg-white">
        <div className="container-site py-12">
          <h2
            className="text-xl font-semibold text-[var(--color-navy)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Stays
          </h2>
          <ul className="flex flex-col gap-3">
            {trip.stays.map((stay) => (
              <li key={stay} className="flex gap-3 text-sm text-[var(--color-navy)]/70">
                <CheckCircle2 size={15} className="text-[var(--color-amber)] shrink-0 mt-0.5" />
                {stay}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-16 flex flex-col items-start gap-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-white max-w-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tell us your arrival window and your crew. We&apos;ll build this around you.
          </h2>
          <Button href="/contact" variant="primary" size="lg" arrow>
            Get in touch
          </Button>
        </div>
      </section>
    </>
  );
}
