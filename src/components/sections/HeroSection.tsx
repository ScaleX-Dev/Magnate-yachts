"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

const EASE_EXPO = [0.22, 1, 0.36, 1] as const;

function LineReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className}`} style={{ paddingBottom: "0.06em" }}>
      <motion.span
        className="block"
        initial={{ y: "104%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, delay, ease: EASE_EXPO }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="container-site pt-5 md:pt-6 pb-14 md:pb-20">

        {/* Hero image */}
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, scale: 1.015 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE_EXPO }}
        >
          <ImgPlaceholder
            src="/images/site/hero-main.jpg"
            label="Sailing yacht at sea — Sri Lanka"
            aspectRatio="aspect-[16/9]"
            priority
            className="rounded-2xl shadow-[0_20px_60px_-20px_rgba(6,12,24,0.18)]"
          />
        </motion.div>

        {/* Headline */}
        <h1
          className="mb-8 md:mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <LineReveal
            delay={0.18}
            className="text-[clamp(2.6rem,7.5vw,6.5rem)] font-bold text-[var(--color-navy)] leading-[0.93] tracking-[-0.02em]"
          >
            Anchor down.
          </LineReveal>
          <LineReveal
            delay={0.32}
            className="text-[clamp(2.6rem,7.5vw,6.5rem)] font-bold text-[var(--color-navy)] leading-[0.93] tracking-[-0.02em]"
          >
            Your Sri Lanka adventure begins
          </LineReveal>
          <LineReveal
            delay={0.46}
            className="text-[clamp(2.6rem,7.5vw,6.5rem)] font-bold text-[var(--color-navy)] leading-[0.93] tracking-[-0.02em]"
          >
            <span>here.</span>
            <motion.span
              className="inline-flex items-center gap-2 ml-4 sm:ml-6 text-[clamp(0.6rem,1.35vw,0.875rem)] font-medium uppercase tracking-[0.22em] text-[var(--color-amber)] align-middle"
              style={{ fontFamily: "var(--font-body)", verticalAlign: "middle", transform: "translateY(-0.1em)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.82 }}
            >
              Galle&nbsp;&nbsp;·&nbsp;&nbsp;Trincomalee
            </motion.span>
          </LineReveal>
        </h1>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE_EXPO }}
        >
          <Link
            href="/book"
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--color-navy)] text-white text-[13.5px] font-medium tracking-wide hover:bg-[var(--color-navy-dark)] hover:shadow-[0_16px_48px_-8px_rgba(6,12,24,0.35)] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.97]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Plan your stay
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/clearance"
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-xl border border-[var(--color-navy)]/22 text-[var(--color-navy)] text-[13.5px] font-medium tracking-wide hover:border-[var(--color-navy)]/45 hover:bg-[var(--color-navy)]/[0.04] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.97]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Arrange Clearance
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
