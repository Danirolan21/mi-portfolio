import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-transparent">
      <Hero />
      <About />
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <h1 className="text-deep-text text-4xl">Proyectos</h1>
      </section>
      <Experience />
      <Contact />
    </main>
  )
}