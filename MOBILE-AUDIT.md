# Audit responsive mobile — Portfolio

Viewport testé : **390 × 844** (iPhone 12/13/14) via Playwright, thème clair + sombre.
Pages : `/` (homepage) et `/projects`.

## Verdict global

Les fondations sont saines : **aucun débordement horizontal**, les grilles passent
correctement en 1 colonne (About, Experience, Projects preview, Contact), le
scroll-reveal se déclenche bien sur mobile (early-reveal + `rootMargin` 50px).
Les problèmes restants sont concentrés sur **la navigation**, **le hero** et
**quelques détails tactiles**.

> Note : le rond noir « N » flottant visible sur les captures plein écran est
> l'indicateur de dev Next.js, **pas** un élément du site. À ignorer.

---

## P1 — Bloquant / important

### 1. Aucun menu de navigation sur mobile
`components/Header.tsx` — les liens de nav (`nav.about/experience/projects/contact`)
et le lien CV sont en `hidden md:flex` / `hidden md:inline-flex`. **En dessous de
`md` (768px), il ne reste que le logo, le sélecteur de langue et le toggle thème.**
Aucun hamburger de remplacement → l'utilisateur mobile ne peut **pas** sauter aux
sections ni télécharger le CV depuis le header.

**Fix** : ajouter un bouton hamburger visible `< md` qui ouvre un drawer/sheet
(Radix Dialog déjà dispo) listant les 4 liens de section + le CV.

### 2. Hero en `h-screen` (100vh) → bug barre d'adresse mobile
`components/Hero.tsx:19` — `h-screen` = `100vh`. Sur iOS/Android, `100vh` inclut la
hauteur de la barre d'adresse dynamique : au scroll, la hauteur change et le contenu
saute / se fait couper.

**Fix** : remplacer `h-screen` par `min-h-[100svh]` (small viewport height) ou
`min-h-dvh`. Tailwind 4 supporte `min-h-svh` / `min-h-dvh` nativement.

### 3. Texte de hero = placeholder
`components/Hero.tsx:29` — `[super slogan qui tue]` est encore un placeholder.
Contenu inachevé, le premier écran mobile (et desktop) n'a aucun message réel.

**Fix** : rédiger le vrai slogan / accroche.

---

## P2 — Moyen

### 4. Cibles tactiles < 44px
WCAG 2.5.8 (AAA) et guidelines Apple recommandent ≥ 44px.
- `ThemeToggle` : `h-9 w-9` = **36 × 36px** (`components/ThemeToggle.tsx:13`)
- `LanguageSwitcher` : `h-9` = **36px de haut** (`components/LanguageSwitcher.tsx:36`)
- Liens contact (email / GitHub / LinkedIn) : **28px de haut** (`ContactForm.tsx:64-97`)

**Fix** : passer le toggle et le switcher à `h-11 w-11` (44px) sur mobile, ou ajouter
une zone tactile via padding. Pour les liens contact, augmenter le `gap`/padding
vertical (ex. `py-1.5`) pour atteindre ~44px.

### 5. Champs de formulaire à 14px → zoom auto iOS Safari
`components/ContactForm.tsx:12` — `INPUT_CLASS` utilise `text-sm` (14px). **iOS Safari
zoome automatiquement sur un input dont la police est < 16px au focus**, ce qui
casse le cadrage de la page.

**Fix** : police 16px sur mobile pour les inputs/textarea → `text-base` (ou
`text-base md:text-sm`). Bonus : hauteur des inputs passe de 42 → ~48px, plus
confortable au tap.

### 6. Tableau `/projects` à l'étroit sur mobile
`app/projects/page.tsx:78` — un vrai `<table>` à 3 colonnes visibles (Année |
Projet+badges | Lien) compressé dans 390px : les titres longs passent sur 3 lignes
(« Outer Wilds themed Pomodoro Timer »), et la colonne **Lien** réserve de la largeur
alors qu'elle est vide pour la majorité des lignes.

**Fix** : sous `sm`, sortir du layout `table` (ex. `block`/grille) et empiler chaque
projet en **carte** : titre pleine largeur, année + lien en sous-ligne. Évite le
wrapping agressif et récupère l'espace de la colonne Lien vide.

---

## P3 — Polish

### 7. Ligne de fond qui « barre » le texte sur `/projects`
Une ligne décorative du `HeroBackground` passe derrière le paragraphe de
description et donne un effet de texte barré (lisibilité). `app/projects/page.tsx:42`
+ `components/UnderlineAccent.tsx`.

**Fix** : réduire l'opacité du `HeroBackground` derrière la zone de texte, ou poser
un fond solide léger sur le conteneur du sous-titre, ou abaisser le `z-index` des
lignes.

### 8. Hero très vide sur mobile
Le hero occupe tout le viewport pour un seul titre → beaucoup de vide. Une fois le
slogan réel posé (P1.3), envisager une accroche secondaire ou un CTA (« Voir mes
projets » / flèche scroll) pour remplir et guider.

---

## Ordre d'attaque suggéré
1. P1.1 menu mobile (impact UX max)
2. P1.2 `svh` + P2.5 inputs 16px (2 lignes, gros gain)
3. P2.4 cibles tactiles
4. P2.6 cartes `/projects`
5. P1.3 / P3 contenu & polish
