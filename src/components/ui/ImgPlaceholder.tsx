import { cn } from "@/lib/utils";

interface ImgPlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: string;
}

export function ImgPlaceholder({
  label = "Photo",
  className,
  aspectRatio = "aspect-video",
}: ImgPlaceholderProps) {
  return (
    <div
      className={cn("img-placeholder w-full rounded-sm overflow-hidden", aspectRatio, className)}
      role="img"
      aria-label={label}
    >
      <span className="px-4 text-center">{label}</span>
    </div>
  );
}
