import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Anchor, Wind, Waves, Fuel, Droplets, Wrench, ShoppingBag, Wifi } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

export const metadata: Metadata = {
  title: "Port Guide — Galle & Trincomalee | Magnate Yachts Sri Lanka",
  description:
    "Full pilot information for Sri Lanka's two official yacht entry ports — Galle on the south coast and Trincomalee on the east. Approaches, anchorages, facilities, and seasonal notes.",
};

/* ─── Data ───────────────────────────────────────────────────────────── */

const GALLE_FACTS = [
  { label: "Position", value: "6° 01.5′ N  80° 13.0′ E" },
  { label: "VHF", value: "Ch 16 → Ch 12 (Port Control)" },
  { label: "Entry call distance", value: "~1.5 NM off" },
  { label: "Approach depth", value: "14–18 m at entrance" },
  { label: "Berth draft (max)", value: "~6.0 m alongside" },
  { label: "Port status", value: "Official entry port" },
];

const TRINCO_FACTS = [
  { label: "Position", value: "8° 33.5′ N  81° 14.5′ E" },
  { label: "VHF", value: "Ch 16 → Ch 12 (Port Control)" },
  { label: "Entry call distance", value: "~2 NM off" },
  { label: "Approach depth", value: "20–35 m, natural deepwater" },
  { label: "Anchorage depth", value: "8–15 m, excellent holding" },
  { label: "Port status", value: "Official entry port" },
];

const GALLE_APPROACH = [
  {
    title: "Outer waypoint",
    body: "6° 01.0′ N  80° 12.0′ E — clear of the reef shoal extending SW of the breakwater head.",
  },
  {
    title: "Call Port Control",
    body: "At ~1.5 NM call on VHF 16. Magnate's agent monitors and can relay. Wait for permission before entering the harbour mouth.",
  },
  {
    title: "Enter on 060°T",
    body: "Keep the western breakwater close to starboard. Maintain slow speed past the fishing craft on the north side.",
  },
  {
    title: "Berth assignment",
    body: "Port Control will direct you. Commercial vessels take the east quay; yachts are typically placed at the dedicated small-craft pontoon or alongside the north wall.",
  },
];

const TRINCO_APPROACH = [
  {
    title: "Outer waypoint",
    body: "8° 33.0′ N  81° 13.5′ E — open water, free of dangers on the final 5 NM approach track.",
  },
  {
    title: "Call Port Control",
    body: "At ~2 NM call on VHF 16. Announce vessel name, flag, persons on board, and last port. Permission is typically granted promptly.",
  },
  {
    title: "Enter via main channel",
    body: "Follow the lit channel buoys. The natural deepwater harbour offers excellent natural protection — depths of 20 m+ inside.",
  },
  {
    title: "Anchorage or berth",
    body: "Yachts typically anchor in the designated small-craft area north of the commercial wharf. Our agent will confirm position on arrival.",
  },
];

const GALLE_FACILITIES: { icon: ReactNode; name: string; note: string }[] = [
  { icon: <Fuel size={14} />, name: "Fuel", note: "Diesel by jerry can or barge. Advance arrangement needed." },
  { icon: <Droplets size={14} />, name: "Water", note: "Available on the dock. Treated municipal supply." },
  { icon: <ShoppingBag size={14} />, name: "Provisions", note: "Full supermarkets and a fresh market 15 min walk from the fort gates." },
  { icon: <Wrench size={14} />, name: "Repairs", note: "Chandlery limited; mechanical and electrical contractors available. Allow lead time." },
  { icon: <Wifi size={14} />, name: "Connectivity", note: "Good 4G in the harbour area. SIM cards available in Galle Fort." },
];

const TRINCO_FACILITIES: { icon: ReactNode; name: string; note: string }[] = [
  { icon: <Fuel size={14} />, name: "Fuel", note: "Diesel available via the commercial fuel point. Coordinate through your agent." },
  { icon: <Droplets size={14} />, name: "Water", note: "Available at the dock. Limited pressure — fill tanks slowly." },
  { icon: <ShoppingBag size={14} />, name: "Provisions", note: "Town market within 20 minutes. Fresh fish, local produce, basics. Less variety than Galle." },
  { icon: <Wrench size={14} />, name: "Repairs", note: "Mechanical support available. Parts sourcing from Colombo if needed (3–4 hrs overland)." },
  { icon: <Wifi size={14} />, name: "Connectivity", note: "4G coverage patchy inside the harbour. Better signal in town." },
];

