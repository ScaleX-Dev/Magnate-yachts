const PILLARS = [
  {
    tag: "01 · On arrival",
    title: "Before you've finished tying up.",
    items: [
      "Clearance, immigration, customs, port authority",
      "Berthing coordinated ahead of time",
      "Met on the dock at Galle or Trincomalee",
      "Paperwork done as quickly as the system allows",
    ],
  },
  {
    tag: "02 · At stay",
    title: "Your week ashore, and the boat in between.",
    items: [
      "A trip across the island, shaped to your crew",
      "Trusted drivers, handpicked stays",
      "Recommendations from people who actually live here",
      "Provisioning, fuel, gas, water, repairs — as the boat needs",
    ],
  },
  {
    tag: "03 · On departure",
    title: "Out cleanly, on your timetable.",
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
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--color-ivory-dark)] border border-[var(--color-ivory-dark)]">
          {PILLARS.map(({ tag, title, items }) => (
            <div key={tag} className="bg-white p-8 flex flex-col gap-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
