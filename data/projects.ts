import { LucideIcon, Layout, Database, Server, Smartphone, Brain, Clock, Code, CloudCog } from "lucide-react";

export interface ProjectBadge {
  icon: LucideIcon;
  text: string;
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
}

interface ProjectData extends Omit<Project, "title" | "description" | "madeAt"> {
  title?: { fr: string; en: string };
  description?: { fr: string; en: string };
  madeAt?: { fr: string; en: string };
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
    link: "https://github.com/TomBertomeu/outer-wilds-pomodoro",
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
      fr: "Application mobile de cuisine intelligente intégrant une IA pour générer des recettes selon les préférences utilisateur et le contenu de leur réfrigérateur.",
      en: "Smart kitchen mobile app integrating AI to generate recipes based on user preferences and the refrigerator contents."
    },
    image: "/images/projects/smartchef.jpg",
    link: "https://github.com/tbertome-iut90/smart-chef",
    featured: true,
    year: "2025",
    madeAt: {
      fr: "Université",
      en: "University"
    },
    badges: [
      { icon: Smartphone, text: "React Native" },
      { icon: Code, text: "TypeScript" },
      { icon: Server, text: "FastAPI" },
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
    madeAt: p.madeAt?.[lang]
  }));
}

export function getProjectById(id: string, lang: "fr" | "en" = "fr"): Project | undefined {
  const project = projectsData.find(project => project.id === id);
  if (!project) return undefined;
  return {
    ...project,
    title: project.title?.[lang],
    description: project.description?.[lang],
    madeAt: project.madeAt?.[lang]
  };
}

export function getFeaturedProjects(lang: "fr" | "en" = "fr", count: number = 3): Project[] {
  return getProjects(lang).filter(p => p.featured).slice(0, count);
}

export function getOtherProjects(lang: "fr" | "en" = "fr"): Project[] {
    return getProjects(lang).filter(p => !p.featured);
}

export default getProjects;
