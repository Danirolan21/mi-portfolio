"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  House,
  User,
  FolderGit2,
  Briefcase,
  Mail,
} from "lucide-react"

const sections = [
  { id: "home",       label: "Home",       icon: House       },
  { id: "about",      label: "Sobre mí",   icon: User        },
  { id: "projects",   label: "Proyectos",  icon: FolderGit2  },
  { id: "experience", label: "Experiencia",icon: Briefcase   },
  { id: "contact",    label: "Contacto",   icon: Mail        },
]

export default function Dock() {
  const [active, setActive] = useState("home")
  const [tooltip, setTooltip] = useState<string | null>(null)

  // Detecta qué sección está visible con IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.5 } // se activa cuando el 50% de la sección es visible
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setActive(id)
  }

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      {/* Contenedor del dock */}
      <div className="flex items-end gap-2 px-5 py-3 rounded-2xl
                      bg-deep-surface/60 backdrop-blur-md
                      border border-white/10 shadow-xl">
        {sections.map(({ id, label, icon: Icon }) => {
          const isActive = active === id

          return (
            <div key={id} className="relative flex flex-col items-center">

              {/* Tooltip */}
              <AnimatePresence>
                {tooltip === id && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-9 px-2 py-1 rounded-md text-xs
                               bg-deep-surface border border-white/10
                               text-deep-text whitespace-nowrap pointer-events-none"
                  >
                    {label}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Botón del icono */}
              <motion.button
                onClick={() => scrollTo(id)}
                onMouseEnter={() => setTooltip(id)}
                onMouseLeave={() => setTooltip(null)}
                animate={{
                  y:     isActive ? -8 : 0,
                  scale: isActive ? 1.2 : 1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative flex items-center justify-center
                           w-11 h-11 rounded-xl cursor-pointer
                           transition-colors duration-200"
              >
                {/* Fondo del icono activo */}
                {isActive && (
                  <motion.div
                    layoutId="dock-active"
                    className="absolute inset-0 rounded-xl bg-deep-accent/40
                               border border-deep-accent/60"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <Icon
                  size={20}
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive ? "text-deep-text" : "text-deep-muted"
                  }`}
                />
              </motion.button>

            </div>
          )
        })}
      </div>
    </div>
  )
}