# Plan pour la prochaine session

## Objectif Principal
Continuer l'enrichissement du portfolio pour répondre aux critères académiques (Preuve par l'image, Contexte technique).

## Tâches Restantes

### 1. Contenu des Projets (Priorité Haute)
- [ ] Remplir les détails pour les autres projets "Flagship" (ex: Outer Wilds Pomodoro, Portfolio, etc.).
  - Ajouter `features`, `challenges`, `solutions`, `role` dans `data/projects.ts`.
  - Ajouter des captures d'écran supplémentaires si disponibles.

### 2. Améliorations UI/UX
- [ ] Ajouter une navigation entre les projets (Précédent / Suivant) sur la page de détail.
- [ ] Améliorer la galerie d'images (Lightbox ou Carousel) si plusieurs images sont ajoutées.

### 3. Validation
- [ ] Vérifier l'affichage sur mobile.
- [ ] Vérifier le build de production (`npm run build`).

## Notes Techniques
- La structure de données `Project` a été mise à jour pour supporter le contenu riche.
- Les pages de détail sont générées statiquement (`generateStaticParams`).
- Le composant `ProjectCard` redirige maintenant vers la page interne.
