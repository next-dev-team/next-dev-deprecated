import { defineConfig, IConfig } from 'dumi';
// more config: https://d.umijs.org/config
const isProd = process.env.NODE_ENV === 'production';
import { navs, menus } from './docs';

export default defineConfig({
  title: 'Next Dev',
  mode: 'site',
  chainWebpack(config, { }) {
    config.module.rule('ts-in-node_modules').include.clear();
    return config;
  },
  scripts: [!isProd ? 'https://cdn.tailwindcss.com' : ''],
  //https://d.umijs.org/config#exportstatic
  exportStatic: {}, //
  // ssr: isProd ? {} : undefined // ssr need nodejs server if not just use exportStatic it will generate html fragments for SEO (search engine optimization) too
  base: '/next-dev',
  publicPath: '/next-dev/',
  targets: {
    chrome: 80,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  hash: true,
  navs,
  theme: {
    '@s-site-menu-width': '238px',
    '@root-entry-name': 'variable',
  },
  ignoreMomentLocale: true,
  externals: { darkreader: 'window.DarkReader', },
  menus,
  // mfsu: {
  //   development: {},
  //   production: {}
  // },
  webpack5: {},
  fastRefresh: {},
  dynamicImport: {},
  antd: {
    // dark: true,
  },
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
} as IConfig);
