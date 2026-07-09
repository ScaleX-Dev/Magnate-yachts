import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

export function PortsSection() {
  return (
    <section className="bg-white">
      <div className="container-site py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Text */}
          <div>
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] font-light text-[var(--color-navy)] leading-[1.1] mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Two doors into Sri Lanka — Galle in the south, Trincomalee on the east.
            </h2>
            <p className="text-sm text-[var(--color-navy)]/55 leading-relaxed max-w-lg">
              From either one, the same country opens up to you. VHF&nbsp;16 brings you in making the day&apos;s first tea. Wild elephants at waterholes. Stone farmhouses that pre-date every expedition. If it&apos;s on your chart, all of it is closer than you think.
            </p>
          </div>

          {/* Ports */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-3">
              <ImgPlaceholder
                label="Photograph — Galle Fort, South coast, Sri Lanka"
                aspectRatio="aspect-[4/3]"
                className="rounded-none"
              />
              <div>
                <p className="text-sm font-semibold text-[var(--color-navy)]">Galle</p>
                <p className="text-xs text-[var(--color-navy)]/45 mt-0.5">South coast · primary port</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <ImgPlaceholder
                label="Photograph — Trincomalee harbour, East coast, Sri Lanka"
                aspectRatio="aspect-[4/3]"
                className="rounded-none"
              />
              <div>
                <p className="text-sm font-semibold text-[var(--color-navy)]">Trincomalee</p>
                <p className="text-xs text-[var(--color-navy)]/45 mt-0.5">East coast · natural harbour</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
