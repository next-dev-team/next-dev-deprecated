import { defineConfig } from 'dumi';
import rehypeAntd from './.dumi/rehypeAntd';

export default defineConfig({
  locales: [
    { id: 'en-US', name: 'EN', suffix: '' },
    { id: 'kh-Km', name: 'ខ្មែរ', suffix: '-km' },
  ],
  resolve: {
    // auto generate
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
      { type: 'config', dir: 'packages/tsconfig' },
    ],
  },
  extraRehypePlugins: [rehypeAntd],
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
    footer: `Open-source MIT Licensed | Copyright © 2019-present<br /> Powered by Next Dev />`,
  },
  ssr: process.env.NODE_ENV === 'development' ? false : {},
});
