import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

import { UserConfigExport } from 'vite';
import dts from 'vite-plugin-dts';

/**
 *
 * @param cwd
 * @param external
 */
const config = (cwd: string, external?: string[]): UserConfigExport => {
  return {
    root: cwd,
    plugins: [
      react(),
      tsconfigPaths({ root: cwd }),
      dts({ entryRoot: cwd + "/src", outputDir: cwd + "/dist" }),
    ],
    build: {
      emptyOutDir: true,
      lib: {
        entry: cwd + '/src/index.ts',
        fileName: 'index',
        formats: ['es', 'cjs'],
      },
      outDir: cwd + '/dist',
      rollupOptions: {
        external,
      },
    },
  };
};
export default config;
