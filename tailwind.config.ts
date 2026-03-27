import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        deep: {
          base:      "#0D1B2A",  // fondo
          surface:   "#1B263B",  // cards, navbar
          accent:    "#415A77",  // spotlight, activos
          muted:     "#778DA9",  // texto secundario
          text:      "#E0E1DD",  // texto principal
        },
      },
    },
  },
  plugins: [],
}

export default config