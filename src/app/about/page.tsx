import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About — Magnate Yachts Sri Lanka",
  description:
    "Sri Lanka's leading sailing yacht operations company. Licensed clearance agent in Galle and Trincomalee.",
};

const CREDENTIALS = [
  {
    label: "Licensed agent",
    detail: "Registered with Sri Lanka Ports Authority in Galle and Trincomalee.",
  },
  {
    label: "80% market share",
    detail: "The dominant operator for international sailing yachts arriving in Sri Lanka.",
  },
  {
    label: "Since 2009",
    detail: "Over fifteen years on the dock in Galle Fort.",
  },
  {
    label: "End-to-end operation",
    detail: "Clearance, provisioning, land trips — one team, one number, one invoice.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-20 lg:py-28">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-5">
            About Magnate Yachts
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold text-[var(--color-navy)] max-w-3xl leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The team on the dock when you arrive. The same team when you leave.
          </h1>
          <p className="text-[var(--color-navy)]/55 max-w-xl text-sm leading-relaxed">
            Magnate Yachts is Sri Lanka&apos;s dominant sailing yacht operations company — the licensed clearance agent for the majority of international sailing yachts arriving in the country. We cover both entry ports: Galle on the south coast, Trincomalee on the east.
          </p>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-site py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1656347440710-70039fa0bd0a?q=80&w=1200&auto=format&fit=crop"
              alt="Sailing yachts moored in a calm harbour"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[var(--color-navy)] leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We started on the dockside and we&apos;ve stayed there.
            </h2>
            <p className="text-sm text-[var(--color-navy)]/65 leading-relaxed">
              We&apos;ve been working with international sailing crews arriving in Galle since 2009. What started as clearance grew — crews wanted someone they already trusted to help them see the country. We built the land operation around the same team.
            </p>
            <p className="text-sm text-[var(--color-navy)]/65 leading-relaxed">
              Today we handle clearance, provisioning, land trips, and marine logistics for more international yachts arriving in Sri Lanka than any other agent. We don&apos;t advertise that on billboards — we&apos;re known by word of mouth from captain to captain, passage to passage.
            </p>
            <p className="text-sm text-[var(--color-navy)]/65 leading-relaxed">
              The fee is fixed and published. The team you speak to before you arrive is the team you meet on the dock.
            </p>
          </div>
        </div>
      </section>

      {/* ── Credentials ───────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-20">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-white mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our credentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-[1px] divide-white/[0.07] border border-white/[0.07]">
            {CREDENTIALS.map(({ label, detail }) => (
              <div key={label} className="p-7 flex flex-col gap-2 border-b border-r border-white/[0.07] last:border-r-0 [&:nth-child(2)]:border-r-0 sm:[&:nth-child(2)]:border-r">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)]">
                  {label}
                </p>
                <p className="text-sm text-white/50 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team photo ────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-site py-16">
          <div className="relative aspect-[21/8] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1763151426912-92383702ab3f?q=80&w=2400&auto=format&fit=crop"
              alt="Sailboats and yachts docked at the marina"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <p className="mt-4 text-[11.5px] text-[var(--color-navy)]/35 italic">
            Our team at Galle harbour.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-16 flex flex-col sm:flex-row items-start sm:items-center gap-8 justify-between">
          <div>
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[var(--color-navy)] mb-2 leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              When you have an arrival window — get in touch.
            </h2>
            <p className="text-sm text-[var(--color-navy)]/55">
              We&apos;ll meet your boat. Everything from there is handled.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap shrink-0">
            <Button href="/book" variant="primary" size="md" arrow>
              Arrange clearance
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
