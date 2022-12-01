const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/container/**/*.{js,ts,jsx,tsx}',
    './src/constants/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translate(300%, 0)', opacity: 0 },
          '50%': { transform: 'translate(100%, 0)', opacity: 1 },
          to: { transform: 'translate(0, 0)', opacity: 0 },
        },
      },
      animation: {
        'bounce-full':
          'scroll 2.56s cubic-bezier(0.645, -0.5, 0.355, 1) infinite',
      },
      colors: {
        brand: '#ff4b32',
        yellow: {
          DEFAULT: '#e0ccbb',
        },
        purple: {
          DEFAULT: '#e4cbcb',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
