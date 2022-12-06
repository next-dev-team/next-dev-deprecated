import { lorem, _dateUtils } from '@next-dev/utils/es';
import { ICardProps } from './CardBlog1';

export const mockCardBlog1 = (
  item?: ICardProps['dataItems'],
  isLongContent?: boolean,
): ICardProps['dataItems'] => {
  return {
    description: lorem.generateSentences(isLongContent ? 4 : 1),
    title: lorem.generateWords(5),
    date: _dateUtils.dateYYYY_MM_DD_H_M_A(undefined as any),
    cover:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ...item,
  };
};
