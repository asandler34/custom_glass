import Link from "next/link";

const PHONE_DISPLAY = "(978) 815-8354";
const PHONE_HREF = "tel:+19788158354";

export function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-3 border-t border-navy-deep/15 bg-gold px-4 pt-3 md:hidden"
      style={{
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom, 0px))",
      }}
      role="region"
      aria-label="Quick contact"
    >
      <a
        href={PHONE_HREF}
        className="font-body min-w-0 shrink text-sm font-semibold text-navy-deep"
      >
        {PHONE_DISPLAY}
      </a>
      <Link
        href="/contact"
        className="font-body shrink-0 text-xs font-bold uppercase tracking-widest text-navy-deep"
      >
        Get Estimate
      </Link>
    </div>
  );
}
