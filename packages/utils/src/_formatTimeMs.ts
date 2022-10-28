import { FormattedTime } from './_types';

/**
 *
 * @param milliseconds
 * @example const { hoursString, minuteString, secondsString } = _formatTimeMs(ms) || {};
 * @description output: eg: hoursString => 01
 */
export default function _formatTimeMs(milliseconds = 0): FormattedTime & {
  secondsString: string;
  minuteString: string;
  hoursString: string;
} {
  const ms = Math.floor(milliseconds / 1000) % 60;
  const mn = Math.floor(milliseconds / 60000) % 60;
  const h = Math.floor(milliseconds / 3600000) % 24;
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: h,
    minutes: mn,
    seconds: ms,
    milliseconds: Math.floor(milliseconds) % 1000,
    secondsString: ms.toString().padStart(2, '0'),
    minuteString: mn.toString().padStart(2, '0'),
    hoursString: h.toString().padStart(2, '0'),
  };
}
