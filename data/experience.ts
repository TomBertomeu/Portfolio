export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "education";
}

const experiences: Experience[] = [
  {
    id: "stage-s6",
    title: "Développeur Fullstack (Stage)",
    company: "ASO70",
    period: "2025 (Stage de fin d'études)",
    description: "Développement d'une plateforme de location de matériel événementiel avec Next.js et Supabase. Conception du Back-office administrateur et gestion des devis.",
    type: "work"
  },
  {
    id: "stage-s4",
    title: "Développeur Web (Stage)",
    company: "Vecofroid",
    period: "2024 (Stage de 2ème année)",
    description: "Numérisation des processus métier. Création d'une application Vue.js/Express pour l'attribution d'équipes et la génération de bons d'intervention.",
    type: "work"
  },
  {
    id: "but-info",
    title: "BUT Informatique",
    company: "IUT Nord Franche-Comté",
    period: "2022 - Aujourd'hui",
    description: "Formation généraliste en informatique : Développement Web/Mobile, Base de données, Administration Système, Gestion de projet agile.",
    type: "education"
  }
];

export default experiences;
