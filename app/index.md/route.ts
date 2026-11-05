import { buildHomeMarkdown } from "@/lib/agentContent";
import { buildAgentContentInput } from "@/lib/agentContentInput";

// Static export writes this handler's body to out/index.md at build time.
// public/.htaccess serves it in place of index.html when a client sends
// `Accept: text/markdown`.
export const dynamic = "force-static";

export function GET() {
    return new Response(buildHomeMarkdown(buildAgentContentInput()), {
        headers: { "Content-Type": "text/markdown; charset=utf-8" },
    });
}
