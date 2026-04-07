import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="bg-transparent">
      <Hero />
      <About />
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