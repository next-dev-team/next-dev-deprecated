export type TWithFalse<T> = T | false;

/**
 * Key value abbreviation
 */
export type TKeyValue<
  ValueType = any,
  KeyType extends string | number | symbol = string,
> = Record<KeyType, ValueType>;
