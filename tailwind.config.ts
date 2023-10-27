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
        sans: ['var(--font-sans)', 'sans'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        tomato: 'hsl(4, 100%, 67%)',
        'dark-slate-grey': 'hsl(234, 29%, 20%)',
        'charcoal-grey': 'hsl(235, 18%, 26%)',
        grey: 'hsl(231, 7%, 60%)',
        white: 'hsl(0, 0%, 100%)',
        // Pozostałe kolory, które już masz zdefiniowane
        // 'accent-brand-800': '#1e293b',
        // 'accent-brand-700': '#334155',
        // 'accent-brand-600': '#475569',
      },
    },
  },
  plugins: [],
};

export default config;
