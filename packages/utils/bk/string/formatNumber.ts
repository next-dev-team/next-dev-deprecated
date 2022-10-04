/**
 * format numbers
 * @param value
 * @param dots decimal places
 */
export default function formatNumber(value?: number | string, dots = 4) {
  if (value) {
    if (typeof value === 'string' && !Number.isNaN(+value)) {
      return Number(value).toFixed(dots);
    } else if (typeof value === 'number') {
      return Number(value).toFixed(dots);
    }
  }
  return '0';
}
