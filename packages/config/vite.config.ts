import react from '@vitejs/plugin-react';
import { PluginOption } from 'vite';
import { UserConfigExport } from 'vite';
import dts from 'vite-plugin-dts';

/**
 * @param cwd
 * @param external packages as peer dependencies
 */
const config = (cwd: string, external?: string[]): UserConfigExport => {
    const cfg: UserConfigExport = {
        root: cwd,
        plugins: [
            react() as PluginOption,
            dts({ entryRoot: cwd + '/src', outputDir: cwd + '/dist' }),
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
    return cfg;
};
export default config;
