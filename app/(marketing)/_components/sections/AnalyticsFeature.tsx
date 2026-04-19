import { FeatureBlock } from "@/components/marketing/FeatureBlock";
import { MockAnalytics } from "@/components/marketing/MockAnalytics";
import { analyticsContent } from "@/lib/content/landing";

export function AnalyticsFeature() {
  return (
    <FeatureBlock
      tag={analyticsContent.tag}
      title={analyticsContent.title}
      desc={analyticsContent.desc}
      bullets={analyticsContent.bullets}
      visual={<MockAnalytics />}
      dark
    />
  );
}
