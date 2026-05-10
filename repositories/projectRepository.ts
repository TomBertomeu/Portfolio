import { projectsData } from "@/data/projects";
import type { Project, ProjectData } from "@/types/project";
import type { Language } from "@/contexts/LanguageProvider";

const DEFAULT_FEATURED_COUNT = 3;

function localizeProject(project: ProjectData, lang: Language): Project {
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
    context: project.context?.[lang],
  };
}

export function findAllProjects(lang: Language = "fr"): Project[] {
  return projectsData.map((project) => localizeProject(project, lang));
}

export function findProjectById(id: string, lang: Language = "fr"): Project | undefined {
  const project = projectsData.find((p) => p.id === id);
  return project ? localizeProject(project, lang) : undefined;
}

export function findFeaturedProjects(
  lang: Language = "fr",
  count: number = DEFAULT_FEATURED_COUNT,
): Project[] {
  return findAllProjects(lang).filter((p) => p.featured).slice(0, count);
}

export function findOtherProjects(lang: Language = "fr"): Project[] {
  return findAllProjects(lang).filter((p) => !p.featured);
}
