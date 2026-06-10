import type { Metadata } from "next";
import { ClearanceBookingForm } from "@/components/sections/ClearanceBookingForm";

export const metadata: Metadata = {
  title: "Book — Secure Magnate as Your Yacht Agent",
  description:
    "Book Magnate Yachts as your Sri Lanka clearance agent. Fixed fee, met at the dock. Optionally add a guided land trip.",
};

export default function BookPage() {
  return <ClearanceBookingForm />;
}
