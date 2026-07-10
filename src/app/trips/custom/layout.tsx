import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://magnateyachts.com";

export const metadata: Metadata = {
  title: "Custom Trip Itinerary — Sri Lanka From Galle",
  description:
    "Tell us what you have in mind and we'll build a bespoke Sri Lanka itinerary around your sailing schedule. Private vehicle, flexible routing, no fixed programme.",
  keywords: [
    "custom Sri Lanka tour",
    "bespoke itinerary Sri Lanka",
    "private tour from Galle",
    "tailor-made Sri Lanka trip",
    "yacht crew custom excursion Sri Lanka",
  ],
  alternates: { canonical: `${siteUrl}/trips/custom` },
  openGraph: {
    title: "Design Your Own Sri Lanka Tour — Magnate Yachts",
    description:
      "Something off the beaten track, a slower pace, or a route we haven't written down yet — tell us and we'll build it around your schedule.",
    url: `${siteUrl}/trips/custom`,
  },
};

export default function CustomTripLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
