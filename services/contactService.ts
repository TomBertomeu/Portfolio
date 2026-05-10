export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export type ContactResult =
  | { ok: true }
  | { ok: false; reason: "missing-config" | "network" | "server" };

const FORMSPREE_BASE_URL = "https://formspree.io/f";

export async function sendContactMessage(message: ContactMessage): Promise<ContactResult> {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  if (!formId) {
    return { ok: false, reason: "missing-config" };
  }

  try {
    const response = await fetch(`${FORMSPREE_BASE_URL}/${formId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });

    return response.ok ? { ok: true } : { ok: false, reason: "server" };
  } catch {
    return { ok: false, reason: "network" };
  }
}
