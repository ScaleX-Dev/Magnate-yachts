import { Reveal } from "@/components/ui/Reveal";

const PILLARS = [
  {
    number: "01",
    tag: "01 · On arrival",
    label: "On arrival",
    title: "Before you've finished tying up.",
    bg: "bg-white",
    items: [
      "Clearance, immigration, customs, port authority",
      "Berthing coordinated ahead of time",
      "Met on the dock at Galle or Trincomalee",
      "Paperwork done as quickly as the system allows",
    ],
  },
  {
    number: "02",
    tag: "02 · At stay",
    label: "At stay",
    title: "Your week ashore, and the boat in between.",
    bg: "bg-[var(--color-ivory-dark)]",
    items: [
      "A trip across the island, shaped to your crew",
      "Trusted drivers, handpicked stays",
      "Recommendations from people who actually live here",
      "Provisioning, fuel, gas, water, repairs — as the boat needs",
    ],
  },
  {
    number: "03",
    tag: "03 · On departure",
    label: "On departure",
    title: "Out cleanly, on your timetable.",
    bg: "bg-white",
    items: [
      "Clear-out formalities lodged with the authorities",
      "Departure paperwork ready before you sail",
      "Last-mile logistics — fuel, ice, provisions",
      "A clean handover for the next passage",
    ],
  },
];

export function ServicePillars() {
  return (
    <section className="bg-[var(--color-ivory)]">

      {/* Mobile / tablet — stacked, big numerals */}
      <div className="lg:hidden flex flex-col">
        {PILLARS.map(({ number, label, title, bg, items }, i) => (
          <div key={number} className={bg}>
            <Reveal className="container-site py-8" delay={i * 0.05}>
              <span
                className="block text-7xl text-[var(--color-amber)] leading-none mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {number}
              </span>
              <h3
                className="text-3xl font-medium text-[var(--color-navy)] leading-tight mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {label}
              </h3>
              <p
                className="text-base text-[var(--color-navy)]/45 mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </p>
              <div className="w-8 h-px bg-[var(--color-amber)] mb-6" />
              <ul className="flex flex-col">
                {items.map((item) => (
                  <li
                    key={item}
                    className="py-4 border-b border-[var(--color-navy)]/[0.08] last:border-b-0 text-[15px] text-[var(--color-navy)]/70 leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>

      {/* Desktop — card grid */}
      <div className="hidden lg:block container-site py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map(({ tag, title, items }, i) => (
            <Reveal
              key={tag}
              delay={i * 0.1}
              className="rounded-2xl border border-[var(--color-ivory-dark)] bg-white p-8 flex flex-col gap-6 transition-all duration-300 hover:border-[var(--color-navy)]/15 hover:shadow-[0_16px_40px_-20px_rgba(11,31,58,0.18)] hover:-translate-y-1 relative hover:z-10"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)]">
                  {tag}
                </span>
              </div>
              <h3
                className="text-xl font-semibold text-[var(--color-navy)] leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h3>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 text-[13.5px] text-[var(--color-navy)]/60 leading-relaxed">
                    <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[var(--color-amber)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
