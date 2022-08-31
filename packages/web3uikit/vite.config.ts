import { defineConfig, UserConfigExport } from 'vite';
import config from './node_modules/@web3uikit/config/vite.config';

export default defineConfig({
    ...(config(__dirname, [
        'react',
        'react-dom',
        'react-router-dom',
        'moralis',
        'react-moralis',
    ]) as UserConfigExport),
});
