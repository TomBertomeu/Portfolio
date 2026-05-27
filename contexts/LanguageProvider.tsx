"use client";
import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { TranslationKey } from "@/types/i18n";
import { getTranslations, type Translations } from "@/lib/i18n";
import {
  type Language,
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  FALLBACK_BROWSER_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
} from "@/types/language";

interface LanguageContextProps {
  t: (key: TranslationKey | "_language") => string;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

function isSupportedLanguage(value: string | null): value is Language {
  return value !== null && SUPPORTED_LANGUAGES.includes(value as Language);
}

function detectInitialLanguage(): Language {
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (isSupportedLanguage(saved)) return saved;

  const browser = navigator.language.split("-")[0];
  return isSupportedLanguage(browser) ? browser : FALLBACK_BROWSER_LANGUAGE;
}

function resolveTranslationKey(translations: Translations, path: string): string {
  const value = path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, translations);

  if (typeof value === "string") return value;

  if (process.env.NODE_ENV !== "production") {
    console.warn(`[i18n] Missing translation key: "${path}"`);
  }
  return path;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language | null>(null);
  const [translations, setTranslations] = useState<Translations>(() => getTranslations(DEFAULT_LANGUAGE));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initial = detectInitialLanguage();
    setLanguage(initial);
    setTranslations(getTranslations(initial));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!language || !isLoaded) return;
    setTranslations(getTranslations(language));
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language, isLoaded]);

  const t = (key: TranslationKey | "_language") => {
    if (key === "_language") return language || DEFAULT_LANGUAGE;
    return resolveTranslationKey(translations, key);
  };

  if (!isLoaded || !language) {
    return <div className="fixed inset-0 z-[9999] bg-background"></div>;
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
