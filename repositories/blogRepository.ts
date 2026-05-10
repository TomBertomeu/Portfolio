import { blogPosts } from "@/data/blog";
import type { BlogPost } from "@/types/blog";
import type { Language } from "@/contexts/LanguageProvider";

type LocalizedBlogPost = Omit<BlogPost, "title" | "excerpt" | "readTime" | "content"> & {
  title: string;
  excerpt: string;
  readTime: string;
  content: string;
};

function localizeBlogPost(post: BlogPost, lang: Language): LocalizedBlogPost {
  return {
    ...post,
    title: post.title[lang],
    excerpt: post.excerpt[lang],
    readTime: post.readTime[lang],
    content: post.content[lang],
  };
}

export function findAllBlogPosts(lang: Language = "fr"): LocalizedBlogPost[] {
  return blogPosts.map((post) => localizeBlogPost(post, lang));
}

export function findBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function findAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
