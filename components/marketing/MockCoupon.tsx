import { couponsContent } from "@/lib/content/landing";
import { cn } from "@/lib/utils";

export function MockCoupon() {
  return (
    <div className="flex w-full flex-col gap-3 p-4 sm:gap-3.5 sm:p-7">
      <div className="mb-1 text-[11px] uppercase tracking-[1px] text-white/25">
        {couponsContent.mockLabel}
      </div>
      {couponsContent.coupons.map((coupon) => (
        <div
          key={coupon.code}
          className={cn(
            "flex items-center gap-2.5 rounded-2xl border border-dashed border-white/10 px-3 py-3 sm:gap-3.5 sm:px-5 sm:py-4",
            coupon.expired && "opacity-50",
          )}
        >
          <div className="rounded-lg bg-accent/10 px-2 py-1.5 font-mono text-[12px] font-bold tracking-[1px] text-accent sm:px-3 sm:text-[16px] sm:tracking-[2px]">
            {coupon.code}
          </div>
          <div className="flex-1 text-[12px] text-white/35">{coupon.meta}</div>
          <div
            className={cn(
              "font-display text-[20px] font-medium",
              coupon.expired ? "text-white/25" : "text-white",
            )}
          >
            {coupon.value}
          </div>
        </div>
      ))}
      <button
        type="button"
        className="flex items-center gap-2 rounded-2xl border border-dashed border-white/10 px-5 py-3 text-left transition-colors hover:border-white/25"
      >
        <span className="text-accent">+</span>
        <span className="text-[13px] text-white/35">{couponsContent.createLabel}</span>
      </button>
    </div>
  );
}
