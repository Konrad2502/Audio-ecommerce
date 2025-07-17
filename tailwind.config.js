/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        lightprimary: "#FBAF85",
        dark: "#101010",
        blackprimary: "#000000",
        greyprimary: "#F1F1F1",
        lightgrey: "#FAFAFA",
        whiteprimary: "#FFFFFF"
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
};