import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ctaContent } from "@/lib/content/landing";

export function CTA() {
  return (
    <section className="bg-black px-6 py-16 text-center md:px-10 md:py-[120px]">
      <Reveal
        as="h2"
        className="t-cta-title mb-5 whitespace-pre-line font-bold text-white"
      >
        {ctaContent.title}
      </Reveal>
      <Reveal
        as="p"
        className="mx-auto mb-11 max-w-[520px] text-[17px] leading-[1.6] text-white/45"
        delay={1}
      >
        {ctaContent.sub}
      </Reveal>
      <Reveal delay={2} className="flex flex-wrap justify-center gap-3">
        <Button
          as="a"
          href={ctaContent.actions.primary.href}
          variant="hero-primary"
          size="md"
        >
          {ctaContent.actions.primary.label}
        </Button>
        <Button
          as="a"
          href={ctaContent.actions.secondary.href}
          variant="hero-ghost"
          size="md"
        >
          {ctaContent.actions.secondary.label}
        </Button>
      </Reveal>
      <p className="mt-7 text-[12px] text-white/25">{ctaContent.note}</p>
    </section>
  );
}
