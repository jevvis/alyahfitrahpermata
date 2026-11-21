import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: { 900: '#0b1f5e', 700: '#17399a', 600: '#1c45b8', 500: '#2457d6' },
        cream: '#f3e5c0',
        paper: '#eae0d4',
        wax: '#17399a',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
