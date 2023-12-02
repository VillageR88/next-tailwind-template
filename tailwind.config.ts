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
        barlowSemiCondensed: 'Barlow Semi Condensed',
      },
      colors: {
        moderateViolet: 'hsl(263, 55%, 52%)',
        veryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
        veryDarkBlackishBlue: 'hsl(219, 29%, 14%)',
        white: 'hsl(0, 0%, 100%)',
        //### Neutral
        lightGray: 'hsl(0, 0%, 81%)',
        lightGrayishBlue: 'hsl(210, 46%, 95%)',
        //Note for text colors:
        //1. "Verified Graduate" has the same color as the person's name with 50% opacity
        //2. Review paragraphs inside the quotations have the same color as well, but are at 70% opacity
      },
    },
  },
  plugins: [],
};

export default config;
