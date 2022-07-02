export default function dataToOption(
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
