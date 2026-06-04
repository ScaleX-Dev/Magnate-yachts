import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

export function PortsSection() {
  return (
    <section className="bg-white">
      <div className="container-site py-20">
        <h2
          className="text-3xl sm:text-4xl font-semibold text-[var(--color-navy)] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Two doors into Sri Lanka — Galle in the south, Trincomalee on the east.
        </h2>
        <p className="text-[var(--color-navy)]/60 max-w-xl mb-12 leading-relaxed">
          From either one, the same country opens up to you. VHF 16 brings you in making the day&apos;s first tea. Wild elephants at waterholes. Stone farmhouses that pre-date every expedition. If it&apos;s on your chart, all of it is closer than you think.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-3">
            <ImgPlaceholder label="Photograph — Galle Fort, South coast, Sri Lanka" aspectRatio="aspect-[4/3]" />
            <p className="text-sm font-semibold text-[var(--color-navy)]">Galle, South coast</p>
          </div>
          <div className="flex flex-col gap-3">
            <ImgPlaceholder label="Photograph — Trincomalee Harbour, East coast" aspectRatio="aspect-[4/3]" />
            <p className="text-sm font-semibold text-[var(--color-navy)]">Trincomalee, East coast</p>
          </div>
        </div>
      </div>
    </section>
  );
}
