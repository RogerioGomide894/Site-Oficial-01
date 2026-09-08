import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ── Paleta harmonizada ──────────────────────────────────────────
        // Primária: navy profundo
        navy: {
          DEFAULT: "#0b1e4a",
          mid:     "#1d3461",
          light:   "#163066",
          faint:   "#e6ecf8",
        },
        // Acento único: verde-menta
        mint: {
          DEFAULT: "#10b981",
          dark:    "#0d9268",
          light:   "#e8f5f0",
          faint:   "#edf4f0",
        },
        // Neutros
        ink: {
          DEFAULT: "#1a2233",
          muted:   "#5a6478",
          subtle:  "#8b93a5",
        },
        paper: {
          DEFAULT: "#f8f9fb",
          dark:    "#111827",
        },
        line: {
          DEFAULT: "#e2e6ef",
          dark:    "#2d3748",
        },
        // Mantém aliases legados para compatibilidade de testes
        accent: {
          green:  "#10b981",
          navy:   "#0b1e4a",
          orange: "#10b981", // laranja → mint (unificado)
        },
        muted: { DEFAULT: "#5a6478" },
      },
      fontFamily: {
        sans:    ["var(--font-manrope)", "Manrope", "Arial", "sans-serif"],
        display: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        mono:    ["var(--font-mono)", "DM Mono", "monospace"],
      },
      animation: {
        marquee:      "marquee 30s linear infinite",
        "tech-float": "techFloat 3.5s ease-in-out infinite",
        float:        "float 6s ease-in-out infinite",
        "fade-up":    "fadeUp 0.55s cubic-bezier(.16,1,.3,1) forwards",
      },
      keyframes: {
        float:     { "50%": { transform: "translateY(-10px) rotate(2deg)" } },
        marquee:   { to:    { transform: "translateX(-50%)" } },
        techFloat: { "50%": { transform: "translateY(-7px)" } },
        fadeUp:    {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "none" },
        },
      },
      boxShadow: {
        card:    "0 1px 3px rgba(11,30,74,0.06), 0 4px 12px rgba(11,30,74,0.06)",
        "card-hover": "0 4px 16px rgba(11,30,74,0.10), 0 1px 3px rgba(11,30,74,0.06)",
        float:   "0 14px 28px rgba(11,30,74,0.15)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
