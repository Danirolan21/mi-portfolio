"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Mail, Send, CheckCircle, XCircle, Loader2 } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa6"
import { cn } from "@/lib/utils"

const EASE = [0.25, 0, 0, 1] as const

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
  hidden:  { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
}

type Status = "idle" | "loading" | "success" | "error"

const links = [
  {
    icon:  SiGithub,
    label: "GitHub",
    value: "github.com/Danirolan21",
    href:  "https://github.com/Danirolan21",
    color: "#E0E1DD",
  },
  {
    icon:  FaLinkedinIn,
    label: "LinkedIn",
    value: "daniel-rodriguez-lancha",
    href:  "https://linkedin.com/in/daniel-rodriguez-lancha",
    color: "#0A66C2",
  },
  {
    icon:  Mail,
    label: "Email",
    value: "danielrodriguezlancha@gmail.com",
    href:  "mailto:danielrodriguezlancha@gmail.com",
    color: "#778DA9",
  },
]

// ── Input / Textarea reutilizable ─────────────────────────────────
function Field({
  label, name, type = "text", textarea = false, value, onChange, disabled,
}: {
  label:    string
  name:     string
  type?:    string
  textarea?: boolean
  value:    string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  disabled: boolean
}) {
  const base = cn(
    "w-full bg-deep-base/80 border border-white/[0.08] rounded-xl",
    "px-4 py-3 text-sm text-deep-text placeholder:text-deep-muted/40",
    "focus:outline-none focus:border-deep-accent/60 focus:bg-deep-base",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "transition-all duration-200",
  )

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-deep-muted/70 text-xs font-medium tracking-wide uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={`Tu ${label.toLowerCase()}...`}
          rows={5}
          className={cn(base, "resize-none")}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={`Tu ${label.toLowerCase()}...`}
          className={base}
        />
      )}
    </div>
  )
}

// ── Componente principal ──────────────────────────────────────────
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>("idle")
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus("loading")

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
      )
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
    } finally {
      // Vuelve a idle después de 4 segundos
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  const isLoading = status === "loading"

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center
                 px-6 lg:px-16 xl:px-24 pt-14 pb-28 sm:py-24"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute bottom-1/3 right-1/3
                   w-[400px] h-[400px] rounded-full
                   bg-gradient-to-tl from-deep-accent/10 via-deep-accent/5 to-transparent
                   blur-3xl pointer-events-none"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full max-w-5xl mx-auto
                   grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24
                   items-start"
      >

        {/* ── Columna izquierda: info ── */}
        <div className="flex flex-col gap-8">
          <motion.div variants={item} className="flex flex-col gap-3">
            <span className="text-deep-accent text-sm font-semibold tracking-wide uppercase">
              Contacto
            </span>
            <h2 className="text-deep-text text-3xl sm:text-4xl lg:text-5xl
                           font-extrabold tracking-tight leading-[1.1]">
              Hablemos
            </h2>
            <p className="text-deep-muted text-sm sm:text-base leading-relaxed">
              ¿Tienes un proyecto en mente o una oportunidad que compartir?
              Escríbeme, respondo en menos de 24h.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={item} className="flex flex-col gap-3">
            {links.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl
                           bg-deep-surface/40 border border-white/[0.06]
                           hover:border-white/[0.15] hover:bg-deep-surface/70
                           transition-all duration-200"
              >
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                  style={{ backgroundColor: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-deep-muted/60 text-[11px] font-medium
                                   tracking-wide uppercase">
                    {label}
                  </span>
                  <span className="text-deep-text text-xs sm:text-sm truncate
                                   group-hover:text-white transition-colors duration-200">
                    {value}
                  </span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Columna derecha: formulario ── */}
        <motion.div variants={item}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl
                       bg-deep-surface/95 border border-white/[0.08]
                       backdrop-blur-2xl shadow-[0_8px_64px_rgba(0,0,0,0.35)]"
          >
            <Field
              label="Nombre"
              name="name"
              value={form.name}
              onChange={handleChange}
              disabled={isLoading}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              disabled={isLoading}
            />
            <Field
              label="Mensaje"
              name="message"
              textarea
              value={form.message}
              onChange={handleChange}
              disabled={isLoading}
            />

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={isLoading || !form.name || !form.email || !form.message}
              className="relative flex items-center justify-center gap-2
                         w-full py-3 rounded-xl text-sm font-semibold
                         bg-deep-accent/20 border border-deep-accent/40 text-deep-text
                         hover:bg-deep-accent/30 hover:border-deep-accent/70
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition-all duration-200"
            >
              {isLoading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
              {isLoading ? "Enviando..." : "Enviar mensaje"}
            </button>

            {/* Feedback de éxito / error */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-emerald-400 text-sm"
                >
                  <CheckCircle size={16} />
                  Mensaje enviado. ¡Gracias!
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-red-400 text-sm"
                >
                  <XCircle size={16} />
                  Algo salió mal. Inténtalo de nuevo.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

      </motion.div>
    </section>
  )
}