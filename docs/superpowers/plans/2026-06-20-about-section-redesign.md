# About Section Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the single self-quoting sentence in the About section with a hybrid layout (lead declaration + dense paragraph + fact chips) targeted at an academic admissions panel.

**Architecture:** Two changes. First, restructure the `about` block in both locale JSON files: delete dead keys, add `lead`/`leadAccent`/`body`/`fact1-3`. Second, rebuild the About section JSX in `app/page.tsx`: drop the two decorative quote `<span>`s, add a small eyebrow heading, render the lead with an accented phrase, the body paragraph, and a row of fact chips. No new components or dependencies.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4. Client component. i18n via `useLanguage().t(key)` resolving dot-notation keys against `locales/fr.json` (source of truth, typed as `TranslationKey = NestedKeyOf<Translations>`).

## Global Constraints

- `fr.json` is the i18n source of truth. `TranslationKey` is typed from its shape, so **`fr.json` and `en.json` must have identical nested key structure** or `npm run typecheck` fails.
- Do NOT delete `about.profileImageAlt` (used in `app/page.tsx:52`) or `about.downloadCv` (used in `components/Header.tsx:95,152`).
- Tailwind utility classes only. Use `cn()` from `lib/utils.ts` only if conditional classes are needed.
- Keep the existing grid (`md:grid-cols-[3fr_2fr]`), photo treatment (`rotate-3 rounded-2xl shadow-lg`), and `ScrollAnimation` directions (`left` on text, `right` on photo).
- Verification commands: `npm run typecheck`, `npm run test`, `npm run lint`, `npm run build`.

---

## File Structure

- `locales/fr.json` — modify the `about` block (delete dead keys, add 6 new keys).
- `locales/en.json` — mirror the exact same `about` key structure with English copy.
- `app/page.tsx` — rebuild the About section JSX (lines 25-61).

---

### Task 1: Restructure the `about` i18n block

**Files:**
- Modify: `locales/fr.json` (the `"about"` object, currently lines 26-40)
- Modify: `locales/en.json` (the matching `"about"` object)
- Test: `tests/i18n.test.ts` (existing — no edit, used to verify parity)

**Interfaces:**
- Produces: i18n keys consumed by Task 2 — `about.lead`, `about.leadAccent`, `about.body`, `about.fact1`, `about.fact2`, `about.fact3` (all `string`). Keeps `about.profileImageAlt`, `about.downloadCv`.

- [ ] **Step 1: Replace the `about` block in `locales/fr.json`**

Replace the entire current `about` object (lines 26-40) with:

```json
  "about": {
    "lead": "Pour moi, la qualité du code et la clarté de l'interface sont",
    "leadAccent": "les deux faces d'un même métier.",
    "body": "Développeur fullstack en fin de BUT Informatique, je construis des produits de bout en bout — du modèle de données à l'interface. Mes projets sont là pour le montrer plutôt que pour le promettre. Soutenu par mon entreprise pour la suite, je cherche aujourd'hui une école pour pousser cette exigence en cycle ingénieur ou en master.",
    "fact1": "Fin de BUT Informatique (Bac+3)",
    "fact2": "En alternance, entreprise partante pour la suite",
    "fact3": "Vise un cycle ingénieur ou un master",
    "downloadCv": "Consulter mon CV",
    "profileImageAlt": "Ma photo de profil"
  },
```

- [ ] **Step 2: Replace the `about` block in `locales/en.json`**

Replace the entire current `about` object with the same key structure in English:

```json
  "about": {
    "lead": "To me, code quality and interface clarity are",
    "leadAccent": "two sides of the same craft.",
    "body": "A fullstack developer finishing my Computer Science degree, I build products end to end — from the data model to the interface. My projects are there to show it, not just promise it. With my company backing me for what's next, I'm now looking for a school to take that standard further, in an engineering or master's program.",
    "fact1": "Final-year CS degree (Bac+3)",
    "fact2": "Apprenticeship — company on board for what's next",
    "fact3": "Aiming for an engineering or master's track",
    "downloadCv": "View my résumé",
    "profileImageAlt": "My profile photo"
  },
```

Note: preserve the existing English `downloadCv` value if it already differs — keep whatever string `en.json` currently has for `downloadCv`; only the surrounding keys change.

- [ ] **Step 3: Run typecheck to verify FR/EN key parity**

Run: `npm run typecheck`
Expected: PASS. If it fails with a key-mismatch error on `about.*`, the two JSON blocks have diverging keys — fix until identical.

- [ ] **Step 4: Run the i18n test**

Run: `npm run test`
Expected: PASS. `tests/i18n.test.ts` confirms top-level FR/EN key parity stays intact (the `about` key itself still exists in both).

