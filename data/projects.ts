import type { Locale } from "@/contexts/LanguageContext"

type Bilingual = { es: string; en: string }

export type Project = {
  id:          string
  title:       string
  tagline:     Bilingual
  description: Bilingual
  stack:       string[]
  github:      string
  demo:        string
  embedUrl?:   string
  preview:     string
  year:        string
  role:        Bilingual
  featured?:   boolean
}

export type LocalizedProject = {
  id:          string
  title:       string
  tagline:     string
  description: string
  stack:       string[]
  github:      string
  demo:        string
  embedUrl?:   string
  preview:     string
  year:        string
  role:        string
  featured?:   boolean
}

export const projects: Project[] = [
  {
    id:      "myvirtualacademy",
    title:   "MyVirtualAcademy",
    tagline: {
      es: "Plataforma e-learning con roles diferenciados",
      en: "E-learning platform with role-based access",
    },
    description: {
      es: "Trabajo de Fin de Máster. LMS full stack desplegado en producción con cuatro roles (Administrador, Profesor, Tutor, Estudiante), gestión completa de cursos, asignaturas, contenidos multimedia, exámenes, entregas con calificación, calendario y notificaciones en tiempo real. Frontend SPA en Vercel, backend en MonsterASP.NET con Azure SQL serverless. Credenciales de demo disponibles en el README del repositorio.",
      en: "Master's Thesis. Full stack LMS deployed to production with four roles (Admin, Teacher, Tutor, Student), full management of courses, subjects, multimedia content, exams, graded submissions, calendar, and real-time notifications. SPA frontend on Vercel, backend on MonsterASP.NET with Azure SQL serverless. Demo credentials available in the repo README.",
    },
    stack:    ["Vue 3", "TypeScript", "Pinia", "ASP.NET Core", "SQL Server", "Azure"],
    github:   "https://github.com/Danirolan21/myvirtualacademy-fullstack",
    demo:     "https://myvirtualacademy.vercel.app",
    // embedUrl: "https://myvirtualacademy.vercel.app",
    preview:  "/images/projects/myvirtualacademy.png",
    year:     "2026",
    role:     {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    featured: true,
  },
]

export function localizeProjects(locale: Locale): LocalizedProject[] {
  return projects.map((p) => ({
    id:          p.id,
    title:       p.title,
    tagline:     p.tagline[locale],
    description: p.description[locale],
    stack:       p.stack,
    github:      p.github,
    demo:        p.demo,
    embedUrl:    p.embedUrl,
    preview:     p.preview,
    year:        p.year,
    role:        p.role[locale],
    featured:    p.featured,
  }))
}
