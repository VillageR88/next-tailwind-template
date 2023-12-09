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
        montserrat: 'Montserrat',
      },
      colors: {
        linearGradient1: 'hsl(236, 72%, 79%)',
        linearGradient2: 'hsl(237, 63%, 64%)',
        //### Neutral
        veryLightGrayishBlue: 'hsl(240, 78%, 98%)',
        lightGrayishBlue: 'hsl(234, 14%, 74%)',
        grayishBlue: 'hsl(233, 13%, 49%)',
        darkGrayishBlue: 'hsl(232, 13%, 33%)',
      },
    },
  },
  plugins: [],
};

export default config;
