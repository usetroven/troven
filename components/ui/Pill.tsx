import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PillTone = "accent" | "iris" | "neutral";

const toneClasses: Record<PillTone, string> = {
  accent: "text-accent bg-accent/10 border-accent/20",
  iris: "text-iris bg-iris/10 border-iris/30",
  neutral: "text-white/60 bg-white/5 border-border-subtle",
};

type PillProps = {
  children: ReactNode;
  tone?: PillTone;
  className?: string;
};

export function Pill({ children, tone = "accent", className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill border px-3 py-1 text-[11px] font-medium",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
