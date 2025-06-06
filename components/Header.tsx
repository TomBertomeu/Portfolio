"use client"

import Link from "next/link"
import {Menu, X} from "lucide-react"
import {useEffect, useState} from "react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger, SheetTitle} from "@/components/ui/sheet"
import "@/styles/shimmer-effect.css"

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Projets" },
    { href: "#skills", label: "Compétences" },
    { href: "#contact", label: "Contact" },
] as const

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 w-full bg-transparent ${
            isScrolled && "backdrop-blur bg-white/50"
        }`}>
            <div className="flex items-center justify-between max-w-6xl mx-auto px-8 md:px-0 py-4 bg-white md:bg-transparent transition-all duration-300">
                {/* Nom + prénom */}
                <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors shimmer">
                    TB.
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 text-base font-medium">
                    {navLinks.map(({ href, label }) => (
                        <Button
                            key={href}
                            variant="ghost"
                            asChild
                        >
                            <Link href={href}>
                                {label}
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
                        <SheetTitle className="sr-only">Menu principal</SheetTitle>
                        <nav className="flex flex-col gap-4">
                            {navLinks.map(({ href, label }) => (
                                <Button
                                    key={href}
                                    variant="ghost"
                                    asChild
                                    className="w-full justify-start"
                                >
                                    <Link href={href} onClick={() => setIsOpen(false)}>
                                        {label}
                                    </Link>
                                </Button>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}