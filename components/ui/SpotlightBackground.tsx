'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

const GRAD: [number, number][] = [
  [1, 1], [-1, 1], [1, -1], [-1, -1],
  [1, 0], [-1, 0], [0, 1], [0, -1],
]

function createNoise2D() {
  const p = Array.from({ length: 256 }, (_, i) => i)
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[p[i], p[j]] = [p[j], p[i]]
  }
  const perm: number[] = []
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255]

  const F2 = 0.5 * (Math.sqrt(3) - 1)
  const G2 = (3 - Math.sqrt(3)) / 6

  return (xin: number, yin: number): number => {
    const s = (xin + yin) * F2
    const i = Math.floor(xin + s)
    const j = Math.floor(yin + s)
    const t = (i + j) * G2
    const x0 = xin - (i - t)
    const y0 = yin - (j - t)

    const i1 = x0 > y0 ? 1 : 0
    const j1 = x0 > y0 ? 0 : 1
    const x1 = x0 - i1 + G2
    const y1 = y0 - j1 + G2
    const x2 = x0 - 1 + 2 * G2
    const y2 = y0 - 1 + 2 * G2

    const ii = i & 255
    const jj = j & 255
    let n0 = 0, n1 = 0, n2 = 0

    let t0 = 0.5 - x0 * x0 - y0 * y0
    if (t0 >= 0) {
      const g = GRAD[perm[ii + perm[jj]] % 8]
      t0 *= t0
      n0 = t0 * t0 * (g[0] * x0 + g[1] * y0)
    }

    let t1 = 0.5 - x1 * x1 - y1 * y1
    if (t1 >= 0) {
      const g = GRAD[perm[ii + i1 + perm[jj + j1]] % 8]
      t1 *= t1
      n1 = t1 * t1 * (g[0] * x1 + g[1] * y1)
    }

    let t2 = 0.5 - x2 * x2 - y2 * y2
    if (t2 >= 0) {
      const g = GRAD[perm[ii + 1 + perm[jj + 1]] % 8]
      t2 *= t2
      n2 = t2 * t2 * (g[0] * x2 + g[1] * y2)
    }

    return 70 * (n0 + n1 + n2)
  }
}

const DARK_PALETTE = {
  bg: [13, 27, 42],
  particleHue: [200, 30],
  starHue: [45, 15],
  particleLightness: [25, 18],
  starLightness: [65, 25],
  cursorGlow1: 'rgba(119,141,169,0.05)',
  cursorGlow2: 'rgba(65,90,119,0.025)',
} as const

const LIGHT_PALETTE = {
  bg: [240, 244, 248],
  particleHue: [210, 25],
  starHue: [35, 15],
  particleLightness: [55, 18],
  starLightness: [40, 15],
  cursorGlow1: 'rgba(44,74,110,0.04)',
  cursorGlow2: 'rgba(107,127,149,0.02)',
} as const

const TRAIL_LEN = 16

interface Particle {
  x: number; y: number
  tx: number[]; ty: number[]
  life: number; maxLife: number
  hue: number; lightness: number
  width: number
}

