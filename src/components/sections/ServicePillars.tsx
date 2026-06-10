const PILLARS = [
  {
    tag: "On arrival",
    title: "Your agent at the dock",
    items: [
      "Clearance, immigration, customs, port authority",
      "Berthing coordinated ahead of time",
      "Man on the dock not a minute longer than necessary",
      "Paperwork done as quickly as the system allows",
    ],
  },
  {
    tag: "At stay",
    title: "The island, shaped to you",
    items: [
      "A trip across the island, shaped to your crew",
      "Trusted drivers, handpicked stays",
      "Recommendations from people who actually live here",
      "Provisioning, fuel, gas, water, repairs",
    ],
  },
  {
    tag: "On departure",
    title: "Clear out, on your timetable",
    items: [
      "Clear-out formalities lodged with the port",
      "Departure paperwork ready before you sail",
      "Marine logistics on the dockside",
      "A clean handover for the next passage",
    ],
  },
];

export function ServicePillars() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="container-site py-20 lg:py-28">

        {/* Intro */}
        <div className="mb-14 max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-5">
            The team · the whole stop
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-navy)] leading-[1.15] mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From the moment you anchor down to the day you sail — every need on your boat, and on the island, handled by the same small team.
          </h2>
          <p className="text-sm text-[var(--color-navy)]/55 leading-relaxed">
            You won&apos;t be passed between an agent for paperwork, a separate driver for the hills, and a tour operator who doesn&apos;t know your boat. One number, one team, from your first call on VHF&nbsp;16 to the moment you clear out.
          </p>
        </div>

        {/* Pillar grid */}
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

        <p className="mt-7 text-center text-[13px] text-[var(--color-navy)]/40 italic" style={{ fontFamily: "var(--font-display)" }}>
          One agent for the boat. One agent for the island. One number to call.
        </p>
      </div>
    </section>
  );
}
