import { describe, it, expect } from "vitest";
import { buildHomeGraph, buildProjectsGraph, buildLegalGraph, PERSON_ID, type JsonLdNode } from "@/lib/structuredData";
import { buildAgentContentInput } from "@/lib/agentContentInput";
import { container } from "@/lib/container";

const input = buildAgentContentInput();
const types = (graph: { "@graph": JsonLdNode[] }) => graph["@graph"].map((n) => n["@type"]);
const find = (graph: { "@graph": JsonLdNode[] }, type: string) =>
  graph["@graph"].find((n) => n["@type"] === type) as JsonLdNode;

describe("buildHomeGraph", () => {
  const graph = buildHomeGraph(input);

  it("declares several schema types with a schema.org context", () => {
    expect(graph["@context"]).toBe("https://schema.org");
    expect(types(graph)).toEqual(["Person", "WebSite", "ProfilePage"]);
  });

  it("links the person to external profiles via sameAs and exposes an email", () => {
    const person = find(graph, "Person");
    expect(person.sameAs).toEqual(["https://github.com/TomBertomeu", "https://www.linkedin.com/in/tom-bertomeu/"]);
    expect(person.email).toBe("mailto:contact@tom-bertomeu.com");
  });

  it("names the current employer as an Organization", () => {
    const person = find(graph, "Person");
    expect(person.worksFor).toMatchObject({ "@type": "Organization", name: "GEN'IAtest" });
  });

  it("makes the person the main entity of the profile page and the site publisher", () => {
    expect(find(graph, "ProfilePage").mainEntity).toEqual({ "@id": PERSON_ID });
    expect(find(graph, "WebSite").publisher).toEqual({ "@id": PERSON_ID });
  });

  it("serialises without undefined values", () => {
    expect(JSON.stringify(graph)).not.toContain("undefined");
  });
});

describe("buildProjectsGraph", () => {
  const graph = buildProjectsGraph(input);

  it("lists every project in order inside a CollectionPage", () => {
    const list = find(graph, "CollectionPage").mainEntity as { itemListElement: { position: number; item: JsonLdNode }[] };
    const projects = container.getAllProjects("fr");
    expect(list.itemListElement).toHaveLength(projects.length);
    expect(list.itemListElement.map((e) => e.item.name)).toEqual(projects.map((p) => p.title));
    expect(list.itemListElement.map((e) => e.position)).toEqual(projects.map((_, i) => i + 1));
  });

  it("only gives a url to projects that have a public link", () => {
    const list = find(graph, "CollectionPage").mainEntity as { itemListElement: { item: JsonLdNode }[] };
    for (const { item } of list.itemListElement) {
      const source = container.getAllProjects("fr").find((p) => p.title === item.name)!;
      expect(item.url).toBe(source.link);
    }
  });
});

describe("buildLegalGraph", () => {
  it("describes the legal page as a WebPage about the person", () => {
    const page = find(buildLegalGraph(input), "WebPage");
    expect(page.url).toBe("https://tom-bertomeu.com/legal/");
    expect(page.about).toEqual({ "@id": PERSON_ID });
  });
});
