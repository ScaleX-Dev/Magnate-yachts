import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Ship,
  Clock,
  MapPin,
  DollarSign,
} from "lucide-react";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Yacht Clearance — Magnate Yachts Sri Lanka",
  description:
    "Licensed clearance agent for Galle and Trincomalee. Fixed published fee. We meet your boat.",
};

const INCLUDED = [
  "Pre-arrival documentation filed with port authority",
  "Meet the boat — agent on the dock on arrival",
  "Immigration check-in formalities",
  "Customs declaration assistance",
  "Sri Lanka Ports Authority (SLPA) entry fee handling",
  "Berth coordination ahead of arrival",
  "Clear-out on departure — all port paperwork lodged",
  "Post-clearance confirmation documents",
];

const DOCS_REQUIRED = [
  {
    icon: FileText,
    title: "Ship's papers",
    items: ["Certificate of Registry", "Ship Radio Licence", "Insurance certificate"],
  },
  {
    icon: Ship,
    title: "Crew documents",
    items: ["Passports (all crew + guests)", "Crew list (captain to complete)", "Yellow fever vaccination if arriving from endemic area"],
  },
  {
    icon: MapPin,
    title: "Port clearance",
    items: ["Clearance from last port of call", "Crew transit logbook"],
  },
];

const STEPS = [
  {
    n: "01",
    title: "Make contact",
    body: "Drop us a message — arrival window, number of crew, your last port. We file a pre-arrival notification with the authority.",
  },
  {
    n: "02",
    title: "VHF 16 on approach",
    body: "Call us on VHF 16 when you're an hour out. We'll confirm berth and confirm a team member is dockside.",
  },
  {
    n: "03",
    title: "We do the paperwork",
    body: "Immigration, customs and port authority officials come to the berth. You're not standing in any queue.",
  },
  {
    n: "04",
    title: "You're cleared",
    body: "You receive your valid-stay documentation. From here you're free — ashore or on the water.",
  },
];

export default function ClearancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-navy)] overflow-hidden">
        <ImgPlaceholder
          label="Photograph — Galle harbour from above, dawn light"
          aspectRatio="aspect-[21/7]"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative container-site py-24 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-4">
            Yacht clearance — Galle · Trincomalee
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-3xl mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We meet your boat. Everything from there is handled.
          </h1>
          <p className="text-white/60 max-w-xl text-base mb-8 leading-relaxed">
            Licensed clearance agent in both entry ports. Fixed, published fee — no negotiation, no surprises. From the moment you anchor to the day you sail.
          </p>
          <Button href="#arrange" variant="primary" size="lg" arrow>
            Arrange clearance
          </Button>
        </div>
      </section>

      {/* Pricing card + included */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pricing */}
            <div className="bg-white border border-[var(--color-ivory-dark)] rounded-sm p-8 flex flex-col gap-5 lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)]">
                Clearance fee
              </p>
              <div>
                <p
                  className="text-5xl font-semibold text-[var(--color-navy)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  US $—
                </p>
                <p className="text-sm text-[var(--color-navy)]/50 mt-1">
                  per vessel, arrival + departure clearance
                </p>
              </div>
              <hr className="border-[var(--color-ivory-dark)]" />
              <p className="text-xs text-[var(--color-navy)]/50 leading-relaxed">
                Additional port authority dues, SLPA harbour fees and government levies are charged separately at exact cost — no markup.
              </p>
              <Button href="#arrange" variant="primary" size="md" arrow>
                Arrange now
              </Button>
            </div>

            {/* What's included */}
            <div className="lg:col-span-2">
              <h2
                className="text-2xl font-semibold text-[var(--color-navy)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What&apos;s included
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[var(--color-navy)]/70 leading-relaxed">
                    <CheckCircle2 size={16} className="text-[var(--color-amber)] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Required docs */}
      <section className="bg-white">
        <div className="container-site py-20">
          <h2
            className="text-2xl font-semibold text-[var(--color-navy)] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Documents you&apos;ll need
          </h2>
          <p className="text-sm text-[var(--color-navy)]/60 mb-10 max-w-xl">
            Have these ready before you arrive. We&apos;ll send you the full checklist when you get in touch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DOCS_REQUIRED.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="border border-[var(--color-ivory-dark)] rounded-sm p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <Icon size={16} className="text-[var(--color-amber)]" />
                  <h3 className="font-semibold text-[var(--color-navy)] text-sm">{title}</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-[var(--color-navy)]/60 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-amber)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How arrival works */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-20">
          <h2
            className="text-2xl font-semibold text-[var(--color-navy)] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How arrival works
          </h2>
          <p className="text-sm text-[var(--color-navy)]/60 mb-12 max-w-xl">
            Four steps. The whole thing, from first contact to cleared status.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(({ n, title, body }) => (
              <div key={n} className="flex flex-col gap-3">
                <span
                  className="text-5xl font-semibold text-[var(--color-amber)]/30 leading-none"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {n}
                </span>
                <h3 className="font-semibold text-[var(--color-navy)]">{title}</h3>
                <p className="text-sm text-[var(--color-navy)]/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trip upsell */}
      <section className="bg-[var(--color-navy)]">
        <div className="container-site py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-3">
                While you&apos;re here
              </p>
              <h2
                className="text-2xl sm:text-3xl font-semibold text-white mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                If you&apos;ve got a week — the island is worth the walk off the boat.
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                We build the trip around your crew. Trusted drivers, handpicked stays — from the tea country to Sigiriya. The same team that clears your boat takes care of the rest.
              </p>
            </div>
            <Button href="/trips" variant="outline" size="lg" arrow>
              See our trips
            </Button>
          </div>
        </div>
      </section>

      {/* Arrange form anchor */}
      <section id="arrange" className="bg-[var(--color-ivory-dark)]">
        <div className="container-site py-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-4">
              Get in touch
            </p>
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[var(--color-navy)] mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tell us your arrival window.
            </h2>
            <p className="text-sm text-[var(--color-navy)]/60 mb-8">
              Even a rough estimate is enough to start. We&apos;ll do the rest.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-navy)] text-white text-sm font-medium rounded-sm hover:bg-[var(--color-navy-dark)] transition-colors"
            >
              Go to contact form <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
