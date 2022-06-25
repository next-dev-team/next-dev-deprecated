/**
 * A collection of configuration files containing prettier, eslint, stylelint
 */

/** @format */
const strictEslint = require('@umijs/fabric/dist/eslint');
const softyEslint = require('@umijs/fabric/dist/softyEslint');
const stylelint = require('@umijs/fabric/dist/stylelint');
const prettier = require('@umijs/fabric/dist/prettier');

module.exports = {
  stylelint,
  prettier,
  strictEslint,
  eslint: softyEslint,
  default: softyEslint,
};

export {};
