import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type FeatureBlockProps = {
  tag: string;
  title: ReactNode;
  desc: string;
  bullets: readonly string[];
  visual: ReactNode;
  /** When true, visual is rendered on the left, copy on the right. */
  reverse?: boolean;
  /** When true, wraps the block in a dark-2 panel (section-full visual split). */
  dark?: boolean;
  id?: string;
};

export function FeatureBlock({
  tag,
  title,
  desc,
  bullets,
  visual,
  reverse = false,
  dark = false,
  id,
}: FeatureBlockProps) {
  const copy = (
    <div>
      <Reveal className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[1px] text-accent">
        {tag}
      </Reveal>
      <Reveal as="h2" className="t-feature-title mb-4" delay={1}>
        {title}
      </Reveal>
      <Reveal
        as="p"
        className="mb-7 text-[16px] leading-[1.65] text-white/45"
        delay={2}
      >
        {desc}
      </Reveal>
      <Reveal delay={3}>
        <ul className="flex flex-col gap-2.5">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2.5 text-[14px] leading-[1.5] text-white/60 before:mt-1.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent before:content-['']"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );

  const visualPane = (
    <Reveal
      direction={reverse ? "left" : "right"}
      className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-border-subtle bg-dark-3"
    >
      {visual}
    </Reveal>
  );

  const content = (
    <div
      className={cn(
        "mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-12 md:gap-20 md:px-20 md:py-20 md:grid-cols-2",
      )}
    >
      {reverse ? (
        <>
          <div className="md:order-1">{visualPane}</div>
          <div className="md:order-2">{copy}</div>
        </>
      ) : (
        <>
          {copy}
          {visualPane}
        </>
      )}
    </div>
  );

  if (dark) {
    return (
      <section
        id={id}
        className="border-y border-border-subtle bg-dark-2"
      >
        {content}
      </section>
    );
  }

  return (
    <section id={id} className="bg-dark">
      {content}
    </section>
  );
}
