import { Reveal } from "@/components/ui/Reveal";

export function TestimonialSection() {
  return (
    <section className="overflow-hidden relative" style={{ backgroundImage: [
      "radial-gradient(ellipse 70% 65% at 110%  -5%, #142840 0%, #09182A 55%, transparent 78%)",
      "radial-gradient(ellipse 55% 50% at  -5% 110%, #0E2038 0%, #081526 55%, transparent 78%)",
      "radial-gradient(ellipse 45% 40% at  85%  88%, rgba(196,146,74,0.06) 0%, transparent 65%)",
      "radial-gradient(ellipse 60% 55% at  50%  50%, rgba(8,16,28,0.7)    0%, transparent 80%)",
      "linear-gradient(160deg, #06101A 0%, #060C18 100%)",
    ].join(", ") }}>

      <div className="relative z-10 container-site py-16 md:py-24 lg:py-28">
        <Reveal y={30}>
          <div className="max-w-4xl">
            <div className="w-10 h-px bg-[var(--color-amber)]/50 mb-12 md:mb-16" />

            <blockquote>
              <p
                className="text-[clamp(1.65rem,3.8vw,3rem)] font-light italic text-white/85 leading-[1.4] mb-12 md:mb-14"
                style={{ fontFamily: "var(--font-display)" }}
              >
                We&apos;d planned to stop in Galle for fuel. We stayed three weeks. The kids are still asking when we go back.
              </p>
              <footer className="flex items-center gap-5">
                <div className="w-8 h-px bg-[var(--color-amber)]/30 flex-shrink-0" />
                <div>
                  <p
                    className="text-[15px] font-medium text-white/70"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    s/y Halcyon
                  </p>
                  <p
                    className="text-[11.5px] text-white/28 mt-1 tracking-wide"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Australia · mid-passage Indian Ocean
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
