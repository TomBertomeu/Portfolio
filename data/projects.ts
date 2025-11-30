import { LucideIcon, Layout, Database, Server, Smartphone, Brain, Clock, Code } from "lucide-react";

export interface ProjectBadge {
  icon: LucideIcon;
  text: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  badges?: ProjectBadge[];
  featured?: boolean;
  year: string;
  madeAt: string;
}

const projects: Project[] = [
  {
    id: "aso70",
    title: "Catalogue Événementiel ASO70",
    description: "Plateforme de location de matériel événementiel avec gestion de devis et back-office administrateur. Développé durant mon stage de fin d'études (S6). Focus sur l'UX et la maintenabilité.",
    image: "/images/projects/aso70.jpg", // Placeholder
    link: "https://github.com/TomBertomeu/aso70", // Placeholder
    featured: true,
    year: "2025",
    madeAt: "ASO70 (Stage)",
    badges: [
      { icon: Layout, text: "Next.js" },
      { icon: Database, text: "Supabase" },
      { icon: Code, text: "TypeScript" }
    ]
  },
  {
    id: "vecofroid",
    title: "Application de Gestion Vecofroid",
    description: "Solution complète de numérisation des processus métier : attribution d'équipes et génération de bons d'intervention. Stage de 2ème année (S4).",
    image: "/images/projects/vecofroid.jpg", // Placeholder
    link: "https://github.com/TomBertomeu/vecofroid", // Placeholder
    featured: true,
    year: "2024",
    madeAt: "Vecofroid (Stage)",
    badges: [
      { icon: Layout, text: "Vue.js" },
      { icon: Server, text: "Express" },
      { icon: Database, text: "PostgreSQL" }
    ]
  },
  {
    id: "smartchef",
    title: "SmartChef",
    description: "Application mobile de cuisine intelligente intégrant une IA pour générer des recettes selon les préférences utilisateur et le contenu du frigo.",
    image: "/images/projects/smartchef.jpg", // Placeholder
    link: "https://github.com/TomBertomeu/smartchef", // Placeholder
    featured: true,
    year: "2024",
    madeAt: "Projet Personnel",
    badges: [
      { icon: Smartphone, text: "React Native" },
      { icon: Brain, text: "OpenAI / LLM" },
      { icon: Code, text: "Mobile UX" }
    ]
  },
  {
    id: "outer-wilds-pomodoro",
    title: "Outer Wilds themed Pomodoro Timer",
    description: "Un minuteur de productivité inspiré de l'univers du jeu Outer Wilds.",
    image: "/images/projects/pomodoro.jpg",
    link: "https://github.com/TomBertomeu/outer-wilds-pomodoro",
    featured: false,
    year: "2023",
    madeAt: "Projet Personnel",
    badges: [
      { icon: Clock, text: "React" },
      { icon: Layout, text: "Tailwind CSS" }
    ]
  },
  {
    id: "satellite-anomaly",
    title: "Détection d'Anomalies Satellite",
    description: "Projet de Data Science visant à identifier des anomalies dans les données télémétriques de satellites via des algorithmes de Machine Learning.",
    image: "/images/projects/satellite.jpg", // Placeholder
    link: "https://github.com/TomBertomeu/satellite-anomaly", // Placeholder
    featured: false,
    year: "2023",
    madeAt: "Université",
    badges: [
      { icon: Code, text: "Python" },
      { icon: Brain, text: "Machine Learning" }
    ]
  },
  {
    id: "site-fortiche",
    title: "Site Vitrine Fortiche",
    description: "Premier site web réalisé pour découvrir le développement front-end et l'effet parallaxe.",
    image: "/images/projects/fortiche.jpg", // Placeholder
    link: "https://github.com/TomBertomeu/site-fortiche", // Placeholder
    featured: false,
    year: "2022",
    madeAt: "Université",
    badges: [
      { icon: Code, text: "HTML/CSS" },
      { icon: Code, text: "JavaScript" }
    ]
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getFeaturedProjects(count: number = 3): Project[] {
  return projects.filter(p => p.featured).slice(0, count);
}

export function getOtherProjects(): Project[] {
    return projects.filter(p => !p.featured);
}

export default projects;
