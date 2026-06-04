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
    body: "One transparent fee. What you see is what you pay — no starting-high, no negotiation. Additional port dues shown separately at cost.",
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
      <div className="container-site py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-8">
          The boat-side, while you&apos;re up there.
        </p>
        <p className="text-white/60 max-w-2xl text-sm leading-relaxed mb-12">
          We&apos;re the people you&apos;ll have your first coffee on Sri Lankan soil with. Licensed agent. Fixed published fee. The same team that left-published-here. The same team the captains and favourite clients on the list actually live on the clearance page.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-sm overflow-hidden">
          {SIGNALS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-[var(--color-navy)] p-8 flex flex-col gap-4">
              <Icon size={20} className="text-[var(--color-amber)]" />
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/clearance"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            See the full clearance page <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
