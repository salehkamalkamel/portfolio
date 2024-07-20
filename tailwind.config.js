/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: "#64ffda",
        "teal-300": "#4fd1c5",
        "teal-400": "#38b2a0",
        darkBlue: "#0a192f",
        lightBlue: "#112240",
        lighterBlue: "#233554",
        white: "#E2E8f0",
        lightGray: "#94A3B8",
        gray: "#8892b0",
        darkGray: "#a8b2d1",
        pink: "#ff647f",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
