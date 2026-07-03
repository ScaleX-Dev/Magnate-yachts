import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImgPlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: string;
  src?: string;
  priority?: boolean;
}

export function ImgPlaceholder({
  label = "Photo",
  className,
  aspectRatio = "aspect-video",
  src,
  priority,
}: ImgPlaceholderProps) {
  if (src) {
    return (
      <div
        className={cn("relative w-full overflow-hidden rounded-xl", aspectRatio, className)}
      >
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>
    );
  }

  return (
    <div
      className={cn("img-placeholder w-full rounded-xl overflow-hidden", aspectRatio, className)}
      role="img"
      aria-label={label}
    >
      <span className="px-4 text-center">{label}</span>
    </div>
  );
}
