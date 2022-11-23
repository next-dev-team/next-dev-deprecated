import { antdComponentNav } from './antd-components';
import { blogMenu, blogNav } from './blog';
import { componentMenu, componentNav } from './components';
import { introduceNav, introduceMenu } from './introduce';
import { utilMenu, utilsNav } from './utils';

export const navs = [
  ...introduceNav,
  ...blogNav,
  componentNav,
  antdComponentNav,
  utilsNav,
  {
    title: 'Github',
    path: 'https://github.com/next-dev-team/next-dev',
  },
  {
    title: 'Credit',
    path: 'https://github.com/next-dev-team/awesome-tailwind',
  },
];

export const menus = {
  ...introduceMenu,
  ...blogMenu,
  ...componentMenu,
  ...utilMenu,
};
