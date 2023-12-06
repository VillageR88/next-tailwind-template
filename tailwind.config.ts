import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundSize: {
      '100%': '100%',
      '75%': '75%',
      '50%': '50%',
      '16': '4rem',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        inter: 'Inter',
      },
      colors: {
        darkBlue: 'hsl(240, 38%, 20%)',
        grayishBlue: 'hsl(240, 18%, 77%)',
      },
    },
  },
  plugins: [],
};

export default config;
