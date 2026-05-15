"use client";

import React, { useState } from "react";
import { Send, Mail, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { sendContactMessage } from "@/services/contactService";
import Title from "./Title";
import ScrollAnimation from "./ScrollAnimation";

const STATUS_RESET_DELAY_MS = 5000;
const EMPTY_FORM = { name: "", email: "", message: "" };

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const result = await sendContactMessage(formData);

    if (result.ok) {
      setStatus("success");
      setFormData(EMPTY_FORM);
    } else {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), STATUS_RESET_DELAY_MS);
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
              {t("contactForm.labelName")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contactForm.placeholderName")}
              className="w-full rounded-full border border-primary/30 bg-background px-5 py-2.5 text-sm placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:border-[#2563eb] focus-visible:ring-2 focus-visible:ring-[#2563eb]/20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              {t("contactForm.labelEmail")} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contactForm.placeholderEmail")}
              className="w-full rounded-full border border-primary/30 bg-background px-5 py-2.5 text-sm placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:border-[#2563eb] focus-visible:ring-2 focus-visible:ring-[#2563eb]/20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              {t("contactForm.labelMessage")} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contactForm.placeholderMessage")}
              className="w-full rounded-2xl border border-primary/30 bg-background px-5 py-3 text-sm placeholder:text-muted-foreground transition-colors resize-none focus-visible:outline-none focus-visible:border-[#2563eb] focus-visible:ring-2 focus-visible:ring-[#2563eb]/20"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className={`cursor-pointer relative w-full inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 font-medium overflow-hidden transition-all duration-300 ease-out active:scale-95 group disabled:cursor-not-allowed ${
              status === "success"
                ? "border-transparent text-white bg-green-600"
                : "border-primary/40 bg-transparent text-primary hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-[#2563eb]/30 disabled:opacity-70"
            }`}
          >
            {status !== "success" && (
              <span className="absolute -inset-y-4 -inset-x-8 rounded-full bg-gradient-to-r from-[#2563eb] to-[#10b981] -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            )}
            {status === "sending" ? (
              <>
                <div className="relative z-10 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                <span className="relative z-10">{t("contactForm.sending")}</span>
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle className="relative z-10 h-4 w-4" />
                <span className="relative z-10">{t("contactForm.success")}</span>
              </>
            ) : (
              <>
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5">
                  {t("contactForm.send")}
                </span>
                <Send className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
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
