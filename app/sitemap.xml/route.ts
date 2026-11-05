import { buildSitemapXml } from "@/lib/sitemap";

// A plain route handler rather than app/sitemap.ts: the metadata convention
// 500s under `next dev --turbopack` with `output: "export"` (it drops the
// force-static flag), while this works in both dev and the static export.
export const dynamic = "force-static";

export function GET() {
    return new Response(buildSitemapXml(new Date().toISOString().slice(0, 10)), {
        headers: { "Content-Type": "application/xml; charset=utf-8" },
    });
}
