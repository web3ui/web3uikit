// https://storybook.js.org/addons/storybook-dark-mode
import { themes } from '@storybook/theming'; // Importd theming addon.
import { create } from '@storybook/theming'; // Imports addon to create custom themes (i.e. moralislightTheme).

const moralislightTheme = create({
    base: 'light',
    appBg: '#F2F6FF',
    colorPrimary: '#21BF96',
    colorSecondary: '#21BF96',
    appContentBg: '#F2F6FF',
    barBg: '#F2F6FF',
    iFrame: '#F2F6FF',
    brandImage:
        'https://moralis.io/wp-content/uploads/2021/06/Powered-by-Moralis-Badge-Black.svg', // **Moralis Team**
}); // Rename, edit or remove these objects completely for different results.

const moralisdarkTheme = create({
    base: 'dark',
    appBg: '#041836',
    colorPrimary: '#21BF96',
    colorSecondary: '#21BF96',
    appContentBg: '#041836',
    barBg: '#041836',
    iFrame: '#041836',
    brandImage:
        'https://moralis.io/wp-content/uploads/2021/06/Powered-by-Moralis-Badge-Glass.svg', // **Moralis Team** This image can be uploaded to this repository and mapped locally.
}); // Rename, edit or remove these objects completely for different results.

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
    // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
    actions: { argTypesRegex: '^on.*' },
    backgrounds: {
        default: 'page',
        values: [
            {
                name: 'page',
                value: '#FFFFFF',
            },
            {
                name: 'footer',
                value: '#041836',
            },
            {
                name: 'body',
                value: '#F2F6FF',
            },
            {
                name: 'blue',
                value: '#2E7DAF',
            },
            {
                name: 'green',
                value: '#21BF96',
            },
            {
                name: 'red',
                value: '#EB5757',
            },
            {
                name: 'yellow',
                value: '#ECA609',
            },
        ],
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    //https://storybook.js.org/addons/storybook-dark-mode
    darkMode: {
        // Override the default dark and light theme
        dark: moralisdarkTheme, // Defaults to 'themes.dark', will need to remove 'const moralisdarkTheme' from preview.js
        light: moralislightTheme, // Defaults to 'themes.normal', will need to remove 'const moralislightTheme' from preview.js
        Current: 'light', //Apply a dark and light class name to the manager. This allows you to easily write dark mode aware theme overrides for the storybook UI.
        darkClass: 'lights-out',
        lightClass: 'lights-on',
        //Apply the darkClass and lightClass classes to the preview iframe
        stylePreview: true,
    },
};
