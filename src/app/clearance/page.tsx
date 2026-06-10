import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Flag } from "lucide-react";

export const metadata: Metadata = {
  title: "Yacht Clearance in Galle — Magnate Yachts Sri Lanka",
  description:
    "Fast, transparent yacht clearance met at the dock. Fixed fee, no negotiation. The mandatory part of arriving in Sri Lanka, made the easy part.",
};

const INCLUDED = [
  "Immigration formalities & visa collection on arrival",
  "Customs clearance",
  "Port Authority & berthing coordination",
  "Defence Ministry liaison",
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
    n: "1",
    title: "Pre-arrival",
    body: "Appoint by email or booking. Send documents ahead so we can start the paperwork before you arrive.",
  },
  {
    n: "2",
    title: "Call on VHF 16",
    body: "Hail Port Control at approximately 1.5NM off for entry permission. We'll be monitoring.",
  },
  {
    n: "3",
    title: "We meet your boat",
    body: "We're on the dock to walk you through all formalities. You won't be doing it alone.",
  },
  {
    n: "4",
    title: "Cleared",
    body: "Typically within a few hours. Gate passes issued. You're free to go ashore.",
  },
];

export default function ClearancePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-20 lg:py-28">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-5">
            Galle · Sri Lanka
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold text-[var(--color-navy)] leading-[1.1] mb-5 max-w-lg"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Yacht clearance<br />in Galle
          </h1>
          <p className="text-[var(--color-navy)]/55 max-w-md text-sm leading-relaxed">
            Fast, transparent, and met at the dock. The mandatory part of arriving in Sri Lanka, made the easy part.
          </p>
        </div>
      </section>

      {/* ── What clearance includes ───────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-site py-16 lg:py-20">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[var(--color-navy)] mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What clearance includes
          </h2>

          <div className="flex flex-col gap-4 mb-12 max-w-lg">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <span className="w-[18px] h-[18px] border border-[var(--color-navy)]/20 rounded-[2px] shrink-0 flex items-center justify-center bg-[var(--color-ivory)]">
                  <span className="w-[5px] h-[5px] rounded-full bg-[var(--color-amber)]" />
                </span>
                <span className="text-sm text-[var(--color-navy)]/65 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {/* Package card */}
          <div className="border border-[var(--color-ivory-dark)] rounded-[2px] p-7 lg:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-7 bg-[var(--color-ivory)]">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-3">
                Clearance package
              </p>
              <div className="flex items-baseline gap-3 mb-3">
                <span
                  className="text-3xl sm:text-4xl font-semibold text-[var(--color-navy)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  US $&nbsp;—
                </span>
                <span className="text-sm text-[var(--color-navy)]/40 font-medium">
                  · fixed, all-in
                </span>
              </div>
              <p className="text-xs text-[var(--color-navy)]/50 leading-relaxed max-w-sm">
                One transparent fee. What you see is what you pay — no starting-high, no negotiation. Additional port dues shown separately at cost.
              </p>
            </div>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--color-navy)] text-white text-sm font-medium hover:bg-[var(--color-navy-dark)] transition-colors shrink-0 whitespace-nowrap"
            >
              Book us as your agent <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── What we'll need from you ──────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-16 lg:py-20">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[var(--color-navy)] mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What we&apos;ll need from you
          </h2>
          <p className="text-sm text-[var(--color-navy)]/50 mb-8">
            Have these ready before arrival to clear in fast:
          </p>

          {/* Document cards */}
          <div className="flex gap-3 overflow-x-auto pb-1 -mx-5 px-5 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:overflow-visible">
            {DOCUMENTS.map((doc) => (
              <div
                key={doc}
                className="border border-[var(--color-ivory-dark)] bg-white rounded-[2px] p-5 flex-none w-44 sm:w-auto"
              >
                <p className="text-sm text-[var(--color-navy)] font-medium leading-snug">{doc}</p>
              </div>
            ))}
          </div>

          {/* Visa note */}
          <div className="mt-5 flex items-start gap-3 border border-[var(--color-ivory-dark)] rounded-[2px] p-5 bg-white">
            <Flag size={13} className="text-[var(--color-navy)]/35 shrink-0 mt-[2px]" />
            <p className="text-xs text-[var(--color-navy)]/55 leading-relaxed">
              <strong className="font-semibold text-[var(--color-navy)]/75">Note:</strong>{" "}
              the visa application is the owner&apos;s responsibility (apply online before arrival).
            </p>
          </div>
        </div>
      </section>

      {/* ── How arrival works ─────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-site py-16 lg:py-20">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[var(--color-navy)] mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How arrival works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {STEPS.map(({ n, title, body }) => (
              <div key={n} className="flex flex-col gap-4">
                <span className="w-10 h-10 rounded-full bg-[var(--color-navy)] text-white text-[13px] font-semibold flex items-center justify-center shrink-0">
                  {n}
                </span>
                <h3 className="text-sm font-semibold text-[var(--color-navy)]">{title}</h3>
                <p className="text-sm text-[var(--color-navy)]/50 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Staying a while ───────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory-dark)]">
        <div className="container-site py-10 lg:py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p
                className="text-lg sm:text-xl font-semibold text-[var(--color-navy)] mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Staying a while?
              </p>
              <p className="text-sm text-[var(--color-navy)]/55 leading-relaxed max-w-sm">
                Add an optional guided road trip inland — entirely separate from clearance.
              </p>
            </div>
            <Link
              href="/trips"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-[var(--color-navy)] text-[var(--color-navy)] text-sm font-medium hover:bg-[var(--color-navy)] hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              See trips <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
