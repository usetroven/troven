import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? (
        <Reveal className="t-eyebrow mb-5">
          {eyebrow}
        </Reveal>
      ) : null}
      <Reveal as="h2" className="t-section mb-5" delay={1}>
        {title}
      </Reveal>
      {subtitle ? (
        <Reveal
          as="p"
          className={cn(
            "text-[17px] leading-[1.6] text-white/45 max-w-[520px]",
            align === "center" && "mx-auto",
          )}
          delay={2}
        >
          {subtitle}
        </Reveal>
      ) : null}
    </div>
  );
}
