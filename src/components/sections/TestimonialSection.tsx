export function TestimonialSection() {
  return (
    <section className="bg-white">
      <div className="container-site py-20">
        <blockquote className="flex flex-col gap-6 max-w-3xl">
          <p
            className="text-3xl sm:text-4xl font-light text-[var(--color-navy)] leading-snug"
            style={{ fontFamily: "var(--font-display)" }}
          >
            &ldquo;We&apos;d planned to stop in Galle for fuel. We stayed three weeks. The kids are
            still asking when we go back.&rdquo;
          </p>
          <footer>
            <p className="text-sm font-semibold text-[var(--color-navy)]">Jojo Marcum</p>
            <p className="text-xs text-[var(--color-navy)]/50">Australia · mid-passage Indian Ocean</p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
