const { sync: glob } = require('fast-glob');
const tsconfigPaths = require('vite-tsconfig-paths');

// do not change
const previewFolder = 'node_modules/.cache/storybook/public';

// create `cache` folder if not exists
require('fs').mkdirSync(previewFolder, { recursive: true });

/** @type {import('@storybook/builder-vite').StorybookViteConfig} */
module.exports = {
    stories: glob('packages/**/*.stories.@(js|jsx|ts|tsx)', {
        ignore: [
            'packages/**/node_modules/**/*',
            'packages/**/Icon.stories.tsx',
        ],
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
        builder: '@storybook/builder-vite',
        disableTelemetry: true,
    },
    features: {
        storyStoreV7: true,
    },
    async viteFinal(config, { configType }) {
        config.plugins.push(tsconfigPaths.default());
        config.resolve = {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
                fs: require.resolve('rollup-plugin-node-builtins'),
            },
        };
        return config;
    },
};
