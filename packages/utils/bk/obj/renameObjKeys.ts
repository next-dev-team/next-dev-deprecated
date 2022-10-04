/**
 * @description Replaces the names of multiple object keys
 * with the values provided
 * @param {Object} keysMap
 * @param {Object} obj
 * @returns {Object} New object with updated key names
 * @example
 * const obj = { name: 'John', job: 'Front-End Master', shoeSize: 100 };
 * renameObjKeys({ name: 'firstName', job: 'passion' }, obj);
 * Output: return { firstName: 'John', passion: 'Front-End Master', shoeSize: 100 }
 */
export default function renameObjKeys(
  keysMap: { [x: string]: any },
  obj: { [x: string]: any },
): object {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {},
  );
}
