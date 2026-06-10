import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

export function HeroSection() {
  return (
    <section className="bg-[var(--color-ivory)]">
      {/* Full-width hero image */}
      <div className="w-full">
        <ImgPlaceholder
          label="1 main image — Sri Lanka moment. Tea country at dawn. with elephant. at Sigiriya at sunrise. full mixed, elevated to breathe, ↑"
          aspectRatio="aspect-[16/7]"
          className="rounded-none w-full"
        />
      </div>

      {/* Headline + CTAs sit below the image */}
      <div className="container-site pt-12 pb-16">
        <div className="max-w-2xl">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight text-[var(--color-navy)] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Anchor down.
            <br />
            Your Sri Lanka
            <br />
            experience begins here.
          </h1>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/trips"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-amber)] text-white text-sm font-medium tracking-wide rounded-sm hover:bg-[var(--color-amber-light)] transition-colors"
            >
              Plan your stay <ArrowRight size={15} />
            </Link>
            <Link
              href="/clearance"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--color-navy)]/30 text-[var(--color-navy)] text-sm font-medium tracking-wide rounded-sm hover:border-[var(--color-navy)] hover:bg-[var(--color-navy)]/5 transition-colors"
            >
              Arrange Clearance <ArrowDown size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
