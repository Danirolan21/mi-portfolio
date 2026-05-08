"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import {
  SiGithub, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiAngular, SiVuedotjs, SiDotnet, SiPostgresql, SiMysql,
  SiDocker, SiPrisma, SiMongodb, SiRedis, SiFirebase,
  SiNodedotjs, SiExpress, SiGraphql, SiGit, SiPinia,
} from "react-icons/si"
import { FaAws, FaMicrosoft, FaDatabase, FaPython, FaJava } from "react-icons/fa6"
import { cn } from "@/lib/utils"
import { localizeProjects, type LocalizedProject } from "@/data/projects"
import { useTranslation } from "@/contexts/LanguageContext"

const EASE = [0.25, 0, 0, 1] as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden:  { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
}

type IconComponent = React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>

const TECH_MAP: Record<string, { icon: IconComponent; color: string }> = {
  "React":       { icon: SiReact,       color: "#61DAFB" },
  "Next.js":     { icon: SiNextdotjs,   color: "#E0E1DD" },
  "TypeScript":  { icon: SiTypescript,  color: "#3178C6" },
  "JavaScript":  { icon: SiTypescript,  color: "#F7DF1E" },
  "Tailwind":    { icon: SiTailwindcss, color: "#06B6D4" },
  "Angular":     { icon: SiAngular,     color: "#DD0031" },
  "Vue":         { icon: SiVuedotjs,    color: "#4FC08D" },
  "Vue 3":       { icon: SiVuedotjs,    color: "#4FC08D" },
  "Pinia":       { icon: SiPinia,       color: "#FFD859" },
  "ASP.NET Core":{ icon: SiDotnet,      color: "#512BD4" },
  "C#":          { icon: SiDotnet,      color: "#512BD4" },
  ".NET 8":      { icon: SiDotnet,      color: "#512BD4" },
  ".NET":        { icon: SiDotnet,      color: "#512BD4" },
  "Node.js":     { icon: SiNodedotjs,   color: "#339933" },
  "Express":     { icon: SiExpress,     color: "#E0E1DD" },
  "Python":      { icon: FaPython,      color: "#3776AB" },
  "Java":        { icon: FaJava,        color: "#ED8B00" },
  "PostgreSQL":  { icon: SiPostgresql,  color: "#4169E1" },
  "MySQL":       { icon: SiMysql,       color: "#4479A1" },
  "SQL Server":  { icon: FaDatabase,    color: "#CC2927" },
  "MongoDB":     { icon: SiMongodb,     color: "#47A248" },
  "Redis":       { icon: SiRedis,       color: "#DC382D" },
  "Prisma":      { icon: SiPrisma,      color: "#2D3748" },
  "Firebase":    { icon: SiFirebase,    color: "#FFCA28" },
  "Docker":      { icon: SiDocker,      color: "#2496ED" },
  "Azure":       { icon: FaMicrosoft,   color: "#0078D4" },
  "AWS":         { icon: FaAws,         color: "#FF9900" },
  "GraphQL":     { icon: SiGraphql,     color: "#E10098" },
  "Git":         { icon: SiGit,         color: "#F05032" },
}

