import { defineConfig } from 'vite';
import config from './node_modules/@web3uikit/config/vite.config';

export default defineConfig({ ...config(__dirname) });
