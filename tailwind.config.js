/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3FB885',
        secondary: '#0B1120',
        accent: '#FE992F',
      },
    },
  },
  plugins: [],
};