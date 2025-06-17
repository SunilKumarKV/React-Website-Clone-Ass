// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        // Brand colors
        "brand-black": "#121212",
        "brand-white": "#FFFFFF",
        "brand-red": "#E33932",
        "brand-gray-400": "#999999",
        "brand-gray-800": "#333333",

        // Semantic tokens (for border-border, text-foreground, etc.)
        border: "hsl(240 5% 84%)",
        input: "hsl(240 5% 84%)",
        ring: "hsl(240 5% 64%)",
        background: "hsl(0 0% 100%)",
        foreground: "hsl(240 10% 3.9%)",

        // Optional dark mode tokens
        muted: "hsl(240 4.8% 95.9%)",
        "muted-foreground": "hsl(240 3.8% 46.1%)",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
