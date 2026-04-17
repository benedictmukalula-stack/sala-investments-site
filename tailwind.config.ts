import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-navy": "#0B1D35",
        "brand-gold": "#C8A75B",
        "brand-gold-light": "#D6B76E",
        "brand-grey": "#6B7280",
        "brand-grey-pale": "#F5F7FA"
      }
    }
  },
  plugins: []
} satisfies Config;
