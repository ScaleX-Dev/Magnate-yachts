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
    "group inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.97]";

  const variants = {
    primary: "bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-dark)] shadow-[0_1px_2px_rgba(11,31,58,0.05)] hover:shadow-[0_8px_20px_-4px_rgba(11,31,58,0.35)] hover:-translate-y-[1px] focus-visible:outline-[var(--color-navy)]",
    outline: "border border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white hover:-translate-y-[1px] focus-visible:outline-[var(--color-navy)]",
    ghost:   "text-[var(--color-navy)] hover:text-[var(--color-amber)] focus-visible:outline-[var(--color-amber)]",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-7 py-3.5",
  };

  const classes = cn(base, variants[variant], sizes[size], disabled && "opacity-50 pointer-events-none", className);
  const arrowEl = arrow && (
    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {arrowEl}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {arrowEl}
    </button>
  );
}
