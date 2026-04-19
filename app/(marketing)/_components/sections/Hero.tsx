import { Button } from "@/components/ui/Button";
import { FloatCard } from "@/components/ui/FloatCard";
import { StatBlock } from "@/components/ui/StatBlock";
import { heroContent } from "@/lib/content/landing";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-[120px] pb-20 text-center md:px-10">
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,168,126,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(73,79,223,0.08) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 10% 80%, rgba(0,212,160,0.05) 0%, transparent 60%)",
        }}
      />
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Floating cards (hidden below md) */}
      <div className="hidden md:block">
        <div className="anim-float-in-bob delay-a absolute left-[4%] top-[38%]">
          <FloatCard>
            <div className="mb-2 text-[11px] uppercase tracking-[0.5px] text-white/35">
              Today&rsquo;s revenue
            </div>
            <div className="font-display text-[22px] font-medium tracking-[-0.3px]">
              ₦84,500
            </div>
            <div className="mt-1 text-[12px] font-medium text-accent">
              ↑ +34% vs yesterday
            </div>
          </FloatCard>
        </div>

        <div className="anim-float-in-bob delay-b absolute right-[4%] top-[32%] flex flex-col gap-2.5">
          <span className="inline-flex items-center gap-2 rounded-pill border border-accent/25 bg-accent/10 px-3 py-1.5 text-[13px] text-accent">
            <span className="anim-pulse h-2 w-2 rounded-full bg-accent" />
            Live order · VIP Ticket · ₦15,000
          </span>
          <span className="inline-flex items-center gap-2 rounded-pill border border-iris/30 bg-iris/10 px-3 py-1.5 text-[13px] text-iris">
            <span className="anim-pulse h-2 w-2 rounded-full bg-iris" />
            DHL shipment dispatched
          </span>
        </div>

        <div className="anim-float-in-bob delay-c absolute right-[14%] bottom-[14%]">
          <FloatCard className="min-w-[180px]">
            <div className="mb-2 text-[11px] uppercase tracking-[0.5px] text-white/35">
              Payout ready
            </div>
            <div className="font-display text-[18px] font-medium tracking-[-0.3px]">
              ₦320,000
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              <span className="text-[11px] text-white/35">
                Withdrawing · same day
              </span>
            </div>
          </FloatCard>
        </div>
      </div>

      <div className="relative z-10">
        <div className="anim-fade-up anim-delay-1 mx-auto mb-7 flex items-center justify-center gap-2 text-[12px] font-medium uppercase tracking-[2px] text-accent before:h-px before:w-10 before:bg-accent/40 before:content-[''] after:h-px after:w-10 after:bg-accent/40 after:content-['']">
          {heroContent.eyebrow}
        </div>

        <h1 className="anim-fade-up anim-delay-2 t-display-hero mb-7 text-white">
          {heroContent.headline.lead}
          <br />
          <em className="not-italic text-accent">
            {heroContent.headline.accent}
          </em>
        </h1>

        <p className="anim-fade-up anim-delay-3 mx-auto mb-12 max-w-[520px] text-[18px] leading-[1.6] text-white/45">
          {heroContent.sub}
        </p>

        <div className="anim-fade-up anim-delay-4 flex flex-wrap justify-center gap-3">
          <Button
            as="a"
            href={heroContent.actions.primary.href}
            variant="hero-primary"
            size="md"
          >
            {heroContent.actions.primary.label} <span aria-hidden>→</span>
          </Button>
          <Button
            as="a"
            href={heroContent.actions.secondary.href}
            variant="hero-ghost"
            size="md"
          >
            {heroContent.actions.secondary.label}
          </Button>
        </div>

        <div className="anim-fade-up anim-delay-5 mt-[72px] flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {heroContent.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-x-12">
              {i > 0 ? (
                <span
                  aria-hidden
                  className="hidden h-6 w-px bg-white/10 md:block"
                />
              ) : null}
              <StatBlock value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
