// tailwind.config.js
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
        spaceGrotesk: ['Space Grotesk'],
      },
      colors: {
        redInputErrors: 'hsl(0, 100%, 66%)',
        white: 'hsl(0, 0%, 100%)',
        lightGrayishViolet: 'hsl(270, 3%, 87%)',
        darkGrayishViolet: 'hsl(279, 6%, 55%)',
        veryDarkViolet: 'hsl(278, 68%, 11%)',
        // Slate
        // 'accent-brand-800': '#1e293b',
        // 'accent-brand-700': '#334155',
        // 'accent-brand-600': '#475569',
      },
      screens: {
        minTall450: { raw: '(min-height: 450px)' },
        minTall320: { raw: '(min-height: 320px)' },
        maxTall450: { raw: '(max-height: 450px)' },
        maxTall320: { raw: '(max-height: 320px)' },
        // => @media (min-height: 800px) { ... }
      },
      backgroundImage: {
        bgCardFront: "url('/src/images/bg-card-front.png')",
        bgCardBack: "url('/src/images/bg-card-back.png')",
        bgMainDesktop: "url('/src/images/bg-main-desktop.png')",
      },
    },
  },
  plugins: [],
};

export default config;
