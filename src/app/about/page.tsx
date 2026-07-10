import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const BLUR = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMxYzJiM2UiLz48L3N2Zz4=";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://magnateyachts.com";

export const metadata: Metadata = {
  title: "About Us — Sri Lanka's Leading Yacht Agent",
  description:
    "Founded by Achintha Hewagamage, Magnate Yachts handles over 80% of international yacht arrivals into Sri Lanka. SLPA-registered, based in Galle and Colombo.",
  keywords: [
    "Magnate Yachts about",
    "Achintha Hewagamage yacht agent",
    "Sri Lanka yacht agency",
    "SLPA registered yacht agent",
    "Galle yacht agent",
    "international yacht arrivals Sri Lanka",
  ],
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: "About Magnate Yachts — Sri Lanka's #1 Yacht Clearance Agent",
    description:
      "Founded by Achintha Hewagamage, Magnate Yachts handles over 80% of international yacht arrivals into Sri Lanka.",
    url: `${siteUrl}/about`,
  },
};

const CREDENTIALS = [
  {
    label: "Licensed agent",
    detail: "Registered with Sri Lanka Ports Authority in Galle and Colombo.",
  },
  {
    label: "80% of arrivals",
    detail: "Trusted to handle the majority of international yacht arrivals into Sri Lanka.",
  },
  {
    label: "Dedicated support",
    detail: "Teams based in both Colombo and Galle for consistent coverage at every port of call.",
  },
  {
    label: "End-to-end service",
    detail: "Clearance, excursions, and logistics — one team, one point of contact.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-12 lg:py-16">
          <Reveal>
            <p
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-amber)] mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              About Us
            </p>
            <h1
              className="text-[clamp(2.25rem,6vw,4.5rem)] font-light text-white max-w-3xl leading-[1.1] mb-7"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A seamless sailing experience
              <br />
              <span className="italic text-white/40">begins before you set sail.</span>
            </h1>
            <p
              className="text-[14.5px] text-white/50 max-w-xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              It starts with how you are received, how swiftly formalities are handled, and how smoothly every detail is coordinated behind the scenes — ensuring nothing interrupts your time on the water.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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
              From arrival to departure,{" "}
              <span className="italic text-[var(--color-navy)]/45">everything is managed for you.</span>
            </h2>
            {[
              "Your time in Sri Lanka remains seamless, private, and uninterrupted. Whether you are pausing for a short break along your passage or navigating through the East of Asia, our role is simple — to be the reliable partner you can count on at every port of call.",
              "With dedicated support in Colombo and Galle, every arrival and departure is handled with consistency, clarity, and care.",
              "This philosophy has guided Magnate Yachts from the very beginning. Founded by Achintha Hewagamage, the company was built on a simple belief: exceptional service should feel effortless. Today, that commitment is reflected in the trust placed in us to handle over 80% of yacht arrivals into Sri Lanka — making Magnate Yachts Sri Lanka's leading yacht agency.",
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
        <div className="container-site py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CREDENTIALS.map(({ label, detail }, i) => (
              <Reveal
                key={label}
                delay={i * 0.08}
                className="p-7 md:p-8 flex flex-col gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12]"
              >
                <p
                  className="text-[9.5px] font-medium uppercase tracking-[0.28em] text-[var(--color-amber)]"
                  style={{ fontFamily: "var(--font-accent)" }}
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

      {/* ── Port image ────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-10">
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
              Galle harbour, Sri Lanka.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-10 md:py-14 flex flex-col sm:flex-row items-start sm:items-center gap-10 justify-between">
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
