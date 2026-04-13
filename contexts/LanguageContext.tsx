"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react"
import es, { type Translations } from "@/locales/es"
import en from "@/locales/en"

export type Locale = "es" | "en"

const translations: Record<Locale, Translations> = { es, en }

interface LanguageContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "es",
  setLocale: () => {},
  t: es,
})

const STORAGE_KEY = "portfolio-locale"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es")

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "en" || stored === "es") setLocaleState(stored)
  }, [])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    localStorage.setItem(STORAGE_KEY, l)
    document.documentElement.lang = l
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: translations[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  return useContext(LanguageContext)
}
