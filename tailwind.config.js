/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'psauto-black': '#121212',
        'psauto-yellow': '#FFD700'
      }
    },
  },
  plugins: [],
}