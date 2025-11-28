"use client";
import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";

export type Language = "fr" | "en";

type Translations = Record<string, any>;

interface LanguageContextProps {
  t: (key: string) => string;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

function loadTranslations(lang: Language): Translations {
  return require(`../locales/${lang}.json`);
}

function getValue(obj: any, path: string) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj) || path;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [translations, setTranslations] = useState<Translations>(() => loadTranslations('fr'));

  // Charger les traductions quand la langue change
  useEffect(() => {
    setTranslations(loadTranslations(language));
  }, [language]);

  const t = (key: string) => {
    // Permet d'accéder à la langue actuelle via t('_language')
    if (key === '_language') return language;
    return getValue(translations, key);
  };

  return (
    <LanguageContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
