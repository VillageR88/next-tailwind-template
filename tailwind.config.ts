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
        inter: 'Inter',
      },
      colors: {
        //## Colors
        //### Primary
        limeGreen: 'hsl(163, 72%, 41%)',
        brightRed: 'hsl(356, 69%, 56%)',
        facebook: 'hsl(208, 92%, 53%)',
        tTwitter: 'hsl(203, 89%, 53%)',
        instagram: 'linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)',
        youTube: 'hsl(348, 97%, 39%)',
        //#### Dark Theme
        toggleDark: 'linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)',
        //#### Light Theme
        toggleLight: 'hsl(230, 22%, 74%)',
        //### Neutral
        //#### Dark Theme
        veryDarkBlue_BG: 'hsl(230, 17%, 14%)',
        veryDarkBlue_Top_BG_Pattern: 'hsl(232, 19%, 15%)',
        darkDesaturatedBlue_Card_BG: 'hsl(228, 28%, 20%)',
        desaturatedBlue_Text: 'hsl(228, 34%, 66%)',
        whiteText: 'hsl(0, 0%, 100%)',
        //#### Light Theme
        white_BG: 'hsl(0, 0%, 100%)',
        veryPaleBlue_Top_BG_Pattern: 'hsl(225, 100%, 98%)',
        lightGrayishBlue_Card_BG: 'hsl(227, 47%, 96%)',
        darkGrayishBlue_Text: 'hsl(228, 12%, 44%)',
        veryDarkBlue_Text: 'hsl(230, 17%, 14%)',
      },
    },
  },
  plugins: [],
};

export default config;
