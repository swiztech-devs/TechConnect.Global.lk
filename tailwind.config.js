/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B2E83",
        secondary: "#4A89C8",
        accent: "#FBBF24",
      },
    },
  },
  plugins: [],
};