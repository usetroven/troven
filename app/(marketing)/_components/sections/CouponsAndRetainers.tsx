import { Reveal } from "@/components/ui/Reveal";
import { MockCoupon } from "@/components/marketing/MockCoupon";
import { MockRetainer } from "@/components/marketing/MockRetainer";
import { couponsContent, retainersContent } from "@/lib/content/landing";

export function CouponsAndRetainers() {
  return (
    <section className="border-t border-border-subtle bg-dark-2">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 md:grid-cols-2 md:gap-20 md:px-12 md:py-20">
        {/* Coupons */}
        <div>
          <Reveal className="mb-3 text-[11px] font-semibold uppercase tracking-[1px] text-accent">
            {couponsContent.tag}
          </Reveal>
          <Reveal as="h2" className="t-feature-title mb-4 whitespace-pre-line" delay={1}>
            {couponsContent.title}
          </Reveal>
          <Reveal as="p" className="mb-7 text-[15px] leading-[1.65] text-white/45" delay={2}>
            {couponsContent.desc}
          </Reveal>
          <Reveal
            delay={3}
            className="overflow-hidden rounded-3xl border border-border-subtle bg-dark-3"
          >
            <MockCoupon />
          </Reveal>
        </div>

        {/* Retainers */}
        <div>
          <Reveal className="mb-3 text-[11px] font-semibold uppercase tracking-[1px] text-accent">
            {retainersContent.tag}
          </Reveal>
          <Reveal as="h2" className="t-feature-title mb-4 whitespace-pre-line" delay={1}>
            {retainersContent.title}
          </Reveal>
          <Reveal as="p" className="mb-7 text-[15px] leading-[1.65] text-white/45" delay={2}>
            {retainersContent.desc}
          </Reveal>
          <Reveal
            delay={3}
            className="overflow-hidden rounded-3xl border border-border-subtle bg-dark-3"
          >
            <MockRetainer />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
