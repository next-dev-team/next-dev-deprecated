/**
 * @description Get Key name of a value from Object
 * @param {Object} obj
 * @param {string | number} value
 * @returns {string} Object key name based on passed value
 * @example
 * getKeyNameByValue({name: "Person", age: 30}, 30);
 * // return age
 *
 * getKeyNameByValue({name: "Person", age: 30}, 'Person');
 * // return name
 *
 * getKeyNameByValue({name: "Person", age: 30}, 'age');
 * // return null
 */
export default function getKeyNameByValue(
  obj: { [x: string]: any },
  value: string | number,
): string | null {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (obj[prop] === value) {
        return prop;
      }
    }
  }
  return null;
}