- [ ] **Step 5: Commit**

```bash
git add locales/fr.json locales/en.json
git commit -m "feat(about): restructure i18n keys for redesigned about section"
```

---

### Task 2: Rebuild the About section JSX

**Files:**
- Modify: `app/page.tsx` (the About section, currently lines 25-61)
- Test: manual + `npm run build`

**Interfaces:**
- Consumes from Task 1: `t("about.lead")`, `t("about.leadAccent")`, `t("about.body")`, `t("about.fact1")`, `t("about.fact2")`, `t("about.fact3")`, `t("about.profileImageAlt")`. Also reuses existing `t("nav.about")` for the eyebrow.
- The `language` variable from `useLanguage()` is no longer needed in the About markup (the quote-switch logic is removed). Leave `language` in place — it is still used by `container.getFeaturedProjects(language)` at `app/page.tsx:19`.

- [ ] **Step 1: Replace the About section markup**

In `app/page.tsx`, replace the current About `<Section>` block (lines 25-61, from the `{/* About Section */}` comment through its closing `</Section>`) with:

```tsx
            {/* About Section */}
            <Section id="about" className="bg-muted">
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 md:gap-12 items-center">
                    <ScrollAnimation direction="left">
                        <p className="font-mono text-sm uppercase tracking-widest text-primary mb-4">
                            {t("nav.about")}
                        </p>
                        <p className="text-2xl md:text-3xl text-foreground [text-wrap:pretty] leading-relaxed mb-6">
                            {t("about.lead")}{" "}
                            <span className="text-primary font-medium">{t("about.leadAccent")}</span>
                        </p>
                        <p className="text-base md:text-lg text-muted-foreground [text-wrap:pretty] leading-relaxed mb-8">
                            {t("about.body")}
                        </p>
                        <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
                            {[t("about.fact1"), t("about.fact2"), t("about.fact3")].map((fact) => (
                                <li
                                    key={fact}
                                    className="rounded-full border border-primary/30 bg-background/40 px-4 py-1.5 text-sm text-foreground/80"
                                >
                                    {fact}
                                </li>
                            ))}
                        </ul>
                    </ScrollAnimation>

                    <ScrollAnimation direction="right" delay={300} className="flex justify-center md:justify-end">
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-lg rotate-3">
                            <Image
                                src="/images/profile.png"
                                alt={t("about.profileImageAlt") || "Tom Bertomeu"}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </ScrollAnimation>
                </div>
            </Section>
```

This removes the two absolutely-positioned decorative quote `<span>`s and the `<blockquote>`, and removes the dependency on `language` for quote selection.

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: PASS. No unused-import or unused-var warnings introduced. (`language` is still used at line 19, so no removal needed.)

- [ ] **Step 3: Run typecheck**

Run: `npm run typecheck`
Expected: PASS. All `t("about.*")` keys resolve to valid `TranslationKey` values.

- [ ] **Step 4: Run the production build**

Run: `npm run build`
Expected: PASS — static export succeeds, no React/JSX errors.

- [ ] **Step 5: Visual check in dev**

Run: `npm run dev`, open `http://localhost:3000`, scroll to the About section.
Expected: eyebrow "À propos", large lead with the accent phrase in primary color, dense paragraph below, three fact chips in a row, photo on the right with the `rotate-3` tilt. Toggle FR/EN — copy switches, no stray quote marks, no layout shift. On mobile width, the grid stacks to one column.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx
git commit -m "feat(about): rebuild section as lead + body + fact chips"
```

---

## Self-Review

**Spec coverage:**
- Thin content → Task 1 adds `body` + facts; Task 2 renders them. ✓
- Self-quote design removed → Task 2 Step 1 drops the quote `<span>`s and `<blockquote>`. ✓
- Dead i18n keys deleted → Task 1 removes `greeting`/`name`/`role`/`subtitle`/`degree`/`school`/`period`/`periodValue`/`interest1-3`. ✓
- Eyebrow heading added → Task 2 renders `t("nav.about")` eyebrow. ✓
- Lead accent in primary, body muted, chips → Task 2 markup. ✓
- Keep grid / photo / ScrollAnimation → preserved in Task 2 markup. ✓
- Keep `downloadCv` + `profileImageAlt` → retained in Task 1 JSON. ✓

**Placeholder scan:** No TBD/TODO. All copy and class strings are concrete. ✓

**Type consistency:** Keys produced by Task 1 (`about.lead`, `about.leadAccent`, `about.body`, `about.fact1-3`) match exactly what Task 2 consumes. Eyebrow uses existing `nav.about`. ✓
