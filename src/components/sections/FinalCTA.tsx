import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="bg-[var(--color-navy)]">
      <div className="container-site py-14 lg:py-20">
        <Reveal className="max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.15] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            When you have an arrival window — even a rough one — drop us a note.
          </h2>
          <h3
            className="text-2xl sm:text-3xl font-semibold text-white leading-[1.15] mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We&apos;ll meet your boat.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              arrow
              className="bg-white text-[var(--color-navy)] hover:bg-white/90 w-full sm:w-auto justify-center"
            >
              Send a message
            </Button>
            <Button
              href="mailto:hello@magnateyachts.com"
              variant="outline"
              size="lg"
              arrow
              className="border-white/30 text-white hover:bg-white/10 hover:text-white w-full sm:w-auto justify-center"
            >
              Email us
            </Button>
          </div>
          <p className="mt-8 text-[13px] text-white/40">
            Or VHF&nbsp;16 · WhatsApp&nbsp;+94&nbsp;···
          </p>
        </Reveal>
      </div>
    </section>
  );
}
