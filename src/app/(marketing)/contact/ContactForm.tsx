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
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement)
        .value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };
    console.log("[Contact form]", data);
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 4000);
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
        className="mt-2 inline-flex w-full justify-center bg-navy-deep py-3.5 font-body text-sm font-medium uppercase tracking-widest text-gold transition-colors hover:bg-navy-mid sm:w-auto sm:px-12"
      >
        Send message
      </button>
      {submitted && (
        <p className="font-body text-sm text-gold" role="status">
          Thanks—your note was logged (demo: check the browser console).
        </p>
      )}
    </form>
  );
}
