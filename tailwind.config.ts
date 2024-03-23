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
        roboto: ['Roboto', 'sans-serif'],
        robotoFlex: ['Roboto Flex', 'sans-serif'],
        instrumentSans: ['Instrument Sans', 'sans-serif'],
        materialSymbolsOutlined: ['Material Symbols Outlined', 'sans-serif'],
      },
      colors: {
        gray1: '#121212',
      },
    },
  },
  plugins: [],
};

export default config;
