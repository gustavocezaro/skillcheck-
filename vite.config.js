import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'site-source',
  server: {
    port: 3000,
    open: '/index-vite.html'
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'site-source/index-vite.html'
      }
    }
  }
});
