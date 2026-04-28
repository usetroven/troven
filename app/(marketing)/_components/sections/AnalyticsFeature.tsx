import { FeatureBlock } from "@/components/marketing/FeatureBlock";
import { AnalyticsChartMock } from "@/components/marketing/AnalyticsChartMock";
import { analyticsContent } from "@/lib/content/landing";

export function AnalyticsFeature() {
  return (
    <FeatureBlock
      id="analytics"
      tag={analyticsContent.tag}
      title={<span className="whitespace-pre-line">{analyticsContent.title}</span>}
      desc={analyticsContent.desc}
      chips={analyticsContent.chips}
      visual={<AnalyticsChartMock />}
      light
    />
  );
}
