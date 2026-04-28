import { Reveal } from "@/components/ui/Reveal";
import { DiffCard } from "@/components/marketing/DiffCard";
import { differentiatorsContent } from "@/lib/content/landing";

export function Differentiators() {
  return (
    <div className="border-t border-black/7 bg-surface">
      <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-12 md:py-[100px]">
        <Reveal className="t-eyebrow mb-5 text-teal">{differentiatorsContent.eyebrow}</Reveal>
        <Reveal as="h2" className="t-section mb-4 whitespace-pre-line text-fg-primary" delay={1}>
          {differentiatorsContent.title}
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-black/7 md:grid-cols-4">
          {differentiatorsContent.items.map((item, i) => (
            <Reveal key={item.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="h-full">
              <DiffCard {...item} light />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
