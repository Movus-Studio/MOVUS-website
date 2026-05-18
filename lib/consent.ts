"use client";

import { useEffect, useState } from "react";

export type ConsentState = {
  necessary: true;
  analytics: boolean;
  decided: boolean;
};

const STORAGE_KEY = "movus-consent-v1";
const CHANGE_EVENT = "movus-consent-change";

const DEFAULT: ConsentState = {
  necessary: true,
  analytics: false,
  decided: false,
};

function readStorage(): ConsentState {
  if (typeof window === "undefined") return DEFAULT;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      decided: Boolean(parsed.decided),
    };
  } catch {
    return DEFAULT;
  }
}

function writeStorage(next: ConsentState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent<ConsentState>(CHANGE_EVENT, { detail: next }));
}

export function setConsent(partial: Partial<Omit<ConsentState, "necessary">>) {
  const next: ConsentState = {
    necessary: true,
    analytics: partial.analytics ?? readStorage().analytics,
    decided: partial.decided ?? true,
  };
  writeStorage(next);
}

export function acceptAll() {
  writeStorage({ necessary: true, analytics: true, decided: true });
}

export function rejectNonEssential() {
  writeStorage({ necessary: true, analytics: false, decided: true });
}

export function reopenConsent() {
  writeStorage({ necessary: true, analytics: readStorage().analytics, decided: false });
}

export function useConsent(): ConsentState {
  const [state, setState] = useState<ConsentState>(DEFAULT);

  useEffect(() => {
    setState(readStorage());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<ConsentState>).detail;
      if (detail) setState(detail);
      else setState(readStorage());
    };
    window.addEventListener(CHANGE_EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(CHANGE_EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  return state;
}
