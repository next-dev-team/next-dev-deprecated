import { _pickBy } from './_pickBy';

/**
remove null ,undefined, from obj
 * @param values
 */
export default function _removeNil<T>(values: T): T {
  return _pickBy(values || {}, (v) => v !== null && v !== undefined) as T;
}
