import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";

const PHOTOS = [
  {
    label: "Crew aboard at anchor, Galle harbour",
    tall: false,
    src: "https://images.unsplash.com/photo-1656347440710-70039fa0bd0a?w=800&auto=format&fit=crop&q=80",
  },
  {
    label: "Elephant safari, Udawalawe National Park",
    tall: true,
    src: "https://images.unsplash.com/photo-1551189014-fe516b2fe26e?w=800&auto=format&fit=crop&q=80",
  },
  {
    label: "Nine Arch Bridge at sunrise, Ella",
    tall: false,
    src: "https://images.unsplash.com/photo-1583393514703-95048c56bed0?w=800&auto=format&fit=crop&q=80",
  },
  {
    label: "Galle Fort lighthouse, southern coast",
    tall: false,
    src: "https://images.unsplash.com/photo-1606820854416-439b3305ff39?w=800&auto=format&fit=crop&q=80",
  },
  {
    label: "Sigiriya rock fortress at sunrise",
    tall: true,
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop&q=80",
  },
  {
    label: "Tea country, central Sri Lanka",
    tall: false,
    src: "https://images.unsplash.com/photo-1559095174-bfb4a7f19e02?w=800&auto=format&fit=crop&q=80",
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
