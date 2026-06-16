import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

export function HeroSection() {
  return (
    <section className="bg-[var(--color-ivory)]">
      {/* Full-width hero image */}
      <div className="container-site pt-8">
        <ImgPlaceholder
          label="Hero Image — Sri Lanka moment"
          aspectRatio="aspect-[16/9]"
        />
      </div>

      {/* Headline + CTAs */}
      <div className="container-site pt-12 pb-20">
        <div className="max-w-2xl">
          <h1
            className="text-5xl sm:text-[3.75rem] lg:text-7xl font-semibold leading-[1.08] text-[var(--color-navy)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Anchor down.<br />
            Your Sri Lanka<br />
            adventure begins here.
          </h1>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-8">
            Galle &nbsp;·&nbsp; Trincomalee
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-navy)] text-white text-sm font-medium tracking-wide hover:bg-[var(--color-navy-dark)] transition-colors duration-200"
            >
              Plan your stay <ArrowRight size={14} />
            </Link>
            <Link
              href="/clearance"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--color-navy)]/25 text-[var(--color-navy)] text-sm font-medium tracking-wide hover:border-[var(--color-navy)] hover:bg-[var(--color-navy)]/[0.04] transition-all duration-200"
            >
              Arrange Clearance <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
