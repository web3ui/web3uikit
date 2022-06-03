import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const { dependencies } = require('./package.json');
const vendor = Object.keys(dependencies);

const renderChunks = (deps: Record<string, string>) => {
  const chunks = {} as Record<string, string[]>;
  Object.keys(deps).forEach((key) => {
    if (vendor.includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
};

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          vendor,
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
