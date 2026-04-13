"use client"

import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/contexts/LanguageContext"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}
