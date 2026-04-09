# Portfolio de Daniel Rodríguez Lancha — Contexto completo del agente

> El CV original en PDF está disponible en `/public/cv.pdf`. Consúltalo si necesitas
> cualquier dato adicional sobre la experiencia, educación o certificaciones de Daniel.

---

## Datos personales

| Campo        | Valor                                      |
|--------------|--------------------------------------------|
| Nombre       | Daniel Rodríguez Lancha                    |
| Título       | Desarrollador Web Full Stack               |
| Email        | danielrodriguezlancha@gmail.com            |
| Teléfono     | +34 688 950 234                            |
| Ubicación    | Madrid                                     |
| GitHub       | github.com/Danirolan21                     |
| LinkedIn     | linkedin.com/in/daniel-rodriguez-lancha    |

---

## Perfil profesional

Desarrollador Full Stack especializado en ecosistemas .NET Core y Angular (12+).
Certificado como Azure Developer Associate (AZ-204) y AWS Developer (DVA-C02),
con sólida base en Programación Orientada a Objetos (OOP) y arquitectura de
microservicios. Experiencia real implementando soluciones escalables bajo
metodologías Agile (Scrum) y estándares de Clean Code.

Le motiva el ciclo completo: resolver un problema con buena arquitectura, darle
una interfaz que impacte visualmente y ver cómo aporta valor real. Actualmente
se inclina hacia frontend (especialmente React/Next.js) por su gusto por el
diseño visual y las animaciones, pero disfruta igualmente con el backend y aspira
a dominar todo el stack.

Fuera del código: videojuegos y tecnología.

---

## Trayectoria de aprendizaje — contexto importante

Daniel tiene una trayectoria autodidacta y académica muy activa. Es importante
entender su recorrido para contextualizar correctamente su nivel y motivación:

- **CFGM (SMR)** — Primera toma de contacto con la programación y la tecnología.
- **CFGS (DAW)** — Profundizó en desarrollo web. Tocó React por primera vez y
  servicios cloud como Azure y AWS.
- **Máster Full Stack + MultiCloud (Tajamar, 814h presencial)** — Formación intensiva
  donde trabajó en profundidad con Angular, React, Vue en frontend y .NET/C# en backend,
  más Azure y AWS. Aquí consiguió las certificaciones AZ-204 y DVA-C02.
- **Máster en Desarrollo con IA** — Actualmente en curso. Está potenciando su carrera
  con inteligencia artificial aplicada al desarrollo.
- **Aprendizaje autónomo en paralelo** — Mientras cursa el máster de IA, está
  desarrollando este portfolio aprendiendo por su cuenta Next.js (nunca lo había
  tocado antes) e integrándolo con Tailwind CSS (lo conocía pero tampoco lo había
  usado). Le gusta mucho aprender cosas nuevas por iniciativa propia.
- **Grado en Ingeniería Informática (planificado)** — Cuando termine el máster de IA,
  se plantea matricularse en un grado de ingeniería informática. Siempre se mete en
  más formación porque le gusta, no porque se lo exijan.

Este perfil refleja a alguien con mucha iniciativa, capacidad de aprendizaje rápido
y hambre constante de mejorar — algo que debe transmitir el portfolio.

---

## Stack técnico completo

### Frontend
- TypeScript, JavaScript (ES6+), HTML5, CSS3/SASS
- React, Next.js (aprendiendo actualmente, stack de este portfolio)
- Angular 19 (NGXS) — framework principal en experiencia laboral
- Vue.js
- Tailwind CSS (aprendiendo actualmente, usado en este portfolio)

### Backend & Arquitectura
- C#, .NET 8, ASP.NET Core, MVC, LINQ
- Entity Framework Core
- Patrones: Clean Architecture, CQRS, APIs RESTful, Microservicios

### Bases de datos
- SQL Server, PostgreSQL, MySQL, Oracle

### Cloud & DevOps
- Azure (AZ-204 certificado) — despliegue, configuración y gestión de servicios
- AWS (DVA-C02 certificado) — despliegue, configuración y gestión de servicios
- CI/CD: GitHub Actions / Azure DevOps
- Contenedores: Docker

