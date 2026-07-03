"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Flag, ArrowRight, Check } from "lucide-react";
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
  { value: "none",   label: "None",           sublabel: "Clearance only" },
  { value: "day",    label: "Day excursion",  sublabel: "from US $75" },
  { value: "3-day",  label: "Safari & Hills", sublabel: "2 nights · US $560" },
  { value: "5-day",  label: "Wilderness",     sublabel: "4 nights · US $940" },
  { value: "custom", label: "Custom trip",   sublabel: "Your itinerary" },
];

const STEPS = [
  { n: 1, label: "Your boat" },
  { n: 2, label: "Arrival" },
  { n: 3, label: "Trip" },
  { n: 4, label: "Payment" },
];

/* ── Shared field wrapper ────────────────────────────────────────── */
function Field({
  label,
  children,
  hint,
  span2 = false,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
  span2?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", span2 && "sm:col-span-2")}>
      <label
        className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/35"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
      </label>
      {children}
      {hint && (
        <p className="text-[11px] text-white/25 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          {hint}
        </p>
      )}
    </div>
  );
}

/* ── Dark input / select ─────────────────────────────────────────── */
const inputClass =
  "w-full px-4 py-3 text-[13.5px] rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder:text-white/25 focus:outline-none focus:border-[var(--color-amber)]/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(196,146,74,0.12)] transition-all duration-200";

