import type { ReactNode } from "react"

interface GlowBadgeProps {
  children: ReactNode
  className?: string
}

export default function GlowBadge({ children, className = "" }: GlowBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                  text-xs font-medium tracking-wide uppercase
                  bg-deep-accent/10 border border-deep-accent/25
                  text-deep-muted backdrop-blur-sm ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </span>
      {children}
    </span>
  )
}
