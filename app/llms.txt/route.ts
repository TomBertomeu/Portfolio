import { buildLlmsTxt } from "@/lib/agentContent";
import { buildAgentContentInput } from "@/lib/agentContentInput";

// Static export writes this handler's body to out/llms.txt at build time.
export const dynamic = "force-static";

export function GET() {
    return new Response(buildLlmsTxt(buildAgentContentInput()), {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
}
