import { CheckCircle, Star, Wrench, Cpu, LayoutGrid, Code, ShoppingCart, Server, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ProjectBadge {
  icon: LucideIcon;
  text: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  badges?: ProjectBadge[];
}

const projects: Project[] = [
  {
    id: "drone-ia",
    title: "Drone à commande vocale alimenté par IA",
    description: "Architecture complète avec centralisation et analyse IA des données.",
    image: "/images/projects/drone-ia.png",
    link: "/projects/drone-ia",
    badges: [
      { icon: Code, text: "Java" },
      { icon: Code, text: "Node.js" },
      { icon: Code, text: "MongoDB" },
      { icon: Code, text: "Vue.js" },
      { icon: Code, text: "Docker" },
      { icon: Code, text: "OpenCV" },
    ]
  },
  {
    id: "smart-chef",
    title: "Smart Chef - Application React Native",
    description: "Application alimentée par un LLM pour proposer des plats personnalisés.",
    image: "/images/projects/smart-chef.png",
    link: "/projects/smart-chef",
    badges: [
      { icon: Code, text: "React Native" },
      { icon: Code, text: "FastAPI" },
      { icon: Code, text: "LangChain" },
    ]
  },
  {
    id: "aso70",
    title: "Catalogue de Location Événementielle",
    description: "Plateforme de location de matériel événementiel pour ASO 70.",
    image: "/images/projects/aso70.png",
    link: "/projects/aso70",
    badges: [
      { icon: Code, text: "Next.js" },
      { icon: Code, text: "Tailwind CSS" },
      { icon: Code, text: "TypeScript" },
      { icon: Code, text: "PostgreSQL" },
    ]
  },
  {
    id: "space-restaurant",
    title: "Application iOS - Restaurant Spatial",
    description: "Application iOS permettant de consulter le menu d'un restaurant sur le thème de l'espace.",
    image: "/images/projects/space-restaurant.png",
    link: "/projects/space-restaurant",
    badges: [
      { icon: Code, text: "iOS" },
      { icon: Code, text: "Express" },
      { icon: Code, text: "PostgreSQL" },
    ]
  },
  {
    id: "vecofroid",
    title: "Application de Gestion des Interventions",
    description: "Outil de gestion des interventions et bons d'intervention pour Vecofroid.",
    image: "/images/projects/vecofroid.png",
    link: "/projects/vecofroid",
    badges: [
      { icon: Code, text: "Vue.js" },
      { icon: Code, text: "Ionic" },
      { icon: Code, text: "Capacitor" },
      { icon: Code, text: "Express" },
      { icon: Code, text: "PostgreSQL" },
    ]
  },
  {
    id: "arvolution",
    title: "ARvolution - Salon de réalité virtuelle",
    description: "Site de présentation pour un salon sur la réalité virtuelle.",
    image: "/images/projects/arvolution.png",
    link: "/projects/arvolution",
    badges: [
      { icon: Code, text: "Vue.js" },
      { icon: Code, text: "PostgreSQL" },
      { icon: Code, text: "Express" },
    ]
  },
  {
    id: "brandub",
    title: "Brandub - Jeu de plateau Java",
    description: "Jeu de plateau avec règles simples, interface graphique JavaFX et bot d'attaque et défense.",
    image: "/images/projects/brandub.png",
    link: "/projects/brandub",
    badges: [
      { icon: Code, text: "Java" },
      { icon: Cpu, text: "JavaFX" },
    ]
  },
  {
    id: "eyeglasses-store",
    title: "Boutique de vente de lunettes",
    description: "Boutique en ligne développée pour la gestion d'un catalogue, d'un panier et des commandes.",
    image: "/images/projects/eyeglasses-store.png",
    link: "/projects/eyeglasses-store",
    badges: [
      { icon: Code, text: "Python" },
      { icon: Code, text: "Flask" },
      { icon: Code, text: "MySQL" },
      { icon: Server, text: "VirtualBox" },
    ]
  },
  {
    id: "stuckwin",
    title: "StuckWin - Jeu de plateau Java",
    description: "Jeu de plateau sur grille hexagonale, jouable en console avec bots adversaires.",
    image: "/images/projects/stuckwin.png",
    link: "/projects/stuckwin",
    badges: [
      { icon: Code, text: "Java" },
    ]
  },
  {
    id: "fortiche",
    title: "Site de Présentation - Fortiche",
    description: "Site web présentant le studio d'animation Fortiche.",
    image: "/images/projects/fortiche.webp",
    link: "/projects/fortiche",
    badges: [
      { icon: Code, text: "HTML" },
      { icon: Code, text: "CSS" },
      { icon: Code, text: "JavaScript" },
    ]
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getFeaturedProjects(count: number = 3): Project[] {
  // Retourne tous les projets pour l'instant
  // Vous pourriez ajouter une propriété 'featured' dans le futur
  return projects.slice(0, count);
}

export default projects;
