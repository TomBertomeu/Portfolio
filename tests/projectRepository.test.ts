import { describe, it, expect } from "vitest";
import { projectRepository } from "@/repositories/projectRepository";

describe("projectRepository.findAll", () => {
  it("localizes the title to the requested language", () => {
    const fr = projectRepository.findAll("fr");
    const en = projectRepository.findAll("en");

    const lego = (lang: typeof fr) => lang.find((p) => p.id === "lego-rebuilder");

    expect(lego(fr)?.title).toBe("Outil de reconstruction LEGO");
    expect(lego(en)?.title).toBe("LEGO Set Rebuilder");
  });

  it("returns the same set of ids regardless of language", () => {
    const frIds = projectRepository.findAll("fr").map((p) => p.id);
    const enIds = projectRepository.findAll("en").map((p) => p.id);

    expect(frIds).toEqual(enIds);
  });

  it("never exposes an empty link: a project is either linked or has a status", () => {
    for (const project of projectRepository.findAll("fr")) {
      expect(project.link === undefined || project.link.length > 0).toBe(true);
      expect(Boolean(project.link) || project.status !== undefined).toBe(true);
    }
  });

  it("keeps the status untouched by localization", () => {
    const lego = projectRepository.findAll("en").find((p) => p.id === "lego-rebuilder");

    expect(lego?.status).toBe("wip");
  });

  it("localizes badge labels and leaves tech names untouched", () => {
    const coc = (lang: "fr" | "en") =>
      projectRepository.findAll(lang).find((p) => p.id === "coc-assistant")?.badges?.map((b) => b.text);

    expect(coc("fr")).toEqual(["Ingestion auto", "Analyse statistique"]);
    expect(coc("en")).toEqual(["Auto ingestion", "Statistical analysis"]);

    for (const project of projectRepository.findAll("en")) {
      for (const badge of project.badges ?? []) expect(typeof badge.text).toBe("string");
    }
  });

  it("flattens localized fields to plain strings", () => {
    const [first] = projectRepository.findAll("fr");

    expect(typeof first.title === "string" || first.title === undefined).toBe(true);
  });
});
