/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["PT Sans", "sans-serif"],
        ftrFont: ["Roboto", "serif"],
      },
      colors: {
        primary: "#1ed94f",
        secondary: "#f2f047",
        para: "#4b4f59",
      },
    },
  },
  plugins: [],
};
