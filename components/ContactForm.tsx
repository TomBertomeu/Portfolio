"use client";

import React, { useState } from "react";
import { Send, Mail, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await response.json();
        console.error("Server error:", data.error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Informations de contact */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-6">{t("contactForm.infoTitle")}</h3>
          <p className="text-muted-foreground mb-8 text-lg">
            {t("contactForm.infoSubtitle")}
          </p>

          <div className="space-y-6">
            <a
              href="mailto:tom.bertomeu@edu.univ-fcomte.fr"
              className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t("footer.email")}</p>
                <p className="font-semibold">tom.bertomeu@edu.univ-fcomte.fr</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/tom-bertomeu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
            >
              <div className="h-12 w-12 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] group-hover:scale-110 transition-transform">
                <Linkedin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t("contactForm.labelLinkedin")}</p>
                <p className="font-semibold">Tom Bertomeu</p>
              </div>
            </a>

            <a
              href="https://github.com/TomBertomeu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
            >
              <div className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t("contactForm.labelGithub")}</p>
                <p className="font-semibold">TomBertomeu</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              {t("contactForm.labelName")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contactForm.placeholderName")}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              {t("contactForm.labelEmail")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contactForm.placeholderEmail")}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              {t("contactForm.labelMessage")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contactForm.placeholderMessage")}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className={`w-full flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 ${
              status === "success"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-primary hover:bg-primary/90"
            } disabled:opacity-70 disabled:cursor-not-allowed`}
          >
            {status === "sending" ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                {t("contactForm.sending")}
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle className="h-4 w-4" />
                {t("contactForm.success")}
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                {t("contactForm.send")}
              </>
            )}
          </button>

          {status === "error" && (
            <div className="flex items-center gap-2 text-sm text-red-500 mt-2">
              <AlertCircle className="h-4 w-4" />
              {t("contactForm.error")}
            </div>
          )}

          <p className="text-xs text-muted-foreground text-center mt-4">
            {t("contactForm.privacy")}
          </p>
        </form>
      </div>
    </div>
  );
}
