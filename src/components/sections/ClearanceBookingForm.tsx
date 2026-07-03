"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Flag, ArrowRight, Check, CheckCircle2, MessageCircle, Mail, CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

/* ── Config — update these before going live ─────────────────────── */
const WHATSAPP_NUMBER = "94769850115";
const PAYPAL_ME       = "MagnateYachts";        // replace with PayPal.me username
const BOOKING_EMAIL   = "hello@magnateyachts.com";

/* ── Static data ─────────────────────────────────────────────────── */
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const WINDOWS = [
  "1st week","2nd week","3rd week","4th week",
  "1st–2nd week","2nd–3rd week","3rd–4th week",
];
const TRIP_OPTIONS = [
  { value:"none",   label:"None",           sublabel:"Clearance only",        price:null,          numPrice:0   },
  { value:"day",    label:"Day excursion",  sublabel:"from US $75",            price:"from US $75", numPrice:75  },
  { value:"3-day",  label:"Safari & Hills", sublabel:"2 nights · US $560",    price:"US $560",     numPrice:560 },
  { value:"5-day",  label:"Wilderness",     sublabel:"4 nights · US $940",    price:"US $940",     numPrice:940 },
  { value:"custom", label:"Custom trip",    sublabel:"Your itinerary",         price:"On request",  numPrice:0   },
];
const STEPS = [
  { n:1, label:"Your boat" },
  { n:2, label:"Arrival"   },
  { n:3, label:"Trip"      },
  { n:4, label:"Confirm"   },
];

/* ── Sub-components ──────────────────────────────────────────────── */
function Field({
  label, children, hint, error, span2 = false, required = false,
}: {
  label: string; children: React.ReactNode; hint?: string;
  error?: string; span2?: boolean; required?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", span2 && "sm:col-span-2")}>
      <label
        className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/35 flex gap-1"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
        {required && <span className="text-[var(--color-amber)]/70">*</span>}
      </label>
      {children}
      {error
        ? <p className="text-[11px] text-red-400/80" style={{ fontFamily: "var(--font-body)" }}>{error}</p>
        : hint
        ? <p className="text-[11px] text-white/25 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{hint}</p>
        : null}
    </div>
  );
}

const inputBase =
  "w-full px-4 py-3 text-[13.5px] rounded-xl bg-white/[0.05] border text-white placeholder:text-white/25 focus:outline-none focus:bg-white/[0.07] transition-all duration-200";
const inputCls = inputBase +
  " border-white/[0.1] focus:border-[var(--color-amber)]/60 focus:shadow-[0_0_0_3px_rgba(196,146,74,0.12)]";
const inputErr = inputBase +
  " border-red-400/40 focus:border-red-400/60 focus:shadow-[0_0_0_3px_rgba(248,113,113,0.12)]";

function RadioDot({ active }: { active: boolean }) {
  return (
    <span className={cn("w-[14px] h-[14px] rounded-full border-2 flex items-center justify-center shrink-0 transition-colors duration-200", active ? "border-[var(--color-amber)]" : "border-white/20")}>
      <AnimatePresence>
        {active && (
          <motion.span
            className="w-[6px] h-[6px] rounded-full bg-[var(--color-amber)]"
            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </span>
  );
}

function StepHeader({ n, label, note }: { n: number; label: string; note?: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-3 pb-5 mb-6 border-b border-white/[0.07]">
      <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--color-amber)]" style={{ fontFamily: "var(--font-body)" }}>
        {String(n).padStart(2, "0")}
      </span>
      <h2 className="text-[1.15rem] font-medium text-white" style={{ fontFamily: "var(--font-display)" }}>{label}</h2>
      {note && <span className="text-[11.5px] text-white/30" style={{ fontFamily: "var(--font-body)" }}>{note}</span>}
    </div>
  );
}

