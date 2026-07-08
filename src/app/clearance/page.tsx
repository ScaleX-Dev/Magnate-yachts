import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Flag, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Yacht Clearance in Galle — Magnate Yachts Sri Lanka",
  description:
    "Fast, transparent yacht clearance met at the dock. Fixed fee, no negotiation. The mandatory part of arriving in Sri Lanka, made the easy part.",
};

const INCLUDED = [
  "Immigration formalities & visa collection on arrival",
  "Customs clearance",
  "Port Authority & berthing coordination",
  "Harbour security gate passes",
  "Clear-out / departure formalities",
];

const DOCUMENTS = [
  "Vessel registration",
  "Crew list",
  "Passport copies (all crew)",
  "NIL list / stores list",
  "Medical clearance / health docs",
];

const STEPS = [
  {
    n: "01",
    title: "Pre-arrival",
    body: "Appoint by email or booking. Send documents ahead so we can start the paperwork before you arrive.",
  },
  {
    n: "02",
    title: "Call on VHF 16",
    body: "Hail Port Control at approximately 1.5NM off for entry permission. We'll be monitoring.",
  },
  {
    n: "03",
    title: "We meet your boat",
    body: "We're on the dock to walk you through all formalities. You won't be doing it alone.",
  },
  {
    n: "04",
    title: "Cleared",
    body: "Typically within a few hours. Gate passes issued. You're free to go ashore.",
  },
];

