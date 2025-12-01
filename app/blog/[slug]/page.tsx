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
    params: {
        slug: string;
    };
}

export default function BlogPostPage({ params }: Readonly<BlogPostPageProps>) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return <BlogPostContent post={post} />;
}
