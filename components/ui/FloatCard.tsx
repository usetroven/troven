import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type FloatCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function FloatCard({ children, className, style }: FloatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl min-w-[200px]",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}
