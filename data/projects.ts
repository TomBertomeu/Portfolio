import { CheckCircle, Star, Wrench, Cpu, LayoutGrid } from "lucide-react";
import { LucideIcon } from "lucide-react";

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
}

const projects: Project[] = [
  {
    id: "aso70",
    title: "Catalogue de Location Événementielle",
    description: "Plateforme de location de matériel événementiel pour ASO 70.",
    image: "/images/projects/aso70.png",
    link: "/projects/aso70",
    badges: [
      { icon: LayoutGrid, text: "Feature-Based" },
      { icon: Cpu, text: "Full Stack" }
    ]
  },
  {
    id: "vecofroid",
    title: "Application de Gestion des Interventions",
    description: "Outil de gestion des interventions et bons d'intervention pour Vecofroid.",
    image: "/images/projects/vecofroid.png",
    link: "/projects/vecofroid",
    badges: [
      { icon: CheckCircle, text: "Stage" },
      { icon: Cpu, text: "Full Stack" }
    ]
  },
  {
    id: "fortiche",
    title: "Site de Présentation - Fortiche",
    description: "Site web présentant le studio d'animation Fortiche.",
    image: "/images/projects/fortiche.webp",
    link: "/projects/fortiche",
    badges: [
      { icon: Star, text: "Premier Projet" }
    ]
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getFeaturedProjects(count: number = 3): Project[] {
  // Retourne tous les projets pour l'instant
  // Vous pourriez ajouter une propriété 'featured' dans le futur
  return projects.slice(0, count);
}

export default projects;
