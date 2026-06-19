"use client";

import { Reveal } from "@/components/ui/Reveal";

const PILLARS = [
  {
    number: "01",
    tag: "On arrival",
    title: "Before you've finished tying up.",
    items: [
      "Clearance, immigration, customs, port authority",
      "Berthing coordinated ahead of time",
      "Met on the dock at Galle or Trincomalee",
      "Paperwork done as quickly as the system allows",
    ],
  },
  {
    number: "02",
    tag: "At stay",
    title: "Your week ashore, and the boat in between.",
    items: [
      "A trip across the island, shaped to your crew",
      "Trusted drivers, handpicked stays",
      "Recommendations from people who actually live here",
      "Provisioning, fuel, gas, water, repairs — as the boat needs",
    ],
  },
  {
    number: "03",
    tag: "On departure",
    title: "Out cleanly, on your timetable.",
    items: [
      "Clear-out formalities lodged with the authorities",
      "Departure paperwork ready before you sail",
      "Last-mile logistics — fuel, ice, provisions",
      "A clean handover for the next passage",
    ],
  },
];

function PillarCard({ number, tag, title, items }: (typeof PILLARS)[0]) {
  return (
    <div className="relative flex flex-col gap-6 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 md:p-8 overflow-hidden transition-all duration-500 hover:bg-white/[0.07] hover:border-white/[0.15] hover:-translate-y-1 group">
      {/* Watermark number */}
      <span
        className="absolute -top-5 -right-1 text-[7rem] md:text-[9rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none transition-all duration-500 group-hover:text-white/[0.055]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {number}
      </span>

      <div className="flex flex-col gap-2">
        <span
          className="text-[9.5px] uppercase tracking-[0.28em] text-[var(--color-amber)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {number}&nbsp;&nbsp;·&nbsp;&nbsp;{tag}
        </span>
        <h3
          className="text-[1.35rem] md:text-[1.45rem] font-medium text-white leading-snug"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
      </div>

      <div className="w-8 h-px bg-[var(--color-amber)]/35" />

      <ul className="flex flex-col gap-3.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-[var(--color-amber)]/60 shrink-0 flex-none" />
            <span
              className="text-[13.5px] text-white/45 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServicePillars() {
  return (
    <section className="bg-[var(--color-navy)] overflow-hidden">
      <div className="container-site py-20 md:py-28 lg:py-32">

        {/* Section header */}
        <Reveal className="mb-12 md:mb-16">
          <span
            className="block text-[10px] uppercase tracking-[0.3em] text-[var(--color-amber)] mb-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            How we work
          </span>
          <h2
            className="text-[clamp(2rem,5vw,3.5rem)] font-light text-white leading-[1.1]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From arrival to departure,
            <br />
            <span className="italic text-white/40">we hold the line.</span>
          </h2>
        </Reveal>

        {/* Mobile: horizontal snap scroll */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-[var(--section-padding-x)] px-[var(--section-padding-x)] pb-5 lg:hidden scrollbar-none">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="snap-start shrink-0 w-[85vw] max-w-[360px]"
            >
              <PillarCard {...pillar} />
            </div>
          ))}
          {/* Trailing spacer */}
          <div className="shrink-0 w-4" />
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid grid-cols-3 gap-5">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.number} delay={i * 0.12}>
              <PillarCard {...pillar} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
