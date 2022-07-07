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
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
