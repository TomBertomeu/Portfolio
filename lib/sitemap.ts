import { SITE_PATHS, absoluteUrl } from "@/lib/site";

const ENTRIES: { path: string; changefreq: string; priority: string }[] = [
    { path: SITE_PATHS.home, changefreq: "monthly", priority: "1.0" },
    { path: SITE_PATHS.projects, changefreq: "monthly", priority: "0.8" },
    { path: SITE_PATHS.legal, changefreq: "yearly", priority: "0.2" },
];

/** sitemap.xml body listing every human-readable page (see SITE_PATHS). */
export function buildSitemapXml(lastmod: string): string {
    const urls = ENTRIES.map(
        ({ path, changefreq, priority }) =>
            `  <url>\n    <loc>${absoluteUrl(path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
    ).join("\n");
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
