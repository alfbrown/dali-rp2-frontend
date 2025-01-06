module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./index.html",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}

