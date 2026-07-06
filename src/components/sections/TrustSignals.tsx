import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const SIGNALS = [
  {
    number: "01",
    title: "Licensed agent",
    body: "Approved in Galle and Trincomalee. Required to enter Sri Lanka by yacht.",
  },
  {
    number: "02",
    title: "Fixed published fee",
    body: "See the number before you commit. No negotiation games.",
  },
  {
    number: "03",
    title: "We meet your boat",
    body: "Call us on VHF 16. We're on the dock when you berth.",
  },
];

export function TrustSignals() {
  return (
    <section className="bg-[var(--color-navy-dark)]">
      <div className="container-site py-20 md:py-28 lg:py-32">

        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-end mb-14 md:mb-16">
          <Reveal>
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] font-light text-white leading-[1.1]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The boat-side,
              <br />
              <span className="italic text-white/40">while you're up there.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-[13.5px] text-white/40 leading-relaxed max-w-xs lg:max-w-[260px] lg:text-right"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Clearance, immigration, customs, port authority — sorted before you've finished your first coffee on Sri Lankan soil.
            </p>
          </Reveal>
        </div>

        {/* Trust signal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {SIGNALS.map(({ number, title, body }, i) => (
            <Reveal
              key={title}
              delay={i * 0.1}
              className="group flex flex-col gap-5 p-7 md:p-8 rounded-2xl border border-white/[0.07] bg-white/[0.03] transition-all duration-400 hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-1"
            >
              <span
                className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-amber)]"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                {number}
              </span>
              <div>
                <h3
                  className="text-[1.2rem] font-medium text-white mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-[13px] text-white/40 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA link */}
        <Reveal delay={0.35} className="mt-10 md:mt-12">
          <Link
            href="/clearance"
            className="group inline-flex items-center gap-2 text-[13px] text-white/30 hover:text-white/60 transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            See the full clearance page
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
