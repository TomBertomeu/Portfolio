import frJson from "@/locales/fr.json";
import enJson from "@/locales/en.json";
import type { Language } from "@/types/language";

export type Translations = typeof frJson;

const TRANSLATIONS: Record<Language, Translations> = {
  fr: frJson,
  en: enJson,
};

export function getTranslations(language: Language): Translations {
  return TRANSLATIONS[language];
}
