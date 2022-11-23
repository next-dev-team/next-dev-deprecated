import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts'],
  outDir: 'es',
  clean: true,
  format: ['esm'],
  minify: true,
  dts: true,
});
