/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(156,206,173,255)',
        primary_dark: '#749c84',
        primary_darker: '#556a5a'
      }
    },
  },
  plugins: [],
}

