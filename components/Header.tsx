"use client"

import Link from "next/link"
import {Menu, X} from "lucide-react"
import {useState} from "react"
import "@/styles/shimmer-effect.css"

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Projets" },
    { href: "#skills", label: "Compétences" },
    { href: "#contact", label: "Contact" },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
            <div className="flex items-center justify-between max-w-7xl mx-auto md:px-16 px-8 py-8">
                {/* Nom + prénom */}
                <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors shimmer">
                    Tom Bertomeu
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 text-base font-medium text-gray-600">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="hover:text-blue-500 transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Burger Icon */}
                <button
                    className="md:hidden text-gray-700 hover:text-blue-600"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            {isOpen && (
                <div className="w-full fixed z-50 bg-white px-8 py-4 shadow-lg md:hidden flex flex-col gap-8 text-md font-medium text-gray-600">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className="hover:text-blue-600 transition-colors w-full"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}