export default function ClearancePage() {
  return (
    <>
      {/* ── Hero ── deep ocean */}
      <section style={{ background: "linear-gradient(160deg, #061824 0%, #0A2236 60%, #0D2A44 100%)" }}>
        <div className="container-site py-16 lg:py-24">
          <Reveal>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.32em] mb-6"
              style={{ fontFamily: "var(--font-body)", color: "#5BB8E8" }}
            >
              Clearance
            </p>
            <h1
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-light text-white leading-[1.05] mb-6 max-w-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Seamless Yacht Clearance
              <br />
              <span style={{ color: "rgba(91,184,232,0.5)", fontStyle: "italic" }}>in Sri Lanka</span>
            </h1>
            <p
              className="text-[15px] leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.45)" }}
            >
              Fast, transparent, and handled at the dock. The mandatory process of arriving in Sri Lanka, simplified.
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-[13.5px] font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "#2A7DA8", fontFamily: "var(--font-body)", boxShadow: "0 8px 32px -8px rgba(42,125,168,0.6)" }}
              >
                Book us as your agent <ArrowRight size={14} />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-medium transition-all duration-300"
                style={{ border: "1px solid rgba(91,184,232,0.2)", color: "rgba(91,184,232,0.7)", fontFamily: "var(--font-body)" }}
              >
                How it works
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Wave divider */}
        <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, rgba(42,125,168,0.5), transparent)" }} />
      </section>

      {/* ── What's included ── dark ocean */}
      <section style={{ background: "#071E2E" }}>
        <div className="container-site py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.28em] mb-4"
                style={{ color: "#5BB8E8", fontFamily: "var(--font-body)" }}
              >
                What's included
              </p>
              <h2
                className="text-[clamp(1.8rem,4vw,3rem)] font-light text-white leading-[1.15] mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Everything handled,
                <br />
                <span style={{ color: "rgba(255,255,255,0.35)", fontStyle: "italic" }}>end to end.</span>
              </h2>
              <ul className="flex flex-col gap-4">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span
                      className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: "rgba(42,125,168,0.2)", border: "1px solid rgba(42,125,168,0.4)" }}
                    >
                      <Check size={11} style={{ color: "#5BB8E8" }} />
                    </span>
                    <span
                      className="text-[14px] leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Package card */}
            <Reveal delay={0.1}>
              <div
                className="rounded-2xl p-8 lg:p-10"
                style={{ background: "linear-gradient(135deg, #2A7DA8 0%, #1E6090 100%)", boxShadow: "0 32px 80px -20px rgba(42,125,168,0.4)" }}
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.28em] mb-6"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
                >
                  Clearance package
                </p>
                <div className="flex items-baseline gap-3 mb-3">
                  <span
                    className="font-light text-white"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,7vw,5rem)", lineHeight: 1 }}
                  >
                    US $300
                  </span>
                </div>
                <p
                  className="text-[13px] mb-8 leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}
                >
                  Includes up to 30 days of berthing, full customs clearance (arrival and departure), and agency fees. Payable upon arrival.
                </p>
                <div
                  className="pt-6"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <p
                    className="text-[11px] uppercase tracking-[0.2em] mb-1"
                    style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}
                  >
                    Fixed fee · no negotiation
                  </p>
                  <p
                    className="text-[11px] uppercase tracking-[0.2em]"
                    style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}
                  >
                    Met at the dock on arrival
                  </p>
                </div>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-[13px] font-medium transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontFamily: "var(--font-body)", border: "1px solid rgba(255,255,255,0.25)", backdropFilter: "blur(8px)" }}
                >
                  Book now <ArrowRight size={13} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Documents ── light blue-tinted */}
      <section style={{ background: "#EBF5FB" }}>
        <div className="container-site py-14 lg:py-18">
          <Reveal>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.28em] mb-3"
              style={{ color: "#2A7DA8", fontFamily: "var(--font-body)" }}
            >
              Documents
            </p>
            <h2
              className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-light leading-[1.2] mb-2"
              style={{ fontFamily: "var(--font-display)", color: "#071E2E" }}
            >
              What we&apos;ll need from you
            </h2>
            <p
              className="text-[13.5px] mb-10"
              style={{ color: "rgba(7,30,46,0.5)", fontFamily: "var(--font-body)" }}
            >
              Have these ready before arrival to clear in fast:
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {DOCUMENTS.map((doc, i) => (
              <Reveal key={doc} delay={i * 0.07}>
                <div
                  className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#fff", border: "1px solid rgba(42,125,168,0.15)", boxShadow: "0 4px 20px -8px rgba(7,30,46,0.1)" }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: "rgba(42,125,168,0.1)" }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: "#2A7DA8" }} />
                  </div>
                  <p
                    className="text-[13px] font-medium leading-snug"
                    style={{ color: "#071E2E", fontFamily: "var(--font-body)" }}
                  >
                    {doc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25} className="mt-5">
            <div
              className="flex items-start gap-3 rounded-xl p-5"
              style={{ background: "rgba(42,125,168,0.07)", border: "1px solid rgba(42,125,168,0.2)" }}
            >
              <Flag size={13} className="shrink-0 mt-[2px]" style={{ color: "#2A7DA8" }} />
              <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(7,30,46,0.6)", fontFamily: "var(--font-body)" }}>
                <strong style={{ color: "#071E2E" }}>Visa required before arrival —</strong>{" "}
                all crew must apply online before reaching Sri Lanka.{" "}
                <a
                  href="https://www.eta.gov.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2A7DA8", textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  Apply at eta.gov.lk →
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── How it works ── deep ocean with steps */}
      <section id="how-it-works" style={{ background: "#061824" }}>
        <div className="container-site py-14 lg:py-20">
          <Reveal>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.28em] mb-4"
              style={{ color: "#5BB8E8", fontFamily: "var(--font-body)" }}
            >
              Process
            </p>
            <h2
              className="text-[clamp(1.8rem,4vw,3rem)] font-light text-white leading-[1.15] mb-14"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How arrival works
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(42,125,168,0.15)" }}>
            {STEPS.map(({ n, title, body }, i) => (
              <Reveal key={n} delay={i * 0.1}>
                <div
                  className="flex flex-col gap-5 p-8 group transition-all duration-300 hover:bg-[rgba(42,125,168,0.08)] h-full"
                  style={{ background: "#061824" }}
                >
                <span
                  className="text-[2.5rem] font-light leading-none"
                  style={{ fontFamily: "var(--font-display)", color: "rgba(42,125,168,0.3)" }}
                >
                  {n}
                </span>
                <div>
                  <h3
                    className="text-[15px] font-semibold mb-2 text-white"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}
                  >
                    {body}
                  </p>
                </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── clearance blue */}
      <section style={{ background: "#2A7DA8" }}>
        <div className="container-site py-10 lg:py-12">
          <Reveal className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p
                className="text-[1.2rem] font-light text-white mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Staying a while?
              </p>
              <p
                className="text-[13.5px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}
              >
                Add an optional guided road trip inland — entirely separate from clearance.
              </p>
            </div>
            <Link
              href="/trips"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 shrink-0 whitespace-nowrap"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", fontFamily: "var(--font-body)" }}
            >
              See trips <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
