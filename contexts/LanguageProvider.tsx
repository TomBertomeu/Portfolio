"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

const languages = ["en", "fr", "nl"] as const;
export type Language = typeof languages[number];

type Translations = Record<string, any>;

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  availableLanguages: readonly Language[];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

function loadTranslations(lang: Language): Translations {
  switch (lang) {
    case "fr":
      return require("../locales/fr.json");
    case "nl":
      return require("../locales/nl.json");
    case "en":
    default:
      return require("../locales/en.json");
  }
}

function getValue(obj: any, path: string) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj) || path;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [translations, setTranslations] = useState<Translations>(loadTranslations("en"));

  useEffect(() => {
    setTranslations(loadTranslations(language));
  }, [language]);

  const t = (key: string) => getValue(translations, key);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages: languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