/* ── Radio dot ───────────────────────────────────────────────────── */
function RadioDot({ active }: { active: boolean }) {
  return (
    <span
      className={cn(
        "w-[14px] h-[14px] rounded-full border-2 flex items-center justify-center shrink-0 transition-colors duration-200",
        active ? "border-[var(--color-amber)]" : "border-white/20"
      )}
    >
      <AnimatePresence>
        {active && (
          <motion.span
            className="w-[6px] h-[6px] rounded-full bg-[var(--color-amber)]"
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

/* ── Step header ─────────────────────────────────────────────────── */
function StepHeader({ n, label, note }: { n: number; label: string; note?: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-3 pb-5 mb-6 border-b border-white/[0.07]">
      <span
        className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--color-amber)]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {String(n).padStart(2, "0")}
      </span>
      <h2
        className="text-[1.15rem] font-medium text-white"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {label}
      </h2>
      {note && (
        <span className="text-[11.5px] text-white/30" style={{ fontFamily: "var(--font-body)" }}>
          {note}
        </span>
      )}
    </div>
  );
}

/* ── Summary row ─────────────────────────────────────────────────── */
function SummaryRow({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-[12.5px] text-white/40" style={{ fontFamily: "var(--font-body)" }}>{label}</span>
      <span
        className={cn(
          "text-[12.5px] font-medium",
          muted ? "text-white/20" : "text-white/80"
        )}
        style={{ fontFamily: "var(--font-body)" }}
      >
        {value}
      </span>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export function ClearanceBookingForm({ initialTrip }: { initialTrip?: string }) {
  const [activeStep, setActiveStep] = useState(1);
  const [vessel, setVessel] = useState({ name: "", type: "", loa: "", crew: "" });
  const [arrival, setArrival] = useState({ month: "", window: "", lastPort: "" });
  const [trip, setTrip] = useState(initialTrip ?? "none");
  const [tripSelected, setTripSelected] = useState(initialTrip !== undefined);
  const [payment, setPayment] = useState("deposit");

  const tripLabel = TRIP_OPTIONS.find(t => t.value === trip)?.label ?? "—";
  const tripHref =
    trip === "day" ? "/trips" :
    trip === "custom" ? "/trips/custom" :
    `/trips/${trip}`;

  // step completion
  const stepDone: Record<number, boolean> = {
    1: vessel.name.trim() !== "",
    2: arrival.month !== "",
    3: tripSelected,
    4: false,
  };

  const scrollTo = (n: number) => {
    setActiveStep(n);
    document.getElementById(`step-${n}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ── Page header ───────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)] border-b border-white/[0.07]">
        <div className="container-site py-16 lg:py-20">
          <Reveal>
            <h1
              className="text-[clamp(2rem,5.5vw,4rem)] font-light text-white mb-8 leading-[1.1]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Secure Magnate as
              <br />
              <span className="italic text-white/45">your agent</span>
            </h1>

            {/* Step indicator */}
            <div className="flex flex-wrap items-center gap-2">
              {STEPS.map(({ n, label }, i) => (
                <div key={n} className="flex items-center gap-2">
                  <button
                    onClick={() => scrollTo(n)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-medium border transition-all duration-300",
                      activeStep === n
                        ? "bg-[var(--color-amber)] text-white border-[var(--color-amber)] shadow-[0_6px_20px_-6px_rgba(196,146,74,0.45)]"
                        : stepDone[n]
                        ? "bg-white/[0.07] text-white/60 border-[var(--color-amber)]/40"
                        : "bg-white/[0.05] text-white/40 border-white/[0.1] hover:border-white/[0.2] hover:text-white/65"
                    )}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {stepDone[n] && activeStep !== n ? (
                      <Check size={11} className="text-[var(--color-amber)] shrink-0" />
                    ) : (
                      <span className={cn("text-[10px] font-bold", activeStep === n ? "text-white/60" : "text-white/20")}>
                        {n}
                      </span>
                    )}
                    {label}
                  </button>
                  {i < STEPS.length - 1 && (
                    <span className="text-white/10 text-xs hidden sm:inline">—</span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Form + sidebar ────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy-dark)]">
        <div className="container-site py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-start">

            {/* ── Left: form steps ──────────────────────────────── */}
            <div className="flex flex-col gap-12">

              {/* Step 1 — Your vessel */}
              <Reveal id="step-1" className="scroll-mt-28">
                <StepHeader n={1} label="Your vessel" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Vessel name">
                    <input
                      value={vessel.name}
                      onChange={e => setVessel({ ...vessel, name: e.target.value })}
                      placeholder="e.g. S/V Nomad"
                      className={inputClass}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </Field>
                  <Field label="Type">
                    <input
                      value={vessel.type}
                      onChange={e => setVessel({ ...vessel, type: e.target.value })}
                      placeholder="Sail / motor"
                      className={inputClass}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </Field>
                  <Field label="LOA & flag">
                    <input
                      value={vessel.loa}
                      onChange={e => setVessel({ ...vessel, loa: e.target.value })}
                      placeholder="e.g. 45ft · NZL"
                      className={inputClass}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </Field>
                  <Field label="Crew on board">
                    <input
                      value={vessel.crew}
                      onChange={e => setVessel({ ...vessel, crew: e.target.value })}
                      placeholder="e.g. 2 crew + 3 guests"
                      className={inputClass}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </Field>
                </div>
              </Reveal>

              {/* Step 2 — Arrival */}
              <Reveal id="step-2" className="scroll-mt-28">
                <StepHeader n={2} label="When will you arrive?" />

                {/* Notice */}
                <div className="flex items-start gap-3 rounded-xl bg-[var(--color-amber)]/[0.08] border border-[var(--color-amber)]/20 p-4 mb-5">
                  <Flag size={12} className="text-[var(--color-amber)]/70 shrink-0 mt-[3px]" />
                  <p className="text-[12.5px] text-[var(--color-amber)]/80 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <strong className="font-semibold">Passages slip with weather</strong> — we ask for an approximate window, not a fixed date. Confirm exact arrival on VHF 16 when you&apos;re close.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Arrival month">
                    <select
                      value={arrival.month}
                      onChange={e => setArrival({ ...arrival, month: e.target.value })}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-body)", colorScheme: "dark" }}
                    >
                      <option value="">Select month…</option>
                      {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </Field>
                  <Field label="Window">
                    <select
                      value={arrival.window}
                      onChange={e => setArrival({ ...arrival, window: e.target.value })}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-body)", colorScheme: "dark" }}
                    >
                      <option value="">e.g. 2nd–3rd week…</option>
                      {WINDOWS.map(w => <option key={w} value={w}>{w}</option>)}
                    </select>
                  </Field>
                  <Field label="Last port" span2 hint="Zarpe destination should be marked as Sri Lanka">
                    <input
                      value={arrival.lastPort}
                      onChange={e => setArrival({ ...arrival, lastPort: e.target.value })}
                      placeholder="e.g. Cochin, India"
                      className={inputClass}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </Field>
                </div>
              </Reveal>

              {/* Step 3 — Trip */}
              <Reveal id="step-3" className="scroll-mt-28">
                <StepHeader n={3} label="Add an excursion?" note="Optional — skip if clearing through only" />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {TRIP_OPTIONS.map(({ value, label, sublabel }) => (
                    <label
                      key={value}
                      className={cn(
                        "flex flex-col gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200",
                        trip === value
                          ? "border-[var(--color-amber)]/60 bg-[var(--color-amber)]/[0.08] shadow-[0_8px_24px_-12px_rgba(196,146,74,0.25)]"
                          : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.16] hover:bg-white/[0.06]"
                      )}
                    >
                      <input
                        type="radio"
                        name="trip"
                        value={value}
                        checked={trip === value}
                        onChange={() => { setTrip(value); setTripSelected(true); }}
                        className="sr-only"
                      />
                      <RadioDot active={trip === value} />
                      <div>
                        <span
                          className="block text-[14px] font-medium text-white"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {label}
                        </span>
                        <span
                          className="block text-[11px] text-white/35 mt-0.5"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {sublabel}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {trip !== "none" && (
                  <motion.div
                    className="mt-3"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={tripHref}
                      className="inline-flex items-center gap-1.5 text-[12px] text-[var(--color-amber)]/70 hover:text-[var(--color-amber)] transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      See what&apos;s included in the {tripLabel} trip
                      <ArrowRight size={11} />
                    </Link>
                  </motion.div>
                )}
              </Reveal>

              {/* Step 4 — Payment */}
              <Reveal id="step-4" className="scroll-mt-28">
                <StepHeader n={4} label="Payment" />

                <div className="flex flex-col sm:flex-row gap-3 mb-5">
                  {[
                    { value: "deposit", label: "Deposit now",  sub: "Reserve your agent slot" },
                    { value: "full",    label: "Pay in full",  sub: "Complete payment upfront" },
                  ].map(({ value, label, sub }) => (
                    <label
                      key={value}
                      className={cn(
                        "flex-1 flex items-center gap-3 px-4 py-4 rounded-xl border cursor-pointer transition-all duration-200",
                        payment === value
                          ? "border-[var(--color-amber)]/60 bg-[var(--color-amber)]/[0.08]"
                          : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.16]"
                      )}
                    >
                      <input
                        type="radio"
                        value={value}
                        checked={payment === value}
                        onChange={() => setPayment(value)}
                        className="sr-only"
                      />
                      <RadioDot active={payment === value} />
                      <div>
                        <span
                          className="block text-[13.5px] font-medium text-white"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {label}
                        </span>
                        <span
                          className="block text-[11px] text-white/30 mt-0.5"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {sub}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {/* PayPal placeholder */}
                <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-white/[0.08] bg-white/[0.03]">
                  <span
                    className="text-[13px] text-white/50"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span className="font-semibold text-white/70">[ PayPal ]</span>
                    {" "}— pay securely in USD / EUR
                  </span>
                </div>

              </Reveal>

            </div>

            {/* ── Right: Order summary ──────────────────────────── */}
            <aside className="lg:sticky lg:top-[88px]">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-sm">
                <h3
                  className="text-[13px] font-medium uppercase tracking-[0.2em] text-white/40 pb-4 mb-4 border-b border-white/[0.07]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Order summary
                </h3>

                <div className="flex flex-col gap-3 pb-4 mb-4 border-b border-white/[0.07]">
                  <SummaryRow label="Clearance package" value="US $—" />
                  <SummaryRow
                    label="Excursion"
                    value={trip !== "none" ? tripLabel : "—"}
                    muted={trip === "none"}
                  />
                  <SummaryRow label="Port dues (at cost)" value="—" muted />
                </div>

                <div className="flex items-center justify-between py-1 mb-5">
                  <span
                    className="text-[13.5px] font-semibold text-white"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Total (USD)
                  </span>
                  <span
                    className="text-[13.5px] font-semibold text-white"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    US $—
                  </span>
                </div>

                <button
                  className="group w-full py-4 rounded-xl bg-[var(--color-amber)] text-white text-[13.5px] font-medium tracking-wide hover:bg-[var(--color-amber-light)] hover:shadow-[0_12px_36px_-8px_rgba(196,146,74,0.45)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Confirm &amp; pay
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <p
                  className="mt-4 text-[11px] text-white/25 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Confirmation and our document checklist arrive by email immediately.
                </p>
              </div>


              <p className="mt-6 text-center">
                <Link
                  href="/contact"
                  className="text-[11.5px] text-white/25 hover:text-white/50 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
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
