/**
 * Used to automatically intercept and add characters whose length exceeds the specified number...
 */
export default function textEllipsis(text: string, length: number) {
  if (text.length > length && length > 0) {
    return `${text.substring(0, length)}...`;
  }
  return text;
}
