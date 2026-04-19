import { cn } from "@/lib/utils";

type StatBlockProps = {
  value: string;
  label: string;
  className?: string;
};

export function StatBlock({ value, label, className }: StatBlockProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="font-display text-[28px] font-medium tracking-[-0.4px]">{value}</div>
      <div className="mt-1 text-[13px] text-white/35">{label}</div>
    </div>
  );
}
