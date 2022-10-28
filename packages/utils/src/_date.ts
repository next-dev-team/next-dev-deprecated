import dayjs from 'dayjs';

/**
 *
 * @param date
 * @returns 22-09-08 5:26:01 pm
 */
const dateYYYY_MM_DD_H_M_A = (date: string) =>
  dayjs(date).format('YY-MM-DD h:mm a');

/**
 *
 * @param date
 * @returns 22-09-08 5:26:01 pm
 */
const dateYYYY_MM_DD_H_M_S_A = (date: string) =>
  dayjs(date).format('YY-MM-DD h:mm:ss a');

export const _dateUtils = {
  dateYYYY_MM_DD_H_M_A,
  dateYYYY_MM_DD_H_M_S_A,
};
