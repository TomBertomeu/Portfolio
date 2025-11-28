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
  // Liste des projets
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
