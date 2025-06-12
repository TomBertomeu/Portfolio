"use client";
import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link";

import { useLanguage } from "@/contexts/LanguageProvider";

export default function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="bg-white/70 backdrop-blur-md border-t border-gray-200 pt-10 pb-4">
            <div className="max-w-6xl mx-auto px-8 md:px-0 flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0 w-full">
                    {/* Navigation */}
                    <div className="flex-1 flex flex-col items-center md:items-start mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h3>
                        <nav className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <Link 
                                href="/" 
                                className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
                                onClick={(e) => {
                                    // Si on est déjà sur la page d'accueil, on scroll en haut
                                    if (window.location.pathname === '/') {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }
                                    // Sinon, on laisse le lien se comporter normalement (redirection vers la page d'accueil)
                                }}
                            >
                                {t('nav.about')}
                            </Link>
                            <Link href="/#projects" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">{t('nav.projects')}</Link>
                            <Link href="/#skills" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">{t('nav.skills')}</Link>
                            <Link href="/#contact" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">{t('nav.contact')}</Link>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="flex-1 flex flex-col items-center md:items-end">
                        <h3 className="text-lg font-semibold mb-4">{t('footer.socials')}</h3>
                        <div className="flex gap-6">
                            <a 
                                href="mailto:tom.bertomeu.pro@gmail.com" 
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Mail className="w-5 h-5" />
                                <span>tom.bertomeu.pro@gmail.com</span>
                            </a>
                            <a 
                                href="https://github.com/TomBertomeu" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                                <span>GitHub</span>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/tom-bertomeu/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-6 text-center">
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} Tom Bertomeu. {t('footer.copyright')}
                    </p>
                </div>
            </div>
        </footer>
    );
}