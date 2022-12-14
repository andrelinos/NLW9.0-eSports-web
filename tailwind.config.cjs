/** @type {import('tailwindcss').Config} */

const imageBg = './assets/background-galaxy.png';
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },

    extend: {
      backgroundImage: {
        // prettier-ignore
        // eslint-disable-next-line quote-props, quotes
        galaxy: "url('/assets/background-galaxy.png')",
        'nlw-gradient':
          'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)',
        'game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      },
      colors: {
        brand: {
          fuchsia: {
            600: '#C026D3',
            700: '#A21CAF',
            800: '#86198F',
          },
          purple: {
            50: '#A855F7',
            600: '#9333EA',
          },
          zinc: {
            700: '#3F3F46',
            800: '#27272A',
            900: '#18181B',
          },
          white: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
