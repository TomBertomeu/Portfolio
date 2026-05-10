import frJson from "@/locales/fr.json";
import enJson from "@/locales/en.json";
import type { Language } from "@/contexts/LanguageProvider";

export type Translations = typeof frJson;

const TRANSLATIONS: Record<Language, Translations> = {
  fr: frJson,
  en: enJson as unknown as Translations,
};

export function getTranslations(language: Language): Translations {
  return TRANSLATIONS[language];
}
