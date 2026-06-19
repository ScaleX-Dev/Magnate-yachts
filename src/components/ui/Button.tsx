import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  arrow?: boolean;
}

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  arrow,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.97]";

  const variants = {
    primary:
      "bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-dark)] hover:shadow-[0_8px_24px_-6px_rgba(6,12,24,0.4)] hover:-translate-y-px focus-visible:outline-[var(--color-navy)]",
    gold:
      "bg-[var(--color-amber)] text-white hover:bg-[var(--color-amber-light)] hover:shadow-[0_12px_36px_-8px_rgba(196,146,74,0.45)] hover:-translate-y-px focus-visible:outline-[var(--color-amber)]",
    outline:
      "border border-[var(--color-navy)]/25 text-[var(--color-navy)] hover:border-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white hover:-translate-y-px focus-visible:outline-[var(--color-navy)]",
    ghost:
      "text-[var(--color-navy)] hover:text-[var(--color-amber)] focus-visible:outline-[var(--color-amber)]",
  };

  const sizes = {
    sm: "text-xs px-5 py-2.5",
    md: "text-[13.5px] px-6 py-3",
    lg: "text-[14px] px-8 py-4",
  };

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  const arrowEl = arrow && (
    <ArrowRight
      size={13}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  );

  if (href) {
    return (
      <Link href={href} className={classes} style={{ fontFamily: "var(--font-body)" }}>
        {children}
        {arrowEl}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {children}
      {arrowEl}
    </button>
  );
}
