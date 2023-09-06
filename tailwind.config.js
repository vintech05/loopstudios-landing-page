/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
      'mobile-l': '425px',
    extend: {
      fontFamily: {
        'Alata': ['Alata', 'sans-serif'],
        'Josefin': ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

