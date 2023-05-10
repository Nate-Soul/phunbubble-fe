/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderWidth:{
        '16': '16px',
      },
      height:{
        '0.5px': '0.5px',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
        '7': '7 7 0%',
      },
      colors: {
        'main': '#7df9ff',
        'main-100': '#70e0e5',
        'main-200': '#64c7cc',
        'main-300': '#57aeb2',
        'main-400': '#4b9599',
        'main-500': '#3e7c7f',
        'main-600': '#326366',
        'main-700': '#254a4c',
        'main-800': '#193133',
        'main-900': '#0c1819',
        'secondary': '#ff837d',
        'secondary-100': '#e57570',
        'secondary-200': '#cc6864',
        'secondary-300': '#b25b27',
        'secondary-400': '#994e4b',
        'secondary-500': '#7f413e',
        'secondary-600': '#663432',
        'secondary-700': '#4c2725',
        'secondary-800': '#331a19',
        'secondary-900': '#190d0c',
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
