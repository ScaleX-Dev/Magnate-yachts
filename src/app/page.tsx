import { HeroSection } from "@/components/sections/HeroSection";
import { ServicePillars } from "@/components/sections/ServicePillars";
import { TripsPreview } from "@/components/sections/TripsPreview";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicePillars />
      <TripsPreview />
      <TrustSignals />
      <TestimonialSection />
      <FinalCTA />
    </>
  );
}
