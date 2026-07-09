import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const BLUR = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMxYzJiM2UiLz48L3N2Zz4=";

const INCLUDED = [
  "Immigration formalities & visa collection on arrival",
  "Customs clearance",
  "Port Authority & berthing coordination",
  "Harbour security gate passes",
  "Clear-out / departure formalities",
];

export function ClearanceSection() {
  return (
    <section className="bg-[var(--color-navy)]">
      <div className="container-site py-14 md:py-18 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: image */}
          <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ borderRadius: "20px", boxShadow: "0 32px 80px -20px rgba(6,12,24,0.6), 0 0 0 1px rgba(42,125,168,0.2)" }}>
            <Image
              src="/images/site/clearance-harbour.jpg"
              alt="Sailing yachts moored in Galle harbour"
              fill
              placeholder="blur"
              blurDataURL={BLUR}
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Blue overlay tint */}
            <div className="absolute inset-0" style={{ background: "rgba(7,24,36,0.25)", mixBlendMode: "multiply" }} />
          </div>
          </Reveal>

          {/* Right: content */}
          <Reveal delay={0.1} className="flex flex-col gap-8">
            <div>
              <h2
                className="text-[clamp(1.8rem,4.5vw,3.25rem)] font-light text-white leading-[1.15] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Seamless Yacht Clearance
                <br />
                <span style={{ color: "var(--color-clearance)", fontStyle: "italic" }}>in Sri Lanka</span>
              </h2>
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)" }}
              >
                All formalities are handled swiftly, so your crew can stay at ease.
              </p>
            </div>

            <ul className="flex flex-col" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              {INCLUDED.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-4 py-3"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <span
                    className="text-[10px] font-medium shrink-0 mt-[3px] tabular-nums"
                    style={{ color: "var(--color-clearance)", fontFamily: "var(--font-body)", minWidth: "16px" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/clearance"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-[13.5px] font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--color-clearance)", fontFamily: "var(--font-body)", boxShadow: "0 8px 28px -8px rgba(42,125,168,0.5)" }}
              >
                Clearance details
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/book"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-medium transition-all duration-300"
                style={{ border: "1px solid rgba(42,125,168,0.35)", color: "rgba(91,184,232,0.8)", fontFamily: "var(--font-body)" }}
              >
                Book agent
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
