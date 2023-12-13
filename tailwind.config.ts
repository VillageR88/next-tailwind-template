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
        raleway: 'Raleway',
        openSans: 'Open Sans',
      },
      colors: {
        //### Primary
        darkBlueIntro_email_sign_up_background: 'hsl(217, 28%, 15%)',
        darkBlueMain_background: 'hsl(218, 28%, 13%)',
        darkBlueFooter_background: 'hsl(216, 53%, 9%)',
        darkBlueTestimonials_background: 'hsl(219, 30%, 18%)',
        //### Accent
        cyanInside_call_to_action_gradient: 'hsl(176, 68%, 64%)',
        blueInside_call_to_action_gradient: 'hsl(198, 60%, 50%)',
        lightRedError: 'hsl(0, 100%, 63%)',
        //### Neutral
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
