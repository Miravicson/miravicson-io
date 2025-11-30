import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      xs: "481px",
      ssm: "550px",
      sm: "640px",
      md: "768px",
      bmd: "992px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "primary-text-color": "#333",
        "paragraph-text-color": "#333",
        "secondary-text-color": "#777",
        "light-subdued-elements-color": "#fff",
        "subdued-elements-color": "#fff",
        "very-subdued-elements-color": "#fff",
        "top-background-color": "#fff",
        "bottom-background-color": "#f1f1f1",
        "error-color": "#da2626",
        "dark-tiles": "#333",
        "d-primary-text-color": "#fff",
        "d-paragraph-text-color": "#ccc",
        "d-secondary-text-color": "#999",
        "d-light-subdued-elements-color": "rgba(255, 255, 255, 0.4)",
        "d-subdued-elements-color": "rgba(255, 255, 255, 0.15)",
        "d-very-subdued-elements-color": "rgba(255, 255, 255, 0.09)",
        "d-top-background-color": "#161616",
        "d-bottom-background-color": "#000",
        "d-error-color": "#ff7060",
        "d-dark-tiles": "#222",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      gridTemplateColumns: {
        "articles-card-container": "repeat(auto-fill, minmax(250px, 1fr))",
        article: "25% auto",
      },
      fontFamily: {
        display: ["var(--font-ibm)", "Arial", "sans-serif", "system-ui"],
        special: ["var(--font-gt-pressura-mono)", "monospace"],
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
      lineClamp: {
        10: "10",
        12: "12",
      },
      keyframes: {
        "slide-fwd": {
          "0%": {
            "-webkit-transform": "translateZ(0px)",
            transform: "translateZ(0px)",
          },
          "100%": {
            "-webkit-transform": "translateZ(160px)",
            transform: "translateZ(160px)",
          },
        },
      },
      animation: {
        "slide-fwd":
          " slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
    },
  },
  variants: {
    extend: {
      lineClamp: ["hover", "responsive"],
    },
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
