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
        openSans: 'Open Sans',
      },
      colors: {
        //### Primary
        veryDarkBlue: 'hsl(243, 87%, 12%)',
        desaturatedBlue: 'hsl(238, 22%, 44%)',
        //### Accent
        brightBlue: 'hsl(224, 93%, 58%)',
        moderateCyan: 'hsl(170, 45%, 43%)',
        //### Neutral
        lightGrayishBlue: 'hsl(240, 75%, 98%)',
        lightGray: 'hsl(0, 0%, 75%)',
      },
    },
  },
  plugins: [],
};

export default config;
