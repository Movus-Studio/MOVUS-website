"use client";

import { useEffect, useState } from "react";
import { acceptAll, rejectNonEssential, useConsent } from "@/lib/consent";

export function CookieBanner() {
  const consent = useConsent();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || consent.decided) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Ρυθμίσεις cookies"
      className="fixed inset-x-0 px-3 z-[200] md:inset-x-auto md:left-5 md:px-0"
      style={{ bottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
    >
      <div className="mx-auto md:mx-0 max-w-md md:max-w-sm bg-movus-black border border-movus-white/15 rounded-xl shadow-2xl p-4 md:p-5 text-movus-white">
        <p className="text-sm md:text-base font-bold mb-1.5">
          Χτύπα ένα Cookie <span aria-hidden="true">🍪</span>, θα το κάψεις μαζί μας!
        </p>
        <p className="text-xs md:text-sm text-movus-white/75 leading-relaxed mb-4">
          Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας στον ιστότοπό μας.
        </p>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={acceptAll}
            className="bg-movus-orange hover:bg-movus-orange-dark text-movus-white font-bold tracking-[0.02em] text-xs md:text-sm py-2 px-6 rounded-full transition-colors"
          >
            Αποδοχή
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            aria-label="Απόρριψη μη απαραίτητων cookies"
            className="text-movus-orange hover:text-movus-orange-dark border-2 border-movus-orange hover:border-movus-orange-dark font-bold text-xs md:text-sm py-2 px-4 rounded-full transition-colors"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
