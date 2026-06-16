"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  tripName: string;
}

export function TripEnquiryForm({ tripName }: Props) {
  const [form, setForm] = useState({ firstName: "", vesselName: "", window: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.vesselName) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.p
        className="text-[var(--color-amber)] font-medium text-sm"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Got it — we&apos;ll hold {tripName} on the calendar and come back to you with dates and pricing. Safe passage until then.
      </motion.p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        className="form-input flex-1"
        placeholder="First name"
        value={form.firstName}
        onChange={e => setForm({ ...form, firstName: e.target.value })}
        required
      />
      <input
        className="form-input flex-1"
        placeholder="Vessel name"
        value={form.vesselName}
        onChange={e => setForm({ ...form, vesselName: e.target.value })}
        required
      />
      <input
        className="form-input flex-1"
        placeholder="Approximate arrival window"
        value={form.window}
        onChange={e => setForm({ ...form, window: e.target.value })}
      />
      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-navy)] text-white text-sm font-medium hover:bg-[var(--color-navy-dark)] hover:shadow-[0_8px_20px_-6px_rgba(11,31,58,0.4)] active:scale-[0.97] transition-all duration-300 whitespace-nowrap shrink-0"
      >
        Send this trip <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
