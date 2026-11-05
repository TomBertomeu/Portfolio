import { describe, it, expect } from "vitest";
import { buildSitemapXml } from "@/lib/sitemap";
import { SITE_PATHS } from "@/lib/site";

describe("buildSitemapXml", () => {
  const xml = buildSitemapXml("2026-11-05");

  it("is a sitemaps.org urlset", () => {
    expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  });

  it("lists every site path as an absolute URL with the given lastmod", () => {
    for (const path of Object.values(SITE_PATHS)) {
      expect(xml).toContain(`<loc>https://tom-bertomeu.com${path}</loc>`);
    }
    expect(xml.match(/<lastmod>2026-11-05<\/lastmod>/g)).toHaveLength(Object.keys(SITE_PATHS).length);
  });
});
