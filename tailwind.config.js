/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Usa 'class' para modo oscuro por defecto si añades 'dark' al <html> o <body>
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-base": "rgb(var(--color-dark-base) / <alpha-value>)",
        "dark-card": "rgb(var(--color-dark-card) / <alpha-value>)",
        "text-primary": "rgb(var(--color-text-primary) / <alpha-value>)",
        "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
        gold: "rgb(var(--color-gold) / <alpha-value>)",
        "gold-light": "rgb(var(--color-gold-light) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
