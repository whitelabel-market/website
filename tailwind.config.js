module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-secondary": "#333333",
        "dark-terniary": "#666666",
        "white-secondary": "#E9E9E9",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
