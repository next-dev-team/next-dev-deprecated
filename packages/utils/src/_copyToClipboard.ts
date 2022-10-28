import { _isClient } from './_isClient';
import { _isFunction } from './_isFunction';
import { Fn, Recordable } from './_types';

export default async function copyToClipboard(
  text: string,
  msgFn: Recordable | Fn,
  successText: string = 'Copied',
) {
  if (_isClient) {
    try {
      await navigator.clipboard.writeText(text);
      if (_isFunction(msgFn)) {
        msgFn?.();
      } else if (msgFn?.success) {
        msgFn?.success(successText);
      }
    } catch (e) {
      console.log('copyToClipboard', e);
    }
  }
  throw Error('copyToClipboard working only in client');
}
