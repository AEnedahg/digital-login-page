/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html',
  '*.js'],
  theme: {
    width: {
      'xs': '320px',
      'sm': '375px',
      'md': '475px',
      'lg': '640px',
      'xl': '768px',
      '2xl': '1024px',
      '3xl': '1280px',
      '4xl': '1440px',
      '5xl': '1536px',
      '6xl': '1800px',   
    },
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '475px',
      'lg': '640px',
      'xl': '768px',
      '2xl': '1024px',
      '3xl': '1280px',
      '4xl': '1440px',
      '5xl': '1536px',
      '6xl': '1800px',
    },
    extend: {
      colors: {
        'brandPrimary-300': '#0C31F1',
        'brandPrimary-500': '#3751FE',
        'neutral-0': '#FFFFFF',
        'neutral-100': '#F4F4F4',
        'neutral-200': 'rgba(0, 0, 0, 0.2)',
        'neutral-400': 'rgba(0, 0, 0, 0.6)',
        'neutal-1000': '#000000',
      },
      fontFamily: {
        'sans-secondary': ['Open Sans', 'sans-serif'],
        'sans-primary': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



