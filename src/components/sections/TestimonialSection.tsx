export function TestimonialSection() {
  return (
    <section className="bg-white">
      <div className="container-site py-20 lg:py-28">
        <div className="max-w-3xl">
          <blockquote className="flex flex-col gap-7">
            <p
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-[var(--color-navy)] leading-[1.2]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &ldquo;We&apos;d planned to stop in Galle for fuel. We stayed three weeks. The kids are still asking when we go back.&rdquo;
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-8 h-px bg-[var(--color-navy)]/15" />
              <div>
                <p className="text-sm font-semibold text-[var(--color-navy)]">Jojo Marcum</p>
                <p className="text-xs text-[var(--color-navy)]/45 mt-0.5">Australia · mid-passage Indian Ocean</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
