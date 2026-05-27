export type Language = "fr" | "en";

export const SUPPORTED_LANGUAGES: readonly Language[] = ["fr", "en"];
export const DEFAULT_LANGUAGE: Language = "fr";
export const FALLBACK_BROWSER_LANGUAGE: Language = "en";
export const LANGUAGE_STORAGE_KEY = "language";
