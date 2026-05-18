# MOVUS Keyword Discovery Summary

**Market:** Patras, Greece. **Database target:** gr. **Language priority:** Greek (el), secondary English (en).
**Total keywords captured:** 132 across 8 target clusters.

## Data source caveat
SEMrush MCP returned a plan-restriction error on first call (no MCP access on current Semrush plan), so the volume and KD columns are **directional estimates** derived from:
- Google Suggest autocomplete (`hl=el`, `gl=gr`) on 30 seed queries
- Local-market intuition (Patras population ~210k, university-heavy demo)
- Cross-checked against national term hierarchies visible in autocomplete relevance scores

Numbers should be treated as relative-magnitude buckets, not exact monthly searches. When the SEMrush plan is upgraded, re-run `phrase_kdi` against the full keyword list to harden the volume/KD columns.

## Top 10 keywords overall (by combined volume × commercial intent)

1. **γυμναστήρια πάτρα** — head term, local pack, must-win
2. **γυμναστήριο πάτρα** — singular variant, same SERP
3. **ems πάτρα** — strongest specialised commercial term, lower competition than head
4. **personal trainer πάτρα** — second strongest specialised commercial
5. **pilates πάτρα** — high-volume modality
6. **αδυνάτισμα γρήγορα** — top-of-funnel goal driver (blog)
7. **crossfit πάτρα** — adjacent modality, intercept with functional content
8. **ems προπόνηση** — national informational head, drives top-of-funnel
9. **σύσφιξη σώματος** — top-of-funnel goal driver (blog)
10. **ομαδικά μαθήματα γυμναστικής πάτρα** — group hub head

## Top 5 per cluster

### homepage
1. γυμναστήρια πάτρα (720)
2. γυμναστήριο πάτρα (590)
3. γυμναστήρια στην πάτρα (260)
4. gyms in patras (170)
5. γυμναστήρια πάτρας τιμές (140)

### about
1. γυμναστές πάτρα (90)
2. ομάδα προπονητών πάτρα (40)
3. πιστοποιημένοι προπονητές πάτρα (30)
4. σχετικά με μας movus (10)
5. ιστορία movus πάτρα (10)

### programs (hub)
1. pilates πάτρα (390)
2. προπόνηση πάτρα (170)
3. αδυνάτισμα πάτρα (170)
4. reformer pilates πάτρα (210)
5. pilates reformer πάτρα (170)

### programs/ems
1. ems πάτρα (390)
2. ems προπόνηση (260)
3. ems training πάτρα (210)
4. ems training τι είναι (170)
5. ems αντενδείξεις (170)

### programs/personal-training
1. personal trainer πάτρα (320)
2. personal training πάτρα (210)
3. στρατιωτική προετοιμασία πάτρα (170)
4. personal trainer πάτρα τιμές (140)
5. προετοιμασία σχολών πάτρα (140)

### programs/group
1. crossfit πάτρα (260)
2. ομαδικά μαθήματα γυμναστικής πάτρα (170)
3. ομαδικά προγράμματα πάτρα (140)
4. functional training πάτρα (140)
5. group fitness πάτρα (90)

### blog
1. αδυνάτισμα γρήγορα (390)
2. σύσφιξη σώματος (260)
3. αερόβια άσκηση (260)
4. γυμναστική για γυναίκες (260)
5. πόσες φορές γυμναστική την εβδομάδα (210)

### contact
1. δοκιμαστική προπόνηση πάτρα (70)
2. δωρεάν δοκιμή ems πάτρα (40)
3. γυμναστήριο πάτρα κρατήσεις (40)
4. εγγραφή γυμναστήριο πάτρα (40)
5. γυμναστήριο πάτρα ωράριο (40)

## SERP-feature observations

- **Local pack dominates** every `<seed> + πάτρα` query. For the homepage cluster, ranking blue-link top-3 without a strong Google Business Profile is a losing strategy. GBP optimisation (NAP, photos, reviews, hours, category) is a prerequisite to the on-page work.
- **Map-pack** rules `κοντά μου` variants and any neighborhood-modified query. Add service-area mentions in schema and footer.
- **Blue-link real estate** opens up on price/comparison/info queries (`τιμές`, `τι είναι`, `αντενδείξεις`, `vs`, `πόσες φορές`). Highest leverage for content marketing.
- **Featured snippets** are winnable for the question-shaped queries (`ems training τι είναι`, `πόσες φορές γυμναστική την εβδομάδα`, `ems αντενδείξεις`). Pair these answers with `FAQPage` JSON-LD.
- **Knowledge panel** lights up for brand and NAP queries. Will materialise post-launch once GBP + structured data ship.

## Surprising long-tail finds from autocomplete

- **`ems πατρα τιμη`** is suggested directly by Google. Pricing is the gating factor for EMS leads — surface it transparently on the EMS page rather than hiding it behind a contact-form.
- **`pilates πατρα` autocompletes into 7 neighborhoods** (Αγυιά, κέντρο, Αγία Σοφία, Μποζαϊτικα, Κλαούς, …). Patras searchers think hyper-local for pilates. Mirror that on the relevant program page with a service-area block. EMS and personal-training autocompletes do **not** show this neighborhood expansion — those are city-wide queries.
- **`τεφαα προετοιμασία πάτρα`** and military/police school prep are a distinct vertical with serious multi-month commitment value. Worth a dedicated landing under personal-training even though MOVUS is positioned as boutique fitness.
- **`ems αντενδείξεις` (170) and `ems παρενέργειες` (140)** rank as info heads. Buyers want safety reassurance before they book. A frank, technical safety section on the EMS page (with citations) earns trust + a featured snippet shot.
- **`crossfit πάτρα τιμες`** (90) — CrossFit dominates Patras "functional" mindshare. Don't compete on the term, but rank for `functional training πάτρα` (140) and capture the same audience without claiming CrossFit branding.
- **`gyms in patras`** (170) is a real English-language query, almost certainly Erasmus students and tourists. A single English meta description and a thin EN landing block on the homepage would lock this with minimal effort.

## Recommendations for the on-page agent (Agent 2)

- Homepage title + H1 should target the head `γυμναστήρια πάτρα` plus a brand qualifier; do not waste the title on "MOVUS" alone.
- EMS page should answer `τι είναι`, `αντενδείξεις`, `παρενέργειες`, `τιμή`, `αποτελέσματα` in a structured FAQ block (snippet-ready).
- Personal-training page must split into at least two H2 sub-sections: general personal training, and military/police/τεφαα prep.
- Group page must rank for both Greek (`ομαδικά μαθήματα`) and English (`functional training`, `group fitness`) variants.
- Programs hub must mention pilates neighborhoods (Αγυιά, κέντρο, Μποζαϊτικα) in body copy for hyper-local autocomplete capture.
- Contact page should surface `δοκιμαστική προπόνηση πάτρα` as the primary conversion event (trial-class is highest-converting query class).

## Notes for Agent 3 (titles + meta descriptions)

- Voice rules per user memory: εσύ form, no em-dashes, no superlatives, no exclamations, no emojis. The keyword `καλύτερα γυμναστήρια πάτρα` is in the CSV for ranking purposes only — do not use the word "καλύτερα" in copy.
- Always lead with the city term ("Πάτρα" or "στην Πάτρα") in titles for local-pack signalling.
- Pricing queries are commercial: titles for those pages should include the word "τιμές" or a price range, not "μάθε περισσότερα".
- Trial-class CTA copy should be `Κλείσε δοκιμαστική` not `Δωρεάν δοκιμαστική` — "δωρεάν" devalues the offer per boutique positioning.
