import type { JsonLdGraph } from "@/lib/structuredData";

/**
 * Inline JSON-LD block. Rendered from server components so it is part of the
 * prerendered HTML and visible to crawlers and agents without running JS.
 * `<` is escaped so the payload can never close the script tag early.
 */
export default function JsonLd({ data }: Readonly<{ data: JsonLdGraph }>) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
        />
    );
}
