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

  it("flattens localized fields to plain strings", () => {
    const [first] = projectRepository.findAll("fr");

    expect(typeof first.title === "string" || first.title === undefined).toBe(true);
  });
});
