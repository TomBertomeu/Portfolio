import type { IProjectRepository } from "@/domain/ports/IProjectRepository";
import type { Language } from "@/types/language";
import type { Project } from "@/types/project";

const DEFAULT_FEATURED_COUNT = 3;

export function getFeaturedProjects(
  repo: IProjectRepository,
  lang: Language,
  count = DEFAULT_FEATURED_COUNT,
): Project[] {
  return repo.findAll(lang).filter((p) => p.featured).slice(0, count);
}

export function getAllProjects(repo: IProjectRepository, lang: Language): Project[] {
  return repo.findAll(lang);
}
