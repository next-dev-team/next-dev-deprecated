import { _isObject } from './_isObject';

/**
 * check whether obj can be merged or not
 * @param item
 * @see https://github.com/antfu/utils/blob/7570fb0dddf22d54504370c552c4b3a52389cfe6/src/object.ts#L105
 */
export default function _isMergableObject(item: any): item is Object {
  return _isObject(item) && !Array.isArray(item);
}
