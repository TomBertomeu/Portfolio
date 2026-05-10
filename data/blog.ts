import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "building-my-portfolio",
    title: {
      fr: "La création de mon portfolio : Tech Stack & Design",
      en: "Building my Portfolio: Tech Stack & Design"
    },
    excerpt: {
      fr: "Découvrez les coulisses de la création de ce site, de la conception à la mise en ligne avec Next.js et Tailwind CSS.",
      en: "Behind the scenes of creating this website, from design to deployment with Next.js and Tailwind CSS."
    },
    date: "2025-11-28",
    readTime: {
      fr: "5 min de lecture",
      en: "5 min read"
    },
    tags: ["Next.js", "Tailwind", "Portfolio"],
    image: "/images/blog/portfolio.png",
    content: {
      fr: `
        <p class="mb-4">En tant que développeur, le portfolio est bien plus qu'une simple vitrine : c'est un terrain de jeu, une preuve de compétence et, surtout, un projet qui nous appartient totalement. Pour cette nouvelle version, je voulais quelque chose de rapide, moderne et facile à maintenir.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Le choix de la Stack Technique</h2>
        <p class="mb-4">Mon choix s'est naturellement porté sur <strong>Next.js 15</strong> (App Router). Pourquoi ? Pour la performance native, le SSR (Server Side Rendering) et l'expérience de développement incroyable qu'offre React aujourd'hui.</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Next.js :</strong> Pour le routing et l'optimisation des images.</li>
            <li><strong>Tailwind CSS :</strong> Pour un styling rapide et cohérent sans quitter le HTML.</li>
            <li><strong>TypeScript :</strong> Pour la robustesse du code et l'autocomplétion.</li>
            <li><strong>Framer Motion / CSS Animations :</strong> Pour donner vie à l'interface sans l'alourdir.</li>
            <li><strong>Formspree :</strong> Pour gérer l'envoi d'emails via le formulaire de contact sans backend (compatible export statique).</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Design & UI</h2>
        <p class="mb-4">Je visais un design "propre" mais avec du caractère. L'utilisation de dégradés subtils (comme celui que vous voyez sur les titres) et d'effets de transparence (glassmorphism) permet d'ajouter de la profondeur sans surcharger visuellement la page.</p>
        <p class="mb-4">L'un des défis était de rendre le site agréable sur mobile. Grâce aux classes utilitaires de Tailwind (<code>md:grid-cols-2</code>, <code>hidden md:block</code>), l'adaptation responsive a été fluide.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Internationalisation (i18n)</h2>
        <p class="mb-4">Vivant dans un contexte professionnel ouvert sur l'international, il était crucial que ce site soit accessible en anglais et en français. J'ai mis en place un système de contexte React léger pour gérer les traductions sans dépendre de lourdes librairies tierces pour l'instant.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p class="mb-4">Ce projet est vivant. Il évoluera avec mes compétences et mes envies. Au-delà de la technique, ce portfolio est aussi un moyen pour moi d'expérimenter et de partager ce que j'apprends.</p>
        <p class="mb-4">Dans les prochains mois, je compte enrichir cette section blog avec des articles plus techniques sur React, l'accessibilité ou encore l'optimisation des performances. Si vous avez des retours ou des questions sur la réalisation de ce site, n'hésitez pas à m'écrire via le formulaire de contact. C'est toujours un plaisir d'échanger avec d'autres passionnés !</p>
        <!-- <p class="mb-4">Le code est disponible sur mon GitHub si vous souhaitez voir comment tout cela s'articule sous le capot !</p> -->
      `,
      en: `
        <p class="mb-4">As a developer, a portfolio is much more than just a showcase: it's a playground, a proof of skill, and above all, a project that is entirely our own. For this new version, I wanted something fast, modern, and easy to maintain.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Choosing the Tech Stack</h2>
        <p class="mb-4">My choice naturally fell on <strong>Next.js 15</strong> (App Router). Why? For native performance, SSR (Server Side Rendering), and the incredible developer experience that React offers today.</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Next.js:</strong> For routing and image optimization.</li>
            <li><strong>Tailwind CSS:</strong> For rapid and consistent styling without leaving HTML.</li>
            <li><strong>TypeScript:</strong> For code robustness and autocompletion.</li>
            <li><strong>Framer Motion / CSS Animations:</strong> To bring the interface to life without weighing it down.</li>
            <li><strong>Formspree:</strong> To handle email sending via the contact form without a backend (static export compatible).</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Design & UI</h2>
        <p class="mb-4">I aimed for a "clean" design but with character. The use of subtle gradients (like the one you see on titles) and transparency effects (glassmorphism) adds depth without visually overloading the page.</p>
        <p class="mb-4">One of the challenges was making the site look good on mobile. Thanks to Tailwind's utility classes (<code>md:grid-cols-2</code>, <code>hidden md:block</code>), responsive adaptation was seamless.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Internationalization (i18n)</h2>
        <p class="mb-4">Living in an internationally open professional context, it was crucial for this site to be accessible in English and French. I implemented a lightweight React context system to manage translations without relying on heavy third-party libraries for now.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p class="mb-4">This project is alive. It will evolve with my skills and interests. Beyond the technical aspect, this portfolio is also a way for me to experiment and share what I learn.</p>
        <p class="mb-4">In the coming months, I plan to enrich this blog section with more technical articles on React, accessibility, or performance optimization. If you have any feedback or questions about how this site was built, feel free to drop me a message via the contact form. It's always a pleasure to connect with fellow enthusiasts!</p>
        <!-- <p class="mb-4">The code is available on my GitHub if you want to see how it all fits together under the hood!</p> -->
      `
    }
  }
];

