/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#532B79',
        'secoundary':'#FA4A6F',
      }
    },
  },
  plugins: [require("daisyui")],
}