/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/banner-bg.png')",
        'computer': "url('/src/assets/bg-mob.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}

