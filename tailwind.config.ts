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
        dmSans: 'DM Sans',
      },
      colors: {
        softRed: 'hsl(10, 79%, 65%)',
        cyan: 'hsl(186, 34%, 60%)',
        darkBrown: 'hsl(25, 47%, 15%)',
        mediumBrown: 'hsl(28, 10%, 53%)',
        cream: 'hsl(27, 66%, 92%)',
        veryPaleOrange: 'hsl(33, 100%, 98%)',
        // Slate
        // 'accent-brand-800': '#1e293b',
        // 'accent-brand-700': '#334155',
        // 'accent-brand-600': '#475569',
      },
    },
  },
  plugins: [],
};

export default config;
