// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "\u0391\u03C1\u03C7\u03B9\u03BA\u03AE \u03A3\u03B5\u03BB\u03AF\u03B4\u03B1 (Home)",
        path: "content/home",
        format: "json",
        // Singleton: one home document. The owner edits it; can't create/delete.
        // No `router` on purpose: this is the form-based setup (components read
        // the JSON directly, no useTina), so a page-preview route can't bind the
        // form. Clicking the collection opens the editing form straight away.
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          // ---------------------------------------------------------------- HERO
          {
            type: "object",
            name: "hero",
            label: "Hero (\u03C0\u03C1\u03CE\u03C4\u03B7 \u03BF\u03B8\u03CC\u03BD\u03B7)",
            fields: [
              { type: "string", name: "headlineLine1", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 1" },
              { type: "string", name: "headlineLine2", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 2" },
              {
                type: "string",
                name: "headlineLine3",
                label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 3 (\u03C0\u03BF\u03C1\u03C4\u03BF\u03BA\u03B1\u03BB\u03AF)"
              },
              {
                type: "string",
                name: "subline",
                label: "\u03A5\u03C0\u03CC\u03C4\u03B9\u03C4\u03BB\u03BF\u03C2",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "socialProof",
                label: "\u039A\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF social proof (\u03B4\u03AF\u03C0\u03BB\u03B1 \u03C3\u03C4\u03B1 \u03B1\u03C3\u03C4\u03AD\u03C1\u03B9\u03B1)",
                description: "\u03C0.\u03C7. \xAB100+ \u03A0\u03B5\u03BB\u03AC\u03C4\u03B5\u03C2\xBB"
              },
              { type: "image", name: "imageDesktop", label: "\u0395\u03B9\u03BA\u03CC\u03BD\u03B1 \u03C6\u03CC\u03BD\u03C4\u03BF\u03C5 \u2014 Desktop" },
              { type: "image", name: "imageMobile", label: "\u0395\u03B9\u03BA\u03CC\u03BD\u03B1 \u03C6\u03CC\u03BD\u03C4\u03BF\u03C5 \u2014 \u039A\u03B9\u03BD\u03B7\u03C4\u03CC" },
              { type: "string", name: "imageAlt", label: "\u03A0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1\u03C2 (alt)" }
            ]
          },
          // --------------------------------------------------------- WHAT IS MOVUS
          {
            type: "object",
            name: "whatIsEMS",
            label: "What is MOVUS",
            fields: [
              { type: "string", name: "eyebrow", label: "\u039C\u03B9\u03BA\u03C1\u03CC\u03C2 \u03C4\u03AF\u03C4\u03BB\u03BF\u03C2 (eyebrow)" },
              { type: "string", name: "headlineLine1", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 1" },
              { type: "string", name: "headlineLine2", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 2 (\u03C0\u03BF\u03C1\u03C4\u03BF\u03BA\u03B1\u03BB\u03AF)" },
              { type: "string", name: "paragraph1", label: "\u03A0\u03B1\u03C1\u03AC\u03B3\u03C1\u03B1\u03C6\u03BF\u03C2 1", ui: { component: "textarea" } },
              { type: "string", name: "paragraph2", label: "\u03A0\u03B1\u03C1\u03AC\u03B3\u03C1\u03B1\u03C6\u03BF\u03C2 2", ui: { component: "textarea" } },
              { type: "string", name: "paragraph3", label: "\u03A0\u03B1\u03C1\u03AC\u03B3\u03C1\u03B1\u03C6\u03BF\u03C2 3", ui: { component: "textarea" } },
              { type: "string", name: "ctaLabel", label: "\u039A\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF \u03BA\u03BF\u03C5\u03BC\u03C0\u03B9\u03BF\u03CD" },
              { type: "image", name: "image", label: "\u0395\u03B9\u03BA\u03CC\u03BD\u03B1" },
              { type: "string", name: "imageAlt", label: "\u03A0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1\u03C2 (alt)" },
              {
                type: "object",
                name: "stats",
                label: "\u03A3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC (3)",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.label || "\u03A3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC" }) },
                fields: [
                  { type: "number", name: "value", label: "\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2" },
                  { type: "string", name: "suffix", label: "\u039A\u03B1\u03C4\u03AC\u03BB\u03B7\u03BE\u03B7 (\u03C0.\u03C7. +, ')" },
                  { type: "string", name: "label", label: "\u0395\u03C4\u03B9\u03BA\u03AD\u03C4\u03B1" }
                ]
              }
            ]
          },
          // ------------------------------------------------------ PROGRAMS (intro)
          {
            type: "object",
            name: "programs",
            label: "\u03A0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03B1 \u2014 \u0395\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE",
            description: "\u039C\u03CC\u03BD\u03BF \u03BF \u03B5\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03B9\u03BA\u03CC\u03C2 \u03C4\u03AF\u03C4\u03BB\u03BF\u03C2/\u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF. \u039F\u03B9 \u03BA\u03AC\u03C1\u03C4\u03B5\u03C2 \u03C4\u03C9\u03BD \u03C0\u03C1\u03BF\u03B3\u03C1\u03B1\u03BC\u03BC\u03AC\u03C4\u03C9\u03BD \u03BF\u03C1\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03B9 \u03BE\u03B5\u03C7\u03C9\u03C1\u03B9\u03C3\u03C4\u03AC.",
            fields: [
              { type: "string", name: "eyebrow", label: "\u039C\u03B9\u03BA\u03C1\u03CC\u03C2 \u03C4\u03AF\u03C4\u03BB\u03BF\u03C2 (eyebrow)" },
              { type: "string", name: "headlineLine1", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 1" },
              { type: "string", name: "headlineLine2", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 2 (\u03C0\u03BF\u03C1\u03C4\u03BF\u03BA\u03B1\u03BB\u03AF)" },
              { type: "string", name: "intro1", label: "\u039A\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF 1 (\u03AD\u03BD\u03C4\u03BF\u03BD\u03BF)" },
              { type: "string", name: "intro2", label: "\u039A\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF 2" },
              { type: "string", name: "intro3", label: "\u039A\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF 3" }
            ]
          },
          // ------------------------------------------------------------- WHY MOVUS
          {
            type: "object",
            name: "whyMovus",
            label: "\u0393\u03B9\u03B1\u03C4\u03AF MOVUS",
            fields: [
              { type: "string", name: "eyebrow", label: "\u039C\u03B9\u03BA\u03C1\u03CC\u03C2 \u03C4\u03AF\u03C4\u03BB\u03BF\u03C2 (eyebrow)" },
              { type: "string", name: "headlineLine1", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 1" },
              {
                type: "string",
                name: "headlineLine2Prefix",
                label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 2 (\u03C0\u03C1\u03B9\u03BD \u03C4\u03BF MOVUS)",
                description: "\u0397 \u03BB\u03AD\u03BE\u03B7 \xABMOVUS\xBB \u03C0\u03C1\u03BF\u03C3\u03C4\u03AF\u03B8\u03B5\u03C4\u03B1\u03B9 \u03B1\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B1 \u03C3\u03B5 \u03C0\u03BF\u03C1\u03C4\u03BF\u03BA\u03B1\u03BB\u03AF."
              },
              {
                type: "object",
                name: "reasons",
                label: "\u039B\u03CC\u03B3\u03BF\u03B9 (4)",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "\u039B\u03CC\u03B3\u03BF\u03C2" }) },
                fields: [
                  { type: "string", name: "number", label: "\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 (\u03C0.\u03C7. 01)" },
                  { type: "string", name: "title", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2" },
                  { type: "string", name: "description", label: "\u03A0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ----------------------------------------------------------- HOW IT WORKS
          {
            type: "object",
            name: "howItWorks",
            label: "\u03A0\u03CE\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF",
            fields: [
              { type: "string", name: "headlineLine1", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 1" },
              { type: "string", name: "headlineLine2", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 2" },
              { type: "string", name: "headlineLine3", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 3 (\u03BC\u03B1\u03CD\u03C1\u03BF)" },
              { type: "string", name: "intro", label: "\u0395\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03B9\u03BA\u03CC \u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "\u0392\u03AE\u03BC\u03B1\u03C4\u03B1 (4)",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "\u0392\u03AE\u03BC\u03B1" }) },
                fields: [
                  { type: "string", name: "number", label: "\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 (\u03C0.\u03C7. 01)" },
                  { type: "string", name: "title", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2" },
                  { type: "string", name: "description", label: "\u03A0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "\u0395\u03B9\u03BA\u03CC\u03BD\u03B1" }
                ]
              }
            ]
          },
          // -------------------------------------------------------- TRANSFORMATIONS
          {
            type: "object",
            name: "transformations",
            label: "\u03A3\u03C4\u03B9\u03B3\u03BC\u03AD\u03C2 \u03B1\u03C0\u03CC \u03C4\u03BF studio",
            fields: [
              { type: "string", name: "eyebrow", label: "\u039C\u03B9\u03BA\u03C1\u03CC\u03C2 \u03C4\u03AF\u03C4\u03BB\u03BF\u03C2 (eyebrow)" },
              { type: "string", name: "headlineLine1", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 1" },
              { type: "string", name: "headlineLine2", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 2 (\u03C0\u03BF\u03C1\u03C4\u03BF\u03BA\u03B1\u03BB\u03AF)" },
              {
                type: "image",
                name: "photos",
                label: "\u03A6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B5\u03C2 (\u03BA\u03C5\u03BB\u03B9\u03CC\u03BC\u03B5\u03BD\u03B5\u03C2)",
                list: true
              }
            ]
          },
          // -------------------------------------------------------------- COMMUNITY
          {
            type: "object",
            name: "community",
            label: "\u039A\u03BF\u03B9\u03BD\u03CC\u03C4\u03B7\u03C4\u03B1",
            fields: [
              { type: "string", name: "eyebrow", label: "\u039C\u03B9\u03BA\u03C1\u03CC\u03C2 \u03C4\u03AF\u03C4\u03BB\u03BF\u03C2 (eyebrow)" },
              { type: "string", name: "headlinePlain", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u03BC\u03AD\u03C1\u03BF\u03C2 1" },
              {
                type: "string",
                name: "headlineAccent",
                label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u03BC\u03AD\u03C1\u03BF\u03C2 2 (\u03C0\u03BF\u03C1\u03C4\u03BF\u03BA\u03B1\u03BB\u03AF)"
              },
              { type: "string", name: "body", label: "\u039A\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF", ui: { component: "textarea" } },
              { type: "string", name: "ctaLabel", label: "\u039A\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF \u03BA\u03BF\u03C5\u03BC\u03C0\u03B9\u03BF\u03CD" },
              { type: "string", name: "ctaHref", label: "\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF\u03C2 \u03BA\u03BF\u03C5\u03BC\u03C0\u03B9\u03BF\u03CD" }
            ]
          },
          // ----------------------------------------------------------- TESTIMONIALS
          {
            type: "object",
            name: "testimonials",
            label: "\u039C\u03B1\u03C1\u03C4\u03C5\u03C1\u03AF\u03B5\u03C2 \u03BC\u03B5\u03BB\u03CE\u03BD",
            fields: [
              { type: "string", name: "eyebrow", label: "\u039C\u03B9\u03BA\u03C1\u03CC\u03C2 \u03C4\u03AF\u03C4\u03BB\u03BF\u03C2 (eyebrow)" },
              { type: "string", name: "headlineWord1", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u03BB\u03AD\u03BE\u03B7 1" },
              { type: "string", name: "headlineWord2Accent", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u03BB\u03AD\u03BE\u03B7 2 (\u03C0\u03BF\u03C1\u03C4\u03BF\u03BA\u03B1\u03BB\u03AF)" },
              { type: "string", name: "headlineLine2", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 2" },
              {
                type: "object",
                name: "items",
                label: "\u039C\u03B1\u03C1\u03C4\u03C5\u03C1\u03AF\u03B5\u03C2",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "\u039C\u03B1\u03C1\u03C4\u03C5\u03C1\u03AF\u03B1" }) },
                fields: [
                  { type: "string", name: "quote", label: "\u03A3\u03C7\u03CC\u03BB\u03B9\u03BF", ui: { component: "textarea" } },
                  { type: "string", name: "name", label: "\u038C\u03BD\u03BF\u03BC\u03B1" },
                  { type: "string", name: "program", label: "\u03A0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1" }
                ]
              }
            ]
          },
          // -------------------------------------------------------------------- FAQ
          {
            type: "object",
            name: "faq",
            label: "\u03A3\u03C5\u03C7\u03BD\u03AD\u03C2 \u0395\u03C1\u03C9\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2",
            fields: [
              { type: "string", name: "helperText", label: "\u0392\u03BF\u03B7\u03B8\u03B7\u03C4\u03B9\u03BA\u03CC \u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "\u0395\u03B9\u03BA\u03CC\u03BD\u03B1" },
              { type: "string", name: "imageAlt", label: "\u03A0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1\u03C2 (alt)" },
              {
                type: "object",
                name: "items",
                label: "\u0395\u03C1\u03C9\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.question || "\u0395\u03C1\u03CE\u03C4\u03B7\u03C3\u03B7" }) },
                fields: [
                  { type: "string", name: "question", label: "\u0395\u03C1\u03CE\u03C4\u03B7\u03C3\u03B7" },
                  { type: "string", name: "answer", label: "\u0391\u03C0\u03AC\u03BD\u03C4\u03B7\u03C3\u03B7", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ---------------------------------------------------------------- CONTACT
          {
            type: "object",
            name: "contact",
            label: "\u0395\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AF\u03B1 (\u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03B1)",
            description: "\u039C\u03CC\u03BD\u03BF \u03C4\u03B1 \u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03B1. \u03A4\u03B1 \u03C0\u03B5\u03B4\u03AF\u03B1 \u03C4\u03B7\u03C2 \u03C6\u03CC\u03C1\u03BC\u03B1\u03C2 \u03C0\u03B1\u03C1\u03B1\u03BC\u03AD\u03BD\u03BF\u03C5\u03BD \u03C3\u03C4\u03B1\u03B8\u03B5\u03C1\u03AC.",
            fields: [
              { type: "string", name: "eyebrow", label: "\u039C\u03B9\u03BA\u03C1\u03CC\u03C2 \u03C4\u03AF\u03C4\u03BB\u03BF\u03C2 (eyebrow)" },
              { type: "string", name: "headlineLine1", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 1" },
              { type: "string", name: "headlineLine2", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u2014 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE 2 (\u03C0\u03BF\u03C1\u03C4\u03BF\u03BA\u03B1\u03BB\u03AF)" },
              { type: "string", name: "body1", label: "\u039A\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF 1" },
              { type: "string", name: "body2", label: "\u039A\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF 2" },
              { type: "string", name: "submitLabel", label: "\u039A\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF \u03BA\u03BF\u03C5\u03BC\u03C0\u03B9\u03BF\u03CD \u03B1\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE\u03C2" },
              { type: "string", name: "successHeading", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1\u03C2" },
              { type: "string", name: "successMessage", label: "\u039C\u03AE\u03BD\u03C5\u03BC\u03B1 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1\u03C2" }
            ]
          },
          // -------------------------------------------------------------- INSTAGRAM
          {
            type: "object",
            name: "instagram",
            label: "Instagram (footer grid)",
            fields: [
              { type: "string", name: "tickerText", label: "\u039A\u03C5\u03BB\u03B9\u03CC\u03BC\u03B5\u03BD\u03BF \u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF" },
              { type: "string", name: "instagramUrl", label: "\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF\u03C2 Instagram" },
              {
                type: "object",
                name: "photos",
                label: "\u03A6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B5\u03C2 (6)",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.alt || "\u03A6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B1" }) },
                fields: [
                  { type: "image", name: "src", label: "\u0395\u03B9\u03BA\u03CC\u03BD\u03B1" },
                  { type: "string", name: "alt", label: "\u03A0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE (alt)" }
                ]
              }
            ]
          }
        ]
      },
      // ============================================================ PROGRAMS
      // One document per program (team.json, squad.json, …). create/delete are
      // OFF so the owner edits the 9 programs but can't add or remove any.
      {
        name: "program",
        label: "\u03A0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03B1",
        path: "content/programs",
        format: "json",
        match: { include: "*" },
        ui: {
          allowedActions: { create: false, delete: false },
          filename: { readonly: true }
        },
        fields: [
          { type: "string", name: "title", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2" },
          { type: "string", name: "shortDescription", label: "\u03A3\u03CD\u03BD\u03C4\u03BF\u03BC\u03B7 \u03C0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE (\u03BA\u03AC\u03C1\u03C4\u03B1)", ui: { component: "textarea" } },
          { type: "string", name: "duration", label: "\u0394\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1 (\u03C0.\u03C7. 60 \u03BB\u03B5\u03C0\u03C4\u03AC)" },
          { type: "string", name: "tag", label: "\u039A\u03B1\u03C4\u03B7\u03B3\u03BF\u03C1\u03AF\u03B1 (badge)" },
          { type: "string", name: "tags", label: "\u0395\u03C4\u03B9\u03BA\u03AD\u03C4\u03B5\u03C2 (\u03BA\u03AC\u03C1\u03C4\u03B1)", list: true },
          { type: "string", name: "ctaLabel", label: "\u039A\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF \u03BA\u03BF\u03C5\u03BC\u03C0\u03B9\u03BF\u03CD" },
          {
            type: "string",
            name: "heroBody",
            label: "\u039A\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1\u03C2 (\u03C0\u03B1\u03C1\u03AC\u03B3\u03C1\u03B1\u03C6\u03BF\u03B9)",
            list: true,
            ui: { component: "textarea" }
          },
          { type: "string", name: "benefitsTitle", label: "\u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 \u03C9\u03C6\u03B5\u03BB\u03B5\u03B9\u03CE\u03BD" },
          { type: "string", name: "benefits", label: "\u03A9\u03C6\u03AD\u03BB\u03B5\u03B9\u03B5\u03C2", list: true },
          { type: "string", name: "howItWorks", label: "\u03A0\u03CE\u03C2 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03B5\u03AF (\u03C0\u03C1\u03BF\u03B1\u03B9\u03C1\u03B5\u03C4\u03B9\u03BA\u03CC)", ui: { component: "textarea" } },
          {
            type: "object",
            name: "subPrograms",
            label: "\u03A5\u03C0\u03BF-\u03C0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03B1",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "\u03A5\u03C0\u03BF-\u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1" }) },
            fields: [
              { type: "string", name: "name", label: "\u038C\u03BD\u03BF\u03BC\u03B1" },
              { type: "string", name: "tagline", label: "Tagline" },
              { type: "string", name: "category", label: "\u039A\u03B1\u03C4\u03B7\u03B3\u03BF\u03C1\u03AF\u03B1" },
              { type: "string", name: "audience", label: "\u039A\u03BF\u03B9\u03BD\u03CC" },
              { type: "string", name: "description", label: "\u03A0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE", ui: { component: "textarea" } },
              { type: "string", name: "ctaLabel", label: "\u039A\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF \u03BA\u03BF\u03C5\u03BC\u03C0\u03B9\u03BF\u03CD" }
            ]
          },
          {
            type: "object",
            name: "faqs",
            label: "\u03A3\u03C5\u03C7\u03BD\u03AD\u03C2 \u0395\u03C1\u03C9\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2 (\u03C3\u03B5\u03BB\u03AF\u03B4\u03B1 \u03C0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03BF\u03C2)",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.question || "\u0395\u03C1\u03CE\u03C4\u03B7\u03C3\u03B7" }) },
            fields: [
              { type: "string", name: "question", label: "\u0395\u03C1\u03CE\u03C4\u03B7\u03C3\u03B7" },
              { type: "string", name: "answer", label: "\u0391\u03C0\u03AC\u03BD\u03C4\u03B7\u03C3\u03B7", ui: { component: "textarea" } }
            ]
          },
          { type: "image", name: "image", label: "\u0395\u03B9\u03BA\u03CC\u03BD\u03B1" },
          { type: "string", name: "imageAlt", label: "\u03A0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1\u03C2 (alt)" },
          { type: "string", name: "imagePosition", label: "\u0398\u03AD\u03C3\u03B7 \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1\u03C2 (\u03C0\u03C1\u03BF\u03C7\u03C9\u03C1\u03B7\u03BC\u03AD\u03BD\u03BF, \u03C0.\u03C7. center top)" },
          // --- SEO: edit only if you know what you're doing ---
          { type: "string", name: "metaTitle", label: "SEO \u2014 \u03A4\u03AF\u03C4\u03BB\u03BF\u03C2 (\u03BC\u03B7\u03BD \u03C4\u03BF \u03B1\u03BB\u03BB\u03AC\u03B6\u03B5\u03B9\u03C2 \u03C7\u03C9\u03C1\u03AF\u03C2 \u03BB\u03CC\u03B3\u03BF)" },
          { type: "string", name: "metaDescription", label: "SEO \u2014 \u03A0\u03B5\u03C1\u03B9\u03B3\u03C1\u03B1\u03C6\u03AE (\u03BC\u03B7\u03BD \u03C4\u03BF \u03B1\u03BB\u03BB\u03AC\u03B6\u03B5\u03B9\u03C2 \u03C7\u03C9\u03C1\u03AF\u03C2 \u03BB\u03CC\u03B3\u03BF)", ui: { component: "textarea" } }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
