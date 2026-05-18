# MOVUS Per-Page Meta Spec

**Date:** 2026-05-18
**Goal:** top-3 organic in Patras for `γυμναστήρια πάτρα` (head) while defending #1 for `ems πάτρα`.
**Sources:** `keywords.csv`, `competitor-gap.md`, `onsite-audit.md` (all in this folder).

## Constraints applied to every line below

- **Voice:** singular informal εσύ. No "εσείς"/"σας".
- **Forbidden vocab:** Revolutionary, explosive, κορυφαίο, καλύτερο, πρωτοποριακό, premium (as adjective), Νο1.
- **Forbidden punctuation:** em-dash (—), exclamation marks, emojis. Pipe `|` and colon `:` allowed. En-dash (–) only in number ranges.
- **CTA word:** `Κλείσε δοκιμαστική`. Do not say "δωρεάν δοκιμαστική" (devalues the offer per boutique positioning).
- **Title formula:** lead with keyword + `Πάτρα`, brand after pipe. Match competitor formula `[KEYWORD] Πάτρα | [BRAND]`.
- **Length:** titles 30–58 chars including the `| MOVUS` suffix from the layout template. Descriptions 110–155 chars.
- **"MOVUS" duplication:** the layout's `title.template: "%s | MOVUS"` already appends `| MOVUS`. Child pages must NOT include `MOVUS` in the title prop they pass (this is a current bug: `MOVUS EMS | MOVUS`, `MOVUS TEAM | MOVUS`, etc). Where the keyword phrasing needs `MOVUS` inside the title, set `title.absolute` to override the template.

## Notes on data confidence

- SEMrush MCP is blocked on the current Semrush plan. Volume buckets in `keywords.csv` are Google Suggest + intuition. Rankings logic still holds (formula, lengths, voice) — only the search-volume ordering between long-tail picks would shift with real Semrush data.
- The on-site audit was read against the current `movus-website/` tree. Project root CLAUDE.md warns "This is NOT the Next.js you know" — verify the Next 16 metadata field names (`alternates.canonical`, `title.absolute`, etc.) against `node_modules/next/dist/docs/` before implementing.

---

## 1. `/` (homepage)

**File:** `app/layout.tsx` (root metadata — currently sets `title.default`).

**Recommended title** (set as `title.default`, absolute, do NOT let template wrap it):
```
EMS Γυμναστήριο Πάτρα | MOVUS Fitness Studio
```
45 chars. Both head terms (`γυμναστήριο πάτρα` + `ems πάτρα`) hit in the first 22 chars. Brand preserved. Tests both rankings in one slot.

