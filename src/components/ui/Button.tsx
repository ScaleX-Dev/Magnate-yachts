import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
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
    "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-200 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary: "bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-dark)] focus-visible:outline-[var(--color-navy)]",
    outline: "border border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white focus-visible:outline-[var(--color-navy)]",
    ghost:   "text-[var(--color-navy)] hover:text-[var(--color-amber)] focus-visible:outline-[var(--color-amber)]",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-7 py-3.5",
  };

  const classes = cn(base, variants[variant], sizes[size], disabled && "opacity-50 pointer-events-none", className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {arrow && <ArrowRight size={14} />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {arrow && <ArrowRight size={14} />}
    </button>
  );
}
