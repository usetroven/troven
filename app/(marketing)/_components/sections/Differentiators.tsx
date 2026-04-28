import { Reveal } from "@/components/ui/Reveal";
import { DiffCard } from "@/components/marketing/DiffCard";
import { differentiatorsContent } from "@/lib/content/landing";

export function Differentiators() {
  return (
    <div className="border-y border-border-subtle bg-dark-2">
      <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-20 md:py-[100px]">
        <Reveal className="t-eyebrow mb-5">{differentiatorsContent.eyebrow}</Reveal>
        <Reveal as="h2" className="t-section mb-4 whitespace-pre-line" delay={1}>
          {differentiatorsContent.title}
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-border-subtle md:grid-cols-2">
          {differentiatorsContent.items.map((item, i) => (
            <Reveal key={item.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="h-full">
              <DiffCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
