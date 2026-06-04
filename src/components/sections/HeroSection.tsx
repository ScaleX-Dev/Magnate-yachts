import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-navy)]">
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <ImgPlaceholder
          label="Hero — Aerial yacht, golden hour, Sri Lankan coast"
          className="w-full h-full rounded-none aspect-auto"
          aspectRatio=""
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-site flex flex-col justify-end min-h-[85svh] pb-16 pt-24">
        <div className="max-w-2xl">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Anchor down.
            <br />
            Your Sri Lanka
            <br />
            experience begins here.
          </h1>
          <p className="text-white/70 text-lg mb-10 max-w-lg leading-relaxed">
            From the moment you arrive to the day you sail — one agent, one number, one call.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/trips"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-amber)] text-white text-sm font-medium tracking-wide rounded-sm hover:bg-[var(--color-amber-light)] transition-colors"
            >
              Plan your stay <ArrowRight size={15} />
            </Link>
            <Link
              href="/clearance"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white text-sm font-medium tracking-wide rounded-sm hover:border-white hover:bg-white/10 transition-colors"
            >
              Arrange Clearance <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
