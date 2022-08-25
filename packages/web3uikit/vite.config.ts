import { defineConfig } from 'vite';
import config from './node_modules/@web3uikit/config/vite.config';

export default defineConfig({
    ...config(__dirname, [
        'react',
        'react-dom',
        'react-router-dom',
        'moralis',
        'react-moralis',
        '@walletconnect/web3-provider',
        '@web3auth/web3auth',
    ]),
});