### Toolkit
- IDEs: Visual Studio 2022, VS Code, Cursor
- Control de versiones: Git, GitHub/GitLab
- API Testing: Postman, Swagger (OpenAPI)

---

## Experiencia laboral

### Desarrollador Full Stack — Netcheck
**Madrid | Septiembre 2025 – Diciembre 2025**
- Desarrollo evolutivo de ERP corporativo en .NET 8 y Angular 19
- Implementación integral de módulos de selección y gestión documental
- Diseño de interfaces con PrimeNG y gestión de estado con NGXS
- Creación de APIs RESTful y lógica de negocio bajo arquitectura limpia y patrón CQRS

### Prácticas Profesionales — Caja Rural
**Toledo | Abril 2024 – Junio 2024**
- Participación en el desarrollo de una plataforma de sede electrónica para
  diversos ayuntamientos, en el marco de proyectos digitales para la administración pública.

### Técnico de Sonido para Eventos y Bodas — Amarti
**Toledo | Temporadas 2023–2025 (Abril a Octubre)**
- Instalación, configuración, supervisión y mantenimiento de equipos de sonido
  en bodas, eventos corporativos y discotecas móviles.

---

## Educación

| Título | Centro | Fecha |
|--------|--------|-------|
| Máster Desarrollo Web Full Stack + MultiCloud (814h, presencial) | Tajamar, Madrid | Oct 2024 – May 2025 |
| Máster en Desarrollo con IA | En curso actualmente | 2026 |
| CFGS Desarrollo de Aplicaciones Web | IES Azarquiel, Toledo | Jul 2022 |
| CFGM Sistemas Microinformáticos y Redes | IES Azarquiel, Toledo | Jul 2020 |
| Grado en Ingeniería Informática (planificado) | Por concretar | Agosto 2026+ |

---

## Certificaciones

| Certificación | Entidad | Año |
|---------------|---------|-----|
| AZ-204 Azure Developer Associate | Microsoft | 2025 |
| DVA-C02 AWS Developer Associate | Amazon Web Services | 2025 |

---

## Idiomas

- Español: Nativo
- Inglés: Nivel medio, técnico avanzado

---

## Stack tecnológico del portfolio

- **Framework**: Next.js (App Router) con TypeScript
- **Estilos**: Tailwind CSS con paleta personalizada
- **Animaciones**: Framer Motion
- **Iconos UI**: Lucide React
- **Iconos tecnologías**: react-icons (si/fa6)
- **Contacto**: EmailJS (pendiente de implementar)
- **Despliegue**: Vercel

---

## Paleta de colores — Deep Sea

Definida en `tailwind.config.ts` y `globals.css`.
**Nunca hardcodear hex en componentes. Usar siempre los tokens.**

| Token Tailwind      | Hex       | Uso                                      |
|---------------------|-----------|------------------------------------------|
| `deep-base`         | `#0D1B2A` | Fondo base de toda la web                |
| `deep-surface`      | `#1B263B` | Cards, navbar, elementos elevados        |
| `deep-accent`       | `#415A77` | Acentos, bordes activos, spotlight       |
| `deep-muted`        | `#778DA9` | Texto secundario, iconos inactivos       |
| `deep-text`         | `#E0E1DD` | Texto principal                          |

---

## Arquitectura del proyecto

```
app/
├── layout.tsx          # SpotlightBackground + Dock envuelven toda la app
├── page.tsx            # Single-page: une todas las secciones
└── globals.css

components/
├── sections/
│   ├── Hero.tsx        ✅ Implementado
│   ├── About.tsx       ✅ Implementado
│   ├── Projects.tsx    ⏳ Pendiente
│   ├── Experience.tsx  ⏳ Pendiente
│   └── Contact.tsx     ⏳ Pendiente
└── ui/
    ├── Dock.tsx                 ✅ Implementado
    ├── SpotlightBackground.tsx  ✅ Implementado
    ├── ProjectCard.tsx          ⏳ Pendiente
    └── Button.tsx               ⏳ Pendiente

data/
├── projects.ts     ⏳ Pendiente — array de proyectos
└── experience.ts   ⏳ Pendiente — array de experiencia

lib/
└── utils.ts        ✅ Implementado — función cn()

public/
├── images/
│   └── avatar.jpg / avatar.png   ✅ Foto de Daniel
└── cv.pdf                         ✅ CV de Daniel (fuente de verdad)
```

