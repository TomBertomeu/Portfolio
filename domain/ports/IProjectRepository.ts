import type { Language } from "@/types/language";
import type { Project } from "@/types/project";

export interface IProjectRepository {
  findAll(lang: Language): Project[];
  findById(id: string, lang: Language): Project | undefined;
}
