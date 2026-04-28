import { logisticsContent } from "@/lib/content/landing";
import { cn } from "@/lib/utils";

type Props = { light?: boolean };

const statusLabel: Record<(typeof logisticsContent.vendors)[number]["status"], string> = {
  active: "● Active",
  idle: "Not connected",
  always: "Always on",
};

export function MockLogistics({ light = false }: Props) {
  return (
    <div className="flex w-full flex-col gap-3 p-7">
      <div
        className={cn(
          "mb-1 text-[10px] uppercase tracking-[1px]",
          light ? "text-black/30" : "text-white/25",
        )}
      >
        Connected logistics vendors
      </div>
      {logisticsContent.vendors.map((vendor) => (
        <div
          key={vendor.name}
          className={cn(
            "flex items-center gap-3.5 rounded-xl border px-4 py-3.5",
            vendor.status === "active"
              ? "border-accent/30 bg-accent/[0.05]"
              : light
                ? "border-black/8 bg-white"
                : "border-border-subtle bg-white/[0.04]",
          )}
        >
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] font-display text-[11px] font-bold"
            style={{ background: vendor.iconTone.bg, color: vendor.iconTone.color }}
          >
            {vendor.abbr}
          </div>
          <div className="flex-1">
            <div
              className={cn(
                "text-[13px] font-medium",
                light ? "text-fg-primary" : "text-white",
              )}
            >
              {vendor.name}
            </div>
            <div
              className={cn(
                "text-[11px]",
                light ? "text-black/35" : "text-white/35",
              )}
            >
              {vendor.subtitle}
            </div>
          </div>
          <div
            className={cn(
              "text-[10px] font-medium",
              vendor.status === "active"
                ? "text-teal"
                : light
                  ? "text-black/25"
                  : "text-white/25",
            )}
          >
            {statusLabel[vendor.status]}
          </div>
        </div>
      ))}
      <button
        type="button"
        className={cn(
          "flex items-center gap-2.5 rounded-xl border border-dashed px-4 py-3 text-left transition-colors",
          light
            ? "border-teal/30 hover:border-teal/50"
            : "border-accent/20 bg-accent/[0.05] hover:border-accent/40",
        )}
      >
        <span className="text-[18px] text-teal">+</span>
        <span className={cn("text-[13px]", light ? "text-black/35" : "text-white/35")}>
          Connect another carrier
        </span>
      </button>
    </div>
  );
}
