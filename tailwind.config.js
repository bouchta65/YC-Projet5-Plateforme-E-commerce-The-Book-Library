/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customYellow: '#F9F073',
        customblack: '#5D7285',
        customblue: '#0C7FDA',
        customblaack : '#131313',
        custemgray: '#727272',
        custemgraytext : '#E2E6E9',
        customblue: '#0C7FDA'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Lora','Roboto'],

    },
  },
  plugins: [],
}}