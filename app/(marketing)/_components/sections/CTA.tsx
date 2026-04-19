import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ctaContent } from "@/lib/content/landing";

export function CTA() {
  return (
    <section className="border-t border-border-subtle bg-dark-2 px-6 py-24 text-center md:px-10 md:py-[120px]">
      <Reveal as="h2" className="t-cta-title mb-5 whitespace-pre-line">
        {ctaContent.title}
      </Reveal>
      <Reveal
        as="p"
        className="mx-auto mb-11 max-w-[520px] text-[17px] leading-[1.6] text-white/40"
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
          {ctaContent.actions.primary.label} <span aria-hidden>→</span>
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
      <p className="mt-7 text-[12px] text-white/20">{ctaContent.note}</p>
    </section>
  );
}
