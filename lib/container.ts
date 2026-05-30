import { projectRepository } from "@/repositories/projectRepository";
import { experienceRepository } from "@/repositories/experienceRepository";
import { profileRepository } from "@/repositories/profileRepository";
import { contactService } from "@/services/contactService";
import {
  getFeaturedProjects,
  getAllProjects,
} from "@/domain/usecases/getProjects";
import { getAllExperiences } from "@/domain/usecases/getExperiences";
import { sendContactMessage } from "@/domain/usecases/sendContactMessage";
import type { Language } from "@/types/language";
import type { ContactMessage } from "@/domain/ports/IContactService";

export const container = {
  getFeaturedProjects: (lang: Language, count?: number) =>
    getFeaturedProjects(projectRepository, lang, count),
  getAllProjects: (lang: Language) =>
    getAllProjects(projectRepository, lang),
  getAllExperiences: (lang: Language) =>
    getAllExperiences(experienceRepository, lang),
  sendContactMessage: (message: ContactMessage) =>
    sendContactMessage(contactService, message),
  getProfile: () => profileRepository.get(),
};
