"use client";

import { type FormEvent, useState } from "react";
import { ChevronDown } from "lucide-react";

const projectTypes = [
  "Custom shower / enclosure",
  "Glass railing",
  "Custom mirror",
  "Commercial glazing",
  "Other / not sure",
] as const;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formStartedAt] = useState(() => Date.now());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    setSubmitting(true);
    try {
      const payload = {
        name: (form.elements.namedItem("name") as HTMLInputElement).value,
        phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        projectType: (form.elements.namedItem("projectType") as HTMLSelectElement).value,
        message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        sourcePage: window.location.pathname,
        formStartedAt,
        website: (form.elements.namedItem("website") as HTMLInputElement).value,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      // Fire conversion events when analytics is present.
      if (typeof window !== "undefined") {
        const win = window as Window & {
          gtag?: (...args: unknown[]) => void;
          dataLayer?: unknown[];
        };
        win.gtag?.("event", "generate_lead", {
          form_name: "contact_form_marketing",
          page_path: window.location.pathname,
        });
        win.dataLayer?.push?.({
          event: "lead_submit",
          form_name: "contact_form_marketing",
          page_path: window.location.pathname,
        });
        window.location.assign("/thank-you");
      }
    } catch {
      setError("Something went wrong. Please call us at (978) 815-8354.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "mt-2 w-full border border-charcoal/15 bg-white-pure px-4 py-3 font-body text-sm text-charcoal outline-none transition-colors focus:border-gold";

  const selectClass =
    "w-full border border-charcoal/15 bg-white-pure px-4 py-3 font-body text-sm text-charcoal outline-none transition-colors focus:border-gold";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
      noValidate
      aria-label="Request project information"
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div>
        <label htmlFor="name" className="font-body text-xs font-medium uppercase tracking-widest text-charcoal/70">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="phone" className="font-body text-xs font-medium uppercase tracking-widest text-charcoal/70">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className="font-body text-xs font-medium uppercase tracking-widest text-charcoal/70">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="projectType" className="font-body text-xs font-medium uppercase tracking-widest text-charcoal/70">
          Project type
        </label>
        <div className="relative mt-2">
          <select
            id="projectType"
            name="projectType"
            required
            className={`${selectClass} appearance-none pr-10`}
          >
            <option value="">Select…</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/55"
            aria-hidden
            strokeWidth={2}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="font-body text-xs font-medium uppercase tracking-widest text-charcoal/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-y min-h-[8rem]`}
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex w-full justify-center bg-navy-deep py-3.5 font-body text-sm font-medium uppercase tracking-widest text-gold transition-colors hover:bg-navy-mid sm:w-auto sm:px-12"
      >
        {submitting ? "Sending..." : "Send message"}
      </button>
      {error && (
        <p className="font-body text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
