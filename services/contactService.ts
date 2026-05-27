import type { IContactService, ContactMessage, ContactResult } from "@/domain/ports/IContactService";

const FORMSPREE_BASE_URL = "https://formspree.io/f";

class FormspreeContactService implements IContactService {
  async send(message: ContactMessage): Promise<ContactResult> {
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
}

export const contactService: IContactService = new FormspreeContactService();
