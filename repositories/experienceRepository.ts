import { experiencesData } from "@/data/experience";
import type { Experience, ExperienceData } from "@/types/experience";
import type { Language } from "@/types/language";

function localizeExperience(exp: ExperienceData, lang: Language): Experience {
  return {
    ...exp,
    title: exp.title[lang],
    period: exp.period[lang],
    description: exp.description[lang],
  };
}

export function findAllExperiences(lang: Language = "fr"): Experience[] {
  return experiencesData.map((exp) => localizeExperience(exp, lang));
}
