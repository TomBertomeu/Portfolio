"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";
import ScrollAnimation from "@/components/ScrollAnimation";
import HeroBackground from "@/components/HeroBackground";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import type { BlogPost } from "@/types/blog";

interface BlogPostContentProps {
    post: BlogPost;
}

export default function BlogPostContent({ post }: Readonly<BlogPostContentProps>) {
    const { language } = useLanguage();

    const title = post.title[language];
    const content = post.content[language];
    const readTime = post.readTime[language];

    return (
        <div className="min-h-screen flex flex-col pt-32 relative">
            <HeroBackground />
            
            {/* Article Header */}
            <div className="pb-12 relative z-10">
                <div className="mx-auto max-w-4xl px-4">
                    <ScrollAnimation direction="down">
                        <Link 
                            href="/blog" 
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            {language === 'fr' ? 'Retour au blog' : 'Back to blog'}
                        </Link>
                    </ScrollAnimation>

                    <ScrollAnimation direction="up" delay={100}>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                            <div className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1 rounded-full">
                                <Calendar className="w-3.5 h-3.5" />
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                            </div>
                            <div className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1 rounded-full">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{readTime}</span>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation direction="up" delay={200}>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                            {title}
                        </h1>
                    </ScrollAnimation>

                    <ScrollAnimation direction="up" delay={300}>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {post.tags.map((tag) => (
                                <span 
                                    key={tag} 
                                    className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md"
                                >
                                    <Tag className="w-3 h-3" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Article Content */}
            <div className="bg-muted py-16 flex-grow relative z-10">
                <div className="mx-auto max-w-3xl px-4">
                    <ScrollAnimation direction="up" delay={400}>
                        <article 
                            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-xl prose-pre:bg-card prose-pre:border prose-pre:border-border"
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}
