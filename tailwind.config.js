/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#fab44c',
        'secondary-color': '#262626',
        'dark-grey': '#1b1b1b',
        'green': '#61c96f',
        'red': '#f94141',
        'grey': '#888',
        'white': '#f3f3f3',
      },
    },
  },
  plugins: [],
}

