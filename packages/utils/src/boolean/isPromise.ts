/**
 * Determine if the object is of type Promise
 * @param {any} obj The object to be judged
 * @returns {boolean} true if true, false otherwise
 */
export default function isPromise(obj: any): boolean {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  );
}
