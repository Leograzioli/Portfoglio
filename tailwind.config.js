/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'primary': '#f6f6f6',
        'primary-dark': '#1c2634',
        'secondary': '#9ca3af',
        'secondary-dark': '#353535'
    },
    },
  },
  plugins: [],
}

