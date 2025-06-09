"use client";
import ContactForm from "@/components/ContactForm";
import Title from "@/components/Title";
import Section from "@/components/Section";

import { useLanguage } from "@/contexts/LanguageProvider";

export default function ContactSection() {
    const { t } = useLanguage();
    return (
        <Section id="contact">
            <Title text={t('contact.title')} />
            <ContactForm />
        </Section>
    )
}