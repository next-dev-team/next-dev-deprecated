import omitBy from 'lodash/omitBy';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';
import pickBy from 'lodash/pickBy';

/**
 * Delete the falsy key-value pair in the object
 * @param obj
 * @returns
 */
export function removeEmpty<T extends {}>(obj: T): T {
  return omitBy(
    {
      ...obj,
    },
    (item) => isNull(item) || isUndefined(item) || item === '',
  ) as any;
}

/**
remove null ,undefined empty string
 * @param values
 */
export function getOnlyValue<T>(values: T): T {
  return pickBy(
    values || {},
    (v) => v !== null && v !== undefined && v !== ' ' && v !== 'null',
  ) as any;
}
