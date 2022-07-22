/// <reference types="vitest" />

import { defineConfig, UserConfigExport } from 'vite';
import config from './node_modules/@test_kit_3/config/vite.config';

export default defineConfig({
    ...(config(__dirname, ['react', 'react-dom']) as UserConfigExport),
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['../../setup.ts'],
        coverage: { reporter: ['text', 'json', 'html'] },
    },
});
