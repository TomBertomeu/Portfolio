import React from "react";
import { findAllBlogSlugs, findBlogPostBySlug } from "@/repositories/blogRepository";
import BlogPostContent from "./BlogPostContent";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return findAllBlogSlugs().map((slug) => ({ slug }));
}

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogPostPage({ params }: Readonly<BlogPostPageProps>) {
    const { slug } = await params;
    const post = findBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return <BlogPostContent post={post} />;
}
