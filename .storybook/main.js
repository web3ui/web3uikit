const { sync: glob } = require('fast-glob');
const tsconfigPaths = require('vite-tsconfig-paths');

// do not change
const previewFolder = 'node_modules/.cache/storybook/public';

// create `cache` folder if not exists
require('fs').mkdirSync(previewFolder, { recursive: true });

// preview or build mode
const build = process.argv.pop() === 'wp5';

/** @type {import('@storybook/builder-vite').StorybookViteConfig} */
module.exports = {
    stories: glob('packages/**/*.stories.@(js|jsx|ts|tsx)', {
        ignore: ['packages/**/node_modules/**/*'],
        onlyFiles: true,
        absolute: true,
    }),
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: '@storybook/react',
    staticDirs: ['../' + previewFolder],
    typescript: {
        check: true,
    },
    core: {
        builder: build ? 'webpack5' : '@storybook/builder-vite',
        disableTelemetry: true,
    },
    features: {
        storyStoreV7: !build,
    },
    async viteFinal(config) {
        config.plugins.push(tsconfigPaths.default());
        config.resolve = {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
                fs: require.resolve('rollup-plugin-node-builtins'),
            },
        };
        config.optimizeDeps = {
            include: ['msw-storybook-addon'],
        };
        return config;
    },
    webpackFinal: async (config) => {
        const Polyfill = require('node-polyfill-webpack-plugin');
        config.plugins = [...config.plugins, new Polyfill()];
        return config;
    },
};
