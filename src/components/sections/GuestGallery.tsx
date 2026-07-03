import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

const PHOTOS = [
  {
    label: "Crew aboard at anchor, Galle harbour",
    tall: false,
    src: "/images/site/clearance-harbour.jpg",
  },
  {
    label: "Elephant safari, Udawalawe National Park",
    tall: true,
    src: "/images/site/gallery-elephant-safari.jpg",
  },
  {
    label: "Nine Arch Bridge at sunrise, Ella",
    tall: false,
    src: "/images/site/3day-day2-ella.jpg",
  },
  {
    label: "Galle Fort lighthouse, southern coast",
    tall: false,
    src: "/images/site/gallery-galle-street.jpg",
  },
  {
    label: "Sigiriya rock fortress at sunrise",
    tall: true,
    src: "/images/site/gallery-sigiriya.jpg",
  },
  {
    label: "Tea country, central Sri Lanka",
    tall: false,
    src: "/images/site/gallery-tea-country.jpg",
  },
];

export function GuestGallery() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="container-site py-20 lg:py-28">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-10">
          From our guests&apos; albums
        </p>

        <div className="columns-2 sm:columns-3 gap-3 [&>*]:mb-3">
          {PHOTOS.map(({ label, tall, src }) => (
            <div key={label} className="break-inside-avoid">
              <ImgPlaceholder
                src={src}
                label={label}
                aspectRatio={tall ? "aspect-[3/4]" : "aspect-[4/3]"}
                className="rounded-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
