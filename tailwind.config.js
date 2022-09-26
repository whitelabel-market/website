const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/container/**/*.{js,ts,jsx,tsx}',
    './src/constants/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Area', ...defaultTheme.fontFamily.serif],
        sans: ['Area', ...defaultTheme.fontFamily.sans],
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
