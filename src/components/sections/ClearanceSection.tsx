import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const BLUR = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMxYzJiM2UiLz48L3N2Zz4=";

const INCLUDED = [
  "Immigration formalities & visa collection on arrival",
  "Customs clearance",
  "Port Authority & berthing coordination",
  "Defence Ministry liaison",
  "Harbour security gate passes",
  "Clear-out / departure formalities",
];

export function ClearanceSection() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="container-site py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: image */}
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_32px_80px_-28px_rgba(6,12,24,0.22)]">
            <Image
              src="/images/site/clearance-harbour.jpg"
              alt="Sailing yachts moored in Galle harbour"
              fill
              placeholder="blur"
              blurDataURL={BLUR}
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>

          {/* Right: content */}
          <Reveal delay={0.1} className="flex flex-col gap-8 pt-2">
            <div>
              <h2
                className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-light text-[var(--color-navy)] leading-[1.15] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Clearance, handled.{" "}
                <span className="italic text-[var(--color-navy)]/40">
                  Met at the dock.
                </span>
              </h2>
              <p
                className="text-[14px] text-[var(--color-navy)]/55 leading-relaxed max-w-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                The mandatory part of arriving in Sri Lanka, made the easy part.
                Fixed fee, no negotiation, no surprises.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[13.5px] text-[var(--color-navy)]/60 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Check
                    size={13}
                    className="text-[var(--color-amber)] shrink-0 mt-[3px]"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/clearance"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-navy)] text-white text-[13.5px] font-medium hover:bg-[var(--color-navy-dark)] hover:shadow-[0_12px_36px_-8px_rgba(6,12,24,0.35)] hover:-translate-y-0.5 transition-all duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Clearance details
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/book"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--color-navy)]/20 text-[var(--color-navy)] text-[13.5px] font-medium hover:border-[var(--color-navy)]/40 hover:bg-[var(--color-ivory-dark)] transition-all duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Book agent
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
