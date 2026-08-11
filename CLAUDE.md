# Southern Dental Arts

**Required first read:** `~/websites/astro/CLAUDE.md`  
That file is the Astro lane workflow (Impeccable command spine). This folder is its own git repo and does not inherit parent project rules automatically.

## This project

- Mode: **redesign** (old site is anti-reference, not style authority)
- **Vertical:** dental → `~/websites/_agency/industries/dental/playbook.md` is currently an **empty seed**, nothing to inherit. Generalizable lessons from this build fold back into that playbook, not only this folder.
- PRE-1b normalized, Gate A closed, PRE-0 scaffolded — all 2026-08-11.

## Canonical docs here

- Lane workflow: `~/websites/astro/CLAUDE.md`
- `plan.md` — `## Now` + `## Recent`
- `structure.md` — sitemap, nav, footer, primary CTA, redirect map, site-wide technical notes (Gate S)
- `pages/home-copy.md` — homepage copy contract (Gate S)
- `ANTI-REFERENCE.md` — palette, prohibitions, init interview prep
- `PRODUCT.md` / `DESIGN.md` — Impeccable, Gate A closed
- `AGENTS.md` — content routing table, repeatable-content contract (blog only), dev commands
- `pages/README.md`, `content-inbox/README.md` — universal content rooms

The three long-prefix PRE-1b drafts (`southern-dental-arts-sitemap.md`,
`-nav-spec.md`, `-homepage-structure.md`) were folded into `structure.md` and
`pages/home-copy.md`, then removed once git history preserved them (commit
`ab8f2a6` has the full text if ever needed).

## Repo

- GitHub: `alxwhitley/southernarts-site` (public, Hobby tier)
- Vercel: `alxwhitleys-projects/southernarts-site`, production alias
  `https://southernarts-site.vercel.app`
- Decap backend `repo:` / `base_url` in `public/admin/config.yml` already
  point at the above. OAuth callback + env vars are still POST-phase, not done.

## Open / blocked

- **No discovery call.** All positioning inferred from public reviews. PRODUCT.md says so explicitly.
- Hard blockers: real photography, Dr. Staehling's own words, insurance data, PMS, gallery assets, Invisalign confirmation.
- Decap's `settings`/`announcements` collections in `config.yml` are unmodified boilerplate (church-vertical leftovers, e.g. `service_times`) — needs real dental-appropriate fields at craft/extract time, not scoped in PRE-0.
- Only `pages/home-copy.md` exists. Every other route in `structure.md`'s sitemap needs its own `pages/[slug]-copy.md` before it can be crafted. **Explicitly not in scope yet** — homepage only, per Alex's instruction.
- Homepage is built (commit `2ad8764`) and live, but Gate B (homepage locked) hasn't happened — awaiting review.
- `DESIGN.md` is still the pre-code SEED. `/impeccable document` would promote it to captured tokens (and migrate it to a newer frontmatter+8-section format) but is gated on user confirmation before overwriting an existing file — offered, not run.
- The booking form on the homepage (`src/pages/index.astro`, section 10) has no submission endpoint wired — visual/structural only, matches craft scope, not full backend integration.
