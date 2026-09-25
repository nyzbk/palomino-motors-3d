/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: '#0a0c10',
          card: '#12161f',
          surface: '#181e2a',
          border: '#2a3242',
          gold: '#c5a059',
          goldLight: '#e4c88a',
          goldMuted: '#9e7d3b',
          linen: '#f4efe8',
          sand: '#d9cdbe',
          charcoal: '#111317',
          warmGray: '#8a8f99',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cinzel"', 'serif'],
      },
      letterSpacing: {
        widest: '.2em',
        luxury: '.25em',
      }
    },
  },
  plugins: [],
}
