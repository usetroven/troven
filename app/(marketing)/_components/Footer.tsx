import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { footerContent } from "@/lib/content/landing";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-border-subtle bg-dark px-6 py-12 md:px-20">
      <Logo size="sm" />
      <div className="flex flex-wrap gap-7">
        {footerContent.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[13px] text-white/30 transition-colors hover:text-white/70"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <span className="text-[13px] text-white/20">{footerContent.note}</span>
    </footer>
  );
}
