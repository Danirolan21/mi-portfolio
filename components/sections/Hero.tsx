"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FileText, Mail } from "lucide-react"
import GlowBadge from "@/components/ui/GlowBadge"
import { useTranslation } from "@/contexts/LanguageContext"

function GithubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.62-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
    </svg>
  )
}

function LinkedinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54A1.75 1.75 0 0 0 1.77 24h20.45A1.75 1.75 0 0 0 24 22.27V1.73A1.75 1.75 0 0 0 22.22 0Z" />
    </svg>
  )
}

const EASE = [0.25, 0, 0, 1] as const

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
}

const socialLinks = [
  {
    href: "https://github.com/Danirolan21",
    label: "GitHub",
    icon: <GithubIcon size={20} />,
  },
  {
    href: "https://linkedin.com/in/daniel-rodriguez-lancha",
    label: "LinkedIn",
    icon: <LinkedinIcon size={20} />,
  },
]

export default function Hero() {
  const { t } = useTranslation()
  const [firstName, lastName] = t.hero.name.split("\n")

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 xl:px-24 pt-14 pb-24 sm:py-24"
    >
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Ambient glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          aria-hidden
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2
                     w-[500px] h-[500px] lg:w-[700px] lg:h-[700px]
                     rounded-full
                     bg-gradient-to-br from-deep-accent/20 via-deep-accent/5 to-transparent
                     blur-3xl pointer-events-none"
        />

        <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">
          {/* ── Text side ── */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative w-full max-w-lg lg:max-w-none
                       p-8 sm:p-10 lg:p-0
                       bg-deep-surface/20 lg:bg-transparent
                       backdrop-blur-xl lg:backdrop-blur-none
                       border border-overlay/[0.08] lg:border-transparent
                       rounded-3xl lg:rounded-none
                       shadow-[0_8px_64px_rgba(65,90,119,0.12)] lg:shadow-none"
          >
            {/* Glass card top highlight — mobile only */}
            <div
              aria-hidden
              className="absolute inset-x-0 -top-px h-px lg:hidden
                         bg-gradient-to-r from-transparent via-deep-accent/40 to-transparent"
            />

            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
            >
              {/* Status badge */}
              <motion.div variants={item}>
                <GlowBadge>{t.hero.badge}</GlowBadge>
              </motion.div>

              {/* Mobile-only avatar */}
              <motion.div variants={item} className="lg:hidden">
                <div className="relative group">
                  <div
                    aria-hidden
                    className="absolute -inset-1.5 rounded-full
                               bg-gradient-to-br from-deep-accent/50 to-deep-accent/10
                               blur-md opacity-50 group-hover:opacity-80
                               transition-opacity duration-500"
                  />
                  <div
                    className="relative w-28 h-28 rounded-full
                               ring-2 ring-overlay/10 ring-offset-2
                               ring-offset-transparent overflow-hidden"
                  >
                    <Image
                      src="/images/avatar.png"
                      alt={t.hero.photoAlt}
                      fill
                      sizes="112px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Name + role + description */}
              <motion.div variants={item} className="flex flex-col gap-3 lg:gap-5">
                <div className="flex flex-col gap-1.5 lg:gap-2">
                  <h1
                    className="font-display text-deep-text
                               text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
                               font-extrabold tracking-tight leading-[1.05]"
                  >
                    {firstName}
                    <br />
                    {lastName}
                  </h1>
                  <span
                    className="font-display text-deep-accent
                               text-base sm:text-lg lg:text-xl
                               font-semibold tracking-wide uppercase"
                  >
                    {t.hero.role}
                  </span>
                </div>
                <p
                  className="text-deep-muted text-sm sm:text-base lg:text-lg
                             leading-relaxed max-w-md"
                >
                  {t.hero.description}
                </p>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                variants={item}
                className="flex gap-3 flex-wrap justify-center lg:justify-start pt-2"
              >
                <motion.a
                  href="/cv.pdf"
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
                    className="absolute inset-0 bg-gradient-to-r from-overlay/10 to-transparent
                               translate-x-[-100%] group-hover:translate-x-[100%]
                               transition-transform duration-700"
                  />
                  <FileText size={16} className="relative" />
                  <span className="relative">{t.hero.viewCv}</span>
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault()
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }}
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
                  <Mail size={16} />
                  {t.hero.contact}
                </motion.a>
              </motion.div>

              {/* Social links in glass pill */}
              <motion.div
                variants={item}
                className="inline-flex gap-1 p-1.5 rounded-2xl
                           bg-overlay/[0.04] border border-overlay/[0.08]"
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="p-2.5 rounded-xl text-deep-muted
                               hover:text-deep-text hover:bg-overlay/[0.08]
                               transition-all duration-200"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Photo side — desktop only ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative group">
              {/* Glow behind photo */}
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full
                           bg-gradient-to-br from-deep-accent/30 to-deep-accent/5
                           blur-2xl opacity-40 group-hover:opacity-60
                           transition-opacity duration-700"
              />
              {/* Circular photo frame */}
              <div
                className="relative w-72 h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96
                           rounded-full overflow-hidden
                           ring-2 ring-overlay/[0.08] ring-offset-4 ring-offset-transparent
                           shadow-[0_12px_48px_rgba(65,90,119,0.25)]"
              >
                <Image
                  src="/images/avatar.png"
                  alt={t.hero.photoAlt}
                  fill
                  sizes="(min-width: 1536px) 384px, (min-width: 1280px) 320px, 288px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
