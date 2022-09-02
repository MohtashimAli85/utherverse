/** @type {import('tailwindcss').Config} */
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
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        animo: ["animo", "sans-serif"],
      },
      backgroundImage: {
        nature: "url('/cards/nature.png')",
      },
    },
  },
  plugins: [],
};
