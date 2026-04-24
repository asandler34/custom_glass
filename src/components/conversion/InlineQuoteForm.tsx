"use client";

import { type FormEvent, useState } from "react";
import { ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const services = [
  "Frameless shower door / enclosure",
  "Glass railing",
  "Custom mirror",
  "Glass partition / wall",
  "Glass repair / adjustment",
  "Other / not sure",
] as const;

const inputClass =
  "mt-1.5 w-full border border-charcoal/15 bg-white-pure px-3 py-2.5 font-body text-sm text-charcoal outline-none transition-colors focus:border-gold";
const selectClass = inputClass + " pr-8 appearance-none";

export function InlineQuoteForm({ heading = "Get a call back" }: { heading?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState(false);
  const [formStartedAt] = useState(() => Date.now());

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setSubmitting(true);
    const form = e.currentTarget;
    try {
      const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
      const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
      const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
      const zip = (form.elements.namedItem("zip") as HTMLInputElement).value.trim();
      const projectType = (form.elements.namedItem("projectType") as HTMLSelectElement).value;
      const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
      const website = (form.elements.namedItem("website") as HTMLInputElement).value;
      if (website) {
        setOk(true);
        return;
      }
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          zip,
          projectType,
          message: message || "—",
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/",
          formStartedAt,
        }),
      });
      if (!res.ok) throw new Error("fail");
      setOk(true);
      form.reset();
    } catch {
      setErr(`We could not send that. Please call ${BUSINESS.phoneDisplay}.`);
    } finally {
      setSubmitting(false);
    }
  }

  if (ok) {
    return (
      <p className="font-body text-sm text-charcoal" role="status">
        Thanks — we will follow up shortly. You can also call{" "}
        <a className="text-gold underline" href={`tel:${BUSINESS.phoneE164}`}>
          {BUSINESS.phoneDisplay}
        </a>
        .
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
      <h3 className="font-body text-sm font-medium uppercase tracking-widest text-gold">{heading}</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="iq-name" className="font-body text-xs text-charcoal/70">
            Name <span className="text-red-700">*</span>
          </label>
          <input id="iq-name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="iq-phone" className="font-body text-xs text-charcoal/70">
            Phone <span className="text-red-700">*</span>
          </label>
          <input id="iq-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="iq-email" className="font-body text-xs text-charcoal/70">
            Email <span className="text-red-700">*</span>
          </label>
          <input id="iq-email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="iq-zip" className="font-body text-xs text-charcoal/70">
            Zip <span className="text-red-700">*</span>
          </label>
          <input
            id="iq-zip"
            name="zip"
            inputMode="numeric"
            required
            autoComplete="postal-code"
            className={inputClass}
            pattern="[0-9A-Za-z\\-\\s]{3,10}"
            title="Zip or postal code"
          />
        </div>
      </div>
      <div>
        <label htmlFor="iq-type" className="font-body text-xs text-charcoal/70">
          Service needed <span className="text-red-700">*</span>
        </label>
        <div className="relative mt-1.5">
          <select id="iq-type" name="projectType" required className={selectClass}>
            <option value="">Select…</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/55"
            aria-hidden
            strokeWidth={2}
          />
        </div>
      </div>
      <div>
        <label htmlFor="iq-msg" className="font-body text-xs text-charcoal/70">
          Project notes
        </label>
        <textarea id="iq-msg" name="message" rows={3} className={inputClass} placeholder="Room, timeline, or link to inspo" />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-navy-deep py-2.5 font-body text-sm font-medium uppercase tracking-widest text-gold sm:w-auto sm:px-8"
      >
        {submitting ? "Sending…" : "Request a quote"}
      </button>
      {err && (
        <p className="font-body text-sm text-red-700" role="alert">
          {err}
        </p>
      )}
    </form>
  );
}
