import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TypeCard } from "@/components/marketing/TypeCard";
import { storefrontTypesContent } from "@/lib/content/landing";

export function StorefrontTypes() {
  return (
    <section id="features" className="py-20 md:py-[120px]">
      <Container>
        <Reveal className="t-eyebrow mb-5">{storefrontTypesContent.eyebrow}</Reveal>
        <Reveal as="h2" className="t-section mb-5 whitespace-pre-line" delay={1}>
          {storefrontTypesContent.title}
        </Reveal>
        <Reveal
          as="p"
          className="max-w-[520px] text-[17px] leading-[1.6] text-white/45"
          delay={2}
        >
          {storefrontTypesContent.subtitle}
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-border-subtle md:grid-cols-3">
          {storefrontTypesContent.types.map((type, i) => (
            <Reveal
              key={type.title}
              delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
              className="h-full"
            >
              <TypeCard {...type} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
