module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  rules: {
    'react/jsx-no-undef': 0,
  },
  settings: {
    next: {
      rootDir: ['boilerplate/*/'],
    },
  },
};
