# Daniel Rodríguez Lancha — Portfolio

**Desarrollador Full Stack · Next.js · TypeScript · Tailwind CSS**

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel&logoColor=white)

Portfolio personal diseñado y desarrollado desde cero con Next.js App Router. Incluye sistema de i18n propio, tema oscuro/claro, animaciones con Framer Motion y despliegue continuo en Vercel.

**Demo en producción:** [mi-portfolio-beta-lake.vercel.app](https://mi-portfolio-beta-lake.vercel.app)

---

<!-- Añade aquí una captura de pantalla del portfolio -->
<!-- ![Preview del portfolio](./public/images/preview.png) -->

---

## Características

- **Bilingüe ES / EN** — sistema de i18n propio con React Context, sin dependencias externas
- **Tema oscuro / claro** — ThemeToggle personalizado integrado con `next-themes`
- **Animaciones con Framer Motion** — entradas con stagger, `whileInView`, transiciones spring
- **Experience timeline** — carrusel horizontal animado con scroll
- **Visor de proyectos** — interfaz estilo navegador macOS (BrowserMockup)
- **SpotlightBackground** — gradiente radial sobre canvas con inercia que sigue el cursor
- **Dock navbar** — barra de navegación tipo macOS con glassmorphism y tooltips animados
- **Formulario de contacto** — enviado con EmailJS, sin backend propio
- **Responsive y mobile-first** — adaptado para todos los tamaños de pantalla

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2 | Framework principal (App Router) |
| [React](https://react.dev) | 19 | Interfaz de usuario |
| [TypeScript](https://typescriptlang.org) | 5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Estilos utilitarios |
| [Framer Motion](https://www.framer.com/motion) | 12 | Animaciones y transiciones |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4 | Gestión del tema oscuro/claro |
| [EmailJS](https://www.emailjs.com) | 4 | Envío de formulario sin backend |
| [Lucide React](https://lucide.dev) | — | Iconos de la interfaz |
| [react-icons](https://react-icons.github.io/react-icons) | 5 | Iconos de tecnologías |

---

## Estructura del proyecto

```
app/
├── layout.tsx              # Layout raíz con providers y fuentes
├── page.tsx                # Single-page: une todas las secciones
└── globals.css             # Variables CSS y estilos base

components/
├── sections/               # Secciones principales de la página
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── ui/                     # Componentes reutilizables
│   ├── Dock.tsx
│   ├── SpotlightBackground.tsx
│   ├── ProjectCard.tsx
│   ├── Navbar.tsx
│   ├── ThemeToggle.tsx
│   ├── LanguageSwitcher.tsx
│   ├── Footer.tsx
│   ├── GlowBadge.tsx
│   └── Button.tsx
└── providers/
    └── Providers.tsx       # ThemeProvider de next-themes

contexts/
└── LanguageContext.tsx     # Sistema de i18n con React Context

data/
├── projects.ts             # Datos y tipos de los proyectos
└── experience.ts           # Datos de la experiencia laboral

locales/
├── es.ts                   # Traducciones en español
└── en.ts                   # Traducciones en inglés

lib/
└── utils.ts                # Función cn() (clsx + tailwind-merge)

public/
├── cv.pdf                  # CV de Daniel
└── images/
    ├── avatar.png
    └── projects/
```

---

## Instalación local

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/Danirolan21/mi-portfolio.git
cd mi-portfolio
pnpm install
```

Crea el archivo de variables de entorno a partir del ejemplo:

```bash
cp .env.example .env.local
```

Rellena `.env.local` con tus credenciales (ver sección siguiente) y arranca el servidor de desarrollo:

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

---

## Variables de entorno

El formulario de contacto utiliza [EmailJS](https://www.emailjs.com). Copia `.env.example` a `.env.local` y rellena los valores con tu cuenta de EmailJS:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

> Sin estas variables el formulario no enviará correos, pero el resto del portfolio funciona con normalidad.

---

## Despliegue

El proyecto está desplegado en [Vercel](https://vercel.com) con integración continua desde la rama `master`.

Para desplegar una instancia propia:

1. Haz fork de este repositorio
2. Conéctalo a Vercel desde [vercel.com/new](https://vercel.com/new)
3. Añade las tres variables de entorno en el panel de Vercel
4. Vercel detecta Next.js automáticamente y construye el proyecto sin configuración adicional

---

## Roadmap

- [ ] Páginas de detalle de proyectos (`/projects/[slug]`)
- [ ] Ampliar el catálogo de proyectos en `data/projects.ts`
- [ ] OG image personalizada para previsualización en redes sociales
- [ ] Configurar EmailJS con credenciales reales en producción
- [ ] Corregir warning de `Image` sin `sizes` en el Hero
- [ ] Embed iframe de proyectos cuando el servidor lo permita

---

## Licencia

© 2026 Daniel Rodríguez Lancha. Todos los derechos reservados.
