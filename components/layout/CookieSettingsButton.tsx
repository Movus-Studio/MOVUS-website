"use client";

import { reopenConsent } from "@/lib/consent";

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={reopenConsent}
      className={className ?? "text-movus-orange-text hover:underline"}
    >
      άνοιξε ξανά τις ρυθμίσεις cookies
    </button>
  );
}
