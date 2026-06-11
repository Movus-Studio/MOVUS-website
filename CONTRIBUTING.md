# Contributing — MOVUS website

This site has a **TinaCMS content layer**. The studio owner edits **content** through
a CMS; developers edit **code**. This doc is how the two coexist without stepping on
each other.

## TL;DR for developers

- **`git pull` before you start, and before you push.** The owner commits content to
  `main` too — your local clone goes stale between visits.
- **NEVER `git push --force`** — it would wipe the owner's content edits.
- Local dev: **`npm run dev`** (Tina + Next on **:3001**). To test a production build
  locally use **`npm run build:next`**, _not_ `npm run build` (see gotcha #1).

## Who edits what

`main` on GitHub is the single source of truth, with **two writers**:

| Writer | How | Touches |
| --- | --- | --- |
| Studio owner | TinaCMS at `/admin` (logs in by email, commits via bot) | `content/**/*.json` only |
| Developers | Terminal / editor | Code (`app/`, `components/`, `lib/`, styles) + the Tina schema |

Because devs edit **code** and the owner edits **content JSON** (different files),
merges are essentially **conflict-free** — git merges them automatically. Treat the
owner as a teammate who only ever commits to `content/*.json`.

## Local development

- `npm run dev` → `tinacms dev -c "next dev -p 3001"`. Site at
  http://localhost:3001, CMS at http://localhost:3001/admin. Runs **offline** (no
  cloud creds); local edits write straight to the JSON files on disk.
- **Do NOT run `npm run build` locally** — its `tinacms build` step needs Tina Cloud
  creds and will fail on your machine. Use **`npm run build:next`** to typecheck/build,
  or let Vercel build.

## Where content lives

- `content/home/home.json`, `content/programs/*.json`, `content/about/about.json`,
  `content/contact/contact.json`, `content/personalTraining/personalTraining.json`,
  `content/settings/settings.json` — all Tina-managed.
- Components import these **directly** (`import c from "@/content/.../x.json"`). There
  is **no `useTina` / visual editing** — it would crash the GSAP/ScrollTrigger
  animations. Only the data *source* is in JSON; all layout/animation stays in code.
  When refactoring a CMS-wired component, keep its JSON field reads intact.
- `content/site.ts` and `content/programs/index.ts` are **loaders**: they read the
  JSON and derive computed fields (e.g. `address.full`, `phoneHref`, the hours display
  strings + the schema.org opening-hours spec). `lib/schema.ts` (JSON-LD) reads the
  same `siteContact`, so SEO structured data stays in sync with the owner's edits.
- `content/faq.ts` keeps the per-page FAQ sets not yet in the CMS (`programsFAQ`).
- **NOT in the CMS (intentionally):** `/blog`, `/privacy-policy`, `/terms-of-service`.

## Editing existing content from the terminal

Totally fine — edit a `content/**/*.json` value and push like any change. It's just
another commit; Tina Cloud re-indexes on push. Cleanest split of labor: **owner owns
the words, devs own the code.**

## Adding a new editable page / changing the schema

Whenever you touch `tina/config.ts` (new collection, new/renamed field):

1. Create/adjust the content JSON.
2. Wire the page/component to read from it (direct import, **no** `useTina`).
3. Regenerate Tina artifacts: run `npx tinacms dev`, let it index, then stop it. This
   refreshes `tina/__generated__/` + `tina/tina-lock.json`. **Commit those.**
4. Push.
5. In **Tina Cloud → Configuration**, re-index `main` so the new collection shows in
   `/admin`.

> Rule of thumb: **schema change → regenerate + commit generated files → reindex after deploy.**
> The owner's content edits never touch the schema or generated files, so they can't
> desync your Tina setup.

## Deploy / Tina Cloud

- Hosting: **Vercel**, building from `main`. Build = `tinacms build --skip-cloud-checks && next build`.
- Vercel env vars: `NEXT_PUBLIC_TINA_CLIENT_ID`, `TINA_TOKEN`.
  `NEXT_PUBLIC_TINA_BRANCH` is intentionally **unset** so the deployed branch
  auto-resolves (`VERCEL_GIT_COMMIT_REF`).
- Owner **Save** → commit to `main` → Vercel rebuild → live in ~1–2 min.

## Gotchas (in the order they bite)

1. `tinacms build --skip-cloud-checks` **still needs cloud creds** → locally use `build:next`.
2. Bare `/admin` 404s; the real path is `/admin/index.html` (a `next.config` redirect handles it).
3. A collection with `router: () => "/"` breaks the **form** editor (empty sidebar) → omit it.
4. Don't pin `NEXT_PUBLIC_TINA_BRANCH` in Vercel (breaks per-deploy branch resolution).
5. First load after a schema/branch change may error `Index version "0"… Reindex` →
   re-index the branch in Tina Cloud. **A green build ≠ indexed content.**

## The two hard rules

1. `git pull` before you start and before you push.
2. **Never** `git push --force`.
