import { CheckCircle, Star, Wrench } from "lucide-react";
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
    id: "fortiche",
    title: "Site de Présentation - Fortiche",
    description: "Site web de présentation d'un studio d'animation.",
    image: "/images/projects/fortiche.webp",
    link: "/projects/fortiche",
    badges: [
      { icon: Star, text: "Premier Projet" }
    ]
  },
  {
    id: "vecofroid",
    title: "Application de Gestion des Interventions",
    description: "Outil de gestion des interventions et bons d'intervention pour une entreprise de maintenance frigoriste.",
    image: "/images/projects/vecofroid-banner.jpg",
    link: "/projects/vecofroid",
    badges: [
      { icon: CheckCircle, text: "Stage" },
      { icon: Wrench, text: "Full Stack" }
    ]
  },
  {
    id: "ecommerce",
    title: "Boutique en Ligne",
    description: "Plateforme e-commerce complète avec système de paiement et tableau d'administration.",
    image: "/images/projects/ecommerce.jpg",
    link: "#",
    badges: [
      { icon: CheckCircle, text: "Personnel" }
    ]
  },
  {
    id: "fitness-tracker",
    title: "Application de Suivi Sportif",
    description: "Application mobile pour suivre ses performances sportives et atteindre ses objectifs.",
    image: "/images/projects/fitness.jpg",
    link: "#",
    badges: [
      { icon: Star, text: "En cours" }
    ]
  }
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
