import { CheckSquare, Compass, Ship } from "lucide-react";

const PILLARS = [
  {
    icon: Ship,
    tag: "On arrival",
    title: "Your agent at the dock",
    items: [
      "Clearance, immigration, customs, port authority",
      "Berthing coordinated ahead of time",
      "Paperwork done as quickly as the system allows, not a minute longer on our end",
    ],
  },
  {
    icon: Compass,
    tag: "At stay",
    title: "The island, shaped to you",
    items: [
      "A trip across the island, shaped to your crew",
      "Trusted drivers, handpicked stays",
      "Recommendations from people who actually live here",
      "Provisioning, fuel, gas, water, repairs — the things that keep you moving",
    ],
  },
  {
    icon: CheckSquare,
    tag: "On departure",
    title: "Clear out, on your timetable",
    items: [
      "Clear-out formalities lodged with the port",
      "Departure paperwork ready before you sail",
      "Marine logistics — fuel, ice, provisions — on the dockside",
      "A clean handover for the next passage",
    ],
  },
];

export function ServicePillars() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="container-site py-20">
        {/* Intro */}
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-4">
            The team · the whole stop
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-navy)] leading-tight mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From the moment you anchor down to the day you sail — every need on your boat, and on the island, handled by the same small team.
          </h2>
          <p className="text-sm text-[var(--color-navy)]/60 leading-relaxed">
            You won&apos;t be passed between an agent for paperwork, a separate driver for the hills, and a tour operator who doesn&apos;t know your boat. One number, one team, from your first call on VHF&nbsp;16 to the moment you clear out.
          </p>
        </div>

        {/* Pillar grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-ivory-dark)] border border-[var(--color-ivory-dark)] rounded-sm overflow-hidden">
          {PILLARS.map(({ icon: Icon, tag, title, items }) => (
            <div
              key={tag}
              className="bg-[var(--color-ivory)] p-8 flex flex-col gap-5"
            >
              <div className="flex items-start gap-3">
                <Icon size={16} className="text-[var(--color-amber)] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)]">
                  {tag}
                </span>
              </div>
              <h3
                className="text-xl font-semibold text-[var(--color-navy)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-[var(--color-navy)]/70 leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-amber)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--color-navy)]/50 italic">
          One agent for the boat. One agent for the island. One number to call.
        </p>
      </div>
    </section>
  );
}
