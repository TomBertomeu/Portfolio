"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageProvider";
import { findAllBlogPosts } from "@/repositories/blogRepository";
import ScrollAnimation from "@/components/ScrollAnimation";
import HeroBackground from "@/components/HeroBackground";
import UnderlineAccent from "@/components/UnderlineAccent";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
    const { language } = useLanguage();
    const posts = findAllBlogPosts(language);

    const headerSubtitle = {
        fr: "Partage d'expériences, tutoriels et réflexions sur le développement web.",
        en: "Sharing experiences, tutorials, and thoughts on web development."
    };

    return (
        <div className="min-h-screen flex flex-col pt-32 relative">
            <HeroBackground />
            
            {/* Header */}
            <div className="pb-12 relative z-10">
                <div className="mx-auto max-w-6xl px-4 text-center flex flex-col items-center">
                    <ScrollAnimation direction="down">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 relative inline-block">
                            <span className="relative z-10">Blog</span>
                            <UnderlineAccent />
                        </h1>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={200}>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            {headerSubtitle[language]}
                        </p>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Posts Grid */}
            <div className="bg-muted py-16 flex-grow relative z-10">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 group/blog pointer-events-none">
                    {posts.map((post, index) => (
                        <div 
                            key={post.id}
                            className="h-full transition-opacity duration-200 hover:!opacity-100 group-hover/blog:opacity-50 pointer-events-auto"
                        >
                            <ScrollAnimation 
                                direction="up" 
                                delay={index * 100 + 300}
                                className="h-full"
                            >
                                <Link href={`/blog/${post.slug}`} className="group h-full block">
                                <article className="h-full flex flex-col rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                                    {/* Visual Header (Image or Gradient) */}
                                    <div className="relative h-48 w-full overflow-hidden">
                                        {post.image ? (
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(post.id)} opacity-80 transition-transform duration-500 group-hover:scale-105`} />
                                        )}
                                        
                                        {/* Overlay for better text contrast if needed, or just style */}
                                        <div className="absolute inset-0 bg-black/10" />

                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <div className="flex items-center gap-1.5 rounded-full bg-black/20 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/10 shadow-sm">
                                                <Calendar className="w-3 h-3" />
                                                <time dateTime={post.date}>
                                                    {new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </time>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                            <Clock className="w-3 h-3" />
                                            <span>{post.readTime}</span>
                                        </div>

                                        <h2 className="text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.slice(0, 2).map((tag) => (
                                                    <span 
                                                        key={tag} 
                                                        className="text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                                {post.tags.length > 2 && (
                                                    <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md">+{post.tags.length - 2}</span>
                                                )}
                                            </div>
                                            <span className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                                {language === 'fr' ? 'Lire' : 'Read'} <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                            </ScrollAnimation>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function getGradient(id: number) {
    const gradients = [
        "from-blue-500 to-purple-600",
        "from-emerald-500 to-teal-600",
        "from-orange-500 to-red-600",
        "from-pink-500 to-rose-600",
    ];
    return gradients[id % gradients.length];
}
