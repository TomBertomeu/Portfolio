# Portfolio Essential Trim — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce the portfolio to publish-ready content only — homepage (5 sections) plus a lean 8-row `/projects` archive table, with all project detail pages and now-dead code removed.

**Architecture:** Delete the `/projects/[id]` detail route and its sole-consumer code paths (`findById`/`getProjectById` and the rich `Project` fields). Make `ProjectCard` render a clickable `<a>` only when an external `link` exists, otherwise a fully inert `<div>`. Trim project data from 12 to 8 entries. Keep the Clean Architecture chain (types → ports → usecases ← repositories, wired in `lib/container.ts`) internally consistent at every commit.

**Tech Stack:** Next.js 15 App Router (static export), React 19, TypeScript, Tailwind CSS 4. No test runner configured — verification is `npx tsc --noEmit`, `npm run lint`, and `npm run build`.

**Ordering rule:** Every task ends on a state where `npx tsc --noEmit` passes. Consumers are removed before the things they consume.

---

### Task 1: Delete the project detail route

Removing the `[id]` route first eliminates the only consumer of `getProjectById`/`findById` and the rich `Project` fields, so later removals compile cleanly.

**Files:**
- Delete: `app/projects/[id]/page.tsx`
- Delete: `app/projects/[id]/client.tsx`
- Delete: `app/projects/[id]/` (the now-empty directory)

- [ ] **Step 1: Delete the route folder**

Run:
```powershell
Remove-Item -Recurse -Force "app/projects/[id]"
```

- [ ] **Step 2: Verify the folder is gone**

Run:
```powershell
Test-Path "app/projects/[id]"
```
Expected: `False`

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: PASS (no errors). `getProjectById`/`findById` are now unused but still defined, so this still compiles.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "refactor: remove project detail route"
```

---

### Task 2: Cut the 4 course-exercise projects from data

**Files:**
- Modify: `data/projects.ts`

- [ ] **Step 1: Remove the four entries**

Delete the entire object literals (from the opening `{` with the matching `id` through the closing `},`) for these `id`s in `projectsData`:
- `satellite-anomaly`
- `mastermind`
- `2d-matrix`
- `stuckwin`

Leave these 8 in this order: `lego-rebuilder`, `geniacloud`, `coc-assistant`, `outer-wilds-pomodoro`, `smartchef`, `aso70`, `vecofroid`, `site-fortiche`.

- [ ] **Step 2: Verify exactly 8 entries remain**

Run:
```powershell
Select-String -Path "data/projects.ts" -Pattern '^\s*id:\s*"' | Measure-Object | Select-Object -ExpandProperty Count
```
Expected: `8`

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add data/projects.ts
git commit -m "content: drop 4 course-exercise projects"
```

---

### Task 3: Make ProjectCard conditionally clickable + inert

When `project.link` exists, render an `<a>` exactly like today (hover animation, `cursor-pointer`, `ArrowUpRight`). When it does not, render a `<div>` with no hover animation classes, no `cursor-pointer`, and no `ArrowUpRight`.

**Files:**
- Modify: `components/ProjectCard.tsx`

- [ ] **Step 1: Rewrite the component body**

Replace the entire contents of `components/ProjectCard.tsx` with:

