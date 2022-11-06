/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        'brand-green': '#55A833',
        'light-gray': '#f5f5f5',
        'light-black': '#3A3A3A',
        // 'a11y-1': '#ae1424',
        // 'a11y-2': '#c5ea5f',
        // maroon-ish

        // 'a11y-1': '#5c2521',
        // 'a11y-2': '#cdd448',
        // brown-ish

        // 'a11y-1': '#3f1157',
        // 'a11y-2': '#e2ea5a'
        // purple

        'a11y-1': '#4e0039',
        'a11y-2': '#f98210',

      },
      fontFamily: {
        'heading': ['"Libre Baskerville"'],
        'body': ['Raleway'],
      }
    },
  },
  corePlugins: {
    aspectRatio: false
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
