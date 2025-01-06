/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js}",
            "./index.js"],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FFF8E1',
        'custom-green': '#03443E',
        'custom-pink': '#FCF7D1',
        'custom-contact-container': '#14505c',
        'custom-google': '#DB4437',
      },
      fontFamily: {
        'agency': ['Agency FB', 'sans-serif'],
        'italiana': ['Italiana', 'serif'],
      },
  },
  plugins: [],
}
}

