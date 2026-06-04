import { Metadata } from "next";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About — Magnate Yachts Sri Lanka",
  description:
    "Sri Lanka's leading sailing yacht operations company. Licensed clearance agent in Galle and Trincomalee.",
};

const CREDENTIALS = [
  { label: "Licensed agent", detail: "Registered with Sri Lanka Ports Authority in Galle and Trincomalee" },
  { label: "80% market share", detail: "The dominant operator for international sailing yachts arriving in Sri Lanka" },
  { label: "Since 2009", detail: "Over fifteen years on the dock in Galle Fort" },
  { label: "End-to-end operation", detail: "Clearance, provisioning, land trips — one team, one number, one invoice" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-20 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-4">
            About Magnate Yachts
          </p>
          <h1
            className="text-4xl sm:text-5xl font-semibold text-[var(--color-navy)] max-w-3xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The team on the dock when you arrive. The same team when you leave.
          </h1>
          <p className="text-[var(--color-navy)]/60 max-w-xl text-sm leading-relaxed">
            Magnate Yachts is Sri Lanka&apos;s dominant sailing yacht operations company — the licensed clearance agent for the majority of international sailing yachts arriving in the country. We cover both entry ports: Galle on the south coast, Trincomalee on the east.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white">
        <div className="container-site py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ImgPlaceholder label="Photograph — Galle Fort harbour, boats at anchor" aspectRatio="aspect-[4/3]" />
          <div className="flex flex-col gap-5">
            <h2
              className="text-2xl font-semibold text-[var(--color-navy)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We started on the dockside and we&apos;ve stayed there.
            </h2>
            <p className="text-sm text-[var(--color-navy)]/70 leading-relaxed">
              We&apos;ve been working with international sailing crews arriving in Galle since 2009. What started as clearance grew — crews wanted someone they already trusted to help them see the country. We built the land operation around the same team.
            </p>
            <p className="text-sm text-[var(--color-navy)]/70 leading-relaxed">
              Today we handle clearance, provisioning, land trips, and marine logistics for more international yachts arriving in Sri Lanka than any other agent. We don&apos;t advertise that on billboards — we&apos;re known by word of mouth from captain to captain, passage to passage.
            </p>
            <p className="text-sm text-[var(--color-navy)]/70 leading-relaxed">
              The fee is fixed and published. The team you speak to before you arrive is the team you meet on the dock.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-20">
          <h2
            className="text-2xl font-semibold text-white mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our credentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 rounded-sm overflow-hidden">
            {CREDENTIALS.map(({ label, detail }) => (
              <div key={label} className="bg-[var(--color-navy)] p-7 flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)]">
                  {label}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="bg-white">
        <div className="container-site py-16">
          <ImgPlaceholder
            label="Photograph — the Magnate Yachts team, Galle dockside"
            aspectRatio="aspect-[21/8]"
          />
          <p className="mt-4 text-xs text-[var(--color-navy)]/40 italic">
            Our team at Galle harbour.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-16 flex flex-col sm:flex-row items-start sm:items-center gap-8 justify-between">
          <div>
            <h2
              className="text-2xl font-semibold text-[var(--color-navy)] mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              When you have an arrival window — get in touch.
            </h2>
            <p className="text-sm text-[var(--color-navy)]/60">
              We&apos;ll meet your boat. Everything from there is handled.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Button href="/clearance" variant="primary" size="md" arrow>
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
