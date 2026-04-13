export interface Translations {
  hero: {
    badge: string
    name: string
    role: string
    description: string
    viewCv: string
    contact: string
    photoAlt: string
  }
  about: {
    label: string
    title: string
    p1: string
    p2: string
    p3: string
    stackLabel: string
  }
  experience: {
    label: string
    title: string
    work: string
    education: string
    certification: string
    ctaTitle: string
    ctaDescription: string
  }
  contact: {
    label: string
    title: string
    description: string
    fieldName: string
    fieldEmail: string
    fieldMessage: string
    placeholder: string
    sending: string
    send: string
    success: string
    error: string
  }
  dock: {
    home: string
    about: string
    projects: string
    experience: string
    contact: string
  }
  projects: {
    title: string
  }
}

const es: Translations = {
  hero: {
    badge: "Disponible para proyectos",
    name: "Daniel\nRodriguez",
    role: "Frontend Developer",
    description:
      "Apasionado por crear interfaces con atención al detalle y buena experiencia de usuario.",
    viewCv: "Ver CV",
    contact: "Contacto",
    photoAlt: "Foto de Daniel Rodriguez",
  },
  about: {
    label: "Sobre mí",
    title: "Más que líneas\nde código",
    p1: "Siempre fui de los que desmontaban las cosas para ver cómo funcionaban por dentro. Esa curiosidad me llevó de forma natural a la programación, y desde entonces no he parado. Me formé a través de ciclos formativos, un máster fullstack multicloud y actualmente un máster en desarrollo con IA — no porque me lo exijan, sino porque me gusta.",
    p2: "Lo que más me motiva es el ciclo completo: resolver un problema con buena arquitectura, darle una interfaz que impacte visualmente y ver cómo aporta valor real. Me especializo en React/Next.js en frontend y C#/.NET en backend, con experiencia en cloud con Azure y AWS.",
    p3: "Cuando no estoy programando, probablemente estoy jugando o investigando alguna tecnología nueva.",
    stackLabel: "Stack & herramientas",
  },
  experience: {
    label: "Trayectoria",
    title: "Experiencia & Formación",
    work: "Trabajo",
    education: "Educación",
    certification: "Certificación",
    ctaTitle: "El siguiente capítulo",
    ctaDescription:
      "Grado en Ingeniería Informática en el horizonte.\nSiempre aprendiendo.",
  },
  contact: {
    label: "Contacto",
    title: "Hablemos",
    description:
      "¿Tienes un proyecto en mente o una oportunidad que compartir? Escríbeme, respondo en menos de 24h.",
    fieldName: "Nombre",
    fieldEmail: "Email",
    fieldMessage: "Mensaje",
    placeholder: "Tu {field}...",
    sending: "Enviando...",
    send: "Enviar mensaje",
    success: "Mensaje enviado. ¡Gracias!",
    error: "Algo salió mal. Inténtalo de nuevo.",
  },
  dock: {
    home: "Home",
    about: "Sobre mí",
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto",
  },
  projects: {
    title: "Proyectos",
  },
}

export default es
