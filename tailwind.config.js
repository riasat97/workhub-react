/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7E90FE',
        secondary: '#757575',
        darkis: '#474747',
      },
      backgroundImage: {
        'btn': "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)",
        'banner': "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)",
        'icon': "linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%)",
        'category': " linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%);"
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

