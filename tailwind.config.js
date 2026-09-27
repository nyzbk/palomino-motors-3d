/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'canvas': '#0A0B0E',
          'cyan': '#00F0FF',
          'redline': '#FF3319',
          'titanium': '#15171E',
          'polar': '#F2F5F8',
          'muted': '#6B7280',
          'border': 'rgba(0, 240, 255, 0.20)'
        }
      },
      fontFamily: {
        'display': ['Syncopate', 'sans-serif'],
        'body': ['Space Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
}
