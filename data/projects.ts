import type { ProjectBadge } from "@/types/project";

export interface ProjectData {
  id: string;
  image?: string;
  imageFit?: "cover" | "contain";
  link?: string;
  badges?: ProjectBadge[];
  featured?: boolean;
  year?: string;
  title?: { fr: string; en: string };
  tagline?: { fr: string; en: string };
  madeAt?: { fr: string; en: string };
  linkLabel?: { fr: string; en: string };
}

export const projectsData: ProjectData[] = [
  {
    id: "lego-rebuilder",
    title: {
      fr: "Outil de reconstruction LEGO",
      en: "LEGO Set Rebuilder"
    },
    tagline: {
      fr: "Reconstituer mes sets LEGO à partir de pièces en vrac.",
      en: "Rebuilding my LEGO sets from loose bricks."
    },
    image: "/images/projects/lego-rebuilder.jpg",
    link: "",
    featured: true,
    year: "2025",
    badges: [
      { iconId: "plug", text: "API Rebrickable", tier: "primary" },
      { iconId: "layout", text: "Next.js", tier: "secondary" }
    ]
  },
  {
    id: "geniacloud",
    title: {
      fr: "GEN'IAcloud",
      en: "GEN'IAcloud"
    },
    tagline: {
      fr: "Fluidifier la saisie terrain et la facturation chez une coopérative agricole.",
      en: "Streamlining field data entry and billing for an agricultural cooperative."
    },
    image: "/images/projects/geniatest.jpg",
    imageFit: "contain",
    featured: true,
    year: "2025",
    madeAt: {
      fr: "GEN'IAtest",
      en: "GEN'IAtest"
    },
    badges: [
      { iconId: "wifi-off", text: "Offline-first", tier: "primary" },
      { iconId: "layout", text: "Nuxt / Vue", tier: "secondary" },
      { iconId: "server", text: "NestJS", tier: "secondary" }
    ]
  },
  {
    id: "coc-assistant",
    title: {
      fr: "Outil d'analyse de clan",
      en: "Clan Analytics Tool"
    },
    tagline: {
      fr: "Bâtir un historique pour analyser son clan sur Clash of Clans.",
      en: "Building a history to analyze your clan on Clash of Clans."
    },
    image: "/images/projects/coc_assistant.png",
    link: "",
    featured: true,
    year: "2025",
    badges: [
      { iconId: "refresh-cw", text: "Ingestion auto", tier: "primary" },
      { iconId: "bar-chart-3", text: "Analyse statistique", tier: "secondary" }
    ]
  },
  {
    id: "outer-wilds-pomodoro",
    title: {
      fr: "Minuteur Pomodoro Outer Wilds",
      en: "Outer Wilds themed Pomodoro Timer"
    },
    image: "/images/projects/pomodoro.jpg",
    link: "https://outer-wilds-pomodoro.vercel.app/",
    linkLabel: { fr: "Démo", en: "Demo" },
    featured: false,
    year: "2025",
    badges: [
      { iconId: "clock", text: "React" },
      { iconId: "layout", text: "Tailwind CSS" }
    ]
  },
  {
    id: "smartchef",
    title: {
      fr: "SmartChef",
      en: "SmartChef"
    },
    tagline: {
      fr: "L'IA qui cuisine avec votre frigo.",
      en: "AI that cooks with your fridge."
    },
    image: "/images/projects/smartchef.jpg",
    link: "https://github.com/tbertome-iut90/smart-chef",
    linkLabel: { fr: "Code source", en: "Source code" },
    featured: false,
    year: "2025",
    badges: [
      { iconId: "brain", text: "LLM", tier: "primary" },
      { iconId: "smartphone", text: "React Native", tier: "secondary" },
      { iconId: "code", text: "TypeScript", tier: "secondary" },
    ]
  },
  {
    id: "aso70",
    title: {
      fr: "Catalogue Événementiel ASO70",
      en: "ASO70 Event Catalog"
    },
    tagline: {
      fr: "Location événementielle et back-office sur-mesure.",
      en: "Event rentals and tailor-made back-office."
    },
    image: "/images/projects/aso70.jpg",
    featured: false,
    year: "2025",
    madeAt: {
      fr: "ASO70",
      en: "ASO70"
    },
    badges: [
      { iconId: "database", text: "Supabase", tier: "primary" },
      { iconId: "layout", text: "Next.js", tier: "secondary" },
      { iconId: "code", text: "TypeScript", tier: "secondary" }
    ]
  },
  {
    id: "vecofroid",
    title: {
      fr: "Gestion Vecofroid",
      en: "Vecofroid Manager"
    },
    tagline: {
      fr: "Numériser la gestion d'interventions terrain.",
      en: "Digitizing field intervention management."
    },
    image: "/images/projects/vecofroid.jpg",
    featured: false,
    year: "2024",
    madeAt: {
      fr: "Vecofroid",
      en: "Vecofroid"
    },
    badges: [
      { iconId: "layout", text: "Vue.js", tier: "primary" },
      { iconId: "server", text: "Express", tier: "secondary" },
      { iconId: "database", text: "PostgreSQL", tier: "secondary" }
    ]
  },
  {
    id: "site-fortiche",
    title: {
      fr: "Site de présentation de Fortiche",
      en: "Fortiche Showcase Website"
    },
    image: "/images/projects/fortiche.jpg",
    link: "https://projectsae.github.io/sae-1-05-06/",
    linkLabel: { fr: "Site", en: "Website" },
    featured: false,
    year: "2022",
    madeAt: {
      fr: "Université",
      en: "University"
    },
    badges: [
      { iconId: "code", text: "HTML/CSS" },
      { iconId: "code", text: "JavaScript" }
    ]
  }
];
