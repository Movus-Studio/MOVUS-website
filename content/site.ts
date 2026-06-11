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
    weekdaysDisplay: settings.hours.weekdaysDisplay,
    saturdayDisplay: settings.hours.saturdayDisplay,
    sundayDisplay: settings.hours.sundayDisplay,
  },
  social: {
    instagram: settings.social.instagram,
    instagramHandle: settings.social.instagramHandle,
  },
};
