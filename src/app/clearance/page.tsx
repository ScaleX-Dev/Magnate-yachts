import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flag } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const BLUR = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMxYzJiM2UiLz48L3N2Zz4=";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://magnateyachts.com";

export const metadata: Metadata = {
  title: "Yacht Clearance in Galle & Trincomalee, Sri Lanka",
  description:
    "Fast, transparent yacht clearance met at the dock. Fixed fee — immigration, customs, port authority, and harbour passes handled for you. Galle and Trincomalee.",
  keywords: [
    "yacht clearance Sri Lanka",
    "Galle port clearance",
    "Trincomalee yacht clearance",
    "Sri Lanka yacht agent",
    "sailing to Sri Lanka clearance",
    "immigration clearance yacht",
    "customs clearance yacht Sri Lanka",
    "yacht agent Galle harbour",
    "SLPA clearance",
  ],
  alternates: { canonical: `${siteUrl}/clearance` },
  openGraph: {
    title: "Yacht Clearance in Galle & Trincomalee — Magnate Yachts",
    description:
      "Fixed-fee yacht clearance handled dockside. Immigration, customs, port authority, and harbour security passes — all taken care of.",
    url: `${siteUrl}/clearance`,
  },
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
      {/* ── Hero ── full-bleed image background */}
      <section className="relative min-h-[65svh] flex flex-col justify-between overflow-hidden bg-[#060c18]">

        {/* Background image */}
        <Image
          src="/images/site/about-story.jpg"
          alt="Yachts at berth, Galle harbour"
          fill
          priority
          placeholder="blur"
          blurDataURL={BLUR}
          className="object-cover opacity-50 scale-[1.03]"
          style={{ willChange: "transform" }}
        />
        {/* Cinematic gradient — dark top → transparent mid → rich dark bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060c18]/90 via-[#060c18]/20 to-[#060c18]/85 pointer-events-none" />
        {/* Side vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(6,12,24,0.55) 100%)" }} />

        {/* Content */}
        <div className="relative z-10 container-site py-16 lg:py-24 flex flex-col justify-end h-full">
          <Reveal>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.32em] mb-6"
              style={{ fontFamily: "var(--font-body)", color: "#5BB8E8" }}
            >
              Clearance
            </p>
            <h1
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-light text-white leading-[1.05] mb-6 max-w-3xl"
              style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 40px rgba(6,12,24,0.6)" }}
            >
              Seamless Yacht Clearance
              <br />
              <span style={{ color: "rgba(91,184,232,0.6)", fontStyle: "italic" }}>in Sri Lanka</span>
            </h1>
            <p
              className="text-[15px] leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)", textShadow: "0 1px 20px rgba(6,12,24,0.5)" }}
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
                style={{ border: "1px solid rgba(91,184,232,0.3)", color: "rgba(91,184,232,0.8)", fontFamily: "var(--font-body)" }}
              >
                How it works
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Wave divider */}
        <div className="relative z-10" style={{ height: "2px", background: "linear-gradient(90deg, transparent, rgba(42,125,168,0.5), transparent)" }} />
      </section>

      {/* ── What's included ── dark ocean */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            {/* Checklist */}
            <Reveal>
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.28em] mb-8"
                style={{ color: "#5BB8E8", fontFamily: "var(--font-body)" }}
              >
                What's included
              </p>
              <ul className="flex flex-col">
                {INCLUDED.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-5 py-4"
                    style={{ borderBottom: i < INCLUDED.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
                  >
                    <span
                      className="text-[10px] font-medium shrink-0 mt-1 tabular-nums"
                      style={{ color: "rgba(91,184,232,0.4)", fontFamily: "var(--font-body)", minWidth: "18px" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-[14px] leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Package — minimal document style */}
            <Reveal delay={0.1}>
              <div
                className="p-8"
                style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.28em] mb-6"
                  style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)" }}
                >
                  Clearance package
                </p>
                <div className="mb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "24px" }}>
                  <span
                    className="font-light text-white block"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1, letterSpacing: "-0.01em" }}
                  >
                    US $300
                  </span>
                  <span
                    className="text-[12px] mt-2 block"
                    style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)" }}
                  >
                    Fixed fee · payable on arrival in Galle
                  </span>
                </div>
                <p
                  className="text-[13px] leading-relaxed mb-8"
                  style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}
                >
                  Includes up to 30 days of berthing, full customs clearance (arrival and departure), and agency fees.
                </p>
                <div className="flex flex-col gap-2 mb-8">
                  {["No hidden charges", "Met at the dock on arrival", "Same team throughout your stay"].map(f => (
                    <p key={f} className="text-[12px]" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-body)" }}>
                      — {f}
                    </p>
                  ))}
                </div>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium transition-all duration-300 hover:gap-3"
                  style={{ color: "#5BB8E8", fontFamily: "var(--font-body)" }}
                >
                  Book us as your agent <ArrowRight size={13} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Documents ── light blue-tinted */}
      <section style={{ background: "var(--color-ivory)" }}>
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
      <section id="how-it-works" className="bg-[var(--color-navy)]">
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
                  style={{ background: "var(--color-navy)" }}
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
