/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0089d0',
        'secondary': '#f58220',
      },
      fontFamily: {
        gloria: ['Gloria Hallelujah', 'cursive'],
        josep: ['Josefin Sans', 'sans-serif'],
      },
      screens: {
        xs: '500px',
        '900': '900px',
      },
    },
  },
  plugins: [],
}
