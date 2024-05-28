import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/understanding-ts-todo-list/',
  root: 'src',
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  build: {
    minify: true,
    assetsInlineLimit: 0,
    outDir: '../dist',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
