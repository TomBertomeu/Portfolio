export interface ExperienceData {
  id: string;
  company: string;
  type: "work" | "education";
  current?: boolean;
  technologies: string[];
  link?: string;
  title: { fr: string; en: string };
  period: { fr: string; en: string };
  description: { fr: string; en: string };
}

export const experiencesData: ExperienceData[] = [
  {
    id: "alternance-geniatest",
    title: {
      fr: "Développeur Fullstack (Alternance)",
      en: "Fullstack Developer (Apprenticeship)"
    },
    company: "GEN'IAtest",
    period: {
      fr: "2025 - aujourd'hui",
      en: "2025 - present"
    },
    description: {
      fr: "Développement d'une application de saisie terrain pour fiabiliser les informations remontées du terrain vers les services de la coopérative. Reprise et refactorisation d'un projet existant pour améliorer sa maintenabilité et son évolutivité.",
      en: "Developing a field data-entry app to make information sent from the field to the cooperative's departments more reliable. Took over and refactored an existing project to improve its maintainability and scalability."
    },
    type: "work",
    current: true,
    technologies: ["Vue.js", "Nuxt", "NestJS", "TypeScript", "PostgreSQL"],
    link: "https://www.geniatest.com/"
  },
  {
    id: "stage-s6",
    title: {
      fr: "Développeur Fullstack (Stage)",
      en: "Fullstack Developer (Internship)"
    },
    company: "ASO70",
    period: {
      fr: "Avril - Juin 2025",
      en: "April - June 2025"
    },
    description: {
      fr: "Création d'un projet de zéro en autonomie pour découvrir de nouvelles technologies. Développement d'un catalogue en ligne mettant en avant l'activité de location de matériel de l'entreprise.",
      en: "Started a solo project from scratch to explore new technologies. Developed an online catalog showcasing the company's equipment rental business."
    },
    type: "work",
    technologies: ["React", "Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    link: "https://www.aso70.com/"
  },
  {
    id: "stage-s4",
    title: {
      fr: "Développeur Web (Stage)",
      en: "Web Developer (Internship)"
    },
    company: "Vecofroid",
    period: {
      fr: "Avril - Mai 2024",
      en: "April - May 2024"
    },
    description: {
      fr: "Premier projet professionnel réalisé en autonomie. Numérisation du processus d'attribution et de remplissage des bons d'intervention de l'entreprise.",
      en: "First professional project carried out independently. Digitized the process of assigning and filling out the company's intervention forms."
    },
    type: "work",
    technologies: ["Vue.js", "Express", "Node.js", "MySQL"],
    link: "https://www.vecofroid.com/"
  }
];

