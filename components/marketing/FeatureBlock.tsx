import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type FeatureBlockProps = {
  tag: string;
  title: ReactNode;
  desc: string;
  bullets?: readonly string[];
  chips?: readonly string[];
  visual: ReactNode;
  reverse?: boolean;
  dark?: boolean;
  light?: boolean;
  id?: string;
};

export function FeatureBlock({
  tag,
  title,
  desc,
  bullets,
  chips,
  visual,
  reverse = false,
  dark = false,
  light = false,
  id,
}: FeatureBlockProps) {
  const isDark = dark || (!light);

  const copy = (
    <div>
      <Reveal
        className={cn(
          "mb-4 inline-block text-[11px] font-semibold uppercase tracking-[1px]",
          isDark ? "text-accent" : "text-teal",
        )}
      >
        {tag}
      </Reveal>
      <Reveal
        as="h2"
        className={cn("t-feature-title mb-4 whitespace-pre-line", isDark ? "text-white" : "text-fg-primary")}
        delay={1}
      >
        {title}
      </Reveal>
      <Reveal
        as="p"
        className={cn(
          "mb-7 text-[16px] leading-[1.65]",
          isDark ? "text-white/45" : "text-black/45",
        )}
        delay={2}
      >
        {desc}
      </Reveal>
      <Reveal delay={3}>
        {chips ? (
          <div className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className={cn(
                  "rounded-pill border px-3 py-1.5 text-[12px] font-medium",
                  isDark
                    ? "border-white/10 bg-white/6 text-white/60"
                    : "border-black/8 bg-black/4 text-black/60",
                )}
              >
                {chip}
              </span>
            ))}
          </div>
        ) : bullets ? (
          <ul className="flex flex-col gap-2.5">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className={cn(
                  "flex items-start gap-2.5 text-[14px] leading-[1.5] before:mt-1.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent before:content-['']",
                  isDark ? "text-white/60" : "text-black/60",
                )}
              >
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}
      </Reveal>
    </div>
  );

  const visualPane = (
    <Reveal
      direction={reverse ? "left" : "right"}
      className={cn(
        "flex w-full items-center justify-center overflow-hidden rounded-3xl border sm:aspect-[4/3]",
        isDark
          ? "border-border-subtle bg-dark-3"
          : "border-black/8 bg-white",
      )}
    >
      {visual}
    </Reveal>
  );

  const content = (
    <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-20 md:px-12 md:py-20">
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
      <section id={id} className="border-y border-border-subtle bg-dark-2">
        {content}
      </section>
    );
  }

  if (light) {
    return (
      <section id={id} className="border-t border-black/7 bg-surface">
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
