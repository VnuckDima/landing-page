import { defineConfig } from 'vite';

export default defineConfig({
  base: '/landing-page/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        catalogue: 'catalogue.html',
      },
    },
  },
});