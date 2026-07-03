import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative bg-[var(--color-navy)] overflow-hidden">
      {/* Atmospheric gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 140% 80% at -10% 50%, rgba(30, 146, 146, 0.07) 0%, transparent 55%),
            radial-gradient(ellipse 80% 100% at 110% 50%, rgba(196, 146, 74, 0.05) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative z-10 container-site py-24 md:py-32 lg:py-40">
        <Reveal y={30} className="max-w-3xl">
          <h2
            className="text-[clamp(2rem,6vw,4.5rem)] font-light text-white leading-[1.1] mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            When you have an arrival window —
            <br />
            <span className="italic text-white/40">even a rough one —</span>
            <br />
            drop us a note.
          </h2>

          <p
            className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-light italic text-[var(--color-amber)]/70 leading-[1.1] mb-12 md:mb-14"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We&apos;ll meet your boat.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[var(--color-navy)] text-[13.5px] font-medium tracking-wide hover:bg-[var(--color-ivory)] hover:shadow-[0_16px_48px_-8px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.97]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Send a message
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="mailto:hello@magnateyachts.com"
              className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white/65 text-[13.5px] font-medium tracking-wide hover:border-white/35 hover:text-white hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.97]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Email us
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <p
            className="mt-8 text-[12px] text-white/25 tracking-wide"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Or VHF&nbsp;16&nbsp;&nbsp;·&nbsp;&nbsp;WhatsApp&nbsp;+94&nbsp;···
          </p>
        </Reveal>
      </div>
    </section>
  );
}
