import type { ReactNode } from "react";
import { Nav } from "./_components/Nav";
import { Footer } from "./_components/Footer";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
