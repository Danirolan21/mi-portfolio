import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import SpotlightBackground from '@/components/ui/SpotlightBackground'
import Dock from '@/components/ui/Dock'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-deep-base min-h-screen">
        <SpotlightBackground />
        <div className="relative z-10">{children}</div>
        <Dock />
      </body>
    </html>
  )
}
