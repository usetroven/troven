import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  withRules?: boolean;
};

export function Eyebrow({ children, className, withRules = false }: EyebrowProps) {
  return (
    <div
      className={cn(
        "t-eyebrow inline-flex items-center gap-2",
        withRules &&
          "before:content-[''] before:h-px before:w-10 before:bg-accent/40 after:content-[''] after:h-px after:w-10 after:bg-accent/40",
        className,
      )}
    >
      {children}
    </div>
  );
}
