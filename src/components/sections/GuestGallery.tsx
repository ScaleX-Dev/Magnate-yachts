import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

const PHOTOS = [
  { label: "Crew aboard at anchor, Galle harbour", tall: false },
  { label: "Elephant safari, Udawalawe National Park", tall: true },
  { label: "Ella Rock sunrise, tea country", tall: false },
  { label: "Street food, Galle Fort market", tall: false },
  { label: "Dambulla cave temples, central Sri Lanka", tall: true },
  { label: "Trincomalee beach, East coast", tall: false },
];

export function GuestGallery() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="container-site py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-4">
          From our guests&apos; albums
        </p>
        <h2
          className="text-2xl sm:text-3xl font-semibold text-[var(--color-navy)] mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The country they came back from.
        </h2>

        {/* Masonry grid (CSS columns approach) */}
        <div className="columns-2 sm:columns-3 gap-3 [&>*]:mb-3">
          {PHOTOS.map(({ label, tall }) => (
            <div key={label} className="break-inside-avoid">
              <ImgPlaceholder
                label={label}
                aspectRatio={tall ? "aspect-[3/4]" : "aspect-[4/3]"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
