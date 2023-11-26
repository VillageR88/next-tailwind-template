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
        commissioner: 'Commissioner',
      },
      colors: {
        //### Primary
        moderateCyan: 'hsl(176, 50%, 47%)',
        darkCyan: 'hsl(176, 72%, 28%)',
        //### Neutral
        black: 'hsl(0, 0%, 0%)',
        darkGray: 'hsl(0, 0%, 48%)',
        customDark: 'hsla(0, 0%, 0%, 0.58)',
      },
    },
  },
  plugins: [],
};

export default config;
