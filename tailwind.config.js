/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#2a9ede",
        tertiary: "#30e8fa"
      }
    },
  },
  plugins: [],
}

