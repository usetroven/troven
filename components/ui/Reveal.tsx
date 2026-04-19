"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "left" | "right" | "scale";
type RevealDelay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

type RevealProps = {
  as?: ElementType;
  direction?: RevealDirection;
  delay?: RevealDelay;
  className?: string;
  children: ReactNode;
};

export function Reveal({
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-reveal={direction}
      data-reveal-delay={delay || undefined}
      data-visible={visible || undefined}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
