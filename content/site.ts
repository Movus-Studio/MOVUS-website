// Global recurring site copy + contact details.
//
// The values now live in content/settings/settings.json (TinaCMS-managed). This
// loader re-assembles the exact `siteCopy` / `siteContact` shapes the rest of the
// app already imports, and DERIVES the two computed fields (address.full,
// phoneHref) so the owner only edits the simple parts in the CMS.
import settings from "./settings/settings.json";

export const siteCopy = {
  tagline: settings.tagline,
  ctaBand: {
    hook: settings.ctaBand.hook,
    body: settings.ctaBand.body,
    cta: settings.ctaBand.cta,
  },
};

const a = settings.address;

// --- Opening hours: one structured source drives both the visible text and
// the schema.org JSON-LD. ---
type HourSession = { open: string; close: string };
type HourGroup = { label: string; closed: boolean; sessions: HourSession[] };
const h = settings.hours as { weekdays: HourGroup; saturday: HourGroup; sunday: HourGroup };

// Visible display line, e.g. "Δευτέρα – Παρασκευή: 09:00 – 14:00 | 16:00 – 21:00"
function hoursDisplay(group: HourGroup): string {
  if (group.closed || group.sessions.length === 0) return `${group.label}: Κλειστά`;
  return `${group.label}: ${group.sessions.map((s) => `${s.open} – ${s.close}`).join(" | ")}`;
}

// schema.org day codes per group (machine-readable; not owner-edited).
const DAY_CODES: Record<"weekdays" | "saturday" | "sunday", string[]> = {
  weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  saturday: ["Saturday"],
  sunday: ["Sunday"],
};

function hoursSpec(group: HourGroup, dayOfWeek: string[]) {
  if (group.closed) return [];
  return group.sessions.map((s) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek,
    opens: s.open,
    closes: s.close,
  }));
}

// Consumed by lib/schema.ts (LocalBusiness structured data).
export const openingHoursSpecification = [
  ...hoursSpec(h.weekdays, DAY_CODES.weekdays),
  ...hoursSpec(h.saturday, DAY_CODES.saturday),
  ...hoursSpec(h.sunday, DAY_CODES.sunday),
];

export const siteContact = {
  email: settings.email,
  phoneDisplay: settings.phoneDisplay,
  // Derived: strip spaces for the tel: href, e.g. "+30 2611 81 4010" -> "+302611814010"
  phoneHref: settings.phoneDisplay.replace(/\s/g, ""),
  address: {
    street: a.street,
    city: a.city,
    region: a.region,
    postalCode: a.postalCode,
    country: a.country,
    // Derived single-line address.
    full: `${a.street}, ${a.city}, ${a.region}, ${a.postalCode}, ${a.country}`,
  },
  hours: {
    weekdaysDisplay: hoursDisplay(h.weekdays),
    saturdayDisplay: hoursDisplay(h.saturday),
    sundayDisplay: hoursDisplay(h.sunday),
  },
  social: {
    instagram: settings.social.instagram,
    instagramHandle: settings.social.instagramHandle,
  },
};
