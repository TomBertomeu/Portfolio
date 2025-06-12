"use client"

import Link from "next/link"
import {Menu, X, ChevronLeft, Home} from "lucide-react"
import {useEffect, useState} from "react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger, SheetTitle} from "@/components/ui/sheet"
import "@/styles/shimmer-effect.css"
import { useLanguage } from "@/contexts/LanguageProvider"
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const navLinks = [
    { href: "/", key: "about" },
    { href: "/#skills", key: "skills" },
    { href: "/#projects", key: "projects" },
    { href: "/#experience", key: "experience" },
    { href: "/#contact", key: "contact" },
] as const

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const { t } = useLanguage();
    const { activeSection } = useActiveSection();

    useEffect(() => {
        const checkScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        checkScroll(); // Initialize on mount
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    // Afficher la barre breadcrumb uniquement si on n'est PAS sur la page d'accueil
    const showBreadcrumbBar = pathname !== "/";
    const isProjectsIndex = pathname === "/projects";
    const projectName = pathname.split("/").pop();

    return (
        <>
        <header className={`sticky top-0 z-50 w-full bg-transparent ${
            isScrolled ? "backdrop-blur bg-white/75" : ""
        }`}>
            <div className="flex items-center justify-between max-w-6xl mx-auto px-8 md:px-0 py-4 bg-white md:bg-transparent transition-all duration-300">
                {/* Nom + prénom */}
                <Link 
                    href="/"
                    className="text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors shimmer"
                    onClick={(e) => {
                        // Si on n'est pas sur la page d'accueil, on laisse le lien se comporter normalement
                        if (window.location.pathname !== '/') {
                            return;
                        }
                        // Sinon, on empêche le comportement par défaut et on scroll en haut
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    TB.
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 text-base font-medium items-center">
                    {navLinks.map((link) => (
                        <Button
                            key={link.href}
                            variant="ghost"
                            asChild
                            className={`${activeSection === link.key ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'} transition-colors`}
                        >
                            <Link 
                                href={link.href} 
                                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                                    activeSection === link.key ? 'text-blue-600' : 'text-gray-700'
                                }`}
                                onClick={(e) => {
                                    // Si c'est le lien vers la page d'accueil et qu'on est déjà sur la page d'accueil
                                    if (link.href === '/' && window.location.pathname === '/') {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    } else if (link.href.startsWith('#')) {
                                        // Pour les ancres sur la même page
                                        e.preventDefault();
                                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                    }
                                    // Pour les autres cas (navigation vers une autre page), on laisse le lien se comporter normalement
                                    setIsOpen(false);
                                }}
                            >
                                {t(`nav.${link.key}`)}
                            </Link>
                        </Button>
                    ))}
                </nav>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="md:hidden">
                            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-sm">
                        <SheetTitle className="sr-only">{t('header.mainMenu')}</SheetTitle>
                        <nav className="flex flex-col gap-4">
                            {navLinks.map(({ href, key }) => (
                                <Button
                                    key={href}
                                    variant="ghost"
                                    asChild
                                    className={`w-full justify-start ${activeSection === key ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'}`}
                                >
                                    <Link 
                                        href={href}
                                        onClick={(e) => {
                                            if (key === 'about') {
                                                e.preventDefault();
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }
                                            setIsOpen(false);
                                        }}
                                    >
                                        {t(`nav.${key}`)}
                                    </Link>
                                </Button>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
            {/* Barre Breadcrumb + Retour */}
            {showBreadcrumbBar && (
                <div className="w-full transition-all duration-300">
                    <div className="max-w-6xl mx-auto flex items-center justify-between h-14">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Retour
                        </button>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="/" className="flex items-center">
                                            <Home className="w-4 h-4" />
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    {isProjectsIndex ? (
                                        <BreadcrumbPage>Projets</BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink asChild>
                                            <Link href="/projects">Projets</Link>
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                                {!isProjectsIndex && projectName && (
                                    <>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            <BreadcrumbPage>
                                                {projectName.charAt(0).toUpperCase() + projectName.slice(1)}
                                            </BreadcrumbPage>
                                        </BreadcrumbItem>
                                    </>
                                )}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            )}
        </header>
        </>
    );
}