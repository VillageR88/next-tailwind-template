import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm4: '320px',
        sm3: '400px',
        sm2: '480px',
        sm1: '576px',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        roboto: ['Roboto'],
        baloo: ['Baloo'],
        varelaRound: ['Varela Round'],
        materialDesignIcons: ['Material Design Icons'],
      },
      colors: {
        // Slate
        // 'accent-brand-800': '#1e293b',
        // 'accent-brand-700': '#334155',
        // 'accent-brand-600': '#475569',
      },
    },
  },
  plugins: [],
};

export default config;
