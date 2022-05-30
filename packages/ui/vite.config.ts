import path from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

import { defineConfig } from 'vite';
const { name, version } = require('./package.json');

import dts from 'vite-plugin-dts';

export default defineConfig({
  define: {
    pkgJson: { name, version },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    // dts(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
    },
    outDir: './lib',
    rollupOptions: {
      // externalize deps that shouldn't be bundled
      external: ['react', 'react-dom'],
      output: {
        // global vars to use in UMD build for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
