import omitBy from 'lodash/omitBy';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';

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
