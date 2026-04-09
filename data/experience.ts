export type TimelineItem = {
    type:        "work" | "education" | "certification"
    date:        string
    title:       string
    organization:string
    location:    string
    description: string[]
    tags?:       string[]
  }
  
  export const timeline: TimelineItem[] = [
    {
      type:         "education",
      date:         "2020",
      title:        "CFGM Sistemas Microinformáticos y Redes",
      organization: "IES Azarquiel",
      location:     "Toledo",
      description:  ["Primera toma de contacto con la tecnología y la programación."],
      tags:         ["Redes", "Hardware", "Programación"],
    },
    {
      type:         "education",
      date:         "2022",
      title:        "CFGS Desarrollo de Aplicaciones Web",
      organization: "IES Azarquiel",
      location:     "Toledo",
      description:  ["Desarrollo web, primera aproximación a React y servicios cloud con Azure y AWS."],
      tags:         ["React", "Azure", "AWS", "JavaScript"],
    },
    {
      type:         "work",
      date:         "2023 – 2025",
      title:        "Técnico de Sonido",
      organization: "Amarti",
      location:     "Toledo",
      description:  [
        "Instalación, configuración y mantenimiento de equipos de sonido en bodas, eventos corporativos y discotecas móviles.",
      ],
      tags:         ["Eventos", "Gestión técnica"],
    },
    {
      type:         "work",
      date:         "Abr – Jun 2024",
      title:        "Prácticas Profesionales",
      organization: "Caja Rural",
      location:     "Toledo",
      description:  [
        "Desarrollo de plataforma de sede electrónica para ayuntamientos en el marco de proyectos digitales para la administración pública.",
      ],
      tags:         ["Administración pública", "Full Stack"],
    },
    {
      type:         "education",
      date:         "Oct 2024 – May 2025",
      title:        "Máster Full Stack + MultiCloud (814h)",
      organization: "Tajamar",
      location:     "Madrid",
      description:  [
        "Formación intensiva en Angular, React y Vue en frontend.",
        ".NET/C# en backend y arquitectura de microservicios.",
        "Azure y AWS con certificaciones oficiales.",
      ],
      tags:         ["Angular", "React", ".NET", "Azure", "AWS"],
    },
    {
      type:         "certification",
      date:         "2025",
      title:        "AZ-204 Azure Developer Associate",
      organization: "Microsoft",
      location:     "Certificación oficial",
      description:  ["Certificación oficial de Microsoft para desarrollo en Azure."],
      tags:         ["Azure", "Cloud", "Microsoft"],
    },
    {
      type:         "certification",
      date:         "2025",
      title:        "DVA-C02 AWS Developer Associate",
      organization: "Amazon Web Services",
      location:     "Certificación oficial",
      description:  ["Certificación oficial de AWS para desarrollo en la nube."],
      tags:         ["AWS", "Cloud", "Amazon"],
    },
    {
      type:         "work",
      date:         "Sep – Dic 2025",
      title:        "Desarrollador Full Stack",
      organization: "Netcheck",
      location:     "Madrid",
      description:  [
        "Desarrollo evolutivo de ERP corporativo en .NET 8 y Angular 19.",
        "Implementación de módulos de selección y gestión documental.",
        "APIs RESTful bajo arquitectura limpia y patrón CQRS.",
      ],
      tags:         [".NET 8", "Angular 19", "CQRS", "PrimeNG"],
    },
    {
      type:         "education",
      date:         "2025 – Actualidad",
      title:        "Máster en Desarrollo con IA",
      organization: "En curso",
      location:     "Madrid",
      description:  ["Especialización en inteligencia artificial aplicada al desarrollo de software."],
      tags:         ["IA", "Machine Learning", "LLMs"],
    },
  ]