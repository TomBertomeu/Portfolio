import { projectsData, type ProjectData } from "@/data/projects";
import type { Project } from "@/types/project";
import type { Language } from "@/types/language";
import type { IProjectRepository } from "@/domain/ports/IProjectRepository";

function localizeProject(project: ProjectData, lang: Language): Project {
  return {
    ...project,
    title: project.title?.[lang],
    tagline: project.tagline?.[lang],
    madeAt: project.madeAt?.[lang],
  };
}

class StaticProjectRepository implements IProjectRepository {
  findAll(lang: Language): Project[] {
    return projectsData.map((p) => localizeProject(p, lang));
  }

}

export const projectRepository: IProjectRepository = new StaticProjectRepository();
