import { cn } from "@/lib/utils";

type DiffCardProps = {
  icon: string;
  iconBg?: string;
  title: string;
  desc: string;
  light?: boolean;
};

export function DiffCard({ icon, iconBg, title, desc, light = false }: DiffCardProps) {
  return (
    <div
      className={cn(
        "h-full p-8 transition-colors",
        light ? "bg-white hover:bg-surface" : "bg-dark-2 hover:bg-dark-3",
      )}
    >
      <div
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-[18px]"
        style={{ background: iconBg ?? (light ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.06)") }}
      >
        {icon}
      </div>
      <div
        className={cn(
          "mb-2 font-display text-[15px] font-semibold tracking-[-0.1px]",
          light ? "text-fg-primary" : "text-white",
        )}
      >
        {title}
      </div>
      <p className={cn("text-[13px] leading-[1.55]", light ? "text-black/45" : "text-white/40")}>
        {desc}
      </p>
    </div>
  );
}
