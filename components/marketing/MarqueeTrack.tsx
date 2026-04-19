import { cn } from "@/lib/utils";

type MarqueeItem = { title: string; detail: string };

type MarqueeTrackProps = {
  items: readonly MarqueeItem[];
  className?: string;
};

export function MarqueeTrack({ items, className }: MarqueeTrackProps) {
  // Duplicate the list so the -50% translate keyframe loops seamlessly.
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "overflow-hidden border-y border-border-subtle bg-dark-2",
        className,
      )}
    >
      <div className="anim-marquee flex w-max">
        {doubled.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            className="flex shrink-0 items-center gap-3 border-r border-border-subtle px-12 py-[18px] text-[14px] whitespace-nowrap text-white/30"
          >
            <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
            <strong className="font-display font-medium text-white/70">
              {item.title}
            </strong>
            <span>{item.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
