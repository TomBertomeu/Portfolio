import type { IContactService, ContactMessage, ContactResult } from "@/domain/ports/IContactService";

export async function sendContactMessage(
  service: IContactService,
  message: ContactMessage,
): Promise<ContactResult> {
  return service.send(message);
}
