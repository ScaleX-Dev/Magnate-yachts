"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const WHATSAPP = "https://wa.me/94769850115";

export default function CustomTripPage() {
  const [form, setForm] = useState({
    name: "",
    vessel: "",
    days: "",
    interests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    "w-full px-4 py-3 text-sm rounded-xl bg-[var(--color-ivory)] border border-[var(--color-border)] text-[var(--color-navy)] placeholder:text-[var(--color-navy)]/30 focus:outline-none focus:border-[var(--color-amber)]/60 focus:bg-white transition-all duration-200";

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[#080e1a] min-h-[55svh] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop&q=80"
            alt="Sri Lanka landscape"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080e1a]/60 to-[#080e1a]" />
        </div>

        <div className="relative container-site flex items-center justify-between pt-5 pb-3">
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[var(--color-amber)]/60">
            <Link
              href="/trips"
              className="hover:text-[var(--color-amber)]/90 transition-colors"
            >
              Trips
            </Link>
            <span className="text-white/15">/</span>
            <span className="text-[var(--color-amber)]/40">Custom trip</span>
          </div>
          <Link
            href="/trips"
            className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/25 hover:text-white/60 transition-colors"
          >
            <ArrowLeft size={10} /> All trips
          </Link>
        </div>

        <div className="relative container-site pb-14 pt-10">
          <Reveal>
            <span
              className="inline-block text-[9px] uppercase tracking-[0.28em] border border-white/15 text-white/40 px-3 py-1.5 mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Bespoke
            </span>
            <h1
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold text-white leading-[1.04] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your trip,
              <br />
              <span className="italic text-white/50">your way.</span>
            </h1>
            <p
              className="text-[15px] text-white/40 max-w-md leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Tell us what you have in mind — the pace, the places, how many
              days — and we&apos;ll build the route around you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Form ──────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">

            {/* Form */}
            <Reveal>
              {submitted ? (
                <div className="flex flex-col gap-5 py-8">
                  <CheckCircle2 size={28} className="text-[var(--color-amber)]" />
                  <h2
                    className="text-2xl font-semibold text-[var(--color-navy)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Got it — we&apos;ll be in touch.
                  </h2>
                  <p
                    className="text-sm text-[var(--color-navy)]/55 leading-relaxed max-w-md"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    We&apos;ll reach back within 24 hours with a proposed route
                    and pricing.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-navy)]/45"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Your name
                      </label>
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Captain or crew"
                        required
                        className={inputCls}
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-navy)]/45"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Vessel name
                      </label>
                      <input
                        value={form.vessel}
                        onChange={(e) => setForm({ ...form, vessel: e.target.value })}
                        placeholder="S/V …"
                        required
                        className={inputCls}
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-navy)]/45"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      How many days do you have?
                    </label>
                    <input
                      value={form.days}
                      onChange={(e) => setForm({ ...form, days: e.target.value })}
                      placeholder="e.g. 4 days, flexible, not sure yet"
                      className={inputCls}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-navy)]/45"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      What interests you most?
                    </label>
                    <input
                      value={form.interests}
                      onChange={(e) => setForm({ ...form, interests: e.target.value })}
                      placeholder="Wildlife, culture, hill country, beaches, all of it…"
                      className={inputCls}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-navy)]/45"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Tell us more
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Anything that helps us understand what kind of trip this should be — pace, places you've heard of, things to avoid."
                      rows={5}
                      className={inputCls + " resize-none"}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group self-start inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-navy)] text-white text-[13.5px] font-medium hover:bg-[var(--color-navy-dark)] hover:shadow-[0_12px_36px_-8px_rgba(6,12,24,0.35)] hover:-translate-y-0.5 transition-all duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Send your brief
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </form>
              )}
            </Reveal>

            {/* Sidebar */}
            <Reveal delay={0.1} className="flex flex-col gap-6">
              <div className="rounded-2xl bg-[var(--color-navy)] p-7 flex flex-col gap-5">
                <p
                  className="text-[14px] text-white/50 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  WhatsApp us directly — a voice note with what you have in mind
                  works just as well as a typed message.
                </p>
                <a
                  href={`${WHATSAPP}?text=${encodeURIComponent(
                    "I'd like to plan a custom trip in Sri Lanka"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-[13px] font-medium hover:bg-white/[0.07] transition-all duration-300 w-fit"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  WhatsApp us
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div className="flex flex-col gap-3 px-1">
                {[
                  "Trusted drivers and handpicked stays",
                  "Wildlife, culture, or slow travel — your call",
                  "Priced clearly before you commit",
                  "Same team that handles your clearance",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-[5px] h-[5px] rounded-full bg-[var(--color-amber)]/60 shrink-0" />
                    <span
                      className="text-[13px] text-[var(--color-navy)]/55 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
