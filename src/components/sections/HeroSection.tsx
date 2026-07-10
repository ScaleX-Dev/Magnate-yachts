"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    <section className="relative bg-[var(--color-navy-dark)] min-h-[calc(100svh-68px)] md:min-h-[calc(100svh-72px)] lg:min-h-[calc(100svh-104px)] flex flex-col justify-end overflow-hidden">
      {/* Video background */}
      <video
        src="/images/site/VIDEO%203.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-55"
        style={{ willChange: "transform" }}
      />

      {/* Lighter overlays — let the video show through */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080F1E]/75 via-[#080F1E]/10 to-[#080F1E]/72 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(8,15,30,0.45)_100%)] pointer-events-none" />

      {/* Content — anchored to bottom */}
      <div className="relative z-10 container-site pb-10 md:pb-12 overflow-x-hidden">

        {/* Headline */}
        <h1
          className="mb-6 md:mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <LineReveal
            delay={0.18}
            className="text-[clamp(1.9rem,4.2vw,3.6rem)] font-semibold text-white leading-[0.94] tracking-[-0.01em] sm:whitespace-nowrap"
          >
            Anchor down.
          </LineReveal>
          <LineReveal
            delay={0.30}
            className="text-[clamp(1.9rem,4.2vw,3.6rem)] font-semibold text-white leading-[0.94] tracking-[-0.01em] sm:whitespace-nowrap"
          >
            Your Sri Lanka adventure
          </LineReveal>
          <LineReveal
            delay={0.42}
            className="text-[clamp(1.9rem,4.2vw,3.6rem)] font-semibold text-white leading-[0.94] tracking-[-0.01em] sm:whitespace-nowrap"
          >
            begins here
          </LineReveal>
          <div className="hidden sm:block">
            <LineReveal
              delay={0.54}
              className="text-[clamp(1.9rem,4.2vw,3.6rem)] font-semibold text-white leading-[0.94] tracking-[-0.01em] whitespace-nowrap"
            >
              <motion.span
                className="inline-flex items-center gap-2"
                style={{ fontFamily: "var(--font-accent)", fontSize: "clamp(1.6rem,3.6vw,3rem)", letterSpacing: "0.28em", color: "var(--color-amber)", verticalAlign: "middle", transform: "translateY(-0.08em)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.95 }}
              >
                Galle&nbsp;&nbsp;·&nbsp;&nbsp;Trincomalee
              </motion.span>
            </LineReveal>
          </div>
        </h1>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: EASE_EXPO }}
        >
          <Link
            href="/book"
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[var(--color-navy)] text-[13.5px] font-medium tracking-wide hover:bg-white/92 hover:shadow-[0_16px_48px_-8px_rgba(6,12,24,0.55)] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.97]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Plan your stay
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/clearance"
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full bg-[var(--color-navy-mid)] text-white text-[13.5px] font-medium tracking-wide hover:bg-[var(--color-navy)] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.97]"
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
