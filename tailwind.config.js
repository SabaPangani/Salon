/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#633CFF",
        "purple-hover": "#BEADFF",
        "light-purple": "#EFEBFF",
        dark: "#333333",
        gray: "#737373",
        "light-gray": "#D9D9D9",
        "dark-white": "#FAFAFA",
        red: "#FF3939",
        border: "#d5d7da"
      },
    },
  },
  plugins: [],
};
