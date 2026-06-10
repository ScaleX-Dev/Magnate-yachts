import Link from "next/link";
import { ArrowRight, BadgeCheck, DollarSign, Ship } from "lucide-react";

const SIGNALS = [
  {
    icon: BadgeCheck,
    title: "Licensed agent",
    body: "Registered in Galle and Trincomalee. We file with the port authority — not a middleman filing on our behalf.",
  },
  {
    icon: DollarSign,
    title: "Fixed published fee",
    body: "One transparent fee. What you see is what you pay — no starting-high, no negotiation. Port dues shown separately at cost.",
  },
  {
    icon: Ship,
    title: "We meet your boat",
    body: "Call us on VHF 16. We'll be on the dock when you arrive, and we'll be there when you leave.",
  },
];

export function TrustSignals() {
  return (
    <section className="bg-[var(--color-navy)]">
      <div className="container-site py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-12">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-5">
              The boat-side, while you&apos;re up there.
            </p>
            <p className="text-white/55 text-sm leading-relaxed">
              We&apos;re the people you&apos;ll have your first coffee on Sri Lankan soil with. Licensed agent. Fixed published fee. The same team that planned your week ashore clears you out. Captains and returning clients all say the same thing — they just didn&apos;t know it before they arrived.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.07] border border-white/[0.07]">
          {SIGNALS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="p-8 flex flex-col gap-5">
              <Icon size={18} className="text-[var(--color-amber)]" />
              <h3 className="text-[15px] font-semibold text-white">{title}</h3>
              <p className="text-[13.5px] text-white/50 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/clearance"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/75 transition-colors"
          >
            See the full clearance page <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
