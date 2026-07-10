import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://magnateyachts.com";

export const metadata: Metadata = {
  title: "Contact Magnate Yachts — Sri Lanka Yacht Agent",
  description:
    "Get in touch with Magnate Yachts before you arrive. Tell us your vessel, crew, and port of call — we handle the rest. WhatsApp, email, or the contact form.",
  keywords: [
    "contact Magnate Yachts",
    "Sri Lanka yacht agent contact",
    "Galle harbour contact",
    "yacht clearance enquiry Sri Lanka",
    "WhatsApp yacht agent Sri Lanka",
  ],
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: "Contact Magnate Yachts — Sri Lanka Yacht Agent",
    description:
      "Send us your vessel details before you arrive. We arrange clearance, excursions, and everything in between.",
    url: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
