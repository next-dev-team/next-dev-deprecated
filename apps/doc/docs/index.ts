import { componentMenu, componentNav } from './components';
import { utilMenu, utilsNav } from './utils';

export const navs = [componentNav, utilsNav];

export const menus = {
  ...componentMenu,
  ...utilMenu,
};
