import type { ProjectBadge, ProjectFeature } from "@/types/project";

export interface ProjectData {
  id: string;
  image?: string;
  imageFit?: "cover" | "contain";
  link?: string;
  badges?: ProjectBadge[];
  featured?: boolean;
  year?: string;
  gallery?: string[];
  demoVideo?: string;
  title?: { fr: string; en: string };
  tagline?: { fr: string; en: string };
  description?: { fr: string; en: string };
  madeAt?: { fr: string; en: string };
  features?: { fr: ProjectFeature[]; en: ProjectFeature[] };
  challenges?: { fr: string; en: string };
  solutions?: { fr: string; en: string };
  role?: { fr: string; en: string };
  team?: { fr: string; en: string };
  context?: { fr: string; en: string };
}

export const projectsData: ProjectData[] = [
  {
    id: "lego-rebuilder",
    title: {
      fr: "Outil de reconstruction LEGO",
      en: "LEGO Set Rebuilder"
    },
    tagline: {
      fr: "Reconstituer mes sets LEGO à partir de pièces en vrac.",
      en: "Rebuilding my LEGO sets from loose bricks."
    },
    description: {
      fr: "Application qui transforme une pile de Lego en vrac en sets reconstitués : je pioche une pièce, je l'identifie dans la base, et l'outil m'indique à quels sets enregistrés elle manque encore pour l'y attribuer.",
      en: "Application that turns a pile of loose Lego into rebuilt sets: I grab a piece, identify it in the database, and the tool tells me which registered sets still need it so I can assign it."
    },
    image: "/images/projects/lego-rebuilder.jpg",
    link: "",
    featured: true,
    year: "2025",
    context: {
      fr: "Projet personnel motivé par l'envie de reconstituer des sets démontés sans avoir à tout déballer manuellement. La base de pièces est dérivée des inventaires officiels des sets enregistrés, ce qui permet de cibler précisément les manques et de suivre l'avancement de chaque reconstruction.",
      en: "Personal project driven by the urge to rebuild dismantled sets without unpacking everything by hand. The piece database is derived from the official inventories of the registered sets, which makes it possible to precisely target gaps and track each rebuild's progress."
    },
    role: {
      fr: "Développeur solo",
      en: "Solo Developer"
    },
    badges: [
      { iconId: "plug", text: "API Rebrickable", tier: "primary" },
      { iconId: "layout", text: "Next.js", tier: "secondary" }
    ]
  },
  {
    id: "geniacloud",
    title: {
      fr: "GEN'IAcloud",
      en: "GEN'IAcloud"
    },
    tagline: {
      fr: "Fluidifier la saisie terrain et la facturation chez une coopérative agricole.",
      en: "Streamlining field data entry and billing for an agricultural cooperative."
    },
    description: {
      fr: "Application métier qui digitalise la saisie des prestations vendues sur le terrain et automatise leur transmission au système de facturation.",
      en: "Business application that digitizes on-site service entry and automates its transmission to the billing system."
    },
    image: "/images/projects/geniatest.jpg",
    imageFit: "contain",
    featured: true,
    year: "2025",
    madeAt: {
      fr: "GEN'IAtest",
      en: "GEN'IAtest"
    },
    context: {
      fr: "Développé dans le cadre de mon alternance chez GEN'IAtest, coopérative agricole d'élevage et d'insémination animale active dans l'est de la France. GEN'IAcloud équipe les techniciens intervenant directement sur les exploitations : il remplace une saisie papier par un parcours digital alimentant la chaîne de facturation interne.",
      en: "Built during my apprenticeship at GEN'IAtest, an agricultural cooperative focused on livestock breeding and animal insemination across eastern France. GEN'IAcloud is used by field technicians visiting farms: it replaces paper entry with a digital flow that feeds the internal billing chain."
    },
    role: {
      fr: "Développeur Fullstack",
      en: "Fullstack Developer"
    },
    challenges: {
      fr: "Garantir une saisie fiable en mobilité, dans des exploitations où la connectivité est souvent partielle ou absente, tout en maintenant une cohérence stricte avec le système de facturation existant.",
      en: "Ensuring reliable data entry on the move, in farms where connectivity is often partial or missing, while keeping strict consistency with the existing billing system."
    },
    solutions: {
      fr: "Mode hors-ligne avec file d'opérations et synchronisation différée côté client, et séparation nette entre l'expérience terrain (Nuxt) et la couche métier (NestJS) pour isoler les règles de facturation et faciliter leur évolution.",
      en: "Offline mode with a client-side operation queue and deferred synchronization, plus a clean split between the field experience (Nuxt) and the business layer (NestJS) to isolate billing rules and ease their evolution."
    },
    badges: [
      { iconId: "wifi-off", text: "Offline-first", tier: "primary" },
      { iconId: "layout", text: "Nuxt / Vue", tier: "secondary" },
      { iconId: "server", text: "NestJS", tier: "secondary" }
    ]
  },
  {
    id: "coc-assistant",
    title: {
      fr: "Outil d'analyse de clan",
      en: "Clan Analytics Tool"
    },
    tagline: {
      fr: "Bâtir un historique pour analyser son clan sur Clash of Clans.",
      en: "Building a history to analyze your clan on Clash of Clans."
    },
    description: {
      fr: "Outil d'analyse pour Clash of Clans qui ingère périodiquement les données du jeu via l'API officielle Supercell pour construire un historique exploitable, exposé à travers des interfaces de consultation et un chatbot capable d'interroger ces données en langage naturel.",
      en: "Analytics tool for Clash of Clans that periodically ingests game data through Supercell's official API to build an exploitable history, surfaced through consultation interfaces and a chatbot able to query that data in natural language."
    },
    image: "/images/projects/coc_assistant.png",
    link: "",
    featured: true,
    year: "2025",
    context: {
      fr: "Projet personnel né du manque d'outils analytiques côté Supercell pour piloter un clan Clash of Clans compétitif. Architecturé en monorepo pnpm avec une application web Next.js et un worker en arrière-plan qui interroge périodiquement l'API officielle du jeu pour bâtir un historique des données, ensuite exposé à travers tableaux de bord et chatbot.",
      en: "Personal project born from the lack of analytics tooling on Supercell's side for running a competitive Clash of Clans clan. Built as a pnpm monorepo with a Next.js web app and a background worker that periodically queries the game's official API to build a data history, then surfaces it through dashboards and a chatbot."
    },
    role: {
      fr: "Développeur solo",
      en: "Solo Developer"
    },
    badges: [
      { iconId: "refresh-cw", text: "Ingestion auto", tier: "primary" },
      { iconId: "bar-chart-3", text: "Analyse statistique", tier: "secondary" }
    ]
  },
  {
    id: "outer-wilds-pomodoro",
    title: {
      fr: "Minuteur Pomodoro Outer Wilds",
      en: "Outer Wilds themed Pomodoro Timer"
    },
    description: {
      fr: "Un minuteur de productivité inspiré de l'univers du jeu Outer Wilds.",
      en: "A productivity timer inspired by the Outer Wilds game universe."
    },
    image: "/images/projects/pomodoro.jpg",
    link: "https://outer-wilds-pomodoro.vercel.app/",
    featured: false,
    year: "2025",
    badges: [
      { iconId: "clock", text: "React" },
      { iconId: "layout", text: "Tailwind CSS" }
    ]
  },
  {
    id: "smartchef",
    title: {
      fr: "SmartChef",
      en: "SmartChef"
    },
    tagline: {
      fr: "L'IA qui cuisine avec votre frigo.",
      en: "AI that cooks with your fridge."
    },
    description: {
      fr: "Application mobile intelligente née d'un projet universitaire et évoluée en projet personnel. Elle utilise l'IA pour transformer le contenu de votre frigo en recettes adaptées à vos préférences.",
      en: "Smart mobile application born from a university project and evolved into a personal endeavor. It uses AI to turn your fridge contents into tasty recipes, featuring a modern interface ready for advanced capabilities."
    },
    image: "/images/projects/smartchef.jpg",
    link: "https://github.com/tbertome-iut90/smart-chef",
    featured: false,
    year: "2025",
    features: {
      fr: [
        { text: "Gestion d'inventaire (Frigo) avec liste des ingrédients disponibles", status: "completed" },
        { text: "Génération de recettes par IA (LLM) basée sur l'inventaire", status: "completed" },
        { text: "Affichage détaillé des étapes de préparation", status: "completed" },
        { text: "Interface utilisateur prête pour la liste de courses, l'historique et le scan caméra", status: "completed" },
        { text: "Système de préférences utilisateur (en cours d'intégration)", status: "in-progress" }
      ],
      en: [
        { text: "Inventory Management (Fridge) with list of available ingredients", status: "completed" },
        { text: "AI-powered recipe generation (LLM) based on inventory", status: "completed" },
        { text: "Detailed display of preparation steps", status: "completed" },
        { text: "UI ready for Shopping list, History, and Camera scan", status: "completed" },
        { text: "User preference system (integration in progress)", status: "in-progress" }
      ]
    },
    challenges: {
      fr: "Le plus difficile était de faire en sorte que le LLM retourne bien les données attendues, avec le comportement adapté aux préférences de l'utilisateur.",
      en: "The most difficult part was ensuring that the LLM returned the expected data, with behavior adapted to user preferences."
    },
    solutions: {
      fr: "J'ai beaucoup travaillé sur le prompt de la requête (Prompt Engineering) jusqu'à arriver à un résultat satisfaisant et structuré.",
      en: "I worked extensively on the request prompt (Prompt Engineering) until I reached a satisfactory and structured result."
    },
    context: {
      fr: "SmartChef est né d'un projet universitaire en binôme visant à explorer l'intégration des LLM dans une application de manière pertinente. J'ai décidé de poursuivre son développement seul pour en faire une application complète. J'ai donc repris l'architecture pour permettre l'ajout de fonctionnalités avancées comme la reconnaissance d'image et la personnalisation, tout en soignant l'expérience utilisateur.",
      en: "SmartChef was born from a university pair project aimed at exploring the integration of LLMs into an application in a relevant way. I decided to continue its development alone to turn it into a complete application. I therefore reworked the architecture to enable the addition of advanced features like image recognition and personalization, while refining the user experience."
    },
    role: {
      fr: "Co-développeur (Phase 1) puis Développeur Fullstack (Phase 2)",
      en: "Co-developer (Phase 1) then Fullstack Developer (Phase 2)"
    },
    badges: [
      { iconId: "brain", text: "LLM", tier: "primary" },
      { iconId: "smartphone", text: "React Native", tier: "secondary" },
      { iconId: "code", text: "TypeScript", tier: "secondary" },
    ]
  },
  {
    id: "aso70",
    title: {
      fr: "Catalogue Événementiel ASO70",
      en: "ASO70 Event Catalog"
    },
    tagline: {
      fr: "Location événementielle et back-office sur-mesure.",
      en: "Event rentals and tailor-made back-office."
    },
    description: {
      fr: "Plateforme de location de matériel événementiel avec gestion de devis et back-office d'administration.",
      en: "Event equipment rental platform with quote management and administrator back-office."
    },
    image: "/images/projects/aso70.jpg", // Placeholder
    featured: false,
    year: "2025",
    madeAt: {
      fr: "ASO70",
      en: "ASO70"
    },
    badges: [
      { iconId: "database", text: "Supabase", tier: "primary" },
      { iconId: "layout", text: "Next.js", tier: "secondary" },
      { iconId: "code", text: "TypeScript", tier: "secondary" }
    ]
  },
  {
    id: "vecofroid",
    title: {
      fr: "Gestion Vecofroid",
      en: "Vecofroid Manager"
    },
    tagline: {
      fr: "Numériser la gestion d'interventions terrain.",
      en: "Digitizing field intervention management."
    },
    description: {
      fr: "Solution prototype pour numériser un processus de gestion d'interventions.",
      en: "Prototype solution for digitizing an intervention management process."
    },
    image: "/images/projects/vecofroid.jpg", // Placeholder
    featured: false,
    year: "2024",
    madeAt: {
      fr: "Vecofroid",
      en: "Vecofroid"
    },
    badges: [
      { iconId: "layout", text: "Vue.js", tier: "primary" },
      { iconId: "server", text: "Express", tier: "secondary" },
      { iconId: "database", text: "PostgreSQL", tier: "secondary" }
    ]
  },
  {
    id: "site-fortiche",
    title: {
      fr: "Site de présentation de Fortiche",
      en: "Fortiche Showcase Website"
    },
    description: {
      fr: "Premier site web réalisé pour découvrir le développement front-end.",
      en: "First website created to discover front-end development."
    },
    image: "/images/projects/fortiche.jpg", // Placeholder
    link: "https://projectsae.github.io/sae-1-05-06/", // Placeholder
    featured: false,
    year: "2022",
    madeAt: {
      fr: "Université",
      en: "University"
    },
    badges: [
      { iconId: "code", text: "HTML/CSS" },
      { iconId: "code", text: "JavaScript" }
    ]
  }
];
