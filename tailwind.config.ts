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
        barlowCondensed: 'Barlow Condensed',
        barlow: 'Barlow',
      },
      colors: {
        //### Primary
        red: 'hsl(0, 100%, 68%)',
        //### Neutral
        veryDarkBlue: 'hsl(230, 29%, 20%)',
        darkGrayishBlue: 'hsl(230, 11%, 40%)',
        grayishBlue: 'hsl(231, 7%, 65%)',
        lightGrayishBlue: 'hsl(207, 33%, 95%)',
      },
    },
  },
  plugins: [],
};

export default config;
