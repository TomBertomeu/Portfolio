# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with Turbopack at localhost:3000
npm run build      # Production build (static export → out/)
npm run start      # Start production server
npm run lint       # ESLint via next lint
npm run typecheck  # TypeScript check (tsc --noEmit)
npm run test       # Run Vitest suite once
npm run test:watch # Run Vitest in watch mode
```

Tests live in `tests/` (Vitest, Node environment). They cover pure logic only:
use cases, repository localization, i18n dictionaries, the Formspree contact
service. CI (`.github/workflows/ci.yml`) runs lint → typecheck → test → build on
every push and PR to `main`.

## Environment

Create `.env.local` for the contact form:
```
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

## Architecture

**Stack**: Next.js 15 App Router · React 19 · TypeScript · Tailwind CSS 4 · Radix UI · next-themes  
**Output**: Static export (`output: 'export'`). No SSR at runtime — everything pre-rendered at build or hydrated client-side.

### Layer structure (Clean Architecture)

```
types/              Domain entities — zero framework dependencies
                    Project, Experience, ProjectBadge, Language, TranslationKey

domain/ports/       Interfaces (contracts)
                    IProjectRepository, IExperienceRepository, IContactService
                    ContactMessage, ContactResult (domain types for contact)

domain/usecases/    Business logic — pure functions, depend only on ports + types
                    getProjects.ts  (getFeaturedProjects, getAllProjects)
                    getExperiences.ts
                    sendContactMessage.ts

repositories/       Infrastructure — implement domain port interfaces
                    StaticProjectRepository  (reads data/projects.ts, localizes)
                    StaticExperienceRepository

services/           Infrastructure — external services
                    FormspreeContactService  (implements IContactService)

data/               Raw multilingual data (DTOs, no framework imports)
                    projects.ts    defines ProjectData + projectsData[]
                    experience.ts  defines ExperienceData + experiencesData[]
                    profile.ts     email, GitHub, LinkedIn URLs

lib/container.ts    Composition root — wires use cases to concrete implementations
                    All presentation code imports from here, never from repositories/services directly

lib/icons.ts        Maps iconId strings → LucideIcon components (only file allowed to import lucide-react for badges)
```

### Dependency rule

```
presentation → lib/container → domain/usecases → domain/ports ← repositories/services
                                                        ↑
                                                     types/
```

No layer imports from a layer above it. `types/` has no dependencies.

### Provider hierarchy (`app/layout.tsx`)

```
LanguageProvider (contexts/)
  └─ ThemeProvider (next-themes, "class" attribute)
       └─ Header + main + Footer
```

### i18n

Client-side only. `LanguageProvider` detects browser language, falls back to `fr`, persists to `localStorage`. `t(key)` resolves dot-notation keys. `fr.json` is the source of truth — `TranslationKey` is typed from its shape. Missing keys emit `console.warn` in dev. `Language` type is defined in `types/language.ts`.

### Icons in badges

`ProjectBadge.iconId` is a plain string (e.g. `"wifi-off"`). Never store `LucideIcon` components in data or domain types. Resolve via `resolveIcon(iconId)` from `lib/icons.ts` at render time.

### Scroll animations

`<ScrollAnimation>` uses `useInView` (IntersectionObserver) to trigger Tailwind transition classes. Props: `direction` (left/right/up/down/none), `delay` (ms).

### Routing

- `/` — single-page portfolio (Hero, About, Experience, Projects preview, Contact)
- `/projects` — full project archive (read-only table, no detail pages)

### Fonts

Geist Sans (`--font-geist-sans`), Geist Mono (`--font-geist-mono`), Caveat (`--font-caveat`) — loaded via `next/font/google`.

### Styling

Tailwind utility classes everywhere. Global styles: `styles/globals.css`, `styles/shimmer-effect.css`. `lib/utils.ts` exports `cn()` (clsx + tailwind-merge).

## Content Updates

- **Projects / Experience**: edit `data/projects.ts` or `data/experience.ts`
- **Social links / email**: edit `data/profile.ts`
- **Translations**: edit `locales/fr.json` and `locales/en.json` in sync
- **New translation key**: add to both JSON files; TypeScript errors until both match
- **New badge icon**: add entry to `lib/icons.ts` ICON_MAP, use the string key in data
- **New use case**: add function to `domain/usecases/`, wire in `lib/container.ts`
