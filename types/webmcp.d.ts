/**
 * Ambient typings for WebMCP (navigator.modelContext), the in-browser tool
 * registry proposed by the W3C Web Machine Learning CG and shipped behind a
 * flag in Chromium. Also declares the declarative form attributes.
 */
export {};

declare global {
    interface ModelContextToolResult {
        content: { type: "text"; text: string }[];
    }

    interface ModelContextTool {
        name: string;
        description: string;
        inputSchema?: Record<string, unknown>;
        execute: (input: Record<string, unknown>) => ModelContextToolResult | Promise<ModelContextToolResult>;
    }

    interface ModelContext {
        registerTool(tool: ModelContextTool): unknown;
        unregisterTool?(name: string): void;
        provideContext?(context: { tools: ModelContextTool[] }): void;
    }

    interface Navigator {
        modelContext?: ModelContext;
    }
}

declare module "react" {
    interface FormHTMLAttributes<T> {
        toolname?: string;
        tooldescription?: string;
    }
    interface InputHTMLAttributes<T> {
        toolparamdescription?: string;
    }
    interface TextareaHTMLAttributes<T> {
        toolparamdescription?: string;
    }
}
