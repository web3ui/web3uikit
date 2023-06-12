/// <reference types="vitest" />

import { defineConfig, UserConfigExport } from 'vite';
import config from '../config/vite.config';
import cssModules from 'vite-plugin-css-modules';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
    ...(config(__dirname, ['react', 'react-dom']) as UserConfigExport),
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['../../setup.ts'],
        coverage: { reporter: ['text', 'json', 'html'] },
    },
    plugins: [
        reactRefresh(),
        cssModules({
            generateScopedName: '[name]__[local]___[hash:base64:5]',
        }),
    ],
    css: {
        modules: {
            scopeBehaviour: 'local',
            localsConvention: 'camelCase',
        },
        preprocessorOptions: {
            scss: {
                additionalData: '@use "./src/styles/global.scss";',
            },
        },
    },
});
