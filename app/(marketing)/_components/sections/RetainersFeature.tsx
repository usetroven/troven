import { FeatureBlock } from "@/components/marketing/FeatureBlock";
import { MockRetainer } from "@/components/marketing/MockRetainer";
import { retainersContent } from "@/lib/content/landing";

export function RetainersFeature() {
  return (
    <FeatureBlock
      tag={retainersContent.tag}
      title={<span className="whitespace-pre-line">{retainersContent.title}</span>}
      desc={retainersContent.desc}
      visual={<MockRetainer />}
      reverse
    />
  );
}
