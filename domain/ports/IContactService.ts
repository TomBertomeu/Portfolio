export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export type ContactResult =
  | { ok: true }
  | { ok: false; reason: "missing-config" | "network" | "server" };

export interface IContactService {
  send(message: ContactMessage): Promise<ContactResult>;
}
