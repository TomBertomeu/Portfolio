# About Section Redesign — Design

**Date:** 2026-06-20
**Scope:** `app/page.tsx` (About section), `locales/fr.json`, `locales/en.json`

## Problem

The current About section is a single self-quoting sentence wrapped in oversized
decorative quotation marks, plus a profile photo. It does not perform the job of
an About section: it conveys no trajectory, no motivation, and no context about
who Tom is or what he is looking for. Three concrete issues:

1. **Thin content.** One philosophy slogan (`about.subtitle`) where the reader
   expects to learn who the person is.
2. **Self-quote design.** Giant decorative quotes (`«»` / `""`) frame Tom quoting
   himself, which reads as hollow, and the marks switch between French and
   English typography (`page.tsx:33,44`), adding complexity for fragile payoff.
3. **Dead i18n keys.** `about.greeting`, `about.name`, `about.role`,
   `about.degree`, `about.school`, `about.period`, `about.periodValue` are
   defined in both locale files but referenced nowhere (verified by grep across
   `*.tsx`).

## Audience

The portfolio's About section targets an **academic admissions panel** for an
engineering cycle or master's program. Tom is finishing a BUT (Bac+3) in
apprenticeship; his company will continue to back him, so he is seeking a school
that will admit him to continue his studies. The panel judges trajectory,
motivation, and coherence — not just "ships fast." Content must read as
serious, motivated, and distinctive.

## Approach (chosen: Hybrid)

A hybrid layout that gives instant punch, then substance, then scannable facts:

- **Lead line** — a strong first-person declaration (no quotation marks) with one
  key phrase emphasized in the primary color.
- **Body paragraph** — dense, ~3 sentences: trajectory and motivation.
- **Fact chips** — three short pills for at-a-glance facts.

The distinctive angle conveyed: *code quality and user experience are one craft,
proven by concrete projects* (engineering rigor is implied by "good code requires
good method").

## Content

### Lead (large type, accent phrase in `text-primary`)

- **FR lead:** `Pour moi, la qualité du code et la clarté de l'interface sont`
- **FR accent:** `les deux faces d'un même métier.`
- **EN lead:** `To me, code quality and interface clarity are`
- **EN accent:** `two sides of the same craft.`

### Body paragraph

- **FR:** Développeur fullstack en fin de BUT Informatique, je construis des
  produits de bout en bout — du modèle de données à l'interface. Mes projets
  sont là pour le montrer plutôt que pour le promettre. Soutenu par mon
  entreprise pour la suite, je cherche aujourd'hui une école pour pousser cette
  exigence en cycle ingénieur ou en master.
- **EN:** A fullstack developer finishing my Computer Science degree, I build
  products end to end — from the data model to the interface. My projects are
  there to show it, not just promise it. With my company backing me for what's
  next, I'm now looking for a school to take that standard further, in an
  engineering or master's program.

### Fact chips

| key | FR | EN |
|---|---|---|
| `fact1` | Fin de BUT Informatique (Bac+3) | Final-year CS degree (Bac+3) |
| `fact2` | En alternance, entreprise partante pour la suite | Apprenticeship — company on board for what's next |
| `fact3` | Vise un cycle ingénieur ou un master | Aiming for an engineering or master's track |

## Layout

```
┌─────────────────────────────────────────────┐
│  [eyebrow: À propos]          ┌───────────┐  │
│                               │           │  │
│  Lead, large type,            │   photo   │  │
│  accent phrase in primary     │  rotate-3 │  │
│                               │  rounded  │  │
│  Body paragraph, muted        └───────────┘  │
│                                              │
│  ◦ chip   ◦ chip   ◦ chip                    │
└─────────────────────────────────────────────┘
   text column 3fr            photo 2fr
```

### Changes vs. current

- **Remove** the two absolutely-positioned `<span>` decorative quote marks
  (`page.tsx:29-34` and `40-45`). This eliminates the FR/EN quote switch and the
  self-quote effect.
- **Add** an eyebrow/heading "À propos" / "About" — the section currently has no
  title, unlike the Projects section which uses `<Title>`.
- **Lead:** `text-2xl md:text-3xl`, accent `<span>` in `text-primary`.
- **Body:** `text-base md:text-lg`, `text-muted-foreground`, `leading-relaxed`.
- **Chips:** `flex flex-wrap gap`, each chip `rounded-full border border-primary/30`,
  small text. Lucide icon per chip is optional (decide at implementation).
- **Keep:** grid `md:grid-cols-[3fr_2fr]`, photo `rotate-3 rounded-2xl shadow-lg`,
  `ScrollAnimation direction="left"` on text and `"right"` on photo.

## i18n changes

### New / repurposed keys (both `fr.json` and `en.json`)

- `about.lead`
- `about.leadAccent`
- `about.body`
- `about.fact1`
- `about.fact2`
- `about.fact3`
- `about.profileImageAlt` — **kept** (already used)

### Deleted keys (unused, verified by grep across `*.tsx`)

`about.greeting`, `about.name`, `about.role`, `about.subtitle`, `about.degree`,
`about.school`, `about.period`, `about.periodValue`, `about.interest1`,
`about.interest2`, `about.interest3`.

### Kept keys (still used — do NOT delete)

- `about.profileImageAlt` — used in `app/page.tsx:52`.
- `about.downloadCv` — used in `components/Header.tsx:95,152` (CV button). Out of
  scope for this change, but must remain present in both locale files.

`fr.json` is the source of truth; `TranslationKey` is typed from its shape
(`NestedKeyOf<Translations>` in `types/i18n.ts`), so any FR/EN nested mismatch
fails `npm run typecheck`. The runtime i18n test (`tests/i18n.test.ts`) only
checks top-level key parity.

## Out of scope

- The Hero section (name/greeting/role live there).
- Project cards, Experience, Contact.
- No new dependencies. Lucide is already available via `lib/icons.ts` if chip
  icons are added.

## Testing

No new pure-logic units are introduced; the change is presentational + content.
The existing i18n dictionary test (in `tests/`) must still pass — it checks
FR/EN key parity, so the deleted and added keys must match across both files.
Run `npm run typecheck`, `npm run test`, `npm run lint`, `npm run build`.
