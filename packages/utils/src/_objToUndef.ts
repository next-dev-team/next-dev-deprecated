import type { Many } from 'lodash';
import type { ObjectKeys } from './_types';
import { _omit } from './__omit';

/**
 * remove object key to undefine with exclude key (pick like)
 * @param obj
 * @param rest
 * @returns
 */
export function objToUndef<T extends object, U extends keyof T>(
  obj: T,
  ...rest: Array<Many<U>>
) {
  const newObj = _omit(obj, ...rest);

  Object.keys(newObj).forEach(
    (key) => ((obj as unknown as ObjectKeys)[key] = undefined),
  );
  return obj;
}
