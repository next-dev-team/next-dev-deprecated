import reduce from 'lodash/reduce';
import { TKeyValue } from '../types';

/**
 * Convert array object to object object
 * @param items Array to convert
 * @param key as the property name of the key, the default is 'label'
 * @example listToFlat([{label:'label1',value:'001'},{label:'label2',value:'002'}],'value','label')==>{'001' :'label1','002':'label2'}])
 * @returns TKeyValue
 * @summary It is recommended to use with the memoize method to avoid unnecessary conversion and improve performance
 */
export function listToFlat<T extends []>(
  items: T[],
  key: string | number = 'value',
  text: string = 'label',
) {
  return reduce(
    items,
    (redu: TKeyValue<string, string>, item) => {
      const reduKey = item[key as any];
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      redu[reduKey] = item[text];
      return redu;
    },
    {},
  );
}
