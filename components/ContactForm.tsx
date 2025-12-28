"use client";

import React, { useState } from "react";
import { Send, Mail, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageProvider";
import Title from "./Title";
import ScrollAnimation from "./ScrollAnimation";

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
      // Utilisation de Formspree pour l'envoi d'emails en statique
      // Remplacez process.env.NEXT_PUBLIC_FORMSPREE_ID par votre ID de formulaire Formspree
      // ou mettez l'URL complète ici : "https://formspree.io/f/votre_id"
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

      if (!formId || formId === "votre_id_formspree_ici") {
        console.error("Formspree ID is missing or invalid. Please update .env.local with your real Formspree ID.");
        alert("Configuration Error: Formspree ID is missing. Please check the console for details.");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
        return;
      }

      const response = await fetch(`https://formspree.io/f/${formId}`, {
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
      <ScrollAnimation direction="left" className="flex flex-col h-full py-4">
        <div>
          <div className="mb-8">
            <Title text={t("contact.title")} />
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-xl font-medium text-primary mb-4">
              {t("contactForm.greeting")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("contactForm.infoSubtitle")}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className="w-full h-px bg-border mb-8"></div>
          <div className="flex gap-6">
            <a
              href="mailto:tom.bertomeu.pro@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all transform hover:scale-110 active:scale-95 duration-200"
              title="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/TomBertomeu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all transform hover:scale-110 active:scale-95 duration-200"
              title="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/tom-bertomeu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0077b5] transition-all transform hover:scale-110 active:scale-95 duration-200"
              title="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </ScrollAnimation>

      {/* Formulaire */}
      <ScrollAnimation direction="right" delay={200} className="bg-muted/50 border border-border rounded-2xl p-4 md:p-8 shadow-[-6px_6px_10px_rgba(0,0,0,0.1)]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-2">
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

          <div className="flex flex-col gap-2">
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

          <div className="flex flex-col gap-2">
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
            className={`cursor-pointer w-full flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 active:scale-95 ${status === "success"
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
      </ScrollAnimation>
    </div>
  );
}
