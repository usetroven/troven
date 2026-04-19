import { MarqueeTrack } from "@/components/marketing/MarqueeTrack";
import { marqueeContent } from "@/lib/content/landing";

export function Marquee() {
  return <MarqueeTrack items={marqueeContent} />;
}
