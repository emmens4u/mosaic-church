/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        "dancing": ['Pacifico', 'cursive'],
        "sofia" : ['Sofia Sans', 'sans-serif'],
        "cedar": ['Cedarville Cursive', 'cursive']

      },
      backgroundImage:{
        'grid': "url('/assets/gridbackground.jpeg')",
      }
    },
  },
  plugins: [],
}

