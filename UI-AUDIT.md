# Audit UI — Portfolio (anti-ui-slop)

Date : 5 novembre 2026 · Branche : `content/mastere-eadl`
Méthode : lecture du code (`app/`, `components/`, `styles/`, `locales/`, `data/`), rendu
du dev server dans le navigateur intégré en **1440×900** et **375×812**, thème clair et
sombre, FR et EN, pages `/`, `/projects` et 404. Contrastes mesurés sur les couleurs
calculées (oklch → sRGB), cibles tactiles et focus mesurés au DOM, HTML pré-rendu
vérifié dans `out/index.html`. `npm run lint` : 0 erreur. Console navigateur : 0 erreur.

## Verdict global

Le socle est solide : grille responsive sans débordement horizontal, contrastes texte
tous ≥ 7,7:1 en clair, thème sombre cohérent, reduced-motion respecté pour les reveals
et les beams, menu hamburger, cibles 44 px et inputs 16 px sur mobile (points de
`MOBILE-AUDIT.md` corrigés). L'identité (Caveat + souligné dégradé, grille technique,
pilules outline) est reconnaissable et ne fait pas « template ».

Les malfaçons restantes sont ailleurs : **le HTML exporté est vide**, **la vitrine
projets ne mène nulle part**, et une série d'états et de sémantiques inachevés
(formulaire, tableau, focus, titres). Trois changements apportent l'essentiel de la
valeur : P1.1, P1.2 et P2.6.

---

## P1 — Bloquant / important

> **État au 5 novembre 2026** : les trois points P1 sont corrigés dans le code
> (`LanguageProvider` sans overlay + `lang` posé avant hydratation ; statut
> « Projet interne » / « En développement » sur les projets sans lien et colonne Lien
> supprimée ; scrollbar rétablie). Les dépôts `unpile` et `coc-assistant` sont privés
> sur GitHub : les rendre publics et renseigner `link` dans `data/projects.ts` reste à
> faire côté contenu.

### 1. Le HTML pré-rendu ne contient aucun contenu
`contexts/LanguageProvider.tsx:66-68` rend un `<div class="fixed inset-0 z-[9999]">`
tant que la langue n'est pas détectée côté client. Sur un export statique, le serveur
n'a jamais de `localStorage` : **`out/index.html` ne contient ni le H1, ni les
sections, ni les liens** (vérifié : 0 occurrence de « Construire » / « Building », une
occurrence de l'overlay). Le commentaire de `app/layout.tsx:66-69` et de
`styles/globals.css` (« prerendered content stays visible for no-JS clients and
crawlers ») décrit un comportement qui n'existe plus.

Conséquences : page blanche pour les crawlers et les aperçus sociaux (seules les
`<meta>` sont lues), LCP retardé, flash blanc à chaque chargement, aucun contenu sans JS.

**Fix** : rendre les enfants immédiatement avec `DEFAULT_LANGUAGE` (`fr`) et basculer en
effet, sans overlay. Pour éviter le swap FR→EN visible, poser la langue avant le premier
paint avec le même mécanisme que la classe `js` : un script inline dans `<head>` qui lit
`localStorage` / `navigator.language` et écrit `document.documentElement.lang` + un
`data-lang`, lu par le provider à l'initialisation (`useState(() => …)` guardé par
`typeof window`). Ajouter un test qui vérifie que `out/index.html` contient le H1.

### 2. La vitrine « Ce que j'ai construit » est inerte
`data/projects.ts` : `lego-rebuilder` et `coc-assistant` ont `link: ""`, `geniacloud`
n'a pas de lien. Les **trois** projets vedettes de la home ne sont donc ni cliquables,
ni détaillés (pas de page projet). La flèche ↗, le `cursor-pointer`, le hover et
l'atténuation des voisines (`has-[a:hover]`) ne s'appliquent jamais. Sur `/projects`,
la colonne « Lien » est vide pour 5 lignes sur 8.

