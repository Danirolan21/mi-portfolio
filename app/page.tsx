import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="bg-transparent">
      <Hero />
      <section id="about"      className="min-h-screen flex items-center justify-center">
        <h1 className="text-deep-text text-4xl">Sobre mí</h1>
      </section>
      <section id="projects"   className="min-h-screen flex items-center justify-center">
        <h1 className="text-deep-text text-4xl">Proyectos</h1>
      </section>
      <section id="experience" className="min-h-screen flex items-center justify-center">
        <h1 className="text-deep-text text-4xl">Experiencia</h1>
      </section>
      <section id="contact"    className="min-h-screen flex items-center justify-center">
        <h1 className="text-deep-text text-4xl">Contacto</h1>
      </section>
    </main>
  )
}