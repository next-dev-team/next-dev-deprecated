const { theme } = require('app/design/tailwind/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
    '../../node_modules/@showtime-xyz/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('nativewind/tailwind/css')],
  important: 'html',
  theme: {
    ...theme,
  },
}
