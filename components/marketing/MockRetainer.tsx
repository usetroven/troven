import { retainersContent } from "@/lib/content/landing";
import { cn } from "@/lib/utils";

export function MockRetainer() {
  return (
    <div className="flex w-full flex-col gap-3 p-4 sm:p-7">
      <div className="mb-1 text-[11px] uppercase tracking-[1px] text-white/25">
        {retainersContent.label}
      </div>
      {retainersContent.plans.map((plan) => (
        <div
          key={plan.name}
          className={cn(
            "rounded-2xl border px-5 py-4",
            plan.featured
              ? "border-accent/30 bg-accent/[0.08]"
              : "border-border-subtle",
          )}
        >
          <div
            className={cn(
              "mb-1.5 text-[11px] font-semibold uppercase tracking-[1px]",
              plan.featured ? "text-accent/60" : "text-white/40",
            )}
          >
            {plan.name}
          </div>
          <div
            className={cn(
              "font-display text-[26px] font-medium tracking-[-0.5px]",
              plan.featured && "text-accent",
            )}
          >
            {plan.price}
            <span
              className={cn(
                "text-[14px] font-normal",
                plan.featured ? "text-accent/40" : "text-white/30",
              )}
            >
              {plan.period}
            </span>
          </div>
          <div
            className={cn(
              "mt-1 text-[12px]",
              plan.featured ? "text-accent/50" : "text-white/35",
            )}
          >
            {plan.desc}
          </div>
        </div>
      ))}
      <div className="flex gap-2.5">
        {retainersContent.stats.map((stat) => (
          <div
            key={stat.text}
            className={cn(
              "flex-1 rounded-xl border px-4 py-2.5 text-[12px]",
              stat.tone === "accent"
                ? "border-accent/20 bg-accent/[0.05] text-accent"
                : "border-border-subtle bg-white/[0.03] text-white/30",
            )}
          >
            {stat.text}
          </div>
        ))}
      </div>
    </div>
  );
}
