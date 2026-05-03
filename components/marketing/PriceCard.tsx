import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type PriceCardProps = {
  plan: string;
  commission: string;
  commissionNote: string;
  threshold?: string;
  badge?: string;
  features: readonly string[];
  cta: { label: string; href: string };
  featured?: boolean;
  buttonVariant: "pill-light" | "pill-dark";
};

export function PriceCard({
  plan,
  commission,
  commissionNote,
  threshold,
  badge,
  features,
  cta,
  featured = false,
  buttonVariant,
}: PriceCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-[20px] border px-7 py-8 transition-transform duration-300 hover:-translate-y-1",
        featured
          ? "border-accent/30 bg-dark-4"
          : "border-border-subtle bg-dark-2",
      )}
    >
      {badge ? (
        <span className="absolute right-5 top-5 rounded-pill border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
          {badge}
        </span>
      ) : null}

      <div className="mb-4 text-[12px] font-semibold uppercase tracking-[1px] text-white/35">
        {plan}
      </div>

      <div className="mb-1 font-display text-[56px] font-medium leading-none tracking-[-2px]">
        {commission}
      </div>
      <div className="mb-2 text-[14px] text-white/35">{commissionNote}</div>

      {threshold ? (
        <div className="mb-6 text-[12px] leading-[1.4] text-white/25">{threshold}</div>
      ) : (
        <div className="mb-6 text-[12px] text-accent">No monthly fee</div>
      )}

      <ul className="mb-7 flex flex-col gap-2.5">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-[13px] leading-[1.4] text-white/60"
          >
            <span aria-hidden className="shrink-0 text-[13px] font-semibold text-accent">
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        as="a"
        href={cta.href}
        variant={buttonVariant}
        size="sm"
        className="w-full"
      >
        {cta.label}
      </Button>
    </div>
  );
}
