/**
 * Type guard for any key, `k`.
 * Marks `k` as a key of `T` if `k` is in `obj`.
 *
 * @category Object
 * @param obj object to query for key `k`
 * @param k key to check existence in `obj`
 * @see https://github.com/antfu/utils/blob/7570fb0dddf22d54504370c552c4b3a52389cfe6/src/object.ts#L40
 */
export default function _isKeyOf<T extends object>(
  obj: T,
  k: keyof any,
): k is keyof T {
  return k in obj;
}
