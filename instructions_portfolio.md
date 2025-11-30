# PROJET : Portfolio Professionnel Étudiant - Instructions & Roadmap

## 1. Contexte et Objectif
Ce document sert de référence unique pour la création du portfolio numérique.
* **Objectif principal :** Décrocher un stage (S6), une alternance ou un emploi. [cite_start]Le site doit donner envie à un recruteur de proposer un entretien[cite: 34, 35].
* [cite_start]**Date de rendu :** Lundi 1/12 à 23h59 (Lien à déposer sur Moodle)[cite: 36].
* **Cible :** Recruteurs techniques et non-techniques. [cite_start]Le ton doit être sérieux mais refléter ma personnalité[cite: 136, 145].

## 2. Contraintes Techniques (Non-négociables)
* **Méthode de création :**
    * [cite_start]*Option A (Privilégiée pour développeurs) :* Coder soi-même (HTML/CSS/JS/PHP...)[cite: 43].
    * *Option B :* CMS Open Source (accès au code requis).
    * [cite_start]*Interdit :* Constructeurs de sites "No-code" (type Wix) si spécialisation Back-end[cite: 50].
* [cite_start]**Performance :** Chargement du site en **moins de 3 secondes**[cite: 111]. [cite_start]Utiliser la minification, le lazy loading et la compression d'images [cite: 114-119].
* [cite_start]**Responsivité :** Le site doit être parfaitement consultable sur mobile et tablette[cite: 127].
* [cite_start]**Accessibilité :** Navigation au clavier possible, contrastes suffisants, balisage sémantique[cite: 108, 109].
* [cite_start]**Zéro Bug :** Pas de liens morts (404) ni de boutons inactifs[cite: 126].

## 3. Structure du Contenu (Sitemap)

### A. Accueil
* Message d'accueil clair et accrocheur.

### [cite_start]B. À Propos [cite: 130]
* Texte bref à la première personne ("Je").
* Ton professionnel.
* Doit inclure : Présentation personnelle, parcours/formation, Veille technologique (ou lien vers blog).

### [cite_start]C. Projets (La section "Phare") [cite: 147]
* *Règle :* Mieux vaut 3 projets bien faits que 10 bâclés.
* **Contenu obligatoire par projet :**
    * Nom du projet.
    * Brève description (objectif/utilité).
    * [cite_start]Technologies utilisées (Langages, Frameworks, Tests)[cite: 152].
    * Visuel : Captures d'écran ou Vidéo démo.
    * [cite_start]**Lien vers le projet (Démo live ou Repo GitHub/GitLab)**[cite: 153].
    * [cite_start]Stage de S4 ou Apprentissage S4/S6 (Obligatoire)[cite: 149].
* [cite_start]*Bonus apprécié :* Explication des défis rencontrés, solutions apportées, rôle précis si travail d'équipe [cite: 158-175].

### [cite_start]D. Compétences (Optionnel mais recommandé) [cite: 182]
* Synthèse visuelle des Hard Skills (Langages, Outils) et Soft Skills (Gestion de projet, stress...).

### [cite_start]E. Contact [cite: 196]
* Formulaire de contact fonctionnel.
* Liens vers réseaux sociaux pro (LinkedIn) et **GitHub**.

### [cite_start]F. CV Téléchargeable [cite: 215]
* Lien clair pour télécharger le CV au format PDF.
* Le design du CV doit être cohérent avec celui du site.

## 4. Design et Ergonomie (UI/UX)
* [cite_start]**Navigation :** Menu clair, libellés explicites, pas de "jargon" dans le menu[cite: 103].
* [cite_start]**Lisibilité :** Hiérarchie visuelle forte (Titres/Sous-titres), paragraphes courts (une idée par paragraphe) [cite: 60-64].
* [cite_start]**Esthétique :** Design clair, pas d'animations qui gênent la navigation[cite: 273].

## [cite_start]5. Critères d'évaluation [cite: 264]
1.  **Ergonomie/Usabilité :** Navigation fluide, vitesse, aucun bug.
2.  **Esthétique :** Soignée et personnelle.
3.  **Contenu :** Précis, concis, orthographe irréprochable.
4.  **Technique :** Nom de domaine pertinent, hébergement fonctionnel, code propre.

---

## 6. PLAN D'ACTION POUR L'AGENT (Roadmap)

En tant qu'agent IA, aide-moi à suivre ces étapes :

### Phase 1 : Initialisation & Tech Stack
1.  Définir la stack technique (ex: React, Vue, ou HTML/CSS vanilla ?).
2.  Mettre en place la structure du projet (dossiers, Git init).
3.  [cite_start]Choisir un hébergement et un nom de domaine[cite: 51].

### Phase 2 : Contenu & Maquettage
1.  [cite_start]Rédiger le texte "À propos" et les descriptions de projets (Mise en avant des mots-clés pour le référencement)[cite: 54].
2.  Sélectionner et optimiser les images (poids réduit).
3.  Récupérer le CV PDF à jour.

### Phase 3 : Développement (Itératif)
1.  Coder la structure HTML sémantique.
2.  Appliquer le CSS (Responsive First).
3.  Intégrer les projets avec liens GitHub valides.
4.  Créer le formulaire de contact.

### Phase 4 : Optimisation & Recettage
1.  Audit Lighthouse (Vitesse, Accessibilité, SEO). Viser > 90/100.
2.  Vérification de tous les liens.
3.  Relecture orthographique finale.

### Phase 5 : Déploiement
1.  Mise en ligne.
2.  Test final sur mobile.
3.  Soumission du lien sur Moodle avant le 1/12.

## 7. Sélection des Projets (Content Curation)

### Projets "Vitrine" (Priorité absolue - Description détaillée + Visuels)
1.  **Catalogue ASO70 (Stage S6):** Next.js, Supabase. Focus : UX, Back-office, Maintenabilité.
2.  **Gestion Vecofroid (Stage S4):** Vue, Express, SQL. Focus : Digitalisation de processus métier, Full-stack.
3.  **SmartChef (Perso):** React Native, LLM Integration. Focus : Initiative personnelle, Mobile, UX (gestion des préférences).

### Projets "Bonus" (Mentions ou Mini-cartes)
* **Pomodoro Outer Wilds:** Pour illustrer la personnalité et l'organisation.
* **IA Satellite:** Pour valider la compétence Data/Python.
* **Portfolio:** Lien vers le repo GitHub en pied de page.

### Projets exclus (Ne pas afficher)
* Brandub, Stuckwin, Mastermind, Site Lunettes, Site Fortiche (Sauf mention anecdote), App iOS simple.
* *Raison :* Priorité à la qualité visuelle et à la complexité technique moderne.
