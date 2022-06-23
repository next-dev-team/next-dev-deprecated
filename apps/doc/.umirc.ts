import { defineConfig, IConfig } from 'dumi';
// more config: https://d.umijs.org/config
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  title: 'Next Dev',
  mode: 'site',
  chainWebpack(config, {}) {
    config.module.rule('ts-in-node_modules').include.clear();
    return config;
  },
  styles: [isProd ? `./tailwind-prod.css` : ''],
  scripts: [!isProd ? 'https://cdn.tailwindcss.com' : ''],
  exportStatic: {},
  base: '/next-dev',
  publicPath: '/next-dev/',
} as IConfig);
