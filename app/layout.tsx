import type { Metadata } from 'next'
import { Geist, Geist_Mono, Sora } from 'next/font/google'
import './globals.css'
import SpotlightBackground from '@/components/ui/SpotlightBackground'
import Dock from '@/components/ui/Dock'
import ThemeToggle from '@/components/ui/ThemeToggle'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import Providers from '@/components/providers/Providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Daniel Rodriguez Portfolio',
  description: 'Daniel Rodriguez Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="bg-deep-base min-h-screen">
        <Providers>
          <SpotlightBackground />
          <div className="relative z-10">{children}</div>
          <Dock />
          <ThemeToggle />
          <LanguageSwitcher />
        </Providers>
      </body>
    </html>
  )
}
