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
        karla: 'Karla',
        dMSerifDisplay: 'DM Serif Display',
      },
      colors: {
        //### Primary
        darkViolet: 'hsl(256, 26%, 20%)',
        grayishBlue: 'hsl(216, 30%, 68%)',
        //### Neutral
        veryDarkViolet: 'hsl(270, 9%, 17%)',
        darkGrayishViolet: 'hsl(273, 4%, 51%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
};

export default config;
