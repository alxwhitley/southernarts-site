# Southern Dental Arts — agent map

**Required first read:** `~/websites/astro/CLAUDE.md` — the Astro lane workflow
(Impeccable command spine). This repo is its own git root and does not
inherit that file automatically. See `./CLAUDE.md` for the thin pointer and
project-specific notes.

## Content routing

| Task | Read first | Then inspect | Skip unless needed |
|---|---|---|---|
| Edit a fixed page (home, about, a service, patient experience, etc.) | Matching `pages/[slug]-copy.md` | Matching `src/pages/` route | Other routes and the blog collection |
| Edit a blog post | `src/content/blog/<slug>/index.md` | Matching `src/assets/blog/<slug>/`, shared post template | Other posts |
| Add raw material (photos, notes, client-sent files) | `content-inbox/README.md` | Matching inbox room | Published routes |
| Change shared design (tokens, layout, nav chrome) | `DESIGN.md` | Global styles, `src/layouts/`, shared nav/footer components | `content-inbox/` |
| Find missing or blocked content | `plan.md`, `pages/home-copy.md` open items | Matching page's own open items | Design critique history |
| Edit NAP, hours, or business data | Single source of truth (see below) | Utility bar, footer, schema, `public/admin/config.yml` settings collection | — |

**Single NAP source of truth is not yet built.** `structure.md` mandates one
data file feeding the utility bar, footer, location block, and schema; it
does not exist yet as of PRE-0. Create it at first craft rather than
hardcoding address/phone/hours in four places.

## Repeatable content

One collection in this project: **blog**.

| Field | Value |
|---|---|
| Canonical source | `src/content/blog/<slug>/index.md` |
| Route | `/blog/[slug]/` |
| Owned assets | `src/assets/blog/<slug>/` |

Everything else in `structure.md`'s sitemap (services, About sub-pages,
Patient Experience sub-pages, the team page) is a fixed route backed by its
own `pages/[slug]-copy.md`, not a collection record. Do not scaffold a
collection for these.

## Development

Dev server runs in background mode:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, `astro dev logs`.

## Documentation

Full Astro docs: https://docs.astro.build

- [Routing, dynamic routes, middleware](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling, Tailwind](https://docs.astro.build/en/guides/styling/)

## Astro 7 gotchas (from `~/websites/astro/CLAUDE.md` Appendix A)

- Content collections config lives at `src/content.config.ts`, not the
  legacy `src/content/config.ts`.
- The `settings` collection is a plain JSON import, not a `file()` content
  loader — the loader expects a hashmap of entries, not a singleton.
