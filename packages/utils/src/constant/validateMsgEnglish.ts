/**
 * Predefined form validation messages
 */
const VALIDATE_MESSAGES = {
  default: 'Authentication failed',
  required: 'cannot be empty',
  enum: 'must be one of [${enum}]',
  whitespace: 'cannot be empty',
  date: {
    format: 'Not a valid date format',
    parse: 'Cannot convert to date format',
    invalid: 'Invalid date format',
  },
  types: {
    string: 'Only input string type',
    method: 'Only type "${type}" can be entered',
    array: 'Only type "${type}" can be entered',
    object: 'Only type "${type}" can be entered',
    number: 'Only enter numbers',
    date: 'Only a date can be entered',
    boolean: 'Only type "${type}" can be entered',
    integer: 'Only integers can be entered',
    float: 'Only numeric values ​​can be entered',
    regexp: 'The input does not match to go',
    email: 'The email format is incorrect',
    url: 'The url format is incorrect',
    hex: 'Only type "${type}" can be entered',
  },
  string: {
    len: 'must be ${len} characters',
    min: 'Cannot be less than ${min} characters',
    max: 'No more than ${max} characters',
    range: 'The number of characters is between ${min} - ${max}',
  },
  number: {
    len: 'The value can only be ${len}',
    min: 'Cannot be less than ${min}',
    max: 'Cannot be greater than ${max}',
    range: 'Only between ${min} - ${max}',
  },
  array: {
    len: 'Must select ${len} item',
    min: 'Cannot be less than ${min} items',
    max: 'No more than ${max} items',
    range: 'Must select between ${min} - ${max} items',
  },
  pattern: {
    mismatch: 'The input content does not meet the requirements',
  },
};

export default VALIDATE_MESSAGES;
