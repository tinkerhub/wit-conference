/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      colors: {
        'primary': '#204289',
        'secondary': '#EAAF20',
        'accent': '#F6F5F5',
      },
      fontFamily: {
        'body': ['Satoshi-Regular', 'Arial', 'sans-serif'],
        'title': ['ClashDisplay-Regular', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

