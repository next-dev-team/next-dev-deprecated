const color = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './.dumi/**/*.tsx',
    '.dumi/**/*.tsx',
    './docs/**/*.tsx',
    'docs/**/*.tsx',
    './node_modules/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
