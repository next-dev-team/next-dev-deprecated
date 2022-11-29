import type { Many } from 'lodash';
import _omit from '../_omit';
import type { ObjectKeys } from '../_types';

/**
 *
 * pick object with include key otherwise will be undefined
 * @param obj
 * @param rest
 * @returns
 */
export default function _objToUndef<T extends object, U extends keyof T>(
  obj: T,
  ...rest: Array<Many<U>>
) {
  const newObj = _omit(obj, ...rest);

  Object.keys(newObj).forEach(
    (key) => ((obj as unknown as ObjectKeys)[key] = undefined),
  );
  return obj;
}

