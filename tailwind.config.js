module.exports = {
  content: ["./pages/**/*.{html,js}", "./scripts/**/*.{js}"],
  safelist: [
    'customYellow', 'customblack', 'customblue', // add any other needed classes
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#F9F073',
        customblack: '#5D7285',
        customblue: '#0C7FDA',
        customblaack: '#131313',
        custemgray: '#727272',
        custemgraytext: '#E2E6E9',
        custembleumenu: '#4B6587',
      },
    },
  },
  plugins: [],
};
