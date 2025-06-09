"use client";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin } from "lucide-react"
import React, { useState } from "react";

import { useLanguage } from "@/contexts/LanguageProvider";

export default function ContactForm() {
    const { t } = useLanguage();
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState<string|null>(null);
    const [error, setError] = useState<string|null>(null);
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Contact Information */}
            <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-semibold">{t('contactForm.infoTitle')}</h3>
<p className="text-sm text-muted-foreground">{t('contactForm.infoSubtitle')}</p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <Mail className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">{t('contactForm.labelEmail')}</p>
                            <a href="mailto:tom.bertomeu.pro@gmail.com" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                                tom.bertomeu.pro@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <Github className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">{t('contactForm.labelGithub')}</p>
                            <a href="https://github.com/TomBertomeu" target="_blank" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                                github.com/TomBertomeu
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <Linkedin className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">{t('contactForm.labelLinkedin')}</p>
                            <a href="https://www.linkedin.com/in/tom-bertomeu/" target="_blank" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                                linkedin.com/in/tom-bertomeu
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6">

                <form className="space-y-6" onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const message = formData.get('message');
                    setSending(true);
                    setSuccess(null);
                    setError(null);
                    try {
                        const res = await fetch('/api/contact', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ name, email, message })
                        });
                        const data = await res.json();
                        if (res.ok) {
                            setSuccess(t('contactForm.success'));
                            form.reset();
                        } else {
                            setError(data.error || t('contactForm.error'));
                            console.error('API error:', data.error);
                        }
                    } catch (err) {
                        setError(t('contactForm.error'));
                    }
                    setSending(false);
                }}>
                    <div className="space-y-4">
                        <Label htmlFor="name">{t('contactForm.labelName')}</Label>
                        <Input id="name" name="name" required placeholder={t('contactForm.placeholderName')} />
                    </div>
                    <div className="space-y-4">
                        <Label htmlFor="email">{t('contactForm.labelEmail')}</Label>
                        <Input type="email" id="email" name="email" required placeholder={t('contactForm.placeholderEmail')} />
                    </div>
                    <div className="space-y-4">
                        <Label htmlFor="message">{t('contactForm.labelMessage')}</Label>
                        <Textarea id="message" name="message" required placeholder={t('contactForm.placeholderMessage')} rows={8} maxLength={500} className="max-h-40 resize-none" />
                    </div>
                    {success && <p className="text-green-600 font-semibold">{success}</p>}
                    {error && <div className="text-red-600 text-sm">{error}</div>}
                    <Button type="submit" disabled={sending} className="w-full">{sending ? t('contactForm.sending') : t('contactForm.send')}</Button>
                    <div className="text-xs text-gray-500 bg-gray-100 rounded p-2 border border-gray-200">
                        {t('contactForm.privacy')}
                    </div>
                </form>
            </Card>
        </div>

        </>
    );
}