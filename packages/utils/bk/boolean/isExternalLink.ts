import regex from '../regex';

/**
 * @param {string} path
 * @returns {Boolean}
 */
export default function isExternal(path: string): boolean {
  return regex.isExternalLink.test(path);
}
