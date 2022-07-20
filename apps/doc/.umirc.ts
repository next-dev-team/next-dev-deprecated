import { defineConfig, IConfig } from 'dumi';
// more config: https://d.umijs.org/config
const isProd = process.env.NODE_ENV === 'production';
import { navs, menus } from './docs';
import { resolve } from "path";

export default defineConfig({
  title: 'Next Dev',
  mode: 'site',
  chainWebpack(config, { webpack }) {
    config.module.rule('ts-in-node_modules').include.clear();
    //Introduce global public methods
    config.plugin("$global").use(
      new webpack.ProvidePlugin({
        $cons: [resolve('constant/index.ts'), 'default'],
        $helper: [resolve('helper/global.ts'), 'default'],
        $sel: [resolve('stores/global.ts'), 'default']
      })
    );

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
  // make bundle size small
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      }, 'antd'

    ],
    [
      'import',
      {
        libraryName: '@ant-design/icons',
        camel2DashComponentName: false,
        customName: (transformedMethodName: string) => {
          // console.log('@ant-design/icons', transformedMethodName);

          if (transformedMethodName === 'default') {
            return '@ant-design/icons/es/components/Icon';
          }
          return `@ant-design/icons/es/icons/${transformedMethodName}`;
        },
      },
      "@ant-design/icons"
    ],
    ["prismjs", {
      "languages": ["javascript", "css", "markup"],
      "plugins": ["line-numbers"],
      "theme": "twilight",
      "css": true
    }]
    // [
    //   'import',
    //   {
    //     libraryName: 'ui/src',
    //     customName: (name: string) => {
    //       console.log('sila', name)

    //       return `ui/src/${name}`;
    //     },
    //   },
    //   'ui/src',
    // ],

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
  // dynamicImport: {},
  antd: {
    // dark: true,
  },
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
} as IConfig);
