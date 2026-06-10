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
            <Button href="/book" variant="primary" size="lg" arrow>
              Plan your stay
            </Button>
            <Button
              href="https://wa.me/94XXXXXXXXX"
              variant="outline"
              size="lg"
              arrow
            >
              Message on WhatsApp
            </Button>
          </div>
          <p className="mt-8 text-[11px] text-white/20 uppercase tracking-widest">
            VHF&nbsp;16 · Channel 16 monitored
          </p>
        </div>
      </div>
    </section>
  );
}
