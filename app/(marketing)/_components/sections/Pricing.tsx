import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PriceCard } from "@/components/marketing/PriceCard";
import { pricingContent } from "@/lib/content/landing";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-[120px]">
      <Container>
        <Reveal className="t-eyebrow mb-5">{pricingContent.eyebrow}</Reveal>
        <Reveal as="h2" className="t-section mb-5" delay={1}>
          {pricingContent.title}
        </Reveal>
        <Reveal as="p" className="max-w-[520px] text-[17px] leading-[1.6] text-white/45" delay={2}>
          {pricingContent.subtitle}
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {pricingContent.tiers.map((tier, i) => (
            <Reveal key={tier.plan} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <PriceCard {...tier} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-white/25">
          {pricingContent.footnote}
        </p>
      </Container>
    </section>
  );
}
