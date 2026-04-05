import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const sansFallback = defaultTheme.fontFamily?.sans;
const serifFallback = defaultTheme.fontFamily?.serif;

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-deep": "#0A1628",
        "navy-mid": "#1B2B4B",
        "navy-accent": "#2E4A7A",
        gold: "#C9A84C",
        "gold-light": "#E8CC7A",
        "white-warm": "#F8F5F0",
        "white-pure": "#FFFFFF",
        charcoal: "#1A1A1A",
        "gray-light": "#E8E4DE",
        glass: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-body)", ...(sansFallback ?? [])],
        display: ["var(--font-display)", ...(serifFallback ?? [])],
        body: ["var(--font-body)", ...(sansFallback ?? [])],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s cubic-bezier(0.42, 0, 0.58, 1) forwards",
      },
    },
  },
} satisfies Config;
