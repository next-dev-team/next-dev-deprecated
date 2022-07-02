/* eslint-disable no-console */
/** @module Logger */
const base =
  'font-size: 14px;' +
  'border-radius: 2px; color: #ffffff;' +
  'padding: 3px 5px 3px 5px; line-height: 16px;';
/**
 * Logs a message and object on console, use this instead of console.log
 * @param {string} message
 * @param {any} data
 * @example log('This is an apple', 'iPhone')
 */
export function log(message: any, data: any) {
  if (data) {
    console.log(`%c ${message} `, `${base} background: #001628;`, data);
  } else {
    console.log(`%c ${message} `, `${base} background: #001628;`);
  }
}

/**
 * Logs a deprecation message
 * @param message {string}
 * @param hard {boolean} - should this be a strong warning?
 * @example
 * logDeprecation('This method is about to deprecate')
 * logDeprecation('This method is about to deprecate', true)
 */
export function logDeprecation(message: any, hard: boolean = false) {
  if (hard) {
    console.error(
      '%c --------DEPRECATION WARNING--------',
      `${base} background: #dc3545;`,
      `\n${message}`,
    );
  } else {
    console.warn(
      '%c --------DEPRECATION WARNING--------',
      `${base} background: #ffc107;`,
      `\n ${message}`,
    );
  }
}

/**
 * Logs error on console, use this instead of console.log
 * @param {string} message
 * @param {string} error
 * @example logError('This is an error', '3+2=6')
 */
export function logError(message: any, error: any) {
  // always log errors, even in production env
  if (error) {
    console.error(`%c ${message} `, `${base} background: #dc3545;`, error);
  } else {
    console.error(`%c ${message} `, `${base} background: #dc3545;`);
  }
}
