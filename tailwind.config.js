/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        hero: "linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(45,85,255,0.5)) ,url('/public/bg.jpg')",
      }
    },
  },
  plugins: [],
}
