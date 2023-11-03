// tailwind.config.js
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        // Slate
        // 'accent-brand-800': '#1e293b',
        // 'accent-brand-700': '#334155',
        // 'accent-brand-600': '#475569',
      },
      screens: {
        minTall1: { raw: '(min-height: 800px)' },
        minTall2: { raw: '(min-height: 600px)' },
        maxTall2: { raw: '(max-height: 600px)' },
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  plugins: [],
};

export default config;
