"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

// Dummy data for blog posts
const blogPosts = [
    {
        id: 1,
        slug: "mon-premier-article",
        title: {
            fr: "Lancement de mon nouveau portfolio",
            en: "Launching my new portfolio"
        },
        excerpt: {
            fr: "Découvrez les coulisses de la création de ce site, de la conception à la mise en ligne avec Next.js et Tailwind CSS.",
            en: "Behind the scenes of creating this website, from design to deployment with Next.js and Tailwind CSS."
        },
        date: "2025-11-28",
        readTime: {
            fr: "5 min de lecture",
            en: "5 min read"
        },
        tags: ["Next.js", "Tailwind", "Portfolio"]
    },
    {
        id: 2,
        slug: "pourquoi-nextjs",
        title: {
            fr: "Pourquoi j'ai choisi Next.js pour mes projets",
            en: "Why I chose Next.js for my projects"
        },
        excerpt: {
            fr: "Une analyse détaillée des avantages du framework React pour le développement web moderne : SSR, SEO et performance.",
            en: "A detailed analysis of the React framework benefits for modern web development: SSR, SEO, and performance."
        },
        date: "2025-11-15",
        readTime: {
            fr: "8 min de lecture",
            en: "8 min read"
        },
        tags: ["React", "Web Dev", "Performance"]
    }
];

export default function BlogPage() {
    const { t, language } = useLanguage();

    return (
        <div className="min-h-screen bg-background pt-24 pb-12">
            <div className="mx-auto max-w-4xl px-4">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                        Blog
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {language === 'fr' 
                            ? "Partage d'expériences, tutoriels et réflexions sur le développement web."
                            : "Sharing experiences, tutorials, and thoughts on web development."}
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="grid gap-8">
                    {blogPosts.map((post) => (
                        <article 
                            key={post.id} 
                            className="group relative flex flex-col gap-4 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                        >
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                                <span>{post.readTime[language]}</span>
                            </div>
                            
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tight group-hover:text-[var(--primary-blue)] transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title[language]}
                                    </Link>
                                </h2>
                                <p className="text-muted-foreground">
                                    {post.excerpt[language]}
                                </p>
                            </div>

                            <div className="flex gap-2 mt-2">
                                {post.tags.map((tag) => (
                                    <span 
                                        key={tag} 
                                        className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <Link href={`/blog/${post.slug}`} className="absolute inset-0">
                                <span className="sr-only">Read article</span>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
