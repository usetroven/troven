type DiffCardProps = {
  icon: string;
  title: string;
  desc: string;
};

export function DiffCard({ icon, title, desc }: DiffCardProps) {
  return (
    <div className="h-full bg-dark-2 p-9">
      <div
        className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-[16px]"
        aria-hidden
      >
        {icon}
      </div>
      <div className="mb-2.5 font-display text-[20px] font-medium tracking-[-0.2px]">
        {title}
      </div>
      <p className="text-[14px] leading-[1.65] text-white/40">{desc}</p>
    </div>
  );
}
