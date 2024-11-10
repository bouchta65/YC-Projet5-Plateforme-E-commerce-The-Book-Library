/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customYellow: '#F9F073',
        customblack: '#5D7285',
        customblue: '#0C7FDA',
      },
    },
  },
  plugins: [],
}

