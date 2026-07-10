import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicePillars } from "@/components/sections/ServicePillars";
import { TripsPreview } from "@/components/sections/TripsPreview";
import { ClearanceSection } from "@/components/sections/ClearanceSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://magnateyachts.com";

export const metadata: Metadata = {
  alternates: { canonical: siteUrl },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicePillars />
      <TripsPreview />
      <ClearanceSection />
      <TestimonialSection />
    </>
  );
}
