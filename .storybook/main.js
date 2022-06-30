module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
    typescript: {
        check: true, // type-check stories during Storybook build
    },
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config) => {
        const Polyfill = require('node-polyfill-webpack-plugin');
        config.plugins = [...config.plugins, new Polyfill()];
        return config;
    },
};
