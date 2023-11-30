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
        manrope: 'Manrope',
      },
      colors: {
        //### Primary
        softCyan_FullSliderBar: 'hsl(174, 77%, 80%)',
        strongCyan_SliderBackground: 'hsl(174, 86%, 45%)',
        lightGrayishRed_DiscountBackground: 'hsl(14, 92%, 95%)',
        lightRed_Discount_Text: 'hsl(15, 100%, 70%)',
        paleBlue_CTA_Text: 'hsl(226, 100%, 87%)',
        //### Neutral
        white_PricingComponentBackground: 'hsl (0, 0%, 100%)',
        veryPaleBlue_MainBackground: 'hsl(230, 100%, 99%)',
        lightGrayishBlue_EmptySliderBar: 'hsl(224, 65%, 95%)',
        lightGrayishBlue_ToggleBackground: 'hsl(223, 50%, 87%)',
        grayishBlue_Text: 'hsl(225, 20%, 60%)',
        darkDesaturatedBlue_TextCTABackground: 'hsl(227, 35%, 25%)',
      },
    },
  },
  plugins: [],
};

export default config;
