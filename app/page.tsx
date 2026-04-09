import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="bg-transparent">
      <Hero />
      <About />
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <h1 className="text-deep-text text-4xl">Proyectos</h1>
      </section>
      <Experience />
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <h1 className="text-deep-text text-4xl">Contacto</h1>
      </section>
    </main>
  )
}