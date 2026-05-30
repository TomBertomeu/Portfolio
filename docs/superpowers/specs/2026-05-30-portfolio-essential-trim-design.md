# Portfolio — Trim to Essentials

**Date:** 2026-05-30
**Goal:** Reduce the portfolio to only publish-ready content. End state: one meaningful page (homepage, 5 sections) plus a lean `/projects` archive table. No project detail pages, no empty/half-built content, no orphaned data.

## Motivation

The portfolio currently ships 12 projects, a `/projects` archive, and a `/projects/[id]` detail route. Most detail pages are near-empty because only a few projects carry rich content, and several projects are throwaway university exercises. This dilutes the portfolio. We keep only what is ready and cut the rest. "Discover more" depth is secondary — removed for now (dead code / deletion preferred).

## Decisions (locked with user)

- **Structure:** Homepage (unchanged) + `/projects` archive table. All detail pages removed.
- **Discarded content:** Rich per-project content (context/challenges/solutions/role/team/features) is thrown away, not kept dormant.
- **Card behavior:** Cards/titles are clickable only when an external `link` exists; otherwise inert. Hover *animation* styles stay in code regardless; only the clickable affordances (`cursor-pointer`, ↗ `ArrowUpRight` icon) are conditionally hidden.
- **Projects kept (8):** `lego-rebuilder`, `geniacloud`, `coc-assistant`, `smartchef`, `outer-wilds-pomodoro`, `aso70`, `vecofroid`, `site-fortiche`.
- **Projects cut (4, course exercises):** `satellite-anomaly`, `mastermind`, `2d-matrix`, `stuckwin`.
- **Table title:** plain text (no detail to link to). External link stays in the existing "Lien" column — no double-link.

## Changes

### Deletions
- Delete `app/projects/[id]/` folder entirely (`page.tsx` + `client.tsx`).
- Remove 4 course-project entries from `data/projects.ts`.

### `components/ProjectCard.tsx`
- When `project.link` is set: render `<a href={link} target="_blank" rel="noopener noreferrer">`, keep `ArrowUpRight`, `cursor-pointer`, and all hover animation classes (behaves like today).
- When no `link`: render a non-anchor element (`<div>`), keep the same hover animation classes, but omit `cursor-pointer` and the `ArrowUpRight` icon.
- Featured 3 (lego/geniacloud/coc) have no link → render as inert display cards.

### `app/projects/page.tsx`
- Title cell: replace `<Link href={/projects/${id}}>` with plain text. Keep the "Lien" column external-link behavior as-is.

### Clean Architecture dead-code chain
Detail page was the sole consumer of `findById` / `getProjectById` and the rich fields.
- `domain/usecases/getProjects.ts`: remove `getProjectById`.
- `domain/ports/IProjectRepository.ts`: remove `findById`.
- `repositories/projectRepository.ts`: remove `findById`; drop dead localized field mappings (`description`, `features`, `challenges`, `solutions`, `role`, `team`, `context`).
- `lib/container.ts`: remove `getProjectById` wiring.
- `types/project.ts`: drop unused `Project` fields (`description`, `gallery`, `features`, `challenges`, `solutions`, `role`, `team`, `context`, `demoVideo`); remove `ProjectFeature` + `FeatureStatus` types.
- `data/projects.ts`: drop matching `ProjectData` fields from the 8 survivors (`description`, `features`, `challenges`, `solutions`, `role`, `team`, `context`, `gallery`, `demoVideo`).
- `locales/fr.json` + `locales/en.json`: remove `projectDetail` namespace.
- `app/page.tsx`: `otherProjects` is fetched but never rendered → remove the dead variable. `getOtherProjects`'s only consumer is that dead variable (verified), so also remove `getOtherProjects` from `domain/usecases/getProjects.ts` and `lib/container.ts`.
- `CLAUDE.md`: update the architecture doc to drop `getOtherProjects` and `getProjectById` from the `getProjects.ts` description.

### Untouched
Hero, About, Experience, Contact, Footer, Header nav, the "Voir tous les projets" link (archive still exists), and i18n namespaces `projectsPage` / `nav` / `about` / `experience` / `contact` / `projects`.

## Field audit (what stays on `Project`)

Used by card/table/thumbnail, kept: `id`, `title`, `tagline`, `image`, `imageFit`, `link`, `badges`, `featured`, `year`, `madeAt`.
- `tagline` → ProjectCard
- `year`, `madeAt`, `badges`, `link`, `title` → archive table
- `image`, `imageFit` → ProjectThumbnail

## Verification

- `npx tsc --noEmit` passes (catches any missed consumer of removed fields/functions).
- `npm run build` succeeds (static export; confirms `[id]` route removal doesn't break `generateStaticParams`).
- `npm run lint` clean (no unused imports/vars left behind).
- Manual: homepage renders 3 featured cards (inert, no ↗); `/projects` shows 8 rows, titles plain, external links in "Lien" column work; cards with a `link` (pomodoro, smartchef, site-fortiche) clickable with ↗.

## Out of scope

- No redesign of remaining sections.
- No new external links added to link-less projects.
- No re-adding of detail content later (would be a separate effort).
