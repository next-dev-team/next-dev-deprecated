import { lorem, _dateUtils } from '@next-dev/utils/es';
import { ICardBlog2Props } from './component';

export const mockCardBlog1 = (
  item?: ICardBlog2Props['dataItems'],
  isLongContent?: boolean,
): ICardBlog2Props['dataItems'] => {
  return {
    linkText: 'Read more',
    link: 'https://nextjs.org/blog',
    linkTarget: '_blank',
    onClickLink: () => {
      alert('Read more');
    },
    description: lorem.generateSentences(isLongContent ? 4 : 1),
    title: lorem.generateWords(5),
    date: _dateUtils.dateYYYY_MM_DD_H_M_A(undefined as any),
    cover:
      'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    ...item,
  };
};
