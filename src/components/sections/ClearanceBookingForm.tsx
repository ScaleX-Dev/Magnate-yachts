"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Flag, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

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
  { value: "3-day", label: "3-Day", sublabel: "from US $—" },
  { value: "5-day", label: "5-Day", sublabel: "from US $—" },
  { value: "7-day", label: "7-Day", sublabel: "from US $—" },
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

  const tripLabel = TRIP_OPTIONS.find(t => t.value === trip)?.label ?? "—";

  const scrollTo = (n: number) => {
    setActiveStep(n);
    document.getElementById(`step-${n}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ── Page header ────────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)] border-b border-[var(--color-ivory-dark)]">
        <div className="container-site py-10 lg:py-14">
          <Reveal>
            <h1
              className="text-3xl sm:text-4xl font-semibold text-[var(--color-navy)] mb-7"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Secure Magnate as your agent
            </h1>

            {/* Step indicator */}
            <div className="flex flex-wrap items-center gap-2">
              {STEPS.map(({ n, label }, i) => (
                <div key={n} className="flex items-center gap-2">
                  <button
                    onClick={() => scrollTo(n)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-[9px] rounded-full text-[13px] font-medium border transition-all duration-300",
                      activeStep === n
                        ? "bg-[var(--color-navy)] text-white border-[var(--color-navy)] shadow-[0_6px_16px_-6px_rgba(11,31,58,0.4)]"
                        : "bg-white text-[var(--color-navy)]/50 border-[var(--color-ivory-dark)] hover:border-[var(--color-navy)]/20 hover:text-[var(--color-navy)]/75 hover:-translate-y-px"
                    )}
                  >
                    <span className={cn("text-[11px] font-bold", activeStep === n ? "text-white/45" : "text-[var(--color-navy)]/20")}>
                      {n}
                    </span>
                    {label}
                  </button>
                  {i < STEPS.length - 1 && (
                    <span className="text-[var(--color-navy)]/15 text-xs hidden sm:inline">—</span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Form + sidebar ──────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-site py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">

            {/* ── Left: form sections ─────────────────────────────── */}
            <div className="flex flex-col gap-10">

              {/* Step 1 */}
              <Reveal id="step-1" className="scroll-mt-28">
                <StepHeader n={1} label="Your vessel" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  <input
                    value={vessel.name}
                    onChange={e => setVessel({ ...vessel, name: e.target.value })}
                    placeholder="Vessel name"
                    className="form-input"
                  />
                  <input
                    value={vessel.type}
                    onChange={e => setVessel({ ...vessel, type: e.target.value })}
                    placeholder="Type (sail / motor)"
                    className="form-input"
                  />
                  <input
                    value={vessel.loa}
                    onChange={e => setVessel({ ...vessel, loa: e.target.value })}
                    placeholder="LOA & flag"
                    className="form-input"
                  />
                  <input
                    value={vessel.crew}
                    onChange={e => setVessel({ ...vessel, crew: e.target.value })}
                    placeholder="Crew on board"
                    className="form-input"
                  />
                </div>
              </Reveal>

              {/* Step 2 */}
              <Reveal id="step-2" className="scroll-mt-28">
                <StepHeader n={2} label="When will you arrive?" />

                <div className="mt-6 flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-200/70 p-4 mb-5">
                  <Flag size={13} className="text-amber-600/80 shrink-0 mt-[2px]" />
                  <p className="text-[12.5px] text-amber-800/80 leading-relaxed">
                    <strong className="font-semibold">Passages slip with weather,</strong> so we ask for an approximate window — not a fixed date. Confirm exact arrival on VHF when you&apos;re close.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <select
                    value={arrival.month}
                    onChange={e => setArrival({ ...arrival, month: e.target.value })}
                    className="form-input"
                  >
                    <option value="">Arrival month ▾</option>
                    {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <select
                    value={arrival.window}
                    onChange={e => setArrival({ ...arrival, window: e.target.value })}
                    className="form-input"
                  >
                    <option value="">Window ▾ (e.g. 2nd–3rd week)</option>
                    {WINDOWS.map(w => <option key={w} value={w}>{w}</option>)}
                  </select>
                  <input
                    value={arrival.lastPort}
                    onChange={e => setArrival({ ...arrival, lastPort: e.target.value })}
                    placeholder="Last port / zarpe destination = Sri Lanka"
                    className="form-input sm:col-span-2"
                  />
                </div>
              </Reveal>

              {/* Step 3 */}
              <Reveal id="step-3" className="scroll-mt-28">
                <StepHeader n={3} label="Add a trip?">
                  <span className="text-[var(--color-navy)]/40 font-normal text-[12px] ml-1.5">
                    Optional — skip if you&apos;re just clearing through
                  </span>
                </StepHeader>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {TRIP_OPTIONS.map(({ value, label, sublabel }) => (
                    <label
                      key={value}
                      className={cn(
                        "flex flex-col gap-2 p-4 rounded-xl border cursor-pointer transition-all duration-200",
                        trip === value
                          ? "border-[var(--color-navy)] bg-[var(--color-navy)]/[0.025] shadow-[0_8px_20px_-12px_rgba(11,31,58,0.3)]"
                          : "border-[var(--color-ivory-dark)] bg-white hover:border-[var(--color-navy)]/20 hover:-translate-y-px"
                      )}
                    >
                      <input type="radio" name="trip" value={value} checked={trip === value} onChange={() => setTrip(value)} className="sr-only" />
                      <RadioDot active={trip === value} />
                      <span className="text-sm font-semibold text-[var(--color-navy)] mt-1">{label}</span>
                      <span className="text-[11px] text-[var(--color-navy)]/40">{sublabel}</span>
                    </label>
                  ))}
                </div>
              </Reveal>

              {/* Step 4 */}
              <Reveal id="step-4" className="scroll-mt-28">
                <StepHeader n={4} label="Payment" />

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  {[
                    { value: "deposit", label: "Deposit now" },
                    { value: "full",    label: "Pay in full" },
                  ].map(({ value, label }) => (
                    <label
                      key={value}
                      className={cn(
                        "flex-1 flex items-center gap-3 px-4 py-3.5 rounded-xl border cursor-pointer transition-all duration-200",
                        payment === value
                          ? "border-[var(--color-navy)] bg-[var(--color-navy)]/[0.025] shadow-[0_8px_20px_-12px_rgba(11,31,58,0.3)]"
                          : "border-[var(--color-ivory-dark)] bg-white hover:border-[var(--color-navy)]/20 hover:-translate-y-px"
                      )}
                    >
                      <input type="radio" value={value} checked={payment === value} onChange={() => setPayment(value)} className="sr-only" />
                      <RadioDot active={payment === value} />
                      <span className="text-sm font-medium text-[var(--color-navy)]">{label}</span>
                    </label>
                  ))}
                </div>

                <div className="mt-3 px-5 py-4 rounded-xl border border-[var(--color-ivory-dark)] bg-[var(--color-ivory)]">
                  <span className="text-sm text-[var(--color-navy)]/65">
                    <span className="font-semibold text-[var(--color-navy)]/80">[ PayPal ]</span>
                    {" "}pay securely in USD / EUR
                  </span>
                </div>

                <p className="mt-4 text-[11.5px] text-[var(--color-navy)]/35 leading-relaxed max-w-lg">
                  Refund &amp; cancellation policy shown clearly here — covers late arrival, no-show, and weather delays.
                </p>
              </Reveal>

            </div>

            {/* ── Right: Order summary ─────────────────────────────── */}
            <aside className="lg:sticky lg:top-[88px]">
              <div className="rounded-2xl border border-[var(--color-ivory-dark)] p-6 bg-[var(--color-ivory)] shadow-[0_24px_60px_-36px_rgba(11,31,58,0.25)]">
                <h3 className="text-[13.5px] font-semibold text-[var(--color-navy)] pb-4 mb-4 border-b border-[var(--color-ivory-dark)]">
                  Order summary
                </h3>

                <div className="flex flex-col gap-3 pb-4 border-b border-[var(--color-ivory-dark)]">
                  <SummaryRow label="Clearance package" value="US $—" />
                  <SummaryRow label="Optional trip" value={trip !== "none" ? tripLabel : "—"} muted={trip === "none"} />
                  <SummaryRow label="Port dues (at cost)" value="—" muted />
                </div>

                <div className="flex items-center justify-between py-4">
                  <span className="text-[13px] font-semibold text-[var(--color-navy)]">Total (USD)</span>
                  <span className="text-[13px] font-semibold text-[var(--color-navy)]">US $—</span>
                </div>

                <button className="group w-full py-3.5 rounded-full bg-[var(--color-navy)] text-white text-[13px] font-semibold hover:bg-[var(--color-navy-dark)] hover:shadow-[0_10px_24px_-8px_rgba(11,31,58,0.45)] active:scale-[0.98] transition-all duration-300">
                  Confirm &amp; pay
                </button>

                <p className="mt-4 text-[11px] text-[var(--color-navy)]/35 leading-relaxed">
                  Confirmation and our document checklist arrive by email immediately.
                </p>
              </div>

              <p className="mt-4 text-center text-[12px] text-[var(--color-navy)]/40">
                <Link href="/contact" className="hover:text-[var(--color-navy)]/65 transition-colors">
                  Prefer to enquire first? Contact us →
                </Link>
              </p>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}

// ── helpers ─────────────────────────────────────────────────────────────────

function StepHeader({ n, label, children }: { n: number; label: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 pb-4 border-b border-[var(--color-ivory-dark)]">
      <span className="text-[11px] font-bold text-[var(--color-navy)]/25">{n}</span>
      <h2 className="text-[15px] font-semibold text-[var(--color-navy)]">{label}</h2>
      {children}
    </div>
  );
}

function RadioDot({ active }: { active: boolean }) {
  return (
    <span className={cn(
      "w-[14px] h-[14px] rounded-full border-2 flex items-center justify-center shrink-0 transition-colors duration-200",
      active ? "border-[var(--color-navy)]" : "border-[var(--color-navy)]/20"
    )}>
      <AnimatePresence>
        {active && (
          <motion.span
            className="w-[6px] h-[6px] rounded-full bg-[var(--color-navy)]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </span>
  );
}

function SummaryRow({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-[12px] text-[var(--color-navy)]/50">{label}</span>
      <span className={cn("text-[12px] font-medium", muted ? "text-[var(--color-navy)]/22" : "text-[var(--color-navy)]")}>
        {value}
      </span>
    </div>
  );
}
