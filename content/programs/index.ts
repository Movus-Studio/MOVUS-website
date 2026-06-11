// Program type definitions + loader.
//
// The program CONTENT now lives in the per-file JSON siblings in this folder
// (team.json, squad.json, …), managed by TinaCMS. This loader re-assembles them
// into the `programs` array the rest of the app already imports — so consumers
// (ProgramsGrid, /programs, /programs/[slug], about, sitemap) are unchanged.
//
// `slug` is the file identity and is re-attached here, NOT stored in the JSON,
// so the CMS can never change a program's URL / SEO slug.

export interface ProgramFAQ {
  question: string;
  answer: string;
}

export interface SubProgram {
  name: string;
  tagline: string;
  category: string;
  audience: string;
  description: string;
  ctaLabel: string;
}

export interface Program {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  tag: string;
  tags?: string[];
  duration?: string;
  shortDescription: string;
  heroBody: string[];
  ctaLabel: string;
  howItWorks?: string;
  benefitsTitle: string;
  benefits: string[];
  subPrograms?: SubProgram[];
  faqs: ProgramFAQ[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
}

import team from "./team.json";
import squad from "./squad.json";
import personal from "./personal.json";
import privateProgram from "./private.json";
import ems from "./ems.json";
import emsCardio from "./ems-cardio.json";
import shapeSpace from "./shape-space.json";
import transformation from "./transformation.json";
import hybrid from "./hybrid.json";

// Order is meaningful (home cards + /programs listing order).
export const programs: Program[] = [
  { slug: "team", ...team },
  { slug: "squad", ...squad },
  { slug: "personal", ...personal },
  { slug: "private", ...privateProgram },
  { slug: "ems", ...ems },
  { slug: "ems-cardio", ...emsCardio },
  { slug: "shape-space", ...shapeSpace },
  { slug: "transformation", ...transformation },
  { slug: "hybrid", ...hybrid },
];
