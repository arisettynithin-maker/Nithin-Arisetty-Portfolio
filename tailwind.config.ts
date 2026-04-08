import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F8FAFC",
        ink: "#0F172A",
        muted: "#475569",
        line: "#E2E8F0",
        panel: "#FFFFFF",
        surface: "#020617",
        accent: {
          DEFAULT: "#2563EB",
          soft: "#DBEAFE",
          deep: "#1D4ED8"
        }
      },
      fontFamily: {
        sans: [
          "Avenir Next",
          "Segoe UI",
          "Helvetica Neue",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        serif: [
          "Iowan Old Style",
          "Palatino Linotype",
          "Book Antiqua",
          "Baskerville",
          "Georgia",
          "serif"
        ]
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15, 23, 42, 0.08)",
        lift: "0 24px 60px rgba(15, 23, 42, 0.14)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
