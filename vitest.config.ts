import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { PluginOption } from 'vite';

export default defineConfig({
    plugins: [react() as PluginOption],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./setup.ts'],
        coverage: { reporter: ['text', 'json', 'html'] },
    },
});
