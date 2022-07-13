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
        serif: ['Space Grotesk', ...defaultTheme.fontFamily.serif],
        sans: ['Qanelas', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: '#ff4b32',
        gray: {
          50: '#BABABA',
          100: '#B0B0B0',
          200: '#9C9C9C',
          300: '#878787',
          400: '#737373',
          500: '#5E5E5E',
          600: '#4A4A4A',
          700: '#363636',
          800: '#212121',
          900: '#0D0D0D',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
