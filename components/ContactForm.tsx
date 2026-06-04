"use client";

import React, { useState } from "react";
import { Send, Mail, Github, Linkedin, CheckCircle, AlertCircle, SquareArrowOutUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { container } from "@/lib/container";
import Title from "./Title";
import ScrollAnimation from "./ScrollAnimation";

const STATUS_RESET_DELAY_MS = 5000;
const EMPTY_FORM = { name: "", email: "", message: "" };
const INPUT_CLASS = "w-full rounded-xl border border-primary/30 bg-background px-5 py-3 md:py-2.5 text-base md:text-sm placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:border-[var(--primary-blue)] focus-visible:ring-2 focus-visible:ring-[var(--primary-blue)]/20";

type FormStatus = "idle" | "sending" | "success" | "error";

function FormField({ id, label, required, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}{required && <span className="text-red-500"> *</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const { t } = useLanguage();
  const profile = container.getProfile();
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const result = await container.sendContactMessage(formData);

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
      <ScrollAnimation direction="left" className="py-4">
        <Title text={t("contact.title")} />

        <p className="text-lg text-muted-foreground mb-6">
          {t("contactForm.infoSubtitle")}
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors duration-200 -mx-2 rounded-lg px-2 py-2"
          >
            <Mail className="h-5 w-5 shrink-0" />
            <span className="flex items-center gap-1">
              {profile.email}
              <SquareArrowOutUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
            </span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-lg text-muted-foreground hover:text-foreground transition-colors duration-200 -mx-2 rounded-lg px-2 py-2"
          >
            <Github className="h-5 w-5 shrink-0" />
            <span className="flex items-center gap-1">
              {profile.githubHandle}
              <SquareArrowOutUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-lg text-muted-foreground hover:text-[var(--primary-blue)] transition-colors duration-200 -mx-2 rounded-lg px-2 py-2"
          >
            <Linkedin className="h-5 w-5 shrink-0" />
            <span className="flex items-center gap-1">
              {profile.linkedinName}
              <SquareArrowOutUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
            </span>
          </a>
        </div>
      </ScrollAnimation>

      {/* Formulaire */}
      <ScrollAnimation direction="right" delay={200} className="bg-background/80 backdrop-blur-sm border border-border rounded-[28px] md:rounded-[44px] p-4 md:p-8 shadow-[-6px_6px_10px_rgba(0,0,0,0.1)]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField id="name" label={t("contactForm.labelName")} required>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contactForm.placeholderName")}
              className={INPUT_CLASS}
            />
          </FormField>

          <FormField id="email" label={t("contactForm.labelEmail")} required>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contactForm.placeholderEmail")}
              className={INPUT_CLASS}
            />
          </FormField>

          <FormField id="message" label={t("contactForm.labelMessage")} required>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contactForm.placeholderMessage")}
              className={`${INPUT_CLASS} py-3 resize-none`}
            />
          </FormField>

          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className={`cursor-pointer relative w-full inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 font-medium overflow-hidden transition-all duration-300 ease-out active:scale-95 group disabled:cursor-not-allowed ${
              status === "success"
                ? "border-transparent text-white bg-green-600"
                : "border-primary/40 bg-transparent text-primary hover:text-white hover:border-transparent hover:-translate-y-px hover:shadow-lg hover:shadow-[var(--primary-blue)]/30 disabled:opacity-70"
            }`}
          >
            {status !== "success" && (
              <span className="absolute -inset-y-4 -inset-x-8 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-green)] -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
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
                <span className="relative z-10">
                  {t("contactForm.send")}
                </span>
                <Send className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
