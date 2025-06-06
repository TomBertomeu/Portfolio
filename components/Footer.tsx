import { Mail, Github, Linkedin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-white/70 backdrop-blur-md border-t border-gray-200 pt-10 pb-4">
            <div className="max-w-6xl mx-auto px-8 md:px-0 flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0 w-full">
                    {/* Navigation */}
                    <div className="flex-1 flex flex-col items-center md:items-start mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <nav className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a href="/" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
                            <a href="#about" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
                            <a href="#projects" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Projets</a>
                            <a href="#skills" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Compétences</a>
                            <a href="#contact" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="flex-1 flex flex-col items-center md:items-end">
                        <h3 className="text-lg font-semibold mb-4">Réseaux sociaux</h3>
                        <div className="flex gap-6">
                            <a 
                                href="mailto:contact@example.com" 
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                <span>Email</span>
                            </a>
                            <a 
                                href="https://github.com/username" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                                <span>GitHub</span>
                            </a>
                            <a 
                                href="https://linkedin.com/in/username" 
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
                        &copy; {new Date().getFullYear()} Tom Bertomeu. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}