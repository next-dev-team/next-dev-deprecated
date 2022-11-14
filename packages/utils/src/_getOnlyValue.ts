import { _pickBy } from './_pickBy';

/**
remove null ,undefined empty string
 * @param values
 */
export default function _getOnlyValue<T>(values: T): T {
  return _pickBy(
    values || {},
    (v) => v !== null && v !== undefined && v !== ' ' && v !== 'null',
  ) as T;
}
