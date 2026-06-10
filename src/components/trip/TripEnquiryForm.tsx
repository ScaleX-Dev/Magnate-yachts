"use client";

import { useState } from "react";
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
      <p className="text-[var(--color-amber)] font-medium text-sm">
        Got it — we&apos;ll hold {tripName} on the calendar and come back to you with dates and pricing. Safe passage until then.
      </p>
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
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-navy)] text-white text-sm font-medium hover:bg-[var(--color-navy-dark)] transition-colors whitespace-nowrap shrink-0"
      >
        Send this trip <ArrowRight size={14} />
      </button>
    </form>
  );
}
