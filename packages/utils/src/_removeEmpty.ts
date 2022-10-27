import omitBy from 'lodash-es/omitBy';
import isNull from 'lodash-es/isNull';
import isUndefined from 'lodash-es/isUndefined';

/**
 * Delete the falsy key-value pair in the object
 * @param obj
 * @returns
 */
export default function removeEmpty<T extends {}>(obj: T): T {
  return omitBy(
    {
      ...obj,
    },
    (item) => isNull(item) || isUndefined(item) || item === '',
  ) as any;
}