`PRODUCT.md` promet au lecteur « depth read » un chemin expérience → projets → contact ;
ce chemin s'arrête à une vignette et une tagline d'une ligne.

**Fix** :
- Donner à chaque projet au moins une sortie : dépôt GitHub, démo, ou une **étude de
  cas** courte (contexte, problème, décisions, résultat) rendue dans un `Dialog` Radix
  (déjà en dépendance) ou une route `/projects/[id]` exportée statiquement.
- Quand un projet est privé (GEN'IAtest, ASO70, Vecofroid), le dire : badge ou libellé
  « Projet interne » plutôt qu'une cellule vide.
- Sur `/projects`, supprimer la colonne « Lien » et porter le lien dans la cellule
  Projet (titre cliquable + libellé), ce qui règle aussi l'espace mort sur desktop.

### 3. Barre de défilement supprimée sur desktop
`styles/globals.css:14-17` : `::-webkit-scrollbar { width: 0 }` plus `overflow-x: hidden`
sur `html`. Sur Chrome/Edge/Safari l'utilisateur perd le repère de position et le drag ;
Firefox garde sa barre, donc rendu incohérent entre navigateurs. Rien dans la page ne
justifie de cacher la barre (pas de scroll custom).

**Fix** : supprimer la règle, ou au minimum `scrollbar-width: thin` + `scrollbar-color`
accordée au thème.

---

## P2 — Moyen

### 4. La section « À propos » n'a pas de titre
`app/page.tsx:27-29` : l'eyebrow « À PROPOS » est un `<p>`. Plan de la page relevé :
H1 → H2 Expérience → H2 Ce que j'ai construit → H2 Me contacter. Le lien de navigation
« À propos » envoie sur une section sans heading (lecteurs d'écran, SEO, cohérence avec
les trois autres sections).

**Fix** : `<h2 className="font-mono text-sm uppercase tracking-widest text-primary mb-4">`
avec le même style ; le visuel ne change pas.

### 5. Focus clavier peu visible
Aucune règle `focus-visible` sur les liens de nav, les CTA pilules, les cartes projet,
les cartes expérience et les liens contact. Seule la règle globale `outline-ring/50`
s'applique : anneau navigateur (`outline: auto 2px`) coloré à **50 % d'opacité**, quasi
invisible sur fond clair (mesuré sur « Découvrir mon travail » et le logo). Les boutons
langue/thème ont `ring-1` (1 px).

**Fix** : une classe partagée, p. ex. dans `globals.css` :
`:focus-visible { outline: 2px solid var(--primary-blue); outline-offset: 3px }` et
passer `--ring` en couleur opaque. Vérifier les pilules `overflow-hidden` (l'outline est
dessinée hors boîte, donc OK) et le `rounded-full` (`outline` suit le radius).

### 6. Formulaire de contact : états incomplets
`components/ContactForm.tsx`
- **Erreur et succès disparaissent après 5 s** (`STATUS_RESET_DELAY_MS`). Le message
  d'erreur contient l'adresse de secours, qui s'efface pendant qu'on la lit.
- **Aucune région `aria-live` / `role="status"`** : les changements d'état ne sont pas
  annoncés (grep : 0 occurrence dans le projet).
- Le texte de succès est injecté **dans le bouton** (« Votre message a été envoyé avec
  succès ! » devient le libellé d'un bouton désactivé).
- `reason: "missing-config"` est traité comme une erreur réseau. Sans `.env.local`,
  chaque envoi échoue avec le message générique (c'est ce qui s'est produit pendant
  l'audit).
- Validation uniquement native (`required`) : bulles navigateur non stylées, pas de
  message inline, pas d'`aria-describedby`. L'astérisque rouge est à 3,8:1.

**Fix** : conserver l'erreur jusqu'à la prochaine saisie ; afficher le succès dans un
bloc de confirmation `role="status"` sous le formulaire et ramener le bouton à l'état
idle ; message dédié pour `missing-config` (ou échec du build si `NEXT_PUBLIC_FORMSPREE_ID`
manque) ; validation inline avec `aria-invalid` + `aria-describedby` ; astérisque en
`text-destructive` sur le label ou mention « * champs requis ».

### 7. Badges à 10 px
`components/Badge.tsx:17` : `size="xs"` = `text-[10px]`. Utilisé sur toutes les cartes
projet et sur **toute la colonne Technologies de `/projects` en desktop**. 10 px est sous
tout plancher de lisibilité ; la colonne est la seule information « stack » de la page.

**Fix** : `xs` → 11–12 px (`text-xs`), `sm` sur desktop dans le tableau ; limiter à
3 badges par carte et mettre les autres dans l'étude de cas (P1.2).

### 8. Tableau `/projects` sans en-têtes pour les technologies d'assistance
`app/projects/page.tsx:130-170` : `role="table"` est posé sur le **corps** seulement ;
l'en-tête « flottant » est en dehors, sans `role="row"` / `role="columnheader"`. Un
lecteur d'écran annonce un tableau de 8 lignes sans aucune colonne nommée.

**Fix** : un vrai `<table>` avec `<thead>` / `<tbody>` ; l'effet « carte flottante » se
fait en CSS sur `thead` (`position: sticky`, fond, ombre). Bonus : en-tête collant au
scroll, ce que le visuel actuel suggère sans le faire.

### 9. Sémantique de la section Expérience
`components/ExperienceSection.tsx:42-56`
- `<div>` à l'intérieur d'un `<h3>` : contenu de phrasé uniquement, HTML invalide.
- `<header aria-label={exp.period}>` pour une date : élément de repère détourné, label
  redondant avec le contenu.
- Toute la carte est un `<a>` : le nom accessible du lien est le titre + le paragraphe
  entier + les badges.

**Fix** : `<h3>` avec des `<span>` ; `<p><time>` pour la période ; lien uniquement sur le
nom de l'entreprise (ou lien recouvrant avec `aria-label="GEN'IAtest, site externe"`).

### 10. Pas de système de boutons
Quatre implémentations de la même pilule « outline + dégradé au survol » (CTA hero ×2,
« Voir tous mes projets », bouton d'envoi), chacune en ~300 caractères de classes. La
404 utilise un **cinquième style** (`bg-primary rounded-md` plein) qui n'existe nulle
part ailleurs. Le lien CV du menu mobile en est un sixième (pilule sans dégradé).

**Fix** : composant `Button` / `PillLink` en `cva` (déjà utilisé pour `Badge`) avec
variantes `primary | secondary | success` et `asChild` via `@radix-ui/react-slot`
(déjà en dépendance). La 404 et le menu mobile consomment le même composant.

### 11. Menu mobile
`components/Header.tsx:47-53, 113-120`
- Fond à `bg-background/95` + `backdrop-blur-sm` : le titre du hero transparaît derrière
  « EXPÉRIENCE / PROJETS » (visible en capture 375 px).
- Pas de fermeture sur Escape ni au tap en dehors, pas de verrou de scroll ; le pattern
  existe déjà dans `LanguageSwitcher.tsx:14-28`.
- Items `py-2.5` ≈ 40 px, sous les 44 px appliqués au reste du mobile.

**Fix** : `bg-background` opaque, `py-3`, extraire le hook « clic extérieur + Escape » et
le réutiliser.

### 12. Petites cibles et noms accessibles
- Chevron « défiler » du hero : bouton de **20×20 px** (`Hero.tsx:63-72`).
- Lien CV du header entre `md` et `lg` : icône seule avec un simple `title`
  (`Header.tsx:84-92`) → ajouter `aria-label`.
- Liens de nav desktop : 20 px de haut (acceptable grâce à l'espacement, mais `py-2`
  ne coûte rien).
- `ThemeToggle` : `<span class="sr-only">Toggle theme</span>` en anglais quelle que soit
  la langue, et ne dit pas l'état courant.

---

## P3 — Polish

### 13. Hero mobile en français
À 375 px, le H1 `text-5xl` occupe **5 lignes**, « (vraiment) » seul sur la sienne ;
le hero est un écran de titre. `text-4xl sm:text-5xl md:text-7xl` et un `<span
className="whitespace-nowrap">` autour de « (vraiment) la route. » suffisent.

### 14. Souligné qui touche le bord
`UnderlineAccent.tsx:20` : `-left-3 w-[calc(100%+1.5rem)]`. Sur « Ce que j'ai
construit » à 375 px, le trait touche le bord gauche du viewport. Réduire le débord sous
`sm` ou `overflow-x: clip` sur le conteneur du `Title`.

### 15. Mouvement et performance
- `html { scroll-behavior: smooth }` sans garde `prefers-reduced-motion`.
- Le parallaxe/fondu du hero (`useScrollY` → `setState` à chaque scroll) re-rend le
  composant à chaque événement et ignore `prefers-reduced-motion`. Passer par
  `requestAnimationFrame` + `transform` direct sur une ref, ou `animation-timeline:
  scroll()` avec fallback, et désactiver sous reduced-motion.

### 16. Sélecteur de langue
`aria-haspopup="listbox"` mais le menu n'a ni `role`, ni navigation aux flèches ;
`aria-label` en anglais codé en dur. Le mobile utilise déjà deux boutons FR / EN :
adopter la même chose sur desktop supprime le menu et l'incohérence.

### 17. Métadonnées par page
`app/projects/page.tsx` est un composant client sans `metadata` : `/projects` hérite du
titre « Tom Bertomeu » et de la description de la home. `lang="fr"` est figé dans le
HTML exporté même pour un visiteur EN (lié à P1.1). Ajouter un `layout.tsx` sous
`app/projects/` avec `metadata`, et un `title` de home avec tagline.

### 18. Thème sombre
- Ombre du formulaire `rgba(0,0,0,0.1)` invisible en sombre.
- Vignette `imageFit: "contain"` sur `bg-white` pur (logo GEN'IAtest) : bloc le plus
  lumineux de la page en sombre. `bg-white/90` ou `bg-neutral-100` + `p-4`.

### 19. Pied de page
Une seule ligne de crédits ; pas de liens GitHub/LinkedIn, pas de retour haut de page ;
la clé `footer.copyright` existe dans les deux locales mais n'est pas rendue.

---

## Ce qui est bon (à conserver)

- Contrastes texte en clair : 7,7:1 à 20,9:1 sur tout ce qui a été mesuré.
- Aucun débordement horizontal à 375 px ni 1440 px.
- `prefers-reduced-motion` coupe reveals et beams ; le `html.js` évite de cacher le
  contenu sans JS pour les reveals (mais voir P1.1 qui annule ce bénéfice).
- Mobile : hamburger, cibles 44 px sur langue/thème/hamburger, inputs 16 px, `100svh`.
- Thème sombre complet, OG image, `sizes` sur les images, 0 erreur console, lint propre.

## Ordre d'attaque suggéré

1. P1.1 pré-rendu (1 fichier, impact SEO/perf maximal)
2. P1.2 projets cliquables + études de cas (contenu + composant)
3. P2.6 formulaire (états) et P2.5 focus (une règle globale)
4. P1.3 scrollbar, P2.4 titre À propos, P2.7 badges, P2.12 cibles — quick wins
5. P2.10 composant Button, puis P2.8 / P2.9 sémantique
6. P3 polish

## Limite de l'audit

Dans le navigateur intégré en émulation 375 px, les transitions CSS des reveals de
`/projects` sont restées figées (`CSSTransition` en `running` à `currentTime: 0`),
contenu invisible. C'est un artefact de l'émulation (les mêmes reveals fonctionnent en
1440 px et sur la home), déjà validé sur Playwright dans `MOBILE-AUDIT.md`. À
re-vérifier une fois sur un téléphone réel avant de l'écarter définitivement.
