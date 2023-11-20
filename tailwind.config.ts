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
        barlow: 'Barlow',
        fraunces: 'Fraunces',
      },
      backgroundImage: {
        header: "url('./images/desktop/image-header.jpg')",
      },
      colors: {
        softRed: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        darkDesaturatedCyanGgraphicDesignText: 'hsl(167, 40%, 24%)',
        darkBluePhotographyText: 'hsl(198, 62%, 26%)',
        darkModerateCyanFooter: 'hsl(168, 34%, 41%)',
        veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
        veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
        darkGrayishBlue: 'hsl(232, 10%, 55%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