```tsx
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { resolveIcon } from "@/lib/icons";
import Badge from "./Badge";
import ProjectThumbnail from "./ProjectThumbnail";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  featured?: boolean;
}

export default function ProjectCard({ project, priority = false, featured = false }: Readonly<ProjectCardProps>) {
  const hasLink = Boolean(project.link);

  const shapeClasses = featured
    ? "p-6 rounded-[36px] border-primary/30 shadow-md"
    : "p-4 rounded-[28px] border-border shadow-sm";

  // Hover animation + clickable affordances apply only when the card links somewhere.
  const interactiveClasses = hasLink
    ? `transition-all duration-300 ease-in-out cursor-pointer active:scale-[0.98] hover:shadow-[-6px_6px_20px_rgba(0,0,0,0.12)] ${
        featured ? "hover:border-primary/60" : "hover:border-primary/40"
      }`
    : "";

  const baseClasses = `group relative flex h-full flex-col gap-4 border bg-card ${shapeClasses} ${interactiveClasses}`;

  const content = (
    <>
      <ProjectThumbnail project={project} priority={priority} />

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className={`font-medium leading-snug text-foreground transition-colors flex items-center gap-2 ${hasLink ? "group-hover:text-primary" : ""} ${featured ? "text-2xl" : "text-lg min-h-[3.125rem]"}`}>
            {project.title || "Untitled Project"}
            {hasLink && (
              <ArrowUpRight className={`shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 text-muted-foreground group-hover:text-primary ${featured ? "w-5 h-5" : "w-4 h-4"}`} />
            )}
          </h3>
        </div>

        {project.tagline && (
          <p className={`text-muted-foreground leading-snug mb-4 ${featured ? "text-base" : "text-sm"}`}>
            {project.tagline}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {[...(project.badges ?? [])]
            .sort((a, b) => (b.tier === "primary" ? 1 : 0) - (a.tier === "primary" ? 1 : 0))
            .map((badge, index) => {
              const isPrimary = badge.tier === "primary";
              const Icon = isPrimary ? resolveIcon(badge.iconId) : undefined;
              return (
                <Badge
                  key={index}
                  text={badge.text}
                  icon={Icon ? <Icon className="w-3 h-3" /> : undefined}
                  variant={isPrimary ? "primary" : "outline"}
                  size={featured && isPrimary ? "sm" : "xs"}
                />
              );
            })}
        </div>
      </div>
    </>
  );

  if (hasLink) {
    return (
      <Link
        href={project.link!}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </Link>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
```

Notes:
- The `<a>` branch uses Next's `Link` with an external `href`; `target="_blank"` + `rel="noopener noreferrer"` for external resources.
- The inert branch drops `cursor-pointer`, hover shadow/border transitions, the `group-hover:text-primary` title color, and the `ArrowUpRight` icon — it is fully static.
- `group` class stays on both so the linked variant's `group-hover:` utilities work.

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: no errors for `components/ProjectCard.tsx`

- [ ] **Step 4: Commit**

```bash
git add components/ProjectCard.tsx
git commit -m "feat: clickable card only when external link exists, inert otherwise"
```

---

### Task 4: Archive table title → plain text

The title used to link to the (now deleted) detail page. Make it plain text; the external link stays in the "Lien" column.

**Files:**
- Modify: `app/projects/page.tsx`

- [ ] **Step 1: Replace the title cell**

Find this block (around lines 74-78):

```tsx
                        <td className="py-6 pr-4 font-semibold text-foreground group-hover:text-primary transition-colors">
                          <Link href={`/projects/${project.id}`} className="hover:underline">
                            {project.title || "Untitled"}
                          </Link>
                        </td>
```

Replace it with:

```tsx
                        <td className="py-6 pr-4 font-semibold text-foreground transition-colors">
                          {project.title || "Untitled"}
                        </td>
```

- [ ] **Step 2: Remove the now-unused `Link` import if unused**

`app/projects/page.tsx` still imports `Link` and uses it for the "back to home" link (line ~25). Confirm `Link` is still referenced:

Run:
```powershell
Select-String -Path "app/projects/page.tsx" -Pattern "<Link" | Measure-Object | Select-Object -ExpandProperty Count
```
Expected: `1` (the back-to-home link). Keep the `import Link` — it is still used. Do NOT remove it.

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add app/projects/page.tsx
git commit -m "refactor: plain-text project titles in archive table"
```

---

### Task 5: Remove dead `otherProjects` from the homepage

`otherProjects` is fetched but never rendered.

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Delete the dead variable**

Find (around lines 19-20):

```tsx
    const featuredProjects = container.getFeaturedProjects(language);
    const otherProjects = container.getOtherProjects(language);
```

Replace with:

```tsx
    const featuredProjects = container.getFeaturedProjects(language);
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: no `no-unused-vars` warning for `otherProjects`

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "refactor: drop unused otherProjects fetch on homepage"
```

---

### Task 6: Remove `getProjectById` + `getOtherProjects` use cases and wiring

After Tasks 1 and 5, neither use case has a consumer.

**Files:**
- Modify: `domain/usecases/getProjects.ts`
- Modify: `lib/container.ts`

- [ ] **Step 1: Trim the use case file**

Replace the entire contents of `domain/usecases/getProjects.ts` with:

```ts
import type { IProjectRepository } from "@/domain/ports/IProjectRepository";
import type { Language } from "@/types/language";
import type { Project } from "@/types/project";

