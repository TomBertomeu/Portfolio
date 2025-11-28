import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Section suivante avec fond blanc pour couvrir le background fixe */}
      <section className="relative z-20 bg-background min-h-screen py-20">
        <div className="mx-auto max-w-5Fxl px-4">
          <h2 className="text-3xl font-bold mb-8">À propos</h2>
          <p className="text-lg text-muted-foreground">
            Le contenu de mon portfolio viendra ici. Le fond est maintenant opaque (blanc ou sombre selon le thème) 
            et couvre le background technique du Hero lorsque vous scrollez.
          </p>
          <div className="mt-8 h-96 rounded-lg border border-dashed border-border flex items-center justify-center bg-muted/50">
            <span className="text-muted-foreground">Contenu futur...</span>
          </div>
        </div>
      </section>
    </>
  );
}
