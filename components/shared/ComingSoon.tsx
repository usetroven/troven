import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/shared/Logo";

type ComingSoonProps = {
  /** Headline variant, defaults to "Something delightful is on the way." */
  headline?: string;
  /** Subtitle variant. */
  subtitle?: string;
  /** Primary CTA back-link (defaults to /). */
  backHref?: string;
};

export function ComingSoon({
  headline = "Something delightful\nis on the way.",
  subtitle = "We’re polishing this corner of Troven. In the meantime, the main stage is already open — come take a look around.",
  backHref = "/",
}: ComingSoonProps) {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-dark">
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,168,126,0.15) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(73,79,223,0.1) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="anim-blob pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="anim-blob pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-iris/20 blur-[120px]"
        style={{ animationDelay: "-5s" }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center px-6 py-6 md:px-10">
        <Link href="/" aria-label="Troven home">
          <Logo />
        </Link>
      </header>

      {/* Body */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center md:px-10">
        <span className="anim-fade-up anim-delay-1 mb-7 inline-flex items-center gap-2 rounded-pill border border-accent/25 bg-accent/10 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[2px] text-accent">
          <span className="anim-pulse h-1.5 w-1.5 rounded-full bg-accent" />
          Coming soon
        </span>

        <h1 className="anim-fade-up anim-delay-2 t-display-hero mb-6 whitespace-pre-line text-white">
          {headline}
        </h1>

        <p className="anim-fade-up anim-delay-3 mx-auto mb-10 max-w-[520px] text-[17px] leading-[1.6] text-white/45">
          {subtitle}
        </p>

        <div className="anim-fade-up anim-delay-4 flex flex-wrap justify-center gap-3">
          <Button as="a" href={backHref} variant="hero-primary" size="md">
            Back to home <span aria-hidden>→</span>
          </Button>
        </div>
      </div>

      <footer className="relative z-10 px-6 py-8 text-center text-[12px] text-white/25 md:px-10">
        © 2026 Troven · usetroven.com
      </footer>
    </main>
  );
}