const SEASON_NOTES = [
  {
    port: "Galle",
    coast: "South coast",
    best: "Nov → Apr",
    avoid: "May → Oct (SW monsoon)",
    note: "Protected from the NE monsoon by the breakwater. During the SW monsoon the approach can be exposed — heavy swells from the southwest.",
  },
  {
    port: "Trincomalee",
    coast: "East coast",
    best: "May → Sep",
    avoid: "Nov → Jan (NE monsoon)",
    note: "One of Asia's finest natural harbours. Sheltered in all conditions once inside. East coast season is the inverse of Galle.",
  },
];

/* ─── Page ───────────────────────────────────────────────────────────── */

export default function PortGuidePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--color-midnight)" }}
      >
        {/* Atmospheric gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 0% 100%, rgba(30,146,146,0.08) 0%, transparent 55%),
              radial-gradient(ellipse 60% 40% at 100% 0%, rgba(196,146,74,0.06) 0%, transparent 50%)
            `,
          }}
        />

        <div className="container-site relative pt-14 pb-12 lg:pt-20 lg:pb-16">
          <Reveal>
            <span
              className="block text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--color-amber)] mb-8"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Sri Lanka · Official Entry Ports
            </span>
            <h1
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-light text-white leading-[1.05] mb-7 max-w-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Port Guide
              <br />
              <span className="italic text-white/40">Galle &amp; Trincomalee</span>
            </h1>
            <p
              className="text-[14.5px] text-white/40 max-w-md leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Sri Lanka maintains two official yacht entry ports — Galle on the south coast and Trincomalee on the east. Both require advance appointment of a licensed agent before arrival. This guide covers approaches, anchorages, facilities, and seasonal notes for each.
            </p>
          </Reveal>

          {/* Port quick-jump cards */}
          <Reveal delay={0.15} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#galle"
              className="group flex items-center justify-between gap-6 px-6 py-5 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              <div>
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--color-amber)] mb-1.5"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  South coast
                </p>
                <p
                  className="text-2xl font-light text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Galle
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[11px] text-white/25 font-mono">6° 01′ N</span>
                <span className="text-[11px] text-white/25 font-mono">80° 13′ E</span>
                <ArrowRight size={14} className="text-[var(--color-amber)] mt-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>

            <a
              href="#trincomalee"
              className="group flex items-center justify-between gap-6 px-6 py-5 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              <div>
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--color-amber)] mb-1.5"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  East coast
                </p>
                <p
                  className="text-2xl font-light text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Trincomalee
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[11px] text-white/25 font-mono">8° 33′ N</span>
                <span className="text-[11px] text-white/25 font-mono">81° 14′ E</span>
                <ArrowRight size={14} className="text-[var(--color-amber)] mt-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* ── GALLE ─────────────────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════ */}

      <section
        id="galle"
        className="relative"
        style={{ background: "var(--color-navy)" }}
      >
        {/* Subtle divider line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-amber)]/20 to-transparent" />

        <div className="container-site py-12 lg:py-16">

          {/* Port header */}
          <Reveal className="mb-8">
            <div className="flex items-start gap-6">
              <div
                className="w-10 h-10 rounded-full bg-[var(--color-amber)]/10 border border-[var(--color-amber)]/25 flex items-center justify-center shrink-0 mt-1"
              >
                <Anchor size={16} className="text-[var(--color-amber)]" />
              </div>
              <div>
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-amber)] mb-3"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  South coast · Primary port
                </p>
                <h2
                  className="text-[clamp(2rem,5vw,3.75rem)] font-light text-white leading-[1.08] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Galle
                </h2>
                <p className="text-sm text-white/40 max-w-lg leading-relaxed">
                  Sri Lanka&apos;s principal yachting destination, sheltered by one of the Indian Ocean&apos;s best-known colonial-era forts. Galle Harbour sits inside a modern breakwater and handles the majority of cruising yachts arriving from the west.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Image */}
          <Reveal delay={0.05} className="mb-8">
            <ImgPlaceholder
              src="/images/site/port-galle-banner.jpg"
              label="Galle Fort aerial — south coast Sri Lanka"
              aspectRatio="aspect-[21/9]"
              className="rounded-xl w-full"
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Quick facts */}
            <Reveal delay={0.08} className="lg:col-span-2">
              <h3
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)] mb-5"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Quick facts
              </h3>
              <div className="flex flex-col divide-y divide-white/[0.06]">
                {GALLE_FACTS.map(({ label, value }) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 gap-1">
                    <span className="text-[11px] uppercase tracking-wide text-white/30 font-medium shrink-0" style={{ fontFamily: "var(--font-accent)" }}>
                      {label}
                    </span>
                    <span className="text-[13px] text-white/75 font-mono">{value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Approach */}
            <Reveal delay={0.12} className="lg:col-span-3">
              <h3
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)] mb-5"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Approach &amp; entry
              </h3>
              <div className="flex flex-col gap-6">
                {GALLE_APPROACH.map(({ title, body }, i) => (
                  <div key={title} className="flex gap-4">
                    <span
                      className="w-6 h-6 rounded-full bg-white/[0.06] border border-white/[0.09] text-[11px] font-semibold text-white/40 flex items-center justify-center shrink-0 mt-0.5"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-white/80 mb-1">{title}</p>
                      <p className="text-[13px] text-white/40 leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Facilities */}
          <Reveal delay={0.1} className="mt-8">
            <h3
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)] mb-6"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Facilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {GALLE_FACILITIES.map(({ icon, name, note }) => (
                <div
                  key={name}
                  className="flex gap-4 p-5 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.05] transition-colors duration-300"
                >
                  <span className="text-[var(--color-amber)] shrink-0 mt-0.5">{icon}</span>
                  <div>
                    <p className="text-[12.5px] font-semibold text-white/75 mb-1">{name}</p>
                    <p className="text-[12px] text-white/35 leading-relaxed">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Galle highlights */}
          <Reveal delay={0.12} className="mt-10">
            <div className="rounded-xl border border-[var(--color-amber)]/15 bg-[var(--color-amber)]/[0.04] p-7 lg:p-9">
              <div className="flex items-start gap-4 mb-5">
                <Waves size={15} className="text-[var(--color-amber)] shrink-0 mt-0.5" />
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  What&apos;s within reach
                </p>
              </div>
              <p className="text-[13.5px] text-white/50 leading-relaxed max-w-2xl">
                Galle Fort, a UNESCO World Heritage site, is a ten-minute walk from the dock. The city&apos;s Dutch-colonial ramparts, boutique hotels, and fresh-catch restaurants are walkable. Sri Lanka&apos;s south coast whale-watching grounds lie just 10–15 NM offshore. Inland, Yala National Park and the hill country are within a half-day&apos;s road trip — both easily arranged as add-on excursions through Magnate.
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* ── TRINCOMALEE ───────────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════ */}

      <section
        id="trincomalee"
        className="relative"
        style={{ background: "var(--color-midnight)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-turquoise)]/20 to-transparent" />

        <div className="container-site py-12 lg:py-16">

          {/* Port header */}
          <Reveal className="mb-8">
            <div className="flex items-start gap-6">
              <div
                className="w-10 h-10 rounded-full bg-[var(--color-turquoise)]/10 border border-[var(--color-turquoise)]/25 flex items-center justify-center shrink-0 mt-1"
              >
                <Anchor size={16} className="text-[var(--color-turquoise)]" />
              </div>
              <div>
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-turquoise)] mb-3"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  East coast · Natural deepwater harbour
                </p>
                <h2
                  className="text-[clamp(2rem,5vw,3.75rem)] font-light text-white leading-[1.08] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Trincomalee
                </h2>
                <p className="text-sm text-white/40 max-w-lg leading-relaxed">
                  One of Asia&apos;s finest natural deepwater anchorages, Trincomalee has sheltered fleets since antiquity. The harbour is immense — protected by headlands on three sides, it offers superb holding in all conditions and a very different face of Sri Lanka to the south.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Image */}
          <Reveal delay={0.05} className="mb-8">
            <ImgPlaceholder
              label="Trincomalee harbour — east coast Sri Lanka"
              aspectRatio="aspect-[21/9]"
              className="rounded-xl w-full"
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Quick facts */}
            <Reveal delay={0.08} className="lg:col-span-2">
              <h3
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-turquoise)] mb-5"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Quick facts
              </h3>
              <div className="flex flex-col divide-y divide-white/[0.06]">
                {TRINCO_FACTS.map(({ label, value }) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 gap-1">
                    <span className="text-[11px] uppercase tracking-wide text-white/30 font-medium shrink-0" style={{ fontFamily: "var(--font-accent)" }}>
                      {label}
                    </span>
                    <span className="text-[13px] text-white/75 font-mono">{value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Approach */}
            <Reveal delay={0.12} className="lg:col-span-3">
              <h3
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-turquoise)] mb-5"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Approach &amp; entry
              </h3>
              <div className="flex flex-col gap-6">
                {TRINCO_APPROACH.map(({ title, body }, i) => (
                  <div key={title} className="flex gap-4">
                    <span
                      className="w-6 h-6 rounded-full bg-white/[0.06] border border-white/[0.09] text-[11px] font-semibold text-white/40 flex items-center justify-center shrink-0 mt-0.5"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-white/80 mb-1">{title}</p>
                      <p className="text-[13px] text-white/40 leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Facilities */}
          <Reveal delay={0.1} className="mt-8">
            <h3
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-turquoise)] mb-6"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Facilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {TRINCO_FACILITIES.map(({ icon, name, note }) => (
                <div
                  key={name}
                  className="flex gap-4 p-5 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.05] transition-colors duration-300"
                >
                  <span className="text-[var(--color-turquoise)] shrink-0 mt-0.5">{icon}</span>
                  <div>
                    <p className="text-[12.5px] font-semibold text-white/75 mb-1">{name}</p>
                    <p className="text-[12px] text-white/35 leading-relaxed">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Trinco highlights */}
          <Reveal delay={0.12} className="mt-10">
            <div className="rounded-xl border border-[var(--color-turquoise)]/15 bg-[var(--color-turquoise)]/[0.04] p-7 lg:p-9">
              <div className="flex items-start gap-4 mb-5">
                <Waves size={15} className="text-[var(--color-turquoise)] shrink-0 mt-0.5" />
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-turquoise)]"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  What&apos;s within reach
                </p>
              </div>
              <p className="text-[13.5px] text-white/50 leading-relaxed max-w-2xl">
                Pigeon Island National Marine Park — one of Sri Lanka&apos;s best reef dive sites — is a short tender ride away. The bay itself is home to dolphins and blue whales during season. Ashore, the ancient Koneswaram temple sits dramatically on a headland above the harbour. Further inland, Minneriya and Kaudulla national parks host the famous elephant gatherings — hundreds of elephants converging on ancient tanks as water levels drop in the dry season.
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ── Seasonal comparison ────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-navy-dark)" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="container-site py-10 lg:py-14">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <Wind size={14} className="text-[var(--color-amber)]" />
              <h2
                className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-amber)]"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Season &amp; weather
              </h2>
            </div>
            <p
              className="text-2xl sm:text-3xl font-light text-white max-w-xl leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Two coasts, two seasons — plan your circuit accordingly.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SEASON_NOTES.map(({ port, coast, best, avoid, note }, i) => (
              <Reveal key={port} delay={i * 0.08}>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-7 h-full flex flex-col gap-5">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/30 mb-2" style={{ fontFamily: "var(--font-accent)" }}>
                      {coast}
                    </p>
                    <p className="text-2xl font-light text-white" style={{ fontFamily: "var(--font-display)" }}>{port}</p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1 rounded-lg bg-white/[0.03] border border-white/[0.06] p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-amber)] mb-1.5" style={{ fontFamily: "var(--font-accent)" }}>Best window</p>
                      <p className="text-sm text-white/70 font-medium">{best}</p>
                    </div>
                    <div className="flex-1 rounded-lg bg-white/[0.03] border border-white/[0.06] p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-white/25 mb-1.5" style={{ fontFamily: "var(--font-accent)" }}>Avoid</p>
                      <p className="text-sm text-white/40 font-medium">{avoid}</p>
                    </div>
                  </div>

                  <p className="text-[12.5px] text-white/35 leading-relaxed">{note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clearance CTA ─────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-navy)" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="container-site py-10 lg:py-14">
          <Reveal className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-lg">
              <p
                className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-amber)] mb-4"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Ready to arrive?
              </p>
              <h2
                className="text-3xl sm:text-4xl font-light text-white leading-snug mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                You need a licensed agent
                <br />
                <span className="italic text-white/40">before you enter port.</span>
              </h2>
              <p className="text-sm text-white/40 leading-relaxed">
                Sri Lanka requires all visiting yachts to appoint a licensed clearing agent ahead of arrival. Magnate handles clearance at both Galle and Trincomalee — fixed fee, met at the dock.
              </p>
              <p className="text-sm text-white/40 leading-relaxed mt-3">
                <strong className="text-white/60">Visa required before arrival</strong> — all crew must apply online before reaching Sri Lanka.{" "}
                <a
                  href="https://www.eta.gov.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-amber)]/70 hover:text-[var(--color-amber)] underline underline-offset-2 transition-colors"
                >
                  Apply at eta.gov.lk →
                </a>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/clearance"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-amber)] text-white text-[13px] font-medium tracking-wide hover:bg-[var(--color-amber-light)] hover:shadow-[var(--shadow-gold)] hover:-translate-y-px transition-all duration-300 active:scale-[0.97]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Clearance service <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/book"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white/70 text-[13px] font-medium hover:border-white/40 hover:text-white transition-all duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Book your agent
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
