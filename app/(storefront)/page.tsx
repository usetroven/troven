import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Troven.Stack — Sell digital products",
  description: "The simplest way to sell digital products online.",
};

export default function HomePage() {
  return (
    <div className="container flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight">
        Troven<span className="text-primary">.Stack</span>
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        The simplest way for creators to sell digital products, courses, and
        memberships online.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="/sign-up"
          className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90"
        >
          Get started — it&apos;s free
        </a>
        <a
          href="#features"
          className="inline-flex items-center rounded-md border px-6 py-3 text-sm font-semibold hover:bg-accent"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
