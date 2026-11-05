import { buildProjectsMarkdown } from "@/lib/agentContent";
import { buildAgentContentInput } from "@/lib/agentContentInput";

// Static export writes this handler's body to out/projects.md at build time.
export const dynamic = "force-static";

export function GET() {
    return new Response(buildProjectsMarkdown(buildAgentContentInput()), {
        headers: { "Content-Type": "text/markdown; charset=utf-8" },
    });
}
