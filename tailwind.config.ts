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
        poppins: 'Poppins',
        openSans: 'Open Sans',
      },
      colors: {
        //### Primary
        pink: 'hsl(322, 100%, 66%)',
        lightPink: 'hsl(321, 100%, 78%)',
        lightRed: 'hsl(0, 100%, 63%)',
        //### Neutral
        veryDarkCyan: 'hsl(192, 100%, 9%)',
        veryPaleBlue: 'hsl(207, 100%, 98%)',
      },
    },
  },
  plugins: [],
};

export default config;
