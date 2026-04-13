"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation, type Locale } from "@/contexts/LanguageContext"

const EASE = [0.25, 0, 0, 1] as const

const locales: { code: Locale; flag: string }[] = [
  { code: "es", flag: "🇪🇸" },
  { code: "en", flag: "🇬🇧" },
]

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [open])

  if (!mounted) return null

  const current = locales.find((l) => l.code === locale)!
  const other = locales.find((l) => l.code !== locale)!

  return (
    <div
      ref={containerRef}
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50"
    >
      <AnimatePresence>
        {open && (
          <motion.button
            key="other"
            initial={{ opacity: 0, y: 8, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.8 }}
            transition={{ duration: 0.2, ease: EASE }}
            onClick={() => {
              setLocale(other.code)
              setOpen(false)
            }}
            className="absolute bottom-12 sm:bottom-[52px] left-0
                       flex items-center justify-center gap-1.5
                       w-10 h-10 sm:w-11 sm:h-11
                       rounded-full cursor-pointer
                       bg-deep-surface/80 backdrop-blur-md
                       border border-overlay/10
                       shadow-lg
                       hover:bg-deep-surface
                       transition-colors duration-200"
            aria-label={`Switch to ${other.code === "en" ? "English" : "Español"}`}
          >
            <span className="text-sm">{other.flag}</span>
            <span className="text-[10px] font-bold text-deep-text uppercase">
              {other.code}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="relative flex items-center justify-center gap-1.5
                   w-10 h-10 sm:w-11 sm:h-11
                   rounded-full cursor-pointer
                   bg-deep-surface/60 backdrop-blur-md
                   border border-overlay/10
                   shadow-lg
                   hover:bg-deep-surface/80
                   transition-colors duration-200"
        aria-label="Change language"
      >
        <span className="text-sm">{current.flag}</span>
        <span className="text-[10px] font-bold text-deep-text uppercase">
          {current.code}
        </span>
      </motion.button>
    </div>
  )
}
