/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html"
  ],
  theme: {
    fontFamily: {
      "sans": ["Open Sans", "serif"]
    },
    extend: {
      colors: {
        "brand-mode": "#a2977b",
        "brand-dark": "#1c1c1d",
        "brand-darker": "#131313",
        "brand-light": "#f3f3f3",
      }
    },
  },
  plugins: [],
}

