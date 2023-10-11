/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-white": "#F8F7ED",
        primary: "#9C9ED8",
        secondary: "#E2E1B6",
        accent: "#f7b955",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
