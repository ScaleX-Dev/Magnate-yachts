import { Reveal } from "@/components/ui/Reveal";

export function TestimonialSection() {
  return (
    <section className="bg-[var(--color-midnight)] overflow-hidden relative">
      {/* Subtle gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 120% 60% at 80% 50%, rgba(196, 146, 74, 0.04) 0%, transparent 60%)`,
        }}
      />

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
