/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      'agnoslightblue':'#67d9fa',
      'agnosblue':'#0691e0',
      'agnosdarkblue':'#075fd2',
    },
    },
  },
  plugins: [],
}