/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './.dumi/**/*.tsx',
    '.dumi/**/*.tsx',
    './docs/**/*.tsx',
    'docs/**/*.tsx',
    './docs/**/*.{js,ts,jsx,tsx,md}',
    './node_modules/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {},
};
