import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Yacht Clearance — Magnate Yachts Sri Lanka",
  description:
    "Licensed clearance agent for Galle and Trincomalee. Fixed published fee. We meet your boat.",
};

const INCLUDED = [
  "Immigration formalities & visa collection on arrival",
  "Customs clearance",
  "Port Authority & berthing coordination",
  "Defence Ministry liaison",
  "Harbour security gate passes",
  "Clear-out / departure formalities",
];

const DOCS_REQUIRED = [
  "Vessel registration",
  "Crew list",
  "Passport copies (all crew)",
  "NIL list / stores list",
  "Medical clearance / health docs",
];

const STEPS = [
  {
    n: 1,
    title: "Pre-arrival",
    body: "Appoint us by email/booking. Send docs ahead.",
  },
  {
    n: 2,
    title: "Call on VHF 16",
    body: "Hail Port Control ~1.5NM off for entry permission.",
  },
  {
    n: 3,
    title: "We meet your boat",
    body: "We're on the dock to walk you through formalities.",
  },
  {
    n: 4,
    title: "Cleared",
    body: "Typically within hours. Gate passes issued.",
  },
];

export default function ClearancePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-16 lg:py-20">
          <h1
            className="text-4xl sm:text-5xl font-semibold text-[var(--color-navy)] leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Yacht clearance in Galle
          </h1>
          <p className="text-[var(--color-navy)]/60 max-w-lg text-sm leading-relaxed">
            Fast, transparent, and met at the dock. The mandatory part of arriving in Sri
            Lanka, made the easy part.
          </p>
        </div>
      </section>

      {/* What clearance includes */}
      <section className="bg-white">
        <div className="container-site py-16">
          <h2
            className="text-2xl font-semibold text-[var(--color-navy)] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What clearance includes
          </h2>
          <ul className="flex flex-col gap-4 mb-12">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-navy)]/70 leading-relaxed">
                <span className="mt-0.5 w-4 h-4 border border-[var(--color-navy)]/20 rounded-sm shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Pricing card */}
          <div className="border border-[var(--color-ivory-dark)] rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-navy)]/50">
                Clearance package
              </p>
              <p
                className="text-3xl font-semibold text-[var(--color-navy)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                US $&nbsp;— &nbsp;·&nbsp; fixed, all-in
              </p>
              <p className="text-xs text-[var(--color-navy)]/50 max-w-sm leading-relaxed">
                One transparent fee. What you see is what you pay — no starting-high, no
                negotiation. Additional port dues shown separately at cost.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-navy)] text-white text-sm font-medium rounded-sm hover:bg-[var(--color-navy-dark)] transition-colors whitespace-nowrap shrink-0"
            >
              Book us as your agent <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* What we'll need from you */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-16">
          <h2
            className="text-2xl font-semibold text-[var(--color-navy)] mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What we&apos;ll need from you
          </h2>
          <p className="text-sm text-[var(--color-navy)]/60 mb-8">
            Have these ready before arrival to clear in fast:
          </p>

          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-5">
            {DOCS_REQUIRED.map((doc) => (
              <div
                key={doc}
                className="border border-[var(--color-ivory-dark)] rounded-sm p-5 flex-shrink-0 w-44 sm:w-auto bg-white"
              >
                <p className="text-sm font-medium text-[var(--color-navy)] leading-snug">{doc}</p>
              </div>
            ))}
          </div>

          {/* Visa note */}
          <div className="mt-6 flex items-start gap-3 border border-[var(--color-ivory-dark)] rounded-sm p-4 bg-white">
            <span className="text-base shrink-0 mt-0.5">📌</span>
            <p className="text-sm text-[var(--color-navy)]/70 leading-relaxed">
              <strong className="font-medium text-[var(--color-navy)]">Note:</strong> the visa
              application is the owner&apos;s responsibility (apply online before arrival).
            </p>
          </div>
        </div>
      </section>

      {/* How arrival works */}
      <section className="bg-white">
        <div className="container-site py-16">
          <h2
            className="text-2xl font-semibold text-[var(--color-navy)] mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How arrival works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(({ n, title, body }) => (
              <div key={n} className="flex flex-col gap-4">
                <div className="w-9 h-9 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0">
                  <span className="text-white text-sm font-semibold">{n}</span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-navy)] mb-1">{title}</p>
                  <p className="text-sm text-[var(--color-navy)]/60 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staying a while? */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-16">
          <div className="border border-[var(--color-ivory-dark)] rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white">
            <div>
              <p className="font-semibold text-[var(--color-navy)] mb-1">Staying a while?</p>
              <p className="text-sm text-[var(--color-navy)]/60 leading-relaxed max-w-sm">
                Add an optional guided road trip inland — entirely separate from clearance.
              </p>
            </div>
            <Link
              href="/trips"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-navy)] text-[var(--color-navy)] text-sm font-medium rounded-sm hover:bg-[var(--color-navy)] hover:text-white transition-colors whitespace-nowrap"
            >
              See trips <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
