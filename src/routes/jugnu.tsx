import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

import HeroSection from "@/components/jugnu/HeroSection";
import WhyJugnu from "@/components/jugnu/WhyJugnu";
import VisionMission from "@/components/jugnu/VisionMission";
import FocusAreas from "@/components/jugnu/FocusAreas";
import AutismEducation from "@/components/jugnu/AutismEducation";
import SpecialNeedsGrid from "@/components/jugnu/SpecialNeedsGrid";
import ResourceCenter from "@/components/jugnu/ResourceCenter";
import GovernmentSchemes from "@/components/jugnu/GovernmentSchemes";
import JugnuEcosystem from "@/components/jugnu/JugnuEcosystem";
import JugnuUtsav from "@/components/jugnu/JugnuUtsav";
import AdvisoryBoard from "@/components/jugnu/AdvisoryBoard";
import VolunteerSection from "@/components/jugnu/VolunteerSection";
import Testimonials from "@/components/jugnu/Testimonials";
import FAQ from "@/components/jugnu/FAQ";
import SupportContact from "@/components/jugnu/SupportContact";
import FinalCTA from "@/components/jugnu/FinalCTA";

export const Route = createFileRoute("/jugnu")({
  component: JugnuPage,
});

function JugnuPage() {
  return (
    <SiteLayout>
      <HeroSection />
      <WhyJugnu />
      <VisionMission />
      <FocusAreas />
      <AutismEducation />
      <SpecialNeedsGrid />
      <ResourceCenter />
      <GovernmentSchemes />
      <JugnuEcosystem />
      <JugnuUtsav />
      <AdvisoryBoard />
      <VolunteerSection />
      <Testimonials />
      <FAQ />
      <SupportContact />
      <FinalCTA />
    </SiteLayout>
  );
}

export default JugnuPage;