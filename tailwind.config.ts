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
        raleway: 'Raleway',
      },
      colors: {
        //### Primary
        gradient: 'hsl(6, 100%, 80%) to hsl(335, 100%, 65%)',
        //### Neutral
        paleBlue: 'hsl(243, 100%, 93%)',
        grayishBlue: 'hsl(229, 7%, 55%)',
        darkBlue: 'hsl(228, 56%, 26%)',
        veryDarkBlue: 'hsl(229, 57%, 11%)',
      },
    },
  },
  plugins: [],
};

export default config;
