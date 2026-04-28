import { Hero } from "./_components/sections/Hero";
import { Marquee } from "./_components/sections/Marquee";
import { StorefrontTypes } from "./_components/sections/StorefrontTypes";
import { BuiltForYou } from "./_components/sections/BuiltForYou";
import { AnalyticsFeature } from "./_components/sections/AnalyticsFeature";
import { LogisticsFeature } from "./_components/sections/LogisticsFeature";
import { CouponsAndRetainers } from "./_components/sections/CouponsAndRetainers";
import { Differentiators } from "./_components/sections/Differentiators";
import { Pricing } from "./_components/sections/Pricing";
import { CTA } from "./_components/sections/CTA";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Marquee />
      <StorefrontTypes />
      <BuiltForYou />
      <AnalyticsFeature />
      <LogisticsFeature />
      <CouponsAndRetainers />
      <Differentiators />
      <Pricing />
      <CTA />
    </>
  );
}