// ═══════════════════════════════════════════════════════════════
//  Browser mockup — frame estilo macOS
// ═══════════════════════════════════════════════════════════════
function BrowserMockup({
  project,
  fullWidth = false,
}: {
  project:    LocalizedProject
  fullWidth?: boolean
}) {
  const { t } = useTranslation()
  const host = new URL(project.demo).host

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={cn(
        "relative rounded-xl overflow-hidden group",
        "bg-deep-surface/80 border border-overlay/[0.08]",
        "shadow-[0_20px_60px_rgba(0,0,0,0.4)]",
        "backdrop-blur-xl",
        fullWidth && "w-full",
      )}
    >
      {/* Barra del navegador */}
      <div className="flex items-center gap-3 px-4 py-3 bg-deep-base/60 border-b border-overlay/[0.06]">
        {/* Los tres circulitos */}
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>

        {/* URL bar */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md
                          bg-deep-base/60 border border-overlay/[0.06]
                          text-deep-muted/70 text-[11px] font-mono max-w-xs truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
            {host}
          </div>
        </div>

        {/* Abrir en nueva pestaña */}
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.projects.openInNewTab}
          className="p-1 rounded-md text-deep-muted/50
                     hover:text-deep-text hover:bg-overlay/[0.08]
                     transition-all duration-200"
        >
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Contenido — iframe o imagen */}
      <div className="relative aspect-[16/10] bg-deep-base overflow-hidden">
        {project.embedUrl ? (
          <iframe
            src={project.embedUrl}
            className="w-full h-full border-0"
            title={project.title}
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        ) : (
          <>
            <Image
              src={project.preview}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover object-top
                         group-hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Overlay de gradiente */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t
                         from-deep-base/80 via-transparent to-transparent
                         opacity-0 group-hover:opacity-100
                         transition-opacity duration-500"
            />
          </>
        )}
      </div>
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
//  Panel de detalles de un proyecto
// ═══════════════════════════════════════════════════════════════
function ProjectDetails({ project }: { project: LocalizedProject }) {
  const { t } = useTranslation()

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="flex flex-col gap-6"
    >
      {/* Título + meta */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="font-display text-deep-text text-2xl sm:text-3xl font-extrabold tracking-tight">
            {project.title}
          </h3>
          <span className="text-deep-muted/60 text-xs font-mono">{t.projects.yearLabel}: {project.year}</span>
        </div>
        <p className="font-display text-deep-accent text-sm font-semibold tracking-wide uppercase">
          {project.tagline}
        </p>
      </div>

      {/* Descripción */}
      <p className="text-deep-muted text-sm sm:text-base leading-relaxed max-w-2xl">
        {project.description}
      </p>

      {/* Meta info: rol + stack */}
      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-8 gap-y-4 text-sm">
        <div className="flex flex-col gap-1">
          <span className="text-deep-muted/50 text-[11px] font-medium tracking-[0.15em] uppercase">
            {t.projects.roleLabel}
          </span>
          <span className="text-deep-text">{project.role}</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-deep-muted/50 text-[11px] font-medium tracking-[0.15em] uppercase">
            {t.projects.stackLabel}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => {
              const mapped = TECH_MAP[tech]
              if (mapped) {
                const { icon: Icon, color } = mapped
                return (
                  <motion.span
                    key={tech}
                    whileHover={{
                      scale: 1.06,
                      y: -2,
                      boxShadow: `0 6px 20px ${color}25`,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group inline-flex items-center gap-1.5
                               px-2.5 py-1.5 rounded-lg
                               bg-overlay/[0.04] border border-overlay/[0.06]
                               hover:bg-overlay/[0.08] hover:border-overlay/[0.15]
                               transition-all duration-300 cursor-default"
                  >
                    <Icon
                      size={13}
                      className="shrink-0 transition-all duration-300
                                 group-hover:drop-shadow-[0_0_5px_var(--icon-color)]"
                      style={{ color, "--icon-color": color } as React.CSSProperties}
                    />
                    <span className="text-deep-muted text-[11px] font-medium
                                     group-hover:text-deep-text transition-colors duration-300">
                      {tech}
                    </span>
                  </motion.span>
                )
              }
              return (
                <span
                  key={tech}
                  className="px-2.5 py-1.5 rounded-lg text-[11px] font-medium
                             bg-overlay/[0.04] border border-overlay/[0.06]
                             text-deep-muted"
                >
                  {tech}
                </span>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3 pt-2">
        <motion.a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="group relative flex items-center gap-2.5
                     px-6 py-3 rounded-2xl overflow-hidden
                     bg-deep-accent text-deep-text text-sm font-semibold
                     shadow-lg shadow-deep-accent/25
                     hover:shadow-xl hover:shadow-deep-accent/40
                     transition-all duration-300 cursor-pointer"
        >
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent
                       translate-x-[-100%] group-hover:translate-x-[100%]
                       transition-transform duration-700"
          />
          <ExternalLink size={16} className="relative" />
          <span className="relative">{t.projects.viewDemo}</span>
        </motion.a>

        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex items-center gap-2.5 px-6 py-3 rounded-2xl
                     bg-overlay/[0.05] backdrop-blur-sm
                     border border-overlay/[0.12]
                     text-deep-muted text-sm font-medium
                     hover:bg-overlay/[0.08] hover:text-deep-text
                     hover:border-overlay/20
                     transition-all duration-300 cursor-pointer"
        >
          <SiGithub size={16} />
          {t.projects.viewCode}
        </motion.a>
      </div>
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
//  Sección principal — adaptativa
// ═══════════════════════════════════════════════════════════════
export default function Projects() {
  const { t, locale } = useTranslation()
  const items = localizeProjects(locale)
  const [activeId, setActiveId] = useState(items[0]?.id ?? "")

  const active = items.find((p) => p.id === activeId) ?? items[0]
  const isSolo = items.length === 1

  if (!active) return null

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center
                 px-6 lg:px-16 xl:px-24 pt-14 pb-24 sm:py-24"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-1/4 left-1/3
                   w-[500px] h-[500px] rounded-full
                   bg-gradient-to-br from-deep-accent/10 via-deep-accent/5 to-transparent
                   blur-3xl pointer-events-none"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative w-full max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14"
      >
        {/* Header */}
        <motion.div variants={item} className="flex flex-col gap-3 max-w-3xl">
          <span className="font-display text-deep-accent text-sm sm:text-base
                           font-semibold tracking-wide uppercase">
            {t.projects.label}
          </span>
          <h2 className="font-display text-deep-text text-3xl sm:text-4xl lg:text-5xl
                         font-extrabold tracking-tight leading-[1.1]">
            {t.projects.heading}
          </h2>
        </motion.div>

        {/* ══════════════════════════════════════════════════════
            LAYOUT ADAPTATIVO
            - 1 proyecto: mockup grande arriba, detalles debajo
            - 2+ proyectos: lista izquierda + mockup+detalles derecha
           ══════════════════════════════════════════════════════ */}

        {isSolo ? (
          // ─── Featured (un solo proyecto) ───
          <motion.div variants={item} className="flex flex-col gap-10">
            <BrowserMockup project={active} fullWidth />
            <AnimatePresence mode="wait">
              <ProjectDetails project={active} />
            </AnimatePresence>
          </motion.div>
        ) : (
          // ─── Lista + detalle (múltiples proyectos) ───
          <motion.div
            variants={item}
            className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12"
          >
            {/* Lista de proyectos */}
            <div className="flex flex-col gap-1">
              {items.map((p, index) => {
                const isActive = p.id === activeId
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveId(p.id)}
                    className={cn(
                      "group relative flex items-center gap-4 p-4 rounded-xl",
                      "text-left transition-all duration-300",
                      isActive
                        ? "bg-deep-surface/60 border border-overlay/[0.08]"
                        : "hover:bg-overlay/[0.03]",
                    )}
                  >
                    {/* Número */}
                    <span className={cn(
                      "font-mono text-xs tabular-nums transition-colors duration-300",
                      isActive ? "text-deep-accent" : "text-deep-muted/40",
                    )}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Título */}
                    <span className={cn(
                      "flex-1 text-sm font-semibold transition-colors duration-300",
                      isActive ? "text-deep-text" : "text-deep-muted",
                    )}>
                      {p.title}
                    </span>

                    {/* Barra lateral activa */}
                    {isActive && (
                      <motion.div
                        layoutId="project-active"
                        className="absolute left-0 top-2 bottom-2 w-0.5 rounded-r bg-deep-accent"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Detalle + mockup */}
            <div className="flex flex-col gap-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <BrowserMockup project={active} fullWidth />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <ProjectDetails project={active} />
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
