import { describe, it, expect } from "vitest";
import { getFeaturedProjects, getAllProjects } from "@/domain/usecases/getProjects";
import type { IProjectRepository } from "@/domain/ports/IProjectRepository";
import type { Project } from "@/types/project";

function fakeRepository(projects: Project[]): IProjectRepository {
  return { findAll: () => projects };
}

const featuredA: Project = { id: "a", featured: true };
const featuredB: Project = { id: "b", featured: true };
const featuredC: Project = { id: "c", featured: true };
const featuredD: Project = { id: "d", featured: true };
const plain: Project = { id: "plain" };

describe("getFeaturedProjects", () => {
  it("keeps only featured projects", () => {
    const repo = fakeRepository([featuredA, plain, featuredB]);

    const result = getFeaturedProjects(repo, "fr");

    expect(result.map((p) => p.id)).toEqual(["a", "b"]);
  });

  it("caps the result at the default count of 3", () => {
    const repo = fakeRepository([featuredA, featuredB, featuredC, featuredD]);

    const result = getFeaturedProjects(repo, "fr");

    expect(result.map((p) => p.id)).toEqual(["a", "b", "c"]);
  });

  it("honours an explicit count", () => {
    const repo = fakeRepository([featuredA, featuredB, featuredC]);

    const result = getFeaturedProjects(repo, "fr", 1);

    expect(result.map((p) => p.id)).toEqual(["a"]);
  });

  it("returns nothing when no project is featured", () => {
    const repo = fakeRepository([plain]);

    expect(getFeaturedProjects(repo, "fr")).toEqual([]);
  });
});

describe("getAllProjects", () => {
  it("passes every project through unfiltered", () => {
    const repo = fakeRepository([featuredA, plain]);

    const result = getAllProjects(repo, "fr");

    expect(result.map((p) => p.id)).toEqual(["a", "plain"]);
  });
});
