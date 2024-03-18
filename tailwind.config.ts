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
        outfit: ['Outfit', 'sans-serif'],
        bigShouldersDisplay: ['Big Shoulders Display', 'sans-serif'],
      },
      colors: {
        almostBlack: '#151515',
        white: '#ffffff',
        darkGrey: '#444444',
        gold: '#D5966C',
      },
    },
  },
  plugins: [],
};

export default config;
