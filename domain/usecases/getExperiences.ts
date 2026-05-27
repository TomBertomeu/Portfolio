import type { IExperienceRepository } from "@/domain/ports/IExperienceRepository";
import type { Language } from "@/types/language";
import type { Experience } from "@/types/experience";

export function getAllExperiences(repo: IExperienceRepository, lang: Language): Experience[] {
  return repo.findAll(lang);
}
