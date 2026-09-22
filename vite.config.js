import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/landing-page/',
  
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        catalogue: resolve(__dirname, 'catalogue.html'),
      },
    },
  },
});