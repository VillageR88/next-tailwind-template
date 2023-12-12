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
        poppins: 'Poppins',
        openSans: 'Open Sans',
      },
      colors: {
        pink: 'hsl(322, 100%, 66%)',
        //### Neutral
        veryPaleCyan: 'hsl(193, 100%, 96%)',
        veryDarkCyan: 'hsl(192, 100%, 9%)',
        grayishBlue: 'hsl(208, 11%, 55%)',
      },
    },
  },
  plugins: [],
};

export default config;
