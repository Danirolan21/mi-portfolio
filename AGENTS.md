<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
# Portfolio de Daniel Rodriguez — Contexto del proyecto

## Stack tecnológico
- **Framework**: Next.js (App Router) con TypeScript
- **Estilos**: Tailwind CSS con paleta personalizada
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Contacto**: EmailJS (pendiente de implementar)
- **Despliegue**: Vercel

---

## Paleta de colores — Deep Sea

Definida en `tailwind.config.ts` y `globals.css`:

| Token Tailwind      | Hex       | Uso                                      |
|---------------------|-----------|------------------------------------------|
| `deep-base`         | `#0D1B2A` | Fondo base de toda la web                |
| `deep-surface`      | `#1B263B` | Cards, navbar, elementos elevados        |
| `deep-accent`       | `#415A77` | Acentos, bordes activos, spotlight       |
| `deep-muted`        | `#778DA9` | Texto secundario, iconos inactivos       |
| `deep-text`         | `#E0E1DD` | Texto principal                          |

Siempre usar estos tokens. Nunca hardcodear colores hex directamente en componentes.

---

## Arquitectura de la app
```
app/
├── layout.tsx         # SpotlightBackground + Dock envuelven toda la app
├── page.tsx           # Single-page: une todas las secciones
└── globals.css

components/
├── sections/
│   ├── Hero.tsx       ✅ Implementado
│   ├── About.tsx      ⏳ Pendiente
│   ├── Projects.tsx   ⏳ Pendiente
│   ├── Experience.tsx ⏳ Pendiente
│   └── Contact.tsx    ⏳ Pendiente
└── ui/
    ├── Dock.tsx            ✅ Implementado
    ├── SpotlightBackground.tsx ✅ Implementado
    ├── ProjectCard.tsx     ⏳ Pendiente
    └── Button.tsx          ⏳ Pendiente

data/
├── projects.ts    ⏳ Pendiente — array de proyectos
└── experience.ts  ⏳ Pendiente — array de experiencia

lib/
└── utils.ts       ✅ Implementado — función cn()
```

---

## Decisiones de diseño tomadas (no cambiar sin consultar)

### Navegación
- **Single-page app** con scroll suave. NO rutas separadas por sección.
- El único caso para rutas separadas sería páginas de detalle de proyectos (`/projects/[slug]`) en el futuro.
- Secciones con IDs: `#home`, `#about`, `#projects`, `#experience`, `#contact`

### Dock (navbar)
- Posición: `fixed bottom-8` centrado horizontalmente
- Estilo: glassmorphism (`bg-deep-surface/60 backdrop-blur-md`)
- Comportamiento activo: icono se eleva (`y: -8`) y escala (`scale: 1.2`)
- Transición entre activos: `layoutId="dock-active"` de Framer Motion (NO cambiar este mecanismo)
- Detección de sección activa: `IntersectionObserver` con `threshold: 0.5`
- Tooltips: aparecen en hover con `AnimatePresence`
- Iconos: solo iconos, sin texto visible permanente

### Fondo
- Componente `SpotlightBackground.tsx` con canvas
- Tres capas de gradiente radial que siguen el cursor con suavizado (lerp 0.08)
- Se pausa automáticamente con `visibilitychange` cuando la pestaña no está activa
- `pointer-events-none` y `z-0` — nunca interfiere con el contenido

### Hero
- Layout: columna centrada, máximo `max-w-xl`
- Foto circular con `ring-2 ring-deep-accent/50`
- Animación de entrada: `staggerChildren` con Framer Motion
  - Ease: `[0.25, 0, 0, 1]` (ease-out limpio, sin rebotes)
  - Duración: `0.5s`
  - Stagger: `120ms` entre elementos
  - Offset Y inicial: `35px`
- Orden de elementos: foto → nombre → descripción → botones → redes

---

## Convenciones de código

- Todos los componentes interactivos (eventos de browser) llevan `"use client"` como primera línea
- Usar siempre `cn()` de `lib/utils.ts` para combinar clases condicionales de Tailwind
- Imágenes con el componente `<Image>` de Next.js, nunca `<img>` nativo
- Event listeners siempre se limpian en el `return` del `useEffect`
- Mouse position tracked con `useRef`, no `useState`, para evitar re-renders innecesarios

---

## Secciones pendientes y notas

### About (`#about`)
- Layout: texto a la izquierda, stack/skills a la derecha
- Skills como badges o iconos con nombre
- Tono: personal, no un CV aburrido

### Projects (`#projects`)
- Los datos viven en `data/projects.ts`, no hardcodeados en el componente
- Cada proyecto tiene: título, descripción, stack[], github url, demo url, imagen
- Componente reutilizable `ProjectCard.tsx`
- Mostrar 3-5 proyectos destacados

### Experience (`#experience`)
- Los datos viven en `data/experience.ts`
- Layout tipo timeline vertical

### Contact (`#contact`)
- Formulario con EmailJS (sin backend)
- Campos: nombre, email, mensaje
- Links a GitHub y LinkedIn visibles

### Toggle de tema (pendiente)
- Posición: esquina inferior izquierda, sin molestar al dock
- Cambiar entre dark (por defecto) y light
- Tailwind `darkMode: "class"` ya está configurado

---

## Warnings conocidos a ignorar
- `Image with "fill" is missing "sizes" prop` — advertencia de rendimiento, no error. 
  Se resuelve añadiendo `sizes="(max-width: 768px) 100vw, 128px"` al componente Image del Hero.