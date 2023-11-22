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
        overpass: 'Overpass',
        ubuntu: 'Ubuntu',
      },
      colors: {
        //## Colors
        //### Primary
        lightRedCTAText: 'hsl(356, 100%, 66%)',
        veryLightRedCTAHoverBackground: 'hsl(355, 100%, 74%)',
        veryDarkBlueHeadings: 'hsl(208, 49%, 24%)',
        //### Neutral
        whiteText: 'hsl(0, 0%, 100%)',
        grayishBlueFooterText: 'hsl(240, 2%, 79%)',
        veryDarkGrayishBlueBodyCopy: 'hsl(207, 13%, 34%)',
        VeryDarkBlackBlueFooterBackground: 'hsl(240, 10%, 16%)',
        //### Gradient
        //Background gradient - Intro/CTA mobile nav:
        veryLightRed: 'hsl(13, 100%, 72%)',
        lightRed: 'hsl(353, 100%, 62%)',
        //Background gradient - body:
        veryDarkGrayBlue: 'hsl(237, 17%, 21%)',
        veryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)',
      },
    },
  },
  plugins: [],
};

export default config;
