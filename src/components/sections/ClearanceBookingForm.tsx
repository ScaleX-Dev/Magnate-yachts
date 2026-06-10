"use client";

import { useState } from "react";
import { Flag } from "lucide-react";
import { cn } from "@/lib/utils";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const WINDOWS = [
  "1st week", "2nd week", "3rd week", "4th week",
  "1st–2nd week", "2nd–3rd week", "3rd–4th week",
];

const TRIP_OPTIONS = [
  { value: "none",  label: "None",  sublabel: "Clearance only" },
  { value: "3-day", label: "3-Day", sublabel: "from $—" },
  { value: "5-day", label: "5-Day", sublabel: "from $—" },
  { value: "7-day", label: "7-Day", sublabel: "from $—" },
];

const STEPS = [
  { n: 1, label: "Your boat" },
  { n: 2, label: "Arrival" },
  { n: 3, label: "Trip (optional)" },
  { n: 4, label: "Payment" },
];

export function ClearanceBookingForm() {
  const [activeStep, setActiveStep] = useState(1);
  const [vessel, setVessel] = useState({ name: "", type: "", loa: "", crew: "" });
  const [arrival, setArrival] = useState({ month: "", window: "", lastPort: "" });
  const [trip, setTrip] = useState("none");
  const [payment, setPayment] = useState("deposit");

  const scrollToSection = (id: string, step: number) => {
    setActiveStep(step);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Page header */}
      <section className="bg-[var(--color-ivory)] border-b border-[var(--color-ivory-dark)]">
        <div className="container-site py-10">
          <h1
            className="text-3xl sm:text-4xl font-semibold text-[var(--color-navy)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Secure Magnate as your agent
          </h1>

          {/* Step indicator */}
          <div className="flex items-center gap-2 flex-wrap">
            {STEPS.map(({ n, label }) => (
              <button
                key={n}
                onClick={() => scrollToSection(`step-${n}`, n)}
                className={cn(
                  "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  n === activeStep
                    ? "bg-[var(--color-navy)] text-white"
                    : "bg-white border border-[var(--color-ivory-dark)] text-[var(--color-navy)]/60 hover:border-[var(--color-navy)]/40"
                )}
              >
                <span>{n}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Two-column form + sidebar */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">

            {/* ── Left: form cards ── */}
            <div className="flex flex-col gap-5">

              {/* Card 1 — Your vessel */}
              <div
                id="step-1"
                className="bg-white border border-[var(--color-ivory-dark)] rounded-sm p-6"
                onFocus={() => setActiveStep(1)}
              >
                <h2 className="font-semibold text-[var(--color-navy)] mb-5">Your vessel</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    className="form-input"
                    placeholder="Vessel name"
                    value={vessel.name}
                    onChange={(e) => setVessel({ ...vessel, name: e.target.value })}
                  />
                  <input
                    className="form-input"
                    placeholder="Type (sail / motor)"
                    value={vessel.type}
                    onChange={(e) => setVessel({ ...vessel, type: e.target.value })}
                  />
                  <input
                    className="form-input"
                    placeholder="LOA & flag"
                    value={vessel.loa}
                    onChange={(e) => setVessel({ ...vessel, loa: e.target.value })}
                  />
                  <input
                    className="form-input"
                    placeholder="Crew on board"
                    value={vessel.crew}
                    onChange={(e) => setVessel({ ...vessel, crew: e.target.value })}
                  />
                </div>
              </div>

              {/* Card 2 — Arrival */}
              <div
                id="step-2"
                className="bg-white border border-[var(--color-ivory-dark)] rounded-sm p-6"
                onFocus={() => setActiveStep(2)}
              >
                <h2 className="font-semibold text-[var(--color-navy)] mb-5">When will you arrive?</h2>

                {/* Warning banner */}
                <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-sm px-4 py-3 mb-5">
                  <Flag size={14} className="text-amber-700 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 leading-relaxed">
                    Passages slip with weather, so we ask for an approximate window — not a fixed date.
                    Confirm exact arrival on VHF when you&apos;re close.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <select
                    className="form-input"
                    value={arrival.month}
                    onChange={(e) => setArrival({ ...arrival, month: e.target.value })}
                  >
                    <option value="">Arrival month ▾</option>
                    {MONTHS.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <select
                    className="form-input"
                    value={arrival.window}
                    onChange={(e) => setArrival({ ...arrival, window: e.target.value })}
                  >
                    <option value="">Window ▾ (e.g. 2nd–3rd week)</option>
                    {WINDOWS.map((w) => (
                      <option key={w} value={w}>{w}</option>
                    ))}
                  </select>
                  <input
                    className="form-input sm:col-span-2"
                    placeholder="Last port / zarpe destination = Sri Lanka"
                    value={arrival.lastPort}
                    onChange={(e) => setArrival({ ...arrival, lastPort: e.target.value })}
                  />
                </div>
              </div>

              {/* Card 3 — Add a trip */}
              <div
                id="step-3"
                className="bg-white border border-[var(--color-ivory-dark)] rounded-sm p-6"
                onFocus={() => setActiveStep(3)}
              >
                <div className="flex items-baseline gap-3 flex-wrap mb-5">
                  <h2 className="font-semibold text-[var(--color-navy)]">Add a trip?</h2>
                  <p className="text-sm text-[var(--color-navy)]/50">
                    Optional — skip if you&apos;re just clearing through
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {TRIP_OPTIONS.map(({ value, label, sublabel }) => (
                    <button
                      key={value}
                      onClick={() => setTrip(value)}
                      className={cn(
                        "border rounded-sm p-4 text-left transition-colors",
                        trip === value
                          ? "border-[var(--color-navy)] bg-[var(--color-navy)]/[0.04]"
                          : "border-[var(--color-ivory-dark)] hover:border-[var(--color-navy)]/30"
                      )}
                    >
                      <div
                        className={cn(
                          "w-4 h-4 rounded-full border-2 mb-3 flex items-center justify-center",
                          trip === value
                            ? "border-[var(--color-navy)] bg-[var(--color-navy)]"
                            : "border-[var(--color-navy)]/30"
                        )}
                      >
                        {trip === value && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                      <p className="font-semibold text-[var(--color-navy)] text-sm">{label}</p>
                      <p className="text-xs text-[var(--color-navy)]/50 mt-0.5">{sublabel}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Card 4 — Payment */}
              <div
                id="step-4"
                className="bg-white border border-[var(--color-ivory-dark)] rounded-sm p-6"
                onFocus={() => setActiveStep(4)}
              >
                <h2 className="font-semibold text-[var(--color-navy)] mb-5">Payment</h2>

                {/* Deposit / full toggle */}
                <div className="flex gap-3 mb-4 flex-wrap">
                  {[
                    { value: "deposit", label: "Deposit now" },
                    { value: "full",    label: "Pay in full"  },
                  ].map(({ value, label }) => (
                    <button
                      key={value}
                      onClick={() => setPayment(value)}
                      className={cn(
                        "inline-flex items-center gap-2.5 px-4 py-2.5 rounded-sm border text-sm font-medium transition-colors",
                        payment === value
                          ? "border-[var(--color-navy)] bg-[var(--color-navy)] text-white"
                          : "border-[var(--color-ivory-dark)] text-[var(--color-navy)]/70 hover:border-[var(--color-navy)]/40"
                      )}
                    >
                      <span
                        className={cn(
                          "w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0",
                          payment === value ? "border-white" : "border-[var(--color-navy)]/40"
                        )}
                      >
                        {payment === value && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white block" />
                        )}
                      </span>
                      {label}
                    </button>
                  ))}
                </div>

                {/* PayPal row */}
                <div className="flex items-center gap-3 border border-[var(--color-ivory-dark)] rounded-sm px-4 py-3 mb-4">
                  <span className="text-xs font-semibold text-[var(--color-navy)] border border-[var(--color-navy)]/20 px-2 py-1 rounded-sm tracking-wide">
                    PayPal
                  </span>
                  <span className="text-sm text-[var(--color-navy)]/60">
                    pay securely in USD / EUR
                  </span>
                </div>

                <p className="text-xs text-[var(--color-navy)]/40 leading-relaxed">
                  Refund &amp; cancellation policy shown clearly here — covers late arrival, no-show, and
                  weather delays. (Policy TBC with Satush.)
                </p>
              </div>
            </div>

            {/* ── Right: sticky order summary ── */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white border border-[var(--color-ivory-dark)] rounded-sm p-6">
                <h2 className="font-semibold text-[var(--color-navy)] mb-5">Order summary</h2>

                <div className="flex flex-col gap-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--color-navy)]">Clearance package</span>
                    <span className="font-medium text-[var(--color-navy)]">US $—</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--color-navy)]/50">Optional trip</span>
                    <span className="text-[var(--color-navy)]/30">—</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--color-navy)]/50">Port dues (at cost)</span>
                    <span className="text-[var(--color-navy)]/30">—</span>
                  </div>
                </div>

                <div className="border-t border-[var(--color-ivory-dark)] pt-4 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[var(--color-navy)]">Total (USD)</span>
                    <span className="font-semibold text-[var(--color-navy)]">US $—</span>
                  </div>
                </div>

                <button className="w-full py-3.5 bg-[var(--color-navy)] text-white text-sm font-semibold rounded-sm hover:bg-[var(--color-navy-dark)] transition-colors mb-4">
                  Confirm &amp; pay
                </button>

                <p className="text-xs text-[var(--color-navy)]/40 leading-relaxed text-center">
                  Confirmation and our document checklist arrive by email immediately.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
