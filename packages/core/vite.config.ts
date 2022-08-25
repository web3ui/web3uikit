/// <reference types="vitest" />

import { defineConfig, UserConfigExport } from 'vite';
import config from './node_modules/@web3uikit/config/vite.config';

export default defineConfig({
    ...(config(__dirname, [
        'react',
        'react-dom',
        'react-router-dom',
    ]) as UserConfigExport),
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['../../setup.ts'],
        coverage: { reporter: ['text', 'json', 'html'] },
    },
});
