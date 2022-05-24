module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/container/**/*.{js,ts,jsx,tsx}",
        "./src/constants/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Nunito Sans"', 'sans-serif']
            },
            colors: {
                brand: "#ff4b32",
            },
        },
    },
    plugins: [],
    darkMode: "class",
}
