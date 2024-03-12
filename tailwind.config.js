/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.html", "./src/**/*.ts", "./src/**/*.scss", "./build/**/*.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#204289',
        'secondary': '#EAAF20',
        'accent': '#F6F5F5',
      }
    },
  },
  plugins: [],
}

