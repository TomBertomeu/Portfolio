import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { contactService } from "@/services/contactService";
import type { ContactMessage } from "@/domain/ports/IContactService";

const message: ContactMessage = {
  name: "Ada",
  email: "ada@example.com",
  message: "Hello",
};

beforeEach(() => {
  vi.stubEnv("NEXT_PUBLIC_FORMSPREE_ID", "test-form-id");
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("FormspreeContactService.send", () => {
  it("fails with missing-config when the form id is absent", async () => {
    vi.stubEnv("NEXT_PUBLIC_FORMSPREE_ID", "");

    const result = await contactService.send(message);

    expect(result).toEqual({ ok: false, reason: "missing-config" });
  });

  it("succeeds when Formspree returns ok", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true }));

    const result = await contactService.send(message);

    expect(result).toEqual({ ok: true });
  });

  it("reports a server failure on a non-ok response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));

    const result = await contactService.send(message);

    expect(result).toEqual({ ok: false, reason: "server" });
  });

  it("reports a network failure when fetch throws", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));

    const result = await contactService.send(message);

    expect(result).toEqual({ ok: false, reason: "network" });
  });

  it("posts to the Formspree endpoint with the message payload", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);

    await contactService.send(message);

    expect(fetchMock).toHaveBeenCalledWith(
      "https://formspree.io/f/test-form-id",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify(message),
      }),
    );
  });
});
