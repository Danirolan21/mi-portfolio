"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Briefcase, GraduationCap, Award } from "lucide-react"
import { cn } from "@/lib/utils"
import { localizeTimeline, type LocalizedTimelineItem } from "@/data/experience"
import { useTranslation } from "@/contexts/LanguageContext"

const EASE = [0.25, 0, 0, 1] as const

function TimelineCard({
  item,
  typeConfig,
}: {
  item: LocalizedTimelineItem
  typeConfig: Record<string, { icon: typeof Briefcase; color: string; label: string }>
}) {
  const { icon: Icon, color } = typeConfig[item.type]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <motion.div
        whileHover={{
          scale: 1.03,
          y: -4,
          boxShadow: `0 12px 32px ${color}25`,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="w-full p-3.5 sm:p-4 lg:p-5 rounded-2xl cursor-default
                   bg-deep-surface/80 backdrop-blur-xl
                   border border-overlay/[0.08]
                   hover:border-overlay/[0.15]
                   transition-colors duration-300"
        style={{ borderLeft: `3px solid ${color}` }}
      >
        <div className="flex items-start justify-between gap-3">
          <div
            className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg shrink-0"
            style={{ backgroundColor: `${color}15`, border: `1px solid ${color}25` }}
          >
            <Icon size={16} style={{ color }} />
          </div>
          <span className="text-deep-muted/60 text-[11px] font-medium tracking-wide text-right leading-snug pt-0.5">
            {item.date}
          </span>
        </div>

        <div className="mt-2.5 sm:mt-3">
          <h3 className="font-display text-deep-text text-[13px] sm:text-sm font-bold leading-snug">
            {item.title}
          </h3>
          <p className="text-xs font-medium mt-0.5 sm:mt-1" style={{ color }}>
            {item.organization}
          </p>
          <p className="text-deep-muted/40 text-[11px]">{item.location}</p>
        </div>

        <div className="mt-2 sm:mt-2.5 flex flex-col gap-0.5">
          {item.description.map((line, i) => (
            <p key={i} className="text-deep-muted/80 text-[11px] sm:text-xs leading-relaxed">
              {item.description.length > 1 && "· "}{line}
            </p>
          ))}
        </div>

        {item.tags && (
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-overlay/[0.04]">
            {item.tags.map(tag => (
              <span
                key={tag}
                className="px-1.5 sm:px-2 py-0.5 rounded-md text-[10px] font-medium"
                style={{ backgroundColor: `${color}12`, color: `${color}BB` }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  const { t, locale } = useTranslation()
  const localizedTimeline = localizeTimeline(locale)

  const typeConfig = {
    work:          { icon: Briefcase,     color: "#F59E0B", label: t.experience.work },
    education:     { icon: GraduationCap, color: "#3B82F6", label: t.experience.education },
    certification: { icon: Award,         color: "#10B981", label: t.experience.certification },
  }

  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const totalItems = localizedTimeline.length + 1
  const cardWidth  = 320
  const gap        = 32
  const totalWidth = totalItems * (cardWidth + gap)

  const [scrollEnd, setScrollEnd] = useState(Math.max(0, totalWidth - 1200))

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setScrollEnd(
          Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 80)
        )
      }
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollEnd],
  )

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  )

  const [ctaLine1, ctaLine2] = t.experience.ctaDescription.split("\n")

  return (
    <section
      id="experience"
      ref={containerRef}
      style={{ minHeight: `${totalItems * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="absolute top-1/2 left-1/4 -translate-y-1/2
                     w-[500px] h-[500px] rounded-full
                     bg-gradient-to-br from-deep-accent/10 via-deep-accent/5 to-transparent
                     blur-3xl pointer-events-none"
        />

        {/* Header */}
        <div className="shrink-0 px-6 lg:px-16 xl:px-24 pt-10 sm:pt-16 lg:pt-24 pb-3 sm:pb-6 lg:pb-8 flex flex-col gap-1.5 sm:gap-2">
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="font-display text-deep-accent text-sm sm:text-base
                       font-semibold tracking-wide uppercase"
          >
            {t.experience.label}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.08 }}
            className="font-display text-deep-text text-2xl sm:text-4xl lg:text-5xl
                       font-extrabold tracking-tight"
          >
            {t.experience.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-5 mt-1"
          >
            {(Object.keys(typeConfig) as Array<keyof typeof typeConfig>).map(key => {
              const { color, label } = typeConfig[key]
              return (
                <div key={key} className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-deep-muted/60 text-xs">{label}</span>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* ── Timeline track area ── */}
        <div className="relative flex-1 min-h-0">
          <div className="absolute top-[30%] lg:top-1/2 left-0 w-full h-px bg-overlay/[0.06] -translate-y-[0.5px]" />

          <motion.div
            className="absolute top-[30%] lg:top-1/2 left-0 h-[2px] -translate-y-[1px] rounded-r-full
                       bg-gradient-to-r from-deep-accent/50 via-deep-accent/30 to-transparent"
            style={{ width: progressWidth }}
          />

          <motion.div
            ref={trackRef}
            style={{ x: translateX }}
            className="h-full flex gap-8 px-6 lg:px-16 xl:px-24 will-change-transform"
          >
            {localizedTimeline.map((item, i) => {
              const isAbove = i % 2 === 0
              const { color } = typeConfig[item.type]

              return (
                <div key={i} className="flex-shrink-0 w-72 sm:w-80 h-full relative">
                  <div className="absolute top-[30%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div
                      className="w-3 h-3 rounded-full border-2"
                      style={{
                        borderColor: color,
                        backgroundColor: `${color}30`,
                        boxShadow: `0 0 8px ${color}40`,
                      }}
                    />
                  </div>

                  <div
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 w-px h-4",
                      "top-[calc(30%_+_6px)] lg:top-[calc(50%_+_6px)]",
                      isAbove && "lg:top-auto lg:bottom-[calc(50%_+_6px)]",
                    )}
                    style={{ backgroundColor: `${color}35` }}
                  />

                  <div
                    className={cn(
                      "absolute inset-x-0",
                      "top-[calc(30%_+_22px)] lg:top-[calc(50%_+_22px)]",
                      isAbove && "lg:top-auto lg:bottom-[calc(50%_+_22px)]",
                    )}
                  >
                    <TimelineCard item={item} typeConfig={typeConfig} />
                  </div>
                </div>
              )
            })}

            {/* CTA card */}
            <div className="flex-shrink-0 w-72 sm:w-80 h-full relative">
              <div className="absolute top-[30%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div
                  className="w-4 h-4 rounded-full border-2 border-deep-accent/50"
                  style={{
                    background: "linear-gradient(135deg, #3B82F640, #F59E0B40, #10B98140)",
                    boxShadow: "0 0 12px rgba(65,90,119,0.3)",
                  }}
                />
              </div>

              <div
                className="absolute left-1/2 -translate-x-1/2 w-px h-4 bg-deep-accent/20
                           top-[calc(30%_+_8px)] lg:top-[calc(50%_+_8px)]"
              />

              <div className="absolute inset-x-0 top-[calc(30%_+_24px)] lg:top-[calc(50%_+_24px)]">
                <motion.div
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="flex flex-col items-center justify-center gap-3
                             p-5 sm:p-6 rounded-2xl text-center
                             bg-deep-surface/60 backdrop-blur-xl
                             border border-dashed border-deep-accent/30"
                >
                  <span className="text-deep-accent text-2xl">✦</span>
                  <p className="font-display text-deep-text text-sm font-bold">
                    {t.experience.ctaTitle}
                  </p>
                  <p className="text-deep-muted text-xs leading-relaxed">
                    {ctaLine1}
                    <br />
                    {ctaLine2}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