export default function SpotlightBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const themeRef = useRef<'dark' | 'light'>('dark')
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    themeRef.current = resolvedTheme === 'light' ? 'light' : 'dark'
  }, [resolvedTheme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    const noise1 = createNoise2D()
    const noise2 = createNoise2D()
    let raf = 0
    let time = 0

    const SCALE = 0.0015
    const CURSOR_R = 250
    const COUNT = 1000

    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    const particles: Particle[] = []

    const getPalette = () => themeRef.current === 'light' ? LIGHT_PALETTE : DARK_PALETTE

    const spawn = (nearCursor = false): Particle => {
      const { x: mx, y: my } = mouseRef.current
      const near = nearCursor && mx > 0
      const maxLife = 200 + Math.random() * 300
      const star = Math.random() < 0.04
      const pal = getPalette()
      let x: number, y: number

      if (near) {
        const a = Math.random() * Math.PI * 2
        const r = Math.random() * CURSOR_R * 0.7
        x = mx + Math.cos(a) * r
        y = my + Math.sin(a) * r
      } else {
        x = Math.random() * canvas.width
        y = Math.random() * canvas.height
      }

      return {
        x, y,
        tx: [x], ty: [y],
        life: maxLife, maxLife,
        hue: star
          ? pal.starHue[0] + Math.random() * pal.starHue[1]
          : pal.particleHue[0] + Math.random() * pal.particleHue[1],
        lightness: star
          ? pal.starLightness[0] + Math.random() * pal.starLightness[1]
          : pal.particleLightness[0] + Math.random() * pal.particleLightness[1],
        width: star ? 1.8 + Math.random() * 0.7 : 0.6 + Math.random() * 1.2,
      }
    }

    const init = () => {
      particles.length = 0
      for (let i = 0; i < COUNT; i++) particles.push(spawn())
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      init()
    }

    resize()
    window.addEventListener('resize', resize)

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) mouseRef.current = { x: t.clientX, y: t.clientY }
    }
    const onTouchEnd = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    window.addEventListener('mousemove', onMouse)
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('touchend', onTouchEnd)

    const curl = (px: number, py: number, t: number): [number, number] => {
      const e = 0.5
      const sx = px * SCALE, sy = py * SCALE, es = e * SCALE

      const a = noise1(sx, sy + es + t)
      const b = noise1(sx, sy - es + t)
      const c = noise1(sx + es, sy + t)
      const d = noise1(sx - es, sy + t)

      const s2 = SCALE * 3
      const sx2 = px * s2, sy2 = py * s2, es2 = e * s2, t2 = t * 1.3
      const a2 = noise2(sx2, sy2 + es2 + t2)
      const b2 = noise2(sx2, sy2 - es2 + t2)
      const c2 = noise2(sx2 + es2, sy2 + t2)
      const d2 = noise2(sx2 - es2, sy2 + t2)

      return [
        ((a - b) + (a2 - b2) * 0.35) / (2 * e),
        -(((c - d) + (c2 - d2) * 0.35) / (2 * e)),
      ]
    }

    const frame = () => {
      time += 0.0005

      const pal = getPalette()
      const [bgR, bgG, bgB] = pal.bg

      ctx.fillStyle = `rgb(${bgR},${bgG},${bgB})`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const { x: mx, y: my } = mouseRef.current
      const hasCursor = mx > 0

      const particleAlphaScale = themeRef.current === 'light' ? 0.7 : 1

      for (let i = 0; i < COUNT; i++) {
        const p = particles[i]

        const [cx, cy] = curl(p.x, p.y, time)
        let vx = cx * 1.8
        let vy = cy * 1.8

        if (hasCursor) {
          const dx = p.x - mx
          const dy = p.y - my
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CURSOR_R && d > 1) {
            const f = ((1 - d / CURSOR_R) ** 2) * 3.5
            vx += -dy / d * f - dx / d * f * 0.12
            vy += dx / d * f - dy / d * f * 0.12
          }
        }

        p.x += vx
        p.y += vy
        p.life--

        p.tx.push(p.x)
        p.ty.push(p.y)
        if (p.tx.length > TRAIL_LEN) {
          p.tx.shift()
          p.ty.shift()
        }

        const ratio = p.life / p.maxLife
        const lifeAlpha =
          ratio < 0.15 ? ratio / 0.15 :
          ratio > 0.85 ? (1 - ratio) / 0.15 :
          1

        let l = p.lightness
        if (hasCursor) {
          const dx = p.x - mx
          const dy = p.y - my
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CURSOR_R) l += (1 - d / CURSOR_R) * 28
        }

        const len = p.tx.length
        if (len > 1) {
          ctx.beginPath()
          ctx.moveTo(p.tx[0], p.ty[0])
          for (let j = 1; j < len; j++) ctx.lineTo(p.tx[j], p.ty[j])
          ctx.lineWidth = p.width * 3
          ctx.strokeStyle = `hsla(${p.hue},60%,${l}%,${lifeAlpha * 0.07 * particleAlphaScale})`
          ctx.stroke()

          ctx.lineWidth = p.width
          ctx.strokeStyle = `hsla(${p.hue},60%,${l}%,${lifeAlpha * 0.4 * particleAlphaScale})`
          ctx.stroke()
        }

        if (
          p.life <= 0 ||
          p.x < -80 || p.x > canvas.width + 80 ||
          p.y < -80 || p.y > canvas.height + 80
        ) {
          Object.assign(p, spawn(hasCursor && Math.random() < 0.3))
        }
      }

      if (hasCursor) {
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, 180)
        g.addColorStop(0, pal.cursorGlow1)
        g.addColorStop(0.5, pal.cursorGlow2)
        g.addColorStop(1, 'transparent')
        ctx.fillStyle = g
        ctx.fillRect(mx - 180, my - 180, 360, 360)
      }

      raf = requestAnimationFrame(frame)
    }

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf)
      else frame()
    }
    document.addEventListener('visibilitychange', onVisibility)

    frame()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" />
}
