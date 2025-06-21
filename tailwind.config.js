/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        fredoka: ['Fredoka One', 'cursive'],
        oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}