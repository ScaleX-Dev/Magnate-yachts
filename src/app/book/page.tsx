import type { Metadata } from "next";
import { ClearanceBookingForm } from "@/components/sections/ClearanceBookingForm";

export const metadata: Metadata = {
  title: "Plan Your Stay — Magnate Yachts Sri Lanka",
  description:
    "Book Magnate Yachts as your Sri Lanka clearance agent. Fixed fee, met at the dock. Optionally add a guided land trip.",
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ trip?: string }>;
}) {
  const { trip } = await searchParams;
  return <ClearanceBookingForm initialTrip={trip} />;
}
