import { describe, it, expect } from "vitest";
import { buildLlmsTxt, buildHomeMarkdown, buildProjectsMarkdown } from "@/lib/agentContent";
import { buildAgentContentInput } from "@/lib/agentContentInput";
import { getTranslations } from "@/lib/i18n";
import { container } from "@/lib/container";

const countHeadings = (md: string, level: "#" | "##") =>
  md.split("\n").filter((line) => line.startsWith(`${level} `)).length;

describe("buildLlmsTxt", () => {
  const txt = buildLlmsTxt(buildAgentContentInput());

  it("follows the llms.txt shape: H1 then a blockquote summary", () => {
    const [h1, , quote] = txt.split("\n");
    expect(h1).toBe("# Tom Bertomeu");
    expect(quote.startsWith("> ")).toBe(true);
  });

  it("links the Markdown alternates and the legal page with absolute URLs", () => {
    expect(txt).toContain("https://tom-bertomeu.com/index.md");
    expect(txt).toContain("https://tom-bertomeu.com/projects.md");
    expect(txt).toContain("https://tom-bertomeu.com/legal/");
  });

  it("lists every publicly linked project and no private one", () => {
    for (const p of container.getAllProjects("fr")) {
      if (p.link) expect(txt).toContain(`](${p.link})`);
      else expect(txt).not.toContain(`[${p.title}]`);
    }
  });

  it("exposes machine-readable contact details", () => {
    expect(txt).toContain("mailto:contact@tom-bertomeu.com");
    expect(txt).toContain("https://github.com/TomBertomeu");
    expect(txt).toContain("https://www.linkedin.com/in/tom-bertomeu/");
  });
});

describe("buildHomeMarkdown", () => {
  const md = buildHomeMarkdown(buildAgentContentInput());

  it("has exactly one H1 naming the author", () => {
    expect(countHeadings(md, "#")).toBe(1);
    expect(md.split("\n")[0]).toMatch(/^# Tom Bertomeu/);
  });

  it("covers about, experience, projects and contact sections", () => {
    const t = getTranslations("fr");
    for (const heading of [t.nav.about, t.experience.title, t.projects.title, t.contact.title]) {
      expect(md).toContain(`## ${heading}`);
    }
  });

  it("mentions every experience and every featured project", () => {
    const input = buildAgentContentInput();
    for (const e of input.experiences) expect(md).toContain(e.company);
    for (const p of input.projects.filter((p) => p.featured)) expect(md).toContain(`**${p.title}**`);
  });

  it("renders in the requested language", () => {
    const en = buildHomeMarkdown(buildAgentContentInput("en"));
    expect(en).toContain("## About");
    expect(md).toContain("## À propos");
  });
});

describe("buildProjectsMarkdown", () => {
  const md = buildProjectsMarkdown(buildAgentContentInput());

  it("has one H1 and one table row per project", () => {
    expect(countHeadings(md, "#")).toBe(1);
    const rows = md.split("\n").filter((line) => /^\| 20\d\d \|/.test(line));
    expect(rows).toHaveLength(container.getAllProjects("fr").length);
  });

  it("labels unlinked projects with their status instead of an empty cell", () => {
    const t = getTranslations("fr");
    expect(md).toContain(`| ${t.projects.statusPrivate} |`);
    expect(md).toContain(`| ${t.projects.statusWip} |`);
  });
});