const DEFAULT_FEATURED_COUNT = 3;

export function getFeaturedProjects(
  repo: IProjectRepository,
  lang: Language,
  count = DEFAULT_FEATURED_COUNT,
): Project[] {
  return repo.findAll(lang).filter((p) => p.featured).slice(0, count);
}

export function getAllProjects(repo: IProjectRepository, lang: Language): Project[] {
  return repo.findAll(lang);
}
```

- [ ] **Step 2: Update the container**

In `lib/container.ts`, change the import block:

```ts
import {
  getFeaturedProjects,
  getOtherProjects,
  getAllProjects,
  getProjectById,
} from "@/domain/usecases/getProjects";
```

to:

```ts
import {
  getFeaturedProjects,
  getAllProjects,
} from "@/domain/usecases/getProjects";
```

Then remove these two wiring entries from the `container` object:

```ts
  getOtherProjects: (lang: Language) =>
    getOtherProjects(projectRepository, lang),
```

```ts
  getProjectById: (id: string, lang: Language) =>
    getProjectById(projectRepository, id, lang),
```

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add domain/usecases/getProjects.ts lib/container.ts
git commit -m "refactor: remove unused getProjectById and getOtherProjects use cases"
```

---

### Task 7: Remove `findById` from the project port + repository

**Files:**
- Modify: `domain/ports/IProjectRepository.ts`
- Modify: `repositories/projectRepository.ts`

- [ ] **Step 1: Trim the port**

Replace the entire contents of `domain/ports/IProjectRepository.ts` with:

```ts
import type { Language } from "@/types/language";
import type { Project } from "@/types/project";

export interface IProjectRepository {
  findAll(lang: Language): Project[];
}
```

- [ ] **Step 2: Remove `findById` from the repository**

In `repositories/projectRepository.ts`, delete this method from the class:

```ts
  findById(id: string, lang: Language): Project | undefined {
    const project = projectsData.find((p) => p.id === id);
    return project ? localizeProject(project, lang) : undefined;
  }
```

(Leave `localizeProject` and `findAll` in place — they are trimmed in Task 8.)

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add domain/ports/IProjectRepository.ts repositories/projectRepository.ts
git commit -m "refactor: drop findById from project repository port"
```

---

### Task 8: Strip dead rich fields from the Project model, data, and mapper

The detail page was the only consumer of these fields. Type, data, and mapper must change together to keep `tsc` green in a single commit.

**Files:**
- Modify: `types/project.ts`
- Modify: `data/projects.ts`
- Modify: `repositories/projectRepository.ts`

- [ ] **Step 1: Trim the domain types**

Replace the entire contents of `types/project.ts` with:

```ts
export interface ProjectBadge {
  iconId: string;
  text: string;
  tier?: "primary" | "secondary";
}

export interface Project {
  id: string;
  title?: string;
  tagline?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  link?: string;
  badges?: ProjectBadge[];
  featured?: boolean;
  year?: string;
  madeAt?: string;
}
```

(Removed: `description`, `gallery`, `features`, `challenges`, `solutions`, `role`, `team`, `context`, `demoVideo`, plus the `FeatureStatus` and `ProjectFeature` types.)

- [ ] **Step 2: Trim the data DTO + remove dead content**

In `data/projects.ts`:

(a) Update the import — remove `ProjectFeature`:

```ts
import type { ProjectBadge } from "@/types/project";
```

(b) Replace the `ProjectData` interface with:

```ts
export interface ProjectData {
  id: string;
  image?: string;
  imageFit?: "cover" | "contain";
  link?: string;
  badges?: ProjectBadge[];
  featured?: boolean;
  year?: string;
  title?: { fr: string; en: string };
  tagline?: { fr: string; en: string };
  madeAt?: { fr: string; en: string };
}
```

(c) In each of the 8 remaining project objects, delete any of these keys present: `description`, `features`, `challenges`, `solutions`, `role`, `team`, `context`, `gallery`, `demoVideo`. Keep: `id`, `image`, `imageFit`, `link`, `badges`, `featured`, `year`, `title`, `tagline`, `madeAt`.

- [ ] **Step 3: Trim the localizer**

In `repositories/projectRepository.ts`, replace the `localizeProject` function with:

```ts
function localizeProject(project: ProjectData, lang: Language): Project {
  return {
    ...project,
    title: project.title?.[lang],
    tagline: project.tagline?.[lang],
    madeAt: project.madeAt?.[lang],
  };
}
```

- [ ] **Step 4: Verify no dead field names linger in data**

Run:
```powershell
Select-String -Path "data/projects.ts" -Pattern "challenges|solutions|context:|features:|gallery|demoVideo|description|role:|team:" | Measure-Object | Select-Object -ExpandProperty Count
```
Expected: `0`

- [ ] **Step 5: Type-check**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add types/project.ts data/projects.ts repositories/projectRepository.ts
git commit -m "refactor: remove detail-only fields from project model and data"
```

