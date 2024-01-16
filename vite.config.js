import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      name: 'Firemitt',
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: format => `firemitt.${format}.js`
    },
    minify: true,
    emptyOutDir: true,
  }
})