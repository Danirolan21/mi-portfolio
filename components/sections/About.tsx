"use client"

import { motion, type Variants } from "framer-motion"
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiAngular, SiVuedotjs, SiDotnet,
  SiGit, SiPostgresql, SiMysql,
} from "react-icons/si"
import { FaAws, FaMicrosoft, FaDatabase } from "react-icons/fa6"

const EASE = [0.25, 0, 0, 1] as const

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
}

const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
  },
}

const skillPill: Variants = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(4px)" },
  visible: {
    opacity: 1, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.4, ease: EASE },
  },
}

const stack = [
  { icon: SiReact,        label: "React",       category: "Frontend",  color: "#61DAFB" },
  { icon: SiNextdotjs,    label: "Next.js",     category: "Frontend",  color: "#E0E1DD" },
  { icon: SiTypescript,   label: "TypeScript",  category: "Frontend",  color: "#3178C6" },
  { icon: SiTailwindcss,  label: "Tailwind",    category: "Frontend",  color: "#06B6D4" },
  { icon: SiAngular,      label: "Angular",     category: "Frontend",  color: "#DD0031" },
  { icon: SiVuedotjs,     label: "Vue",         category: "Frontend",  color: "#4FC08D" },
  { icon: SiDotnet,       label: "C# / .NET",   category: "Backend",   color: "#512BD4" },
  { icon: SiPostgresql,   label: "PostgreSQL",  category: "Database",  color: "#4169E1" },
  { icon: SiMysql,        label: "MySQL",       category: "Database",  color: "#4479A1" },
  { icon: FaDatabase,     label: "SQL Server",  category: "Database",  color: "#CC2927" },
  { icon: FaMicrosoft,    label: "Azure",       category: "Cloud",     color: "#0078D4" },
  { icon: FaAws,          label: "AWS",         category: "Cloud",     color: "#FF9900" },
  { icon: SiGit,          label: "Git",         category: "Tools",     color: "#F05032" },
]

const categories = ["Frontend", "Backend", "Database", "Cloud", "Tools"] as const

export default function About() {
  const grouped = categories.map(cat => ({
    name: cat,
    items: stack.filter(s => s.category === cat),
  }))

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center
                 px-6 lg:px-16 xl:px-24 py-24"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-1/2 right-1/4 -translate-y-1/2
                   w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]
                   rounded-full
                   bg-gradient-to-br from-deep-accent/15 via-deep-accent/5 to-transparent
                   blur-3xl pointer-events-none"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full max-w-6xl mx-auto
                   flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr]
                   gap-12 lg:gap-20 items-start"
      >
        {/* ── Left column: text ── */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-32">
          <motion.div variants={item} className="flex flex-col gap-3">
            <span
              className="font-display text-deep-accent
                         text-sm sm:text-base
                         font-semibold tracking-wide uppercase"
            >
              Sobre mí
            </span>
            <h2
              className="font-display text-deep-text
                         text-3xl sm:text-4xl lg:text-5xl
                         font-extrabold tracking-tight leading-[1.1]"
            >
              Más que líneas
              <br />
              de código
            </h2>
          </motion.div>

          <motion.p
            variants={item}
            className="text-deep-muted text-sm sm:text-base lg:text-lg leading-relaxed"
          >
            Siempre fui de los que desmontaban las cosas para ver cómo funcionaban
            por dentro. Esa curiosidad me llevó de forma natural a la programación,
            y desde entonces no he parado. Me formé a través de ciclos formativos,
            un máster fullstack multicloud y actualmente un máster en desarrollo
            con IA — no porque me lo exijan, sino porque me gusta.
          </motion.p>

          <motion.p
            variants={item}
            className="text-deep-muted text-sm sm:text-base lg:text-lg leading-relaxed"
          >
            Lo que más me motiva es el ciclo completo: resolver un problema con
            buena arquitectura, darle una interfaz que impacte visualmente y ver
            cómo aporta valor real. Me especializo en React/Next.js en frontend
            y C#/.NET en backend, con experiencia en cloud con Azure y AWS.
          </motion.p>

          <motion.p
            variants={item}
            className="text-deep-muted/60 text-sm leading-relaxed italic"
          >
            Cuando no estoy programando, probablemente estoy jugando o investigando
            alguna tecnología nueva.
          </motion.p>
        </div>

        {/* ── Right column: stack grouped by category ── */}
        <motion.div variants={item} className="flex flex-col gap-3">
          <span
            className="font-display text-deep-accent
                       text-sm sm:text-base
                       font-semibold tracking-wide uppercase"
          >
            Stack & herramientas
          </span>

          <motion.div
            variants={groupVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-5"
          >
            {grouped.map(({ name, items }) => (
              <motion.div
                key={name}
                variants={skillPill}
                className="flex flex-col gap-2.5"
              >
                <span className="text-deep-muted/40 text-[11px] font-medium
                                 tracking-[0.2em] uppercase pl-1">
                  {name}
                </span>
                <div className="flex flex-wrap gap-2">
                  {items.map(({ icon: Icon, label, color }) => (
                    <motion.div
                      key={label}
                      whileHover={{
                        scale: 1.06,
                        y: -3,
                        boxShadow: `0 8px 24px ${color}30`,
                      }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="group flex items-center gap-2.5
                                 px-4 py-2.5 rounded-xl
                                 bg-white/[0.04] border border-white/[0.06]
                                 hover:bg-white/[0.08] hover:border-white/[0.15]
                                 transition-all duration-300 cursor-default"
                    >
                      <Icon
                        size={18}
                        className="shrink-0 transition-all duration-300
                                   group-hover:drop-shadow-[0_0_6px_var(--icon-color)]"
                        style={{ color, "--icon-color": color } as React.CSSProperties}
                      />
                      <span
                        className="text-deep-muted text-sm font-medium
                                   group-hover:text-deep-text
                                   transition-colors duration-300"
                      >
                        {label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
