import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: { 900: '#5c0112', 700: '#82001e', 600: '#930322', 500: '#a30c2b' },
        cream: '#f3e5c0',
        paper: '#eae0d4',
        wax: '#76130e',
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
