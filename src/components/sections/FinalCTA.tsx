import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundImage: [
      "radial-gradient(ellipse 62% 70% at -6% 50%,   #1A3B6A 0%, #0D2244 52%, transparent 76%)",
      "radial-gradient(ellipse 58% 65% at 106% 50%,  #152E58 0%, #0B1E3A 55%, transparent 78%)",
      "radial-gradient(ellipse 40% 40% at  2%   2%,  rgba(38,80,160,0.22) 0%, transparent 60%)",
      "radial-gradient(ellipse 38% 38% at 98%  98%,  rgba(196,146,74,0.07) 0%, transparent 60%)",
      "radial-gradient(ellipse 55% 50% at 50%  50%,  rgba(12,25,48,0.65)  0%, transparent 80%)",
      "linear-gradient(160deg, #0F1D33 0%, #0C1828 100%)",
    ].join(", ") }}>

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
              href="mailto:info@magnateyachts.com"
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
            Or WhatsApp&nbsp;+94&nbsp;76&nbsp;985&nbsp;0115
          </p>
        </Reveal>
      </div>
    </section>
  );
}
