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
        rubik: 'Rubik',
      },
      colors: {
        //### Primary
        moderateBlue: 'hsl(238, 40%, 52%)',
        softRed: 'hsl(358, 79%, 66%)',
        lightGrayishBlue: 'hsl(239, 57%, 85%)',
        paleRed: 'hsl(357, 100%, 86%)',
        //### Neutral
        darkBlue: 'hsl(212, 24%, 26%)',
        grayishBlue: 'hsl(211, 10%, 45%)',
        lightGray: 'hsl(223, 19%, 93%)',
        veryLightGray: 'hsl(228, 33%, 97%)',
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
