import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin } from "lucide-react"

export default function ContactForm() {
    return (
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
                            <a href="mailto:contact@example.com" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                                contact@example.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <Github className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">GitHub</p>
                            <a href="https://github.com/username" target="_blank" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                                github.com/username
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <Linkedin className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">LinkedIn</p>
                            <a href="https://linkedin.com/in/username" target="_blank" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                                linkedin.com/in/username
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6">
                <form className="space-y-6">
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
                        <Textarea id="message" name="message" required placeholder="Écrivez votre message ici..." />
                    </div>
                    <Button type="submit" className="w-full">
                        Envoyer le message
                    </Button>
                </form>
            </Card>
        </div>
    );
}