function SummaryRow({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-[12.5px] text-white/40" style={{ fontFamily: "var(--font-body)" }}>{label}</span>
      <span className={cn("text-[12.5px] font-medium text-right", muted ? "text-white/20" : "text-white/80")} style={{ fontFamily: "var(--font-body)" }}>
        {value}
      </span>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export function ClearanceBookingForm({ initialTrip }: { initialTrip?: string }) {
  const [activeStep, setActiveStep] = useState(1);
  const [contact,  setContact]  = useState({ name: "", email: "", phone: "" });
  const [vessel,   setVessel]   = useState({ name: "", type: "", loa: "", crew: "" });
  const [arrival,  setArrival]  = useState({ month: "", window: "", lastPort: "" });
  const [trip,     setTrip]     = useState(initialTrip ?? "none");
  const [submitted, setSubmitted] = useState(false);
  const [errs, setErrs] = useState<Record<string, string>>({});

  const tripOption  = TRIP_OPTIONS.find(t => t.value === trip)!;
  const tripLabel   = tripOption.label;
  const tripPrice   = tripOption.price;
  const numPrice    = tripOption.numPrice;
  const isTrip      = trip !== "none";
  const isCustom    = trip === "custom";
  const needsPayment = isTrip && !isCustom;

  const tripHref =
    trip === "day"    ? "/trips" :
    trip === "custom" ? "/trips/custom" :
    `/trips/${trip}`;

  const stepDone: Record<number, boolean> = {
    1: vessel.name.trim() !== "" && contact.name.trim() !== "" && contact.email.trim() !== "",
    2: arrival.month !== "",
    3: true,
    4: false,
  };

  /* ── Validation ─────────────────────────────────────────────────── */
  const validate = (step: number) => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!vessel.name.trim())  e["vessel.name"]  = "Please enter your vessel name";
      if (!contact.name.trim()) e["contact.name"] = "Please enter your name";
      if (!contact.email.trim()) {
        e["contact.email"] = "Please enter your email";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
        e["contact.email"] = "Enter a valid email address";
      }
    }
    if (step === 2) {
      if (!arrival.month) e["arrival.month"] = "Please select your arrival month";
    }
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  const goNext = (from: number) => {
    if (!validate(from)) return;
    setErrs({});
    const next = from + 1;
    setActiveStep(next);
    setTimeout(() => document.getElementById(`step-${next}`)?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  };

  const scrollTo = (n: number) => {
    setActiveStep(n);
    document.getElementById(`step-${n}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ── WhatsApp message ────────────────────────────────────────────── */
  const buildWhatsAppMsg = () => {
    const lines: string[] = [
      `*Booking Enquiry — Magnate Yachts*`,
      ``,
      `*Vessel:* ${vessel.name}${vessel.type ? ` (${vessel.type})` : ""}`,
    ];
    if (vessel.loa)  lines.push(`*LOA / Flag:* ${vessel.loa}`);
    if (vessel.crew) lines.push(`*Crew:* ${vessel.crew}`);
    lines.push(``);
    lines.push(`*Arrival:* ${arrival.month}${arrival.window ? ` · ${arrival.window}` : ""}`);
    if (arrival.lastPort) lines.push(`*Last port:* ${arrival.lastPort}`);
    if (isTrip) lines.push(`*Trip:* ${tripLabel}${tripPrice ? ` — ${tripPrice}` : ""}`);
    lines.push(``);
    lines.push(`*Captain:* ${contact.name}`);
    lines.push(`*Email:* ${contact.email}`);
    if (contact.phone) lines.push(`*Phone/Sat:* ${contact.phone}`);
    return encodeURIComponent(lines.join("\n"));
  };

  const openWhatsApp = () =>
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMsg()}`, "_blank", "noopener,noreferrer");

  const handleWhatsAppSubmit = () => {
    openWhatsApp();
    setSubmitted(true);
  };

  const handlePayPal = () => {
    if (numPrice > 0) {
      window.open(`https://paypal.me/${PAYPAL_ME}/${numPrice}`, "_blank", "noopener,noreferrer");
    }
    openWhatsApp();
    setSubmitted(true);
  };

  /* ── Success screen ──────────────────────────────────────────────── */
  if (submitted) {
    return (
      <>
        <section className="bg-[var(--color-navy)] border-b border-white/[0.07]">
          <div className="container-site py-16 lg:py-20">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-amber)] mb-4" style={{ fontFamily: "var(--font-body)" }}>
              {needsPayment ? "Booking initiated" : "Enquiry sent"}
            </p>
            <h1 className="text-[clamp(2rem,5.5vw,3.5rem)] font-light text-white leading-[1.1]" style={{ fontFamily: "var(--font-display)" }}>
              {needsPayment ? "You're almost there." : "We'll be in touch."}
            </h1>
          </div>
        </section>

        <section className="bg-[var(--color-navy-dark)] min-h-[50vh] flex items-center">
          <div className="container-site py-16">
            <motion.div
              className="max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-amber)]/[0.12] border border-[var(--color-amber)]/20 mb-8">
                <CheckCircle2 size={24} className="text-[var(--color-amber)]" />
              </div>

              {needsPayment ? (
                <>
                  <p className="text-[15px] text-white/70 leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                    Your PayPal payment window has opened. Once payment is confirmed, your <strong className="text-white/90">{tripLabel}</strong> reservation is secured.
                  </p>
                  <p className="text-[13.5px] text-white/40 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
                    We&apos;ve also sent your booking details via WhatsApp and will reply within 24 hours with your document checklist and arrival instructions. Clearance is settled on arrival in Galle — no additional online payment needed.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[15px] text-white/70 leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                    Your enquiry has been sent via WhatsApp. We typically respond within a few hours.
                  </p>
                  <p className="text-[13.5px] text-white/40 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
                    Clearance fees are settled on arrival in Galle — no upfront payment required. We&apos;ll confirm your slot and send a document checklist to <strong className="text-white/60">{contact.email}</strong> once confirmed.
                  </p>
                </>
              )}

              {/* Summary card */}
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 mb-8 flex flex-col gap-2.5">
                {vessel.name   && <SummaryRow label="Vessel"    value={vessel.name} />}
                {arrival.month && <SummaryRow label="Arrival"   value={`${arrival.month}${arrival.window ? ` · ${arrival.window}` : ""}`} />}
                {isTrip        && <SummaryRow label="Trip"      value={`${tripLabel}${tripPrice ? ` — ${tripPrice}` : ""}`} />}
                <SummaryRow label="Clearance" value="Paid on arrival in Galle" muted />
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-amber)] text-white text-[13px] font-medium hover:bg-[var(--color-amber-light)] transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Back to home
                </Link>
                <Link
                  href="/port-guide"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.1] text-white/50 text-[13px] font-medium hover:border-white/[0.2] hover:text-white/70 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Read the port guide →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  /* ── Main form ───────────────────────────────────────────────────── */
  return (
    <>
      {/* Page header */}
      <section className="bg-[var(--color-navy)] border-b border-white/[0.07]">
        <div className="container-site py-16 lg:py-20">
          <Reveal>
            <h1
              className="text-[clamp(2rem,5.5vw,4rem)] font-light text-white mb-8 leading-[1.1]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Secure Magnate as<br />
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
                    {stepDone[n] && activeStep !== n
                      ? <Check size={11} className="text-[var(--color-amber)] shrink-0" />
                      : <span className={cn("text-[10px] font-bold", activeStep === n ? "text-white/60" : "text-white/20")}>{n}</span>
                    }
                    {label}
                  </button>
                  {i < STEPS.length - 1 && <span className="text-white/10 text-xs hidden sm:inline">—</span>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-[var(--color-navy-dark)]">
        <div className="container-site py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-start">

            {/* Left: form steps */}
            <div className="flex flex-col gap-12">

              {/* ── Step 1: Vessel + Contact ──────────────────────── */}
              <Reveal id="step-1" className="scroll-mt-28">
                <StepHeader n={1} label="Your vessel & contact" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Vessel name" required error={errs["vessel.name"]}>
                    <input
                      value={vessel.name}
                      onChange={e => setVessel({ ...vessel, name: e.target.value })}
                      placeholder="e.g. S/V Nomad"
                      className={errs["vessel.name"] ? inputErr : inputCls}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </Field>
                  <Field label="Type">
                    <input
                      value={vessel.type}
                      onChange={e => setVessel({ ...vessel, type: e.target.value })}
                      placeholder="Sail / motor"
                      className={inputCls}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </Field>
                  <Field label="LOA & flag">
                    <input
                      value={vessel.loa}
                      onChange={e => setVessel({ ...vessel, loa: e.target.value })}
                      placeholder="e.g. 45ft · NZL"
                      className={inputCls}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </Field>
                  <Field label="Crew on board">
                    <input
                      value={vessel.crew}
                      onChange={e => setVessel({ ...vessel, crew: e.target.value })}
                      placeholder="e.g. 2 crew + 3 guests"
                      className={inputCls}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </Field>
                </div>

                {/* Contact sub-section */}
                <div className="mt-6 pt-6 border-t border-white/[0.07] grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <p className="sm:col-span-2 text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/25 -mb-1" style={{ fontFamily: "var(--font-body)" }}>
                    Your contact details
                  </p>
                  <Field label="Captain / contact name" required error={errs["contact.name"]}>
                    <input
                      value={contact.name}
                      onChange={e => setContact({ ...contact, name: e.target.value })}
                      placeholder="Full name"
                      className={errs["contact.name"] ? inputErr : inputCls}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </Field>
                  <Field label="Email" required error={errs["contact.email"]}>
                    <input
                      type="email"
                      value={contact.email}
                      onChange={e => setContact({ ...contact, email: e.target.value })}
                      placeholder="your@email.com"
                      className={errs["contact.email"] ? inputErr : inputCls}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </Field>
                  <Field label="Phone / satellite phone" span2>
                    <input
                      value={contact.phone}
                      onChange={e => setContact({ ...contact, phone: e.target.value })}
                      placeholder="+1 234 567 890 or Iridium number"
                      className={inputCls}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </Field>
                </div>

                <div className="flex justify-end mt-6 pt-5 border-t border-white/[0.07]">
                  <button
                    type="button"
                    onClick={() => goNext(1)}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white/70 text-[13px] font-medium hover:bg-[var(--color-amber)]/[0.12] hover:border-[var(--color-amber)]/40 hover:text-white transition-all duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Continue to arrival <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </Reveal>

              {/* ── Step 2: Arrival ───────────────────────────────── */}
              <Reveal id="step-2" className="scroll-mt-28">
                <StepHeader n={2} label="When will you arrive?" />

                <div className="flex items-start gap-3 rounded-xl bg-[var(--color-amber)]/[0.08] border border-[var(--color-amber)]/20 p-4 mb-5">
                  <Flag size={12} className="text-[var(--color-amber)]/70 shrink-0 mt-[3px]" />
                  <p className="text-[12.5px] text-[var(--color-amber)]/80 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <strong className="font-semibold">Passages slip with weather</strong> — we ask for an approximate window, not a fixed date. Confirm exact arrival on VHF 16 when you&apos;re close.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Arrival month" required error={errs["arrival.month"]}>
                    <select
                      value={arrival.month}
                      onChange={e => setArrival({ ...arrival, month: e.target.value })}
                      className={errs["arrival.month"] ? inputErr : inputCls}
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
                      className={inputCls}
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
                      className={inputCls}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </Field>
                </div>

                <div className="flex justify-end mt-6 pt-5 border-t border-white/[0.07]">
                  <button
                    type="button"
                    onClick={() => goNext(2)}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white/70 text-[13px] font-medium hover:bg-[var(--color-amber)]/[0.12] hover:border-[var(--color-amber)]/40 hover:text-white transition-all duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Continue to trip selection <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </Reveal>

              {/* ── Step 3: Trip ──────────────────────────────────── */}
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
                          : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.16] hover:bg-white/[0.06]",
                        value === "custom" && "col-span-2 sm:col-span-1"
                      )}
                    >
                      <input
                        type="radio"
                        name="trip"
                        value={value}
                        checked={trip === value}
                        onChange={() => setTrip(value)}
                        className="sr-only"
                      />
                      <RadioDot active={trip === value} />
                      <div>
                        <span className="block text-[14px] font-medium text-white" style={{ fontFamily: "var(--font-display)" }}>
                          {label}
                        </span>
                        <span className="block text-[11px] text-white/35 mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                          {sublabel}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {isTrip && (
                  <motion.div className="mt-3" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <Link
                      href={tripHref}
                      className="inline-flex items-center gap-1.5 text-[12px] text-[var(--color-amber)]/70 hover:text-[var(--color-amber)] transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      See what&apos;s included in the {tripLabel} trip <ArrowRight size={11} />
                    </Link>
                  </motion.div>
                )}

                <div className="flex justify-end mt-6 pt-5 border-t border-white/[0.07]">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveStep(4);
                      setTimeout(() => document.getElementById("step-4")?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
                    }}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white/70 text-[13px] font-medium hover:bg-[var(--color-amber)]/[0.12] hover:border-[var(--color-amber)]/40 hover:text-white transition-all duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Continue to confirm <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </Reveal>

              {/* ── Step 4: Confirm ───────────────────────────────── */}
              <Reveal id="step-4" className="scroll-mt-28">

                {/* Clearance-only enquiry */}
                {!isTrip && (
                  <>
                    <StepHeader n={4} label="Send your enquiry" />
                    <div className="flex items-start gap-3 rounded-xl bg-white/[0.04] border border-white/[0.07] p-4 mb-6">
                      <Check size={13} className="text-[var(--color-amber)] shrink-0 mt-[2px]" />
                      <p className="text-[13px] text-white/55 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                        <strong className="text-white/80 font-medium">Clearance is paid on arrival in Galle</strong> — no upfront payment needed. Send us your details and we&apos;ll confirm your agent slot and send a document checklist within 24 hours.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <button
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        className="group w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(37,211,102,0.4)] active:scale-[0.98]"
                        style={{ fontFamily: "var(--font-body)", background: "#25D366" }}
                      >
                        <MessageCircle size={18} />
                        Send enquiry on WhatsApp
                        <ArrowRight size={14} className="opacity-60 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                      <a
                        href={`mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(`Clearance enquiry — ${vessel.name || "vessel"}`)}&body=${encodeURIComponent(`Hi Magnate Yachts,\n\nVessel: ${vessel.name}${vessel.type ? ` (${vessel.type})` : ""}\nLOA/Flag: ${vessel.loa}\nCrew: ${vessel.crew}\n\nArrival: ${arrival.month}${arrival.window ? ` · ${arrival.window}` : ""}\nLast port: ${arrival.lastPort}\n\nCaptain: ${contact.name}\nEmail: ${contact.email}\nPhone: ${contact.phone}\n\nKind regards`)}`}
                        onClick={() => setSubmitted(true)}
                        className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-white/[0.1] text-white/45 text-[13px] font-medium hover:border-white/[0.2] hover:text-white/65 transition-all duration-200"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <Mail size={14} />
                        or email instead
                      </a>
                    </div>
                  </>
                )}

                {/* Custom trip enquiry */}
                {isCustom && (
                  <>
                    <StepHeader n={4} label="Get a custom quote" />
                    <p className="text-[13.5px] text-white/50 leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
                      Custom itineraries are quoted individually. Send us your details and your ideas — we&apos;ll put together something tailored to your schedule and interests.
                    </p>
                    <div className="flex flex-col gap-3">
                      <button
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        className="group w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(37,211,102,0.4)] active:scale-[0.98]"
                        style={{ fontFamily: "var(--font-body)", background: "#25D366" }}
                      >
                        <MessageCircle size={18} />
                        Discuss on WhatsApp
                        <ArrowRight size={14} className="opacity-60 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                      <a
                        href={`mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(`Custom trip enquiry — ${vessel.name || "vessel"}`)}&body=${encodeURIComponent(`Hi Magnate Yachts,\n\nI'd like to enquire about a custom trip.\n\nVessel: ${vessel.name}${vessel.type ? ` (${vessel.type})` : ""}\nLOA/Flag: ${vessel.loa}\nCrew: ${vessel.crew}\n\nArrival: ${arrival.month}${arrival.window ? ` · ${arrival.window}` : ""}\nLast port: ${arrival.lastPort}\n\nCaptain: ${contact.name}\nEmail: ${contact.email}\nPhone: ${contact.phone}\n\nTrip interests:\n`)}`}
                        onClick={() => setSubmitted(true)}
                        className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-white/[0.1] text-white/45 text-[13px] font-medium hover:border-white/[0.2] hover:text-white/65 transition-all duration-200"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <Mail size={14} />
                        or email instead
                      </a>
                    </div>
                  </>
                )}

                {/* Trip payment via PayPal */}
                {needsPayment && (
                  <>
                    <StepHeader n={4} label="Reserve your trip" />

                    <div className="flex items-start gap-3 rounded-xl bg-white/[0.04] border border-white/[0.07] p-4 mb-5">
                      <Check size={13} className="text-[var(--color-amber)] shrink-0 mt-[2px]" />
                      <p className="text-[13px] text-white/55 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                        <strong className="text-white/80 font-medium">Clearance is paid on arrival</strong> — the fee below covers your trip reservation only. We&apos;ll confirm clearance details after payment.
                      </p>
                    </div>

                    {/* Price card */}
                    <div className="rounded-2xl border border-[var(--color-amber)]/25 bg-[var(--color-amber)]/[0.06] p-5 mb-5">
                      <div className="flex items-center justify-between gap-4 mb-1">
                        <span className="text-[13px] text-white/60" style={{ fontFamily: "var(--font-body)" }}>{tripLabel}</span>
                        <span className="text-[22px] font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>{tripPrice}</span>
                      </div>
                      <p className="text-[11.5px] text-white/30" style={{ fontFamily: "var(--font-body)" }}>
                        {tripOption.sublabel} · clearance fee additional, paid on arrival in Galle
                      </p>
                    </div>

                    <div className="flex flex-col gap-3">
                      {/* PayPal */}
                      <button
                        type="button"
                        onClick={handlePayPal}
                        className="group w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(0,112,186,0.45)] active:scale-[0.98]"
                        style={{ fontFamily: "var(--font-body)", background: "#0070BA" }}
                      >
                        <CreditCard size={17} />
                        Pay {tripPrice} via PayPal
                        <ArrowRight size={14} className="opacity-60 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>

                      {/* WhatsApp for questions */}
                      <button
                        type="button"
                        onClick={openWhatsApp}
                        className="group w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl border border-white/[0.1] text-white/50 text-[13px] font-medium hover:border-[#25D366]/40 hover:text-[#25D366]/80 transition-all duration-200"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <MessageCircle size={15} />
                        Questions first? Chat on WhatsApp
                      </button>
                    </div>

                    <p className="mt-4 text-[11px] text-white/25 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      You&apos;ll be redirected to PayPal. After payment we&apos;ll send your full booking confirmation and arrival document checklist to {contact.email || "your email"}.
                    </p>
                  </>
                )}

              </Reveal>
            </div>

            {/* ── Right: Order summary ──────────────────────────── */}
            <aside className="lg:sticky lg:top-[88px]">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-sm">
                <h3
                  className="text-[13px] font-medium uppercase tracking-[0.2em] text-white/40 pb-4 mb-4 border-b border-white/[0.07]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Summary
                </h3>

                <div className="flex flex-col gap-3 pb-4 mb-4 border-b border-white/[0.07]">
                  <SummaryRow label="Clearance service" value="On arrival in Galle" muted />
                  <SummaryRow
                    label="Excursion"
                    value={isTrip ? `${tripLabel}${tripPrice ? ` — ${tripPrice}` : ""}` : "—"}
                    muted={!isTrip}
                  />
                  <SummaryRow label="Port dues" value="At cost" muted />
                </div>

                {needsPayment && (
                  <div className="flex items-center justify-between py-1 mb-5">
                    <span className="text-[13.5px] font-semibold text-white" style={{ fontFamily: "var(--font-body)" }}>Due now</span>
                    <span className="text-[13.5px] font-semibold text-white" style={{ fontFamily: "var(--font-body)" }}>{tripPrice}</span>
                  </div>
                )}

                {/* WhatsApp quick contact */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 w-full px-4 py-3.5 rounded-xl border border-[#25D366]/20 bg-[#25D366]/[0.05] hover:bg-[#25D366]/[0.1] hover:border-[#25D366]/35 transition-all duration-200 mb-4"
                >
                  <MessageCircle size={15} className="text-[#25D366]/70 shrink-0" />
                  <span className="text-[12.5px] text-white/50 group-hover:text-white/70 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                    Chat on WhatsApp
                  </span>
                  <ArrowRight size={11} className="text-white/20 ml-auto group-hover:translate-x-0.5 transition-transform" />
                </a>

                <p className="text-[11px] text-white/25 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Confirmation and our document checklist arrive by email immediately after booking.
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
