export function TrustSignals() {
  const items = [
    "Local glass specialists — we measure, fabricate, and install in-house",
    "Field verification before your glass is ordered",
    "Residential, contractor, and light commercial work",
  ];
  return (
    <ul className="mt-4 list-disc space-y-1 pl-5 font-body text-sm text-charcoal/80">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export function GbpCta() {
  return (
    <p className="font-body text-sm text-charcoal/75">
      Prefer the phone?{" "}
      <a
        className="font-medium text-gold underline-offset-2 hover:underline"
        href="tel:+19788158354"
      >
        (978) 815-8354
      </a>{" "}
      — same team that answers the shop line. Free on-site estimate when we are a fit for your
      project.
    </p>
  );
}

export function ReviewPrompt() {
  return (
    <p className="font-body text-sm text-charcoal/70">
      After your install, if the work met your expectations, we would appreciate a short review on
      Google. It helps neighbors find a local team that still templates every opening.
    </p>
  );
}
