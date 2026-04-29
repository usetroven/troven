"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { analyticsContent } from "@/lib/content/landing";

type ChartType = "bar" | "pie" | "progress";

const { bars: BARS, pie: PIE_DATA, track: TRACK, stats: STATS, title, subtitle, toggleLabels } =
  analyticsContent.mock;

function PieChart({ animate }: { animate: boolean }) {
  const circ = 2 * Math.PI * 44;
  let offset = 0;

  return (
    <svg viewBox="0 0 120 120" width="120" height="120" className="shrink-0">
      <circle cx="60" cy="60" r="44" fill="none" stroke="#e8e8ea" strokeWidth="22" />
      {PIE_DATA.map((d, i) => {
        const len = d.pct * circ;
        const dashOffset = -offset;
        offset += len;
        return (
          <circle
            key={d.label}
            cx="60"
            cy="60"
            r="44"
            fill="none"
            stroke={d.color}
            strokeWidth="22"
            strokeDasharray={animate ? `${len} ${circ - len}` : `0 ${circ}`}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 60 60)"
            style={{
              transition: `stroke-dasharray 1s ${0.1 * i}s cubic-bezier(.16,1,.3,1)`,
            }}
          />
        );
      })}
    </svg>
  );
}

export function AnalyticsChartMock() {
  const [chart, setChart] = useState<ChartType>("bar");
  const [animatePie, setAnimatePie] = useState(false);
  const [animateTrack, setAnimateTrack] = useState(false);
  const [autoCycled, setAutoCycled] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  const drawBars = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const dpr = window.devicePixelRatio || 1;
    const cssW = canvas.getBoundingClientRect().width || 320;
    const cssH = 130;
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;

    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    const W = cssW;
    const H = cssH;
    const pad = 16;
    const gap = 12;
    const barW = (W - pad * 2 - gap * (BARS.length - 1)) / BARS.length;
    const maxBarH = H - 28;
    let start: number | null = null;
    const duration = 1000;

    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const draw = (ts: number) => {
      if (!start) start = ts;
      const raw = Math.min((ts - start) / duration, 1);
      ctx.clearRect(0, 0, W, H);

      BARS.forEach((b, i) => {
        const delay = i * 0.08;
        const p = ease(Math.max(0, Math.min(1, (raw - delay) / (1 - delay))));
        const x = pad + i * (barW + gap);
        const targetH = (b.val / 100) * maxBarH;
        const h = Math.max(0, targetH * p);
        const y = H - h;
        const r = Math.min(5, h / 2);

        const grad = ctx.createLinearGradient(0, y, 0, H);
        grad.addColorStop(0, "#00d4a0");
        grad.addColorStop(1, "#00a87e");
        ctx.globalAlpha = 1 - i * 0.15;

        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + barW - r, y);
        ctx.quadraticCurveTo(x + barW, y, x + barW, y + r);
        ctx.lineTo(x + barW, H);
        ctx.lineTo(x, H);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.globalAlpha = 1;

        if (p > 0.65) {
          ctx.globalAlpha = Math.min(1, (p - 0.65) / 0.2);
          ctx.fillStyle = "#007a5c";
          ctx.font = `600 ${Math.round(10 * dpr) / dpr}px "Plus Jakarta Sans", sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";
          ctx.fillText(b.label, x + barW / 2, y - 3);
          ctx.globalAlpha = 1;
        }
      });

      if (raw < 1) animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);
  }, []);

  const switchChart = useCallback((type: ChartType) => {
    setChart(type);
    if (type === "pie") setAnimatePie(true);
    if (type === "progress") setAnimateTrack(true);
  }, []);

  useEffect(() => {
    if (chart !== "bar") return;
    const t = setTimeout(drawBars, 80);
    return () => {
      clearTimeout(t);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [chart, drawBars]);

  useEffect(() => {
    if (chart !== "pie") setAnimatePie(false);
    if (chart !== "progress") setAnimateTrack(false);
  }, [chart]);

  useEffect(() => {
    if (autoCycled) return;
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setAutoCycled(true);
            obs.unobserve(e.target);
            const seq: [ChartType, number][] = [
              ["bar", 600],
              ["pie", 2200],
              ["progress", 4000],
              ["bar", 5800],
            ];
            seq.forEach(([type, delay]) => {
              setTimeout(() => switchChart(type), delay);
            });
          }
        });
      },
      { threshold: 0.45 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [autoCycled, switchChart]);

  const chartKeys = Object.keys(toggleLabels) as ChartType[];

  return (
    <div ref={containerRef} className="flex w-full flex-col gap-0 p-4 sm:p-6">
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="font-display text-[14px] font-semibold text-fg-primary">{title}</div>
          <div className="mt-0.5 text-[11px] text-black/40">{subtitle}</div>
        </div>
        {/* Toggle */}
        <div className="flex overflow-hidden rounded-pill border border-black/8 bg-surface">
          {chartKeys.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => switchChart(type)}
              className={cn(
                "cursor-pointer border-none px-2.5 py-1.5 font-display text-[10px] font-medium transition-all sm:px-3 sm:text-[11px]",
                chart === type ? "bg-dark text-white" : "bg-transparent text-black/50",
              )}
            >
              {toggleLabels[type]}
            </button>
          ))}
        </div>
      </div>

      {/* Stat pills */}
      <div className="mb-5 grid grid-cols-3 gap-1.5 sm:gap-2">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className={cn(
              "rounded-xl border p-2 sm:p-3",
              stat.tone === "teal"
                ? "border-teal/20 bg-teal/[0.06]"
                : "border-black/8 bg-surface",
            )}
          >
            <div
              className={cn(
                "font-display text-[15px] font-medium sm:text-[18px]",
                stat.tone === "teal" ? "text-teal" : "text-fg-primary",
              )}
            >
              {stat.value}
            </div>
            <div className="mt-0.5 text-[10px] text-black/40">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      {chart === "bar" && (
        <div className="flex flex-col gap-2">
          <canvas ref={canvasRef} style={{ width: "100%", height: "130px", display: "block" }} />
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${BARS.length}, 1fr)` }}>
            {BARS.map((b) => (
              <div key={b.name} className="text-center text-[10px] text-black/40">
                {b.name}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pie chart */}
      {chart === "pie" && (
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <PieChart animate={animatePie} />
          <div className="flex w-full flex-col gap-2">
            {PIE_DATA.map((d) => (
              <div key={d.label} className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: d.color }} />
                <span className="flex-1 text-[12px] text-black/60">{d.label}</span>
                <span className="font-display text-[12px] font-medium text-fg-primary">
                  {Math.round(d.pct * 100)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Track chart */}
      {chart === "progress" && (
        <div className="flex flex-1 flex-col gap-3">
          {TRACK.map((t, i) => (
            <div key={t.label}>
              <div className="mb-1.5 flex justify-between">
                <span className="text-[12px] text-black/60">{t.label}</span>
                <span className="font-display text-[12px] font-medium text-fg-primary">{t.value}</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-pill border border-black/8 bg-surface">
                <div
                  className="h-full rounded-pill transition-all duration-[1200ms]"
                  style={{
                    width: animateTrack ? `${t.pct}%` : "0%",
                    background: `linear-gradient(90deg, ${t.from}, ${t.to})`,
                    transitionDelay: `${i * 0.1}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
