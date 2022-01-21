module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        // https://storybook.js.org/addons/storybook-dark-mode
        'storybook-dark-mode', // Add following content to .storybook/main.js
    ],
    //If not appearing, clear the cached color scheme, you have to run localStorage.clear() in the chrome console, or trying clearing browser data.

    // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
    typescript: {
        check: true, // type-check stories during Storybook build
    },
};
