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
          50: '#B0B0B0',
          100: '#A6A6A6',
          200: '#919191',
          300: '#7D7D7D',
          400: '#696969',
          500: '#545454',
          600: '#404040',
          700: '#2B2B2B',
          800: '#171717',
          900: '#030303',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
