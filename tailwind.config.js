module.exports = {
  content: [
    './docs/**/*.tsx',
    './packages/ui/**/*.tsx',
    './packages/antd-ui/**/*.tsx',
  ],
  plugins: [require('@tailwindcss/line-clamp')],
  corePlugins: {
    preflight: false, // conflicts with antd button need to custom preflight css in tailwind.css
  },
};
