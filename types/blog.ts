export interface MultilangText {
  fr: string;
  en: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: MultilangText;
  excerpt: MultilangText;
  date: string;
  readTime: MultilangText;
  tags: string[];
  image?: string;
  content: MultilangText;
}
