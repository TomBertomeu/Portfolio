import { projectRepository } from "@/repositories/projectRepository";
import { experienceRepository } from "@/repositories/experienceRepository";
import { profileRepository } from "@/repositories/profileRepository";
import { contactService } from "@/services/contactService";
import {
  getFeaturedProjects,
  getOtherProjects,
  getAllProjects,
  getProjectById,
} from "@/domain/usecases/getProjects";
import { getAllExperiences } from "@/domain/usecases/getExperiences";
import { sendContactMessage } from "@/domain/usecases/sendContactMessage";
import type { Language } from "@/types/language";
import type { ContactMessage } from "@/domain/ports/IContactService";

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
  sendContactMessage: (message: ContactMessage) =>
    sendContactMessage(contactService, message),
  getProfile: () => profileRepository.get(),
};
