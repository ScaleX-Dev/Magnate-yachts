import Link from "next/link";
import { ArrowRight, BadgeCheck, DollarSign, Ship } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const SIGNALS = [
  {
    icon: BadgeCheck,
    title: "Licensed agent",
    body: "Approved in Galle and Trincomalee. Required to enter Sri Lanka by yacht.",
  },
  {
    icon: DollarSign,
    title: "Fixed published fee",
    body: "See the number before you commit. No negotiation games.",
  },
  {
    icon: Ship,
    title: "We meet your boat",
    body: "Call us on VHF 16. We're on the dock when you berth.",
  },
];

export function TrustSignals() {
  return (
    <section className="bg-[var(--color-navy)]">
      <div className="container-site py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mb-8">
          <Reveal>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The boat-side, while you&apos;re up there.
            </h2>
            <p className="text-white/55 text-sm leading-relaxed">
              Clearance, immigration, customs, port authority — sorted before you&apos;ve finished your first coffee on Sri Lankan soil. Licensed agent, fixed published fee, the same team planning your week ashore.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SIGNALS.map(({ icon: Icon, title, body }, i) => (
            <Reveal
              key={title}
              delay={i * 0.1}
              className="rounded-2xl border border-white/15 p-7 md:p-8 flex flex-col gap-5 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/25 hover:-translate-y-1"
            >
              <Icon size={18} className="text-[var(--color-amber)] transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-[15px] font-semibold text-white">{title}</h3>
              <p className="text-[13.5px] text-white/50 leading-relaxed">{body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/clearance"
            className="group inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/75 transition-colors"
          >
            See the full clearance page <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
