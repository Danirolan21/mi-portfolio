import type { Locale } from "@/contexts/LanguageContext"

type Bilingual = { es: string; en: string }

export type TimelineItem = {
  type: "work" | "education" | "certification"
  date: Bilingual
  title: Bilingual
  organization: string
  location: Bilingual
  description: Bilingual[]
  tags?: string[]
}

export type LocalizedTimelineItem = {
  type: "work" | "education" | "certification"
  date: string
  title: string
  organization: string
  location: string
  description: string[]
  tags?: string[]
}

export const timeline: TimelineItem[] = [
  {
    type: "education",
    date: { es: "2020", en: "2020" },
    title: {
      es: "CFGM Sistemas Microinformáticos y Redes",
      en: "Vocational Cert. in IT Systems & Networking",
    },
    organization: "IES Azarquiel",
    location: { es: "Toledo", en: "Toledo" },
    description: [
      {
        es: "Primera toma de contacto con la tecnología y la programación.",
        en: "First hands-on experience with technology and programming.",
      },
    ],
    tags: ["Networking", "Hardware", "Programming"],
  },
  {
    type: "education",
    date: { es: "2022", en: "2022" },
    title: {
      es: "CFGS Desarrollo de Aplicaciones Web",
      en: "Advanced Cert. in Web Application Development",
    },
    organization: "IES Azarquiel",
    location: { es: "Toledo", en: "Toledo" },
    description: [
      {
        es: "Desarrollo web, primera aproximación a React y servicios cloud con Azure y AWS.",
        en: "Web development, first exposure to React and cloud services with Azure and AWS.",
      },
    ],
    tags: ["React", "Azure", "AWS", "JavaScript"],
  },
  {
    type: "work",
    date: { es: "2023 – 2025", en: "2023 – 2025" },
    title: {
      es: "Técnico de Sonido",
      en: "Sound Technician",
    },
    organization: "Amarti",
    location: { es: "Toledo", en: "Toledo" },
    description: [
      {
        es: "Instalación, configuración y mantenimiento de equipos de sonido en bodas, eventos corporativos y discotecas móviles.",
        en: "Setup, configuration and maintenance of sound equipment for weddings, corporate events and mobile discos.",
      },
    ],
    tags: ["Events", "Technical Management"],
  },
  {
    type: "work",
    date: { es: "Abr – Jun 2024", en: "Apr – Jun 2024" },
    title: {
      es: "Prácticas Profesionales",
      en: "Professional Internship",
    },
    organization: "Caja Rural",
    location: { es: "Toledo", en: "Toledo" },
    description: [
      {
        es: "Desarrollo de plataforma de sede electrónica para ayuntamientos en el marco de proyectos digitales para la administración pública.",
        en: "Development of an e-government platform for municipalities as part of public administration digital projects.",
      },
    ],
    tags: ["Public Admin", "Full Stack"],
  },
  {
    type: "education",
    date: { es: "Oct 2024 – May 2025", en: "Oct 2024 – May 2025" },
    title: {
      es: "Máster Full Stack + MultiCloud (814h)",
      en: "Full Stack + MultiCloud Master's (814h)",
    },
    organization: "Tajamar",
    location: { es: "Madrid", en: "Madrid" },
    description: [
      {
        es: "Formación intensiva en Angular, React y Vue en frontend.",
        en: "Intensive training in Angular, React and Vue on the frontend.",
      },
      {
        es: ".NET/C# en backend y arquitectura de microservicios.",
        en: ".NET/C# on the backend and microservices architecture.",
      },
      {
        es: "Azure y AWS con certificaciones oficiales.",
        en: "Azure and AWS with official certifications.",
      },
    ],
    tags: ["Angular", "React", ".NET", "Azure", "AWS"],
  },
  {
    type: "certification",
    date: { es: "2025", en: "2025" },
    title: {
      es: "AZ-204 Azure Developer Associate",
      en: "AZ-204 Azure Developer Associate",
    },
    organization: "Microsoft",
    location: {
      es: "Certificación oficial",
      en: "Official certification",
    },
    description: [
      {
        es: "Certificación oficial de Microsoft para desarrollo en Azure.",
        en: "Official Microsoft certification for Azure development.",
      },
    ],
    tags: ["Azure", "Cloud", "Microsoft"],
  },
  {
    type: "certification",
    date: { es: "2025", en: "2025" },
    title: {
      es: "DVA-C02 AWS Developer Associate",
      en: "DVA-C02 AWS Developer Associate",
    },
    organization: "Amazon Web Services",
    location: {
      es: "Certificación oficial",
      en: "Official certification",
    },
    description: [
      {
        es: "Certificación oficial de AWS para desarrollo en la nube.",
        en: "Official AWS certification for cloud development.",
      },
    ],
    tags: ["AWS", "Cloud", "Amazon"],
  },
  {
    type: "work",
    date: { es: "Sep – Dic 2025", en: "Sep – Dec 2025" },
    title: {
      es: "Desarrollador Full Stack",
      en: "Full Stack Developer",
    },
    organization: "Netcheck",
    location: { es: "Madrid", en: "Madrid" },
    description: [
      {
        es: "Desarrollo evolutivo de ERP corporativo en .NET 8 y Angular 19.",
        en: "Iterative development of corporate ERP with .NET 8 and Angular 19.",
      },
      {
        es: "Implementación de módulos de selección y gestión documental.",
        en: "Implementation of recruitment and document management modules.",
      },
      {
        es: "APIs RESTful bajo arquitectura limpia y patrón CQRS.",
        en: "RESTful APIs using clean architecture and CQRS pattern.",
      },
    ],
    tags: [".NET 8", "Angular 19", "CQRS", "PrimeNG"],
  },
  {
    type: "education",
    date: { es: "2026 - Actualidad", en: "2026 - Present" },
    title: {
      es: "Máster en Desarrollo con IA",
      en: "Master's in AI-Driven Development",
    },
    organization: "En curso",
    location: { es: "Madrid", en: "Madrid" },
    description: [
      {
        es: "Especialización en inteligencia artificial aplicada al desarrollo de software.",
        en: "Specialization in artificial intelligence applied to software development.",
      },
    ],
    tags: ["AI", "Machine Learning", "LLMs"],
  },
]

export function localizeTimeline(locale: Locale): LocalizedTimelineItem[] {
  return timeline.map((item) => ({
    type: item.type,
    date: item.date[locale],
    title: item.title[locale],
    organization: item.organization,
    location: item.location[locale],
    description: item.description.map((d) => d[locale]),
    tags: item.tags,
  }))
}
