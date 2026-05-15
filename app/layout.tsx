import type { Metadata } from "next";
import React from "react";
import "@/styles/globals.css";
import "@/styles/shimmer-effect.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Geist, Geist_Mono, Caveat } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const caveat = Caveat({
    variable: "--font-caveat",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Tom Bertomeu",
    description: "Tom Bertomeu - Développeur Fullstack & Étudiant en BUT Informatique. Portfolio professionnel.",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body className={`min-h-screen ${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased font-sans`}>
                <LanguageProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Header />
                        <main className="flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </ThemeProvider>
                </LanguageProvider>
            </body>
        </html>
    );
}
