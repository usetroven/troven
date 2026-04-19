import { Hero } from "./_components/sections/Hero";
import { Marquee } from "./_components/sections/Marquee";
import { StorefrontTypes } from "./_components/sections/StorefrontTypes";
import { AnalyticsFeature } from "./_components/sections/AnalyticsFeature";
import { LogisticsFeature } from "./_components/sections/LogisticsFeature";
import { CouponsFeature } from "./_components/sections/CouponsFeature";
import { RetainersFeature } from "./_components/sections/RetainersFeature";
import { Differentiators } from "./_components/sections/Differentiators";
import { Pricing } from "./_components/sections/Pricing";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Marquee />
      <StorefrontTypes />
      <AnalyticsFeature />
      <LogisticsFeature />
      <CouponsFeature />
      <RetainersFeature />
      <Differentiators />
      <Pricing />
    </>
  );
}
