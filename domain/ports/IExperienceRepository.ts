import type { Language } from "@/types/language";
import type { Experience } from "@/types/experience";

export interface IExperienceRepository {
  findAll(lang: Language): Experience[];
}
