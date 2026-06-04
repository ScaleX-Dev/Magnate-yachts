import { HeroSection } from "@/components/sections/HeroSection";
import { ServicePillars } from "@/components/sections/ServicePillars";
import { PortsSection } from "@/components/sections/PortsSection";
import { TripsPreview } from "@/components/sections/TripsPreview";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { EmailCapture } from "@/components/sections/EmailCapture";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { GuestGallery } from "@/components/sections/GuestGallery";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicePillars />
      <PortsSection />
      <TripsPreview />
      <TrustSignals />
      <EmailCapture />
      <TestimonialSection />
      <GuestGallery />
      <FinalCTA />
    </>
  );
}
