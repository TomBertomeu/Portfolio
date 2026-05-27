import { projectsData, type ProjectData } from "@/data/projects";
import type { Project } from "@/types/project";
import type { Language } from "@/types/language";
import type { IProjectRepository } from "@/domain/ports/IProjectRepository";

function localizeProject(project: ProjectData, lang: Language): Project {
  return {
    ...project,
    title: project.title?.[lang],
    tagline: project.tagline?.[lang],
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

class StaticProjectRepository implements IProjectRepository {
  findAll(lang: Language): Project[] {
    return projectsData.map((p) => localizeProject(p, lang));
  }

  findById(id: string, lang: Language): Project | undefined {
    const project = projectsData.find((p) => p.id === id);
    return project ? localizeProject(project, lang) : undefined;
  }
}

export const projectRepository: IProjectRepository = new StaticProjectRepository();
