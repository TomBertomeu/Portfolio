"use client";
import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { TranslationKey } from "@/types/i18n";

export type Language = "fr" | "en" | "nl";

type Translations = Record<string, any>;

interface LanguageContextProps {
  t: (key: TranslationKey | "_language") => string;
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

  // Initial language detection
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['fr', 'en', 'nl'].includes(savedLang)) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (['fr', 'en', 'nl'].includes(browserLang)) {
        setLanguage(browserLang as Language);
      } else {
        // Fallback to 'en' if browser language is not supported, or stay 'fr' if preferred
        // Usually, English is the best fallback for international audiences
        setLanguage('en');
      }
    }
  }, []);

  // Load translations and update DOM when language changes
  useEffect(() => {
    setTranslations(loadTranslations(language));
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: TranslationKey | "_language") => {
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
