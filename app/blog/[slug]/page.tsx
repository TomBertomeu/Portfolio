import React from "react";
import { blogPosts } from "@/data/blog";
import BlogPostContent from "./BlogPostContent";
import { notFound } from "next/navigation";

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogPostPage({ params }: Readonly<BlogPostPageProps>) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return <BlogPostContent post={post} />;
}
