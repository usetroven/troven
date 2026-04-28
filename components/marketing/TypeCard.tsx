import Link from "next/link";
import { Pill } from "@/components/ui/Pill";

type TypeCardProps = {
  icon: string;
  iconBg?: string;
  title: string;
  desc: string;
  tag: string;
};

export function TypeCard({ icon, iconBg, title, desc, tag }: TypeCardProps) {
  return (
    <Link href="/coming-soon" className="block h-full">
      <div className="group relative h-full overflow-hidden rounded-3xl border border-white/9 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/16 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        {/* Apple-style inner sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
          }}
        />
        <div
          className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-2xl text-[22px]"
          style={{ background: iconBg ?? "rgba(255,255,255,0.08)" }}
        >
          {icon}
        </div>
        <div className="mb-2 font-display text-[17px] font-semibold tracking-[-0.2px] text-white">
          {title}
        </div>
        <p className="mb-4 text-[13px] leading-[1.55] text-white/40">{desc}</p>
        <Pill tone="accent">{tag}</Pill>
      </div>
    </Link>
  );
}
