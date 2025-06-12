"use client";
import React, { createContext, useContext, ReactNode } from "react";

type Translations = Record<string, any>;

interface LanguageContextProps {
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

function loadTranslations(): Translations {
  return require("../locales/fr.json");
}

function getValue(obj: any, path: string) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj) || path;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const translations = loadTranslations();
  const t = (key: string) => getValue(translations, key);

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
