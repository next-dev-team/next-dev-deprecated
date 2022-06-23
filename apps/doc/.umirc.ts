import { IConfig, defineConfig } from 'dumi';
// more config: https://d.umijs.org/config
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  title: 'Next Dev',
  mode: 'site',
  chainWebpack(config, {}) {
    config.module.rule('ts-in-node_modules').include.clear();
    return config;
  },
  scripts: [
    !isProd
      ? 'https://cdn.tailwindcss.com'
      : 'https://raw.githubusercontent.com/next-dev-team/next-dev/main/apps/doc/tailwind-prod.css',
  ],
  exportStatic: {},
  base: '/next-dev',
  publicPath: '/next-dev/',
} as IConfig);
