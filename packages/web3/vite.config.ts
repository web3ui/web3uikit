import { defineConfig, UserConfigExport } from 'vite';
import config from './node_modules/@test_kit_4/config/vite.config';

export default defineConfig({
    ...(config(__dirname, [
        'react',
        'react-dom',
        'moralis',
        'react-moralis',
    ]) as UserConfigExport),
});
