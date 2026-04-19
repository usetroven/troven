import { Hero } from "./_components/sections/Hero";
import { Marquee } from "./_components/sections/Marquee";
import { StorefrontTypes } from "./_components/sections/StorefrontTypes";
import { AnalyticsFeature } from "./_components/sections/AnalyticsFeature";
import { LogisticsFeature } from "./_components/sections/LogisticsFeature";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Marquee />
      <StorefrontTypes />
      <AnalyticsFeature />
      <LogisticsFeature />
    </>
  );
}