---

### Task 9: Remove the `projectDetail` i18n namespace

The deleted detail page was the only consumer.

**Files:**
- Modify: `locales/fr.json`
- Modify: `locales/en.json`

- [ ] **Step 1: Confirm no live references remain**

Run:
```powershell
Select-String -Path "app","components" -Pattern "projectDetail" -Recurse | Measure-Object | Select-Object -ExpandProperty Count
```
Expected: `0`

- [ ] **Step 2: Delete the `projectDetail` block from both files**

In `locales/fr.json` and `locales/en.json`, delete the entire `"projectDetail": { ... }` top-level key (and its trailing comma) from each. Both files must stay valid JSON and structurally identical (same keys), because `TranslationKey` is typed from `fr.json`'s shape.

- [ ] **Step 3: Validate both JSON files parse**

Run:
```powershell
Get-Content locales/fr.json -Raw | ConvertFrom-Json | Out-Null; if ($?) { "fr ok" }
Get-Content locales/en.json -Raw | ConvertFrom-Json | Out-Null; if ($?) { "en ok" }
```
Expected: `fr ok` then `en ok`

- [ ] **Step 4: Type-check**

Run: `npx tsc --noEmit`
Expected: PASS (the `TranslationKey` union shrinks; no code references the removed keys)

- [ ] **Step 5: Commit**

```bash
git add locales/fr.json locales/en.json
git commit -m "chore(i18n): remove dead projectDetail translation namespace"
```

---

### Task 10: Update CLAUDE.md architecture doc

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Fix the use-case description**

Find:

```
                    getProjects.ts  (getFeaturedProjects, getOtherProjects, getAllProjects, getProjectById)
```

Replace with:

```
                    getProjects.ts  (getFeaturedProjects, getAllProjects)
```

- [ ] **Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: sync architecture doc with trimmed use cases"
```

---

### Task 11: Final full verification

**Files:** none (verification only)

- [ ] **Step 1: Type-check**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: no errors

- [ ] **Step 3: Production build (static export)**

Run: `npm run build`
Expected: build succeeds; `out/` is generated; no `/projects/[id]` routes emitted; `/` and `/projects` present.

- [ ] **Step 4: Manual smoke check**

Run: `npm run dev`, then in a browser:
- `/` — 3 featured cards render, are static (no hover lift, no `cursor-pointer`, no ↗, no spotlight dimming of siblings).
- `/projects` — 8 rows; titles are plain text (not links); external links in the "Lien" column work (pomodoro, smartchef, site-fortiche, mastermind-gone confirms only 8).
- A linked card (none among featured; verify via a temporary check is optional) — skip; covered by archive "Lien" column.
- Stop the dev server when done.

No commit (verification only).

---

## Notes for the executor

- This repo has **no automated test suite**; `npx tsc --noEmit` + `npm run lint` + `npm run build` are the verification gates. Do not scaffold a test runner.
- Keep every commit compiling — the task order guarantees this; do not reorder.
- Windows/PowerShell environment: use the PowerShell commands shown. `Remove-Item -Recurse -Force` for the folder delete.
- Do not touch Hero, About, Experience, Contact, Footer, Header, or the experience/profile data — out of scope.
