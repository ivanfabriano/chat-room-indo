/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "main": "#db3a34"
      },
      colors: {
        "main": "#db3a34"
      }
    },
  },
  plugins: [],
};
