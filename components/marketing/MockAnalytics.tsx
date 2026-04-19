"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Bar = { label: string; percent: number; value: string };

const bars: Bar[] = [
  { label: "Design Mastery", percent: 88, value: "₦128k" },
  { label: "Marketing 101", percent: 62, value: "₦84k" },
  { label: "Templates Pack", percent: 44, value: "₦56k" },
  { label: "Finance Guide", percent: 28, value: "₦36k" },
];

export function MockAnalytics() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex w-full flex-col gap-4 p-7">
      <div className="grid grid-cols-3 gap-3">
        <MockStat value="₦320k" label="Revenue" />
        <MockStat value="430" label="Orders" />
        <MockStat value="+18%" label="vs last mo." valueClass="text-accent" />
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-[1px] text-white/25">
        Top products
      </div>
      {bars.map((bar, i) => (
        <div key={bar.label} className="flex items-center gap-3">
          <div className="w-20 shrink-0 font-body text-[12px] text-white/40">
            {bar.label}
          </div>
          <div className="h-2 flex-1 overflow-hidden rounded-pill bg-white/[0.06]">
            <div
              data-bar-fill
              data-visible={visible || undefined}
              style={
                {
                  "--bar-target": `${bar.percent}%`,
                  transitionDelay: `${0.3 + i * 0.2}s`,
                } as CSSProperties
              }
              className="h-full rounded-pill bg-gradient-to-r from-teal to-accent"
            />
          </div>
          <div className="w-14 text-right font-display text-[12px] font-medium text-white/60">
            {bar.value}
          </div>
        </div>
      ))}
      <div className="mt-1 flex gap-2.5">
        <MockTile label="Conversion chart" />
        <MockTile label="Traffic sources" />
      </div>
    </div>
  );
}

function MockStat({
  value,
  label,
  valueClass,
}: {
  value: string;
  label: string;
  valueClass?: string;
}) {
  return (
    <div className="rounded-xl border border-border-subtle bg-white/[0.04] p-3.5">
      <div
        className={`font-display text-[22px] font-medium ${valueClass ?? ""}`}
      >
        {value}
      </div>
      <div className="mt-1 text-[11px] text-white/35">{label}</div>
    </div>
  );
}

function MockTile({ label }: { label: string }) {
  return (
    <div className="flex h-14 flex-1 items-center justify-center rounded-[10px] border border-border-subtle bg-white/[0.03] text-[11px] text-white/25">
      {label}
    </div>
  );
}
