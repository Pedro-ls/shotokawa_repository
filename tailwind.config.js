/** @type {import('tailwindcss').Config} */

const konstaConfig = require('konsta/config');

// wrap your config with konstaConfig
module.exports = konstaConfig({
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "ss": "7pt"
      },
      colors: {
        'd-orange': {
          50: '#ee7825',

          80: '#fe7755'
        },
        'd-black': {
          85: '#090808'
        },
        'gray-transparent': 'rgba(121, 121, 121, 0.15)',
        'black-transparent': 'rgba(0, 0, 0, 0.6)'
      }
    },
  },
  plugins: [

    require('@tailwindcss/forms'),

  ],
})
