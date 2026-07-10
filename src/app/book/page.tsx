import type { Metadata } from "next";
import { ClearanceBookingForm } from "@/components/sections/ClearanceBookingForm";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://magnateyachts.com";

export const metadata: Metadata = {
  title: "Book Yacht Clearance & Tours — Plan Your Sri Lanka Stay",
  description:
    "Book Magnate Yachts as your Sri Lanka clearance agent. Fixed fee, met at the dock. Add a guided land trip — Yala safari, Galle Fort, hill country, and more.",
  keywords: [
    "book yacht clearance Sri Lanka",
    "Sri Lanka sailing itinerary",
    "book yacht agent Galle",
    "arrange port clearance Sri Lanka",
    "yacht arrival Sri Lanka form",
  ],
  alternates: { canonical: `${siteUrl}/book` },
  openGraph: {
    title: "Book Your Sri Lanka Yacht Clearance & Tours — Magnate Yachts",
    description:
      "Fixed-fee clearance handled dockside. Pair it with a private guided tour — Yala, Galle Fort, tea country, or a custom route.",
    url: `${siteUrl}/book`,
  },
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ trip?: string }>;
}) {
  const { trip } = await searchParams;
  return <ClearanceBookingForm initialTrip={trip} />;
}
