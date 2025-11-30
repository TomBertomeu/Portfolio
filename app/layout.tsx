import type {Metadata} from "next";
import React from "react";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";


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
        <LanguageProvider>
            <html lang="fr" suppressHydrationWarning>
                <body className="min-h-screen">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Header/>
                        <main className="flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </ThemeProvider>
                </body>
            </html>
        </LanguageProvider>
    );
}
