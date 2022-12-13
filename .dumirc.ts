import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
  tailwindcss: {},
  locales: [
    { id: 'en-US', name: 'EN', suffix: '' },
    // { id: 'kh-Km', name: 'ខ្មែរ', suffix: '-km' },
  ],

  alias: {
    '@next-dev/utils/es': require.resolve('./packages/utils/src'),
  },
  // apiParser: {},
  resolve: {
    // Configure the entry file path, API parsing will start from here
    // entryFile: './packages/utils/src/index.ts',
    // auto generate docs
    atomDirs: [
      // utils
      { type: 'lib', dir: 'packages/utils/src' },
      { type: 'lib', dir: 'packages/utils/' },

      // antd-ui
      { type: 'ui', dir: 'packages/antd-ui/src' },
      { type: 'ui', dir: 'packages/antd-ui/' },

      // TW UI
      { type: 'tw-ui', dir: 'packages/ui/src' },
      { type: 'tw-ui', dir: 'packages/ui/' },

      //  lint
      { type: 'lint', dir: 'packages/eslint-config-custom' },

      //config
      { type: 'config', dir: 'packages/configs' },
    ],
  },
  extraBabelPresets: ['@emotion/babel-preset-css-prop'],
  favicons: [
    'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
  ],
  // autoAlias: false,
  outputPath: 'dist',
  publicPath: '/next-dev/',
  base: '/next-dev/',
  themeConfig: {
    name: 'Next Dev',
    logo: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
    footer: `Open-source MIT Licensed | Copyright © 2019-${new Date().getFullYear()}<br /> Powered by Next Dev`,
  },
  ssr: process.env.NODE_ENV === 'development' ? false : {},
  chainWebpack(config, { webpack }) {
    config.module.rule('ts-in-node_modules').include.clear();
    //Introduce global public methods
    config.plugin('$global').use(
      // https://webpack.js.org/plugins/provide-plugin/
      new webpack.ProvidePlugin({
        DumiCode: [
          resolve('.dumi/tmp/dumi/theme/builtins/SourceCode.ts'),
          'default',
        ],
        DumiDocLayout: [
          resolve('.dumi/tmp/dumi/theme/layouts/DocLayout.ts'),
          'default',
        ],
      }),
    );

    return config;
  },
});
