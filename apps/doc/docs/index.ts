import { antdComponentNav } from './antd-components';
import { componentMenu, componentNav } from './components';
import { introduceNav, introduceMenu } from './introduce';
import { utilMenu, utilsNav } from './utils';

export const navs = [...introduceNav, componentNav, antdComponentNav, utilsNav, { title: 'Credit', path: 'https://github.com/next-dev-team/awesome-tailwind' },];

export const menus = {
  ...introduceMenu,
  ...componentMenu,
  ...utilMenu,
};
