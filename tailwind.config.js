/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7e20fc",
        liver: "#4d4c50",
        "soft-blue": "#598ff1",
        night: "#0d0e12",
        "light-gold": "#f1e559",
        "dark-grey": "#363943",
        "dark-purple": "#2a0b53",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        animo: ["animo", "sans-serif"],
      },
      backgroundImage: {
        nature: "url('/cards/nature.png')",
      },
      screens: {
        xs: { min: "400px", max: "640px" },
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
