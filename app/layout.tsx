import type {Metadata} from "next";
import React from "react";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Background from "@/components/Background";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Portfolio - Tom Bertomeu",
    description: "Portfolio de Tom Bertomeu - Étudiant en BUT à l'IUT de Belfort Montbéliard",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    return (
        <html lang="fr">
        <body className="min-h-screen">
        <Background />
        <Header/>
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}
