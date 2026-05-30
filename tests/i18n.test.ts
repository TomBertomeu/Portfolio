import { describe, it, expect } from "vitest";
import { getTranslations } from "@/lib/i18n";

describe("getTranslations", () => {
  it("returns a distinct dictionary per language", () => {
    expect(getTranslations("fr")).not.toBe(getTranslations("en"));
  });

  it("exposes the same key shape across languages", () => {
    const frKeys = Object.keys(getTranslations("fr")).sort();
    const enKeys = Object.keys(getTranslations("en")).sort();

    expect(frKeys).toEqual(enKeys);
  });
});