**Recommended description** (≤155):
```
EMS γυμναστήριο στην Πάτρα, Ιερού Λόχου 1. 20 λεπτά EMS κάνουν δουλειά για 4 ώρες. Κλείσε δοκιμαστική στο 2611 814 010.
```
118 chars. Carries the strongest USP (`20 λεπτά = 4 ώρες`) + street + phone (lesoma.gr's local-SEO trick that no other Patras gym copies).

**OG title / OG description:** same as `<title>` / `<meta description>`. Do not introduce a different `| MOVUS Blog`-style suffix here.

**H1 follow-up (out of scope for meta but the highest-leverage on-page fix):** the homepage `<h1>` is `"FUTURE OF FITNESS"` with zero Greek/local keywords. Either add a Greek H1 above/below the hero or convert the hero copy. Suggested Greek H1: `EMS Γυμναστήριο. Πάτρα.` (matches the brand's negation-affirmation rhythm and plants the head term where the crawler weights it most).

---

## 2. `/about`

**File:** `app/about/page.tsx` lines 12-21.

**Title** (template-friendly — passes string, template appends `| MOVUS`):
```
Ποιοι είμαστε. EMS Fitness Studio Πάτρα
```
Resolves to `Ποιοι είμαστε. EMS Fitness Studio Πάτρα | MOVUS` (~48 chars).

**Description:**
```
Πιστοποιημένοι προπονητές EMS και personal training στην Πάτρα. Η φιλοσοφία, η ομάδα και ο χώρος του MOVUS, Ιερού Λόχου 1.
```
123 chars.

**Add:** `alternates.canonical: "https://movus.gr/about"`.

---

## 3. `/contact`

**File:** `app/contact/page.tsx` lines 10-18.

**Title:**
```
Επικοινωνία. Ιερού Λόχου 1, Πάτρα
```
Resolves to `Επικοινωνία. Ιερού Λόχου 1, Πάτρα | MOVUS` (~41 chars).

**Description:**
```
Κλείσε δοκιμαστική, μάθε ωράριο και τιμές. MOVUS EMS γυμναστήριο, Ιερού Λόχου 1, Πάτρα. Τηλ. 2611 814 010.
```
107 chars. Targets `δοκιμαστική προπόνηση πάτρα` + `γυμναστήριο πάτρα ωράριο` clusters simultaneously.

**Fixes also required on this page:**
- Strip `Ενδιαφέρεστε` from OG description (currently uses εσείς form — violates voice rule).
- Add `alternates.canonical: "https://movus.gr/contact"`.

---

## 4. `/programs`

**File:** `app/programs/page.tsx` lines 10-19.

**Title:**
```
Προγράμματα EMS, Personal & Ομαδικά Πάτρα
```
Resolves to `Προγράμματα EMS, Personal & Ομαδικά Πάτρα | MOVUS` (~50 chars).

**Description:**
```
Εννέα προγράμματα γυμναστικής στο MOVUS Πάτρα. EMS, personal training, ομαδικά, Shape Space. Διάλεξε αυτό που ταιριάζει στο σώμα σου.
```
133 chars.

**Fixes also required:**
- Strip `Revolutionary` and `explosive` from current OG description (violates forbidden vocab).
- Add `alternates.canonical: "https://movus.gr/programs"`.

---

## 5. `/programs/ems`  ←  highest-priority page

**File:** `app/programs/[slug]/page.tsx` (metadata generator) reading `content/programs.ts` line 293.

Currently `MOVUS EMS | MOVUS` (duplicate brand). Strip the `MOVUS ` prefix in the metadata generator OR use `title.absolute` per program.

**Title** (`absolute` — overrides the layout template so we can put `MOVUS` exactly where we want it):
```
EMS Πάτρα | MOVUS EMS Fitness Studio
```
36 chars. We're already #1 for `ems πάτρα` — this title keeps the keyword first (defensive) and adds the studio category descriptor (extensive, captures `ems fitness studio πάτρα`).

**Description:**
```
EMS γυμναστήριο στην Πάτρα. 20 λεπτά EMS = 4 ώρες παραδοσιακής προπόνησης. Δύναμη, σύσφιξη, καύση σε ένα session. Ιερού Λόχου 1.
```
130 chars.

**Add:** `alternates.canonical: "https://movus.gr/programs/ems"`.

**On-page follow-up (out of meta scope but data-driven):** FAQ block answering `ems τι είναι`, `ems αντενδείξεις`, `ems παρενέργειες`, `ems τιμή`. All four are info-intent featured-snippet shots from `keywords.csv`. Wire to existing `FAQPage` JSON-LD.

---

## 6. `/programs/ems-cardio`

**File:** `content/programs.ts` line 379.

**Title:**
```
EMS Cardio Πάτρα. Αερόβιο με Ηλεκτροδιέγερση
```
Resolves to `EMS Cardio Πάτρα. Αερόβιο με Ηλεκτροδιέγερση | MOVUS` (~52 chars). Brings in the Greek term `ηλεκτροδιέγερση` which yava.gr ranks on but we don't.

**Description:**
```
Αερόβιο με EMS στην Πάτρα. Μεγαλύτερη καύση λίπους, βαθύτερη ενεργοποίηση μυών, αποτέλεσμα στο μισό χρόνο.
```
107 chars.

---

## 7. `/programs/personal`

**File:** `content/programs.ts` line 175.

**Title** (`absolute`):
```
Personal Trainer Πάτρα | MOVUS Fitness Studio
```
45 chars. `personal trainer πάτρα` is the 2nd-highest commercial term and no boutique studio currently competes on it beyond studio6 and kleoniki — open lane.

**Description (114):**
```
Personal training στο MOVUS Πάτρα. Εξατομικευμένο πλάνο, στοχευμένη καθοδήγηση, αποτέλεσμα από την πρώτη συνεδρία.
```

---

## 7b. `/personal-training` (NEW standalone route)

Confirmed 2026-05-18: new route on top of `/programs/personal`. The two pages target the same query from different angles — brand-led service page vs. programs-grid card. `/personal-training` should be canonical; `/programs/personal` `rel=canonical` points to it.

**Title (`absolute`, 45):**
```
Personal Trainer Πάτρα | MOVUS Fitness Studio
```

**Description (116):**
```
Personal trainer στην Πάτρα. Εξατομικευμένα πλάνα, ιδιαίτερα μαθήματα, τιμές personal training MOVUS. Ιερού Λόχου 1.
```
Captures `personal trainer πάτρα` (320), `personal training πάτρα` (210), `personal trainer πάτρα τιμές` (140), plus `ιδιαίτερα μαθήματα` (Greek market's term for 1-on-1 coaching). Different angle than `/programs/personal` to prevent cannibalisation.

**Do NOT include:** ΤΕΦΑΑ / στρατιωτική / αστυνομία / σχολές prep verticals. MOVUS does not offer these services (confirmed by owner 2026-05-18). Those keywords were dropped from `keywords.csv`.

---

## 8. `/programs/private`

**File:** `content/programs.ts` line 234.

**Title:**
```
Private Training Πάτρα. Αποκλειστικός Coach
```
Resolves to `Private Training Πάτρα. Αποκλειστικός Coach | MOVUS` (~51 chars).

**Description:**
```
Αποκλειστική προπόνηση 1-σε-1 στο MOVUS Πάτρα. Όλο το πλάνο, η προσοχή και η ενέργεια του coach είναι μόνο για εσένα.
```
118 chars.

---

## 9. `/programs/team`

**File:** `content/programs.ts` line 35.

**Title** (`absolute` — strip the `MOVUS TEAM` duplicate):
```
Ομαδικά Μαθήματα Γυμναστικής Πάτρα | MOVUS TEAM
```
47 chars. Targets `ομαδικά μαθήματα γυμναστικής πάτρα` (170) directly.

**Description:**
```
Ομαδικά στο MOVUS Πάτρα. MOVE για ένταση και καύση, FLOW για κινητικότητα και σύνδεση με το σώμα. Διαλέγεις τη μία ή τις εναλλάσσεις.
```
134 chars (3-char overrun on the on-brand fragment rhythm — acceptable, or shorten to `… τις εναλλάσσεις και τις δύο.` to compress further).

---

## 10. `/programs/squad`

**File:** `content/programs.ts` line 115.

**Title:**
```
Squad Training Πάτρα. Μικρή ομάδα, μέγιστη προσοχή
```
Resolves to ~58 chars. Tight but fits.

**Description:**
```
Μικρή ομάδα, μέγιστη προσοχή στο MOVUS Πάτρα. Ο coach βλέπει κάθε επανάληψη. Personal training με την ενέργεια της ομάδας.
```
122 chars.

---

## 11. `/programs/shape-space`

**File:** `content/programs.ts` line 439.

**Title:**
```
Shape Space Πάτρα. Vacuum, Infrared, EMS
```
Resolves to `Shape Space Πάτρα. Vacuum, Infrared, EMS | MOVUS` (~48 chars). Targets niche head terms (`vacuum πάτρα`, `infrared πάτρα`, `shape space πάτρα`) where there is literally no on-domain competition in Πάτρα.

**Description:**
```
Πέντε τεχνολογίες σώματος σε έναν χώρο στην Πάτρα. Θερμότητα, αρνητική πίεση, EMS, αναδόμηση κολλαγόνου, αρωματοθεραπεία.
```
122 chars.

---

## 12. `/programs/transformation`

**File:** `content/programs.ts` line 506.

**Title:**
```
Transformation Πρόγραμμα Πάτρα. Personal + Shape Space
```
Resolves to ~62 chars — slightly over the 60 cap. Tighter alternative: `Transformation Πάτρα. Personal + Shape Space` → `… | MOVUS` = ~53 chars ✓. Use the tighter one.

**Description:**
```
Personal training και Shape Space σε ένα ολοκληρωμένο πλάνο στην Πάτρα. Χτίζεις δύναμη μέσα, αναδιαμορφώνεις το σώμα έξω.
```
120 chars.

---

## 13. `/programs/hybrid`

**File:** `content/programs.ts` line 576.

**Title:**
```
Hybrid Πάτρα. Personal Training + EMS Cardio
```
Resolves to `Hybrid Πάτρα. Personal Training + EMS Cardio | MOVUS` (~52 chars).

**Description:**
```
Δύο κόσμοι σε ένα πλάνο στο MOVUS Πάτρα. Personal training για δύναμη, EMS Cardio για αντοχή και καύση.
```
103 chars.

---

## 14. `/blog`

**File:** `app/blog/page.tsx` lines 8-17.

**Title:**
```
Blog. EMS, Fitness & Διατροφή Πάτρα
```
Resolves to `Blog. EMS, Fitness & Διατροφή Πάτρα | MOVUS` (~43 chars).

**Description:**
```
Tips για EMS, fitness, ομαδικά και διατροφή από την ομάδα του MOVUS Πάτρα. Πρακτικές οδηγίες για αποτέλεσμα που νιώθεις.
```
120 chars. Uses the proof-word `νιώθεις` per voice profile.

**Add:** `alternates.canonical: "https://movus.gr/blog"`.

---

## 15. `/blog/ems-patra-ideal-workout-for-busy-people`

**File:** `content/blog.ts` line 13 (post `title` / `excerpt` fields feed metadata).

**Current title contains an em-dash** (`EMS Πάτρα – Γιατί …`) — violates the em-dash rule. Replace.

**Title:**
```
EMS Πάτρα: Η Ιδανική Προπόνηση για Πολυάσχολους
```
47 chars. Resolves through `title.template` if you want `… | MOVUS` appended (would push to ~55 chars — still safe).

**Description:**
```
Γιατί 20 λεπτά EMS αξίζουν 4 ώρες κλασικής προπόνησης. Πλήρης οδηγός για το EMS στην Πάτρα και πώς λειτουργεί στο MOVUS.
```
119 chars.

**Also fix the inconsistency** — currently `<title>` uses `… | MOVUS` template suffix but OG title uses `… | MOVUS Blog`. Pick one. Recommend dropping the OG override and letting both use `| MOVUS`.

---

## 16-17. `/privacy-policy` and `/terms-of-service`

Leave current titles + descriptions as-is. They already have explicit canonicals.

Optional: add `robots: { index: false, follow: true }` to both. Pros: removes thin pages from index, concentrates authority on commercial pages. Cons: cuts off the path to legal pages from `site:movus.gr` queries. Recommend **keep indexable** for trust-signal purposes (visitors and Google value seeing them).

---

## 18. `/not-found`

**File:** `app/not-found.tsx`.

Add explicit metadata to the route:

**Title (`absolute`):** `404. Η σελίδα δεν βρέθηκε | MOVUS` (~36 chars).
**Description:** `Η σελίδα δεν βρέθηκε. Πήγαινε πίσω στην αρχική του MOVUS, EMS γυμναστήριο στην Πάτρα.` (~88 chars).
**Robots:** `{ index: false, follow: true }`.

---

## Implementation order (when you say go)

The agent dispatch produced **three** independent fix-bundles. The meta rewrites above are bundle 2. The other two are quick mechanical wins. Suggested ship order:

1. **Bundle A — schema + canonicals (P0, half-day):**
   - `lib/schema.ts` L7: `@type: "LocalBusiness"` → `@type: ["LocalBusiness", "HealthClub"]`.
   - Add `alternates.canonical` to every route's `metadata` export (template: `https://movus.gr/<route>`).
   - Add `WebSite` + `SearchAction` schema in `app/layout.tsx` (unlocks branded-query sitelinks search box).
   - Add `Organization` schema in `app/layout.tsx`.
   - Add `noindex` to `/not-found`.

2. **Bundle B — meta rewrites (this document, half-day):**
   - Strip duplicate `MOVUS` from program titles (one-line generator fix) OR override via `title.absolute` per program.
   - Replace the 18 title/description blocks per the table above.
   - Replace em-dash in blog post 1 title.
   - Replace `Ενδιαφέρεστε` (εσείς form) in `/contact` OG description.
   - Replace `Revolutionary` + `explosive` in `/programs` OG description.

3. **Bundle C — schema enrichment + OG images (1 day):**
   - Per-program `Service` schemas with `serviceType`, `offers`, `image`.
   - `BreadcrumbList` on every route (currently only on a few).
   - `OfferCatalog` for package pricing (EMS, PERSONAL, TEAM, TRANSFORMATION) — only after pricing is finalised.
   - `hasMap` field in `LocalBusiness`.
   - Add Facebook + TikTok to `LocalBusiness.sameAs` (after accounts exist).
   - Per-route `opengraph-image.tsx` for `/`, `/programs`, `/programs/ems`, `/programs/shape-space` (highest-traffic pages).

## Out-of-scope items the agents surfaced (do not block the rewrite)

- **Google Business Profile is the bigger lever than meta tags** for `γυμναστήρια πάτρα` (local pack). Reviews velocity + categories + photos + posts. The competitor agent estimates 50+ reviews are needed to clear position #3 in the Patras local pack. Worth a separate GBP brief once meta is shipped.
- **Search Console verification** (DNS TXT) — gives ground-truth query data once indexed. Pre-launch task.
- **Backlinks from Greek local sites** — patrasevents, thebest.gr, press partnerships. Off-page work, not meta.
- **New service sub-pages** — `/personal-training` and `/pilates` are open lanes per the competitor agent. Decide whether to spin them up as standalone routes or fold into `/programs/personal` and `/programs` hub respectively.
