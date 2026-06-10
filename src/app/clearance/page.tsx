import type { Metadata } from "next";
import { ClearanceBookingForm } from "@/components/sections/ClearanceBookingForm";

export const metadata: Metadata = {
  title: "Arrange Clearance — Magnate Yachts Sri Lanka",
  description:
    "Secure Magnate as your yacht clearance agent in Galle or Trincomalee. Fixed fee, met at the dock. Book your arrival in minutes.",
};

export default function ClearancePage() {
  return <ClearanceBookingForm />;
}
