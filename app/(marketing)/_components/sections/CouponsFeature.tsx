import { FeatureBlock } from "@/components/marketing/FeatureBlock";
import { MockCoupon } from "@/components/marketing/MockCoupon";
import { couponsContent } from "@/lib/content/landing";

export function CouponsFeature() {
  return (
    <FeatureBlock
      tag={couponsContent.tag}
      title={<span className="whitespace-pre-line">{couponsContent.title}</span>}
      desc={couponsContent.desc}
      bullets={couponsContent.bullets}
      visual={<MockCoupon />}
      dark
    />
  );
}
