import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const BLUR = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMxYzJiM2UiLz48L3N2Zz4=";

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
    detail: "Clearance, provisioning, excursions — one team, one number, one invoice.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <h1
              className="text-[clamp(2.25rem,6vw,4.5rem)] font-light text-white max-w-3xl leading-[1.1] mb-7"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The team on the dock when you arrive.{" "}
              <span className="italic text-white/40">The same team when you leave.</span>
            </h1>
            <p
              className="text-[14.5px] text-white/40 max-w-xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Magnate Yachts is Sri Lanka&apos;s dominant sailing yacht operations company — the licensed clearance agent for the majority of international sailing yachts arriving in the country. We cover both entry ports: Galle on the south coast, Trincomalee on the east.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_32px_80px_-28px_rgba(6,12,24,0.3)]">
            <Image
              src="/images/site/about-story.jpg"
              alt="Sailing yachts moored in a calm harbour"
              fill
              placeholder="blur"
              blurDataURL={BLUR}
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-6 pt-2">
            <h2
              className="text-[clamp(1.65rem,3.5vw,2.5rem)] font-light text-[var(--color-navy)] leading-[1.2]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We started on the dockside and{" "}
              <span className="italic text-[var(--color-navy)]/45">we&apos;ve stayed there.</span>
            </h2>
            {[
              "We've been working with international sailing crews arriving in Galle since 2009. What started as clearance grew — crews wanted someone they already trusted to help them see the country. We built the land operation around the same team.",
              "Today we handle clearance, provisioning, excursions, and marine logistics for more international yachts arriving in Sri Lanka than any other agent. We don't advertise that on billboards — we're known by word of mouth from captain to captain, passage to passage.",
              "The fee is fixed and published. The team you speak to before you arrive is the team you meet on the dock.",
            ].map((para, i) => (
              <p
                key={i}
                className="text-[14px] text-[var(--color-navy)]/55 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {para}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Credentials ───────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy-dark)]">
        <div className="container-site py-20">
          <Reveal>
            <h2
              className="text-[clamp(1.75rem,4vw,3rem)] font-light text-white mb-12"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our credentials
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CREDENTIALS.map(({ label, detail }, i) => (
              <Reveal
                key={label}
                delay={i * 0.08}
                className="p-7 md:p-8 flex flex-col gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12]"
              >
                <p
                  className="text-[9.5px] font-medium uppercase tracking-[0.28em] text-[var(--color-amber)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {label}
                </p>
                <p
                  className="text-[13.5px] text-white/45 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team photo ────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-14">
          <Reveal>
            <div className="relative aspect-[21/8] w-full overflow-hidden rounded-2xl shadow-[0_24px_60px_-28px_rgba(6,12,24,0.25)]">
              <Image
                src="/images/site/port-galle-banner.jpg"
                alt="Aerial view of Galle Fort peninsula, Sri Lanka"
                fill
                placeholder="blur"
                blurDataURL={BLUR}
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="100vw"
              />
            </div>
            <p
              className="mt-4 text-[12px] text-[var(--color-navy)]/30 italic"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our team at Galle harbour.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-16 md:py-20 flex flex-col sm:flex-row items-start sm:items-center gap-10 justify-between">
          <Reveal>
            <h2
              className="text-[clamp(1.5rem,4vw,2.75rem)] font-light text-white leading-[1.15]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              When you have an arrival window —{" "}
              <span className="italic text-white/40">get in touch.</span>
            </h2>
            <p
              className="mt-3 text-[13.5px] text-white/38"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We&apos;ll meet your boat. Everything from there is handled.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex gap-3 flex-wrap shrink-0">
            <Button href="/book" variant="gold" size="md" arrow>
              Arrange clearance
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="md"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/35 hover:text-white"
            >
              Contact us
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
