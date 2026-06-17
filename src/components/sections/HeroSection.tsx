"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function HeroSection() {
  return (
    <section className="bg-[var(--color-ivory)] overflow-hidden">
      {/* Full-width hero image */}
      <motion.div
        className="container-site pt-5"
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <ImgPlaceholder
          label="Hero Image — Sri Lanka moment"
          aspectRatio="aspect-[16/9]"
          className="rounded-2xl shadow-[0_20px_60px_-20px_rgba(11,31,58,0.25)]"
        />
      </motion.div>

      {/* Headline + CTAs */}
      <div className="container-site pt-8 pb-12">
        <div className="max-w-2xl">
          <motion.h1
            className="text-5xl sm:text-[3.75rem] lg:text-7xl font-semibold leading-[1.08] text-[var(--color-navy)]"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            <span className="block mb-3">Anchor down.</span>
            <span className="block text-[11px] font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
              Galle &nbsp;·&nbsp; Trincomalee
            </span>
            <span className="block mb-8">Your Sri Lanka adventure begins here.</span>
          </motion.h1>
          <motion.p
            className="text-sm text-[var(--color-navy)]/55 leading-relaxed mb-8 max-w-md"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          >
            Yacht services and handpicked experiences, trusted by the global cruising community.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: EASE }}
          >
            <Link
              href="/book"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-[var(--color-navy)] text-white text-sm font-medium tracking-wide shadow-[0_1px_2px_rgba(11,31,58,0.05)] hover:bg-[var(--color-navy-dark)] hover:shadow-[0_8px_20px_-4px_rgba(11,31,58,0.35)] hover:-translate-y-[1px] transition-all duration-300 active:scale-[0.97]"
            >
              Plan your stay <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/clearance"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full border border-[var(--color-navy)]/25 text-[var(--color-navy)] text-sm font-medium tracking-wide hover:border-[var(--color-navy)] hover:bg-[var(--color-navy)]/[0.04] hover:-translate-y-[1px] transition-all duration-300 active:scale-[0.97]"
            >
              Arrange Clearance <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
