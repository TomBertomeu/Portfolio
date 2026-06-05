import type { Metadata } from "next";
import React from "react";
import "@/styles/globals.css";
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

const SITE_URL = "https://tom-bertomeu.com";
const SITE_DESCRIPTION =
    "Tom Bertomeu, développeur Fullstack et étudiant en BUT Informatique. Portfolio professionnel.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: "Tom Bertomeu",
    description: SITE_DESCRIPTION,
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "/",
        siteName: "Tom Bertomeu",
        title: "Tom Bertomeu, développeur Fullstack",
        description: SITE_DESCRIPTION,
        images: [
            {
                url: "/images/og.png",
                width: 1200,
                height: 630,
                alt: "Tom Bertomeu, développeur Fullstack",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tom Bertomeu, développeur Fullstack",
        description: SITE_DESCRIPTION,
        images: ["/images/og.png"],
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <head>
                {/* Mark JS as available before first paint so scroll-reveal can hide content
                    only for JS users. No-JS clients and crawlers never get `.js`, so the
                    prerendered content stays visible (see styles/globals.css). */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: "document.documentElement.classList.add('js')",
                    }}
                />
            </head>
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
