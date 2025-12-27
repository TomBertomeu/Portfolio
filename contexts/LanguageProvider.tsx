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
  const [language, setLanguage] = useState<Language | null>(null);
  const [translations, setTranslations] = useState<Translations>(() => loadTranslations('fr'));
  const [isLoaded, setIsLoaded] = useState(false);

  // Initial language detection
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    let targetLang: Language = 'fr';

    if (savedLang && ['fr', 'en', 'nl'].includes(savedLang)) {
      targetLang = savedLang;
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (['fr', 'en', 'nl'].includes(browserLang)) {
        targetLang = browserLang as Language;
      } else {
        // Fallback to 'en' if browser language is not supported
        targetLang = 'en';
      }
    }

    setLanguage(targetLang);
    setTranslations(loadTranslations(targetLang));
    setIsLoaded(true);
  }, []);

  // Load translations and update DOM when language changes (after initial load)
  useEffect(() => {
    if (!language || !isLoaded) return;

    setTranslations(loadTranslations(language));
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language, isLoaded]);

  const t = (key: TranslationKey | "_language") => {
    if (key === '_language') return language || 'fr';
    return getValue(translations, key);
  };

  // Prevent flash of untranslated content (FOUT)
  if (!isLoaded || !language) {
    return (
      <div className="fixed inset-0 z-[9999] bg-background"></div>
    );
  }

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
