import { experiencesData, type ExperienceData } from "@/data/experience";
import type { Experience } from "@/types/experience";
import type { Language } from "@/types/language";
import type { IExperienceRepository } from "@/domain/ports/IExperienceRepository";

function localizeExperience(exp: ExperienceData, lang: Language): Experience {
  return {
    ...exp,
    title: exp.title[lang],
    period: exp.period[lang],
    description: exp.description[lang],
  };
}

class StaticExperienceRepository implements IExperienceRepository {
  findAll(lang: Language): Experience[] {
    return experiencesData.map((exp) => localizeExperience(exp, lang));
  }
}

export const experienceRepository: IExperienceRepository = new StaticExperienceRepository();
