import Link from "next/link";
import { Pill } from "@/components/ui/Pill";

type TypeCardProps = {
  icon: string;
  title: string;
  desc: string;
  tag: string;
};

export function TypeCard({ icon, title, desc, tag }: TypeCardProps) {
  return (
    <Link href="/coming-soon" className="block h-full">
      <div className="group h-full bg-dark-2 p-9 transition-colors hover:bg-dark-3">
        <span className="mb-5 block text-[28px]" aria-hidden>
          {icon}
        </span>
        <div className="mb-2.5 font-display text-[20px] font-medium tracking-[-0.2px]">
          {title}
        </div>
        <p className="text-[14px] leading-[1.6] text-white/40">{desc}</p>
        <Pill className="mt-4" tone="accent">
          {tag}
        </Pill>
      </div>
    </Link>
  );
}
