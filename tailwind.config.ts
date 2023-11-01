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
        plusJakartaSans: ['Plus Jakarta Sans'],
      },
      colors: {
        red: 'hsl(1, 90%, 64%)',
        blue: 'hsl(219, 85%, 26%)',
        white: 'hsl(0, 0%, 100%)',
        veryLightGrayishBlue: 'hsl(210, 60%, 98%)',
        lightGrayishBlue1: 'hsl(211, 68%, 94%)',
        lightGrayishBlue2: 'hsl(205, 33%, 90%)',
        grayishBlue: 'hsl(219, 14%, 63%)',
        darkGrayishBlue: 'hsl(219, 12%, 42%)',
        veryDarkBlue: 'hsl(224, 21%, 14%)',
      },
    },
  },
  plugins: [],
};

export default config;
