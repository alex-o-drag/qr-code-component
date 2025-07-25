import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: '/qr-code-component/',

    server: {
      host: true,
      port: 3000,
    },

    build: {
      outDir: 'dist',
    },
  };
});
