import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-[var(--color-navy)]">
      <div className="container-site py-24 lg:py-32">
        <div className="max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.15] mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            When you have an arrival window — even a rough one — drop us a note.
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-10">
            We&apos;ll meet your boat. Everything from there is handled.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              arrow
              className="bg-white text-[var(--color-navy)] hover:bg-white/90"
            >
              Send a message
            </Button>
            <Button
              href="mailto:hello@magnateyachts.com"
              variant="outline"
              size="lg"
              arrow
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Email us
            </Button>
          </div>
          <p className="mt-8 text-[13px] text-white/40">
            Or VHF&nbsp;16 · WhatsApp&nbsp;+94&nbsp;···
          </p>
        </div>
      </div>
    </section>
  );
}
