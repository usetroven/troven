import { logisticsContent } from "@/lib/content/landing";
import { cn } from "@/lib/utils";

const statusLabel: Record<(typeof logisticsContent.vendors)[number]["status"], string> = {
  active: "● Active",
  idle: "Not connected",
  always: "Always available",
};

const statusClass: Record<(typeof logisticsContent.vendors)[number]["status"], string> = {
  active: "text-accent",
  idle: "text-white/25",
  always: "text-white/25",
};

export function MockLogistics() {
  return (
    <div className="flex w-full flex-col gap-3 p-7">
      <div className="mb-1 text-[11px] uppercase tracking-[1px] text-white/25">
        Connected logistics vendors
      </div>
      {logisticsContent.vendors.map((vendor) => (
        <div
          key={vendor.name}
          className={cn(
            "flex items-center gap-3.5 rounded-xl border px-4 py-3.5",
            vendor.status === "active"
              ? "border-accent/30 bg-accent/[0.05]"
              : "border-border-subtle bg-white/[0.04]",
          )}
        >
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] font-display text-[14px] font-bold"
            style={{
              background: vendor.iconTone.bg,
              color: vendor.iconTone.color,
            }}
          >
            {vendor.abbr}
          </div>
          <div className="flex-1">
            <div className="text-[14px] font-medium">{vendor.name}</div>
            <div className="text-[11px] text-white/35">{vendor.subtitle}</div>
          </div>
          <div
            className={cn(
              "text-[11px] font-medium",
              statusClass[vendor.status],
            )}
          >
            {statusLabel[vendor.status]}
          </div>
        </div>
      ))}
      <button
        type="button"
        className="flex items-center gap-2.5 rounded-xl border border-dashed border-accent/20 bg-accent/[0.05] px-4 py-3 text-left transition-colors hover:border-accent/40"
      >
        <span className="text-[18px] text-accent">+</span>
        <span className="text-[13px] text-white/35">
          Connect another logistics partner
        </span>
      </button>
    </div>
  );
}
