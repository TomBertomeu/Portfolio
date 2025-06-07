"use client";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin } from "lucide-react"

import React, { useState } from "react";

export default function ContactForm() {
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState<string|null>(null);
    const [error, setError] = useState<string|null>(null);
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Contact Information */}
            <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-semibold">Informations de contact</h3>
                    <p className="text-sm text-muted-foreground">
                        N'hésitez pas à me contacter par l'une des méthodes ci-dessous
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <Mail className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">Email</p>
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
                            <p className="text-sm font-medium">GitHub</p>
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
                            <p className="text-sm font-medium">LinkedIn</p>
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
                            setSuccess('Message envoyé avec succès!');
                            form.reset();
                        } else {
                            setError(data.error || 'Erreur lors de l\'envoi du message.');
                            console.error('API error:', data.error);
                        }
                    } catch (err) {
                        setError('Erreur lors de l\'envoi du message.');
                    }
                    setSending(false);
                }}>
                    <div className="space-y-4">
                        <Label htmlFor="name">Nom</Label>
                        <Input id="name" name="name" required placeholder="Votre nom" />
                    </div>
                    <div className="space-y-4">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" name="email" required placeholder="votre.email@example.com" />
                    </div>
                    <div className="space-y-4">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" required placeholder="Écrivez votre message ici..." rows={8} maxLength={500} className="max-h-40 resize-none" />
                    </div>
                    {success && <div className="text-green-600 text-sm">{success}</div>}
                    {error && <div className="text-red-600 text-sm">{error}</div>}
                    <Button type="submit" className="w-full" disabled={sending}>
                        {sending ? 'Envoi en cours...' : 'Envoyer le message'}
                    </Button>
                    <div className="text-xs text-gray-500 bg-gray-100 rounded p-2 border border-gray-200">
                        Les informations transmises sont strictement confidentielles et utilisées uniquement pour répondre à votre message. Elles ne seront jamais partagées ni exploitées à d'autres fins.
                    </div>
                </form>
            </Card>
        </div>

        </>
    );
}