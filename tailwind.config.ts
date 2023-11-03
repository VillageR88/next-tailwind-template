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
        spaceGrotesk: ['Space Grotesk'],
      },
      colors: {
        // Slate
        // 'accent-brand-800': '#1e293b',
        // 'accent-brand-700': '#334155',
        // 'accent-brand-600': '#475569',
      },
      screens: {
        minTall450: { raw: '(min-height: 450px)' },
        minTall320: { raw: '(min-height: 320px)' },
        maxTall450: { raw: '(max-height: 450px)' },
        maxTall320: { raw: '(max-height: 320px)' },
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  plugins: [],
};

export default config;