---

## Decisiones de diseño tomadas — NO cambiar sin consultar

### Navegación
- **Single-page app** con scroll suave. NO rutas separadas por sección.
- Excepción futura: páginas de detalle de proyectos (`/projects/[slug]`)
- Secciones con IDs: `#home`, `#about`, `#projects`, `#experience`, `#contact`

### Dock (navbar)
- Posición: `fixed bottom-8` centrado horizontalmente
- Estilo: glassmorphism (`bg-deep-surface/60 backdrop-blur-md`)
- Icono activo: se eleva (`y: -8`) y escala (`scale: 1.2`)
- Transición entre activos: `layoutId="dock-active"` de Framer Motion
- Detección de sección activa: `IntersectionObserver` con `threshold: 0.5`
- Tooltips en hover con `AnimatePresence`
- Solo iconos, sin texto permanente visible

### Fondo — SpotlightBackground
- Canvas con tres capas de gradiente radial que siguen el cursor
- Suavizado con lerp 0.08 (la luz tiene inercia)
- Se pausa con `visibilitychange` cuando la pestaña no está activa
- `pointer-events-none` y `z-0` — nunca interfiere con el contenido

### Hero
- Layout horizontal: texto a la izquierda, espiral animada en el centro, foto a la derecha
- Foto circular con `ring-2 ring-deep-accent/50`
- Badge "DISPONIBLE PARA PROYECTOS" con punto verde animado arriba
- Animación de entrada: `staggerChildren` Framer Motion
  - Ease: `[0.25, 0, 0, 1]` — ease-out limpio, sin rebotes
  - Duración: `0.5s`, Stagger: `120ms`, Offset Y: `35px`

### About
- Layout: dos columnas en desktop (`lg:grid-cols-[1fr_1.2fr]`), stack en columna en móvil
- Columna izquierda sticky (`lg:sticky lg:top-32`) con el texto personal
- Columna derecha: skills agrupados por categoría (Frontend/Backend/Database/Cloud/Tools)
- Cada skill pill tiene el color real de la tecnología con glow en hover
- Animación: `whileInView` con `once: true, amount: 0.2`
- Ambient glow decorativo en el fondo derecho

---

## Convenciones de código

- Componentes interactivos (eventos de browser) → `"use client"` como primera línea
- Usar siempre `cn()` de `lib/utils.ts` para clases condicionales de Tailwind
- Imágenes con `<Image>` de Next.js, nunca `<img>` nativo
- Event listeners siempre se limpian en el `return` del `useEffect`
- Mouse position → `useRef`, no `useState` (evita re-renders innecesarios)
- Datos de contenido (proyectos, experiencia) → archivos `data/*.ts`, nunca hardcodeados en componentes
- Constante de ease reutilizable: `const EASE = [0.25, 0, 0, 1] as const`

---

## Secciones pendientes

### Projects (`#projects`)
- Datos en `data/projects.ts`: título, descripción, stack[], github, demo, imagen, featured
- Componente reutilizable `ProjectCard.tsx`
- Mostrar 3-5 proyectos destacados con demo en vivo
- Posible expansión futura: ruta `/projects/[slug]` para detalle

### Experience (`#experience`)
- Datos en `data/experience.ts`
- Experiencia real disponible en el CV (ver arriba o `/public/cv.pdf`)
- Layout tipo timeline vertical

### Contact (`#contact`)
- Formulario con EmailJS (sin backend)
- Campos: nombre, email, mensaje
- Links a GitHub y LinkedIn visibles

### Toggle de tema (pendiente)
- Posición: esquina inferior izquierda (no interferir con el dock)
- Dark (por defecto) ↔ Light
- `darkMode: "class"` ya configurado en Tailwind

---

## Warnings conocidos — ignorar

- `Image with "fill" is missing "sizes" prop` → añadir
  `sizes="(max-width: 768px) 100vw, 128px"` al componente Image del Hero para resolverlo.
