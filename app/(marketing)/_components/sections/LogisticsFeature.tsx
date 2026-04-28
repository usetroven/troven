import { FeatureBlock } from "@/components/marketing/FeatureBlock";
import { MockLogistics } from "@/components/marketing/MockLogistics";
import { logisticsContent } from "@/lib/content/landing";

export function LogisticsFeature() {
  return (
    <FeatureBlock
      id="logistics"
      tag={logisticsContent.tag}
      title={<span className="whitespace-pre-line">{logisticsContent.title}</span>}
      desc={logisticsContent.desc}
      chips={logisticsContent.chips}
      visual={<MockLogistics light />}
      reverse
      light
    />
  );
}
