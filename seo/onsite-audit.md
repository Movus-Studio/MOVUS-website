# MOVUS — On-site SEO Audit

**Audited:** 2026-05-18
**Scope:** All routes under `movus-website/app/` + layout, sitemap, robots, next.config, schema lib.
**Domain:** https://movus.gr · `<html lang="el">` · `metadataBase: https://movus.gr`
**Title template (layout):** `"%s | MOVUS"` (template appends " | MOVUS" = 8 chars to every child title)
**Root default title fallback:** `"MOVUS, EMS Fitness Studio | Πάτρα"`

---

## 1. Per-route metadata table

Character counts include the " | MOVUS" suffix appended by the layout's `title.template`. Title overflow flagged at >60 desktop / >78 truncation. Description overflow flagged at >160. Greek chars count as 1 (single code point) — Google measures pixel width, but Greek letters are wide so 60 is the safer cap.

| # | Route | File (line) | Title (resolved) | T-len | Description | D-len | Canonical | OG tags | Issues |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `/` | `app/page.tsx` (uses root `layout.tsx` metadata, lines 29-93) | `MOVUS, EMS Fitness Studio \| Πάτρα` (default, template NOT applied) | 33 | `Το premium EMS γυμναστήριο της Πάτρας. 20 λεπτά EMS = 4 ώρες παραδοσιακής προπόνησης. Κλείσε δοκιμαστικό σήμερα.` | 113 | `https://movus.gr` | type=website, locale=el_GR, url, siteName, title, description, 1 image (`/og-image.jpg` 1200×630) | OK. Title is the only one with "Πάτρα" embedded — good for local. Could rank a primary head-keyword like "γυμναστήριο" earlier. |
| 2 | `/about` | `app/about/page.tsx` (12-21) | `Σχετικά \| MOVUS` | 15 | `High-tech EMS fitness studio στην Πάτρα. Η ιστορία μας και η φιλοσοφία μας για το μέλλον του fitness.` | 102 | **MISSING** (falls back to layout's `https://movus.gr` — WRONG, will canonicalize all sub-pages to homepage if `alternates` is inherited as-set) | OG title + desc overridden, but `type`, `url`, `images` inherited from root | **CRITICAL canonical issue** (see Gaps). Title "Σχετικά" is generic — no local-intent keyword. OG title differs from `<title>` (good or bad? document inconsistency). |
| 3 | `/contact` | `app/contact/page.tsx` (10-18) | `Επικοινωνία \| MOVUS` | 19 | `Επικοινώνησε μαζί μας ή επισκέψου μας στην Ιερού Λόχου 1, Πάτρα, Αχαΐα, 26331, Ελλάδα. Τηλ: +30 2611 81 4010.` | 109 | **MISSING** | OG title + desc overridden (mixes εσύ + εσείς voice — `Ενδιαφέρεστε`), images inherited | **CRITICAL canonical issue**. Voice violation: "Ενδιαφέρεστε" in OG description (project memory: use εσύ form only). |
| 4 | `/programs` | `app/programs/page.tsx` (10-19) | `Προγράμματα \| MOVUS` | 19 | `Τα πιο ευέλικτα προγράμματα γυμναστικής στην Πάτρα. Εξερεύνησε EMS, Shape Space και ομαδικά στο MOVUS.` | 102 | **MISSING** | OG title + desc overridden, images inherited | **CRITICAL canonical issue**. OG description uses forbidden "Revolutionary" + "explosive" (project memory: forbids "κορυφαίο/Revolutionary"). Title generic, no Patras. |
| 5 | `/programs/team` | `app/programs/[slug]/page.tsx` (23-37) → `content/programs.ts` line 35 | `MOVUS TEAM \| MOVUS` | 18 | `Δύο ροές, μία ομάδα. MOVE για ένταση, δύναμη, καύση. FLOW για κίνηση με σκοπό: έλεγχο, κινητικότητα, σύνδεση με το σώμα σου. Διαλέγεις τη μία ή τις εναλλάσσεις.` | 164 | **MISSING** | OG title `MOVUS TEAM \| MOVUS`, desc=shortDescription | Title duplicates the word "MOVUS". Description **4 chars over** 160. No local keyword. |
| 6 | `/programs/squad` | same generator, line 115 | `MOVUS SQUAD \| MOVUS` | 19 | `Μικρή ομάδα, μεγάλη προσοχή. Ο coach βλέπει κάθε επανάληψη, κάθε κίνηση, κάθε λεπτομέρεια. Η ουσία του personal training με την ενέργεια της ομάδας.` | 153 | **MISSING** | as above | Duplicate "MOVUS". |
| 7 | `/programs/personal` | line 175 | `MOVUS PERSONAL \| MOVUS` | 22 | `Στοχευμένη καθοδήγηση, εξατομικευμένο πλάνο, αποτέλεσμα που φαίνεται γρήγορα. Ο coach είναι εκεί για εσένα. Βλέπει κάθε κίνηση, προσαρμόζει σε πραγματικό χρόνο και κρατά το επίπεδο εκεί που πρέπει να είναι.` | 213 | **MISSING** | as above | Description **53 chars over** 160 — will truncate. High-intent keyword "personal training Πάτρα" absent. |
| 8 | `/programs/private` | line 234 | `MOVUS PRIVATE \| MOVUS` | 21 | `Η απόλυτη εξατομίκευση. Όλο το πλάνο, η προπόνηση και η προσοχή είναι αποκλειστικά πάνω σου. Μέγιστο αποτέλεσμα, μέγιστη ακρίβεια, χωρίς συμβιβασμούς.` | 156 | **MISSING** | as above | OK length. No local keyword. |
| 9 | `/programs/ems` | line 293 | `MOVUS EMS \| MOVUS` | 17 | `Είκοσι λεπτά που αισθάνεσαι παντού. Η τεχνολογία EMS ενεργοποιεί μύες που δεν αγγίζεις ποτέ με κλασική προπόνηση. Δύναμη, σύσφιξη και καύση σε ένα session. Λιγότερος χρόνος, περισσότερη δουλειά.` | 196 | **MISSING** | as above | **HIGHEST-INTENT PAGE** ("EMS Πάτρα"). Description **36 over**. Title doesn't include "Πάτρα". Title duplicates "MOVUS". |
| 10 | `/programs/ems-cardio` | line 379 | `MOVUS EMS CARDIO \| MOVUS` | 24 | `Το αερόβιο του μέλλοντος. Κάθε κίνηση μετράει διπλά. Το EMS ενεργοποιεί το σώμα σου σε βάθος ενώ κινείσαι, εκεί που το κλασικό αερόβιο δεν φτάνει ποτέ. Μεγαλύτερη καύση λίπους, βαθύτερη ενεργοποίηση μυών, περισσότερο αποτέλεσμα στο μισό χρόνο.` | 245 | **MISSING** | as above | Description **85 over**. |
| 11 | `/programs/shape-space` | line 439 | `MOVUS SHAPE SPACE \| MOVUS` | 25 | `Δεν είναι προπόνηση. Είναι κάτι που δεν έχεις ξανακάνει. Συνδυασμός τεχνολογιών (θερμότητα, αρνητική πίεση, EMS, αναδόμηση κολλαγόνου, αρωματοθεραπεία) που δουλεύουν το σώμα σου σε βάθος. Από την πρώτη συνεδρία νιώθεις τη διαφορά.` | 232 | **MISSING** | as above | Description **72 over**. Unique product — should rank for "shape space Πάτρα", "vacuum θεραπεία Πάτρα", "infrared Πάτρα". |
| 12 | `/programs/transformation` | line 506 | `MOVUS TRANSFORMATION \| MOVUS` | 28 | `Το πιο ολοκληρωμένο πλάνο που έχουμε. Personal training που χτίζει δύναμη και φόρμα, και Shape Space που αναδιαμορφώνει το σώμα από μέσα. Ένας μήνας αρκεί για να καταλάβεις γιατί αυτό είναι το πλάνο που έπρεπε να ξεκινήσεις από την αρχή.` | 235 | **MISSING** | as above | Description **75 over**. |
| 13 | `/programs/hybrid` | line 576 | `MOVUS HYBRID \| MOVUS` | 20 | `Για όσους θέλουν να σπάσουν τα όρια τους. Personal training που χτίζει δύναμη και EMS CARDIO που ανεβάζει την αντοχή και την καύση σε άλλο επίπεδο. Δύο κόσμοι σε ένα πλάνο. Και ο συνδυασμός κάνει τη διαφορά.` | 205 | **MISSING** | as above | Description **45 over**. |
| 14 | `/blog` | `app/blog/page.tsx` (8-17) | `Blog \| MOVUS` | 12 | `Tips για Fitness, EMS, Ομαδικά και Διατροφή από το MOVUS Πάτρα.` | 63 | **MISSING** | OG title + desc overridden, type/images inherited | **CRITICAL canonical**. Description is unusually short — room for keyword expansion. Title "Blog" is dead-weight. |
| 15 | `/blog/ems-patra-ideal-workout-for-busy-people` | `app/blog/[slug]/page.tsx` (22-39) → `content/blog.ts` line 13 | `EMS Πάτρα – Γιατί το EMS είναι η ιδανική γυμναστική για πολυάσχολους \| MOVUS` | 76 | `Το EMS είναι η πιο γρήγορη και αποτελεσματική μέθοδος γυμναστικής για όσους έχουν περιορισμένο χρόνο. Μόλις 20 λεπτά προπόνησης αρκούν για να δεις πραγματικά αποτελέσματα στο σώμα σου.` | 184 | **MISSING** | OG: title `${title} \| MOVUS Blog`, desc=excerpt, type=article, publishedTime, modifiedTime | Title **76 chars** — borderline truncation. OG title becomes `… \| MOVUS Blog` while `<title>` becomes `… \| MOVUS` (inconsistency). Description **24 over**. Em-dash "–" in title (project memory forbids em-dashes in user-facing copy). |
| 16 | `/privacy-policy` | `app/privacy-policy/page.tsx` (6-17) | `Πολιτική Απορρήτου \| MOVUS` | 26 | `Πώς η MOVUS συλλέγει, χρησιμοποιεί και προστατεύει τα προσωπικά σου δεδομένα, σύμφωνα με τον GDPR.` | 98 | **`https://movus.gr/privacy-policy`** ✓ | None custom (inherits root); explicit `robots: index/follow` | One of only two pages with a canonical. Fine. |
| 17 | `/terms-of-service` | `app/terms-of-service/page.tsx` (5-16) | `Όροι Χρήσης \| MOVUS` | 19 | `Οι όροι και προϋποθέσεις χρήσης της ιστοσελίδας movus.gr και των υπηρεσιών MOVUS.` | 80 | **`https://movus.gr/terms-of-service`** ✓ | None custom (inherits root); explicit `robots: index/follow` | Fine. Consider `noindex` for legal pages to avoid keyword dilution. |
| 18 | `/not-found` (404) | `app/not-found.tsx` | (inherits root title default) | 33 | (inherits root description) | 113 | inherited (wrong) | inherited | No bespoke metadata. Should add `robots: { index: false }` and a custom title `"404 \| MOVUS"`. |

**API route:** `app/api/contact/route.ts` — server-only, no metadata, irrelevant to SEO.

---

## 2. Structured data (JSON-LD) inventory

All schema generators live in `lib/schema.ts` (lines 1-144). Currently emitted:

| Route | Schemas injected | Source |
|---|---|---|
| `/` | **`LocalBusiness`** (single) | `page.tsx` line 18-23 via `generateLocalBusinessSchema()` (schema.ts L3-58) |
| `/about` | `BreadcrumbList`, `FAQPage` (aboutFAQ) | `about/page.tsx` L26-40 |
| `/contact` | `BreadcrumbList`, `FAQPage` (contactFAQ) | `contact/page.tsx` L23-37 |
| `/programs` | `BreadcrumbList`, `FAQPage` (programsFAQ) | `programs/page.tsx` L61-77 |
| `/programs/[slug]` | **`Service`** + `BreadcrumbList` + `FAQPage` (per-program) | `programs/[slug]/page.tsx` L49-78 |
| `/blog` | `BreadcrumbList` only | `blog/page.tsx` L31-41 |
| `/blog/[slug]` | `Article` + `BreadcrumbList` | `blog/[slug]/page.tsx` L51-77 |
| `/privacy-policy` | `BreadcrumbList` | `privacy-policy/page.tsx` L24-34 |
| `/terms-of-service` | `BreadcrumbList` | `terms-of-service/page.tsx` L20-31 |
| `/not-found` | none | n/a |

`LocalBusiness` schema (lib/schema.ts L3-58) details:
- `@type: "LocalBusiness"` (NOT the more specific `HealthClub` / `ExerciseGym` / `SportsActivityLocation` — see Gaps)
- `@id: https://movus.gr/#business`, name, alternateName, description, url, telephone (+302611814010), email, image, address (Ιερού Λόχου 1, Πάτρα, Αχαΐα, 26331, GR), geo (38.2466, 21.7346), openingHoursSpecification (3 entries — Mon-Fri split, Sat), priceRange "€€", currenciesAccepted "EUR", paymentAccepted, areaServed City Πάτρα, sameAs Instagram only.
- **Missing fields:** `image` should be an array of 3+ images for HealthClub eligibility; no `aggregateRating`/`review`, no `hasMap`, no `logo`, no `priceRange` justification, no `acceptsReservations`, no `currenciesAccepted` array form, no Facebook/TikTok in `sameAs`.

`Service` schema (lib/schema.ts L77-98) details:
- Generic `Service` (no `HealthAndBeautyBusiness` / `ExercisePlan` specialization)
- Missing `offers`, `category`, `serviceType`, `image`, `aggregateRating`.

`Article` schema (lib/schema.ts L115-143) details:
- Plain `Article` (consider `BlogPosting` or `NewsArticle` for richer signals)
- Missing `image`, `mainEntityOfPage`, `wordCount`, author as `Person` instead of `Organization`.

**No `WebSite` or `SearchAction` schema anywhere** — would unlock sitelinks search box in SERP for branded queries.

---

## 3. Sitemap & robots

**`app/sitemap.ts`** — emits:
- 7 static URLs: `/`, `/programs`, `/about`, `/contact`, `/blog`, `/privacy-policy`, `/terms-of-service` (priorities 1.0 / 0.8 / 0.7 / 0.7 / 0.8 / 0.3 / 0.3)
- 9 program slug URLs: team, squad, personal, private, ems, ems-cardio, shape-space, transformation, hybrid (all priority 0.7)
- 1 blog slug URL: `ems-patra-ideal-workout-for-busy-people` (priority 0.6, uses `dateModified`)

**Total sitemap entries: 17.** Missing: nothing structural — all known routes are present.

**`app/robots.ts`** — minimal: `User-agent: * / Allow: /`, sitemap pointer to `https://movus.gr/sitemap.xml`. No `Disallow` for `/api/`, no AI bot rules (GPTBot, ClaudeBot, CCBot, Google-Extended).

---

## 4. Root layout signals (`app/layout.tsx`)

- `<html lang="el">` ✓ (good for Greek market)
- `viewport`: device-width / initial-scale 1 / viewportFit cover / **themeColor `#000000`** (project memory: `bg-movus-black` is `#0A0A0A`, theme-color is pure black — minor inconsistency)
- `metadata.metadataBase`: `https://movus.gr` ✓
- `metadata.keywords`: 8 keywords (Google ignores; fine to keep)
- `metadata.authors`: K₂O / k2o.io
- `metadata.openGraph`: full set, locale el_GR ✓, single 1200×630 image
- `metadata.twitter`: `summary_large_image`, no `@site`/`@creator` handle
- `metadata.alternates.canonical`: `https://movus.gr` ✓ (root only)
- `metadata.alternates.languages`: `{ el: "https://movus.gr" }` — **no `x-default` hreflang**, no `el-GR` regional variant
- `metadata.robots`: index/follow + googleBot max-* directives ✓
- `metadata.verification.google`: env-driven (`NEXT_PUBLIC_GSC_VERIFICATION`)
- `metadata.verification.other.msvalidate.01`: env-driven Bing
- Skip-link `<a href="#main-content">` ✓ (accessibility, not SEO)
- Single root JSON-LD on `/` only

---

## 5. next.config.ts findings

- `allowedDevOrigins: ["192.168.68.51"]` — dev-only, no SEO impact
- `images.qualities: [75, 90, 100]` — Next 16 quality whitelist
- **Redirects (all 301 / permanent):**
  - `/home` → `/`
  - `/home-el` → `/`
  - `/contact-el` → `/contact`
  - `/programs-el` → `/programs`
  - `/about-us-el` → `/about`
  - `/imotion-ems-el` → `/programs/ems`
  - `/shape-space-el` → `/programs/shape-space`
  - `/ishape-el` → `/programs/ems`
  - `/omadika-el` → `/programs/team`
  - `/blogs` → `/blog`
  - `/blogs/:path*` → `/blog/:path*`

Legacy Squarespace path migration looks complete. Good — preserves any earned link equity from `*-el` paths.

---

## 6. `<h1>` inventory

| Route | `<h1>` text |
|---|---|
| `/` | "FUTURE OF FITNESS" (split across 3 lines, "FITNESS" in orange — from Hero.tsx L11-15 + L136) |
| `/about` | "Όχι γυμναστήριο. EMS fitness studio στην Πάτρα." |
| `/contact` | "Μίλα μαζί μας. Ξεκινάμε." |
| `/programs` | "Εννέα προγράμματα. Ένα σύστημα." |
| `/programs/[slug]` | `program.title` (e.g. "MOVUS EMS", "MOVUS SHAPE SPACE") |
| `/blog` | "Tips για Fitness, EMS, Ομαδικά και Διατροφή" |
| `/blog/[slug]` | `post.title` (e.g. "EMS Πάτρα – Γιατί το EMS είναι η ιδανική γυμναστική για πολυάσχολους") |
| `/privacy-policy` | "Πολιτική Απορρήτου." |
| `/terms-of-service` | "Όροι Χρήσης & Προϋποθέσεις." |
| `/not-found` (404) | "Η σελίδα δεν βρέθηκε" |

**`<h1>` issues:**
- Homepage `<h1>` is "FUTURE OF FITNESS" — **zero local-intent keywords**, no "Πάτρα", no "γυμναστήριο", no "EMS". Pure brand pillar. This is the highest-leverage on-page fix for "γυμναστήρια Πάτρα" rankings.
- `/programs` `<h1>` "Εννέα προγράμματα" — no head keyword.
- `/blog` `<h1>` is plain English+Greek mix.

---

## 7. Gaps & flags (severity-ordered)

### P0 — Critical (blocking local-SEO performance)

1. **`HealthClub` / `ExerciseGym` / `SportsActivityLocation` schema NOT present.** Only generic `LocalBusiness` exists. For "γυμναστήρια Πάτρα" the more specific subtype is the single highest-leverage on-page signal. `lib/schema.ts` L7 should change `"@type": "LocalBusiness"` → `["LocalBusiness", "HealthClub", "ExerciseGym"]` (array form) or just `"HealthClub"`.
2. **Missing canonical on 5 indexable pages** (`/about`, `/contact`, `/programs`, `/blog`, `/blog/[slug]`, `/programs/[slug]`, `/not-found`). Without explicit `alternates.canonical` per route, Next still emits a self-referential canonical via `metadataBase`, **but** because root layout sets `alternates.canonical: "https://movus.gr"` this may be inherited unless Next overrides — needs runtime verification with `view-source`. Add explicit canonicals on every route to be safe.
3. **Homepage `<h1>` has no local keywords.** "FUTURE OF FITNESS" alone will not rank for "γυμναστήριο Πάτρα" or "EMS Πάτρα". Add a Greek H1 (or visually-hidden Greek H1) with head keyword.
4. **OG copy violates brand voice** in `/contact` ("Ενδιαφέρεστε" — εσείς form) and `/programs` ("Revolutionary EMS … explosive group fitness" — forbidden vocabulary). Per project memory, voice is εσύ form + no "Revolutionary".
5. **Em-dash in blog post title** (`EMS Πάτρα – Γιατί …`) — project memory forbids em-dashes in user-facing copy. Title also fed into `<title>`, OG, JSON-LD.

### P1 — High (over-length / cannibalization)

6. **Program descriptions are 30-85 chars over the 160 limit on 7 of 9 program pages** (personal, ems, ems-cardio, shape-space, transformation, hybrid, team). Google will truncate mid-sentence and the CTR will suffer. They need bespoke 150-160 char meta descriptions distinct from the on-page `shortDescription`.
7. **Title template duplicates the word "MOVUS"** on every `/programs/[slug]` page (e.g. `"MOVUS EMS | MOVUS"`). Either (a) strip `MOVUS ` prefix from program titles before passing to metadata, or (b) override `metadata.title.absolute` per program.
8. **Blog post `<title>` ≠ OG title** — `<title>` uses `… | MOVUS` template, OG title is `… | MOVUS Blog` (different suffix). Pick one.
9. **No `WebSite` schema with `SearchAction`** — branded query "movus" loses sitelinks search box.
10. **No `Organization` schema** at root (LocalBusiness ≠ Organization for the brand entity graph).

### P2 — Medium (missing enhancements)

11. **Hreflang incomplete.** `alternates.languages: { el: "..." }` exists but **no `x-default`**, and `el` should be `el-GR` (or both). Single-locale site so impact is small.
12. **`theme-color` is `#000000` but app uses `#0A0A0A`** — visual nit, no SEO impact, but worth a one-line fix while in the file.
13. **OG image — only one** (`/og-image.jpg` 1200×630). No per-route OG images. No `opengraph-image.tsx` dynamic generator. Per-program / per-post OG images would boost CTR from social and increase image-search surface.
14. **No `twitter:site` / `twitter:creator`** handles. Minor but free.
15. **No `Article.image` / `BlogPosting`** specialization. Article schema doesn't include the hero image URL.
16. **Service schema is generic** — could specialize as `ExercisePlan` for personal/team/squad/ems and as `Service` w/ `serviceType: "Body contouring"` for Shape Space.
17. **Robots.ts doesn't disallow `/api/`** (low risk — `/api/contact` is POST-only but Google can still try to crawl GET).
18. **No AI-bot crawl directives** — fine if you want training-data inclusion; flag if you don't.

### P3 — Low

19. **Legal pages indexable** — keep as-is unless thin-content penalty becomes a concern. Could `noindex` to concentrate authority.
20. **Author for blog is "Kostas" string** — could become `Person` schema with `sameAs` LinkedIn for E-E-A-T.
21. **`metadata.keywords` populated** — Google ignores; harmless to keep for Bing/Yandex.

---

## 8. Ready-to-rewrite list (priority order)

The downstream synthesis agent should write new title + description (+ OG variants) for these routes in this order. Each row includes the constraint the new copy must satisfy.

| # | Route | Priority reason | Title budget | Description budget | Notes |
|---|---|---|---|---|---|
| 1 | `/` | Homepage = highest authority page, root of all rankings | ≤60 (with "Πάτρα" + "EMS" + "γυμναστήριο") | 150-160 (head keyword + UVP + CTA verb) | Also rewrite `<h1>` — add a Greek H1 with head keyword. Decide whether to drop `title.default` for an absolute hand-written one. |
| 2 | `/programs/ems` | Primary product page · matches "EMS Πάτρα" intent · highest commercial intent slug | ≤60 (must include "EMS Πάτρα") | 150-160 (currently 196, 36 over) | Also: add `priceRange` if known. |
| 3 | `/programs/shape-space` | Unique product, low competition keywords ("shape space Πάτρα", "vacuum Πάτρα", "infrared θεραπεία Πάτρα") | ≤60 | 150-160 (currently 232, 72 over) | High-leverage long-tail opportunity. |
| 4 | `/programs/ems-cardio` | Secondary EMS intent | ≤60 | 150-160 (currently 245, 85 over) | |
| 5 | `/programs/personal` | "personal training Πάτρα" head term | ≤60 (must include "Personal Training Πάτρα") | 150-160 (currently 213, 53 over) | |
| 6 | `/programs/team` | "ομαδικά Πάτρα" head term | ≤60 | 150-160 (currently 164, 4 over) | |
| 7 | `/programs/transformation` | Package, high-ticket | ≤60 | 150-160 (currently 235, 75 over) | |
| 8 | `/programs/hybrid` | Package | ≤60 | 150-160 (currently 205, 45 over) | |
| 9 | `/programs/squad` | Micro-group | ≤60 | 150-160 (currently 153) | |
| 10 | `/programs/private` | 1-on-1 | ≤60 | 150-160 (currently 156) | |
| 11 | `/programs` | Hub page · "προγράμματα γυμναστικής Πάτρα" | ≤60 | 150-160 | Strip "Revolutionary"/"explosive" from OG copy. |
| 12 | `/about` | Brand E-E-A-T page · "γυμναστήριο Πάτρα" secondary | ≤60 | 150-160 | Add canonical. |
| 13 | `/contact` | Local pack reinforcement · NAP-heavy page | ≤60 (must include "Πάτρα") | 150-160 | Strip εσείς form ("Ενδιαφέρεστε"). Add canonical. |
| 14 | `/blog` | Topical hub · low priority pre-launch | ≤60 | 150-160 | Add canonical. |
| 15 | `/blog/ems-patra-ideal-workout-for-busy-people` | Only post, but high-intent slug · keep clean for "EMS Πάτρα" article | ≤60 (currently 76) | 150-160 (currently 184, 24 over) | Strip em-dash from title. Decide on title vs OG suffix consistency. |
| 16 | `/privacy-policy` | Legal · already has canonical · low | leave as-is unless brand-aligned | leave as-is | Optional: add `noindex`. |
| 17 | `/terms-of-service` | Legal · already has canonical · low | leave as-is | leave as-is | Optional: add `noindex`. |
| 18 | `/not-found` | 404 · low | add explicit metadata + `noindex` | n/a | One-time fix, not a rewrite job. |

---

## 9. Quick-win checklist (separate from the rewrite job)

These are mechanical fixes the engineer can ship without waiting on keyword/competitor agents:

- [ ] Add `alternates.canonical` to every route's `metadata` (template: `https://movus.gr/<route>`).
- [ ] Change `LocalBusiness` schema `@type` to `["LocalBusiness", "HealthClub"]` in `lib/schema.ts` L7.
- [ ] Add `WebSite` schema with `potentialAction: SearchAction` (homepage layout or page).
- [ ] Add `Organization` schema (root layout).
- [ ] Strip duplicate "MOVUS" from program meta titles (override per program or strip `MOVUS ` prefix when building title).
- [ ] Replace em-dash in blog post 1 title.
- [ ] Replace "Revolutionary/explosive" + εσείς-form in `/programs` and `/contact` OG copy.
- [ ] Add `noindex` to `/not-found` and consider for legal pages.
- [ ] Add Facebook + TikTok to `LocalBusiness.sameAs` once accounts exist.
- [ ] Add `x-default` hreflang and switch `el` → `el-GR`.
- [ ] Add per-route `opengraph-image.tsx` for at minimum `/`, `/programs`, `/programs/ems`, `/programs/shape-space`.
