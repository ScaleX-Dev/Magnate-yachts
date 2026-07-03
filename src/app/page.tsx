import { HeroSection } from "@/components/sections/HeroSection";
import { ServicePillars } from "@/components/sections/ServicePillars";
import { TripsPreview } from "@/components/sections/TripsPreview";
import { ClearanceSection } from "@/components/sections/ClearanceSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";

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
