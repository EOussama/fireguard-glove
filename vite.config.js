import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
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