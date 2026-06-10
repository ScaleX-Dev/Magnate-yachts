"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to Resend/API route
    setSubmitted(true);
  };

  return (
    <section className="bg-[var(--color-ivory-dark)]">
      <div className="container-site py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-4">
              Before you arrive — a small thing we send you.
            </p>
            <p className="text-sm text-[var(--color-navy)]/60 leading-relaxed">
              The first document. Port notes for whoever&apos;s at the helm. SIM cards, ATMs and temple etiquette for everyone else.
            </p>
          </div>

          <div>
            {submitted ? (
              <p className="text-[var(--color-amber)] font-medium">
                We&apos;ll send it across before your arrival window. Safe passage.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3 flex-col sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 text-sm bg-white border border-[var(--color-ivory-dark)] rounded-sm text-[var(--color-navy)] placeholder:text-[var(--color-navy)]/40 focus:outline-none focus:border-[var(--color-navy)] transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-navy)] text-white text-sm font-medium rounded-sm hover:bg-[var(--color-navy-dark)] transition-colors whitespace-nowrap"
                >
                  Send it across <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
