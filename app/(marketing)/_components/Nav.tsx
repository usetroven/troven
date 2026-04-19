"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/shared/Logo";
import { navContent } from "@/lib/content/landing";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-[100] flex h-[60px] items-center px-5 md:px-10",
        "border-b border-transparent transition-[background-color,backdrop-filter,border-color] duration-500",
        scrolled && "bg-dark/88 border-border-subtle backdrop-blur-xl",
      )}
    >
      <Link href="/" aria-label="Troven home">
        <Logo />
      </Link>
      <div className="ml-10 hidden gap-8 md:flex">
        {navContent.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[14px] text-white/45 transition-colors hover:text-white/85"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="ml-auto flex items-center gap-2.5">
        <Button as="a" href={navContent.login.href} variant="ghost" size="sm">
          {navContent.login.label}
        </Button>
        <Button as="a" href={navContent.signup.href} variant="primary" size="sm">
          {navContent.signup.label}
        </Button>
      </div>
    </nav>
  );
}
