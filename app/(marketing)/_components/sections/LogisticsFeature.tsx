import { FeatureBlock } from "@/components/marketing/FeatureBlock";
import { MockLogistics } from "@/components/marketing/MockLogistics";
import { logisticsContent } from "@/lib/content/landing";

export function LogisticsFeature() {
  return (
    <FeatureBlock
      id="logistics"
      tag={logisticsContent.tag}
      title={logisticsContent.title}
      desc={logisticsContent.desc}
      bullets={logisticsContent.bullets}
      visual={<MockLogistics />}
      reverse
    />
  );
}
