import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "hero-primary" | "hero-ghost" | "pill-light" | "pill-dark";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 font-display font-medium rounded-pill transition-all disabled:opacity-50 disabled:pointer-events-none";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-white text-dark hover:opacity-90",
  ghost:
    "border border-white/20 text-white/70 hover:text-white hover:border-white/50 bg-transparent",
  "hero-primary":
    "bg-white text-dark font-semibold hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]",
  "hero-ghost":
    "border border-white/15 text-white/65 hover:text-white hover:border-white/40 bg-transparent",
  "pill-light":
    "bg-white text-dark hover:opacity-85 w-full",
  "pill-dark":
    "bg-white/10 text-white hover:opacity-85 w-full",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-[14px] px-[22px] py-[9px]",
  md: "text-[15px] px-8 py-[14px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    as?: "button";
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    as: "a";
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "sm", className, children } = props;
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  if (props.as === "a") {
    const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
