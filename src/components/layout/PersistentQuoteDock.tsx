"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS } from "@/lib/business";

export function PersistentQuoteDock() {
  const path = usePathname();
  if (path === "/thank-you") return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-navy-deep/20 bg-gold/95 shadow-[0_-4px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom, 0px))" }}
      role="region"
      aria-label="Request a quote"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-3 py-2 sm:px-5 sm:py-2.5">
        <a
          href={`tel:${BUSINESS.phoneE164}`}
          className="font-body min-w-0 shrink text-xs font-semibold text-navy-deep sm:text-sm"
        >
          {BUSINESS.phoneDisplay}
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="font-body rounded-sm bg-navy-deep px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gold sm:px-4 sm:py-2 sm:text-xs"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </div>
  );
}
