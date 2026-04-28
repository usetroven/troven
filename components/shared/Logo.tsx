import { cn } from "@/lib/utils";

type LogoProps = {
  size?: "sm" | "md";
  className?: string;
};

const sizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "text-[22px]",
  md: "text-[26px]",
};

export function Logo({ size = "md", className }: LogoProps) {
  return (
    <span
      className={cn(
        "font-display font-bold tracking-[-0.5px] text-white",
        sizeClasses[size],
        className,
      )}
    >
      troven<span className="text-accent">.</span>
    </span>
  );
}
