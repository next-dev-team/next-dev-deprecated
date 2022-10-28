/**
 * convert array to antd select options format
 * @param enumData
 * @param label
 * @param value
 * @param lastLabe
 * @param firstLabe
 * @example dataToOption(['hello','1'], 'title', 'id')
 * @description output: [{ label: 'hello', value: '1'}]
 */
export default function _dataArrayToOption(
  enumData: any[] = [],
  label: string | number,
  value: string | number,
  lastLabe = '',
  firstLabe = '',
) {
  return enumData?.map((v: any) => {
    return {
      label: `${firstLabe} ${v?.[label]} ${lastLabe}`,
      value: v?.[value],
    };
  });
}
