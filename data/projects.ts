import { LucideIcon, Layout, Database, Server, Smartphone, Brain, Clock, Code, CloudCog } from "lucide-react";

export interface ProjectBadge {
  icon: LucideIcon;
  text: string;
}

export type FeatureStatus = "completed" | "in-progress" | "planned";

export interface ProjectFeature {
  text: string;
  status: FeatureStatus;
}

export interface Project {
  id: string;
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  badges?: ProjectBadge[];
  featured?: boolean;
  year?: string;
  madeAt?: string;
  // New detailed fields
  gallery?: string[];
  features?: ProjectFeature[];
  challenges?: string;
  solutions?: string;
  role?: string;
  team?: string;
  context?: string;
  demoVideo?: string;
}

interface ProjectData extends Omit<Project, "title" | "description" | "madeAt" | "features" | "challenges" | "solutions" | "role" | "team" | "context"> {
  title?: { fr: string; en: string };
  description?: { fr: string; en: string };
  madeAt?: { fr: string; en: string };
  features?: { fr: ProjectFeature[]; en: ProjectFeature[] };
  challenges?: { fr: string; en: string };
  solutions?: { fr: string; en: string };
  role?: { fr: string; en: string };
  team?: { fr: string; en: string };
  context?: { fr: string; en: string };
}

const projectsData: ProjectData[] = [
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
      { icon: Clock, text: "React" },
      { icon: Layout, text: "Tailwind CSS" }
    ]
  },
  {
    id: "smartchef",
    title: {
      fr: "SmartChef",
      en: "SmartChef"
    },
    description: {
      fr: "Application mobile intelligente née d'un projet universitaire et évoluée en projet personnel. Elle utilise l'IA pour transformer le contenu de votre frigo en recettes adaptées à vos préférences.",
      en: "Smart mobile application born from a university project and evolved into a personal endeavor. It uses AI to turn your fridge contents into tasty recipes, featuring a modern interface ready for advanced capabilities."
    },
    image: "/images/projects/smartchef.jpg",
    link: "https://github.com/tbertome-iut90/smart-chef",
    featured: true,
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
      { icon: Smartphone, text: "React Native" },
      { icon: Code, text: "TypeScript" },
      { icon: Brain, text: "LLM" },
    ]
  },
  {
    id: "aso70",
    title: {
      fr: "Catalogue Événementiel ASO70",
      en: "ASO70 Event Catalog"
    },
    description: {
      fr: "Plateforme de location de matériel événementiel avec gestion de devis et back-office d'administration.",
      en: "Event equipment rental platform with quote management and administrator back-office."
    },
    image: "/images/projects/aso70.jpg", // Placeholder
    featured: true,
    year: "2025",
    madeAt: {
      fr: "ASO70",
      en: "ASO70"
    },
    badges: [
      { icon: Layout, text: "Next.js" },
      { icon: Database, text: "Supabase" },
      { icon: Code, text: "TypeScript" }
    ]
  },
  {
    id: "satellite-anomaly",
    title: {
      fr: "Détection d'Anomalies Satellite",
      en: "Satellite Anomaly Detection"
    },
    description: {
      fr: "Projet de Data Science visant à identifier des anomalies dans les données télémétriques de satellites via des algorithmes de Machine Learning.",
      en: "Data Science project aiming to identify anomalies in satellite telemetry data via Machine Learning algorithms."
    },
    image: "/images/projects/satellite.jpg",
    featured: false,
    year: "2024",
    madeAt: {
      fr: "Université",
      en: "University"
    },
    badges: [
      { icon: Code, text: "Python" },
      { icon: Brain, text: "Machine Learning" }
    ]
  },
  {
    id: "vecofroid",
    title: {
      fr: "Application de Gestion Vecofroid",
      en: "Vecofroid Management App"
    },
    description: {
      fr: "Solution prototype pour numériser un processus de gestion d'interventions.",
      en: "Prototype solution for digitizing an intervention management process."
    },
    image: "/images/projects/vecofroid.jpg", // Placeholder
    featured: true,
    year: "2024",
    madeAt: {
      fr: "Vecofroid",
      en: "Vecofroid"
    },
    badges: [
      { icon: Layout, text: "Vue.js" },
      { icon: Server, text: "Express" },
      { icon: Database, text: "PostgreSQL" }
    ]
  },
  {
    id: "mastermind",
    title: {
      fr: "Mastermind",
      en: "Mastermind"
    },
    description: {
      fr: "Jeu du Mastermind développé en langage C.",
      en: "Mastermind game developed in C language."
    },
    image: "/images/projects/mastermind.jpg", // Placeholder
    link: "https://github.com/tbertome-iut90/Mastermind",
    featured: false,
    year: "2024",
    madeAt: {
      fr: "Université",
      en: "University"
    },
    badges: [
      { icon: Code, text: "C" }
    ]
  },
  {
    id: "2d-matrix",
    title: {
      fr: "Visualisation 3D de Matrices",
      en: "3D Matrix Visualization"
    },
    description: {
      fr: "Programme de manipulation de matrices étendu pour permettre la visualisation 3D de fonctions mathématiques 2D.",
      en: "Matrix manipulation program extended to allow 3D visualization of 2D mathematical functions."
    },
    image: "/images/projects/matrix.jpg", // Placeholder
    link: "https://github.com/tbertome-iut90/2D-Matrix",
    featured: false,
    year: "2024",
    madeAt: {
      fr: "Université",
      en: "University"
    },
    badges: [
      { icon: Code, text: "Python" }
    ]
  },
  {
    id: "stuckwin",
    title: {
      fr: "Stuckwin",
      en: "Stuckwin"
    },
    description: {
      fr: "Jeu de plateau en Java se jouant dans la console.",
      en: "Board game in Java played in the console."
    },
    image: "/images/projects/stuckwin.jpg", // Placeholder
    link: "https://github.com/tbertome-iut90/Stuckwin",
    featured: false,
    year: "2023",
    madeAt: {
      fr: "Université",
      en: "University"
    },
    badges: [
      { icon: Code, text: "Java" }
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
      { icon: Code, text: "HTML/CSS" },
      { icon: Code, text: "JavaScript" }
    ]
  }
];

export function getProjects(lang: "fr" | "en" = "fr"): Project[] {
  return projectsData.map(p => ({
    ...p,
    title: p.title?.[lang],
    description: p.description?.[lang],
    madeAt: p.madeAt?.[lang],
    features: p.features?.[lang],
    challenges: p.challenges?.[lang],
    solutions: p.solutions?.[lang],
    role: p.role?.[lang],
    team: p.team?.[lang],
    context: p.context?.[lang]
  }));
}

export function getProjectById(id: string, lang: "fr" | "en" = "fr"): Project | undefined {
  const project = projectsData.find(project => project.id === id);
  if (!project) return undefined;
  return {
    ...project,
    title: project.title?.[lang],
    description: project.description?.[lang],
    madeAt: project.madeAt?.[lang],
    features: project.features?.[lang],
    challenges: project.challenges?.[lang],
    solutions: project.solutions?.[lang],
    role: project.role?.[lang],
    team: project.team?.[lang],
    context: project.context?.[lang]
  };
}

export function getFeaturedProjects(lang: "fr" | "en" = "fr", count: number = 3): Project[] {
  return getProjects(lang).filter(p => p.featured).slice(0, count);
}

export function getOtherProjects(lang: "fr" | "en" = "fr"): Project[] {
    return getProjects(lang).filter(p => !p.featured);
}

export default getProjects;
