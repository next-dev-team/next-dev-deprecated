// const plugin = require('tailwindcss/plugin');

module.exports = {
  important: true,
  content: [
    './docs/**/*.tsx',
    './packages/ui/**/*.tsx',
    './packages/antd-ui/**/*.tsx',
  ],
  plugins: [require('@tailwindcss/line-clamp')],
  corePlugins: {
    preflight: false,
  },
};
