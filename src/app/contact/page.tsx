"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Radio } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  vessel: z.string().min(1, "Please enter your vessel name"),
  port: z.enum(["galle", "trincomalee", "unsure"]),
  arrivalWindow: z.string().min(3, "Please give us an approximate arrival window"),
  crewCount: z.string().min(1, "Please indicate crew count"),
  message: z.string().optional(),
  enquiryType: z.enum(["clearance", "trip", "both", "other"]),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { enquiryType: "clearance" },
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise(r => setTimeout(r, 600));
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-ivory)]">
        <div className="container-site py-20 lg:py-28">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-5">
            Get in touch
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold text-[var(--color-navy)] max-w-2xl leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tell us your arrival window. Even a rough one.
          </h1>
          <p className="text-[var(--color-navy)]/55 max-w-md text-sm leading-relaxed">
            We&apos;ll reach out within 24 hours — usually much sooner.
          </p>
        </div>
      </section>

      {/* ── Form + sidebar ─────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="container-site py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col gap-5 py-8">
                <CheckCircle2 size={28} className="text-[var(--color-amber)]" />
                <h2
                  className="text-2xl font-semibold text-[var(--color-navy)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Got it — we&apos;ll be in touch.
                </h2>
                <p className="text-sm text-[var(--color-navy)]/55 leading-relaxed max-w-md">
                  Expect a reply within 24 hours. If your arrival window is within the next 48 hours, call us directly on VHF&nbsp;16 or WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

                {/* Enquiry type */}
                <fieldset>
                  <legend className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-navy)]/45 mb-4">
                    I&apos;m enquiring about
                  </legend>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { value: "clearance", label: "Clearance" },
                      { value: "trip",      label: "A trip" },
                      { value: "both",      label: "Both" },
                      { value: "other",     label: "Something else" },
                    ].map(({ value, label }) => (
                      <label key={value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value={value}
                          {...register("enquiryType")}
                          className="accent-[var(--color-amber)] w-3.5 h-3.5"
                        />
                        <span className="text-sm text-[var(--color-navy)]">{label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Name + email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Your name" error={errors.name?.message}>
                    <input {...register("name")} placeholder="Captain or crew" className={inputCls(!!errors.name)} />
                  </Field>
                  <Field label="Email address" error={errors.email?.message}>
                    <input {...register("email")} type="email" placeholder="you@yourboat.com" className={inputCls(!!errors.email)} />
                  </Field>
                </div>

                {/* Vessel + crew */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Vessel name" error={errors.vessel?.message}>
                    <input {...register("vessel")} placeholder="S/V …" className={inputCls(!!errors.vessel)} />
                  </Field>
                  <Field label="Number of crew and guests" error={errors.crewCount?.message}>
                    <input {...register("crewCount")} placeholder="e.g. 2 crew + 3 guests" className={inputCls(!!errors.crewCount)} />
                  </Field>
                </div>

                {/* Port */}
                <Field label="Entry port" error={errors.port?.message}>
                  <select {...register("port")} className={inputCls(!!errors.port)}>
                    <option value="">Select …</option>
                    <option value="galle">Galle (south coast)</option>
                    <option value="trincomalee">Trincomalee (east coast)</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </Field>

                {/* Arrival window */}
                <Field
                  label="Approximate arrival window"
                  error={errors.arrivalWindow?.message}
                  hint="A rough date range is fine — e.g. 'mid-January 2026'"
                >
                  <input {...register("arrivalWindow")} placeholder="e.g. mid-January 2026, or 10–20 Feb" className={inputCls(!!errors.arrivalWindow)} />
                </Field>

                {/* Message */}
                <Field label="Anything else we should know?" optional>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Last port of call, specific requests, questions about the island…"
                    className={inputCls(false) + " resize-none"}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-navy)] text-white text-sm font-medium hover:bg-[var(--color-navy-dark)] disabled:opacity-50 transition-colors self-start"
                >
                  {isSubmitting ? "Sending…" : "Send enquiry"}
                  {!isSubmitting && <ArrowRight size={14} />}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-7 lg:pl-5 lg:border-l lg:border-[var(--color-ivory-dark)]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-amber)] mb-5">
                Other ways to reach us
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3 text-sm text-[var(--color-navy)]/65">
                  <MessageCircle size={14} className="text-[var(--color-amber)] shrink-0 mt-0.5" />
                  <span>
                    WhatsApp:{" "}
                    <a
                      href="https://wa.me/94XXXXXXXXX"
                      className="text-[var(--color-navy)] underline underline-offset-2 hover:text-[var(--color-amber)] transition-colors"
                    >
                      +94 XX XXX XXXX
                    </a>
                  </span>
                </li>
                <li className="flex gap-3 text-sm text-[var(--color-navy)]/65">
                  <Radio size={14} className="text-[var(--color-amber)] shrink-0 mt-0.5" />
                  VHF Channel 16 on approach
                </li>
                <li className="flex gap-3 text-sm text-[var(--color-navy)]/65">
                  <MapPin size={14} className="text-[var(--color-amber)] shrink-0 mt-0.5" />
                  Galle and Trincomalee harbours
                </li>
              </ul>
            </div>
            <div className="border-t border-[var(--color-ivory-dark)] pt-6">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-navy)]/35 mb-3">
                Response time
              </p>
              <p className="text-sm text-[var(--color-navy)]/55 leading-relaxed">
                We reply to all enquiries within 24 hours — usually much sooner. If you&apos;re arriving within 48 hours, please WhatsApp or call VHF&nbsp;16 directly.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function inputCls(hasError: boolean) {
  return [
    "w-full px-4 py-3 text-sm bg-[var(--color-ivory)] border text-[var(--color-navy)] placeholder:text-[var(--color-navy)]/35 focus:outline-none focus:border-[var(--color-navy)] transition-colors",
    hasError ? "border-red-400" : "border-[var(--color-ivory-dark)]",
  ].join(" ");
}

function Field({
  label,
  error,
  hint,
  optional,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-medium text-[var(--color-navy)]">
        {label}
        {optional && <span className="text-[var(--color-navy)]/35 ml-1">(optional)</span>}
      </label>
      {children}
      {hint && !error && <p className="text-[11px] text-[var(--color-navy)]/40">{hint}</p>}
      {error && <p className="text-[11px] text-red-500">{error}</p>}
    </div>
  );
}
