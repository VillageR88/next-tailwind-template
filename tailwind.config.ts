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
        epilogue: ['Epilogue', 'sans-serif'],
      },
      colors: {
        darkBlue: '#172339',
        grey: '#49566D',
        cream: '#F3EDE7',
        creamWhite: '#FAF8F6',
        linear1: '#A060FF',
        linear2: '#CB30E3',
        linear3: '#FFA84E',
      },
    },
  },
  plugins: [],
};

export default config;
