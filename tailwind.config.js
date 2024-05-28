/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': {'max': '1180px'}
      },
      colors: {
        'tGray': '#7A7A7A',
        'btnColor': '#292929',
        'bgTask': '#1C1C1C',
        'btnOrange': '#E63E21',
        'tWhite': '#F7E3D9',
        'iconsTask': '#333',
        'inputBorderColor': '#1C1C1C',
        'inputTextColor': '#2B2B2B',
        'bgComplete': '#0FF1A5'

      }
    },
  },
  plugins: [],
}

