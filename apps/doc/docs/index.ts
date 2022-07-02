import { antdComponentNav } from './antd-components';
import { componentMenu, componentNav } from './components';
import { introduceNav, introduceMenu } from './introduce';
import { utilMenu, utilsNav } from './utils';

export const navs = [...introduceNav, componentNav, antdComponentNav, utilsNav];

export const menus = {
  ...introduceMenu,
  ...componentMenu,
  ...utilMenu,
};
