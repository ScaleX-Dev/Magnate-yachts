import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-[var(--color-navy)]">
      <div className="container-site py-24 flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          When you have an arrival window — even a rough one — drop us a note.
        </h2>
        <p className="text-white/60 text-sm leading-relaxed">
          We&apos;ll meet your boat.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/contact" variant="primary" size="lg" arrow>
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
        <p className="text-white/30 text-xs">VHF 16 · Channel 16</p>
      </div>
    </section>
  );
}
