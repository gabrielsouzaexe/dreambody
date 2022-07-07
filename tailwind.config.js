/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/components/**/*.tsx",
    "./src/pages/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat'],
      },
      backgroundImage: {
        initial: "url('/images/initial-bg.png')"
      },
      dropShadow: {
        '3xl': '2px 2px 5px #000'
      }
    },
  },
  plugins: [],
}
