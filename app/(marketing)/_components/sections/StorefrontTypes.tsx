import { Reveal } from "@/components/ui/Reveal";
import { TypeCard } from "@/components/marketing/TypeCard";
import { storefrontTypesContent } from "@/lib/content/landing";

export function StorefrontTypes() {
  return (
    <div
      id="features"
      className="relative overflow-hidden px-6 py-[100px] md:px-12"
      style={{
        background:
          "linear-gradient(135deg, #0e0f11 0%, #141a1f 50%, #0a0f12 100%)",
      }}
    >
      {/* Radial ambient overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(0,168,126,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 30%, rgba(73,79,223,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <Reveal className="t-eyebrow mb-5">{storefrontTypesContent.eyebrow}</Reveal>
        <Reveal as="h2" className="t-section mb-4 whitespace-pre-line" delay={1}>
          {storefrontTypesContent.title}
        </Reveal>
        <Reveal
          as="p"
          className="max-w-[520px] text-[17px] leading-[1.6] text-white/45"
          delay={2}
        >
          {storefrontTypesContent.subtitle}
        </Reveal>

        <div className="mt-14 grid gap-3.5 md:grid-cols-3">
          {storefrontTypesContent.types.map((type, i) => (
            <Reveal
              key={type.title}
              delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
              className="h-full"
            >
              <TypeCard {...type} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
