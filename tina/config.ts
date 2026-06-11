import { defineConfig } from "tinacms";

// Branch Tina reads/writes. On Vercel this resolves to the deployed branch;
// locally it falls back to main.
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

// With Tina Cloud credentials present (.env.local locally, project env vars on
// Vercel), Tina runs against Tina Cloud — real client logins + Git-backed
// publishing. Without them, clientId/token are null and Tina falls back to the
// local filesystem so `tinacms build` / `tinacms dev` still work for development.
export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Αρχική Σελίδα (Home)",
        path: "content/home",
        format: "json",
        // Singleton: one home document. The owner edits it; can't create/delete.
        // No `router` on purpose: this is the form-based setup (components read
        // the JSON directly, no useTina), so a page-preview route can't bind the
        // form. Clicking the collection opens the editing form straight away.
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          // ---------------------------------------------------------------- HERO
          {
            type: "object",
            name: "hero",
            label: "Hero (πρώτη οθόνη)",
            fields: [
              { type: "string", name: "headlineLine1", label: "Τίτλος — Γραμμή 1" },
              { type: "string", name: "headlineLine2", label: "Τίτλος — Γραμμή 2" },
              {
                type: "string",
                name: "headlineLine3",
                label: "Τίτλος — Γραμμή 3 (πορτοκαλί)",
              },
              {
                type: "string",
                name: "subline",
                label: "Υπότιτλος",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "socialProof",
                label: "Κείμενο social proof (δίπλα στα αστέρια)",
                description: "π.χ. «100+ Πελάτες»",
              },
              { type: "image", name: "imageDesktop", label: "Εικόνα φόντου — Desktop" },
              { type: "image", name: "imageMobile", label: "Εικόνα φόντου — Κινητό" },
              { type: "string", name: "imageAlt", label: "Περιγραφή εικόνας (alt)" },
            ],
          },
          // --------------------------------------------------------- WHAT IS MOVUS
          {
            type: "object",
            name: "whatIsEMS",
            label: "What is MOVUS",
            fields: [
              { type: "string", name: "eyebrow", label: "Μικρός τίτλος (eyebrow)" },
              { type: "string", name: "headlineLine1", label: "Τίτλος — Γραμμή 1" },
              { type: "string", name: "headlineLine2", label: "Τίτλος — Γραμμή 2 (πορτοκαλί)" },
              { type: "string", name: "paragraph1", label: "Παράγραφος 1", ui: { component: "textarea" } },
              { type: "string", name: "paragraph2", label: "Παράγραφος 2", ui: { component: "textarea" } },
              { type: "string", name: "paragraph3", label: "Παράγραφος 3", ui: { component: "textarea" } },
              { type: "string", name: "ctaLabel", label: "Κείμενο κουμπιού" },
              { type: "image", name: "image", label: "Εικόνα" },
              { type: "string", name: "imageAlt", label: "Περιγραφή εικόνας (alt)" },
              {
                type: "object",
                name: "stats",
                label: "Στατιστικά (3)",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "Στατιστικό" }) },
                fields: [
                  { type: "number", name: "value", label: "Αριθμός" },
                  { type: "string", name: "suffix", label: "Κατάληξη (π.χ. +, ')" },
                  { type: "string", name: "label", label: "Ετικέτα" },
                ],
              },
            ],
          },
          // ------------------------------------------------------ PROGRAMS (intro)
          {
            type: "object",
            name: "programs",
            label: "Προγράμματα — Εισαγωγή",
            description:
              "Μόνο ο εισαγωγικός τίτλος/κείμενο. Οι κάρτες των προγραμμάτων ορίζονται ξεχωριστά.",
            fields: [
              { type: "string", name: "eyebrow", label: "Μικρός τίτλος (eyebrow)" },
              { type: "string", name: "headlineLine1", label: "Τίτλος — Γραμμή 1" },
              { type: "string", name: "headlineLine2", label: "Τίτλος — Γραμμή 2 (πορτοκαλί)" },
              { type: "string", name: "intro1", label: "Κείμενο 1 (έντονο)" },
              { type: "string", name: "intro2", label: "Κείμενο 2" },
              { type: "string", name: "intro3", label: "Κείμενο 3" },
            ],
          },
          // ------------------------------------------------------------- WHY MOVUS
          {
            type: "object",
            name: "whyMovus",
            label: "Γιατί MOVUS",
            fields: [
              { type: "string", name: "eyebrow", label: "Μικρός τίτλος (eyebrow)" },
              { type: "string", name: "headlineLine1", label: "Τίτλος — Γραμμή 1" },
              {
                type: "string",
                name: "headlineLine2Prefix",
                label: "Τίτλος — Γραμμή 2 (πριν το MOVUS)",
                description: "Η λέξη «MOVUS» προστίθεται αυτόματα σε πορτοκαλί.",
              },
              {
                type: "object",
                name: "reasons",
                label: "Λόγοι (4)",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Λόγος" }) },
                fields: [
                  { type: "string", name: "number", label: "Αριθμός (π.χ. 01)" },
                  { type: "string", name: "title", label: "Τίτλος" },
                  { type: "string", name: "description", label: "Περιγραφή", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          // ----------------------------------------------------------- HOW IT WORKS
          {
            type: "object",
            name: "howItWorks",
            label: "Πώς λειτουργεί",
            fields: [
              { type: "string", name: "headlineLine1", label: "Τίτλος — Γραμμή 1" },
              { type: "string", name: "headlineLine2", label: "Τίτλος — Γραμμή 2" },
              { type: "string", name: "headlineLine3", label: "Τίτλος — Γραμμή 3 (μαύρο)" },
              { type: "string", name: "intro", label: "Εισαγωγικό κείμενο", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "Βήματα (4)",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "Βήμα" }) },
                fields: [
                  { type: "string", name: "number", label: "Αριθμός (π.χ. 01)" },
                  { type: "string", name: "title", label: "Τίτλος" },
                  { type: "string", name: "description", label: "Περιγραφή", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Εικόνα" },
                ],
              },
            ],
          },
          // -------------------------------------------------------- TRANSFORMATIONS
          {
            type: "object",
            name: "transformations",
            label: "Στιγμές από το studio",
            fields: [
              { type: "string", name: "eyebrow", label: "Μικρός τίτλος (eyebrow)" },
              { type: "string", name: "headlineLine1", label: "Τίτλος — Γραμμή 1" },
              { type: "string", name: "headlineLine2", label: "Τίτλος — Γραμμή 2 (πορτοκαλί)" },
              {
                type: "image",
                name: "photos",
                label: "Φωτογραφίες (κυλιόμενες)",
                list: true,
              },
            ],
          },
          // -------------------------------------------------------------- COMMUNITY
          {
            type: "object",
            name: "community",
            label: "Κοινότητα",
            fields: [
              { type: "string", name: "eyebrow", label: "Μικρός τίτλος (eyebrow)" },
              { type: "string", name: "headlinePlain", label: "Τίτλος — μέρος 1" },
              {
                type: "string",
                name: "headlineAccent",
                label: "Τίτλος — μέρος 2 (πορτοκαλί)",
              },
              { type: "string", name: "body", label: "Κείμενο", ui: { component: "textarea" } },
              { type: "string", name: "ctaLabel", label: "Κείμενο κουμπιού" },
              { type: "string", name: "ctaHref", label: "Σύνδεσμος κουμπιού" },
            ],
          },
          // ----------------------------------------------------------- TESTIMONIALS
          {
            type: "object",
            name: "testimonials",
            label: "Μαρτυρίες μελών",
            fields: [
              { type: "string", name: "eyebrow", label: "Μικρός τίτλος (eyebrow)" },
              { type: "string", name: "headlineWord1", label: "Τίτλος — λέξη 1" },
              { type: "string", name: "headlineWord2Accent", label: "Τίτλος — λέξη 2 (πορτοκαλί)" },
              { type: "string", name: "headlineLine2", label: "Τίτλος — Γραμμή 2" },
              {
                type: "object",
                name: "items",
                label: "Μαρτυρίες",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "Μαρτυρία" }) },
                fields: [
                  { type: "string", name: "quote", label: "Σχόλιο", ui: { component: "textarea" } },
                  { type: "string", name: "name", label: "Όνομα" },
                  { type: "string", name: "program", label: "Πρόγραμμα" },
                ],
              },
            ],
          },
          // -------------------------------------------------------------------- FAQ
          {
            type: "object",
            name: "faq",
            label: "Συχνές Ερωτήσεις",
            fields: [
              { type: "string", name: "helperText", label: "Βοηθητικό κείμενο", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Εικόνα" },
              { type: "string", name: "imageAlt", label: "Περιγραφή εικόνας (alt)" },
              {
                type: "object",
                name: "items",
                label: "Ερωτήσεις",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.question || "Ερώτηση" }) },
                fields: [
                  { type: "string", name: "question", label: "Ερώτηση" },
                  { type: "string", name: "answer", label: "Απάντηση", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          // ---------------------------------------------------------------- CONTACT
          {
            type: "object",
            name: "contact",
            label: "Επικοινωνία (κείμενα)",
            description: "Μόνο τα κείμενα. Τα πεδία της φόρμας παραμένουν σταθερά.",
            fields: [
              { type: "string", name: "eyebrow", label: "Μικρός τίτλος (eyebrow)" },
              { type: "string", name: "headlineLine1", label: "Τίτλος — Γραμμή 1" },
              { type: "string", name: "headlineLine2", label: "Τίτλος — Γραμμή 2 (πορτοκαλί)" },
              { type: "string", name: "body1", label: "Κείμενο 1" },
              { type: "string", name: "body2", label: "Κείμενο 2" },
              { type: "string", name: "submitLabel", label: "Κείμενο κουμπιού αποστολής" },
              { type: "string", name: "successHeading", label: "Τίτλος επιτυχίας" },
              { type: "string", name: "successMessage", label: "Μήνυμα επιτυχίας" },
            ],
          },
          // -------------------------------------------------------------- INSTAGRAM
          {
            type: "object",
            name: "instagram",
            label: "Instagram (footer grid)",
            fields: [
              { type: "string", name: "tickerText", label: "Κυλιόμενο κείμενο" },
              { type: "string", name: "instagramUrl", label: "Σύνδεσμος Instagram" },
              {
                type: "object",
                name: "photos",
                label: "Φωτογραφίες (6)",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.alt || "Φωτογραφία" }) },
                fields: [
                  { type: "image", name: "src", label: "Εικόνα" },
                  { type: "string", name: "alt", label: "Περιγραφή (alt)" },
                ],
              },
            ],
          },
        ],
      },
      // ============================================================ PROGRAMS
      // One document per program (team.json, squad.json, …). create/delete are
      // OFF so the owner edits the 9 programs but can't add or remove any.
      {
        name: "program",
        label: "Προγράμματα",
        path: "content/programs",
        format: "json",
        match: { include: "*" },
        ui: {
          allowedActions: { create: false, delete: false },
          filename: { readonly: true },
        },
        fields: [
          { type: "string", name: "title", label: "Τίτλος" },
          { type: "string", name: "shortDescription", label: "Σύντομη περιγραφή (κάρτα)", ui: { component: "textarea" } },
          { type: "string", name: "duration", label: "Διάρκεια (π.χ. 60 λεπτά)" },
          { type: "string", name: "tag", label: "Κατηγορία (badge)" },
          { type: "string", name: "tags", label: "Ετικέτες (κάρτα)", list: true },
          { type: "string", name: "ctaLabel", label: "Κείμενο κουμπιού" },
          {
            type: "string",
            name: "heroBody",
            label: "Κείμενο σελίδας (παράγραφοι)",
            list: true,
            ui: { component: "textarea" },
          },
          { type: "string", name: "benefitsTitle", label: "Τίτλος ωφελειών" },
          { type: "string", name: "benefits", label: "Ωφέλειες", list: true },
          { type: "string", name: "howItWorks", label: "Πώς λειτουργεί (προαιρετικό)", ui: { component: "textarea" } },
          {
            type: "object",
            name: "subPrograms",
            label: "Υπο-προγράμματα",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Υπο-πρόγραμμα" }) },
            fields: [
              { type: "string", name: "name", label: "Όνομα" },
              { type: "string", name: "tagline", label: "Tagline" },
              { type: "string", name: "category", label: "Κατηγορία" },
              { type: "string", name: "audience", label: "Κοινό" },
              { type: "string", name: "description", label: "Περιγραφή", ui: { component: "textarea" } },
              { type: "string", name: "ctaLabel", label: "Κείμενο κουμπιού" },
            ],
          },
          {
            type: "object",
            name: "faqs",
            label: "Συχνές Ερωτήσεις (σελίδα προγράμματος)",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.question || "Ερώτηση" }) },
            fields: [
              { type: "string", name: "question", label: "Ερώτηση" },
              { type: "string", name: "answer", label: "Απάντηση", ui: { component: "textarea" } },
            ],
          },
          { type: "image", name: "image", label: "Εικόνα" },
          { type: "string", name: "imageAlt", label: "Περιγραφή εικόνας (alt)" },
          { type: "string", name: "imagePosition", label: "Θέση εικόνας (προχωρημένο, π.χ. center top)" },
          // --- SEO: edit only if you know what you're doing ---
          { type: "string", name: "metaTitle", label: "SEO — Τίτλος (μην το αλλάζεις χωρίς λόγο)" },
          { type: "string", name: "metaDescription", label: "SEO — Περιγραφή (μην το αλλάζεις χωρίς λόγο)", ui: { component: "textarea" } },
        ],
      },
    ],
  },
});
