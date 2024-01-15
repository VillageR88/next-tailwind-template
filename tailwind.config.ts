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
        leagueSpartan: 'League Spartan',
      },
      colors: {
        grayishBlue: 'hsl(237, 18%, 59%)',
        softRed: 'hsl(345, 95%, 68%)',
        darkDesaturatedBlue: 'hsl(236, 21%, 26%)',
        veryDarkBlue: 'hsl(235, 16%, 14%)',
        veryDarkMostlyBlue: 'hsl(234, 17%, 12%)',
      },
    },
  },
  plugins: [],
};

export default config;
