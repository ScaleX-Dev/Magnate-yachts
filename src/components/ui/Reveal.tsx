"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  id?: string;
}

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  duration = 0.6,
  once = true,
  id,
}: RevealProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container — wrap a list of children, each fades up in sequence. */
export function RevealStagger({
  children,
  className,
  stagger = 0.08,
  y = 18,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
}) {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <RevealStaggerItem key={i} y={y}>
              {child}
            </RevealStaggerItem>
          ))
        : children}
    </motion.div>
  );
}

function RevealStaggerItem({ children, y }: { children: ReactNode; y: number }) {
  const item: Variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };
  return <motion.div variants={item}>{children}</motion.div>;
}
