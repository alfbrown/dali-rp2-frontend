module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./index.html",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1800px',
      '4xl': '1900px',
      '5xl': '2100px',
      '6xl': '2400px',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}

