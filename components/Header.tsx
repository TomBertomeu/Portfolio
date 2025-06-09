"use client"
"use client"

import Link from "next/link"
import {Menu, X} from "lucide-react"
import {useEffect, useState, useRef} from "react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger, SheetTitle} from "@/components/ui/sheet"
import "@/styles/shimmer-effect.css"
import { useLanguage } from "@/contexts/LanguageProvider"
import GB from 'country-flag-icons/react/3x2/GB'
import FR from 'country-flag-icons/react/3x2/FR'
import LanguageDropdown from './LanguageDropdown';

const navLinks = [
    { href: "/#about", key: "about" },
    { href: "/#skills", key: "skills" },
    { href: "/#projects", key: "projects" },
    { href: "/#experience", key: "experience" },
    { href: "/#contact", key: "contact" },
] as const

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const { language, setLanguage, t, availableLanguages } = useLanguage();

    useEffect(() => {
        const checkScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        checkScroll(); // Initialize on mount
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 w-full bg-transparent ${
            isScrolled ? "backdrop-blur bg-white/50" : ""
        }`}>
            <div className="flex items-center justify-between max-w-6xl mx-auto px-8 md:px-0 py-4 bg-white md:bg-transparent transition-all duration-300">
                {/* Nom + prénom */}
                <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors shimmer">
                    TB.
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 text-base font-medium items-center">
                    {navLinks.map(({ href, key }) => (
  <Button
    key={href}
    variant="ghost"
    asChild
  >
    <Link href={href}>
      {t(`nav.${key}`)}
    </Link>
  </Button>
))}
                    <div className="relative ml-4">
                        {/* Language Dropdown Button */}
                        <LanguageDropdown 
                            language={language} 
                            setLanguage={setLanguage} 
                            availableLanguages={availableLanguages} 
                        />
                    </div>
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
    className="w-full justify-start"
  >
    <Link href={href} onClick={() => setIsOpen(false)}>
      {t(`nav.${key}`)}
    </Link>
  </Button>
))}
                            <div className="mt-4">
                                <LanguageDropdown 
                                    language={language} 
                                    setLanguage={setLanguage} 
                                    availableLanguages={availableLanguages} 
                                />
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}