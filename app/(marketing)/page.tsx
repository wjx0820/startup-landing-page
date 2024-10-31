import GlobeSection from "@/components/globe-section";
import ClientSection from "@/components/landing/client-section";
import CallToActionSection from "@/components/landing/cta-section";
import HeroSection from "@/components/landing/hero-section";
import PricingSection from "@/components/landing/pricing-section";
import { SphereMask } from "@/components/magicui/sphere-mask";
import ThemeParticles from "@/components/magicui/theme-particles";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <ClientSection />
      <SphereMask />
      <PricingSection />
      <GlobeSection />
      <CallToActionSection />
      <ThemeParticles />
    </>
  );
}
