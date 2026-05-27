import { projectRepository } from "@/repositories/projectRepository";
import { experienceRepository } from "@/repositories/experienceRepository";
import {
  getFeaturedProjects,
  getOtherProjects,
  getAllProjects,
  getProjectById,
} from "@/domain/usecases/getProjects";
import { getAllExperiences } from "@/domain/usecases/getExperiences";
import type { Language } from "@/types/language";

export const container = {
  getFeaturedProjects: (lang: Language, count?: number) =>
    getFeaturedProjects(projectRepository, lang, count),
  getOtherProjects: (lang: Language) =>
    getOtherProjects(projectRepository, lang),
  getAllProjects: (lang: Language) =>
    getAllProjects(projectRepository, lang),
  getProjectById: (id: string, lang: Language) =>
    getProjectById(projectRepository, id, lang),
  getAllExperiences: (lang: Language) =>
    getAllExperiences(experienceRepository, lang),
};
