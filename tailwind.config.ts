import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff7ff',
          100: '#dceffe',
          200: '#b9defd',
          300: '#7cbcff',
          400: '#3994ff',
          500: '#0077b6',
          600: '#005f92',
          700: '#004b6f',
          800: '#033b5b',
          900: '#012c45'
        }
      },
      boxShadow: {
        glass: '0 20px 80px rgba(0, 119, 182, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
