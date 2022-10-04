import regex from '../regex';

/**
 * Determine if the given string is a url address
 * @param path address
 * @returns {boolean} true if true, false otherwise
 */
const isUrl = (path: string): boolean => regex.urlRegexp.test(path);
export default isUrl;
